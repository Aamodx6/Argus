export function zoomView(view, factor, point) {
  const scale=Math.max(.25,Math.min(2.5,view.scale*factor));
  const ratio=scale/view.scale;
  view.x=point.x-(point.x-view.x)*ratio;
  view.y=point.y-(point.y-view.y)*ratio;
  view.scale=scale;
}

// Pointer coordinates stay in viewport space; media and text keep their native interactions.
export function createCanvasNavigation({viewport,view,canInteract,onStart,onChange,onFit}) {
  const pointers=new Map();
  const interactive=target=>target.closest('button,a,video,input,select,textarea,[contenteditable],.output-transcript-text,.history-panel,.flow-notice,dialog');
  let frame=0;
  const draw=()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;onChange();});};
  const center=()=>{
    const points=[...pointers.values()];
    return {x:points.reduce((sum,p)=>sum+p.x,0)/points.length,y:points.reduce((sum,p)=>sum+p.y,0)/points.length};
  };
  const distance=()=>{const [a,b]=pointers.values();return a&&b?Math.hypot(a.x-b.x,a.y-b.y):0;};
  const local=event=>{const rect=viewport.getBoundingClientRect();return{x:event.clientX-rect.left,y:event.clientY-rect.top};};
  function cancel(){
    for(const id of pointers.keys())if(viewport.hasPointerCapture(id))viewport.releasePointerCapture(id);
    pointers.clear();viewport.dataset.dragging='false';
    if(frame){cancelAnimationFrame(frame);frame=0;}
  }
  function zoomBy(factor,point={x:viewport.clientWidth/2,y:viewport.clientHeight/2}){
    if(!canInteract())return;
    if(!frame)onStart();zoomView(view,factor,point);draw();
  }
  viewport.addEventListener('pointerdown',event=>{
    if(!canInteract()||event.button!==0||interactive(event.target))return;
    if(!pointers.size&&!frame)onStart();
    pointers.set(event.pointerId,local(event));
    viewport.setPointerCapture(event.pointerId);viewport.dataset.dragging='true';
    viewport.focus({preventScroll:true});event.preventDefault();
  });
  viewport.addEventListener('pointermove',event=>{
    if(!pointers.has(event.pointerId))return;
    if(!canInteract()){cancel();return;}
    const previous=center(),before=distance();
    pointers.set(event.pointerId,local(event));
    const next=center(),after=distance();
    if(before&&after)zoomView(view,after/before,previous);
    view.x+=next.x-previous.x;view.y+=next.y-previous.y;draw();
  });
  const release=event=>{
    pointers.delete(event.pointerId);
    if(viewport.hasPointerCapture(event.pointerId))viewport.releasePointerCapture(event.pointerId);
    if(!pointers.size)viewport.dataset.dragging='false';
  };
  viewport.addEventListener('pointerup',release);
  viewport.addEventListener('pointercancel',release);
  viewport.addEventListener('lostpointercapture',event=>{
    pointers.delete(event.pointerId);
    if(!pointers.size)viewport.dataset.dragging='false';
  });
  viewport.addEventListener('wheel',event=>{
    if(!canInteract()||interactive(event.target)&&!event.target.closest('video'))return;
    event.preventDefault();
    const unit=event.deltaMode===1?16:event.deltaMode===2?viewport.clientHeight:1;
    if(event.shiftKey){if(!frame)onStart();view.x-=(event.deltaX||event.deltaY)*unit;view.y-=event.deltaX?event.deltaY*unit:0;draw();}
    else zoomBy(Math.exp(-Math.max(-160,Math.min(160,event.deltaY*unit))*.002),local(event));
  },{passive:false});
  viewport.addEventListener('keydown',event=>{
    if(!canInteract()||interactive(event.target)||event.ctrlKey||event.metaKey||event.altKey)return;
    const step=event.shiftKey?160:64;
    const delta={ArrowLeft:[step,0],ArrowRight:[-step,0],ArrowUp:[0,step],ArrowDown:[0,-step]}[event.key];
    if(delta){event.preventDefault();if(!frame)onStart();view.x+=delta[0];view.y+=delta[1];draw();}
    else if(['+','=','-','0'].includes(event.key)){
      event.preventDefault();if(event.key==='0')onFit();else zoomBy(event.key==='-'?1/1.2:1.2);
    }
  });
  return {zoomBy,cancel};
}
