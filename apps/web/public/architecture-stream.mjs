const svgNS='http://www.w3.org/2000/svg';
const svg=(tag,attributes={})=>{
  const element=document.createElementNS(svgNS,tag);
  for(const [key,value] of Object.entries(attributes))element.setAttribute(key,String(value));
  return element;
};
const icons={
  input:'M12 16V4m-4 4 4-4 4 4M4 15v5h16v-5',
  safety:'M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6z M8 12l3 3 5-6',
  prepare:'M3 12h3l2-6 4 12 4-12 2 6h3',
  model:'M5 5h4v4H5z M15 5h4v4h-4z M10 15h4v4h-4z M7 9v3h10V9 M12 12v3',
  quality:'m5 12 4 4L19 6',
  preview:'M4 5h16v14H4z m6 4 5 3-5 3z',
  transcript:'M5 6h14M5 10h14M5 14h10M5 18h7',
  summary:'M5 19V9m7 10V5m7 14v-7',
  emotions:'M8 9h.01M16 9h.01M8 14s1 3 4 3 4-3 4-3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
  sentiments:'M5 7h14M5 12h10M5 17h6',
};

// Reveal stages as they arrive, then retain them for exploring the full run.
export class ArchitectureStream {
  constructor({graph,wires,template,nodes,edges,nodeWidth,nodeHeight,wirePath,reduced,onMount,onUpdate,idPrefix='',autoReveal=true,offsetY=0}) {
    Object.assign(this,{graph,wires,template,nodes,edges,nodeWidth,nodeHeight,wirePath,reduced,onMount,onUpdate,idPrefix,autoReveal,offsetY});
    this.elements=new Map();this.connections=new Map();this.loaded=new Set();
    this.wireGeometry = new Map();
  }
  ensure(id,animate=true) {
    if(this.elements.has(id))return this.elements.get(id);
    const node=this.nodes.find(node=>node.id===id),output=!!node.output;
    const element=this.template.content.firstElementChild.cloneNode(true);
    element.dataset.node=id;element.dataset.kind=node.kind;element.dataset.presence='visible';
    element.classList.toggle('output-node',output);
    if(output){element.dataset.outputType=node.output;this.sizeOutput(element,node);}
    element.style.setProperty('--node-x',`${node.x}px`);element.style.setProperty('--node-y',`${node.y}px`);
    element.querySelector('h2').textContent=node.title;
    const icon=svg('svg',{class:'node-icon',viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':1.5,'stroke-linecap':'round','stroke-linejoin':'round','aria-hidden':'true'});
    icon.append(svg('path',{d:icons[node.output||node.kind]||icons.model}));
    element.querySelector('.node-header').prepend(icon);
    element.querySelector('.node-subtitle').textContent=node.subtitle;
    for(const [label,value] of node.rows){
      const row=document.createElement('div'),name=document.createElement('span'),data=document.createElement('strong');
      name.textContent=label;data.textContent=value;data.dataset.field=label.toLowerCase();
      row.append(name,data);element.querySelector('.node-rows').append(row);
    }
    if(node.output==='preview'){
      const preview=document.createElement('div');preview.className='output-preview';
      const video=document.createElement('video');video.id=`${this.idPrefix}output-video`;video.dataset.sourceVideo='';
      video.controls=true;video.muted=true;video.loop=true;video.playsInline=true;video.preload='metadata';
      video.setAttribute('aria-label','Video output');
      const caption=document.createElement('span');caption.id=`${this.idPrefix}output-video-caption`;
      preview.append(video,caption);element.append(preview);
    }
    this.graph.append(element);this.elements.set(id,element);this.loaded.add(id);this.onMount(id,element);
    if(animate&&!this.reduced()){
      element.animate([{opacity:0,transform:'translateX(14px)'},{opacity:1,transform:'translateX(0)'}],{duration:260,easing:'cubic-bezier(.22,1,.36,1)'});
    }
    return element;
  }
  sizeOutput(element,node){
    element.style.setProperty('--output-width',`${node.width}px`);element.style.setProperty('--output-height',`${node.height}px`);
    element.classList.toggle('compact-output',!!node.compact);
  }
  reflowOutputs(){
    for(const node of this.nodes.filter(node=>node.output)){
      const element=this.elements.get(node.id);if(!element)continue;
      this.sizeOutput(element,node);element.style.setProperty('--node-x',`${node.x}px`);element.style.setProperty('--node-y',`${node.y}px`);
    }
    for(const group of this.connections.values())group.remove();this.connections.clear();
    this.wireGeometry.clear();
  }
  connect(from,to) {
    const key=`${from}:${to}`;
    if(this.connections.has(key))return;
    const group=svg('g',{'data-edge':key,'data-from':from,'data-to':to,'data-visible':'true'});
    const d=this.wirePath(from,to),maskID=`${this.idPrefix}wire-reveal-${from}-${to}`;
    const cable=svg('g',{class:'wire-cable','data-visible':'true'});
    const paths=['wire-base','wire-charge','wire-energy','wire-spark'].map(name=>svg('path',{class:name,d,pathLength:name==='wire-base'?1:100}));
    cable.append(...paths);
    group.append(cable);
    this.wires.append(group);this.connections.set(key,group);
    if(this.outputMode||this.reduced())return;
    const {x,y,width,height}=paths[0].getBBox();
    const geometry={from,to,group,paths,x,y,width,height,trace:null};
    this.wireGeometry.set(key,geometry);
    // Limit the mask to the cable's footprint and release it after the reveal.
    const mask=svg('mask',{id:maskID,maskUnits:'userSpaceOnUse',x:x-20,y:y-20,width:width+40,height:height+40});
    const trace=svg('path',{d,fill:'none',stroke:'#fff','stroke-width':24,'stroke-linecap':'round',pathLength:1});
    const defs=svg('defs');mask.append(trace);defs.append(mask);group.prepend(defs);
    cable.setAttribute('mask',`url(#${maskID})`);
    geometry.trace=trace;
    trace.style.strokeDasharray='1';
    const reveal=trace.animate([{strokeDashoffset:1},{strokeDashoffset:0}],{duration:240,easing:'cubic-bezier(.25,.1,.25,1)',fill:'forwards'});
    reveal.finished.then(()=>{geometry.trace=null;cable.removeAttribute('mask');defs.remove();}).catch(()=>{});
  }
  update(camera,viewport) {
    const matrix=this.autoReveal?new DOMMatrix(getComputedStyle(camera).transform):null,scale=matrix?.a||1;
    const left=(-(matrix?.m41??0)-60)/scale;
    const centerGate=viewport.clientWidth/2+18;
    for(const node of this.nodes){
      if(this.outputMode){this.ensure(node.id,false);continue;}
      if(this.loaded.has(node.id))continue;
      if(!this.autoReveal)continue;
      const width=node.width||this.nodeWidth;
      if(node.output&&node.id!=='result'&&!this.outputReady)continue;
      if((node.x+width/2)*scale+matrix.m41<=centerGate&&node.x+width>left)this.ensure(node.id,node.id!=='storage');
    }
    for(const [from,to] of this.edges){
      if(this.loaded.has(from)&&this.loaded.has(to))this.connect(from,to);
    }
    this.onUpdate();
  }
  start(camera,viewport,signal) {
    this.stop?.();let raf,last=-Infinity,lastCable=-Infinity;
    const tick=now=>{
      if(signal.aborted)return;
      if(this.autoReveal&&now-last>65){last=now;this.update(camera,viewport);}
      if(!this.graph.hidden&&this.wireGeometry.size&&!this.reduced()&&now-lastCable>32){
        lastCable=now;
        const matrix=new DOMMatrix(getComputedStyle(camera).transform);
        const scale=matrix.a||1;
        const left=-matrix.m41/scale,right=left+viewport.clientWidth/scale;
        const top=-matrix.m42/scale-this.offsetY,bottom=top+viewport.clientHeight/scale;
        for(const wire of this.wireGeometry.values()){
          const visible=wire.x+wire.width+20>left&&wire.x-20<right&&wire.y+wire.height+20>top&&wire.y-20<bottom;
          wire.group.toggleAttribute('data-offscreen',!visible);
          if(!visible)continue;
          const d=this.wirePath(wire.from,wire.to,now/1800);
          for(const path of wire.paths)path.setAttribute('d',d);
          wire.trace?.setAttribute('d',d);
        }
      }
      raf=requestAnimationFrame(tick);
    };
    this.stop=()=>{cancelAnimationFrame(raf);signal.removeEventListener('abort',this.stop);};
    signal.addEventListener('abort',this.stop,{once:true});
    this.update(camera,viewport);raf=requestAnimationFrame(tick);
  }
  remove(id) {
    const element=this.elements.get(id);
    for(const video of element.querySelectorAll('video')){video.pause();video.removeAttribute('src');video.load();}
    element.remove();this.elements.delete(id);
  }
  clear() {
    this.stop?.();
    for(const id of this.elements.keys())this.remove(id);
    for(const group of this.connections.values())group.remove();
    this.connections.clear();this.loaded.clear();this.outputReady=false;this.outputMode=false;
    this.wireGeometry.clear();
  }
}
