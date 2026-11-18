import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {describeAnalysis,segmentAtTime,formatTimestamp} from '../public/analysis-output.mjs';

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
  assert.equal(describeAnalysis({analysis:{utterances:[]}}).status,'no_speech');
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
