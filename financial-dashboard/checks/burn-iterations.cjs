const assert=require('node:assert/strict');
const path=require('node:path');
const{pathToFileURL}=require('node:url');
const{chromium}=require('playwright');
(async()=>{
 const{iterationModel,burnModel}=await import('../src/burnModel.mjs');
 assert.ok(Math.abs(iterationModel(5,1,0,1.8312).usd-.002543333333333333)<1e-12);
 assert.ok(Math.abs(iterationModel(300,1,0,1.8312).usd-.1526)<1e-12);
 assert.equal(iterationModel(300,1,0,1.8312).chunks,3);
 assert.equal(iterationModel(300,1,15,1.8312).gpuSeconds,345);
 assert.equal(iterationModel(60,2,0,1.8312).usd,iterationModel(60,1,0,1.8312).usd/2);
 assert.equal(burnModel(116.77).monthly,233.54);
 const browser=await chromium.launch({channel:'msedge'});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve('dist/index.html')).href);
  await page.locator('.ninecard').first().waitFor();
  assert.equal(await page.locator('.ninecard').count(),9);
  await page.getByRole('button',{name:'USD',exact:true}).click();
  assert.match(await page.locator('#aws .ringbox').innerText(),/116.78/);
  await page.getByRole('link',{name:'AWS costs',exact:true}).click();
  await page.locator('#iteration-duration').waitFor();
  assert.equal(await page.locator('.aws-charts [data-chart]').count(),8);
  assert.match(await page.locator('[data-metric="Latest overall · Oct + Nov"]').innerText(),/141.70/);
  await page.getByLabel('Burn calculation basis',{exact:true}).selectOption('summary');
  assert.match(await page.locator('[data-metric="Linear month-end scenario"]').innerText(),/233.54/);
  await page.getByLabel('Video duration',{exact:true}).selectOption('300');
  assert.match(await page.locator('[data-metric="One user · one iteration"]').innerText(),/0.1526/);
  await page.getByLabel('Users · assumption',{exact:true}).selectOption('1000');
  assert.match(await page.locator('[data-metric="All users · selected iterations"]').innerText(),/152.60/);
  await page.getByLabel('Processing speed · assumption',{exact:true}).selectOption('2');
  assert.match(await page.locator('[data-metric="One user · one iteration"]').innerText(),/0.0763/);
  await page.getByRole('button',{name:'INR',exact:true}).click();
  await page.mouse.move(0,0);
  await page.locator('[data-metric="One user · one iteration"]').focus();
  await page.getByRole('tooltip').waitFor();
  assert.match(await page.getByRole('tooltip').innerText(),/₹|USD/);
  await page.keyboard.press('Escape');
  await page.getByRole('button',{name:'Latest console ▾',exact:true}).click();
  await page.getByRole('menuitem',{name:'Historical gross',exact:true}).click();
  assert.match(await page.locator('#aws-service-mix .ringbox').innerText(),/10.69K/);
  await page.getByRole('button',{name:'Historical gross ▾',exact:true}).click();
  await page.getByRole('menuitem',{name:'Single day',exact:true}).click();
  assert.equal(await page.getByLabel('UTC billing day',{exact:true}).inputValue(),'2026-11-14');
  for(const width of [1440,1024,390]){
   await page.setViewportSize({width,height:900});
   await page.waitForFunction(w=>document.documentElement.scrollWidth<=w,width,{timeout:3000});
  }
  assert.deepEqual(errors,[]);
  console.log('PASS: latest/legacy billing snapshots, precise burn formulas, 5-sec to 5-min iteration costs, chunking, aggregate users, currencies, tooltips and responsive layouts');
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
