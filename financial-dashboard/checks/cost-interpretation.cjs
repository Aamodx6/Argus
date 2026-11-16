const assert=require('node:assert/strict');
const path=require('node:path');
const{pathToFileURL}=require('node:url');
const{chromium}=require('playwright');
(async()=>{
 const{smallVideoCost,sharedEndpointAllocation}=await import('../src/videoCostModel.mjs');
 const sample=smallVideoCost(.89,10,1.8312,.0000055,.00000044,.025);
 assert.ok(sample.s3>.000026&&sample.s3<.000028);
 assert.ok(Math.abs(sample.total-.005113328017950058)<.0000001);
 assert.ok(Math.abs(sharedEndpointAllocation(19,1.8312).daily-2.313094736842105)<1e-12);
 assert.ok(Math.abs(sharedEndpointAllocation(19,1.8312).monthly730-2.345221052631579)<1e-12);
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve('dist/index.html')).href+'#/aws-costs');
  await page.locator('#sample-runtime-cost').waitFor();
  assert.equal(await page.getByText('Bundled snapshot · 16 Nov 2026',{exact:true}).count(),0);
  assert.equal(await page.getByText('Snapshot context · 1–15 Nov 2026',{exact:true}).count(),0);
  assert.equal(await page.locator('.sharedfilters').getByText(/94.1997/).count(),0);
  assert.equal(await page.getByText('Source totals differ by $0.01 · 15 elapsed days used',{exact:true}).count(),0);
  await page.getByRole('button',{name:'USD',exact:true}).click();
  assert.match(await page.locator('[data-metric="S3 · upload, read and first month"]').innerText(),/0.000026/);
  assert.match(await page.locator('[data-metric="Always-on allocation \/ video"]').innerText(),/2.3131/);
  await page.getByLabel('Completed videos / day · assumption',{exact:true}).selectOption('100');
  assert.match(await page.locator('[data-metric="Always-on allocation \/ video"]').innerText(),/0.4395/);
  await page.mouse.move(0,0);
  await page.locator('[data-metric="S3 · upload, read and first month"]').focus();
  await page.getByRole('tooltip').waitFor();
  assert.match(await page.getByRole('tooltip').innerText(),/FX/);
  await page.keyboard.press('Escape');
  for(const width of [1440,1024,390]){await page.setViewportSize({width,height:900});await page.waitForFunction(w=>document.documentElement.scrollWidth<=w,width,{timeout:3000})}
  assert.deepEqual(errors,[]);
  console.log('PASS: verified small-file arithmetic, consistent daily/monthly GPU allocation, removed layout stamps, preserved tooltip provenance, dropdowns and responsive layout.');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
