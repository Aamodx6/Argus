import {formatTimestamp,segmentVerdict} from './analysis-output.mjs';
import {transcriptDownload,transcriptText} from './transcript-tools.mjs';
const $=id=>document.getElementById(id);
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const highlight = (text, term) => {
  if (!term) return escape(text);
  const pattern = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let cursor = 0;
  let html = '';
  for (const match of text.matchAll(new RegExp(pattern, 'giu'))) {
    html += escape(text.slice(cursor, match.index)) + '<mark>' + escape(match[0]) + '</mark>';
    cursor = match.index + match[0].length;
  }
  return html + escape(text.slice(cursor));
};

export class AnalysisReview {
  constructor({onSeek,onOpen}){
    Object.assign(this,{onSeek,onOpen});this.index=0;
    this.sheet=$('result-sheet');
    this.sheet.addEventListener('cancel',event=>{event.preventDefault();this.close();});
    $('close-result').onclick=()=>this.close();
    $('transcript-search').oninput=()=>{this.filter();this.render(0);};
    $('previous-result').onclick=()=>this.render(this.index-1);
    $('next-result').onclick=()=>this.render(this.index+1);
    $('result-content').onclick=event=>{
      const target=event.target.closest('[data-segment]');if(!target)return;
      const run=this.run;this.close(false);this.onSeek(run,Number(target.dataset.segment));
    };
    $('copy-transcript').onclick=async()=>{
      try {await navigator.clipboard.writeText(transcriptText(this.run.result,false));$('result-feedback').textContent='Transcript copied.';}
      catch {$('result-feedback').textContent='Clipboard unavailable. Download TXT instead.';}
    };
    $('export-result').onclick=()=>{
      if(!this.run?.result)return;
      const file=transcriptDownload(this.run.result,$('result-format').value,false);
      const url=URL.createObjectURL(new Blob([file.text],{type:file.type}));
      const a=document.createElement('a');a.href=url;a.download=`analysis-${this.run.index+1}-${file.name}`;a.click();
      setTimeout(()=>URL.revokeObjectURL(url),1000);
    };
    this.sheet.addEventListener('keydown',event=>{
      if(event.key==='Escape'){
        event.preventDefault();
        this.close();
        return;
      }
      if(event.target.matches('input,select')||!['ArrowLeft','ArrowRight'].includes(event.key))return;
      event.preventDefault();
      this.render(this.index+(event.key==='ArrowLeft'?-1:1));
    });
  }
  open(run,index=run?.outputs.index??0){
    if(!run?.result||this.sheet.open)return;
    this.run=run;
    this.opener=document.activeElement;
    this.wasPlaying=!!run.video&&!run.video.paused;
    run.video?.pause();
    this.onOpen();
    $('result-title').textContent=run.title;
    $('result-source').textContent='AWS analysis';
    const result=run.outputs.result;
    $('result-summary').innerHTML=`<div><span>Overall emotion</span><strong>${escape(result.verdicts.emotion)}</strong></div><div><span>Overall sentiment</span><strong>${escape(result.verdicts.sentiment)}</strong></div><div><span>Segments</span><strong>${result.segments.length}</strong></div>${result.duration==null?'':`<div><span>${result.durationLabel}</span><strong>${result.duration.toFixed(1)}s</strong></div>`}`;
    $('transcript-search').value='';$('result-feedback').textContent='';$('result-format').value='json';
    $('transcript-search').disabled=$('copy-transcript').disabled=!result.segments.length;
    for(const option of $('result-format').options)option.disabled=option.value!=='json'&&!result.segments.length;
    this.filter();this.render(index);this.sheet.showModal();
    this.sheet.querySelector('.review-body').scrollTop=0;
    $('close-result').focus({preventScroll:true});
  }
  filter(){
    this.query=$('transcript-search').value.trim();
    const term=this.query.toLocaleLowerCase();
    this.matches=this.run.outputs.result.segments.map((segment,index)=>({segment,index})).filter(({segment})=>!term||segment.text.toLocaleLowerCase().includes(term));
    $('transcript-match-count').textContent=term?`${this.matches.length} matching segment${this.matches.length===1?'':'s'}`:'';
  }
  render(index){
    this.index=Math.max(0,Math.min(index,this.matches.length-1));
    $('result-position').textContent=this.matches.length?`${this.index+1} / ${this.matches.length}`:'0 / 0';
    $('previous-result').disabled=!this.index;$('next-result').disabled=this.index>=this.matches.length-1;
    const match=this.matches[this.index];
    if(!match){
      $('result-content').innerHTML=this.query
        ? '<p class="result-quote">No matching segments.</p>'
        : '<p class="result-quote">No spoken segments were returned.</p>';
      return;
    }
    const s=match.segment;
    const scores=(title,values,kind)=>{
      if(!values.length)return '';
      const verdict=segmentVerdict(values);
      const rows=values.map(value=>{
        const percent=Math.round(value.confidence*100);
        return `<li class="result-score"><span>${escape(value.label)}</span><span>${percent}%</span><span class="review-score-track" aria-hidden="true"><i style="width:${percent}%"></i></span></li>`;
      }).join('');
      return `<section class="review-score-group" data-kind="${kind}"><h3>${title}</h3><p class="output-verdict">${escape(verdict.label)}</p><p class="output-verdict-detail">${escape(verdict.detail)}</p><ul>${rows}</ul></section>`;
    };
    $('result-content').innerHTML=`
      <div class="review-segment">
        <button type="button" class="result-time result-seek" data-segment="${match.index}" aria-label="Jump to ${formatTimestamp(s.start)} in video">
          <span aria-hidden="true">▶</span> ${formatTimestamp(s.start)} — ${formatTimestamp(s.end)}
        </button>
        <p class="result-quote">${highlight(s.text,this.query)}</p>
      </div>
      <div class="result-scores">${scores('Emotion',s.emotions,'emotion')}${scores('Sentiment',s.sentiments,'sentiment')}</div>`;
  }
  close(resume=true){
    if(!this.sheet.open)return;
    this.sheet.close();
    this.opener?.focus({preventScroll:true});
    if(resume&&this.wasPlaying)this.run.video.play().catch(()=>{});
  }
}
