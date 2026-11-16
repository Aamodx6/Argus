export function smallVideoCost(sizeMB,gpuSeconds,rate,put,get,storage){
 const gib=sizeMB*1e6/(1024**3);
 const s3=put+get+gib*storage;
 return{sizeMB,gpuSeconds,gib,requests:put+get,storage:gib*storage,s3,gpu:gpuSeconds*rate/3600,total:s3+gpuSeconds*rate/3600};
}
export function sharedEndpointAllocation(videosPerDay,rate){
 return{daily:24*rate/videosPerDay,monthly730:730*rate/(30*videosPerDay)};
}
