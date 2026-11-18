export const NODE_WIDTH = 304;
export const NODE_HEIGHT = 144;
export const GRAPH = { width: 7300, height: 900 };
export const nodes = [
  [
    "access",
    "Upload access",
    "Signed upload & quota",
    80,
    200,
    "input",
    [
      ["Authentication", "Account session"],
      ["Allowance", "Monthly quota"],
    ],
  ],
  [
    "storage",
    "Video input",
    "Amazon S3 upload",
    80,
    440,
    "input",
    [
      ["Format", "MP4"],
      ["Maximum", "128 MiB"],
    ],
  ],
  [
    "malware",
    "Malware scan",
    "Object safety verdict",
    410,
    170,
    "safety",
    [
      ["Scan", "Threat detection"],
      ["Output", "Pass / review / block"],
    ],
  ],
  [
    "media",
    "Media validation",
    "Container & stream checks",
    410,
    440,
    "safety",
    [
      ["Probe", "Duration & dimensions"],
      ["Streams", "Video / audio"],
    ],
  ],
  [
    "visual",
    "Visual safety",
    "Frame moderation",
    740,
    170,
    "safety",
    [
      ["Input", "Sampled frames"],
      ["Full scan", "When required"],
    ],
  ],
  [
    "speech",
    "Speech safety",
    "Language & toxicity",
    740,
    440,
    "safety",
    [
      ["Language", "Speech detection"],
      ["Safety", "Toxicity screening"],
    ],
  ],
  [
    "approval",
    "Safety decision",
    "Policy gate",
    1070,
    310,
    "safety",
    [
      ["Decision", "Pass / review / block"],
      ["Review", "When required"],
    ],
  ],
  [
    "queue",
    "Inference queue",
    "Job dispatch",
    1400,
    310,
    "input",
    [
      ["Mode", "Asynchronous"],
      ["Output", "Inference request"],
    ],
  ],
  [
    "input",
    "Load video",
    "Inference input",
    1730,
    310,
    "prepare",
    [
      ["Source", "Private object"],
      ["Check", "Input location"],
    ],
  ],
  [
    "decode",
    "Decode audio",
    "Audio extraction",
    2060,
    440,
    "prepare",
    [
      ["Signal", "Mono audio"],
      ["Sample rate", "16 kHz"],
    ],
  ],
  [
    "whisper",
    "Speech to text",
    "Whisper base",
    2390,
    440,
    "prepare",
    [
      ["Output", "Timed segments"],
      ["Alignment", "Word timestamps"],
    ],
  ],
  [
    "frames",
    "Prepare frames",
    "Utterance video segments",
    2720,
    110,
    "prepare",
    [
      ["Frames", "Up to 30"],
      ["Resolution", "224 × 224"],
    ],
  ],
  [
    "mel",
    "Audio features",
    "Mel spectrogram",
    2720,
    410,
    "prepare",
    [
      ["Bands", "64 Mel channels"],
      ["Input", "Segment audio"],
    ],
  ],
  [
    "bert",
    "Text encoder",
    "BERT base",
    3050,
    670,
    "model",
    [
      ["Tokens", "Up to 128"],
      ["Embedding", "128 dimensions"],
    ],
  ],
  [
    "video",
    "Video encoder",
    "R3D-18",
    3050,
    110,
    "model",
    [
      ["Input", "Video frames"],
      ["Embedding", "128 dimensions"],
    ],
  ],
  [
    "audio",
    "Audio encoder",
    "Convolutional network",
    3050,
    390,
    "model",
    [
      ["Input", "Mel features"],
      ["Embedding", "128 dimensions"],
    ],
  ],
  [
    "fusion",
    "Multimodal fusion",
    "Text + video + audio",
    3380,
    370,
    "model",
    [
      ["Input", "3 × 128 dimensions"],
      ["Fused", "256 dimensions"],
    ],
  ],
  [
    "emotion",
    "Emotion head",
    "Emotion classification",
    3710,
    150,
    "model",
    [
      ["Classes", "7 emotions"],
      ["Output", "Top 3 predictions"],
    ],
  ],
  [
    "sentiment",
    "Sentiment head",
    "Sentiment classification",
    3710,
    520,
    "model",
    [
      ["Classes", "3 sentiments"],
      ["Output", "Class probabilities"],
    ],
  ],
  [
    "quality",
    "Quality gate",
    "Optional calibrated policy",
    4040,
    370,
    "quality",
    [
      ["Check", "Confidence & quality"],
      ["Policy", "When configured"],
    ],
  ],
  [
    "result",
    "Video output",
    "Time-aligned predictions",
    4370,
    370,
    "output",
    [
      ["Emotion", "Awaiting result"],
      ["Sentiment", "Awaiting result"],
    ],
  ],
].map(([id, title, subtitle, x, y, kind, rows], index) => ({
  id,
  title,
  subtitle,
  x,
  y,
  kind,
  rows,
  index: index + 1,
}));
// Compact left-to-right architecture; parallel branches share a column.
const positions = {
  storage: [80, 334], access: [390, 334],
  malware: [700, 134], media: [700, 534],
  visual: [1010, 134], speech: [1010, 534],
  approval: [1320, 334], queue: [1630, 334],
  input: [1940, 334], decode: [2250, 334], whisper: [2560, 334],
  frames: [2870, 94], mel: [2870, 334],
  video: [3180, 94], audio: [3180, 334], bert: [3180, 574],
  fusion: [3490, 334], emotion: [3800, 134], sentiment: [3800, 534],
  quality: [4110, 334], result: [4420, 334],
};
nodes.sort((a, b) => (a.id === "storage" ? -1 : b.id === "storage" ? 1 : 0));
nodes.forEach((node, index) => {
  [node.x, node.y] = positions[node.id];
  node.x = 80 + (node.x - 80) / 310 * 400;
  node.index = index + 1;
});
nodes.find((node) => node.id === "access").title = "Upload & access";
export const OUTPUT_IDS=['result','summary-output','transcript-output','emotion-output','sentiment-output'];
const preview=nodes.find(node=>node.id==='result');
Object.assign(preview,{title:'Video preview',output:'preview',rows:[],width:392,height:304});
for(const [id,title,output] of [
  ['summary-output','Final result','summary'],
  ['transcript-output','Transcript','transcript'],
  ['emotion-output','Emotion verdict','emotions'],
  ['sentiment-output','Sentiment verdict','sentiments'],
])nodes.push({id,title,output,subtitle:'',kind:'output',rows:[],index:nodes.length+1});
export function layoutOutputs(compact=false){
  const origin=5680;
  const layout=compact?{
    result:[0,0,360,292],
    'transcript-output':[0,316,360,240],
    'emotion-output':[0,580,172,240],
    'sentiment-output':[188,580,172,240],
    'summary-output':[0,844,360,164],
  }:{
    result:[0,0,720,500],
    'summary-output':[0,540,720,200],
    'transcript-output':[800,0,640,340],
    'emotion-output':[800,380,300,360],
    'sentiment-output':[1140,380,300,360],
  };
  OUTPUT_IDS.forEach(id=>{
    const node=nodes.find(node=>node.id===id),[x,y,width,height]=layout[id];
    Object.assign(node,{x:origin+x,y,width,height,compact});
  });
}
layoutOutputs();
export function outputBounds(){
  const views=nodes.filter(node=>node.output);
  const x=Math.min(...views.map(node=>node.x)),y=Math.min(...views.map(node=>node.y));
  return {x,y,width:Math.max(...views.map(node=>node.x+node.width))-x,height:Math.max(...views.map(node=>node.y+node.height))-y};
}
export const lanes = [
  { x: 80, label: "01 — INPUT" },
  { x: 700, label: "02 — SAFETY" },
  { x: 1940, label: "03 — PREPARATION" },
  { x: 3180, label: "04 — MULTIMODAL MODEL" },
  { x: 4110, label: "05 — READOUT" },
];
lanes.forEach(lane => { lane.x = 80 + (lane.x - 80) / 310 * 400; });
export const edges = [
  ["storage", "access"],
  ["access", "malware"],
  ["access", "media"],
  ["malware", "visual"],
  ["media", "visual"],
  ["media", "speech"],
  ["visual", "approval"],
  ["speech", "approval"],
  ["approval", "queue"],
  ["queue", "input"],
  ["input", "decode"],
  ["decode", "whisper"],
  ["whisper", "frames"],
  ["whisper", "mel"],
  ["whisper", "bert"],
  ["frames", "video"],
  ["mel", "audio"],
  ["bert", "fusion"],
  ["video", "fusion"],
  ["audio", "fusion"],
  ["fusion", "emotion"],
  ["fusion", "sentiment"],
  ["emotion", "quality"],
  ["sentiment", "quality"],
  ["quality", "result"],
  ["result", "summary-output"],
  ["result", "transcript-output"],
  ["transcript-output", "emotion-output"],
  ["transcript-output", "sentiment-output"],
];
function connectionPoints(from,to,graphNodes=nodes){
  const a=graphNodes.find(node=>node.id===from),b=graphNodes.find(node=>node.id===to);
  if(a.output&&b.output&&!a.compact){
    if(to==='summary-output')return [[a.x+a.width/2,a.y+a.height],[a.x+a.width/2,b.y+24]];
    if(from==='transcript-output'){
      const x=a.x+a.width/2,y=a.y+a.height,tx=b.x+b.width/2,ty=b.y+24;
      return [[x,y],[x,y+24],[tx,y+24],[tx,ty]];
    }
  }
  if(a.output&&b.output&&a.compact){
    if(to==='summary-output')return [[a.x,a.y+a.height/2],[a.x-20,a.y+a.height/2],[a.x-20,b.y+b.height/2],[b.x,b.y+b.height/2]];
    const x=a.x+a.width/2,y=a.y+a.height,tx=b.x+b.width/2,ty=b.y+24;
    return x===tx?[[x,y],[tx,ty]]:[[x,y],[x,y+8],[tx,y+8],[tx,ty]];
  }
  const x=a.x+(a.width||NODE_WIDTH),y=a.y+(a.output?(a.id==='result'?a.height/2:56):NODE_HEIGHT/2);
  const tx=b.x,ty=b.y+(b.output?56:NODE_HEIGHT/2);
  if(y===ty)return [[x,y],[tx,ty]];
  const mid=from==='whisper'&&to==='bert'?x+38:(x+tx)/2;
  return [[x,y],[mid,y],[mid,ty],[tx,ty]];
}
export function wirePath(from,to,phase=0,graphNodes=nodes){
  const points=connectionPoints(from,to,graphNodes);
  // Port anchors stay fixed. The cable bends gently between them, like a
  // suspended lead; longer branches retain their safe route around nodes.
  const seed=[...`${from}:${to}`].reduce((sum,char)=>sum+char.charCodeAt(0),0);
  const drift=Math.sin(phase+seed)*3;
  if(points.length===2){
    const [[x,y],[tx,ty]]=points;
    if(y===ty){
      const span=tx-x,bow=12+drift;
      return `M ${x} ${y} C ${x+span*.34} ${y-bow} ${x+span*.66} ${ty+bow} ${tx} ${ty}`;
    }
    const span=ty-y,bow=7+drift;
    return `M ${x} ${y} C ${x-bow} ${y+span*.34} ${tx+bow} ${y+span*.66} ${tx} ${ty}`;
  }
  if(points.length===4&&!(from==='whisper'&&to==='bert')&&!(to==='summary-output'&&graphNodes.find(node=>node.id===from).compact)){
    const [[x,y],a,b,[tx,ty]]=points;
    return `M ${x} ${y} C ${a[0]+drift} ${a[1]} ${b[0]-drift} ${b[1]} ${tx} ${ty}`;
  }
  let d=`M ${points[0][0]} ${points[0][1]}`;
  for(let i=1;i<points.length-1;i++){
    const prev=points[i-1],at=points[i],next=points[i+1];
    const before=Math.hypot(at[0]-prev[0],at[1]-prev[1]),after=Math.hypot(next[0]-at[0],next[1]-at[1]);
    const r=Math.min(48,before/2,after/2)*(.9+drift/50);
    if(!before||!after)continue;
    const a=[at[0]-(at[0]-prev[0])/before*r,at[1]-(at[1]-prev[1])/before*r];
    const b=[at[0]+(next[0]-at[0])/after*r,at[1]+(next[1]-at[1])/after*r];
    d+=` L ${a[0]} ${a[1]} Q ${at[0]} ${at[1]} ${b[0]} ${b[1]}`;
  }
  return d+` L ${points.at(-1)[0]} ${points.at(-1)[1]}`;
}
export const groups = {
  safety: ["malware", "media", "visual", "speech", "approval"],
  inference: [
    "input",
    "decode",
    "whisper",
    "frames",
    "mel",
    "bert",
    "video",
    "audio",
    "fusion",
    "emotion",
    "sentiment",
  ],
};
