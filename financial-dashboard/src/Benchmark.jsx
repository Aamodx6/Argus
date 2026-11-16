import React,{useEffect,useRef,useState} from 'react';
import * as echarts from 'echarts/core';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,ResponsiveContainer,Tooltip as ChartTooltip} from 'recharts';
import {Card} from './card';
import {DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuCheckboxItem} from './dropdown-menu';
import {TooltipProvider,Tooltip,TooltipTrigger,TooltipContent} from './tooltip';

const metrics={revenue:'Annual revenue',cost:'Cost of revenue',rd:'R&D',sales:'Sales and marketing',cloud:'Cloud infrastructure',ai:'AI inference · estimate'};
const colors=['#9f91c2','#87b39d','#81a3c6','#c6a77d','#a8b2bd','#b08e9f'];
const standard=['Subscription','Professional services','Usage-based revenue','Licensing and other'];
export function Filter({name,options,selected,change,multi=false}){
 return <DropdownMenu><DropdownMenuTrigger asChild><button className="benchfilter">{multi?name+' ('+selected.length+')':selected[0]} ▾</button></DropdownMenuTrigger><DropdownMenuContent className="benchmenu">{options.map(([key,title])=>multi?<DropdownMenuCheckboxItem key={key} checked={selected.includes(key)} onSelect={e=>e.preventDefault()} onCheckedChange={on=>change(on?[...selected,key]:selected.filter(x=>x!==key))}>{title}</DropdownMenuCheckboxItem>:<DropdownMenuItem key={key} onSelect={()=>change([key])}>{title}</DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
}
function Help({children}){return <TooltipProvider><Tooltip><TooltipTrigger asChild><button aria-label="Chart details">ⓘ</button></TooltipTrigger><TooltipContent className="benchmenu">{children}</TooltipContent></Tooltip></TooltipProvider>}
export default function Benchmark({rows,money,fx}){
 const [company,setCompany]=useState(rows[0].company),[companies,setCompanies]=useState(rows.slice(0,4).map(r=>r.company)),[keys,setKeys]=useState(['cost','rd','sales']);
 const row=rows.find(r=>r.company===company),options=rows.map(r=>[r.company,r.company]),ref=useRef();
 const parts=row.mix?row.mix.split('|').map(s=>{const [name,v]=s.split(':');return {name,value:Number(v)}}):[];
 const format=(v,short=false)=>money(v*1e6*fx,short);
 useEffect(()=>{
 const chart=echarts.init(ref.current,null,{renderer:'svg'});
 chart.setOption({animation:false,color:colors,tooltip:{trigger:'item',confine:true,formatter:p=>p.name+'<br>'+format(p.value)+' · '+p.percent+'%'},series:[{type:'pie',radius:['68%','88%'],label:{show:false},data:parts}]});
 const observer=new ResizeObserver(()=>chart.resize());observer.observe(ref.current);return()=>{observer.disconnect();chart.dispose()}
 },[row,fx]);
 const selected=rows.filter(r=>companies.includes(r.company));
 const data=selected.map(r=>({...r,...Object.fromEntries(keys.map(k=>[k,r[k]?Number(r[k]):null]))}));
 return <div className="benchgrid"><Card><div className="charthead"><h2>Revenue composition</h2><Filter name="Company" options={options} selected={[company]} change={v=>setCompany(v[0])}/></div><p>{row.period?'Year ended '+row.period:'Annual breakdown unavailable'} {row.source_url&&<a href={row.source_url} target="_blank" rel="noreferrer">Filing ↗</a>}</p>
 <div className="benchmix"><div className="benchring"><div ref={ref}/><strong>{row.revenue?format(+row.revenue,true):'N/A'}<small>Total revenue</small></strong></div><div>{parts.map((p,i)=><div className="benchlegend" key={p.name}><i style={{background:colors[i]}}/>{p.name}<b>{(100*p.value/row.revenue).toFixed(1)}%</b></div>)}</div></div><p>N/A · {standard.filter(n=>!parts.some(p=>p.name===n)).join(' · ')}</p></Card>
 <Card><div className="charthead"><h2>Enterprise expense breakdown</h2><Help>Annual consolidated figures. N/A indicates an unavailable figure. AI inference is a separate estimate series.</Help></div><div className="mapcontrol"><Filter multi name="Companies" options={options} selected={companies} change={setCompanies}/><Filter multi name="Metrics" options={Object.entries(metrics).filter(([key])=>key!=='revenue')} selected={keys} change={setKeys}/></div>
 <ResponsiveContainer width="100%" height={190}><BarChart data={data} margin={{left:2,right:12,top:12}}><CartesianGrid vertical={false} stroke="#343944"/><XAxis dataKey="company" stroke="#aeb4c2" tick={{fontSize:10}} interval={0}/><YAxis tickFormatter={v=>format(v,true)} width={72} stroke="#aeb4c2"/><ChartTooltip content={({active,label})=>{const r=selected.find(v=>v.company===label);return active&&r?<div className="benchmenu"><b>{label} · {r.period||'Period N/A'}</b>{keys.map(k=><div key={k}>{metrics[k]} · {r[k]?format(+r[k]):'N/A'}</div>)}</div>:null}}/>{keys.map(k=><Bar key={k} dataKey={k} fill={colors[Object.keys(metrics).indexOf(k)]} isAnimationActive={false}/>)}</BarChart></ResponsiveContainer>
 <div className="benchseries">{keys.map(k=><span key={k}><i style={{background:colors[Object.keys(metrics).indexOf(k)]}}/>{metrics[k]}{selected.every(r=>!r[k])?' · N/A':''}</span>)}</div><p>{selected.map(r=>r.source_url?<a key={r.company} href={r.source_url} target="_blank" rel="noreferrer">{r.company} {r.period} ↗　</a>:<span key={r.company}>{r.company} · N/A　</span>)}</p></Card></div>
}
