import {defineConfig} from 'vite';
export default defineConfig({
 build:{modulePreload:false,rolldownOptions:{output:{codeSplitting:false}}},
 plugins:[{name:'offline-dashboard',enforce:'post',generateBundle(_,bundle){
 const page=bundle['index.html'];
 page.source=page.source
 .replace(/<script[^>]+src="([^"]+)"[^>]*><\/script>/g,(_,path)=>'<script type="module">'+bundle[path.replace(/^\//,'')].code.replaceAll('__VITE_PRELOAD__','[]').replace(/<\/script/gi,'<\\/script')+'</script>')
 .replace(/<link[^>]+href="([^"]+\.css)"[^>]*>/g,(_,path)=>'<style>'+bundle[path.replace(/^\//,'')].source+'</style>');
 }}]
});
