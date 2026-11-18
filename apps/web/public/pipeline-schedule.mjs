// One bounded timing plan drives both the camera and the simulated work.
// Each preview varies gently; pipeline order and real backend events do not.
export function buildSchedule(stages,durations,random=Math.random) {
  return stages.map(ids=>({
    ids,
    lead:Math.round(230*(.95+random()*.1)),
    work:Math.round(Math.max(380,Math.max(...ids.map(id=>durations[id]||1800))*.26*(.95+random()*.1))),
    tail:Math.round(60*(.9+random()*.2)),
  }));
}

// Rejoining the guided camera uses the run's clock, never a restarted schedule.
export function remainingGuide(schedule,elapsed=0){
  let total=0;
  const targets=[];
  schedule.forEach((step,index)=>{
    const time=total+step.lead*.65-elapsed;
    if(time>1)targets.push({index,time});
    total+=step.lead+step.work+step.tail;
  });
  return {duration:Math.max(0,total-elapsed),targets};
}
