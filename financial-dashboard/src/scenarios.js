export const GPU_WORKLOADS={
 'One demo':{hours:2,sessions:1,tail:10},
 'Weekly demos':{hours:8,sessions:4,tail:10},
 'Daily demos':{hours:30,sessions:30,tail:10},
 'Working hours':{hours:160,sessions:20,tail:10}
};
export const SCALE_PROFILES={
 Light:{active:1,paid:2,freeMinutes:1,paidMinutes:15,utilisation:50},
 Typical:{active:5,paid:5,freeMinutes:2,paidMinutes:30,utilisation:60},
 Busy:{active:10,paid:10,freeMinutes:5,paidMinutes:60,utilisation:70}
};
export const THROUGHPUT_OPTIONS=[30,60,120,300,600];
export function scalePreset(users,profile,throughput,price){
 if(!throughput)return null;
 const active=users*profile.active/100,paid=active*profile.paid/100,free=active-paid;
 const freeMinutes=free*profile.freeMinutes,paidMinutes=paid*profile.paidMinutes;
 const hours=(freeMinutes+paidMinutes)/throughput/(profile.utilisation/100);
 return{active,paid,free,minutes:freeMinutes+paidMinutes,hours,revenue:paid*price,
 freeHours:freeMinutes/throughput/(profile.utilisation/100),paidHours:paidMinutes/throughput/(profile.utilisation/100)};
}
