export function libraryKey(){
  for(const key of ['argus_user','nuance_user']){
    try {
      const user=JSON.parse(localStorage.getItem(key));
      const identity=user?.id??user?.email;
      if(identity)return `argus-library:user:${encodeURIComponent(String(identity))}`;
    }catch{}
  }
  return 'argus-library:guest';
}

export function loadLibrary(key){
  try {
    const saved=JSON.parse(localStorage.getItem(key));
    if(saved?.spaces?.length&&Array.isArray(saved.entries))return saved;
  }catch{}
  return {spaces:[{id:'default',name:'My videos'}],entries:[],active:'default'};
}

let database;
function openDatabase(){
  database??=new Promise((resolve,reject)=>{
    const request=indexedDB.open('argus-console-media',1);
    request.onupgradeneeded=()=>request.result.createObjectStore('videos');
    request.onsuccess=()=>resolve(request.result);
    request.onerror=()=>reject(request.error);
  }).catch(error=>{database=null;throw error;});
  return database;
}

export async function localVideo(key,id,file){
  const db=await openDatabase();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction('videos',file?'readwrite':'readonly');
    const store=tx.objectStore('videos');
    const entryKey=[key,id];
    const request=file?store.put(file,entryKey):store.get(entryKey);
    tx.oncomplete=()=>resolve(request.result);
    tx.onabort=()=>reject(tx.error);
  });
}
