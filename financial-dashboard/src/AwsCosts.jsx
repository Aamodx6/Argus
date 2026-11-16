import React,{useState} from 'react';
import {useStore} from './store';
import {tables,IDLE,RATE,auditSource} from './dataLayer';
import {Ring,Metric,Link,Plot,Panel,Keys} from './ChartKit';
import {Filter} from './Benchmark';
import {MoneyDetail,Missing} from './RichTooltip';
const labels={'Amazon SageMaker':'SageMaker','Amazon Simple Storage Service':'S3','AmazonCloudWatch':'CloudWatch'};
const meanings={SageMaker:'Endpoint, training compute and Studio usage',S3:'Stored data, requests and transfer',CloudWatch:'Metrics, ingestion and retained logs','Studio disk':'Retained 5 GB notebook disk',Other:'Other nonzero project service charges'};
const storage=[{name:'Studio disk',value:.672},{name:'S3',value:.3758210696745664},{name:'CloudWatch',value:.0002567203491926}];
export function useAws(view,day){
 const ledger=view==='Single day'?tables.aws_daily.filter(r=>r.date===day):tables.aws_daily;
 const amounts=new Map();
 for(const r of ledger){const name=labels[r.service]||'Other';amounts.set(name,(amounts.get(name)||0)+Number(r.usd))}
 const parts=(view==='After cleanup'?storage:[...amounts].map(([name,value])=>({name,value}))).filter(r=>r.value>0).sort((a,b)=>b.value-a.value);
 const total=parts.reduce((s,r)=>s+r.value,0);
 return{parts,total,period:view==='After cleanup'?'Retained monthly list-price estimate; 730-hour equivalent':view==='Single day'?day+' UTC':'1 Jan–15 Nov 2026 query; returned usage 7 Oct–14 Nov',source:auditSource+(view==='After cleanup'?'aws-cost-reductions-2026-11-15.md':'aws-cost-analysis-2026-11-15.md')};
}
export function AwsComparison({full=false}){
 const {money,both}=useStore(),[view,setView]=useState('Historical gross'),days=[...new Set(tables.aws_daily.map(r=>r.date))].sort().reverse(),[day,setDay]=useState(days[0]);
 const {parts,total,period,source}=useAws(view,day);
 const gross=tables.aws_ledger.filter(r=>r.record_type==='Usage').reduce((s,r)=>s+Number(r.unblended_cost_usd),0);
 const credits=tables.aws_ledger.filter(r=>r.record_type==='Credit').reduce((s,r)=>s+Number(r.unblended_cost_usd),0);
 const tax=tables.aws_ledger.filter(r=>r.record_type==='Tax').reduce((s,r)=>s+Number(r.unblended_cost_usd),0);
 return <><div className="api-tools"><Filter name="View" options={['Historical gross','Single day','After cleanup'].map(n=>[n,n])} selected={[view]} change={a=>setView(a[0])}/>{view==='Single day'&&<select aria-label="UTC billing day" value={day} onChange={e=>setDay(e.target.value)}>{days.map(d=><option key={d}>{d}</option>)}</select>}<span className="status">GPU removed · audit snapshot</span></div>
 <Ring parts={parts} total={total} center={money(total)} renderDetail={r=><MoneyDetail label={r.name} usd={r.value} formula={(100*r.value/total).toPrecision(4)+'% of '+view} status={view==='After cleanup'?'estimated retained storage / month':'Cost Explorer usage; estimated flags apply'} source={source} notes={period+' · '+(meanings[r.name]||'Sum of the services in this view')+'. '+(view==='After cleanup'?'List-price estimate, before allowances, credits and tax.':'Gross before credits; project-wide, including team experiments.')}/>}/>
 {full&&<><div className="metrics-row"><Metric label="Gross usage" usd={gross} status="reported ledger" source={source}/><Metric label="Credits applied" usd={credits} status="reported ledger" source={source}/><Metric label="Net ledger" usd={gross+credits+tax} formula={gross+' + ('+credits+') + '+tax} source={source} notes="Sub-cent precision residue; approximately zero. This is a snapshot, not a finalized invoice."/></div>
 <div className="metrics-row"><Metric label="Before · same monthly baseline" usd={1337.8305231025238} status="list-price estimate" source={source}/><Metric label="After · retained monthly baseline" usd={IDLE} status="list-price estimate" source={source}/><Metric label="Avoided monthly carrying cost" usd={1337.8305231025238-IDLE} formula={'1337.8305231025238 − '+IDLE} source={source} notes="99.9217% reduction in identified constant inventory; same 730-hour basis."/></div>
 <ol className="timeline">{[
 ['15 Nov 2026 · 09:48:10 IST','Endpoint deletion requested. Subsequent verification returned zero endpoints. AWS metering determines the final charge cutoff.'],
 ['Verified during cleanup','Two abandoned multipart uploads aborted. Completed data and model archives retained.'],
 ['Verified during cleanup','S3 abort-incomplete-upload lifecycle enabled after seven days.'],
 ['Verified during cleanup','Endpoint/sample-app logs retained 30 days. Training/Studio logs retained 90 days.'],
 ['Verified during cleanup','Studio default idle timeout set to 60 minutes, allowed range 60–120 minutes.']].map(([date,text])=><li key={text}><b>{date}</b><p>{text}</p></li>)}</ol></>}
 <small>{period} · <Link href={source}/></small><p className="cost-note">List-price estimate, before allowances, credits and tax. Request, transfer and telemetry activity can add small charges. Historical gross usage uses the billing ledger.</p></>
}


export function AwsPage(){
 const {money}=useStore();
 const source=auditSource+'aws-cost-analysis-2026-11-15.md';
 const dailyMap=new Map(),monthlyMap=new Map();
 for(const row of tables.aws_daily){
  const daily=dailyMap.get(row.date)||{name:row.date,day:row.date.slice(5),gross:0};
  daily.gross+=Number(row.usd);dailyMap.set(row.date,daily);
  const month=row.date.slice(0,7),entry=monthlyMap.get(month)||{name:month,SageMaker:0,S3:0,CloudWatch:0,Other:0};
  const service=labels[row.service]||'Other';
  entry[service]+=Number(row.usd);monthlyMap.set(month,entry);
 }
 let running=0;
 const days=[...dailyMap.values()].sort((a,b)=>a.name.localeCompare(b.name)).map(row=>({...row,date:row.name,name:row.day,cumulative:running+=row.gross}));
 const months=[...monthlyMap.values()].sort((a,b)=>a.name.localeCompare(b.name));
 const creditMonths=months.map(row=>{
  const ledger=tables.aws_ledger.filter(r=>r.month===row.name);
  const gross=ledger.filter(r=>r.record_type==='Usage').reduce((s,r)=>s+Number(r.unblended_cost_usd),0);
  const credits=ledger.filter(r=>r.record_type==='Credit').reduce((s,r)=>s+Number(r.unblended_cost_usd),0);
  return{name:row.name,gross,credits:-credits,net:gross+credits};
 });
 const serviceMap=new Map();
 for(const r of tables.aws_daily){if(r.service==='Amazon SageMaker')continue;serviceMap.set(r.service,(serviceMap.get(r.service)||0)+Number(r.usd))}
 const nonGPU=[...serviceMap].filter(([,cost])=>cost>0).map(([name,cost])=>({name:labels[name]||name.replace('Amazon Elastic Compute Cloud - Compute','EC2 compute').replace('Amazon Virtual Private Cloud','VPC').replace('AWS Secrets Manager','Secrets Manager').replace('Amazon API Gateway','API Gateway'),cost})).sort((a,b)=>b.cost-a.cost);
 const gross=creditMonths.reduce((s,r)=>s+r.gross,0),credits=creditMonths.reduce((s,r)=>s+r.credits,0);
 const tooltip=(r,key)=><MoneyDetail label={(r.date||r.name)+' · '+key} usd={r[key]} formula={key==='cumulative'?'Sum of exported daily gross usage through '+r.date:undefined} status={key==='credits'?'Reported credit magnitude':'Reported gross usage; billing estimates may apply'} source={source} notes={key==='credits'?'Credits offset usage; shown as a positive magnitude for comparison.':'Project-wide charges before credits. Returned dates are shown without interpolated days.'}/>;
 return <><div className="visual-metrics aws-metrics"><Metric label="Gross usage" usd={gross} status="Audit ledger · Oct–Nov 2026" source={source}/><Metric label="Credits applied" usd={-credits} status="Audit ledger · Oct–Nov 2026" source={source}/><Metric label="Net ledger" display={Math.abs(gross-credits)<.005?"≈ "+money(0):undefined} usd={gross-credits} formula={gross+' − '+credits} status="Ledger · approximately zero" source={source} notes="Sub-cent precision residue; snapshot, not a finalized invoice."/><Metric label="Retained storage / month" usd={IDLE} status="Post-cleanup list-price estimate" source={auditSource+'aws-cost-reductions-2026-11-15.md'}/></div>
 <div className="visual-grid aws-charts">
 <Panel title="Service spending mix" id="aws-service-mix" rows={tables.aws_daily}><AwsComparison/></Panel>
 <Panel title="Daily AWS expenditure" id="aws-daily" rows={days} foot={<Link href={source}/>}>
 <Plot lines height={250} data={days} series={[{key:'gross',name:'Daily gross usage'}]} format={money} detail={tooltip}/><small>UTC billing dates · 7 Oct–14 Nov 2026</small></Panel>
 <Panel title="Cumulative AWS expenditure" id="aws-cumulative" rows={days} foot={<Link href={source}/>}>
 <Plot lines height={250} data={days} series={[{key:'cumulative',name:'Cumulative gross usage'}]} format={money} detail={tooltip}/><small>Gross usage across returned billing days</small></Panel>
 <Panel title="Monthly spending by service" id="aws-monthly-services" rows={months} foot={<><Keys items={['SageMaker','S3','CloudWatch','Other']}/><Link href={source}/></>}>
 <Plot height={250} stack data={months} series={['SageMaker','S3','CloudWatch','Other'].map(key=>({key,name:key}))} format={money} detail={tooltip}/></Panel>
 <Panel title="Usage and credits by month" id="aws-credits" rows={creditMonths} foot={<><Keys items={['Gross usage','Credits offset']}/><small>Credits shown as positive offset magnitudes</small></>}>
 <Plot height={250} data={creditMonths} series={[{key:'gross',name:'Gross usage'},{key:'credits',name:'Credits offset'}]} format={money} detail={tooltip}/></Panel>
 <Panel title="Other service expenditure" id="aws-other-services" rows={nonGPU} foot={<Link href={source}/>}>
 <Plot horizontal height={270} labels data={nonGPU} series={[{key:'cost',name:'Gross usage · excluding SageMaker'}]} format={v=>money(v,{digits:v>0&&v<.001?8:3})} detail={tooltip}/></Panel>
 </div></>
}
