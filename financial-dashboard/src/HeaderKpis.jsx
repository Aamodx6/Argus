import React from 'react';
import {useStore} from './store';
import {tables,RATE,IDLE,REMOVED_AT,gpuModel,gpuSource,gpuEvidence} from './dataLayer';
import {Metric} from './ChartKit';
export function HeaderKpis(){
 const {inputs}=useStore(),model=gpuModel(inputs);
 const until=inputs.restoredAt?new Date(inputs.restoredAt):new Date();
 const avoided=Math.max(0,(until-new Date(REMOVED_AT))/3600000)*RATE;
 return <div className="headerkpis"><Metric label="Idle storage / month" usd={IDLE} formula="0.37582107 + 0.672 + 0.00025672" status="list-price estimate" source={gpuEvidence}/><Metric label="GPU / hour" usd={RATE} status="list price" source={gpuSource}/><Metric label="GPU / video minute" usd={model.costMinute} display={model.costMinute==null?'Measure it':undefined} formula={RATE+' / '+inputs.throughput} status="Assumption" source={gpuSource}/><Metric label="Avoided GPU cost" usd={avoided} formula={'Elapsed hours since '+REMOVED_AT+' × '+RATE} status="calculated counter" source={gpuEvidence} notes="Calculated avoided provisioned-GPU cost; excludes billing lag and future endpoint recreation. The configured restoration timestamp stops this calculation."/></div>
}
