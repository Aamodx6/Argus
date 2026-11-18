import {ArchitectureStream} from './architecture-stream.mjs';
import {AnalysisOutputs} from './analysis-output.mjs';
import {AnalysisReview} from './analysis-review.mjs';
import {createAnalysisLayout,layoutAnalysisOutputs,boundsFor,STAGES,RUN_SPACING} from './analysis-layout.mjs';
import {NODE_WIDTH,NODE_HEIGHT,OUTPUT_IDS,edges,nodes as pipelineNodes} from './pipeline-model.mjs';
import {createCanvasNavigation} from './canvas-navigation.mjs';
import {createLiquidUpload} from './console-liquid.mjs';
import {libraryKey,loadLibrary,localVideo} from './console-library.mjs';
import {consoleRequest,getConsoleJob,legacyJob,submitConsoleJob,uploadConsoleVideo} from './console-api.mjs';
import {initializeSentimentApi} from './console-sentiment-api.mjs';
import {getSession} from './account-session.mjs';
import {updateAccountHeader} from './account-header.mjs';
import {createSpacePicker} from './space-picker.mjs';

const $=id=>document.getElementById(id),app=$('argus-flow'),viewport=$('flow-viewport'),camera=$('graph-camera'),world=$('pipeline-graph');
const reduced=()=>document.documentElement.dataset.motion!=='full'&&matchMedia('(prefers-reduced-motion:reduce)').matches;
const svgNS='http://www.w3.org/2000/svg';
const phase = {
  PENDING_MODERATION: [2, 'Safety checks in progress'],
  MODERATION_COMMITTING: [4, 'Finalizing safety checks'],
  ACCEPTED: [5, 'Job accepted'],
  QUEUED: [5, 'Queued for analysis'],
  SUBMITTING: [5, 'Starting analysis'],
  RUNNING: [6, 'Analyzing video'],
  LEGACY_RUNNING: [6, 'Analyzing on SageMaker'],
  REVIEW_COMMITTING: [4, 'Finalizing review'],
};
const terminal = {
  BLOCKED: 'Video blocked', FAILED: 'Analysis failed', REVIEW: 'Video needs review',
  EXPIRED: 'Job expired',
};
const transform=view=>`translate(${view.x}px,${view.y}px) scale(${view.scale})`;
const outputTitles=new Map(pipelineNodes.filter(node=>node.output).map(node=>[node.id,node.title]));
const wideOutputs=matchMedia('(min-width: 880px)');

class AnalysisRun {
  constructor(workspace,entry,file){
    const {index,row,seed}=entry;
    let state=seed;
    const random=()=>((state=(Math.imul(1664525,state)+1013904223)>>>0)/4294967296);
    Object.assign(this,createAnalysisLayout(index,innerWidth<800,random),{workspace,index,entry,result:null,title:entry.title,stage:0,stageText:'Preparing',complete:false});
    this.offset=row*RUN_SPACING;
    this.source=file?URL.createObjectURL(file):null;
    this.positionLocalVideo();
    this.abort=new AbortController();
    this.states=new Map(this.nodes.map(node=>[node.id,'idle']));
    this.root=document.createElement('section');this.root.className='analysis-graph';this.root.dataset.analysis=String(index);
    this.root.style.transform=`translateY(${this.offset}px)`;this.root.setAttribute('aria-label',this.title);
    const label=document.createElement('h2');label.className='analysis-canvas-title';label.textContent=this.title;this.root.append(label);
    const wires=document.createElementNS(svgNS,'svg');wires.classList.add('graph-wires');wires.setAttribute('width','9000');wires.setAttribute('height','1200');wires.setAttribute('aria-hidden','true');this.root.append(wires);
    world.append(this.root);
    this.outputs=new AnalysisOutputs({root:this.root,getVideo:()=>this.video,onReadMore:()=>workspace.review.open(this,this.outputs.index),isCompact:()=>innerWidth<800});
    this.stream=new ArchitectureStream({graph:this.root,wires,template:$('architecture-node-template'),nodes:this.nodes,edges,nodeWidth:NODE_WIDTH,nodeHeight:NODE_HEIGHT,wirePath:this.wirePath,reduced,idPrefix:`analysis-${index}-`,autoReveal:false,
      offsetY:this.offset,
      onMount:(id,element)=>{
        this.paintNode(id,element);
        if(id==='result'){
          this.video=element.querySelector('video');
          this.video.src=this.source||`/api/console/analyses/${this.entry.id}/video`;
          this.outputs.bindVideo(this.video);
          const caption=element.querySelector('.output-preview span');
          caption.textContent=this.source?'Local video':'S3 video';
          this.video.addEventListener('error',()=>{caption.textContent='Video unavailable';});
          this.video.addEventListener('loadedmetadata',()=>{caption.textContent=this.source?'Local video':'S3 video';});
          this.video.addEventListener('play',()=>{
            for(const other of workspace.runs){
              if(other!==this)other.video?.pause();
            }
          });
          const expand=document.createElement('button');expand.type='button';expand.className='preview-expand';expand.setAttribute('aria-label',`Enlarge video in ${this.title}`);
          expand.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg>';
          expand.onclick=()=>{workspace.select(this,false);workspace.fit(this,['result']);};element.querySelector('.node-header').append(expand);
        }else if(this.nodes.find(node=>node.id===id).output)this.outputs.mount(id,element);
      },onUpdate:()=>this.paintEdges(),
    });
  }
  reflow(compact){
    if(this.nodes.find(node=>node.output).compact===compact)return;
    layoutAnalysisOutputs(this.nodes,this.index,compact);
    this.positionLocalVideo();
    this.stream.reflowOutputs();this.outputs.renderAll();this.stream.update(camera,viewport);
  }
  positionLocalVideo(){
    if(this.entry.kind!=='analysis')Object.assign(this.nodes.find(node=>node.id==='result'),{x:80,y:96});
  }
  paintNode(id,element=this.stream?.elements.get(id)){
    if(!element)return;const state=this.states.get(id),node=this.nodes.find(node=>node.id===id);
    element.dataset.state=state;element.querySelector('.node-state').textContent=node.output?'':({idle:'Waiting',active:'Processing',done:'Complete',skipped:'Skipped'}[state]||state);
    element.setAttribute('aria-label',`${this.title}, ${node.title}: ${state}`);
  }
  paintEdges(){
    for(const [key,element] of this.stream?.connections||[]){
      const [from,to]=key.split(':'),a=this.states.get(from),b=this.states.get(to);
      element.dataset.state=b==='active'&&a==='done'?'active':a==='done'&&b==='done'?'done':a==='done'?'routing':'idle';
      if(!element.style.getPropertyValue('--wire-duration'))element.style.setProperty('--wire-duration',`${650+(key.length%5)*55}ms`);
    }
  }
  set(ids,state){
    for(const id of ids){
      if(this.states.get(id)===state&&this.stream.elements.has(id))continue;
      this.states.set(id,state);
      if(!this.nodes.find(node=>node.id===id).output||this.stream.outputReady)this.stream.ensure(id,state==='active');
      this.paintNode(id);
    }
  }
  updatePhase(index,label,active=STAGES[index]){
    if(this.stage===index&&this.stageText===label)return;
    this.stage=index;
    this.stageText=label;
    for(const [step,ids] of STAGES.entries()){
      if(step<index)this.set(ids,this.stageOutcome(step));
      else for(const id of ids){
        if(this.states.get(id)==='active'&&!active.includes(id))this.set([id],'idle');
      }
    }
    this.set(active,'active');
    this.stream.update(camera,viewport);
    if(this.workspace.selected===this&&this.workspace.following)this.workspace.guide(this);
    this.workspace.refresh();
  }
  stageOutcome(step){
    return (this.entry.legacy||legacyJob(this.entry.id))&&step>=2&&step<=4?'skipped':'done';
  }
  showResults(payload){
    this.stopTracking();
    this.result=payload;
    this.complete=true;
    this.entry.status='SUCCEEDED';
    this.stageText='Analysis complete';
    for(const [step,ids] of STAGES.slice(0,-1).entries())this.set(ids,this.stageOutcome(step));
    this.stream.outputReady=true;
    this.stream.outputMode=true;
    this.outputs.setResult(payload,false);
    this.set(OUTPUT_IDS,'done');
    this.stream.update(camera,viewport);
    this.workspace.finished(this);
  }
  showVideo(){
    this.complete=true;
    this.stageText='Video ready';
    this.showPreview();
  }
  showPreview(){
    this.states.set('result','done');
    this.stream.ensure('result',false);
    this.paintNode('result');
  }
  fail(message){
    this.stopTracking();
    this.failed=true;
    this.stageText=message;
    const active=[...this.states].filter(([,state])=>state==='active').map(([id])=>id);
    this.set(active,'idle');
    this.paintEdges();
    const hasUploadedVideo=legacyJob(this.entry.id);
    if(hasUploadedVideo)this.showPreview();
    if(this.workspace.selected===this){
      if(hasUploadedVideo&&this.workspace.following)this.workspace.fit(this,['result']);
      this.workspace.following=false;
      this.workspace.showNotice(message);
    }
    this.workspace.refresh();
  }
  async poll(){
    if(this.polling)return;
    this.polling=true;
    this.failed=false;
    if(this.workspace.selected===this&&this.entry.status!=='SUCCEEDED')this.startTracking();
    const signal=this.abort.signal;
    try {
      if(this.entry.status==='AWAITING_SUBMISSION'){
        const legacy=legacyJob(this.entry.id);
        if(legacy)this.updatePhase(6,'Analyzing on SageMaker');
        const result=await submitConsoleJob(this.entry,signal);
        if(legacy&&Array.isArray(result.analysis?.utterances)){
          this.showResults(result);
          return;
        }
        this.entry.status=legacy?'LEGACY_RUNNING':'ACCEPTED';
        this.workspace.saveLibrary();
      }
      let retries=0;
      for(let attempt=0;attempt<480&&!signal.aborted;attempt++){
        let result;
        try{
          result=await getConsoleJob(this.entry.id,signal);
          retries=0;
        }catch(error){
          if(error.status===404||error.status===401||++retries>4)throw error;
          await new Promise(resolve=>setTimeout(resolve,6000));
          continue;
        }
        this.entry.status=result.status;
        this.entry.code=result.code;
        if(result.status==='SUCCEEDED'&&Array.isArray(result.analysis?.utterances)){
          this.showResults(result);
          return;
        }
        if(terminal[result.status]){
          this.fail([terminal[result.status],result.code,this.entry.id].filter(Boolean).join(' · '));
          return;
        }
        if(result.status==='AWAITING_SUBMISSION'){
          this.fail('Analysis did not finish. Reopen this video from Spaces to retry.');
          return;
        }
        const [index,label]=phase[result.status]||[5,'Waiting for AWS'];
        this.updatePhase(index,label);
        await new Promise(resolve=>setTimeout(resolve,3000));
      }
      if(!signal.aborted)this.fail('Analysis is still running. Reopen it from Spaces to check status.');
    }catch(error){
      if(!signal.aborted)this.fail(error.message);
    }finally{this.polling=false;}
  }
  startTracking(){
    if(this.root.hasAttribute('data-live-wires')||reduced())return;
    this.root.setAttribute('data-live-wires','');
    this.stream.start(camera,viewport,this.abort.signal);
  }
  stopTracking(){
    this.root.removeAttribute('data-live-wires');
    this.stream.stop?.();
  }
}

class Workspace {
  constructor(user){
    this.runs=[];this.view={x:0,y:0,scale:1};this.selected=null;this.following=false;this.starting=false;
    this.libraryKey=libraryKey(user);
    this.library=loadLibrary(this.libraryKey);
    this.entries=this.library.entries.filter(entry=>entry.kind==='video'||entry.status==='AWAITING_SUBMISSION');
    this.nextEntryIndex=0;
    this.nextRowBySpace=new Map();
    for(const entry of this.entries){
      this.nextEntryIndex=Math.max(this.nextEntryIndex,entry.index+1);
      this.nextRowBySpace.set(entry.space,Math.max(this.nextRowBySpace.get(entry.space)||0,entry.row+1));
    }
    $('entry-signout').onclick=()=>void this.signOut();
    this.upload=createLiquidUpload($('upload-entry').querySelector('.liquid-upload'));
    this.review=new AnalysisReview({onOpen:()=>{
      this.navigation.cancel();
      this.toggleHistory(false);
    },
      onSeek:(run,index)=>{this.select(run,false);run.outputs.select(index,true);this.fit(run,['result','transcript-output']);run.video?.focus({preventScroll:true});}});
    this.navigation=createCanvasNavigation({viewport,view:this.view,canInteract:()=>!!this.selected&&!this.starting&&!$('result-sheet').open,
      onStart:()=>{this.stopMotion();this.following=false;this.focusedOutput=null;},
      onChange:()=>{
        const scale=this.view.scale,margin=160;
        const visible=this.runs.filter(run=>!run.root.hidden);
        const width=Math.max(...visible.map(run=>boundsFor(run.nodes,run.entry.kind!=='analysis'?['result']:undefined).width))+160;
        this.view.x=Math.max(margin-width*scale,Math.min(viewport.clientWidth-margin,this.view.x));
        const lowest=Math.max(...visible.map(run=>run.offset))+RUN_SPACING;
        this.view.y=Math.max(margin-lowest*scale,Math.min(viewport.clientHeight-margin,this.view.y));
        this.paint();
      },onFit:()=>this.frameSelection(),
    });
    const choose=()=>this.chooseVideo();
    $('choose-file-btn').onclick=choose;
    $('new-analysis').onclick=choose;
    $('add-space-video').onclick=choose;
    $('space-outputs').open=wideOutputs.matches;
    wideOutputs.addEventListener('change',event=>{$('space-outputs').open=event.matches;});
    this.historyView='spaces';
    $('analysis-history').onclick=()=>this.toggleHistory();
    $('close-history').onclick=()=>this.dismissHistory();
    this.spacePicker=createSpacePicker($('space-select-trigger'),$('space-select-label'),$('space-options'),id=>{
      if(this.starting)return;
      this.historyView=id==='all'?'all':'spaces';
      if(id==='all'||id===this.library.active)this.renderLibrary();
      else this.switchSpace(id);
    });
    $('new-space').onclick=()=>{
      if(this.starting)return;
      const names=new Set(this.library.spaces.map(space=>space.name.toLowerCase()));
      let number=1;
      let name;
      do {name=`Space ${String(number++).padStart(2,'0')}`;} while(names.has(name.toLowerCase()));
      const id=crypto.randomUUID();
      this.library.spaces.push({id,name});
      this.historyView='spaces';
      this.switchSpace(id);
      $('add-space-video').focus({preventScroll:true});
    };
    const rename=$('space-rename-form');
    const nameInput=$('space-name');
    $('rename-space').onclick=()=>{
      this.spacePicker.close();
      nameInput.value=this.library.spaces.find(space=>space.id===this.library.active).name;
      $('space-select').hidden=true;
      $('rename-space').hidden=true;
      rename.hidden=false;
      nameInput.select();
      nameInput.focus({preventScroll:true});
    };
    rename.onsubmit=event=>{
      event.preventDefault();
      this.finishRename(true);
    };
    nameInput.onblur=()=>this.finishRename(true,false);
    nameInput.onkeydown=event=>{
      if(event.key!=='Escape')return;
      event.preventDefault();
      event.stopPropagation();
      this.finishRename(false);
    };
    $('space-video-file').onchange=event=>{
      const files=[...event.target.files];
      event.target.value='';
      if(files.length)void this.uploadVideos(files);
    };
    this.renderLibrary();
    $('analysis-list').addEventListener('keydown',event=>{
      const buttons=[...$('analysis-list').querySelectorAll('button')],index=buttons.indexOf(document.activeElement);
      if(index<0)return;
      const next={ArrowDown:Math.min(buttons.length-1,index+1),ArrowUp:Math.max(0,index-1),Home:0,End:buttons.length-1}[event.key];
      if(next!==undefined){event.preventDefault();buttons[next].focus();}
    });
    $('dismiss-notice').onclick=()=>{$('flow-notice').hidden=true;};
    viewport.addEventListener('dblclick',event=>{
      if(!this.selected||event.target.closest('button,a,video,input,select,.output-transcript-text,.history-panel,.space-outputs,.flow-notice,dialog'))return;
      this.frameSelection();
    });
    document.addEventListener('keydown',event=>{
      if(event.key!=='Escape')return;
      if(!$('history-panel').hidden)this.dismissHistory();
      else if(!wideOutputs.matches&&$('space-outputs').open&&!document.querySelector('dialog[open]')){
        $('space-outputs').open=false;
        $('space-outputs').querySelector('summary').focus({preventScroll:true});
      }
    });
    document.addEventListener('pointerdown',event=>{
      if(!event.target.closest('#space-select'))this.spacePicker.close();
      if(!event.target.closest('#history-panel,#analysis-history'))this.toggleHistory(false);
    });
    let resizeTimer;
    window.addEventListener('resize',()=>{
      clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{
        this.runs.forEach(run=>run.reflow(innerWidth<800));
        if(!this.selected||this.starting)return;
        if(this.following)this.guide(this.selected);
        else if(this.focusedOutput?.run===this.selected)void this.move(this.target(this.selected,[this.focusedOutput.id],true));
        else this.frameSelection();
      },120);
    });
    document.addEventListener('visibilitychange',()=>{if(this.motion)document.hidden?this.motion.pause():this.motion.play();});
    window.addEventListener('pagehide',event=>{
      if(!event.persisted)this.runs.forEach(run=>{
        run.abort.abort();
        if(run.source)URL.revokeObjectURL(run.source);
      });
    });
  }
  async signOut(){
    const button=$('entry-signout');
    button.disabled=true;
    try {
      const {csrfToken}=await consoleRequest('/api/auth/csrf');
      const response=await fetch('/api/auth/signout',{
        method:'POST',
        headers:{'Content-Type':'application/x-www-form-urlencoded','X-Auth-Return-Redirect':'1'},
        body:new URLSearchParams({csrfToken,callbackUrl:location.origin+'/'}),
      });
      if(!response.ok)throw new Error('Unable to sign out.');
      const result=await response.json();
      if(!result.url||new URL(result.url,location.origin).searchParams.has('error'))throw new Error('Unable to sign out.');
      location.replace('/');
    }catch(error){this.showNotice(error.message);}
    finally{button.disabled=false;}
  }
  loadHistory(){
    if(this.historyLoaded||this.historyRequest)return;
    const status=$('history-status');
    status.textContent='Loading history…';
    this.historyRequest=this.restoreHistory().then(()=>{
      status.textContent='';
    }).catch(()=>{
      status.textContent='Could not load history. Reopen the panel to try again.';
    }).finally(()=>{
      this.historyRequest=null;
    });
  }
  async restoreHistory(){
    const {analyses,videos}=await consoleRequest('/api/console/analyses');
    const jobIds=new Set(analyses.map(job=>job.id));
    const existingEntries=new Map(this.entries.map(entry=>[entry.id,entry]));
    const spaceIds=new Set(this.library.spaces.map(space=>space.id));
    const activeEntries=new Set(this.runs.map(run=>run.entry));
    for(const video of videos){
      if(jobIds.has(video.id)||existingEntries.has(video.id))continue;
      const date=new Date(video.createdAt).toLocaleString([], {dateStyle:'medium',timeStyle:'short'});
      const entry=this.newEntry(video.id,'Video · '+date,'default','My videos','STORED');
      entry.kind='s3';
      this.entries.push(entry);
    }
    for(const job of analyses){
      const existing=existingEntries.get(job.id);
      if(existing){
        if(!activeEntries.has(existing))Object.assign(existing,{status:job.status,code:job.code});
        continue;
      }
      if(!spaceIds.has(job.spaceId)){
        spaceIds.add(job.spaceId);
        this.library.spaces.push({id:job.spaceId,name:job.spaceName});
      }
      this.entries.push(this.newEntry(job.id,job.title,job.spaceId,job.spaceName,job.status,job.code));
    }
    this.historyLoaded=true;
    this.renderLibrary();
    const selected=this.entries.find(entry=>entry.id===this.library.selected&&entry.space===this.library.active);
    if(selected&&!this.selected&&!this.starting&&$('history-panel').hidden)await this.openEntry(selected,false);
  }
  showNotice(message){
    $('notice-message').textContent=message;
    $('flow-notice').hidden=false;
  }
  paint(){camera.classList.add('direct');camera.style.transform=transform(this.view);}
  stopMotion(){
    if(!this.motion)return;
    const matrix=new DOMMatrix(getComputedStyle(camera).transform);
    Object.assign(this.view,{x:matrix.m41,y:matrix.m42,scale:matrix.a});this.paint();this.motion.cancel();this.motion=null;this.motionTarget=null;
  }
  async move(target,duration=650){
    const destination=this.motionTarget||this.view;
    if(Math.abs(target.x-destination.x)<1&&Math.abs(target.y-destination.y)<1&&Math.abs(target.scale-destination.scale)<.002)return;
    this.stopMotion();
    this.paint();
    if(reduced()){Object.assign(this.view,target);this.paint();return;}
    const motion=camera.animate([{transform:transform(this.view)},{transform:transform(target)}],{duration,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});
    this.motion=motion;this.motionTarget=target;
    try {await motion.finished;if(this.motion===motion){Object.assign(this.view,target);this.paint();motion.cancel();this.motion=null;this.motionTarget=null;}}catch{}
  }
  target(run,ids,fit=false){
    const box=boundsFor(run.nodes,ids.length?ids:['storage']);
    const headerHeight=app.querySelector('.flow-header').offsetHeight;
    const availableHeight=viewport.clientHeight-headerHeight;
    const reserve=wideOutputs.matches&&$('space-outputs').open?$('space-outputs').offsetWidth+36:0;
    const availableWidth=viewport.clientWidth-reserve;
    const scale=fit?Math.max(.1,Math.min(ids.length===1?1.25:1.05,(availableWidth-48)/box.width,(availableHeight-64)/box.height)):
      Math.max(.25,Math.min(.86,(availableWidth-48)/box.width,(availableHeight-64)/box.height));
    return {x:availableWidth/2-(box.x+box.width/2)*scale,y:headerHeight+availableHeight/2-(run.offset+box.y+box.height/2)*scale,scale};
  }
  fit(run,ids){if(!run)return;this.following=false;this.focusedOutput=null;this.refresh();void this.move(this.target(run,ids,true));}
  frameSelection(){
    const run=this.selected;
    if(!run)return;
    const ids=run.entry.kind!=='analysis'?['result']:run.complete
      ? (innerWidth<800?['result','summary-output']:OUTPUT_IDS)
      : STAGES[run.stage];
    this.fit(run,ids);
  }
  pausePreview(){
    this.selected?.video?.pause();
  }
  chooseVideo(){
    if(this.starting)return;
    $('space-video-file').click();
  }
  async uploadVideos(files){
    for(const file of files)await this.start(file);
  }
  async start(file){
    if(this.starting)return;
    if(!/\.mp4$/i.test(file.name)||!file.size||file.size>128*1024*1024){
      this.showNotice('Choose an MP4 file up to 128 MiB.');
      return;
    }
    const first=app.dataset.mode==='idle';
    const space=this.library.spaces.find(item=>item.id===this.library.active);
    this.starting=true;
    this.openRequest=null;
    $('new-analysis').disabled=true;
    $('flow-notice').hidden=true;
    this.toggleHistory(false);
    this.review.close(false);
    let run;
    try{
      const {guarded}=await consoleRequest('/api/console/config');
      if(typeof guarded!=='boolean')throw new Error('Upload configuration is unavailable. Try again.');
      if(first){
        app.dataset.mode='sinking';
        $('upload-entry').inert=true;
        await this.upload.sink();
      }
      const entry=this.newEntry(crypto.randomUUID(),file.name.slice(0,255),space.id,space.name,'UPLOADING');
      entry.legacy=!guarded;
      run=new AnalysisRun(this,entry);
      this.runs.push(run);
      this.entries.push(entry);
      this.select(run,false);
      this.following=true;
      this.renderLibrary();
      run.updatePhase(0,'Requesting upload permission');
      entry.id=await uploadConsoleVideo(file,run.abort.signal,()=>run.updatePhase(1,'Uploading video to S3',['storage','access']),guarded);
      this.entries=this.entries.filter(item=>item===entry||item.id!==entry.id);
      entry.status='AWAITING_SUBMISSION';
      this.library.selected=entry.id;
      this.saveLibrary();
      this.renderLibrary();
      run.updatePhase(1,'Submitting uploaded video',['access']);
      void run.poll();
    }catch(error){
      if(run)run.fail(error.message);
      else{
        this.showNotice(error.message);
        app.dataset.mode='idle';
        $('upload-entry').inert=false;
        this.upload.reset();
      }
    }finally{
      this.starting=false;
      $('new-analysis').disabled=false;
    }
  }
  guide(run){
    const active=[...run.states].filter(([,state])=>state==='active').map(([id])=>id);
    void this.move(this.target(run,active.length&&active.length<6?active:STAGES[run.stage]),550);
  }
  saveLibrary(){
    try {
      localStorage.setItem(this.libraryKey,JSON.stringify({
        ...this.library,entries:this.entries.filter(entry=>entry.kind==='video'||entry.status==='AWAITING_SUBMISSION'),
      }));
    }catch{
      $('space-feedback').textContent='Browser storage is unavailable. Space settings may reset on refresh.';
    }
  }
  newEntry(id,title,space,spaceName,status,code){
    const index=this.nextEntryIndex++;
    const row=this.nextRowBySpace.get(space)||0;
    this.nextRowBySpace.set(space,row+1);
    return {id,index,row,space,spaceName,kind:'analysis',title,status,code,
      seed:crypto.getRandomValues(new Uint32Array(1))[0]};
  }
  switchSpace(id){
    if(this.starting)return;
    this.finishRename(false,false);
    this.openRequest=null;
    this.focusedOutput=null;
    this.review.close(false);
    this.navigation.cancel();
    this.stopMotion();
    this.pausePreview();
    this.selected?.stopTracking();
    this.selected=null;
    this.following=false;
    this.library.active=id;
    this.library.selected=null;
    $('space-feedback').textContent='';
    app.dataset.mode='idle';
    app.dataset.exploring='false';
    camera.inert=true;
    viewport.removeAttribute('tabindex');
    $('upload-entry').hidden=false;
    $('upload-entry').inert=false;
    this.upload.reset();
    this.saveLibrary();
    this.renderLibrary();
  }
  renderSpacePicker(){
    this.spacePicker.render([{id:'all',name:'All videos'},...this.library.spaces],
      this.historyView==='all'?'all':this.library.active);
  }
  renderLibrary(){
    const showAll=this.historyView==='all';
    this.renderSpacePicker();
    $('rename-space').hidden=showAll||!$('space-rename-form').hidden;
    $('add-space-video').hidden=showAll;
    if(!$('history-panel').hidden){
      const list=$('analysis-list');
      const history=showAll?this.entries:this.entries.filter(entry=>entry.space===this.library.active);
      const fragment=document.createDocumentFragment();
      for(const entry of history){
        const button=document.createElement('button');
        button.type='button';button.dataset.entry=entry.id;button.dataset.kind=entry.kind;
        const title=document.createElement('span'),status=document.createElement('small');
        title.className='library-title';title.textContent=entry.title;title.title=entry.title;
        button.append(title,status);
        button.onclick=()=>void this.openEntry(entry);
        fragment.append(button);
      }
      list.replaceChildren(fragment);
      $('space-empty').hidden=!this.historyLoaded||history.length!==0;
      $('space-empty').textContent=showAll?'No videos yet.':'No videos in this space yet.';
    }
    for(const run of this.runs)run.root.hidden=run.entry.space!==this.library.active;
    world.style.height=`${Math.max(1,this.nextRowBySpace.get(this.library.active)||0)*RUN_SPACING}px`;
    this.refresh();
  }
  finishRename(save,focus=true){
    const form=$('space-rename-form');
    if(form.hidden)return;
    form.hidden=true;
    const button=$('rename-space');
    $('space-select').hidden=false;
    button.hidden=false;
    const name=$('space-name').value.trim();
    if(save&&name){
      const space=this.library.spaces.find(item=>item.id===this.library.active);
      space.name=name;
      this.renderSpacePicker();
      this.saveLibrary();
    }
    if(focus)button.focus({preventScroll:true});
  }
  async openEntry(entry,focus=true){
    if(this.starting)return;
    const request={};
    this.openRequest=request;
    try {
      let run=this.runs.find(item=>item.entry===entry);
      const source=!run&&entry.kind==='video'?await localVideo(this.libraryKey,entry.id):null;
      if(this.openRequest!==request)return;
      if(!run&&entry.kind==='video'&&!source)throw new Error('This video is unavailable in your browser.');
      if(entry.space!==this.library.active){
        this.switchSpace(entry.space);
        this.openRequest=request;
      }
      if(!run){
        run=new AnalysisRun(this,entry,source);
        this.runs.push(run);
        if(entry.kind!=='analysis')run.showVideo();
      }
      $('space-feedback').textContent='';
      $('flow-notice').hidden=true;
      this.select(run,false);
      this.library.selected=entry.id;
      this.saveLibrary();
      if(run.complete||entry.status==='UPLOADING')this.frameSelection();
      else if(['FAILED','BLOCKED','EXPIRED'].includes(entry.status)){
        run.fail([terminal[entry.status],entry.code,entry.id].filter(Boolean).join(' · '));
        this.frameSelection();
      }else{
        this.following=true;
        if(!run.stream.elements.size&&phase[entry.status])run.updatePhase(...phase[entry.status]);
        this.guide(run);
        void run.poll();
      }
      if(focus)$('analysis-history').focus({preventScroll:true});
    }catch(error){
      if(this.openRequest===request)$('space-feedback').textContent=error.message||'Unable to open this video.';
    }
  }
  select(run,focus=true){
    this.review.close(false);
    this.toggleHistory(false);
    this.stopMotion();
    this.focusedOutput=null;
    if(this.selected!==run){
      this.pausePreview();
      this.selected?.stopTracking();
      if(!run.complete&&!run.failed&&run.entry.status!=='SUCCEEDED')run.startTracking();
    }
    this.selected=run;
    this.following=false;
    app.dataset.mode='graph';
    app.dataset.exploring='true';
    camera.inert=false;
    viewport.tabIndex=0;
    $('upload-entry').hidden=true;
    this.refresh();
    if(focus)this.frameSelection();
  }
  refresh(){
    const run=this.selected;
    $('new-analysis').hidden=!run;
    $('run-context').hidden=!run;
    if(run){
      app.dataset.complete=String(run.complete);
      const status=`${run.title} · ${run.stageText}`;
      if($('run-stage').textContent!==status){
        $('run-stage').textContent=status;
        $('flow-status').textContent=status;
      }
    }
    if(!$('history-panel').hidden)this.refreshHistory(run);
    this.refreshOutputs();
  }
  refreshHistory(run){
    const entriesById=new Map(this.entries.map(entry=>[entry.id,entry]));
    const runsByEntry=new Map(this.runs.map(run=>[run.entry,run]));
    for(const button of $('analysis-list').querySelectorAll('[data-entry]')){
      const entry=entriesById.get(button.dataset.entry);
      if(!entry)continue;
      const item=runsByEntry.get(entry);
      button.setAttribute('aria-current',String(entry===run?.entry));
      button.dataset.complete=String(entry.status==='SUCCEEDED'||entry.kind!=='analysis');
      const status=entry.kind==='video'?'Local video':entry.kind==='s3'?'S3 video':entry.status==='SUCCEEDED'?'Analysis complete':
        item?.stageText||terminal[entry.status]||phase[entry.status]?.[1]||'Waiting for AWS';
      const space=this.historyView==='all'?this.library.spaces.find(space=>space.id===entry.space)?.name:null;
      const description=space?`${space} · ${status}`:status;
      if(button.lastChild.textContent!==description)button.lastChild.textContent=description;
    }
  }
  refreshOutputs(){
    const run=this.selected;
    const result=run?.outputs.result;
    const preview=Boolean(run?.stream.elements.has('result'));
    const status=!run?'Select a video in Spaces.':run.failed?'Analysis unavailable.':
      result||preview?'':'Outputs appear when analysis is ready.';
    if($('space-outputs-status').textContent!==status)$('space-outputs-status').textContent=status;
    if(this.outputRun===run&&this.outputResult===result&&this.outputPreview===preview)return;
    this.outputRun=run;
    this.outputResult=result;
    this.outputPreview=preview;
    const values=result?{
      'transcript-output':`${result.segments.length} ${result.segments.length===1?'segment':'segments'}`,
      'emotion-output':result.verdicts.emotion,
      'sentiment-output':result.verdicts.sentiment,
    }:{};
    const buttons=(result?OUTPUT_IDS:preview?['result']:[]).map(id=>{
      const button=document.createElement('button');
      button.type='button';
      const label=document.createElement('span');
      label.textContent=outputTitles.get(id);
      button.append(label);
      if(values[id]){
        const value=document.createElement('strong');
        value.textContent=values[id];
        button.append(value);
      }
      button.onclick=()=>{
        if(!wideOutputs.matches)$('space-outputs').open=false;
        this.focusOutput(run,id);
      };
      return button;
    });
    $('space-output-list').replaceChildren(...buttons);
  }
  focusOutput(run,id){
    const node=run.stream.elements.get(id);
    if(!node)return;
    this.fit(run,[id]);
    this.focusedOutput={run,id};
    node.tabIndex=-1;
    node.focus({preventScroll:true});
  }
  finished(run){
    this.saveLibrary();
    if(this.selected===run){
      const guided=this.following;this.following=false;this.refresh();
      if(guided)this.fit(run,innerWidth<800?['result','summary-output']:OUTPUT_IDS);
    }else this.refresh();
  }
  dismissHistory(){
    this.toggleHistory(false);
    $('analysis-history').focus({preventScroll:true});
  }
  toggleHistory(force){
    const panel=$('history-panel');
    const open=force??panel.hidden;
    panel.hidden=!open;
    if(!open)this.spacePicker.close();
    $('analysis-history').setAttribute('aria-expanded',String(open));
    if(open){
      this.finishRename(true,false);
      this.renderLibrary();
      this.loadHistory();
      ($('analysis-list').querySelector('[aria-current="true"]')||$('close-history')).focus({preventScroll:true,focusVisible:false});
    }
  }
}

async function initialize(){
  const sessionStatus=$('console-session-status');
  let user;
  try {
    ({user}=await getSession()||{});
  }catch(error){
    if(error.status===401)location.replace('/login');
    else sessionStatus.textContent='Could not check your session. Reload to try again.';
    return;
  }
  if(!user?.id){
    location.replace('/login');
    return;
  }
  for(const key of ['argus_quota','nuance_quota','argus_user','nuance_user']){
    try{localStorage.removeItem(key);}catch{}
  }
  $('entry-email').textContent=user.email;
  $('entry-email').title=user.email;
  void updateAccountHeader({user});
  initializeSentimentApi();
  sessionStatus.hidden=true;
  app.hidden=false;
  const workspace=new Workspace(user);
  workspace.loadHistory();
}

window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
void initialize();
