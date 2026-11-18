import {nodes as blueprint,NODE_WIDTH,NODE_HEIGHT,OUTPUT_IDS,wirePath} from './pipeline-model.mjs';

export const RUN_SPACING=1400;
export function createAnalysisLayout(index,compact=false,random=Math.random){
  const nodes=structuredClone(blueprint);
  const columns=[...new Set(nodes.filter(node=>!node.output).map(node=>node.x))].sort((a,b)=>a-b);
  const columnIndex=new Map(columns.map((column,i)=>[column,i]));
  const profile=index%4;
  const phase=index*2.399963;
  let x=80;
  const positions=new Map(columns.map((column,i)=>{
    if(i)x+=396+(i%3===(profile%3)?66:0)+random()*26;
    return [column,x];
  }));
  const spread=.96+random()*.15;
  const modality=new Set(['frames','mel','video','audio','bert']);
  const classification=new Set(['emotion','sentiment']);
  for(const node of nodes.filter(node=>!node.output)){
    const column=columnIndex.get(node.x);
    const flip=modality.has(node.id)?profile>=2:classification.has(node.id)?profile===1||profile===2:profile%2===1;
    const lane=(node.y-334)*(flip?-1:1);
    node.x=positions.get(node.x);
    node.y=410+lane*spread+Math.sin(column*.63+phase)*78+(random()-.5)*18;
  }
  layoutAnalysisOutputs(nodes,index,compact);
  return {nodes,offset:index*RUN_SPACING,wirePath:(from,to,phase=0)=>wirePath(from,to,phase,nodes)};
}

// Reflow outputs without rerandomizing the pipeline or recreating its media.
export function layoutAnalysisOutputs(nodes,index,compact){
  const origin=Math.max(...nodes.filter(node=>!node.output).map(node=>node.x+NODE_WIDTH))+160;
  const profile=index%4;
  const reverseScores=profile===1||profile===2;
  const stagger=[0,112,44,150][profile];
  const transcriptY=[100,0,134,42][profile];
  const scoreY=transcriptY+410;
  const layouts=compact?{
    result:[0,0,360,292], 'summary-output':[0,324,360,180],
    'transcript-output':[0,536,360,250],
    'emotion-output':[reverseScores?188:0,818,172,300],
    'sentiment-output':[reverseScores?0:188,818,172,300],
  }:{
    result:[0,stagger,720,500], 'summary-output':[0,stagger+548,720,200],
    'transcript-output':[820,transcriptY,640,340],
    'emotion-output':[reverseScores?1160:820,scoreY,300,360],
    'sentiment-output':[reverseScores?820:1160,scoreY,300,360],
  };
  for(const node of nodes.filter(node=>node.output)){
    const [dx,y,width,height]=layouts[node.id];
    Object.assign(node,{x:origin+dx,y:y+60,width,height,compact});
  }
}

export function boundsFor(nodes,ids=nodes.map(node=>node.id)){
  const selected=nodes.filter(node=>ids.includes(node.id));
  const x=Math.min(...selected.map(node=>node.x)),y=Math.min(...selected.map(node=>node.y));
  return {x,y,width:Math.max(...selected.map(node=>node.x+(node.width||NODE_WIDTH)))-x,
    height:Math.max(...selected.map(node=>node.y+(node.height||NODE_HEIGHT)))-y};
}

export const STAGES=[['storage'],['access'],['malware','media'],['visual','speech'],['approval'],['queue'],['input'],['decode'],['whisper'],['frames','mel'],['video','audio','bert'],['fusion'],['emotion','sentiment'],['quality'],OUTPUT_IDS];
