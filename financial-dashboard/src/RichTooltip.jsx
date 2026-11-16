import React,{createContext,useContext,useState,useRef,useEffect} from 'react';
import {createPortal} from 'react-dom';
import {computePosition,flip,shift,offset} from '@floating-ui/dom';
import {useStore} from './store';
const Bus=createContext(null);
export function RichTooltipProvider({children}){
 const [tip,setTip]=useState(null),ref=useRef(null),timer=useRef();
 const close=()=>{clearTimeout(timer.current);setTip(null)};
 const show=(content,target)=>{clearTimeout(timer.current);const rect=target?.getBoundingClientRect?.()||{x:innerWidth/2,y:100,width:1,height:1,top:100,bottom:101,left:innerWidth/2,right:innerWidth/2+1};setTip({content,anchor:{getBoundingClientRect:()=>rect}})};
 const hide=()=>{timer.current=setTimeout(close,170)};
 useEffect(()=>{if(!tip||!ref.current)return;computePosition(tip.anchor,ref.current,{placement:'top',strategy:'fixed',middleware:[offset(10),flip(),shift({padding:10})]}).then(({x,y})=>{if(ref.current)Object.assign(ref.current.style,{left:x+'px',top:y+'px'})})},[tip]);
 useEffect(()=>{const escape=e=>{if(e.key==='Escape')close()};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape)},[]);
 return <Bus.Provider value={{show,hide,close}}>{children}{tip&&createPortal(<div ref={ref} className="rich-tooltip" role="tooltip" id="financial-tooltip" onMouseEnter={()=>clearTimeout(timer.current)} onMouseLeave={hide}>{tip.content}</div>,document.body)}</Bus.Provider>
}
export const useTip=()=>useContext(Bus);
export function TipTarget({content,children,className='',...props}){
 const tip=useTip();return <button type="button" className={'tip-target '+className} aria-describedby="financial-tooltip" onMouseEnter={e=>tip.show(content,e.currentTarget)} onMouseLeave={tip.hide} onFocus={e=>tip.show(content,e.currentTarget)} onBlur={tip.hide} onClick={e=>tip.show(content,e.currentTarget)} {...props}>{children}</button>
}
export function MoneyDetail({label,usd,formula,status='calculated',source,notes,inputs}){
 const {money,both,FX,FX_DATE}=useStore();
 return <><b>{label}</b><strong>{usd==null?'Not disclosed':money(usd,{digits:4})}</strong><div>{both(usd)}</div>{formula&&<p>Calculation · {formula}</p>}{inputs&&<p>Inputs · {inputs}</p>}<p>Status · {status}</p><p>FX · ₹{FX}/USD · {FX_DATE}</p>{notes&&<p>{notes}</p>}{source&&<a href={source} target="_blank" rel="noreferrer">Source ↗</a>}</>
}
export function Missing({label='Not disclosed',why,source}){
 return <TipTarget className="missing" content={<><b>{label}</b><p>{why||'No verified measurement supplied.'}</p>{source&&<a href={source}>Checked source ↗</a>}<p>Checked 15 Nov 2026</p></>}>{label}</TipTarget>
}
