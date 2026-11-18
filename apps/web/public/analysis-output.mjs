const number=value=>typeof value==='number'&&Number.isFinite(value);
const humanize=value=>String(value||'').replaceAll('_',' ').replace(/^./,letter=>letter.toUpperCase());
const scores=values=>(Array.isArray(values)?values:[])
  .filter(item=>typeof item?.label==='string'&&number(item.confidence)&&item.confidence>=0&&item.confidence<=1)
  .map(item=>({label:item.label,confidence:item.confidence}))
  .sort((a,b)=>b.confidence-a.confidence);

const scoreText=value=>`${(value.confidence*100).toFixed(1)}%`;

export function segmentVerdict(values) {
  const [first,second]=values;
  if(!first)return {label:'No verdict',detail:'The model returned no scores.'};
  const label=humanize(first.label);
  if(second&&first.confidence===second.confidence){
    return {label:'No clear leader',detail:`${label} and ${second.label} tied at ${scoreText(first)}.`};
  }
  if(second&&first.confidence-second.confidence<.05){
    return {label,detail:`${scoreText(first)} vs ${scoreText(second)} ${second.label}.`};
  }
  return {label,detail:`Top model score ${scoreText(first)}.`};
}

function clipVerdict(segments,kind,status){
  if(status==='low_confidence'||status==='out_of_domain')return 'No verdict';
  const scored=segments.map(segment=>segment[kind]).filter(values=>values.length);
  if(scored.length<=1)return segmentVerdict(scored[0]??[]).label;
  const votes=new Map();
  for(const [first,second] of scored){
    if(first.confidence===second?.confidence)continue;
    votes.set(first.label,(votes.get(first.label)??0)+1);
  }
  for(const [label,count] of votes){
    if(count>scored.length/2)return humanize(label);
  }
  return votes.size?'Mixed':'No clear leader';
}

// The deployed handler returns top-k scores for each Whisper segment. Missing
// categories are not zeroes, and top-k confidence arrays are not normalized.
export function describeAnalysis(payload) {
  const analysis=payload?.analysis||{};
  const segments=(Array.isArray(analysis.utterances)?analysis.utterances:[])
    .filter(item=>number(item.start_time)&&number(item.end_time)&&item.start_time>=0&&item.end_time>=item.start_time)
    .map(item=>({start:item.start_time,end:item.end_time,text:String(item.text||''),
      emotions:scores(item.emotions),sentiments:scores(item.sentiments)}));
  const duration=analysis.overall?.durationSeconds;
  const validDuration=number(duration)&&duration>=0;
  const status=analysis.status||(segments.length?'complete':'no_speech');
  return {
    segments,
    verdicts:{emotion:clipVerdict(segments,'emotions',status),sentiment:clipVerdict(segments,'sentiments',status)},
    duration:validDuration?duration:segments.length?Math.max(...segments.map(segment=>segment.end)):null,
    durationLabel:validDuration?'Video duration':'Analyzed span',
    status,
    reason:analysis.reason_code?humanize(analysis.reason_code):'',
    version:typeof analysis.model_version==='string'?analysis.model_version:'',
    frames:Number.isInteger(analysis.overall?.framesProcessed)&&analysis.overall.framesProcessed>=0?analysis.overall.framesProcessed:null,
  };
}

export function segmentAtTime(segments,time) {
  return segments.findIndex(segment=>time>=segment.start&&time<segment.end);
}

const el=(tag,className,text)=>{
  const node=document.createElement(tag);if(className)node.className=className;
  if(text!==undefined)node.textContent=text;return node;
};
const clock=value=>`${value.toFixed(1)}s`;
export function formatTimestamp(value){
  const milliseconds=Math.max(0,Math.round(value*1000)),minutes=Math.floor(milliseconds/60000);
  return `${minutes}:${String(Math.floor(milliseconds/1000)%60).padStart(2,'0')}.${String(milliseconds%1000).padStart(3,'0')}`;
}
const percent=value=>`${Math.round(value*100)}%`;

export class AnalysisOutputs {
  constructor({getVideo,onReadMore,isCompact,root=document}) {
    Object.assign(this,{getVideo,onReadMore,isCompact,root});this.reset();
  }
  reset(){this.result=null;this.demo=false;this.index=0;this.ignoreVideoUntil=0;}
  setResult(payload,demo){this.result=describeAnalysis(payload);this.demo=demo;this.index=0;this.renderAll();}
  mount(id,node){
    if(id==='result')return;
    const body=el('div','analysis-output-body');node.append(body);
    if(id==='transcript-output'){
      body.append(el('div','output-segment-time'),el('p','output-transcript-text'));
      const nav=el('div','output-segment-nav');
      const previous=el('button','','←'),position=el('span','output-segment-position'),next=el('button','','→'),read=el('button','output-read-more','Full transcript ↗');
      previous.type=next.type=read.type='button';
      previous.setAttribute('aria-label','Previous spoken segment');next.setAttribute('aria-label','Next spoken segment');
      previous.addEventListener('click',()=>this.select(this.index-1,true));next.addEventListener('click',()=>this.select(this.index+1,true));read.addEventListener('click',this.onReadMore);
      nav.append(previous,position,next,read);body.append(nav);
    }
    this.renderNode(node);
  }
  bindVideo(video){
    const update=()=>{
      if(!this.result||performance.now()<this.ignoreVideoUntil)return;
      const index=segmentAtTime(this.result.segments,video.currentTime);
      if(index>=0&&index!==this.index)this.select(index,false);
    };
    video.addEventListener('timeupdate',update);video.addEventListener('seeked',update);
  }
  select(index,seek=false){
    if(!this.result?.segments.length)return;
    this.index=Math.max(0,Math.min(this.result.segments.length-1,index));
    if(seek){
      const video=this.getVideo();
      if(video){
        this.ignoreVideoUntil=performance.now()+180;video.pause();
        video.currentTime=Math.min(this.result.segments[this.index].start,Number.isFinite(video.duration)?Math.max(0,video.duration-.01):Infinity);
      }
    }
    this.renderAll();
  }
  renderAll(){this.root.querySelectorAll('[data-output-type]').forEach(node=>this.renderNode(node));}
  renderNode(node){
    const body=node.querySelector('.analysis-output-body');if(!body)return;
    const kind=node.dataset.outputType,result=this.result,segment=result?.segments[this.index];
    node.dataset.outputReady=String(!!result);body.inert=!result;
    if(!result){
      if(kind!=='transcript')body.replaceChildren(el('p','output-empty','Awaiting analysis'));
      return;
    }
    if(kind==='transcript'){
      body.querySelector('.output-segment-time').textContent=segment?`${formatTimestamp(segment.start)} — ${formatTimestamp(segment.end)}`:'';
      body.querySelector('.output-transcript-text').textContent=segment?.text||'No spoken segments were returned.';
      body.querySelector('.output-segment-position').textContent=result.segments.length?`${this.index+1} / ${result.segments.length}`:'0 / 0';
      const buttons=body.querySelectorAll('button');buttons[0].disabled=!segment||this.index===0;buttons[1].disabled=!segment||this.index===result.segments.length-1;
      return;
    }
    body.replaceChildren();
    if(kind==='emotions'||kind==='sentiments'){
      body.append(el('div','output-segment-time',segment?`Segment ${this.index+1} · ${formatTimestamp(segment.start)} — ${formatTimestamp(segment.end)}`:'No spoken segments'));
      const values=segment?.[kind]||[];
      const verdict=segmentVerdict(values);
      body.append(el('p','output-verdict',verdict.label),el('p','output-verdict-detail',verdict.detail));
      if(!values.length)return;
      const limit=3,list=el('div','output-score-list');
      values.slice(0,limit).forEach(value=>{
        const row=el('div','output-score-row'),label=el('span','output-score-name',humanize(value.label)),confidence=el('span','output-score-value',scoreText(value));
        const meter=el('span','output-score-meter'),fill=el('i');fill.style.width=percent(value.confidence);meter.append(fill);
        row.append(label,confidence,meter);list.append(row);
      });
      body.append(list);
      if(values.length>limit){const more=el('button','output-read-more',`All ${values.length} scores ↗`);more.type='button';more.addEventListener('click',this.onReadMore);body.append(more);}
      return;
    }
    const outcome=humanize(result.status);
    const status=this.demo?(result.status==='complete'?'Sample analysis':`Sample · ${outcome}`):outcome;
    const statusText=result.reason?`${status} · ${result.reason}`:status;
    body.append(el('p','output-analysis-status',statusText));
    const verdicts=el('dl','output-clip-verdicts');
    for(const [label,key] of [['Overall emotion','emotion'],['Overall sentiment','sentiment']]){
      const row=el('div');row.append(el('dt','',label),el('dd','',result.verdicts[key]));verdicts.append(row);
    }
    body.append(verdicts);
    const rows=[['Analyzed segments',String(result.segments.length)]];
    if(result.duration!==null)rows.push([result.durationLabel,clock(result.duration)]);
    if(result.version)rows.push(['Model',result.version]);
    if(result.frames!==null)rows.push(['Frames',String(result.frames)]);
    const list=el('dl','output-analysis-facts');
    for(const [label,value] of rows){const row=el('div');row.append(el('dt','',label),el('dd','',value));row.title=value;list.append(row);}
    body.append(list);
  }
}
