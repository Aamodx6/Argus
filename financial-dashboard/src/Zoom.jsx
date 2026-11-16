import React,{createContext,useContext,useState,useEffect} from 'react';
const Context=createContext(null);
export function ZoomProvider({children}){
 const [expanded,setExpanded]=useState(null);
 useEffect(()=>{if(!expanded)return;const previous=document.activeElement;const bodyOverflow=document.body.style.overflow;document.body.style.overflow='hidden';const card=document.querySelector('[data-chart="'+expanded+'"]');card?.querySelector('.close-chart')?.focus();
 const listener=e=>{if(e.key==='Escape'){setExpanded(null);return}if(e.key!=='Tab'||!card)return;const items=[...card.querySelectorAll('button,a,input,select,[tabindex="0"]')].filter(el=>el.getBoundingClientRect().width>0);const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}};
 window.addEventListener('keydown',listener);return()=>{document.body.style.overflow=bodyOverflow;window.removeEventListener('keydown',listener);previous?.focus()}
 },[expanded]);
 return <Context.Provider value={{expanded,setExpanded}}>{children}{expanded&&<div className="chart-backdrop" onClick={()=>setExpanded(null)} aria-hidden="true"/>}</Context.Provider>
}
export const useZoom=()=>useContext(Context);
