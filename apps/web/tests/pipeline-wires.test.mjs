import test from 'node:test';
import assert from 'node:assert/strict';
import {edges,wirePath,layoutOutputs} from '../public/pipeline-model.mjs';

test('living curves retain fixed ports and valid geometry in both output layouts',()=>{
  for(const compact of [false,true]){
    layoutOutputs(compact);
    for(const [from,to] of edges){
      const a=wirePath(from,to,0),b=wirePath(from,to,1.4);
      assert.doesNotMatch(a,/NaN|Infinity/);
      assert.match(a,/[CQ]/);
      assert.equal(a.match(/^M [\d.]+ [\d.]+/)[0],b.match(/^M [\d.]+ [\d.]+/)[0]);
      assert.equal(a.split(' ').slice(-2).join(' '),b.split(' ').slice(-2).join(' '));
      assert.notEqual(a,b);
    }
  }
  layoutOutputs();
});
