import test from 'node:test';
import assert from 'node:assert/strict';
import {matchingSegments,transcriptDownload,transcriptText} from '../public/transcript-tools.mjs';
const payload={analysis:{utterances:[{start_time:1.234,end_time:3.5,text:'Hello <world>'},{start_time:3600,end_time:3602.001,text:'Second phrase'}]}};
test('search preserves original segment indexes for video seeking',()=>{
  assert.equal(matchingSegments(payload.analysis.utterances,' SECOND ')[0].index,1);
  assert.equal(matchingSegments(payload.analysis.utterances,'missing').length,0);
});
test('subtitle export uses SRT timestamps including hours and milliseconds',()=>{
  const file=transcriptDownload(payload,'srt',true);
  assert.equal(file.name,'argus-sample-subtitles.srt');
  assert.match(file.text,/00:00:01,234 --> 00:00:03,500/);
  assert.match(file.text,/2\n01:00:00,000 --> 01:00:02,001/);
});
test('plain text preserves content; sample exports disclose their source',()=>{
  assert.equal(transcriptText(payload),'Hello <world>\n\nSecond phrase');
  assert.match(transcriptDownload(payload,'txt',true).text,/Sample transcript/);
  assert.equal(JSON.parse(transcriptDownload(payload,'json',true).text).demo,true);
  assert.equal(transcriptDownload({},'srt').text,'');
});
