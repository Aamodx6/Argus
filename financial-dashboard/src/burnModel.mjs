export const VIDEO_SECONDS=[5,10,15,30,60,90,120,180,240,300];
export function iterationModel(seconds,speed,setupSeconds,hourlyRate){
 const chunks=Math.ceil(seconds/120);
 const processingSeconds=seconds/speed;
 const setupTotal=chunks*setupSeconds;
 const gpuSeconds=processingSeconds+setupTotal;
 return{seconds,chunks,processingSeconds,setupTotal,gpuSeconds,usd:gpuSeconds*hourlyRate/3600};
}
export function burnModel(mtd,elapsed=15,monthDays=30,prior=24.92,budget=200){
 const daily=mtd/elapsed;
 return{mtd,daily,monthly:daily*monthDays,annual:daily*365,mom:(mtd-prior)/prior*100,
 budgetDays:daily>0?Math.max(0,budget-mtd)/daily:null};
}
