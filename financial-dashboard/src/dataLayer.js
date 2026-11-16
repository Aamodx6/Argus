import {csvParse,csvFormat} from 'd3';
const snapshots=import.meta.glob('./data/*.csv',{eager:true,query:'?raw',import:'default'});
export const tables=Object.fromEntries(Object.entries(snapshots).map(([path,text])=>[path.split('/').pop().replace('.csv',''),csvParse(text.replace(/^\uFEFF/,'')).filter(row=>Object.values(row).some(value=>value!==''))]));
export function exportCSV(name,rows){const href=URL.createObjectURL(new Blob(['\uFEFF'+csvFormat(rows)],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=href;a.download=name+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(href),1000)}
export const FX=Number(tables.fx_rates[0].rate);
export const FX_DATE=tables.fx_rates[0].rate_date;
export const UPDATED='2026-11-15';
export const gpu=tables.gpu_pricing[0];
export const RATE=Number(gpu.usd_per_hour);
export const IDLE=1.048077790023759;
export const REMOVED_AT='2026-11-15T09:48:10+05:30';
// Set this timestamp when the endpoint is recreated. The counter stops accruing then.
export const ENDPOINT_RESTORED_AT=null;
export const auditSource='https://github.com/Aamodx6/Nuance/blob/cef48cb/docs/reports/';
export const gpuSource=gpu.source_url;
export const gpuEvidence=gpu.evidence_url;
export function numeric(value){return value===''||value==null||!Number.isFinite(Number(value))?null:Number(value)}
export const initialInputs={
 throughput:'',busyHours:'',sessions:'',tailMinutes:'',endpoints:1,demoHours:'',
 charsPerWord:6,tokensPerWord:1.3,wordsPerMinute:150,outputTokensPer1kWords:'',wordsPerRecord:'',
 professionalPrice:49,businessPrice:199,professionalMinutes:300,businessMinutes:2000,
 planUse:'',fixedMode:'idle',otherFixed:'',sensitivityPercent:20,
 registered:250000,activeShare:'',payingShare:'',businessShare:'',freeMinutes:'',
 proUsage:'',businessUsage:'',utilisation:'',concurrency:'',clipMinutes:'',completionWindow:'',
 storageGB:'',retentionMonths:'',transferGB:'',supportCost:'',paymentFee:'',tax:'',otherCost:'',
 targetMargin:'',meterPrice:'',seatPrice:'',restoredAt:ENDPOINT_RESTORED_AT||''
};
export function gpuModel(input){
 const busy=numeric(input.busyHours),sessions=numeric(input.sessions),tail=numeric(input.tailMinutes);
 const overhead=sessions==null||tail==null?null:sessions*tail/60;
 const hours=busy==null||overhead==null?null:Math.min(730,busy+overhead);
 return {overhead,hours,always:RATE*730*input.endpoints,onDemand:hours==null?null:RATE*hours*input.endpoints,
 costMinute:numeric(input.throughput)>0?RATE/Number(input.throughput):null};
}
export function storageCost(gb){let left=gb,total=0;for(const [size,rate] of [[51200,.025],[460800,.024],[Infinity,.023]]){const amount=Math.min(left,size);total+=amount*rate;left-=amount;if(left<=0)break}return total}
export function scaleModel(input,registered=Number(input.registered),payingShare=numeric(input.payingShare)){
 const need=['activeShare','businessShare','freeMinutes','proUsage','businessUsage','utilisation'];
 if(!(numeric(input.throughput)>0)||!(numeric(input.utilisation)>0)||need.some(k=>numeric(input[k])==null)||payingShare==null)return null;
 const active=registered*input.activeShare/100,paid=active*payingShare/100;
 const business=paid*input.businessShare/100,professional=paid-business,free=active-paid;
 const minutes=free*input.freeMinutes+professional*input.proUsage+business*input.businessUsage;
 const hours=minutes/input.throughput/(input.utilisation/100);
 const gpuCost=hours*RATE;
 const revenue=professional*input.professionalPrice+business*input.businessPrice;
 const peakNeed=['concurrency','clipMinutes','completionWindow'].every(k=>numeric(input[k])>0);
 const peakMinutes=peakNeed?input.concurrency*input.clipMinutes*60/input.completionWindow:null;
 const endpoints=peakNeed?Math.ceil(peakMinutes/(input.throughput*input.utilisation/100)):null;
 const gb=numeric(input.storageGB)!=null&&numeric(input.retentionMonths)!=null?registered*input.storageGB*input.retentionMonths:null;
 const storage=gb==null?null:storageCost(gb);
 const support=numeric(input.supportCost),other=numeric(input.otherCost);
 const payment=numeric(input.paymentFee)==null?null:revenue*input.paymentFee/100;
 const tax=numeric(input.tax)==null?null:revenue*input.tax/100;
 const partial=gpuCost+[storage,support,other,payment,tax].reduce((sum,v)=>sum+(v??0),0);
 const variable=n=>n*RATE/input.throughput/(input.utilisation/100);
 return {registered,active,paid,free,professional,business,minutes,hours,gpuCost,revenue,endpoints,peakMinutes,storage,gb,support,other,payment,tax,partial,
 costActive:active?partial/active:null,costRegistered:registered?partial/registered:null,
 freeCost:variable(free*input.freeMinutes),proVariable:variable(Number(input.proUsage)),businessVariable:variable(Number(input.businessUsage)),
 gpuMargin:revenue?(revenue-gpuCost)/revenue*100:null,contribution:revenue-partial,
 floorPro:numeric(input.targetMargin)>0?variable(Number(input.proUsage))/(1-input.targetMargin/100):null};
}
export function normalizePrice(row,input){
 const native=numeric(row.native_price_usd);
 if(native==null)return null;
 if(row.modality!=='text')return numeric(row.normalized_price_usd);
 if(row.normalized_unit==='usd_per_1m_tokens'){
  const output=numeric(input.outputTokensPer1kWords);
  if(output==null)return null;
  return native*input.tokensPerWord/1000+Number(row.output_usd_per_1m_tokens)*output/1e6;
 }
 if(row.company==='AWS')return Math.max(300,1000*input.charsPerWord)/100*native;
 return numeric(row.normalized_price_usd);
}
