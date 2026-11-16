import React,{useState} from 'react';
import {useStore} from './store';
import {RATE,IDLE,gpuSource,gpuEvidence} from './dataLayer';
import {Panel,Metric,Plot,Keys,Link} from './ChartKit';
import {MoneyDetail,Missing} from './RichTooltip';
import {GPU_WORKLOADS,THROUGHPUT_OPTIONS} from './scenarios';
export function ScenarioSelect({label,value,onChange,options}){
 return <label className="scenario-select"><span>{label}</span><select aria-label={label} value={value} onChange={e=>onChange(e.target.value)}>{options.map(([v,text])=><option key={v} value={v}>{text}</option>)}</select></label>
}
export function ThroughputSelect(){
 const {inputs,changeInput}=useStore();
 const options=[['','Not measured'],...THROUGHPUT_OPTIONS.map(n=>[String(n),n+' video min / GPU-hour'])];
 if(inputs.throughput&&!THROUGHPUT_OPTIONS.includes(Number(inputs.throughput)))options.push([inputs.throughput,inputs.throughput+' min / GPU-hour · saved']);
 return <ScenarioSelect label="Processing speed · assumption" value={inputs.throughput} onChange={v=>changeInput('throughput',v)} options={options}/>
}
export function GPUPage(){
 const {money,inputs,update,gpuWorkload='Weekly demos'}=useStore();
 const [fleet,setFleet]=useState('1');
 const load=GPU_WORKLOADS[gpuWorkload]||GPU_WORKLOADS['Weekly demos'];
 const hours=Math.min(730,load.hours+load.sessions*load.tail/60),count=Number(fleet);
 const rows=Object.entries(GPU_WORKLOADS).map(([name,r])=>({name,cost:Math.min(730,r.hours+r.sessions*r.tail/60)*RATE*count}));
 const cost=hours*RATE*count;
 const modes=[{name:'Demo only',gpu:cost},{name:'Always on',gpu:730*RATE*count}];
 const curve=[0,8,30,80,160,320,500,730].map(n=>({name:n,demo:Math.min(730,n+load.sessions*load.tail/60)*RATE*count,always:730*RATE*count}));
 const minute=Number(inputs.throughput)>0?RATE/Number(inputs.throughput):null;
 return <><div className="scenario-toolbar"><ScenarioSelect label="Usage schedule · assumption" value={gpuWorkload} onChange={v=>update('gpuWorkload',v)} options={Object.keys(GPU_WORKLOADS).map(n=>[n,n])}/><ScenarioSelect label="GPU fleet · assumption" value={fleet} onChange={setFleet} options={[1,2,4].map(n=>[String(n),n+' GPU'+(n>1?'s':'')])}/><ThroughputSelect/><span className="assumption-pill">Illustrative scenarios</span></div>
 <div className="visual-metrics"><Metric label="GPU / hour" usd={RATE} status="Sydney list price" source={gpuSource}/><Metric label="24-hour GPU cost" usd={RATE*24} formula={RATE+' × 24'} source={gpuSource}/><Metric label="Selected schedule / month" usd={cost} formula={'('+load.hours+' busy hours + '+load.sessions+' sessions × '+load.tail+' min / 60) × '+RATE+' × '+count} status="Scenario estimate" source={gpuSource}/><Metric label="GPU / video minute" usd={minute} formula={RATE+' / '+inputs.throughput} status="Throughput assumption" display={minute==null?'Choose processing speed':undefined} source={gpuSource}/></div>
 <div className="visual-grid">
 <Panel title="Demo schedules" id="demo-schedules" rows={rows} foot={<span>Busy hours + 10-minute load/idle allowance per session · assumptions</span>}><Plot horizontal height={250} data={rows} series={[{key:'cost',name:'Monthly GPU estimate'}]} format={money} labels detail={r=><MoneyDetail label={r.name} usd={r.cost} formula={'('+GPU_WORKLOADS[r.name].hours+' hours + '+GPU_WORKLOADS[r.name].sessions+' × 10/60) × '+RATE+' × '+count} status="Illustrative schedule assumption" source={gpuSource}/>}/></Panel>
 <Panel title="Demo vs always-on" id="gpu-modes" rows={modes} foot={<Link href={gpuSource}/>}><Plot height={250} data={modes} series={[{key:'gpu',name:'Monthly GPU compute'}]} format={v=>money(v,{compact:true})} detail={r=><MoneyDetail label={r.name} usd={r.gpu} formula={r.name==='Always on'?'730 × '+RATE+' × '+count:hours+' × '+RATE+' × '+count} status="List-price scenario" source={gpuSource}/>}/><Keys items={['Monthly GPU compute']}/></Panel>
 <Panel title="Cost across busy hours" id="gpu-curve" rows={curve} foot={<><Keys items={['Demo incl. overhead','Always-on']}/><small>Hours per GPU / month · async scale-to-zero remains a future option.</small></>}><Plot lines height={250} data={curve} series={[{key:'demo',name:'Demo incl. overhead'},{key:'always',name:'Always-on'}]} format={v=>money(v,{compact:true})} detail={(r,k)=><MoneyDetail label={k==='demo'?'Demo':'Always-on'} usd={r[k]} formula={k==='demo'?'min(730, '+r.name+' + '+load.sessions+' × 10/60) × '+RATE+' × '+count:'730 × '+RATE+' × '+count} status="Illustrative schedule assumption" source={gpuSource}/>}/></Panel>
 <Panel title="What cleanup changed" id="gpu-cleanup" rows={[{name:'Before',cost:1337.8305231025238},{name:'After',cost:IDLE}]} foot={<Link href={gpuEvidence}>Audit · 15 Nov 2026 ↗</Link>}><Plot horizontal height={250} labels data={[{name:'Before',cost:1337.8305231025238},{name:'After',cost:IDLE}]} series={[{key:'cost',name:'Monthly carrying cost'}]} format={v=>money(v,{compact:true})} detail={r=><MoneyDetail label={r.name+' cleanup'} usd={r.cost} status="Audited constant-inventory estimate" source={gpuEvidence} notes="99.9217% reduction in identified constant carrying cost; same 730-hour monthly basis."/>}/><small>GPU removed · model and data retained · 99.92% lower estimated carrying cost</small></Panel>
 </div></>
}
