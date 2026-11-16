import {formatCurrency} from './moneyFormat.mjs';
import React,{createContext,useContext,useState,useEffect} from 'react';
import {initialInputs,tables,FX,FX_DATE} from './dataLayer';
const Context=createContext(null);
function read(){try{const value=JSON.parse(localStorage.getItem('nuance-finance-v2')||'{}');return value&&typeof value==='object'&&!Array.isArray(value)?value:{}}catch{return {}}}
export function AppStore({children}){
 const [state,setState]=useState(()=>{const saved=read();const valid=[...new Set(tables.annual_benchmarks.map(r=>r.company))];if(Array.isArray(saved.selected)){saved.selected=saved.selected.filter(n=>valid.includes(n));if(!saved.selected.length)saved.selected=valid}else{saved.selected=valid}return{currency:'INR',year:'Latest FY',selected:[...new Set(tables.annual_benchmarks.map(r=>r.company))],...saved,inputs:{...initialInputs,...saved.inputs}}});
 useEffect(()=>{try{localStorage.setItem('nuance-finance-v2',JSON.stringify(state))}catch{}},[state]);
 const update=(key,value)=>setState(s=>({...s,[key]:value}));
 const changeInput=(key,value)=>setState(s=>({...s,inputs:{...s.inputs,[key]:value}}));
 const factor=state.currency==='USD'?1:FX;
 const money=(usd,{digits=2}={})=>usd==null||usd===''?'Not disclosed':formatCurrency(usd*factor,state.currency,digits);
 const both=usd=>usd==null||usd===''?'Not disclosed':formatCurrency(usd,'USD',6)+' / '+formatCurrency(usd*FX,'INR',6);
 const store={...state,update,changeInput,money,both,FX,FX_DATE};
 return <Context.Provider value={store}>{children}</Context.Provider>
}
export const useStore=()=>useContext(Context);
