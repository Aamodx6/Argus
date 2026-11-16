import React,{useEffect,useRef} from 'react';
import * as ec from 'echarts/core';
import {MapChart,PieChart,HeatmapChart} from 'echarts/charts';
import {VisualMapComponent,GridComponent,TooltipComponent,GraphicComponent} from 'echarts/components';
import {SVGRenderer} from 'echarts/renderers';
import {feature} from 'topojson-client';
import atlas from './world.json';
import {useTip} from './RichTooltip';
ec.use([MapChart,PieChart,HeatmapChart,VisualMapComponent,GridComponent,TooltipComponent,GraphicComponent,SVGRenderer]);
const world=feature(atlas,atlas.objects.countries);world.features=world.features.filter(f=>f.id!=='010');ec.registerMap('World',world);
export const palette=['#df7039','#292b28','#efa76d','#86877d','#c9b99e'];
export function EPlot({option,height=165,detail}){
 const ref=useRef(null),tip=useTip();
 useEffect(()=>{const chart=ec.init(ref.current,null,{renderer:'svg'});chart.setOption({animation:false,color:palette,textStyle:{color:'#34453c'},...option});if(detail){const show=p=>{if(p.dataIndex<0)return;tip.show(detail(p),ref.current)};chart.on('mouseover',show);chart.on('click',show);chart.on('mouseout',()=>tip.hide())}const observer=new ResizeObserver(()=>chart.resize());observer.observe(ref.current);return()=>{observer.disconnect();chart.dispose()}},[option]);
 return <div ref={ref} className="eplot" style={{height,width:'100%',minHeight:0}}/>;
}
export const missing={type:'text',left:'center',top:'middle',style:{text:'Not disclosed',fill:'#aeb6c9',fontSize:15}};
