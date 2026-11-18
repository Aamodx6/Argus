import test from 'node:test';
import assert from 'node:assert/strict';
import {zoomView} from '../public/canvas-navigation.mjs';

test('zoom preserves the graph point under the pointer, including at the zoom limits',()=>{
  const view={x:-4200,y:-140,scale:.8},point={x:580,y:320};
  const world={x:(point.x-view.x)/view.scale,y:(point.y-view.y)/view.scale};
  for(const factor of [1.2,.7,100,.001]){
    zoomView(view,factor,point);
    assert.ok(Math.abs((point.x-view.x)/view.scale-world.x)<1e-8);
    assert.ok(Math.abs((point.y-view.y)/view.scale-world.y)<1e-8);
    assert.ok(view.scale>=.25&&view.scale<=2.5);
  }
});
