import test from 'node:test';
import assert from 'node:assert/strict';
import {buildSchedule,remainingGuide} from '../public/pipeline-schedule.mjs';

test('preview timing varies between runs while preserving stage order and staying faster',()=>{
  const stages=[['upload'],['visual','speech'],['output']];
  const durations={upload:1200,visual:2400,speech:2900,output:1400};
  const quick=buildSchedule(stages,durations,()=>0),slow=buildSchedule(stages,durations,()=>1);
  assert.notDeepEqual(quick,slow);
  for(const plan of [quick,slow]){
    assert.deepEqual(plan.map(stage=>stage.ids),stages);
    plan.forEach(stage=>{
      const original=1200+Math.max(...stage.ids.map(id=>durations[id]))+450;
      assert.ok(stage.lead>0&&stage.work>0&&stage.tail>0);
      assert.ok(stage.lead+stage.work+stage.tail<original*.3,'the preview should spend less time waiting between stages');
      assert.ok(stage.lead+stage.work+stage.tail>original*.2,'variation must retain every stage');
      assert.ok(stage.work>=380,'each module needs a visible processing interval');
    });
  }
});

test('rejoining a running analysis keeps its original camera timeline',()=>{
  const schedule=[{lead:200,work:600,tail:100},{lead:200,work:700,tail:100},{lead:200,work:500,tail:100}];
  const first=remainingGuide(schedule,0),rejoined=remainingGuide(schedule,1350);
  assert.equal(first.duration,2700);
  assert.equal(rejoined.duration,1350);
  assert.deepEqual(rejoined.targets,[{index:2,time:680}]);
  assert.deepEqual(remainingGuide(schedule,3000),{duration:0,targets:[]});
});
