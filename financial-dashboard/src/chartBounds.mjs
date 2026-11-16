export function chartBounds(data,series,stack=false,requestedDomain){
 let low=0,high=0;
 for(const row of data){
  let positive=0,negative=0;
  for(const item of series){
   const value=row[item.key];
   if(value==null||value===''||!Number.isFinite(Number(value)))continue;
   const number=Number(value);
   if(stack&&!item.line){if(number>=0)positive+=number;else negative+=number}
   else{low=Math.min(low,number);high=Math.max(high,number)}
  }
  low=Math.min(low,negative);high=Math.max(high,positive);
 }
 const extent=high-low||1;
 const domain=[low<0?low-extent*.12:0,high>0?high+extent*.18:low<0?0:1];
 if(requestedDomain){
  if(Number.isFinite(requestedDomain[0]))domain[0]=Math.min(domain[0],requestedDomain[0]);
  if(Number.isFinite(requestedDomain[1]))domain[1]=Math.max(domain[1],requestedDomain[1]);
 }
 return domain;
}
