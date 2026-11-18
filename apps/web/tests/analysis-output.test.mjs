import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {describeAnalysis,segmentAtTime,formatTimestamp,segmentVerdict} from '../public/analysis-output.mjs';

test('output keeps timestamps, transcript and returned top-k scores without normalization',()=>{
  const payload=JSON.parse(readFileSync(new URL('../public/pipeline-demo.json',import.meta.url)));
  const view=describeAnalysis(payload);
  assert.equal(view.segments.length,3);
  assert.equal(view.duration,10.4);
  assert.equal(view.durationLabel,'Analyzed span');
  assert.equal(formatTimestamp(3.3),'0:03.300');
  assert.deepEqual(view.segments[0].emotions,payload.analysis.utterances[0].emotions);
  assert.equal(view.segments[0].emotions.length,3);
  assert.equal(view.segments[0].emotions[0].confidence,.82);
  assert.equal(segmentAtTime(view.segments,3.3),1);
  assert.equal(segmentAtTime(view.segments,7.2),2);
  assert.equal(segmentAtTime(view.segments,3.25),-1);
});

test('abstained and empty analysis preserve the quality reason without inventing predictions',()=>{
  const result=describeAnalysis({analysis:{status:'out_of_domain',reason_code:'audio_muted',model_version:'v3',utterances:[]}});
  assert.equal(result.status,'out_of_domain');
  assert.equal(result.reason,'Audio muted');
  assert.equal(result.version,'v3');
  assert.deepEqual(result.segments,[]);
  assert.equal(result.duration,null);
  assert.deepEqual(result.verdicts,{emotion:'No verdict',sentiment:'No verdict'});
  assert.equal(describeAnalysis({analysis:{utterances:[]}}).status,'no_speech');
});

test('clip verdicts preserve a narrow lead and use Mixed when there is no majority',()=>{
  const utterance={start_time:0,end_time:2.36,text:'Oh my god',
    emotions:[{label:'surprise',confidence:.6915}],
    sentiments:[{label:'negative',confidence:.5031},{label:'positive',confidence:.4676}]};
  const single=describeAnalysis({analysis:{utterances:[utterance]}});
  assert.deepEqual(single.verdicts,{emotion:'Surprise',sentiment:'Negative'});
  assert.deepEqual(segmentVerdict(single.segments[0].sentiments),{
    label:'Negative',detail:'50.3% vs 46.8% positive.',
  });
  const next={...utterance,start_time:2.36,end_time:4,sentiments:[{label:'positive',confidence:.9}]};
  assert.equal(describeAnalysis({analysis:{utterances:[utterance,next]}}).verdicts.sentiment,'Mixed');
  assert.equal(describeAnalysis({analysis:{utterances:[utterance,next,{...next,start_time:4,end_time:6}]}}).verdicts.sentiment,'Positive');
});

test('equal scores do not pick a winner based on array order',()=>{
  const tied=[{label:'positive',confidence:.5},{label:'negative',confidence:.5}];
  assert.equal(segmentVerdict(tied).label,'No clear leader');
});

test('optional metadata is used only when present and malformed scores are excluded',()=>{
  const payload={analysis:{overall:{durationSeconds:12,framesProcessed:240},utterances:[{
    start_time:0,end_time:2,text:'Test',emotions:[{label:'joy',confidence:2},{label:'neutral',confidence:.4}],sentiments:[],
  }]}};
  const view=describeAnalysis(payload);
  assert.equal(view.duration,12);assert.equal(view.durationLabel,'Video duration');assert.equal(view.frames,240);
  assert.deepEqual(view.segments[0].emotions,[{label:'neutral',confidence:.4}]);
  assert.deepEqual(view.segments[0].sentiments,[]);
  assert.equal(describeAnalysis({analysis:{utterances:[]}}).frames,null);
});
