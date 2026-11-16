const SCALES=[{size:1e9,suffix:'B'},{size:1e6,suffix:'M'},{size:1e3,suffix:'K'}];
export function formatCurrency(value,currency='USD',digits=2){
 if(value==null||value===''||!Number.isFinite(Number(value)))return 'Not disclosed';
 const amount=Number(value),absolute=Math.abs(amount);
 let index=SCALES.findIndex(scale=>absolute>=scale.size);
 if(index>0&&Number((absolute/SCALES[index].size).toFixed(2))>=1000)index-=1;
 const scale=index<0?null:SCALES[index];
 const number=new Intl.NumberFormat('en-US',{
  minimumFractionDigits:scale?0:Math.min(2,digits),
  maximumFractionDigits:scale?2:digits
 }).format(Math.abs(amount)/(scale?.size||1));
 return (amount<0?'-':'')+(currency==='INR'?'₹':'$')+number+(scale?.suffix||'');
}
