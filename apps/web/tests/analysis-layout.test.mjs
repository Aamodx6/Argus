import test from 'node:test';
import assert from 'node:assert/strict';
import {createAnalysisLayout,layoutAnalysisOutputs,RUN_SPACING,boundsFor} from '../public/analysis-layout.mjs';
import {edges,NODE_WIDTH,NODE_HEIGHT} from '../public/pipeline-model.mjs';

test('runs own independent, varied layouts in separate canvas rows',()=>{
  const a=createAnalysisLayout(0,false,()=>.1),b=createAnalysisLayout(1,false,()=>.9);
  assert.equal(b.offset-a.offset,RUN_SPACING);
  assert.notDeepEqual(a.nodes.map(n=>[n.x,n.y]),b.nodes.map(n=>[n.x,n.y]));
  const old=a.nodes[0].x;b.nodes[0].x+=15;assert.equal(a.nodes[0].x,old);
  for(const run of [a,b])for(let i=0;i<run.nodes.length;i++)for(let j=i+1;j<run.nodes.length;j++){
    const x=run.nodes[i],y=run.nodes[j];
    const overlaps=x.x<y.x+(y.width||NODE_WIDTH)&&y.x<x.x+(x.width||NODE_WIDTH)&&x.y<y.y+(y.height||NODE_HEIGHT)&&y.y<x.y+(x.height||NODE_HEIGHT);
    assert.equal(overlaps,false,`${x.id} overlaps ${y.id}`);
  }
});

test('every connection follows its own run layout in desktop and compact modes',()=>{
  for(const compact of [false,true]){
    const run=createAnalysisLayout(3,compact,()=>.6);
    assert.ok(boundsFor(run.nodes).height<RUN_SPACING);
    for(const [from,to] of edges){
      const path=run.wirePath(from,to,1);
      assert.doesNotMatch(path,/NaN|Infinity/);
      const first=run.nodes.find(node=>node.id===from),last=run.nodes.find(node=>node.id===to);
      const ends=path.split(' ').slice(-2).map(Number);
      assert.ok(ends[0]>=last.x&&ends[0]<=last.x+(last.width||NODE_WIDTH));
      assert.ok(ends[1]>=last.y&&ends[1]<=last.y+(last.height||NODE_HEIGHT));
      assert.ok(first&&last);
    }
  }
});

test('responsive reflow preserves each pipeline and restores its desktop outputs',()=>{
  const run=createAnalysisLayout(1,false,()=>.4);
  const pipeline=structuredClone(run.nodes.filter(node=>!node.output));
  const desktop=structuredClone(run.nodes.filter(node=>node.output));
  layoutAnalysisOutputs(run.nodes,1,true);
  assert.deepEqual(run.nodes.filter(node=>!node.output),pipeline);
  assert.ok(run.nodes.filter(node=>node.output).every(node=>node.compact));
  assert.equal(run.nodes.find(node=>node.id==='result').width,360);
  layoutAnalysisOutputs(run.nodes,1,false);
  assert.deepEqual(run.nodes.filter(node=>node.output),desktop);
});

test('successive runs rearrange branches and result nodes even with identical jitter',()=>{
  const layouts=Array.from({length:4},(_,index)=>createAnalysisLayout(index,false,()=>.5));
  const position=(run,id)=>run.nodes.find(node=>node.id===id);
  const order=(run,from,to,axis)=>Math.sign(position(run,from)[axis]-position(run,to)[axis]);
  assert.notEqual(order(layouts[0],'malware','media','y'),order(layouts[1],'malware','media','y'));
  assert.notEqual(order(layouts[1],'video','bert','y'),order(layouts[2],'video','bert','y'));
  assert.notEqual(order(layouts[0],'emotion-output','sentiment-output','x'),order(layouts[1],'emotion-output','sentiment-output','x'));
  for(const {nodes} of layouts){
    for(const node of nodes){
      assert.ok(node.y>=0&&node.y+(node.height||NODE_HEIGHT)<RUN_SPACING);
      for(const other of nodes){
        if(other===node)continue;
        assert.ok(node.x+(node.width||NODE_WIDTH)<=other.x||other.x+(other.width||NODE_WIDTH)<=node.x||node.y+(node.height||NODE_HEIGHT)<=other.y||other.y+(other.height||NODE_HEIGHT)<=node.y);
      }
    }
  }
});
