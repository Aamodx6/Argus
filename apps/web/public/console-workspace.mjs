import {ArchitectureStream} from './architecture-stream.mjs';
import {AnalysisOutputs} from './analysis-output.mjs';
import {AnalysisReview} from './analysis-review.mjs';
import {createAnalysisLayout,layoutAnalysisOutputs,boundsFor,STAGES,RUN_SPACING} from './analysis-layout.mjs';
import {NODE_WIDTH,NODE_HEIGHT,OUTPUT_IDS,edges} from './pipeline-model.mjs';
import {buildSchedule,remainingGuide} from './pipeline-schedule.mjs';
import {PipelineTimeline} from './pipeline-timeline.mjs';
import {createCanvasNavigation} from './canvas-navigation.mjs';
import {createLiquidUpload} from './console-liquid.mjs';
import {libraryKey,loadLibrary,localVideo} from './console-library.mjs';

const $=id=>document.getElementById(id),app=$('argus-flow'),viewport=$('flow-viewport'),camera=$('graph-camera'),world=$('pipeline-graph');
const reduced=()=>document.documentElement.dataset.motion!=='full'&&matchMedia('(prefers-reduced-motion:reduce)').matches;
const svgNS='http://www.w3.org/2000/svg';
const durations={storage:1200,access:1700,malware:2100,media:1700,visual:2400,speech:2900,approval:1300,queue:1500,input:1600,decode:1900,whisper:3400,frames:2300,mel:2100,video:3000,audio:2400,bert:2000,fusion:2100,emotion:1600,sentiment:1600,quality:1900,result:1400};
const transform=view=>`translate(${view.x}px,${view.y}px) scale(${view.scale})`;

class AnalysisRun {
  constructor(workspace,entry,sample,file){
    const {index,row,seed}=entry;
    let state=seed;
    const random=()=>((state=(Math.imul(1664525,state)+1013904223)>>>0)/4294967296);
    Object.assign(this,createAnalysisLayout(index,innerWidth<800,random),{workspace,index,entry,result:null,sample,title:entry.title,stage:0,stageText:'Preparing',complete:false});
    this.offset=row*RUN_SPACING;
    this.source=file?URL.createObjectURL(file):null;
    this.positionLocalVideo();
    this.abort=new AbortController();this.clock=new PipelineTimeline(this.abort.signal,reduced());
    this.schedule=buildSchedule(STAGES,durations);Object.assign(this.schedule.at(-1),{lead:440,work:650,tail:60});
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
          this.video=element.querySelector('video');this.video.src=this.source||'/pipeline-preview.webm';this.outputs.bindVideo(this.video);
          this.video.addEventListener('play',()=>{
            for(const other of workspace.runs){
              if(other!==this)other.video?.pause();
            }
          });
          element.querySelector('.output-preview span').textContent=this.source?'Local video':'Sample video';
          const expand=document.createElement('button');expand.type='button';expand.className='preview-expand';expand.setAttribute('aria-label',`Enlarge video in ${this.title}`);
          expand.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg>';
          expand.onclick=()=>{workspace.select(this,false);workspace.fit(this,['result']);};element.querySelector('.node-header').append(expand);
        }else if(this.nodes.find(node=>node.id===id).output)this.outputs.mount(id,element);
      },onUpdate:()=>this.paintEdges(),
    });
    this.stream.start(camera,viewport,this.abort.signal);
  }
  reflow(compact){
    if(this.nodes.find(node=>node.output).compact===compact)return;
    layoutAnalysisOutputs(this.nodes,this.index,compact);
    this.positionLocalVideo();
    this.stream.reflowOutputs();this.outputs.renderAll();this.stream.update(camera,viewport);
  }
  positionLocalVideo(){
    if(this.entry.kind==='video')Object.assign(this.nodes.find(node=>node.id==='result'),{x:80,y:96});
  }
  paintNode(id,element=this.stream?.elements.get(id)){
    if(!element)return;const state=this.states.get(id),node=this.nodes.find(node=>node.id===id);
    element.dataset.state=state;element.querySelector('.node-state').textContent=node.output?'':({idle:'Waiting',active:'Processing',done:'Complete'}[state]||state);
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
      this.states.set(id,state);
      if(!this.nodes.find(node=>node.id===id).output||this.stream.outputReady)this.stream.ensure(id);
      this.paintNode(id);
    }
    this.stream.update(camera,viewport);
  }
  async play(){
    try {
      for(let i=0;i<STAGES.length;i++){
        this.stage=i;this.stageText=STAGES[i].map(id=>this.nodes.find(node=>node.id===id).title).join(' + ');this.workspace.refresh();
        const step=this.schedule[i];await this.clock.wait(step.lead);this.set(STAGES[i],'active');
        if(reduced()&&this.workspace.selected===this&&this.workspace.following&&i<STAGES.length-1){
          void this.workspace.move(this.workspace.target(this,STAGES[i]),1);
        }
        await this.clock.wait(step.work);this.set(STAGES[i],'done');await this.clock.wait(step.tail);
      }
      this.showResults(false);
      this.workspace.finished(this);
    }catch(error){
      if(error.name!=='AbortError'){
        this.failed=true;this.stageText='Preview unavailable';this.workspace.refresh();
      }
    }
  }
  showResults(restore){
    this.complete=true;
    this.entry.completed=true;
    if(this.entry.kind==='video'){
      this.stageText='Video ready';
      this.states.set('result','done');
      this.stream.ensure('result',false);
      return;
    }
    this.result=structuredClone(this.sample);
    this.stageText='Sample results';
    if(restore){
      for(const {id} of this.nodes){
        this.states.set(id,'done');
        this.stream.ensure(id,false);
      }
    }
    this.stream.outputReady=true;
    this.stream.outputMode=true;
    OUTPUT_IDS.forEach(id=>this.stream.ensure(id,!restore));
    this.outputs.setResult(this.result,true);this.set(OUTPUT_IDS,'done');
  }
}

class Workspace {
  constructor(){
    this.runs=[];this.view={x:0,y:0,scale:1};this.selected=null;this.following=false;this.starting=false;
    this.libraryKey=libraryKey();
    this.library=loadLibrary(this.libraryKey);
    this.entries=this.library.entries;
    this.upload=createLiquidUpload($('upload-entry').querySelector('.liquid-upload'));
    this.review=new AnalysisReview({onOpen:()=>{
      this.navigation.cancel();
      this.toggleHistory(false);
    },
      onSeek:(run,index)=>{this.select(run,false);run.outputs.select(index,true);this.fit(run,['result','transcript-output']);run.video?.focus({preventScroll:true});}});
    this.navigation=createCanvasNavigation({viewport,view:this.view,canInteract:()=>!!this.selected&&!this.starting&&!$('result-sheet').open,
      onStart:()=>{this.stopMotion();this.following=false;this.refresh();},
      onChange:()=>{
        const scale=this.view.scale,margin=160;
        const visible=this.runs.filter(run=>!run.root.hidden);
        const width=Math.max(...visible.map(run=>boundsFor(run.nodes,run.entry.kind==='video'?['result']:undefined).width))+160;
        this.view.x=Math.max(margin-width*scale,Math.min(viewport.clientWidth-margin,this.view.x));
        const lowest=Math.max(...visible.map(run=>run.offset))+RUN_SPACING;
        this.view.y=Math.max(margin-lowest*scale,Math.min(viewport.clientHeight-margin,this.view.y));
        this.paint();
      },onFit:()=>this.frameSelection(),
    });
    $('upload-entry').addEventListener('click',event=>{if(event.target.closest('#choose-file-btn')){event.preventDefault();void this.start(true);}});
    $('new-analysis').onclick=()=>void this.start(false);
    $('follow-progress').onclick=()=>{if(!this.selected?.complete){this.following=true;this.guide(this.selected);this.refresh();}};
    $('analysis-history').onclick=()=>this.toggleHistory();$('close-history').onclick=()=>{this.toggleHistory(false);$('analysis-history').focus({preventScroll:true});};
    $('space-select').onchange=()=>this.switchSpace($('space-select').value);
    $('new-space').onclick=()=>{
      if(this.starting)return;
      const names=new Set(this.library.spaces.map(space=>space.name.toLowerCase()));
      let number=1;
      let name;
      do {name=`Space ${String(number++).padStart(2,'0')}`;} while(names.has(name.toLowerCase()));
      const id=crypto.randomUUID();
      this.library.spaces.push({id,name});
      this.switchSpace(id);
      $('add-space-video').focus({preventScroll:true});
    };
    const rename=$('space-rename-form');
    const nameInput=$('space-name');
    $('rename-space').onclick=()=>{
      nameInput.value=this.library.spaces.find(space=>space.id===this.library.active).name;
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
    $('add-space-video').onclick=()=>$('space-video-file').click();
    $('space-video-file').onchange=event=>{
      const file=event.target.files[0];
      event.target.value='';
      if(file)void this.addVideo(file);
    };
    this.renderLibrary();
    $('analysis-list').addEventListener('keydown',event=>{
      const buttons=[...$('analysis-list').querySelectorAll('button')],index=buttons.indexOf(document.activeElement);
      if(index<0)return;
      const next={ArrowDown:Math.min(buttons.length-1,index+1),ArrowUp:Math.max(0,index-1),Home:0,End:buttons.length-1}[event.key];
      if(next!==undefined){event.preventDefault();buttons[next].focus();}
    });
    $('dismiss-notice').onclick=()=>{$('flow-notice').hidden=true;};$('notice-preview').onclick=()=>void this.start(app.dataset.mode==='idle');
    viewport.addEventListener('dblclick',event=>{
      if(!this.selected||event.target.closest('button,a,video,input,select,.output-transcript-text,.history-panel,.flow-notice,dialog'))return;
      this.frameSelection();
    });
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('history-panel').hidden){this.toggleHistory(false);$('analysis-history').focus({preventScroll:true});}});
    document.addEventListener('pointerdown',event=>{if(!event.target.closest('#history-panel,#analysis-history'))this.toggleHistory(false);});
    let resizeTimer;
    window.addEventListener('resize',()=>{
      clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{
        this.runs.forEach(run=>run.reflow(innerWidth<800));
        if(!this.selected||this.starting)return;
        if(this.following)this.guide(this.selected);
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
    window.addEventListener('storage',event=>{
      if(['argus_user','nuance_user',null].includes(event.key)&&libraryKey()!==this.libraryKey)location.reload();
    });
  }
  paint(){camera.classList.add('direct');camera.style.transform=transform(this.view);}
  stopMotion(){
    if(!this.motion)return;
    const matrix=new DOMMatrix(getComputedStyle(camera).transform);
    Object.assign(this.view,{x:matrix.m41,y:matrix.m42,scale:matrix.a});this.paint();this.motion.cancel();this.motion=null;app.dataset.tracking='false';
  }
  async move(target,duration=650){
    this.stopMotion();
    const motion=camera.animate([{transform:transform(this.view)},{transform:transform(target)}],{duration:reduced()?1:duration,easing:'cubic-bezier(.22,1,.36,1)',fill:'forwards'});
    this.motion=motion;app.dataset.tracking='true';
    try {await motion.finished;if(this.motion===motion){Object.assign(this.view,target);this.paint();motion.cancel();this.motion=null;app.dataset.tracking='false';}}catch{}
  }
  target(run,ids,fit=false){
    const box=boundsFor(run.nodes,ids.length?ids:['storage']);
    const headerHeight=app.querySelector('.flow-header').offsetHeight;
    const availableHeight=viewport.clientHeight-headerHeight;
    const scale=fit?Math.max(.1,Math.min(ids.length===1?1.5:1.05,(viewport.clientWidth-64)/box.width,(availableHeight-64)/box.height)):
      Math.max(.4,Math.min(.86,viewport.clientWidth/420,(availableHeight-80)/760));
    return {x:viewport.clientWidth/2-(box.x+box.width/2)*scale,y:headerHeight+availableHeight/2-(run.offset+box.y+box.height/2)*scale,scale};
  }
  fit(run,ids){if(!run)return;this.following=false;this.refresh();void this.move(this.target(run,ids,true));}
  frameSelection(){
    const run=this.selected;
    if(!run)return;
    const ids=run.entry.kind==='video'?['result']:run.complete
      ? (innerWidth<800?['result','transcript-output']:OUTPUT_IDS)
      : STAGES[run.stage];
    this.fit(run,ids);
  }
  pausePreview(){
    this.selected?.video?.pause();
  }
  async start(first){
    if(this.starting)return;this.openRequest=null;this.starting=true;$('new-analysis').disabled=true;this.toggleHistory(false);this.review.close();
    try {
      this.loadSample();
      let origin;
      if(first){
        const button=$('choose-file-btn').getBoundingClientRect();
        const frame=viewport.getBoundingClientRect();
        origin={x:button.left+button.width/2-frame.left,y:button.top+button.height/2-frame.top};
        $('upload-entry').inert=true;
        app.dataset.mode='sinking';
        // Let the sink finish before recovering from a failed sample request.
        const [sample] = await Promise.allSettled([this.sample,this.upload.sink()]);
        if(sample.status==='rejected')throw sample.reason;
        this.sample=Promise.resolve(sample.value);
      }
      const sample=await this.sample;
      this.stopMotion();
      this.pausePreview();
      app.dataset.mode='graph';app.dataset.exploring='true';camera.inert=false;viewport.tabIndex=0;
      $('upload-entry').hidden=true;
      viewport.setAttribute('aria-label','Analysis canvas. Drag to pan, scroll to zoom, double click to fit the selected analysis. Arrow keys pan; plus and minus zoom.');
      const entry=this.newEntry('sample');
      const run=new AnalysisRun(this,entry,sample);
      this.runs.push(run);this.selected=run;this.following=true;
      this.renderLibrary();
      const target=this.target(run,['storage']);
      if(origin&&!reduced()){
        Object.assign(this.view,{
          x:target.x+origin.x-viewport.clientWidth/2,
          y:origin.y-(run.offset+run.nodes.find(node=>node.id==='storage').y+NODE_HEIGHT/2)*target.scale,
          scale:target.scale,
        });
        this.paint();
        run.stream.ensure('storage');
      }
      await this.move(target,first?240:800);
      run.stream.ensure('storage');
      if(first)viewport.focus({preventScroll:true,focusVisible:false});
      this.starting=false;$('new-analysis').disabled=false;
      if(this.selected===run&&this.following)this.guide(run);
      void run.play();
    }catch(error){
      $('notice-message').textContent=error.message;$('flow-notice').hidden=false;
      if(!this.runs.length){app.dataset.mode='idle';$('upload-entry').hidden=false;$('upload-entry').inert=false;this.upload.reset();}
    }finally{this.starting=false;$('new-analysis').disabled=false;}
  }
  guide(run){
    this.stopMotion();
    if(reduced()){void this.move(this.target(run,STAGES[run.stage]),1);return;}
    const plan=remainingGuide(run.schedule,run.clock.elapsed),elapsed=plan.duration;
    if(elapsed<=0)return;
    const points=[{time:0,...this.view}];
    for(const {index,time} of plan.targets){
      const ids=STAGES[index];points.push({time,...this.target(run,ids,ids===OUTPUT_IDS)});
    }
    points.push({...points.at(-1),time:elapsed});
    const slopes=points.map((point,i)=>i===0||i===points.length-1?0:(points[i+1].x-points[i-1].x)/(points[i+1].time-points[i-1].time));
    for(let i=0;i<points.length-1;i++){
      const delta=(points[i+1].x-points[i].x)/(points[i+1].time-points[i].time);
      if(Math.abs(delta)<.000001){slopes[i]=slopes[i+1]=0;continue;}
      let a=Math.max(0,slopes[i]/delta),b=Math.max(0,slopes[i+1]/delta),magnitude=Math.hypot(a,b);
      if(magnitude>3){a*=3/magnitude;b*=3/magnitude;}slopes[i]=a*delta;slopes[i+1]=b*delta;
    }
    const frames=[];let segment=0;
    for(let time=0;time<=elapsed;time+=40){
      while(segment<points.length-2&&time>points[segment+1].time)segment++;
      const a=points[segment],b=points[segment+1],span=b.time-a.time,t=Math.min(1,(time-a.time)/span),t2=t*t,t3=t2*t;
      const raw=(2*t3-3*t2+1)*a.x+(t3-2*t2+t)*span*slopes[segment]+(-2*t3+3*t2)*b.x+(t3-t2)*span*slopes[segment+1];
      const x=Math.max(Math.min(a.x,b.x),Math.min(Math.max(a.x,b.x),raw)),ease=t2*(3-2*t);
      frames.push({offset:time/elapsed,transform:transform({x,y:a.y+(b.y-a.y)*ease,scale:a.scale+(b.scale-a.scale)*ease})});
    }
    const last=points.at(-1);frames.push({offset:1,transform:transform(last)});
    const motion=camera.animate(frames,{duration:elapsed,easing:'linear',fill:'forwards'});this.motion=motion;app.dataset.tracking='true';
    motion.finished.then(()=>{if(this.motion===motion){Object.assign(this.view,last);this.paint();motion.cancel();this.motion=null;app.dataset.tracking='false';}}).catch(()=>{});
  }
  loadSample(){
    this.sample??=fetch('/pipeline-demo.json').then(response=>{
      if(!response.ok)throw new Error('Sample unavailable. Try again.');
      return response.json();
    }).catch(error=>{this.sample=null;throw error;});
    return this.sample;
  }
  saveLibrary(){
    try {
      localStorage.setItem(this.libraryKey,JSON.stringify({
        ...this.library,entries:this.entries.filter(entry=>entry.completed),
      }));
    }catch{
      $('space-feedback').textContent='Browser storage is unavailable. This workspace will reset on refresh.';
    }
  }
  newEntry(kind,title){
    const space=this.library.active;
    const index=this.entries.reduce((highest,entry)=>Math.max(highest,entry.index+1),0);
    const row=this.entries.filter(entry=>entry.space===space).length;
    const entry={id:crypto.randomUUID(),index,row,space,kind,
      title:title||`Analysis ${String(this.entries.filter(entry=>entry.kind==='sample').length+1).padStart(2,'0')}`,
      seed:crypto.getRandomValues(new Uint32Array(1))[0],completed:false};
    this.entries.push(entry);
    return entry;
  }
  async addVideo(file){
    if(!file.type.startsWith('video/')&&!/\.(mp4|webm|mov|m4v)$/i.test(file.name)){
      $('space-feedback').textContent='Choose a video file.';
      return;
    }
    const entry=this.newEntry('video',file.name);
    const button=$('add-space-video');
    button.disabled=true;
    $('space-feedback').textContent='Saving video…';
    try {
      await localVideo(this.libraryKey,entry.id,file);
      entry.completed=true;
      $('space-feedback').textContent='';
      this.saveLibrary();
      this.renderLibrary();
      if(entry.space===this.library.active)await this.openEntry(entry,file);
    }catch{
      this.entries.splice(this.entries.indexOf(entry),1);
      this.renderLibrary();
      $('space-feedback').textContent='Could not save this video in your browser.';
    }finally{button.disabled=false;}
  }
  switchSpace(id){
    if(this.starting){
      $('space-select').value=this.library.active;
      return;
    }
    this.finishRename(false,false);
    this.openRequest=null;
    this.review.close(false);
    this.navigation.cancel();
    this.stopMotion();
    this.pausePreview();
    this.selected=null;
    this.following=false;
    this.library.active=id;
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
  renderLibrary(){
    const select=$('space-select');
    select.replaceChildren(...this.library.spaces.map(space=>new Option(space.name,space.id)));
    select.value=this.library.active;
    $('active-space-name').textContent=select.options[select.selectedIndex]?.textContent||'My videos';
    const list=$('analysis-list');
    const entries=this.entries.filter(entry=>entry.space===this.library.active);
    list.replaceChildren();
    for(const entry of entries){
      const button=document.createElement('button');
      button.type='button';button.dataset.entry=entry.id;button.dataset.kind=entry.kind;
      const title=document.createElement('span'),status=document.createElement('small');
      title.className='library-title';title.textContent=entry.title;title.title=entry.title;
      button.append(title,status);
      button.onclick=()=>void this.openEntry(entry);
      list.append(button);
    }
    $('space-empty').hidden=entries.length!==0;
    for(const run of this.runs)run.root.hidden=run.entry.space!==this.library.active;
    world.style.height=`${Math.max(1,entries.length)*RUN_SPACING}px`;
    this.refresh();
  }
  finishRename(save,focus=true){
    const form=$('space-rename-form');
    if(form.hidden)return;
    form.hidden=true;
    const button=$('rename-space');
    button.hidden=false;
    const name=$('space-name').value.trim();
    if(save&&name){
      const space=this.library.spaces.find(item=>item.id===this.library.active);
      space.name=name;
      $('active-space-name').textContent=name;
      $('space-select').selectedOptions[0].textContent=name;
      this.saveLibrary();
    }
    if(focus)button.focus({preventScroll:true});
  }
  async openEntry(entry,file){
    if(this.starting)return;
    const request={};
    this.openRequest=request;
    try {
      let run=this.runs.find(item=>item.entry===entry);
      if(!run){
        $('space-feedback').textContent='Opening…';
        const source=entry.kind==='video'?(file||await localVideo(this.libraryKey,entry.id)):null;
        const sample=entry.kind==='sample'?await this.loadSample():null;
        if(this.openRequest!==request)return;
        if(entry.kind==='video'&&!source)throw new Error('This video is unavailable in your browser.');
        run=new AnalysisRun(this,entry,sample,source);
        this.runs.push(run);
        run.showResults(true);
      }
      $('space-feedback').textContent='';
      this.select(run,false);
      if(run.complete||run.failed)this.frameSelection();
      else{
        const current=this.target(run,STAGES[run.stage]);
        await this.move(current,480);
        if(this.openRequest!==request||this.selected!==run)return;
        if(run.complete)this.frameSelection();
        else {
          this.following=true;
          this.guide(run);
          this.refresh();
        }
      }
      if(this.openRequest===request)$('analysis-history').focus({preventScroll:true});
    }catch(error){
      if(this.openRequest===request)$('space-feedback').textContent=error.message||'Unable to open this video.';
    }
  }
  select(run,focus=true){
    this.review.close(false);
    this.toggleHistory(false);
    this.stopMotion();
    if(this.selected!==run)this.pausePreview();
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
      $('run-stage').textContent=`${run.title} · ${run.stageText}`;
      $('run-progress').hidden=run.complete||!!run.failed;
      $('run-progress').textContent=`${run.stage+1}/${STAGES.length}`;
      $('run-progress').setAttribute('aria-label',`Stage ${run.stage+1} of ${STAGES.length}`);
      $('flow-status').textContent=$('run-stage').textContent;
      $('follow-progress').hidden=run.complete||this.following||!!run.failed;
    }
    for(const button of $('analysis-list').querySelectorAll('[data-entry]')){
      const entry=this.entries.find(item=>item.id===button.dataset.entry);
      const item=this.runs.find(candidate=>candidate.entry===entry);
      button.setAttribute('aria-current',String(entry===run?.entry));
      button.dataset.complete=String(entry.completed);
      const status=entry.kind==='video'?'Local video':entry.completed?'Sample results':
        item?.failed?'Preview unavailable':`${(item?.stage??0)+1}/${STAGES.length} · ${item?.stageText??'Preparing'}`;
      if(button.lastChild.textContent!==status)button.lastChild.textContent=status;
    }
  }
  finished(run){
    this.saveLibrary();
    if(this.selected===run){
      const guided=this.following;this.following=false;this.refresh();
      if(guided)this.fit(run,innerWidth<800?['result','transcript-output']:OUTPUT_IDS);
      if(guided&&!$('result-sheet').open)run.video?.play().catch(()=>{});
    }else this.refresh();
  }
  toggleHistory(force){
    const open=force??$('history-panel').hidden;
    $('history-panel').hidden=!open;$('analysis-history').setAttribute('aria-expanded',String(open));
    if(open)($('analysis-list').querySelector('[aria-current="true"]')||$('close-history')).focus({preventScroll:true,focusVisible:false});
  }
}

new Workspace();
