import { describeAnalysis } from './analysis-output.mjs';

export function matchingSegments(utterances, query) {
  const term=query.trim().toLocaleLowerCase();
  return utterances.map((item,index)=>({item,index})).filter(({item})=>!term||String(item.text||'').toLocaleLowerCase().includes(term));
}

export function transcriptText(payload, demo=false) {
  const text=describeAnalysis(payload).segments.map(segment=>segment.text).join('\n\n');
  return (demo?'Sample transcript · not analyzed from your clip\n\n':'')+text;
}

function subtitleTime(seconds) {
  const ms=Math.max(0,Math.round(seconds*1000));
  return `${String(Math.floor(ms/3600000)).padStart(2,'0')}:${String(Math.floor(ms/60000)%60).padStart(2,'0')}:${String(Math.floor(ms/1000)%60).padStart(2,'0')},${String(ms%1000).padStart(3,'0')}`;
}

export function transcriptDownload(payload, format='json', demo=false) {
  const prefix=demo?'argus-sample':'argus';
  if(format==='txt')return {name:`${prefix}-transcript.txt`,type:'text/plain;charset=utf-8',text:transcriptText(payload,demo)};
  if(format==='srt')return {
    name:`${prefix}-subtitles.srt`,type:'application/x-subrip;charset=utf-8',
    text:describeAnalysis(payload).segments.filter(segment=>segment.text.trim()&&segment.end>segment.start).map((segment,index)=>`${index+1}\n${subtitleTime(segment.start)} --> ${subtitleTime(segment.end)}\n${segment.text.replace(/\r?\n\s*\r?\n/g,'\n')}\n`).join('\n'),
  };
  return {name:`${prefix}-analysis.json`,type:'application/json',text:JSON.stringify(demo?{...payload,source:'sample',demo:true}:payload,null,2)};
}
