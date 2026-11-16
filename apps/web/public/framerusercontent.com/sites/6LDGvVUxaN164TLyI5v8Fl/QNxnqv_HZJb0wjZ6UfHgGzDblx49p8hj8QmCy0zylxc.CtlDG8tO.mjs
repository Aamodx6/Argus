import{t as e}from"./rolldown-runtime.Bi-D_2cA.mjs";import{A as t,C as n,I as r,L as i,P as a,R as o,_ as s,b as c,c as l,j as u,l as d,o as f,p,s as m,w as h,y as g}from"./react.Dxe_2v0O.mjs";import{S as _,a as v,r as y,t as b}from"./motion.CD3k2nee.mjs";import{C as x,D as S,F as C,I as w,J as T,S as E,St as D,T as O,V as k,Z as A,_t as j,a as M,b as N,ct as ee,d as te,dt as ne,ft as re,gt as ie,h as P,i as F,n as ae,o as I,ot as L,p as R,rt as oe,st as se,ut as ce,w as z,y as le}from"./framer.T2OZlNiN.mjs";import{A as B,C as ue,D as V,E as H,M as U,O as W,S as de,T as fe,_ as pe,a as me,b as he,c as ge,d as _e,f as ve,g as ye,h as be,i as xe,j as Se,k as Ce,l as we,m as Te,o as Ee,p as De,r as Oe,s as ke,u as Ae,v as je,w as Me,x as Ne,y as Pe}from"./toplevel-deps.vYwK1d_u.mjs";import{a as Fe,i as Ie,n as Le,r as Re,t as ze}from"./MlKit.Dab0xwW_.mjs";import{i as Be,t as G}from"./MT7JtUhTC.DTmnzX5S.mjs";import{i as Ve,t as He}from"./MXW3dSWM1.KISKaCKW.mjs";import{i as Ue,n as We,r as Ge,t as Ke}from"./SgjAn1egO.DD4wraAK.mjs";import{i as qe,n as Je,r as Ye,t as Xe}from"./Tx3vQ27Oa.CirKklZ0.mjs";import{i as Ze,n as Qe,r as $e,t as et}from"./y9jJLGiqH.CdMDGsfv.mjs";import{i as tt,n as nt,r as rt,t as it}from"./zeRogG0s3.Bb1vEPfT.mjs";import{n as at,r as ot}from"./augiA20Il.CGCShZln.mjs";function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(so[e&255]+so[e>>8&255]+so[e>>16&255]+so[e>>24&255]+`-`+so[t&255]+so[t>>8&255]+`-`+so[t>>16&15|64]+so[t>>24&255]+`-`+so[n&63|128]+so[n>>8&255]+`-`+so[n>>16&255]+so[n>>24&255]+so[r&255]+so[r>>8&255]+so[r>>16&255]+so[r>>24&255]).toLowerCase()}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}function pt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function mt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ht(){let e=mt(`canvas`);return e.style.display=`block`,e}function gt(e){e in fo||(fo[e]=!0,console.warn(e))}function _t(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function vt(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function St(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?yo.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}function Ct(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Go.fromArray(e,a);let o=i.x*Math.abs(Go.x)+i.y*Math.abs(Go.y)+i.z*Math.abs(Go.z),s=t.dot(Go),c=n.dot(Go),l=r.dot(Go);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function wt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Tt(){let e=/* @__PURE__ */ new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=/* @__PURE__ */ new Uint32Array(512),i=/* @__PURE__ */ new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=/* @__PURE__ */ new Uint32Array(2048),o=/* @__PURE__ */ new Uint32Array(64),s=/* @__PURE__ */ new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function Et(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;xc.copy(s),xc.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(xc);return l<n.near||l>n.far?null:{distance:l,point:xc.clone(),object:e}}function Dt(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,hc),e.getVertexPosition(c,gc),e.getVertexPosition(l,_c);let u=Et(e,t,n,r,hc,gc,_c,bc);if(u){let e=new J;Ws.getBarycoord(bc,hc,gc,_c,e),i&&(u.uv=Ws.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Ws.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Ws.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};Ws.getNormal(hc,gc,_c,t.normal),u.face=t,u.barycoord=e}return u}function Ot(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function kt(e){let t={};for(let n=0;n<e.length;n++){let r=Ot(e[n]);for(let e in r)t[e]=r[e]}return t}function At(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function jt(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_o.workingColorSpace}function Mt(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Nt(e){let t=/* @__PURE__ */ new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}function Pt(e,t,n,r,i,a,o){let s=new X(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Sc(new Cc(1,1,1),new Dc({name:`BackgroundCubeMaterial`,uniforms:Ot(Kc.backgroundCube.uniforms),vertexShader:Kc.backgroundCube.vertexShader,fragmentShader:Kc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Jc.copy(n.backgroundRotation),Jc.x*=-1,Jc.y*=-1,Jc.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Jc.y*=-1,Jc.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yc.makeRotationFromEuler(Jc)),u.material.toneMapped=_o.getTransfer(r.colorSpace)!==to,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Sc(new Gc(2,2),new Dc({name:`BackgroundMaterial`,uniforms:Ot(Kc.background.uniforms),vertexShader:Kc.background.vertexShader,fragmentShader:Kc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=_o.getTransfer(r.colorSpace)!==`srgb`,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(qc,jt(e)),r.buffers.color.setClear(qc.r,qc.g,qc.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function Ft(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function It(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Lt(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`);if(f===!0){let e=t.get(`EXT_clip_control`);e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT)}let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Rt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Vc,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function zt(e){let t=/* @__PURE__ */ new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new Lc(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=/* @__PURE__ */ new WeakMap}return{get:r,dispose:a}}function Bt(e){let t=[],n=[],r=[],i=e,a=e-Zc+1+Qc.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Zc?s=Qc[o-e+Zc-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=/* @__PURE__ */ new Float32Array(108),p=/* @__PURE__ */ new Float32Array(72),m=/* @__PURE__ */ new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new uc;h.setAttribute(`position`,new ec(f,3)),h.setAttribute(`uv`,new ec(p,2)),h.setAttribute(`faceIndex`,new ec(m,1)),t.push(h),i>Zc&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Vt(e,t,n){let r=new Eo(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ht(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ut(e,t,n){let r=new Float32Array($c),i=new J(0,1,0);return new Dc({name:`SphericalGaussianBlur`,defines:{n:$c,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wt(){return new Dc({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Kt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gt(){return new Dc({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kt(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qt(e){let t=/* @__PURE__ */ new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new ll(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new ll(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=/* @__PURE__ */ new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Jt(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&gt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Yt(e,t,n,r){let i={},a=/* @__PURE__ */ new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(pt(n)?nc:tc)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Xt(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Zt(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Qt(e,t,n){let r=/* @__PURE__ */ new WeakMap,i=new wo;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){let e=function(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,e)};d!==void 0&&d.texture.dispose();let n=o.morphAttributes.position!==void 0,a=o.morphAttributes.normal!==void 0,s=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],f=o.morphAttributes.color||[],p=0;n===!0&&(p=1),a===!0&&(p=2),s===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*u),_=new Do(g,m,h,u);_.type=qi,_.needsUpdate=!0;let v=p*4;for(let e=0;e<u;e++){let t=c[e],r=l[e],o=f[e],u=m*h*4*e;for(let e=0;e<t.count;e++){let c=e*v;n===!0&&(i.fromBufferAttribute(t,e),g[u+c+0]=i.x,g[u+c+1]=i.y,g[u+c+2]=i.z,g[u+c+3]=0),a===!0&&(i.fromBufferAttribute(r,e),g[u+c+4]=i.x,g[u+c+5]=i.y,g[u+c+6]=i.z,g[u+c+7]=0),s===!0&&(i.fromBufferAttribute(o,e),g[u+c+8]=i.x,g[u+c+9]=i.y,g[u+c+10]=i.z,g[u+c+11]=o.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new K(m,h)},r.set(o,d),o.addEventListener(`dispose`,e)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function $t(e,t,n,r){let i=/* @__PURE__ */ new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=/* @__PURE__ */ new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}function en(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=gl[i];if(a===void 0&&(a=new Float32Array(i),gl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function tn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function nn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function rn(e,t){let n=_l[t];n===void 0&&(n=new Int32Array(t),_l[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function an(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function on(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2fv(this.addr,t),nn(n,t)}}function sn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tn(n,t))return;e.uniform3fv(this.addr,t),nn(n,t)}}function cn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4fv(this.addr,t),nn(n,t)}}function ln(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),nn(n,t)}else{if(tn(n,r))return;bl.set(r),e.uniformMatrix2fv(this.addr,!1,bl),nn(n,r)}}function un(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),nn(n,t)}else{if(tn(n,r))return;yl.set(r),e.uniformMatrix3fv(this.addr,!1,yl),nn(n,r)}}function dn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),nn(n,t)}else{if(tn(n,r))return;vl.set(r),e.uniformMatrix4fv(this.addr,!1,vl),nn(n,r)}}function fn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function pn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2iv(this.addr,t),nn(n,t)}}function mn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3iv(this.addr,t),nn(n,t)}}function hn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4iv(this.addr,t),nn(n,t)}}function gn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function _n(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2uiv(this.addr,t),nn(n,t)}}function vn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3uiv(this.addr,t),nn(n,t)}}function yn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4uiv(this.addr,t),nn(n,t)}}function bn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(fl.compareFunction=515,a=fl):a=dl,n.setTexture2D(t||a,i)}function xn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ml,i)}function Sn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||hl,i)}function Cn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||pl,i)}function wn(e){switch(e){case 5126:return an;case 35664:return on;case 35665:return sn;case 35666:return cn;case 35674:return ln;case 35675:return un;case 35676:return dn;case 5124:case 35670:return fn;case 35667:case 35671:return pn;case 35668:case 35672:return mn;case 35669:case 35673:return hn;case 5125:return gn;case 36294:return _n;case 36295:return vn;case 36296:return yn;case 35678:case 36198:case 36298:case 36306:case 35682:return bn;case 35679:case 36299:case 36307:return xn;case 35680:case 36300:case 36308:case 36293:return Sn;case 36289:case 36303:case 36311:case 36292:return Cn}}function Tn(e,t){e.uniform1fv(this.addr,t)}function En(e,t){let n=en(t,this.size,2);e.uniform2fv(this.addr,n)}function Dn(e,t){let n=en(t,this.size,3);e.uniform3fv(this.addr,n)}function On(e,t){let n=en(t,this.size,4);e.uniform4fv(this.addr,n)}function kn(e,t){let n=en(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function An(e,t){let n=en(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function jn(e,t){let n=en(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Mn(e,t){e.uniform1iv(this.addr,t)}function Nn(e,t){e.uniform2iv(this.addr,t)}function Pn(e,t){e.uniform3iv(this.addr,t)}function Fn(e,t){e.uniform4iv(this.addr,t)}function In(e,t){e.uniform1uiv(this.addr,t)}function Ln(e,t){e.uniform2uiv(this.addr,t)}function Rn(e,t){e.uniform3uiv(this.addr,t)}function zn(e,t){e.uniform4uiv(this.addr,t)}function Bn(e,t,n){let r=this.cache,i=t.length,a=rn(n,i);tn(r,a)||(e.uniform1iv(this.addr,a),nn(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||dl,a[e])}function Vn(e,t,n){let r=this.cache,i=t.length,a=rn(n,i);tn(r,a)||(e.uniform1iv(this.addr,a),nn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ml,a[e])}function Hn(e,t,n){let r=this.cache,i=t.length,a=rn(n,i);tn(r,a)||(e.uniform1iv(this.addr,a),nn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||hl,a[e])}function Un(e,t,n){let r=this.cache,i=t.length,a=rn(n,i);tn(r,a)||(e.uniform1iv(this.addr,a),nn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||pl,a[e])}function Wn(e){switch(e){case 5126:return Tn;case 35664:return En;case 35665:return Dn;case 35666:return On;case 35674:return kn;case 35675:return An;case 35676:return jn;case 5124:case 35670:return Mn;case 35667:case 35671:return Nn;case 35668:case 35672:return Pn;case 35669:case 35673:return Fn;case 5125:return In;case 36294:return Ln;case 36295:return Rn;case 36296:return zn;case 35678:case 36198:case 36298:case 36306:case 35682:return Bn;case 35679:case 36299:case 36307:return Vn;case 35680:case 36300:case 36308:case 36293:return Hn;case 36289:case 36303:case 36311:case 36292:return Un}}function Gn(e,t){e.seq.push(t),e.map[t.id]=t}function Kn(e,t,n){let r=e.name,i=r.length;for(wl.lastIndex=0;;){let a=wl.exec(r),o=wl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Gn(n,l===void 0?new xl(s,e,t):new Sl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Cl(s),Gn(n,e)),n=e}}}function qn(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function Jn(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function Yn(e){let t=_o.getPrimaries(_o.workingColorSpace),n=_o.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case Za:case $a:return[r,`LinearTransferOETF`];case Xa:case Qa:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function Xn(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Jn(e.getShaderSource(t),r)}return i}function Zn(e,t){let n=Yn(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Qn(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function $n(){return _o.getLuminanceCoefficients(Ol),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ol.x.toFixed(4)}, ${Ol.y.toFixed(4)}, ${Ol.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function er(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(rr).join(`
`)}function tr(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function nr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function rr(e){return e!==``}function ir(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ar(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function or(e){return e.replace(kl,sr)}function sr(e,t){let n=Q[t];if(n===void 0){let e=Al.get(t);if(e!==void 0)n=Q[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return or(n)}function cr(e){return e.replace(jl,lr)}function lr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ur(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function dr(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function fr(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function pr(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function mr(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function hr(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function gr(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=dr(n),l=fr(n),u=pr(n),d=mr(n),f=hr(n),p=er(n),m=tr(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(rr).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(rr).join(`
`),_.length>0&&(_+=`
`)):(g=[ur(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(rr).join(`
`),_=[ur(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Q.tonemapping_pars_fragment,n.toneMapping===0?``:Qn(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,Zn(`linearToOutputTexel`,n.outputColorSpace),$n(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(rr).join(`
`)),o=or(o),o=ir(o,n),o=ar(o,n),s=or(s),s=ir(s,n),s=ar(s,n),o=cr(o),s=cr(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=qn(i,i.VERTEX_SHADER,y),S=qn(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Xn(i,x,`vertex`),r=Xn(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Tl(i,h),T=nr(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,El)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Dl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}function _r(e,t,n,r,i,a,o){let s=new ms,c=new Nl,l=/* @__PURE__ */ new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,m=i.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(a,s,u,_,v){let y=_.fog,b=v.geometry,x=a.isMeshStandardMaterial?_.environment:null,S=(a.isMeshStandardMaterial?n:t).get(a.envMap||x),C=S&&S.mapping===306?S.image.height:null,w=h[a.type];a.precision!==null&&(m=i.getMaxPrecision(a.precision),m!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,m,`instead.`));let T=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,E=T===void 0?0:T.length,D=0;b.morphAttributes.position!==void 0&&(D=1),b.morphAttributes.normal!==void 0&&(D=2),b.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=Kc[w];O=e.vertexShader,k=e.fragmentShader}else O=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),j=c.getFragmentShaderID(a);let M=e.getRenderTarget(),N=v.isInstancedMesh===!0,ee=v.isBatchedMesh===!0,te=!!a.map,ne=!!a.matcap,re=!!S,ie=!!a.aoMap,P=!!a.lightMap,F=!!a.bumpMap,ae=!!a.normalMap,I=!!a.displacementMap,L=!!a.emissiveMap,R=!!a.metalnessMap,oe=!!a.roughnessMap,se=a.anisotropy>0,ce=a.clearcoat>0,z=a.dispersion>0,le=a.iridescence>0,B=a.sheen>0,ue=a.transmission>0,V=se&&!!a.anisotropyMap,H=ce&&!!a.clearcoatMap,U=ce&&!!a.clearcoatNormalMap,W=ce&&!!a.clearcoatRoughnessMap,de=le&&!!a.iridescenceMap,fe=le&&!!a.iridescenceThicknessMap,pe=B&&!!a.sheenColorMap,me=B&&!!a.sheenRoughnessMap,he=!!a.specularMap,ge=!!a.specularColorMap,_e=!!a.specularIntensityMap,ve=ue&&!!a.transmissionMap,ye=ue&&!!a.thicknessMap,be=!!a.gradientMap,xe=!!a.alphaMap,Se=a.alphaTest>0,Ce=!!a.alphaHash,we=!!a.extensions,Te=0;a.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Te=e.toneMapping);let Ee={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:m,batching:ee,batchingColor:ee&&v._colorsTexture!==null,instancing:N,instancingColor:N&&v.instanceColor!==null,instancingMorph:N&&v.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Za,alphaToCoverage:!!a.alphaToCoverage,map:te,matcap:ne,envMap:re,envMapMode:re&&S.mapping,envMapCubeUVHeight:C,aoMap:ie,lightMap:P,bumpMap:F,normalMap:ae,displacementMap:p&&I,emissiveMap:L,normalMapObjectSpace:ae&&a.normalMapType===1,normalMapTangentSpace:ae&&a.normalMapType===0,metalnessMap:R,roughnessMap:oe,anisotropy:se,anisotropyMap:V,clearcoat:ce,clearcoatMap:H,clearcoatNormalMap:U,clearcoatRoughnessMap:W,dispersion:z,iridescence:le,iridescenceMap:de,iridescenceThicknessMap:fe,sheen:B,sheenColorMap:pe,sheenRoughnessMap:me,specularMap:he,specularColorMap:ge,specularIntensityMap:_e,transmission:ue,transmissionMap:ve,thicknessMap:ye,gradientMap:be,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:Ce,combine:a.combine,mapUv:te&&g(a.map.channel),aoMapUv:ie&&g(a.aoMap.channel),lightMapUv:P&&g(a.lightMap.channel),bumpMapUv:F&&g(a.bumpMap.channel),normalMapUv:ae&&g(a.normalMap.channel),displacementMapUv:I&&g(a.displacementMap.channel),emissiveMapUv:L&&g(a.emissiveMap.channel),metalnessMapUv:R&&g(a.metalnessMap.channel),roughnessMapUv:oe&&g(a.roughnessMap.channel),anisotropyMapUv:V&&g(a.anisotropyMap.channel),clearcoatMapUv:H&&g(a.clearcoatMap.channel),clearcoatNormalMapUv:U&&g(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&g(a.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(a.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(a.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(a.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(a.sheenRoughnessMap.channel),specularMapUv:he&&g(a.specularMap.channel),specularColorMapUv:ge&&g(a.specularColorMap.channel),specularIntensityMapUv:_e&&g(a.specularIntensityMap.channel),transmissionMapUv:ve&&g(a.transmissionMap.channel),thicknessMapUv:ye&&g(a.thicknessMap.channel),alphaMapUv:xe&&g(a.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(ae||se),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!b.attributes.uv&&(te||xe),fog:!!y,useFog:a.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:v.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:te&&a.map.isVideoTexture===!0&&_o.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:we&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(we&&a.extensions.multiDraw===!0||ee)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.alphaToCoverage&&s.enable(20),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=Kc[t];n=wc.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new gr(e,n,t,a),u.push(r)),r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function vr(){let e=/* @__PURE__ */ new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=/* @__PURE__ */ new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function yr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function br(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function xr(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||yr),r.length>1&&r.sort(t||br),i.length>1&&i.sort(t||br)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Sr(){let e=/* @__PURE__ */ new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new xr,e.set(t,[i])):n>=r.length?(i=new xr,r.push(i)):i=r[n],i}function n(){e=/* @__PURE__ */ new WeakMap}return{get:t,dispose:n}}function Cr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new J,color:new X};break;case`SpotLight`:n={position:new J,direction:new J,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function wr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}function Tr(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Er(e){let t=new Cr,n=wr(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Y,o=new Y;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Tr);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Fl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Dr(e){let t=new Er(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Or(e){let t=/* @__PURE__ */ new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Dr(e),t.set(n,[a])):r>=i.length?(a=new Dr(e),i.push(a)):a=i[r],a}function r(){t=/* @__PURE__ */ new WeakMap}return{get:n,dispose:r}}function kr(e,t,n){let r=new Wc,i=new K,a=new K,o=new wo,s=new Il({depthPacking:Ya}),c=new Ll,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Dc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Rl,fragmentShader:zl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new uc;m.setAttribute(`position`,new ec(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Sc(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||p===!0||m===!0){let e=this.type===3?{}:{minFilter:Fi,magFilter:Fi};d.map!==null&&d.map.dispose(),d.map=new Eo(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Eo(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ar(e){function t(){let t=!1,n=new wo,r=null,i=new wo(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=!1,r=null,i=null,a=null;return{setReversed:function(e){n=e},setTest:function(t){t?I(e.DEPTH_TEST):L(e.DEPTH_TEST)},setMask:function(n){r!==n&&!t&&(e.depthMask(n),r=n)},setFunc:function(t){if(n&&(t=Bl[t]),i!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}i=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,r=null,i=null,a=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):L(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let i=new t,a=new n,o=new r,s=/* @__PURE__ */ new WeakMap,c=/* @__PURE__ */ new WeakMap,l={},u={},d=/* @__PURE__ */ new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new X(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=M>=1);let ee=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new wo().fromArray(ne),P=new wo().fromArray(re);function F(t,n,r,i){let a=/* @__PURE__ */ new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=F(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=F(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=F(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=F(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),I(e.DEPTH_TEST),a.setFunc(3),ue(!1),V(1),I(e.CULL_FACE),le(0);function I(t){l[t]!==!0&&(e.enable(t),l[t]=!0)}function L(t){l[t]!==!1&&(e.disable(t),l[t]=!1)}function R(t,n){return u[t]!==n&&(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function oe(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function se(t){return p!==t&&(e.useProgram(t),p=t,!0)}let ce={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ce[103]=e.MIN,ce[104]=e.MAX;let z={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0)m===!0&&(L(e.BLEND),m=!1);else if(m===!1&&(I(e.BLEND),m=!0),t!==5){if(t!==h||u!==w){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}_=null,v=null,b=null,x=null,S.set(0,0,0),C=0,h=t,w=u}}else a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(ce[n],ce[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(z[r],z[i],z[o],z[s]),_=r,v=i,b=o,x=s),(c.equals(S)===!1||l!==C)&&(e.blendColor(c.r,c.g,c.b,l),S.copy(c),C=l),h=t,w=!1}function B(t,n){t.side===2?L(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ue(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);let s=t.stencilWrite;o.setTest(s),s&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),U(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):L(e.SAMPLE_ALPHA_TO_COVERAGE)}function ue(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function V(t){t===0?L(e.CULL_FACE):(I(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function H(t){t!==D&&(j&&e.lineWidth(t),D=t)}function U(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(O!==n||k!==r)&&(e.polygonOffset(n,r),O=n,k=r)):L(e.POLYGON_OFFSET_FILL)}function W(t){t?I(e.SCISSOR_TEST):L(e.SCISSOR_TEST)}function de(t){t===void 0&&(t=e.TEXTURE0+A-1),ee!==t&&(e.activeTexture(t),ee=t)}function fe(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+A-1:ee);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function pe(){let t=te[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function me(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function he(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Te(t){P.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),P.copy(t))}function Ee(t,n){let r=c.get(n);r===void 0&&(r=/* @__PURE__ */ new WeakMap,c.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function De(t,n){let r=c.get(n).get(t);s.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),s.set(n,r))}function Oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},ee=null,te={},u={},d=/* @__PURE__ */ new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new X(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,ie.set(0,0,e.canvas.width,e.canvas.height),P.set(0,0,e.canvas.width,e.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:I,disable:L,bindFramebuffer:R,drawBuffers:oe,useProgram:se,setBlending:le,setMaterial:B,setFlipSided:ue,setCullFace:V,setLineWidth:H,setPolygonOffset:U,setScissorTest:W,activeTexture:de,bindTexture:fe,unbindTexture:pe,compressedTexImage2D:me,compressedTexImage3D:he,texImage2D:Se,texImage3D:Ce,updateUBOMapping:Ee,uniformBlockBinding:De,texStorage2D:be,texStorage3D:xe,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:ve,compressedTexSubImage3D:ye,scissor:we,viewport:Te,reset:Oe}}function jr(e,t,n,r){let i=Mr(r);switch(n){case Qi:return e*t;case ta:return e*t;case na:return e*t*2;case aa:return e*t/i.components*i.byteLength;case oa:return e*t/i.components*i.byteLength;case sa:return e*t*2/i.components*i.byteLength;case ca:return e*t*2/i.components*i.byteLength;case $i:return e*t*3/i.components*i.byteLength;case ea:return e*t*4/i.components*i.byteLength;case la:return e*t*4/i.components*i.byteLength;case ua:case da:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fa:case pa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ha:case _a:return Math.max(e,16)*Math.max(t,8)/4;case ma:case ga:return Math.max(e,8)*Math.max(t,8)/2;case va:case ya:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ka:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Ia:case La:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ra:case za:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ba:case Va:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Mr(e){switch(e){case Vi:case Hi:return{byteLength:1,components:1};case Wi:case Ui:case Ji:return{byteLength:2,components:1};case Yi:case Xi:return{byteLength:2,components:4};case Ki:case Gi:case qi:return{byteLength:4,components:1};case Zi:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function Nr(e,t,n,r,a,o,s){let c=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof i>`u`?!1:/OculusBrowser/g.test(i.userAgent),u=new K,d=/* @__PURE__ */ new WeakMap,f,p=/* @__PURE__ */ new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):mt(`canvas`)}function g(e,t,n){let r=1,i=de(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps&&e.minFilter!==1003&&e.minFilter!==1006}function v(t){e.generateMipmap(t)}function y(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?eo:_o.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function b(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function x(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){let t=e.target;t.removeEventListener(`dispose`,S),w(t),t.isVideoTexture&&d.delete(t)}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),E(t)}function w(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],s.memory.textures--}function E(t){let n=r.get(t);if(t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),s.memory.textures--),r.remove(i[t])}r.remove(t)}let D=0;function O(){D=0}function k(){let e=D;return e>=a.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+a.maxTextures),D+=1,e}function A(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function j(t,i){let a=r.get(t);if(t.isVideoTexture&&U(t),t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{F(a,t,i);return}}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function M(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?F(a,t,i):n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function N(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?F(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ee(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ae(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let te={[Mi]:e.REPEAT,[Ni]:e.CLAMP_TO_EDGE,[Pi]:e.MIRRORED_REPEAT},ne={[Fi]:e.NEAREST,[Ii]:e.NEAREST_MIPMAP_NEAREST,[Li]:e.NEAREST_MIPMAP_LINEAR,[Ri]:e.LINEAR,[zi]:e.LINEAR_MIPMAP_NEAREST,[Bi]:e.LINEAR_MIPMAP_LINEAR},re={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ie(n,i){if(i.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(i.magFilter===1006||i.magFilter===1007||i.magFilter===1005||i.magFilter===1008||i.minFilter===1006||i.minFilter===1007||i.minFilter===1005||i.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,te[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,te[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,te[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ne[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ne[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,re[i.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(i.magFilter===1003||i.minFilter!==1005&&i.minFilter!==1008||i.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(i.anisotropy>1||r.get(i).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,a.getMaxAnisotropy())),r.get(i).__currentAnisotropy=i.anisotropy}}}function P(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,S));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let o=A(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function F(t,i,s){let c=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(c=e.TEXTURE_3D);let l=P(t,i),u=i.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){n.activeTexture(e.TEXTURE0+s);let t=_o.getPrimaries(_o.workingColorSpace),r=i.colorSpace===``?null:_o.getPrimaries(i.colorSpace),f=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=g(i.image,!1,a.maxTextureSize);p=W(i,p);let m=o.convert(i.format,i.colorSpace),h=o.convert(i.type),S=y(i.internalFormat,m,h,i.colorSpace,i.isVideoTexture);ie(c,i);let C,w=i.mipmaps,T=i.isVideoTexture!==!0,E=d.__version===void 0||l===!0,D=u.dataReady,O=x(i,p);if(i.isDepthTexture)S=b(i.format===ia,i.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,S,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,h,null));else if(i.isDataTexture){if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,h,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,h,C.data);i.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,m,h,p.data)):n.texImage2D(e.TEXTURE_2D,0,S,p.width,p.height,0,m,h,p.data)}else if(i.isCompressedTexture){if(i.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(C=w[t],i.format!==1023){if(m!==null){if(T){if(D){if(i.layerUpdates.size>0){let r=jr(C.width,C.height,i.format,i.type);for(let a of i.layerUpdates){let i=C.data.subarray(a*r/C.data.BYTES_PER_ELEMENT,(a+1)*r/C.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,a,C.width,C.height,1,m,i,0,0)}i.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,C.data,0,0)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,C.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,C.width,C.height,p.depth,m,h,C.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,S,C.width,C.height,p.depth,0,m,h,C.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,S,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)C=w[t],i.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,h,C.data):n.texImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,m,h,C.data):m===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,C.width,C.height,m,C.data):n.compressedTexImage2D(e.TEXTURE_2D,t,S,C.width,C.height,0,C.data)}}else if(i.isDataArrayTexture){if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,S,p.width,p.height,p.depth),D){if(i.layerUpdates.size>0){let t=jr(p.width,p.height,i.format,i.type);for(let r of i.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,h,i)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,S,p.width,p.height,p.depth,0,m,h,p.data)}else if(i.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,S,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)):n.texImage3D(e.TEXTURE_3D,0,S,p.width,p.height,p.depth,0,m,h,p.data);else if(i.isFramebufferTexture){if(E){if(T)n.texStorage2D(e.TEXTURE_2D,O,S,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,S,t,r,0,m,h,null),t>>=1,r>>=1}}}else if(w.length>0){if(T&&E){let t=de(w[0]);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)C=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,h,C):n.texImage2D(e.TEXTURE_2D,t,S,m,h,C);i.generateMipmaps=!1}else if(T){if(E){let t=de(p);n.texStorage2D(e.TEXTURE_2D,O,S,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,h,p)}else n.texImage2D(e.TEXTURE_2D,0,S,m,h,p);_(i)&&v(c),d.__version=u.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function ae(t,i,s){if(i.image.length!==6)return;let c=P(t,i),l=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=_o.getPrimaries(_o.workingColorSpace),r=i.colorSpace===``?null:_o.getPrimaries(i.colorSpace),d=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=i.isCompressedTexture||i.image[0].isCompressedTexture,p=i.image[0]&&i.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(i.image[e],!0,a.maxCubemapSize):m[e]=p?i.image[e].image:i.image[e],m[e]=W(i,m[e]);let h=m[0],b=o.convert(i.format,i.colorSpace),S=o.convert(i.type),C=y(i.internalFormat,b,S,i.colorSpace),w=i.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=x(i,h);ie(e.TEXTURE_CUBE_MAP,i);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let a=O[r];i.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,b,S,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,a.width,a.height,0,b,S,a.data):b===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,b,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,a.width,a.height,0,a.data)}}}else{if(O=i.mipmaps,w&&T){O.length>0&&D++;let t=de(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,b,S,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,b,S,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,b,S,i.image[t])}}}_(i)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function I(t,i,a,s,l,u){let d=o.convert(a.format,a.colorSpace),f=o.convert(a.type),p=y(a.internalFormat,d,f,a.colorSpace);if(!r.get(i).__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),H(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,s,l,r.get(a).__webglTexture,0,V(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,s,l,r.get(a).__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function L(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=b(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=V(n);H(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],s=o.convert(a.format,a.colorSpace),l=o.convert(a.type),u=y(a.internalFormat,s,l,a.colorSpace),d=V(n);r&&H(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):H(n)?c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function R(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),j(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=V(i);if(i.depthTexture.format===1026)H(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,a,0);else if(i.depthTexture.format===1027)H(i)?c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0,o):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,a,0);else throw Error(`Unknown depthTexture format`)}function oe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);R(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),L(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),L(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function se(t,n,i){let a=r.get(t);n!==void 0&&I(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&oe(t)}function ce(t){let i=t.texture,a=r.get(t),c=r.get(i);t.addEventListener(`dispose`,C);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,s.memory.textures++),u){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),s.memory.textures++)}if(t.samples>0&&H(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=o.convert(r.format,r.colorSpace),s=o.convert(r.type),c=y(r.internalFormat,i,s,r.colorSpace,t.isXRRenderTarget===!0),u=V(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),L(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ie(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)I(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else I(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,o=l.length;i<o;i++){let o=l[i],s=r.get(o);n.bindTexture(e.TEXTURE_2D,s.__webglTexture),ie(e.TEXTURE_2D,o),I(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),_(o)&&v(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ie(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)I(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else I(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&oe(t)}function z(t){let i=t.textures;for(let a=0,o=i.length;a<o;a++){let o=i[a];if(_(o)){let i=t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,a=r.get(o).__webglTexture;n.bindTexture(i,a),v(i),n.unbindTexture()}}}let le=[],B=[];function ue(t){if(t.samples>0){if(H(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),l===!0&&(le.length=0,B.length=0,le.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(le.push(c),B.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,B)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&l){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function V(e){return Math.min(a.maxSamples,e.samples)}function H(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function U(e){let t=s.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}function W(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(_o.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function de(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=M,this.setTexture3D=N,this.setTextureCube=ee,this.rebindTextures=se,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=I,this.useMultisampledRTT=H}function Pr(e,t){function n(n,r=``){let i,a=_o.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}function Fr(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,jt(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Yl.copy(o),Yl.x*=-1,Yl.y*=-1,Yl.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Yl.y*=-1,Yl.z*=-1),e.envMapRotation.value.setFromMatrix4(Xl.makeRotationFromEuler(Yl)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ir(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}function Lr(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}function Rr(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function zr(e,t){let n=1-e;return n*n*t}function Br(e,t){return 2*(1-e)*e*t}function Vr(e,t){return e*e*t}function Hr(e,t,n,r){return zr(e,t)+Br(e,n)+Vr(e,r)}function Ur(e,t){let n=1-e;return n*n*n*t}function Wr(e,t){let n=1-e;return 3*n*n*e*t}function Gr(e,t){return 3*(1-e)*e*e*t}function Kr(e,t){return e*e*e*t}function qr(e,t,n,r,i){return Ur(e,t)+Wr(e,n)+Gr(e,r)+Kr(e,i)}function Jr(e,t,n,r,i){let a,o;if(i===wi(e,t,n,r)>0)for(a=t;a<n;a+=r)o=xi(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=xi(a,e[a],e[a+1],o);return o&&pi(o,o.next)&&(Si(o),o=o.next),o}function Yr(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(pi(n,n.next)||fi(n.prev,n,n.next)===0)){if(Si(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Xr(e,t,n,r,i,a,o){if(!e)return;!o&&a&&oi(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;)if(c=e.prev,l=e.next,a?Qr(e,r,i,a):Zr(e))t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),Si(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=$r(Yr(e),t,n),Xr(e,t,n,r,i,a,2)):o===2&&ei(e,t,n,r,i,a):Xr(Yr(e),t,n,r,i,a,1);break}}function Zr(e){let t=e.prev,n=e,r=e.next;if(fi(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ui(i,s,a,c,o,l,m.x,m.y)&&fi(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qr(e,t,n,r){let i=e.prev,a=e,o=e.next;if(fi(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=ci(p,m,t,n,r),v=ci(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ui(s,u,c,d,l,f,y.x,y.y)&&fi(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ui(s,u,c,d,l,f,b.x,b.y)&&fi(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ui(s,u,c,d,l,f,y.x,y.y)&&fi(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ui(s,u,c,d,l,f,b.x,b.y)&&fi(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function $r(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!pi(i,a)&&mi(i,r,r.next,a)&&vi(i,a)&&vi(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),Si(r),Si(r.next),r=e=a),r=r.next}while(r!==e);return Yr(r)}function ei(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&di(o,e)){let s=bi(o,e);o=Yr(o,o.next),s=Yr(s,s.next),Xr(o,t,n,r,i,a,0),Xr(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function ti(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=Jr(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(li(l));for(i.sort(ni),a=0;a<i.length;a++)n=ri(i[a],n);return n}function ni(e,t){return e.x-t.x}function ri(e,t){let n=ii(e,t);if(!n)return t;let r=bi(n,e);return Yr(r,r.next),Yr(n,n.next)}function ii(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&ui(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),vi(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&ai(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function ai(e,t){return fi(e.prev,e,t.prev)<0&&fi(t.next,e,e.next)<0}function oi(e,t,n,r){let i=e;do i.z===0&&(i.z=ci(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,si(i)}function si(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function ci(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function li(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ui(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function di(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!_i(e,t)&&(vi(e,t)&&vi(t,e)&&yi(e,t)&&(fi(e.prev,e,t.prev)||fi(e,t.prev,t))||pi(e,t)&&fi(e.prev,e,e.next)>0&&fi(t.prev,t,t.next)>0)}function fi(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function pi(e,t){return e.x===t.x&&e.y===t.y}function mi(e,t,n,r){let i=gi(fi(e,t,n)),a=gi(fi(e,t,r)),o=gi(fi(n,r,e)),s=gi(fi(n,r,t));return!!(i!==a&&o!==s||i===0&&hi(e,n,t)||a===0&&hi(e,r,t)||o===0&&hi(n,e,r)||s===0&&hi(n,t,r))}function hi(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function gi(e){return e>0?1:e<0?-1:0}function _i(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&mi(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function vi(e,t){return fi(e.prev,e,e.next)<0?fi(e,t,e.next)>=0&&fi(e,e.prev,t)>=0:fi(e,t,e.prev)<0||fi(e,e.next,t)<0}function yi(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function bi(e,t){let n=new Ci(e.i,e.x,e.y),r=new Ci(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function xi(e,t,n,r){let i=new Ci(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Si(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ci(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wi(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function Ti(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ei(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function Di(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function Oi(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function ki(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(r)===!0||n.has(i)===!0?!1:(n.add(r),n.add(i),!0)}function Ai(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ji(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,K,q,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,J,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,Y,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,X,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,Z,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Q,$,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd;function yd(){return(yd=e((()=>{r(),Mi=1e3,Ni=1001,Pi=1002,Fi=1003,Ii=1004,Li=1005,Ri=1006,zi=1007,Bi=1008,Vi=1009,Hi=1010,Ui=1011,Wi=1012,Gi=1013,Ki=1014,qi=1015,Ji=1016,Yi=1017,Xi=1018,Zi=35902,Qi=1021,$i=1022,ea=1023,ta=1024,na=1025,ra=1026,ia=1027,aa=1028,oa=1029,sa=1030,ca=1031,la=1033,ua=33776,da=33777,fa=33778,pa=33779,ma=35840,ha=35841,ga=35842,_a=35843,va=36196,ya=37492,ba=37496,xa=37808,Sa=37809,Ca=37810,wa=37811,Ta=37812,Ea=37813,Da=37814,Oa=37815,ka=37816,Aa=37817,ja=37818,Ma=37819,Na=37820,Pa=37821,Fa=36492,Ia=36494,La=36495,Ra=36283,za=36284,Ba=36285,Va=36286,Ha=2300,Ua=2301,Wa=2302,Ga=2400,Ka=2401,qa=2402,Ja=3200,Ya=3201,Xa=`srgb`,Za=`srgb-linear`,Qa=`display-p3`,$a=`display-p3-linear`,eo=`linear`,to=`srgb`,no=`rec709`,ro=7680,io=35044,ao=2e3,oo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},so=/* @__PURE__ */ `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),co=Math.PI/180,lo=180/Math.PI,K=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},q=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uo=new q,fo={},po=new q().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mo=new q().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ho={[Za]:{transfer:eo,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Xa]:{transfer:to,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[$a]:{transfer:eo,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(mo),fromReference:e=>e.applyMatrix3(po)},[Qa]:{transfer:to,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(mo),fromReference:e=>e.applyMatrix3(po).convertLinearToSRGB()}},go=/* @__PURE__ */ new Set([Za,$a]),_o={enabled:!0,_workingColorSpace:Za,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!go.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=ho[t].toReference,i=ho[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return ho[e].primaries},getTransfer:function(e){return e===``?eo:ho[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(ho[t].luminanceCoefficients)}},yo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vo===void 0&&(vo=mt(`canvas`)),vo.width=e.width,vo.height=e.height;let n=vo.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vo}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=mt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bt(t[e]/255)*255):t[e]=bt(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},bo=0,xo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bo++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(St(r[t].image)):e.push(St(r[t]))}else e=St(r);n.url=e}return t||(e.images[this.uuid]=n),n}},So=0,Co=class e extends oo{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ni,i=Ni,a=Ri,o=Bi,s=ea,c=Vi,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:So++}),this.uuid=st(),this.name=``,this.source=new xo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x-=Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Pi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y-=Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Pi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}},Co.DEFAULT_IMAGE=null,Co.DEFAULT_MAPPING=300,Co.DEFAULT_ANISOTROPY=1,wo=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=e.elements,o=a[0],s=a[4],c=a[8],l=a[1],u=a[5],d=a[9],f=a[2],p=a[6],m=a[10];if(Math.abs(s-l)<.01&&Math.abs(c-f)<.01&&Math.abs(d-p)<.01){if(Math.abs(s+l)<.1&&Math.abs(c+f)<.1&&Math.abs(d+p)<.1&&Math.abs(o+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let e=(o+1)/2,a=(u+1)/2,h=(m+1)/2,g=(s+l)/4,_=(c+f)/4,v=(d+p)/4;return e>a&&e>h?e<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=g/n,i=_/n):a>h?a<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(a),n=g/r,i=v/r):h<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(h),n=_/i,r=v/i),this.set(n,r,i,t),this}let h=Math.sqrt((p-d)*(p-d)+(c-f)*(c-f)+(l-s)*(l-s));return Math.abs(h)<.001&&(h=1),this.x=(p-d)/h,this.y=(c-f)/h,this.z=(l-s)/h,this.w=Math.acos((o+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},To=class extends oo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wo(0,0,e,t),this.scissorTest=!1,this.viewport=new wo(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Co(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new xo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Eo=class extends To{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Do=class extends Co{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=/* @__PURE__ */ new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Oo=class extends Co{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fi,this.minFilter=Fi,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ko=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ao=new J,jo=new ko,Mo=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Po.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Po.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Po.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Po):Po.fromBufferAttribute(r,t),Po.applyMatrix4(e.matrixWorld),this.expandByPoint(Po);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Po),Po.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Uo.subVectors(this.max,Ho),Io.subVectors(e.a,Ho),Lo.subVectors(e.b,Ho),Ro.subVectors(e.c,Ho),zo.subVectors(Lo,Io),Bo.subVectors(Ro,Lo),Vo.subVectors(Io,Ro);let t=[0,-zo.z,zo.y,0,-Bo.z,Bo.y,0,-Vo.z,Vo.y,zo.z,0,-zo.x,Bo.z,0,-Bo.x,Vo.z,0,-Vo.x,-zo.y,zo.x,0,-Bo.y,Bo.x,0,-Vo.y,Vo.x,0];return!Ct(t,Io,Lo,Ro,Uo)||(t=[1,0,0,0,1,0,0,0,1],!Ct(t,Io,Lo,Ro,Uo))?!1:(Wo.crossVectors(zo,Bo),t=[Wo.x,Wo.y,Wo.z],Ct(t,Io,Lo,Ro,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Po).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Po).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(No[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),No[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),No[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),No[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),No[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),No[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),No[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),No[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(No)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},No=[new J,new J,new J,new J,new J,new J,new J,new J],Po=new J,Fo=new Mo,Io=new J,Lo=new J,Ro=new J,zo=new J,Bo=new J,Vo=new J,Ho=new J,Uo=new J,Wo=new J,Go=new J,Ko=new Mo,qo=new J,Jo=new J,Yo=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ko.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);let t=qo.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(qo,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Jo)),this.expandByPoint(qo.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xo=new J,Zo=new J,Qo=new J,$o=new J,es=new J,ts=new J,ns=new J,rs=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xo)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xo.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xo.copy(this.origin).addScaledVector(this.direction,t),Xo.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zo.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),$o.copy(this.origin).sub(Zo);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Qo),o=$o.dot(this.direction),s=-$o.dot(Qo),c=$o.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Zo).addScaledVector(Qo,d),f}intersectSphere(e,t){Xo.subVectors(e.center,this.origin);let n=Xo.dot(this.direction),r=Xo.dot(Xo)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xo)!==null}intersectTriangle(e,t,n,r,i){es.subVectors(t,e),ts.subVectors(n,e),ns.crossVectors(es,ts);let a=this.direction.dot(ns),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$o.subVectors(this.origin,e);let s=o*this.direction.dot(ts.crossVectors($o,ts));if(s<0)return null;let c=o*this.direction.dot(es.cross($o));if(c<0||s+c>a)return null;let l=-o*$o.dot(ns);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Y=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),i=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(os,e,ss)}lookAt(e,t,n){let r=this.elements;return us.subVectors(e,t),us.lengthSq()===0&&(us.z=1),us.normalize(),cs.crossVectors(n,us),cs.lengthSq()===0&&(Math.abs(n.z)===1?us.x+=1e-4:us.z+=1e-4,us.normalize(),cs.crossVectors(n,us)),cs.normalize(),ls.crossVectors(us,cs),r[0]=cs.x,r[4]=ls.x,r[8]=us.x,r[1]=cs.y,r[5]=ls.y,r[9]=us.y,r[2]=cs.z,r[6]=ls.z,r[10]=us.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=is.set(r[0],r[1],r[2]).length(),a=is.set(r[4],r[5],r[6]).length(),o=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],as.copy(this);let s=1/i,c=1/a,l=1/o;return as.elements[0]*=s,as.elements[1]*=s,as.elements[2]*=s,as.elements[4]*=c,as.elements[5]*=c,as.elements[6]*=c,as.elements[8]*=l,as.elements[9]*=l,as.elements[10]*=l,t.setFromRotationMatrix(as),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=ao){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ao){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},is=new J,as=new Y,os=new J(0,0,0),ss=new J(1,1,1),cs=new J,ls=new J,us=new J,ds=new Y,fs=new ko,ps=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ds.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ds,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fs.setFromEuler(this),this.setFromQuaternion(fs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},ps.DEFAULT_ORDER=`XYZ`,ms=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},hs=0,gs=new J,_s=new ko,vs=new Y,ys=new J,bs=new J,xs=new J,Ss=new ko,Cs=new J(1,0,0),ws=new J(0,1,0),Ts=new J(0,0,1),Es={type:`added`},Ds={type:`removed`},Os={type:`childadded`,child:null},ks={type:`childremoved`,child:null},As=class e extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hs++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new ps,r=new ko,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Y},normalMatrix:{value:new q}}),this.matrix=new Y,this.matrixWorld=new Y,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Cs,e)}rotateY(e){return this.rotateOnAxis(ws,e)}rotateZ(e){return this.rotateOnAxis(Ts,e)}translateOnAxis(e,t){return gs.copy(e).applyQuaternion(this.quaternion),this.position.add(gs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cs,e)}translateY(e){return this.translateOnAxis(ws,e)}translateZ(e){return this.translateOnAxis(Ts,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ys.copy(e):ys.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vs.lookAt(bs,ys,this.up):vs.lookAt(ys,bs,this.up),this.quaternion.setFromRotationMatrix(vs),r&&(vs.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(vs),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Es),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ds),ks.child=e,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vs.multiply(e.parent.matrixWorld)),e.applyMatrix4(vs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Es),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,xs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Ss,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}},As.DEFAULT_UP=new J(0,1,0),As.DEFAULT_MATRIX_AUTO_UPDATE=!0,As.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,js=new J,Ms=new J,Ns=new J,Ps=new J,Fs=new J,Is=new J,Ls=new J,Rs=new J,zs=new J,Bs=new J,Vs=new wo,Hs=new wo,Us=new wo,Ws=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),js.subVectors(e,t),r.cross(js);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){js.subVectors(r,t),Ms.subVectors(n,t),Ns.subVectors(e,t);let a=js.dot(js),o=js.dot(Ms),s=js.dot(Ns),c=Ms.dot(Ms),l=Ms.dot(Ns),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ps)!==null&&Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ps)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ps.x),s.addScaledVector(a,Ps.y),s.addScaledVector(o,Ps.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Vs.setScalar(0),Hs.setScalar(0),Us.setScalar(0),Vs.fromBufferAttribute(e,t),Hs.fromBufferAttribute(e,n),Us.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vs,i.x),a.addScaledVector(Hs,i.y),a.addScaledVector(Us,i.z),a}static isFrontFacing(e,t,n,r){return js.subVectors(n,t),Ms.subVectors(e,t),js.cross(Ms).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return js.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),js.cross(Ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Fs.subVectors(r,n),Is.subVectors(i,n),Rs.subVectors(e,n);let s=Fs.dot(Rs),c=Is.dot(Rs);if(s<=0&&c<=0)return t.copy(n);zs.subVectors(e,r);let l=Fs.dot(zs),u=Is.dot(zs);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Fs,a);Bs.subVectors(e,i);let f=Fs.dot(Bs),p=Is.dot(Bs);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Is,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ls.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ls,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Fs,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},qs={h:0,s:0,l:0},X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_o.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_o.workingColorSpace){return this.r=e,this.g=t,this.b=n,_o.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_o.workingColorSpace){if(e=lt(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=wt(i,r,e+1/3),this.g=wt(i,r,e),this.b=wt(i,r,e-1/3)}return _o.toWorkingColorSpace(this,r),this}setStyle(e,t=Xa){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xa){let n=Gs[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}copyLinearToSRGB(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xa){return _o.fromWorkingColorSpace(Js.copy(this),e),Math.round(ct(Js.r*255,0,255))*65536+Math.round(ct(Js.g*255,0,255))*256+Math.round(ct(Js.b*255,0,255))}getHexString(e=Xa){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_o.workingColorSpace){_o.fromWorkingColorSpace(Js.copy(this),t);let n=Js.r,r=Js.g,i=Js.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=_o.workingColorSpace){return _o.fromWorkingColorSpace(Js.copy(this),t),e.r=Js.r,e.g=Js.g,e.b=Js.b,e}getStyle(e=Xa){_o.fromWorkingColorSpace(Js.copy(this),e);let t=Js.r,n=Js.g,r=Js.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ks),this.setHSL(Ks.h+e,Ks.s+t,Ks.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ks),e.getHSL(qs);let n=ut(Ks.h,qs.h,t),r=ut(Ks.s,qs.s,t),i=ut(Ks.l,qs.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Js=new X,X.NAMES=Gs,Ys=0,Xs=class extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ys++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},Zs=class extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tt(),Qs=new J,$s=new K,ec=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=io,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXYZ(t,Qs.x,Qs.y,Qs.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix4(e),this.setXYZ(t,Qs.x,Qs.y,Qs.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyNormalMatrix(e),this.setXYZ(t,Qs.x,Qs.y,Qs.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.transformDirection(e),this.setXYZ(t,Qs.x,Qs.y,Qs.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},tc=class extends ec{constructor(e,t,n){super(new Uint16Array(e),t,n)}},nc=class extends ec{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Z=class extends ec{constructor(e,t,n){super(new Float32Array(e),t,n)}},rc=0,ic=new Y,ac=new As,oc=new J,sc=new Mo,cc=new Mo,lc=new J,uc=class e extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(pt(e)?nc:tc)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ic.makeRotationFromQuaternion(e),this.applyMatrix4(ic),this}rotateX(e){return ic.makeRotationX(e),this.applyMatrix4(ic),this}rotateY(e){return ic.makeRotationY(e),this.applyMatrix4(ic),this}rotateZ(e){return ic.makeRotationZ(e),this.applyMatrix4(ic),this}translate(e,t,n){return ic.makeTranslation(e,t,n),this.applyMatrix4(ic),this}scale(e,t,n){return ic.makeScale(e,t,n),this.applyMatrix4(ic),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oc).negate(),this.translate(oc.x,oc.y,oc.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Z(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];sc.setFromBufferAttribute(n),this.morphTargetsRelative?(lc.addVectors(this.boundingBox.min,sc.min),this.boundingBox.expandByPoint(lc),lc.addVectors(this.boundingBox.max,sc.max),this.boundingBox.expandByPoint(lc)):(this.boundingBox.expandByPoint(sc.min),this.boundingBox.expandByPoint(sc.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);else if(e){let n=this.boundingSphere.center;if(sc.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];cc.setFromBufferAttribute(n),this.morphTargetsRelative?(lc.addVectors(sc.min,cc.min),sc.expandByPoint(lc),lc.addVectors(sc.max,cc.max),sc.expandByPoint(lc)):(sc.expandByPoint(cc.min),sc.expandByPoint(cc.max))}sc.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)lc.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(lc));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)lc.fromBufferAttribute(a,t),o&&(oc.fromBufferAttribute(e,t),lc.add(oc)),r=Math.max(r,n.distanceToSquared(lc))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new ec(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new K,f=new K,p=new K,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new J,y=new J,b=new J,x=new J;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new ec(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lc.fromBufferAttribute(e,t),lc.normalize(),e.setXYZ(t,lc.x,lc.y,lc.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ec(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},dc=new Y,fc=new rs,pc=new Yo,mc=new J,hc=new J,gc=new J,_c=new J,vc=new J,yc=new J,bc=new J,xc=new J,Sc=class extends As{constructor(e=new uc,t=new Zs){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){yc.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(vc.fromBufferAttribute(s,e),a?yc.addScaledVector(vc,r):yc.addScaledVector(vc.sub(t),r))}t.add(yc)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(i),fc.copy(e.ray).recast(e.near),!(pc.containsPoint(fc.origin)===!1&&(fc.intersectSphere(pc,mc)===null||fc.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(dc.copy(i).invert(),fc.copy(e.ray).applyMatrix4(dc),(n.boundingBox===null||fc.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,fc)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Dt(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Dt(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Dt(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Dt(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}},Cc=class e extends uc{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Z(c,3)),this.setAttribute(`normal`,new Z(l,3)),this.setAttribute(`uv`,new Z(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wc={clone:Ot,merge:kt},Tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ec=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dc=class extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tc,this.fragmentShader=Ec,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ot(e.uniforms),this.uniformsGroups=At(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Oc=class extends As{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Y,this.projectionMatrix=new Y,this.projectionMatrixInverse=new Y,this.coordinateSystem=ao}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kc=new J,Ac=new K,jc=new K,Mc=class extends Oc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kc.x,kc.y).multiplyScalar(-e/kc.z),kc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kc.x,kc.y).multiplyScalar(-e/kc.z)}getViewSize(e,t){return this.getViewBounds(e,Ac,jc),t.subVectors(jc,Ac)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nc=-90,Pc=1,Fc=class extends As{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Mc(Nc,Pc,e,t);r.layers=this.layers,this.add(r);let i=new Mc(Nc,Pc,e,t);i.layers=this.layers,this.add(i);let a=new Mc(Nc,Pc,e,t);a.layers=this.layers,this.add(a);let o=new Mc(Nc,Pc,e,t);o.layers=this.layers,this.add(o);let s=new Mc(Nc,Pc,e,t);s.layers=this.layers,this.add(s);let c=new Mc(Nc,Pc,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ic=class extends Co{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lc=class extends Eo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ic(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?Ri:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cc(5,5,5),i=new Dc({name:`CubemapFromEquirect`,uniforms:Ot(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Sc(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Rc=new J,zc=new J,Bc=new q,Vc=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rc.subVectors(n,t).cross(zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bc.getNormalMatrix(e),r=this.coplanarPoint(Rc).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hc=new Yo,Uc=new J,Wc=class{constructor(e=new Vc,t=new Vc,n=new Vc,r=new Vc,i=new Vc,a=new Vc){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ao){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hc.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hc)}intersectsSprite(e){return Hc.center.set(0,0,0),Hc.radius=.7071067811865476,Hc.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hc)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Uc.x=r.normal.x>0?e.max.x:e.min.x,Uc.y=r.normal.y>0?e.max.y:e.min.y,Uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gc=class e extends uc{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Z(p,3)),this.setAttribute(`normal`,new Z(m,3)),this.setAttribute(`uv`,new Z(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},Kc={basic:{uniforms:kt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:kt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new X(0)}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:kt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:kt([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:kt([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new X(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:kt([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:kt([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:kt([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:kt([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:kt([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:kt([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distanceRGBA:{uniforms:kt([$.common,$.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distanceRGBA_vert,fragmentShader:Q.distanceRGBA_frag},shadow:{uniforms:kt([$.lights,$.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}},Kc.physical={uniforms:kt([Kc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},qc={r:0,b:0,g:0},Jc=new ps,Yc=new Y,Xc=class extends Oc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zc=4,Qc=[.125,.215,.35,.446,.526,.582],$c=20,el=new Xc,tl=new X,nl=null,rl=0,il=0,al=!1,ol=(1+Math.sqrt(5))/2,sl=1/ol,cl=[new J(-ol,sl,0),new J(ol,sl,0),new J(-sl,0,ol),new J(sl,0,ol),new J(0,ol,-sl),new J(0,ol,sl),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],ll=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){nl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nl,rl,il),this._renderer.xr.enabled=al,e.scissorTest=!1,Ht(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Ji,format:ea,colorSpace:Za,depthBuffer:!1},r=Vt(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vt(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bt(r)),this._blurMaterial=Ut(r,e,t)}return r}_compileMaterial(e){let t=new Sc(this._lodPlanes[0],e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,n,r){let i=new Mc(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(tl),s.toneMapping=0,s.autoClear=!1;let u=new Zs({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new Sc(new Cc,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(tl),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Ht(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gt()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wt());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Sc(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ht(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,el)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=cl[(r-t-1)%cl.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Sc(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*$c-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):$c;m>$c&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$c}`);let h=[],g=0;for(let e=0;e<$c;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ht(t,3*v*(r>_-Zc?r-_+Zc:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,el)}},ul=class extends Co{constructor(e,t,n,r,i,a,o,s,c,l=ra){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===1026&&(n=1014),n===void 0&&l===1027&&(n=1020),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?Fi:o,this.minFilter=s===void 0?Fi:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},dl=new Co,fl=new ul(1,1),pl=new Do,ml=new Oo,hl=new Ic,gl=[],_l=[],vl=/* @__PURE__ */ new Float32Array(16),yl=/* @__PURE__ */ new Float32Array(9),bl=/* @__PURE__ */ new Float32Array(4),xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wn(t.type)}},Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wn(t.type)}},Cl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},wl=/(\w+)(\])?(\[|\.)?/g,Tl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Kn(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}},El=37297,Dl=0,Ol=new J,kl=/^[ \t]*#include +<([\w\d./]+)>/gm,Al=/* @__PURE__ */ new Map,jl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,Ml=0,Nl=class{constructor(){this.shaderCache=/* @__PURE__ */ new Map,this.materialCache=/* @__PURE__ */ new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=/* @__PURE__ */ new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pl(e),t.set(e,n)),n}},Pl=class{constructor(e){this.id=Ml++,this.code=e,this.usedTimes=0}},Fl=0,Il=class extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ja,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ll=class extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Rl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Bl={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Vl=class extends Mc{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Hl=class extends As{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ul={type:`move`},Wl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ul)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Hl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Co,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Dc({vertexShader:Gl,fragmentShader:Kl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sc(new Gc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends oo{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new ql,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new K,x=null,S=new Mc;S.layers.enable(1),S.viewport=new wo;let C=new Mc;C.layers.enable(2),C.viewport=new wo;let w=[S,C],T=new Vl;T.layers.enable(1),T.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new Wl,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new Wl,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new Wl,v[e]=t),t.getHandSpace()};function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,A),h.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Eo(f.framebufferWidth,f.framebufferHeight,{format:ea,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?1027:1026,a=h.stencil?1020:1014);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Eo(d.textureWidth,d.textureHeight,{format:ea,type:Vi,depthTexture:new ul(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++)if(e>=y.length){y.push(n),r=e;break}else if(y[e]===null){y[e]=n,r=e;break}if(r===-1)break}let i=v[r];i&&i.connect(n)}}let j=new J,M=new J;function N(e,t,n){j.setFromMatrixPosition(t.matrixWorld),M.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(M),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,(E!==T.near||D!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far);let i=e.parent,a=T.cameras;ee(T,i);for(let e=0;e<a.length;e++)ee(a[e],i);a.length===2?N(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),te(e,T,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=lo*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let ne=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new Mc,o.layers.enable(r),o.viewport=new wo,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),n===!0&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ie=new Mt;ie.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},Yl=new ps,Xl=new Y,Zl=class{constructor(e={}){let{canvas:t=ht(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);d=n.getContextAttributes().alpha}else d=a;let f=/* @__PURE__ */ new Uint32Array(4),p=/* @__PURE__ */ new Int32Array(4),m=null,h=null,g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xa,this.toneMapping=0,this.toneMappingExposure=1;let v=this,y=!1,b=0,x=0,S=null,C=-1,w=null,T=new wo,E=new wo,D=null,O=new X(0),k=0,A=t.width,j=t.height,M=1,N=null,ee=null,te=new wo(0,0,A,j),ne=new wo(0,0,A,j),re=!1,ie=new Wc,P=!1,F=!1,ae=new Y,I=new Y,L=new J,R=new wo,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function ce(){return S===null?M:1}let z=n;function le(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r169`),t.addEventListener(`webglcontextlost`,je,!1),t.addEventListener(`webglcontextrestored`,Me,!1),t.addEventListener(`webglcontextcreationerror`,Ne,!1),z===null){let t=`webgl2`;if(z=le(t,e),z===null)throw le(t)?/* @__PURE__ */ Error(`Error creating WebGL context with your selected attributes.`):/* @__PURE__ */ Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let B,ue,V,H,U,W,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe;function ke(){B=new Jt(z),B.init(),Ee=new Pr(z,B),ue=new Lt(z,B,e,Ee),V=new Ar(z),ue.reverseDepthBuffer&&V.buffers.depth.setReversed(!0),H=new Zt(z),U=new vr,W=new Nr(z,B,V,U,ue,Ee,H),de=new zt(v),fe=new qt(v),pe=new Nt(z),De=new Ft(z,pe),me=new Yt(z,pe,H,De),he=new $t(z,me,pe,H),Ce=new Qt(z,ue,W),be=new Rt(U),ge=new _r(v,de,fe,B,ue,De,be),_e=new Fr(v,U),ve=new Sr,ye=new Or(B),Se=new Pt(v,de,fe,V,he,d,s),xe=new kr(v,he,ue),Oe=new Ir(z,H,ue,V),we=new It(z,B,H),Te=new Xt(z,B,H),H.programs=ge.programs,v.capabilities=ue,v.extensions=B,v.properties=U,v.renderLists=ve,v.shadowMap=xe,v.state=V,v.info=H}ke();let Ae=new Jl(v,z);this.xr=Ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=B.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=B.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(e){e!==void 0&&(M=e,this.setSize(A,j,!1))},this.getSize=function(e){return e.set(A,j)},this.setSize=function(e,n,r=!0){Ae.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(A=e,j=n,t.width=Math.floor(e*M),t.height=Math.floor(n*M),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(A*M,j*M).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,j=n,M=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(T)},this.getViewport=function(e){return e.copy(te)},this.setViewport=function(e,t,n,r){e.isVector4?te.set(e.x,e.y,e.z,e.w):te.set(e,t,n,r),V.viewport(T.copy(te).multiplyScalar(M).round())},this.getScissor=function(e){return e.copy(ne)},this.setScissor=function(e,t,n,r){e.isVector4?ne.set(e.x,e.y,e.z,e.w):ne.set(e,t,n,r),V.scissor(E.copy(ne).multiplyScalar(M).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(e){V.setScissorTest(re=e)},this.setOpaqueSort=function(e){N=e},this.setTransparentSort=function(e){ee=e},this.getClearColor=function(e){return e.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(S!==null){let t=S.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=S.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Se.getClearColor(),r=Se.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(f[0]=i,f[1]=a,f[2]=o,f[3]=r,z.clearBufferuiv(z.COLOR,0,f)):(p[0]=i,p[1]=a,p[2]=o,p[3]=r,z.clearBufferiv(z.COLOR,0,p))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,z.clearDepth(+!this.capabilities.reverseDepthBuffer)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,je,!1),t.removeEventListener(`webglcontextrestored`,Me,!1),t.removeEventListener(`webglcontextcreationerror`,Ne,!1),ve.dispose(),ye.dispose(),U.dispose(),de.dispose(),fe.dispose(),he.dispose(),De.dispose(),Oe.dispose(),ge.dispose(),Ae.dispose(),Ae.removeEventListener(`sessionstart`,Be),Ae.removeEventListener(`sessionend`,G),Ve.stop()};function je(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),y=!0}function Me(){console.log(`THREE.WebGLRenderer: Context Restored.`),y=!1;let e=H.autoReset,t=xe.enabled,n=xe.autoUpdate,r=xe.needsUpdate,i=xe.type;ke(),H.autoReset=e,xe.enabled=t,xe.autoUpdate=n,xe.needsUpdate=r,xe.type=i}function Ne(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Pe(e){let t=e.target;t.removeEventListener(`dispose`,Pe),Fe(t)}function Fe(e){Ie(e),U.remove(e)}function Ie(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){ge.releaseProgram(e)}),e.isShaderMaterial&&ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=oe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Xe(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=me.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;De.setup(i,r,s,n,c);let h,g=we;if(c!==null&&(h=pe.get(c),g=Te,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*ce()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*ce()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(B.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?pe.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Le(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,qe(e,t,n),e.side=0,e.needsUpdate=!0,qe(e,t,n),e.side=2):qe(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),h=ye.get(n),h.init(t),_.push(h),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(h.pushLight(e),e.castShadow&&h.pushShadow(e))}),h.setupLights();let r=/* @__PURE__ */ new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Le(a,n,e),r.add(a)}else Le(t,n,e),r.add(t)}}),_.pop(),h=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){U.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}B.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Re=null;function ze(e){Re&&Re(e)}function Be(){Ve.stop()}function G(){Ve.start()}let Ve=new Mt;Ve.setAnimationLoop(ze),typeof self<`u`&&Ve.setContext(self),this.setAnimationLoop=function(e){Re=e,Ae.setAnimationLoop(e),e===null?Ve.stop():Ve.start()},Ae.addEventListener(`sessionstart`,Be),Ae.addEventListener(`sessionend`,G),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(y===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(t),t=Ae.getCamera()),e.isScene===!0&&e.onBeforeRender(v,e,t,S),h=ye.get(e,_.length),h.init(t),_.push(h),I.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ie.setFromProjectionMatrix(I),F=this.localClippingEnabled,P=be.init(this.clippingPlanes,F),m=ve.get(e,g.length),m.init(),g.push(m),Ae.enabled===!0&&Ae.isPresenting===!0){let e=v.xr.getDepthSensingMesh();e!==null&&He(e,t,-1/0,v.sortObjects)}He(e,t,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(N,ee),se=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,se&&Se.addToRenderList(m,e),this.info.render.frame++,P===!0&&be.beginShadows();let n=h.state.shadowsArray;xe.render(n,e,t),P===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=m.opaque,i=m.transmissive;if(h.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];We(r,i,e,a)}se&&Se.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Ue(m,e,r,r.viewport)}}else i.length>0&&We(r,i,e,t),se&&Se.render(e),Ue(m,e,t);S!==null&&(W.updateMultisampleRenderTarget(S),W.updateRenderTargetMipmap(S)),e.isScene===!0&&e.onAfterRender(v,e,t),De.resetDefaultState(),C=-1,w=null,_.pop(),_.length>0?(h=_[_.length-1],P===!0&&be.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,g.pop(),m=g.length>0?g[g.length-1]:null};function He(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)h.pushLight(e),e.castShadow&&h.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ie.intersectsSprite(e)){r&&R.setFromMatrixPosition(e.matrixWorld).applyMatrix4(I);let t=he.update(e),i=e.material;i.visible&&m.push(e,t,i,n,R.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ie.intersectsObject(e))){let t=he.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),R.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),R.copy(e.boundingSphere.center)),R.applyMatrix4(e.matrixWorld).applyMatrix4(I)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&m.push(e,t,s,n,R.z,o)}}else i.visible&&m.push(e,t,i,n,R.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)He(i[e],t,n,r)}function Ue(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;h.setupLightsView(n),P===!0&&be.setGlobalState(v.clippingPlanes,n),r&&V.viewport(T.copy(r)),i.length>0&&Ge(i,t,n),a.length>0&&Ge(a,t,n),o.length>0&&Ge(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function We(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[r.id]===void 0&&(h.state.transmissionRenderTarget[r.id]=new Eo(1,1,{generateMipmaps:!0,type:B.has(`EXT_color_buffer_half_float`)||B.has(`EXT_color_buffer_float`)?1016:1009,minFilter:1008,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_o.workingColorSpace}));let a=h.state.transmissionRenderTarget[r.id],o=r.viewport||T;a.setSize(o.z,o.w);let s=v.getRenderTarget();v.setRenderTarget(a),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),se&&Se.render(n);let c=v.toneMapping;v.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),h.setupLightsView(r),P===!0&&be.setGlobalState(v.clippingPlanes,r),Ge(e,n,r),W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a),B.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,Ke(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a))}v.setRenderTarget(s),v.setClearColor(O,k),l!==void 0&&(r.viewport=l),v.toneMapping=c}function Ge(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&Ke(o,t,n,s,c,l)}}function Ke(e,t,n,r,i,a){e.onBeforeRender(v,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(v,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,v.renderBufferDirect(n,t,r,i,e,a),i.side=2):v.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(v,t,n,r,i,a)}function qe(e,t,n){t.isScene!==!0&&(t=oe);let r=U.get(e),i=h.state.lights,a=h.state.shadowsArray,o=i.state.version,s=ge.getParameters(e,i.state,a,t,n),c=ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?fe:de).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Pe),l=/* @__PURE__ */ new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Ye(e,s),u}else s.uniforms=ge.getUniforms(e),e.onBeforeCompile(s,v),u=ge.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=be.uniform),Ye(e,s),r.needsLights=Qe(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function Je(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Tl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ye(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Xe(e,t,n,r,i){t.isScene!==!0&&(t=oe),W.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Za,c=(r.isMeshStandardMaterial?fe:de).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(m=v.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,y=U.get(r),b=h.state.lights;if(P===!0&&(F===!0||e!==w)){let t=e===w&&r.id===C;be.setState(r,e,t)}let x=!1;r.version===y.__version?(y.needsLights&&y.lightsStateVersion!==b.state.version||y.outputColorSpace!==s||i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isBatchedMesh&&y.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&y.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&y.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&y.instancingMorph===!1&&i.morphTexture!==null||y.envMap!==c||r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==be.numPlanes||y.numIntersection!==be.numIntersection)||y.vertexAlphas!==l||y.vertexTangents!==u||y.morphTargets!==d||y.morphNormals!==f||y.morphColors!==p||y.toneMapping!==m||y.morphTargetsCount!==_)&&(x=!0):(x=!0,y.__version=r.version);let T=y.currentProgram;x===!0&&(T=qe(r,t,i));let E=!1,D=!1,O=!1,k=T.getUniforms(),A=y.uniforms;if(V.useProgram(T.program)&&(E=!0,D=!0,O=!0),r.id!==C&&(C=r.id,D=!0),E||w!==e){ue.reverseDepthBuffer?(ae.copy(e.projectionMatrix),vt(ae),yt(ae),k.setValue(z,`projectionMatrix`,ae)):k.setValue(z,`projectionMatrix`,e.projectionMatrix),k.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(z,L.setFromMatrixPosition(e.matrixWorld)),ue.logarithmicDepthBuffer&&k.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),w!==e&&(w=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(z,i,`bindMatrix`),k.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(z,`boneTexture`,e.boneTexture,W))}i.isBatchedMesh&&(k.setOptional(z,i,`batchingTexture`),k.setValue(z,`batchingTexture`,i._matricesTexture,W),k.setOptional(z,i,`batchingIdTexture`),k.setValue(z,`batchingIdTexture`,i._indirectTexture,W),k.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(z,`batchingColorTexture`,i._colorsTexture,W));let N=n.morphAttributes;if((N.position!==void 0||N.normal!==void 0||N.color!==void 0)&&Ce.update(i,n,T),(D||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,k.setValue(z,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(z,`toneMappingExposure`,v.toneMappingExposure),y.needsLights&&Ze(A,O),a&&r.fog===!0&&_e.refreshFogUniforms(A,a),_e.refreshMaterialUniforms(A,r,M,j,h.state.transmissionRenderTarget[e.id]),Tl.upload(z,Je(y),A,W)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Tl.upload(z,Je(y),A,W),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(z,`center`,i.center),k.setValue(z,`modelViewMatrix`,i.modelViewMatrix),k.setValue(z,`normalMatrix`,i.normalMatrix),k.setValue(z,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Oe.update(n,T),Oe.bind(n,T)}}return T}function Ze(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Qe(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(e,t,n){U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=n;let r=U.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||B.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){S=e,b=t,x=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=U.get(e);if(s.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(z.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)W.setupRenderTarget(e);else if(s.__hasExternalTextures)W.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);W.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&W.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,T.copy(e.viewport),E.copy(e.scissor),D=e.scissorTest}else T.copy(te).multiplyScalar(M).floor(),E.copy(ne).multiplyScalar(M).floor(),D=re;if(V.bindFramebuffer(z.FRAMEBUFFER,i)&&r&&V.drawBuffers(e,i),V.viewport(T),V.scissor(E),V.setScissorTest(D),a){let r=U.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=U.get(e.texture),i=t||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}C=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){V.bindFramebuffer(z.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!ue.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ue.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,Ee.convert(s),Ee.convert(c),a)}finally{let e=S===null?null:U.get(S).__webglFramebuffer;V.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!ue.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ue.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(z.FRAMEBUFFER,s);let e=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,e),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,Ee.convert(c),Ee.convert(l),0);let o=S===null?null:U.get(S).__webglFramebuffer;V.bindFramebuffer(z.FRAMEBUFFER,o);let u=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await _t(z,u,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,e),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.deleteBuffer(e),z.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(gt(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;W.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(gt(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Ee.convert(t.format),f=Ee.convert(t.type);W.setTexture2D(t,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let p=z.getParameter(z.UNPACK_ROW_LENGTH),m=z.getParameter(z.UNPACK_IMAGE_HEIGHT),h=z.getParameter(z.UNPACK_SKIP_PIXELS),g=z.getParameter(z.UNPACK_SKIP_ROWS),_=z.getParameter(z.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,v.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,v.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,s),z.pixelStorei(z.UNPACK_SKIP_ROWS,c),e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):z.texSubImage2D(z.TEXTURE_2D,i,l,u,a,o,d,f,v),z.pixelStorei(z.UNPACK_ROW_LENGTH,p),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,m),z.pixelStorei(z.UNPACK_SKIP_PIXELS,h),z.pixelStorei(z.UNPACK_SKIP_ROWS,g),z.pixelStorei(z.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(gt(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Ee.convert(t.format),g=Ee.convert(t.type),_;if(t.isData3DTexture)W.setTexture3D(t,0),_=z.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)W.setTexture2DArray(t,0),_=z.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let v=z.getParameter(z.UNPACK_ROW_LENGTH),y=z.getParameter(z.UNPACK_IMAGE_HEIGHT),b=z.getParameter(z.UNPACK_SKIP_PIXELS),x=z.getParameter(z.UNPACK_SKIP_ROWS),S=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,m.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,m.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,c),z.pixelStorei(z.UNPACK_SKIP_ROWS,l),z.pixelStorei(z.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?z.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):z.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),z.pixelStorei(z.UNPACK_ROW_LENGTH,v),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,y),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b),z.pixelStorei(z.UNPACK_SKIP_ROWS,x),z.pixelStorei(z.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&z.generateMipmap(_),V.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&W.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?W.setTextureCube(e,0):e.isData3DTexture?W.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?W.setTexture2DArray(e,0):W.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){b=0,x=0,S=null,V.reset(),De.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ao}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=_o.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}},Ql=class extends As{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},new J,new J,new J,new J,new K,new K,new Y,new J,new J,new J,new K,new K,new K,new J,new J,new J,new wo,new wo,new J,new Y,new J,new Yo,new Y,new rs,$l=class extends Co{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Fi,l=Fi,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},new Y,new Y,new Y,new Y,new Mo,new Y,new Sc,new Yo,eu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){let r=this.pool,i=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];i.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}},new Y,new Y,new Y,new X(1,1,1),new Y,new Wc,new Mo,new Yo,new J,new J,new J,new eu,new Sc,new J,new J,new Y,new rs,new Yo,new J,new J,new J,new J,new Y,new rs,new Yo,new J,tu=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let i=this.getPoint(n),a=this.getPoint(r),o=t||(i.isVector2?new K:new J);return o.copy(a).sub(i).normalize(),o}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new J,r=[],i=[],a=[],o=new J,s=new Y;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new J)}i[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ct(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ct(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},nu=class extends tu{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ru=class extends nu{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}},iu=new J,au=new Lr,ou=new Lr,su=new Lr,cu=class extends tu{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new J){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(iu.subVectors(r[0],r[1]).add(r[0]),c=iu);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(iu.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=iu),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),au.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ou.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),su.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(au.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ou.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),su.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(au.calc(s),ou.calc(s),su.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},lu=class extends tu{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(qr(e,r.x,i.x,a.x,o.x),qr(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uu=class extends tu{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(qr(e,r.x,i.x,a.x,o.x),qr(e,r.y,i.y,a.y,o.y),qr(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},du=class extends tu{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fu=class extends tu{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pu=class extends tu{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Hr(e,r.x,i.x,a.x),Hr(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mu=class extends tu{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Hr(e,r.x,i.x,a.x),Hr(e,r.y,i.y,a.y),Hr(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hu=class extends tu{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Rr(o,s.x,c.x,l.x,u.x),Rr(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},gu=Object.freeze({__proto__:null,ArcCurve:ru,CatmullRomCurve3:cu,CubicBezierCurve:lu,CubicBezierCurve3:uu,EllipseCurve:nu,LineCurve:du,LineCurve3:fu,QuadraticBezierCurve:pu,QuadraticBezierCurve3:mu,SplineCurve:hu}),_u=class extends tu{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new gu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new gu[n.type]().fromJSON(n))}return this}},vu=class extends _u{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new du(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new pu(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new lu(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new hu([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new nu(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yu=class e extends uc{constructor(e=[new K(0,-.5),new K(.5,0),new K(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ct(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new J,d=new K,f=new J,p=new J,m=new J,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Z(a,3)),this.setAttribute(`uv`,new Z(o,2)),this.setAttribute(`normal`,new Z(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},bu=class e extends yu{constructor(e=1,t=1,n=4,r=8){let i=new vu;i.absarc(0,-t/2,e,Math.PI*1.5,0),i.absarc(0,t/2,e,0,Math.PI*.5),super(i.getPoints(n),r),this.type=`CapsuleGeometry`,this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(t){return new e(t.radius,t.length,t.capSegments,t.radialSegments)}},xu=class e extends uc{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new J,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Z(a,3)),this.setAttribute(`normal`,new Z(o,3)),this.setAttribute(`uv`,new Z(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Su=class e extends uc{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Z(u,3)),this.setAttribute(`normal`,new Z(d,3)),this.setAttribute(`uv`,new Z(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let i=m[r][n],a=m[r+1][n],o=m[r+1][n+1],s=m[r][n+1];e>0&&(l.push(i,a,s),v+=3),t>0&&(l.push(a,o,s),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cu=class e extends Su{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wu=class e extends uc{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Z(i,3)),this.setAttribute(`normal`,new Z(i.slice(),3)),this.setAttribute(`uv`,new Z(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new J,r=new J,i=new J;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new J;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new J;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new J,t=new J,n=new J,r=new J,o=new K,s=new K,c=new K;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},Tu=class e extends wu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Eu=new J,Du=new J,Ou=new J,ku=new Ws,Au=class extends uc{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(co*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=ku;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),ku.getNormal(Ou),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=ku[c[e]],o=ku[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ou.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ou.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Eu.fromBufferAttribute(a,t),Du.fromBufferAttribute(a,n),d.push(Eu.x,Eu.y,Eu.z),d.push(Du.x,Du.y,Du.z)}this.setAttribute(`position`,new Z(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ju=class extends vu{constructor(e){super(e),this.uuid=st(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new vu().fromJSON(n))}return this}},Mu={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Jr(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=ti(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return Xr(a,o,n,s,c,p,0),o}},Nu=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ti(e),Ei(n,e);let a=e.length;t.forEach(Ti);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ei(n,t[e]);let o=Mu.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}},Pu=class e extends uc{constructor(e=new ju([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Z(r,3)),this.setAttribute(`uv`,new Z(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Fu:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new J,b=new J,x=new J),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Nu.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Nu.isClockWise(t)&&(w[e]=t.reverse())}}let T=Nu.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length,k=T.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new K(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new K(r/a,i/a)}let j=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(E[e],E[n],E[r]);let M=[],N,ee=j.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);P(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);P(i.x,i.y,-n)}}}let te=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],ee[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),P(x.x,x.y,x.z)):P(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],ee[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),P(x.x,x.y,x.z)):P(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],j[e],r);P(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],N[e],r);_?P(i.x,i.y+g[s-1].y,g[s-1].x+n):P(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];F(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<k;e++){let n=T[e];F(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];F(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];F(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ae(t+r+n,t+i+n,t+i+a,t+r+a)}}}function P(e,t,n){a.push(e),a.push(t),a.push(n)}function F(e,t,i){I(e),I(t),I(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);L(o[0]),L(o[1]),L(o[2])}function ae(e,t,i,a){I(e),I(t),I(a),I(t),I(i),I(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);L(s[0]),L(s[1]),L(s[3]),L(s[1]),L(s[2]),L(s[3])}function I(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function L(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Di(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new gu[i.type]().fromJSON(i)),new e(r,t.options)}},Fu={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new K(a,o),new K(s,c),new K(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-d),new K(f,1-m),new K(h,1-_)]:[new K(s,1-c),new K(u,1-d),new K(p,1-m),new K(g,1-_)]}},Iu=class e extends wu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Lu=class e extends wu{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ru=class e extends uc{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new J,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Z(s,3)),this.setAttribute(`normal`,new Z(c,3)),this.setAttribute(`uv`,new Z(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},zu=class e extends uc{constructor(e=new ju([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Z(r,3)),this.setAttribute(`normal`,new Z(i,3)),this.setAttribute(`uv`,new Z(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Nu.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Nu.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Nu.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Oi(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}},Bu=class e extends uc{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new J,d=new J,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Z(p,3)),this.setAttribute(`normal`,new Z(m,3)),this.setAttribute(`uv`,new Z(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Vu=class e extends wu{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Hu=class e extends uc{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new J,u=new J,d=new J;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new Z(o,3)),this.setAttribute(`normal`,new Z(s,3)),this.setAttribute(`uv`,new Z(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Uu=class e extends uc{constructor(e=1,t=.4,n=64,r=8,i=2,a=3){super(),this.type=`TorusKnotGeometry`,this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:i,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],s=[],c=[],l=[],u=new J,d=new J,f=new J,p=new J,m=new J,h=new J,g=new J;for(let o=0;o<=n;++o){let v=o/n*i*Math.PI*2;_(v,i,a,e,f),_(v+.01,i,a,e,p),h.subVectors(p,f),g.addVectors(p,f),m.crossVectors(h,g),g.crossVectors(m,h),m.normalize(),g.normalize();for(let e=0;e<=r;++e){let i=e/r*Math.PI*2,a=-t*Math.cos(i),p=t*Math.sin(i);u.x=f.x+(a*g.x+p*m.x),u.y=f.y+(a*g.y+p*m.y),u.z=f.z+(a*g.z+p*m.z),s.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),l.push(o/n),l.push(e/r)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,s=(r+1)*(e-1)+t;o.push(n,i,s),o.push(i,a,s)}this.setIndex(o),this.setAttribute(`position`,new Z(s,3)),this.setAttribute(`normal`,new Z(c,3)),this.setAttribute(`uv`,new Z(l,2));function _(e,t,n,r,i){let a=Math.cos(e),o=Math.sin(e),s=n/t*e,c=Math.cos(s);i.x=r*(2+c)*.5*a,i.y=r*(2+c)*o*.5,i.z=r*Math.sin(s)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Wu=class e extends uc{constructor(e=new mu(new J(-1,-1,0),new J(-1,1,0),new J(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new J,s=new J,c=new K,l=new J,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Z(u,3)),this.setAttribute(`normal`,new Z(d,3)),this.setAttribute(`uv`,new Z(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new gu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Gu=class extends uc{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=/* @__PURE__ */ new Set,r=new J,i=new J;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),ki(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),ki(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new Z(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Object.freeze({__proto__:null,BoxGeometry:Cc,CapsuleGeometry:bu,CircleGeometry:xu,ConeGeometry:Cu,CylinderGeometry:Su,DodecahedronGeometry:Tu,EdgesGeometry:Au,ExtrudeGeometry:Pu,IcosahedronGeometry:Iu,LatheGeometry:yu,OctahedronGeometry:Lu,PlaneGeometry:Gc,PolyhedronGeometry:wu,RingGeometry:Ru,ShapeGeometry:zu,SphereGeometry:Bu,TetrahedronGeometry:Vu,TorusGeometry:Hu,TorusKnotGeometry:Uu,TubeGeometry:Wu,WireframeGeometry:Gu}),Ku=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];t:{e:{let a;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break e}a=t.length;break n}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break e}a=n,n=0;break n}break t}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},qu=class extends Ku{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ga,endingEnd:Ga}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ka:i=e,o=2*t-n;break;case qa:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ka:a=e,s=2*n-t;break;case qa:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ju=class extends Ku{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Yu=class extends Ku{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Xu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ai(t,this.TimeBufferType),this.values=Ai(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ai(e.times,Array),values:Ai(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ha:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ji(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Wa,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}},Xu.prototype.TimeBufferType=Float32Array,Xu.prototype.ValueBufferType=Float32Array,Xu.prototype.DefaultInterpolation=Ua,Zu=class extends Xu{constructor(e,t,n){super(e,t,n)}},Zu.prototype.ValueTypeName=`bool`,Zu.prototype.ValueBufferType=Array,Zu.prototype.DefaultInterpolation=Ha,Zu.prototype.InterpolantFactoryMethodLinear=void 0,Zu.prototype.InterpolantFactoryMethodSmooth=void 0,Qu=class extends Xu{},Qu.prototype.ValueTypeName=`color`,$u=class extends Xu{},$u.prototype.ValueTypeName=`number`,ed=class extends Ku{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ko.slerpFlat(i,0,a,c-o,a,c,s);return i}},td=class extends Xu{InterpolantFactoryMethodLinear(e){return new ed(this.times,this.values,this.getValueSize(),e)}},td.prototype.ValueTypeName=`quaternion`,td.prototype.InterpolantFactoryMethodSmooth=void 0,nd=class extends Xu{constructor(e,t,n){super(e,t,n)}},nd.prototype.ValueTypeName=`string`,nd.prototype.ValueBufferType=Array,nd.prototype.DefaultInterpolation=Ha,nd.prototype.InterpolantFactoryMethodLinear=void 0,nd.prototype.InterpolantFactoryMethodSmooth=void 0,rd=class extends Xu{},rd.prototype.ValueTypeName=`vector`,id=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},ad=new id,od=class{constructor(e){this.manager=e===void 0?ad:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},od.DEFAULT_MATERIAL_NAME=`__DEFAULT`,new Y,new J,new J,new Y,new J,new J,new Y,new Y,new Y,new J,new ko,new J,new J,new J,new ko,new J,new J,sd=`\\[\\]\\.:\\/`,cd=RegExp(`[`+sd+`]`,`g`),ld=`[^`+sd+`]`,ud=`[^`+sd.replace(`\\.`,``)+`]`,dd=`((?:WC+[\\/:])*)`.replace(`WC`,ld),fd=`(WCOD+)?`.replace(`WCOD`,ud),pd=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ld),md=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ld),hd=RegExp(`^`+dd+fd+pd+md+`$`),gd=[`material`,`materials`,`bones`,`map`],_d=class{constructor(e,t,n){let r=n||vd.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vd=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(cd,``)}static parseTrackName(e){let t=hd.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);gd.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},vd.Composite=_d,vd.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},vd.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},vd.prototype.GetterByBindingType=[vd.prototype._getValue_direct,vd.prototype._getValue_array,vd.prototype._getValue_arrayElement,vd.prototype._getValue_toArray],vd.prototype.SetterByBindingTypeAndVersioning=[[vd.prototype._setValue_direct,vd.prototype._setValue_direct_setNeedsUpdate,vd.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vd.prototype._setValue_array,vd.prototype._setValue_array_setNeedsUpdate,vd.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vd.prototype._setValue_arrayElement,vd.prototype._setValue_arrayElement_setNeedsUpdate,vd.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vd.prototype._setValue_fromArray,vd.prototype._setValue_fromArray_setNeedsUpdate,vd.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],new Y,new K,new J,new J,new J,new J,new Y,new Y,new J,new X,new X,new J,new J,new J,new J,new Oc,new Mo,new J,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`169`}})),typeof o<`u`&&(o.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):o.__THREE__=`169`)})))()}
/*! Bundled license information:

three/build/three.module.js:
(**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*)
*/
function bd(){return(bd=e((()=>{yd()})))()}function xd(e,t=`#000000`){let n=String(e||t).trim();if(n.startsWith(`var(`)&&typeof document<`u`){let e=document.createElement(`span`);e.style.color=n,e.style.display=`none`,document.body.appendChild(e),n=getComputedStyle(e).color||t,e.remove()}let r=n.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);if(r)return[Fd(r[1]/255),Fd(r[2]/255),Fd(r[3]/255)];let i=n.replace(`#`,``);if(/^[0-9a-f]{3}$/i.test(i)||/^[0-9a-f]{6,8}$/i.test(i)){let e=i.length===3?i.split(``).map(e=>e+e).join(``):i.slice(0,6),t=parseInt(e,16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}return n===t?[0,0,0]:xd(t)}function Sd(e){let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Cd(e){if(Xd[e])return Xd[e];let t=Zd[e];if(!t)return Xd[` `];let n=t.split(`,`).map(e=>e.split(``).map(e=>e===`1`?`11`:`00`).join(``).slice(0,7).padEnd(7,`0`));return[n[0],n[1],n[2],n[3],n[3],n[4],n[5],n[5],n[6]].map((e,t)=>e)}function wd(e){let t=99,n=-1;for(let r of e)for(let e=0;e<r.length;e++)r[e]===`1`&&(t=Math.min(t,e),n=Math.max(n,e));return n<0?[0,3]:[t,n+1]}function Td(e,t){let n=0;for(let r of e.toUpperCase()){let[e,i]=wd(Cd(r));n+=(i-e+1)*t}return n-t}function Ed(e,t,n,r,i,a){let o=t;for(let t of e.toUpperCase()){let e=Cd(t),[s,c]=wd(e);for(let t=0;t<9;t++)for(let l=s;l<c;l++)if(e[t][l]===`1`)for(let e=0;e<r;e++)for(let c=0;c<r;c++)i(o+(l-s)*r+e,n+t*r+c,a);o+=(c-s+1)*r}}function Dd(e,t,n,r=!1){let i=t*e.length,a=new Uint8Array(i*n*4),o=n<32;return e.forEach((e,s)=>{let c=new Uint8Array(t*n),l=(e,r,i)=>{e>=0&&e<t&&r>=0&&r<n&&(c[r*t+e]=i)},u=(e,t,i)=>r?l(t,n-1-e,i):l(e,t,i);if(!o){for(let e=0;e<3;e++)for(let t=0;t<n;t++)l(e,t,3);for(let e=3;e<5;e++)for(let t=0;t<n;t++)l(e,t,1)}let d=o?2:10,f=o?t-3:t-7,p=e.values.split(`,`).map(e=>parseFloat(e)).filter(e=>!isNaN(e)),m=o?2:Math.round(n*(r?.1:.2)),h=o?n-4:Math.round(n*(r?.93:.9)),g=Math.min(...p),_=Math.max(...p),v=e.kind===`bars`?0:g-(_-g)*.35,y=_+(_-g)*.08,b=e=>h-(e-v)/(y-v||1)*(h-m),x=p.length,S=e=>d+e/(x-1)*(f-d);if(e.kind===`bars`){let e=(f-d)/x;for(let t=0;t<x;t++){let n=Math.round(d+t*e+1),r=Math.round(d+(t+1)*e-2),i=Math.round(b(p[t])),a=o?!0:t<5;for(let e=n;e<=r;e++)for(let t=i;t<h;t++)l(e,t,a?t<i+2?2:4:5)}}else{for(let t=d;t<=f;t++){let n=(t-d)/(f-d)*(x-1),r=Math.min(x-2,Math.floor(n)),i=n-r;e.kind===`area`&&(i=i*i*(3-2*i)),e.kind===`steps`&&(i=i<.5?0:1);let a=p[r]+(p[r+1]-p[r])*i,o=Math.round(b(a));for(let e=o+2;e<h;e++)l(t,e,4);l(t,o,2),l(t,o+1,2)}if(e.mark>0&&e.mark<x){let t=Math.round(S(e.mark));for(let e=m-2;e<h;e++)(e-m>>1)%2==0&&l(t,e,3);let n=Math.round(b(p[e.mark]));for(let e=-3;e<=3;e++)for(let r=-3;r<=3;r++)Math.abs(e)+Math.abs(r)<=3&&l(t+e,n+r,Math.abs(e)+Math.abs(r)<=1?1:3)}}for(let e=d;e<=f;e++)l(e,h,3);for(let e=0;e<x;e++){let t=Math.round(S(e));l(t,h+1,3),l(t,h+2,3)}if(e.figure&&!o){let i=r?n:t,a=r?t:n,o=i-(r?4:12),s=Math.floor(a*(r?.3:.44)),c=1;for(let t=4;t>=1;t--)if(Td(e.figure,t)<=o-8&&9*t+8<=s){c=t;break}let l=Td(e.figure,c),f=9*c,p=r?2:Math.max(3,c+1),m=r?Math.max(1,Math.floor((i-(l+p*2))/2)):d-2,h=r?7:Math.round(n*.06),g=m+l+p*2,_=h+f+p*2;for(let e=m-1;e<=g+1;e++)for(let t=h-1;t<=_+1;t++)u(e,t,3);for(let e=m;e<=g;e++)for(let t=h;t<=_;t++)u(e,t,1);Ed(e.figure,m+p,h+p+1,c,u,3)}for(let e=0;e<t;e++){let r=s*t+(t-1-e);for(let o=0;o<n;o++){let n=(o*i+r)*4;a[n]=c[o*t+e]*40,a[n+3]=255}}}),{data:a,total:i}}function Od(e){let{mode:t=`hero`,previewTime:n=-1,playIntro:r=!0,sources:i=kd,answers:a=Ad,table:l=`#E6E5E1`,ink:u=`#111317`,accent:d=`#FF4B1F`,bone:p=`#ECE7DD`,baseWeft:m=`#4B505A`,steel:h=`#A7ADB5`,picksPerSecond:_=11,bandTop:v=.44,bandBottom:y=.9,reedAt:b=.36,rows:x=64,orientation:S=`auto`,scrollScrub:C=!1,steps:w=Md,startFinished:T=!0,snagRow:E=-1,showGrid:O=!0,showLabels:k=!0,fontFamily:A=`'Funnel Sans', 'Funnel Display', system-ui, sans-serif`,monoFamily:j=`'JetBrains Mono', ui-monospace, monospace`,style:M}=e,N=c(null),ee=c(null),te=c(null),[ne,re]=s(S===`vertical`);return g(()=>{let e=N.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect(),n=S===`vertical`||S===`auto`&&t.width>0&&t.width<600;re(n)};t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[S]),g(()=>{let s=N.current;if(!s)return;let c=D.current(),f=c===D.canvas||c===D.thumbnail||c===`canvas`||c===`thumbnail`,g=typeof matchMedia<`u`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,S=new Zl({antialias:!0,alpha:!1,preserveDrawingBuffer:f}),M=Math.min(2,typeof devicePixelRatio<`u`?devicePixelRatio:1);S.setPixelRatio(M);{let e=xd(l,`#E6E5E1`);S.setClearColor(new X(e[0],e[1],e[2]),1)}S.domElement.style.cssText=`position:absolute;inset:0;width:100%;height:100%;display:block`,s.prepend(S.domElement),S.domElement.setAttribute(`aria-hidden`,`true`);let re=new Ql,ie=new Oc,P=t===`trace`,F=ne,ae=(Array.isArray(i)?i:[]).filter(e=>e&&typeof e==`object`),I=(ae.length?ae:kd).slice(0,P?6:8).map((e,t)=>({name:String(e.name??kd[t%8].name),table:String(e.table??kd[t%8].table),rows:String(e.rows??``)})),L=I.length||1,R=P?L*5:F?38:Math.max(24,Math.round(x)),oe=P?120:150,se=(Array.isArray(a)?a:[]).filter(e=>e&&typeof e==`object`&&typeof e.values==`string`&&e.values.split(`,`).length>1),ce=P?[Nd]:(se.length?se:Ad).map(e=>({question:String(e.question??``),title:String(e.title??``),figure:String(e.figure??``),caption:String(e.caption??``),kind:String(e.kind??`area`),values:String(e.values),mark:Number(e.mark)||0,unit:String(e.unit??``),labels:String(e.labels??``)})),z=Math.ceil(R/L),le=(P?[0,1,2,3,4,5]:[2,5,0,7,3,1,6,4]).filter(e=>e<L);for(;le.length<L;)le.push(le.length);let B=[];for(let e=0;e<R;e++)B.push(Math.min(L-1,Math.floor(e/z)));let ue=(F?new J(-.62,.45,.64):new J(-.45,-.62,.64)).normalize(),V={value:new K(1,1)},H={uRes:V,uRot:{value:+!!F},uLight:{value:ue}},U={value:0},W={value:-999},de=(e,t)=>{let n=new uc;n.setAttribute(`aPx`,new ec(/* @__PURE__ */ new Float32Array(12),2)),n.setAttribute(`position`,new ec(/* @__PURE__ */ new Float32Array(18),3));let r=new Sc(n,e);return r.frustumCulled=!1,r.renderOrder=t,re.add(r),(e,t,r,i)=>{n.attributes.aPx.array.set([e,t,r,t,e,i,e,i,r,t,r,i]),n.attributes.aPx.needsUpdate=!0}},fe=new Dc({side:2,vertexShader:Vd,fragmentShader:Hd,depthTest:!1,depthWrite:!1,uniforms:{...H,uTable:{value:new X(...xd(l,`#E6E5E1`))},uInk:{value:new X(...xd(u,`#111317`))},uCloth:{value:new wo},uReed:{value:new wo},uGrid:{value:+!!O}}}),pe=de(fe,0),me=136,he=null,ge=ce.length,_e=Array.from({length:ge},(e,t)=>ce[((t-2)%ge+ge)%ge]),ve=Dd(_e,me,R,F),ye=new $l(ve.data,ve.total,R,ea);ye.magFilter=Fi,ye.minFilter=Fi,ye.needsUpdate=!0;let be=new Uint8Array(R*4),xe=[];for(let e=0;e<R;e++){let t=B[e],n=xd(Pd[t%Pd.length]),r=.9+Sd(e*3.1)*.2,i=[Fd(n[0]*r),Fd(n[1]*r),Fd(n[2]*r)];xe.push(i),be.set([i[0]*255,i[1]*255,i[2]*255,255],e*4)}let Se=new $l(be,R,1,ea);Se.needsUpdate=!0;let Ce=new Dc({side:2,vertexShader:Gd,fragmentShader:Kd,depthTest:!1,depthWrite:!1,uniforms:{...H,uPat:{value:ye},uRowCol:{value:Se},uCols:{value:ve.total},uRows:{value:R},uFell:{value:0},uY0:{value:0},uPitch:{value:6},uOffset:{value:0},uBone:{value:new X(...xd(p,`#ECE7DD`))},uBase:{value:new X(...xd(m,`#4B505A`))},uAccent:{value:new X(...xd(d,`#FF4B1F`))},uInk:{value:new X(...xd(u,`#111317`))},uHover:{value:-99},uHoverA:{value:0},uTrace:{value:0},uTraceRow:{value:-1}}}),we=de(Ce,3);he=()=>{ve=Dd(_e,me,R,F);let e=new $l(ve.data,ve.total,R,ea);e.magFilter=Fi,e.minFilter=Fi,e.needsUpdate=!0,ye.dispose(),ye=e,Ce.uniforms.uPat.value=e,Ce.uniforms.uCols.value=ve.total};let Te=R*oe*2,Ee=[];for(let e=0;e<R;e++)for(let t=0;t<oe-1;t++){let n=(e*oe+t)*2;Ee.push(n,n+1,n+2,n+1,n+3,n+2)}let De=()=>{let e=new uc;return e.setAttribute(`aPx`,new ec(new Float32Array(Te*2),2)),e.setAttribute(`aSide`,new ec(new Float32Array(Te),1)),e.setAttribute(`aAlong`,new ec(new Float32Array(Te),1)),e.setAttribute(`aCol`,new ec(new Float32Array(Te*3),3)),e.setAttribute(`aNrm`,new ec(new Float32Array(Te*2),2)),e.setAttribute(`aHi`,new ec(new Float32Array(Te),1)),e.setAttribute(`position`,new ec(new Float32Array(Te*3),3)),e.setIndex(Ee),e},Oe=De(),ke=De(),Ae=e=>new Dc({side:2,vertexShader:Ud,fragmentShader:Wd,transparent:!0,depthTest:!1,depthWrite:!1,extensions:{derivatives:!0},uniforms:{...H,uIsShadow:{value:e},uAccent:{value:new X(...xd(d,`#FF4B1F`))},uShadow:{value:new K},uPx:{value:1},uTraceOn:U,uPulseX:W,uTable:{value:new X(...xd(l,`#E6E5E1`))}}}),je=new Sc(Oe,Ae(1));je.frustumCulled=!1,je.renderOrder=1,re.add(je);let Me=new Sc(ke,Ae(0));Me.frustumCulled=!1,Me.renderOrder=4,re.add(Me);for(let e of[Oe,ke]){let t=e.attributes.aSide.array,n=e.attributes.aCol.array;for(let e=0;e<R;e++)for(let r=0;r<oe;r++){let i=(e*oe+r)*2;t[i]=-1,t[i+1]=1,n.set(xe[e],i*3),n.set(xe[e],(i+1)*3)}e.attributes.aSide.needsUpdate=!0,e.attributes.aCol.needsUpdate=!0}let Ne=I.map((e,t)=>Sd(t*7.7+1)),Pe=Array.from({length:R},(e,t)=>t).sort((e,t)=>Ne[B[e]]-Ne[B[t]]);{let e=[];for(let t of Pe)for(let n=0;n<oe-1;n++){let r=(t*oe+n)*2;e.push(r,r+1,r+2,r+1,r+3,r+2)}ke.setIndex(e),Oe.setIndex(e)}let Fe=new Dc({side:2,vertexShader:qd,fragmentShader:Jd,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{...H,uBox:{value:new wo},uY0:{value:0},uPitch:{value:6},uRows:{value:R},uSteel:{value:new X(...xd(h,`#A7ADB5`))}}}),Ie=de(Fe,5),Le=new Dc({side:2,vertexShader:Gd,fragmentShader:Yd,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{...H,uC:{value:new K},uSize:{value:new K(9,46)},uBlur:{value:0},uWeft:{value:new X(...xd(p,`#ECE7DD`))},uWeftTop:{value:0},uWeftX:{value:0},uWeftOn:{value:0}}}),Re=de(Le,6),ze=new Float32Array(R*oe),Be=new Float32Array(R*oe),G={x:-9999,y:-9999,sx:-9999,sy:-9999,active:0,inside:!1},Ve={col:-99,a:0},He=-40,Ue=1,We=1,Ge=1,Ke=1,qe=6,Je=0,Ye=0,Xe=0,Ze=0,Qe=[],$e=(e,t)=>F?[We-t,e]:[e,t],et=()=>{let e=s.getBoundingClientRect();Ge=Math.max(1,e.width),Ke=Math.max(1,e.height),Ue=F?Ke:Ge,We=F?Ge:Ke,S.setSize(Ge,Ke,!1),V.value.set(Ue,We);let t=!F&&Ge<900,n=F?.05:P?.12:t?Math.max(v,.5):v;qe=Math.max(3,((F?.95:P?.84:t?Math.min(y,.93):y)-n)*We/R),Je=n*We,Ye=Je+qe*R,Xe=Math.round(Ue*(F?P?.5:.34:P?.6:t?.32:b)),Ze=Xe+Math.max(16,qe*.9),He=P?F?Ue*.27:Math.min(Ue*.34,452):-40,Qe.length=0;let r=F||P?We*.06:t?We*.44:We*.36,i=F||P?We*.94:t?We*.99:We*.97;for(let e=0;e<L;e++)Qe.push(r+(e+.5)/L*(i-r));pe(0,0,Ue,We),we(Ze,Je,Ue+2,Ye),fe.uniforms.uCloth.value.set(Ze,Je,Ue+40,Ye),fe.uniforms.uReed.value.set(Xe-7,Je-24,Xe+7,Ye+24),Ce.uniforms.uFell.value=Ze,Ce.uniforms.uY0.value=Je,Ce.uniforms.uPitch.value=qe,Fe.uniforms.uY0.value=Je,Fe.uniforms.uPitch.value=qe,Re(Ze-30,Je-60,Ze+30,Ye+60);let a=Math.max(F?40:64,Math.floor((Ue-Ze)/qe)-1);a!==me&&typeof he==`function`&&(me=a,he()),yt()},tt=ee.current;tt.innerHTML=``;let nt=[],rt=`font-family:${j};font-size:10px;letter-spacing:.08em;text-transform:uppercase`,it=[],at=-1,ot=-1,st=document.createElement(`div`);st.style.cssText=`position:absolute;display:none;gap:12px;padding:8px 16px;box-sizing:border-box;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;pointer-events:auto;-webkit-overflow-scrolling:touch`,P&&F&&(tt.appendChild(st),st.addEventListener(`scroll`,()=>{let e=it[0]?it[0].getBoundingClientRect().width+12:1;at=Fd(Math.round(st.scrollLeft/e),0,L-1)},{passive:!0})),P&&I.forEach((e,t)=>{let n=document.createElement(`div`),r=jd[t%jd.length];n.style.cssText=`position:absolute;left:0;top:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;gap:6px;padding:12px 16px;border-radius:14px;background:rgba(248,247,244,.94);box-shadow:0 1px 0 rgba(17,19,23,.06),0 14px 34px -18px rgba(17,19,23,.35),inset 0 0 0 1px rgba(17,19,23,.06);color:${u};font-family:${A};pointer-events:auto;cursor:pointer;transition:box-shadow .35s cubic-bezier(.2,.7,.2,1),transform .35s cubic-bezier(.2,.7,.2,1)`;let i=r.rows.map((e,t)=>`<div data-r="${t}" style="display:flex;justify-content:space-between;gap:12px;${rt};font-size:10.5px;text-transform:none;letter-spacing:.02em;padding:2px 6px;margin:0 -6px;border-radius:5px;transition:background .3s,color .3s"><span style="opacity:.55">${e[0]}</span><span>${e[1]}</span></div>`).join(``);n.innerHTML=`<div style="display:flex;align-items:center;gap:8px;font-size:13.5px;letter-spacing:-.01em"><span style="width:7px;height:7px;border-radius:2px;background:${Pd[t%Pd.length]}"></span><b style="font-weight:600">${e.name}</b><span style="${rt};opacity:.5">${e.table}.${r.field}</span><span style="margin-left:auto;${rt};opacity:.45">${e.rows}</span></div><div data-rows style="display:flex;flex-direction:column;gap:1px">${i}</div>`,n.setAttribute(`role`,`button`),n.setAttribute(`tabindex`,`0`),n.setAttribute(`aria-label`,`Trace ${e.name} ${e.table}.${r.field}`),n.style.scrollSnapAlign=`center`,n.addEventListener(`pointerenter`,()=>{F||(ct=t)}),n.addEventListener(`pointerleave`,()=>{ct=-1}),n.addEventListener(`focus`,()=>{ot=t}),n.addEventListener(`blur`,()=>{ot=-1}),n.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),ot=t)}),(F?st:tt).appendChild(n),it.push(n)});let ct=-1;P||I.forEach(e=>{let t=document.createElement(`div`);t.style.cssText=`position:absolute;left:0;top:0;display:flex;align-items:center;gap:8px;padding:5px 9px 5px 7px;border-radius:999px;background:rgba(246,245,242,.86);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);box-shadow:0 1px 0 rgba(17,19,23,.06),0 6px 18px -8px rgba(17,19,23,.25);color:${u};font-family:${A};font-size:12px;letter-spacing:-.005em;white-space:nowrap;transform:translate(0,-50%);transition:opacity .5s cubic-bezier(.2,.7,.2,1)`,t.innerHTML=`<span style="width:6px;height:6px;border-radius:2px;background:${u}"></span><span style="font-weight:500">${e.name}</span><span style="${rt};opacity:.5">${e.table}</span>`,k||(t.style.display=`none`),tt.appendChild(t),nt.push(t)});let lt=document.createElement(`div`);lt.style.cssText=`position:absolute;left:0;top:0;pointer-events:none;padding:8px 10px;border-radius:10px;background:${u};color:#F4F3EF;font-family:${A};font-size:12px;line-height:1.35;white-space:nowrap;opacity:0;transform:translate(-50%,-120%);transition:opacity .18s ease`,tt.appendChild(lt);let ut=document.createElement(`div`);ut.style.cssText=`position:absolute;left:0;top:0;display:flex;flex-direction:column;gap:10px;max-width:520px;color:${u};font-family:${A}`,ut.innerHTML=`<div data-q style="display:flex;align-items:center;gap:10px;height:44px;padding:0 8px 0 16px;border-radius:999px;background:rgba(250,249,246,.9);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 1px 0 rgba(17,19,23,.07),0 10px 30px -12px rgba(17,19,23,.3);font-size:15px;letter-spacing:-.01em"><span style="${rt};color:${d}">Ask</span><span data-qt style="flex:1;white-space:nowrap;overflow:hidden"></span><span data-qs style="${rt};padding:6px 10px;border-radius:999px;background:${u};color:#F4F3EF">Weaving</span></div><div data-a style="${rt};font-size:10.5px;line-height:1.6;opacity:.7;padding-left:16px;min-height:34px"></div>`,k||(ut.style.display=`none`),tt.appendChild(ut);let dt=document.createElement(`div`);dt.style.cssText=`position:absolute;right:32px;top:0;display:flex;gap:22px;color:${u};${rt};opacity:.62;white-space:nowrap`,k||(dt.style.display=`none`),tt.appendChild(dt);let ft=document.createElement(`div`);ft.style.cssText=`position:absolute;left:0;top:0;color:${u};font-family:${A};display:${P?`grid`:`none`};grid-template-columns:auto 1fr;gap:6px 16px;align-items:baseline;${F?`box-sizing:border-box;padding:12px 14px;border-radius:14px;background:rgba(248,247,244,.9);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);box-shadow:0 14px 34px -18px rgba(17,19,23,.4)`:``}`,ft.setAttribute(`aria-live`,`polite`),tt.appendChild(ft);let pt=document.createElement(`div`);pt.setAttribute(`aria-live`,`polite`),pt.setAttribute(`role`,`status`),pt.style.cssText=`position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap`,P||tt.appendChild(pt),P&&(ut.style.display=`none`,dt.style.display=`none`);let mt=document.createElement(`div`),ht=[];C&&!P&&(mt.style.cssText=`position:absolute;left:32px;right:32px;top:88px;display:grid;grid-template-columns:repeat(${w.length},1fr);gap:24px;color:${u};font-family:${A}`,w.forEach((e,t)=>{let n=document.createElement(`div`);n.style.cssText=`display:flex;flex-direction:column;gap:10px;padding-top:16px;position:relative;transition:opacity .5s cubic-bezier(.2,.7,.2,1)`,n.innerHTML=`<div data-bar style="position:absolute;left:0;right:0;top:0;height:2px;background:rgba(17,19,23,.12)"><div data-fill style="height:100%;width:0;background:${d}"></div></div><div style="${rt};color:${d}">0${t+1}</div><div style="font-family:'Funnel Display',${A};font-weight:500;font-size:30px;letter-spacing:-.03em;line-height:1">${e.title}</div><div style="font-size:15px;line-height:1.5;letter-spacing:-.005em;opacity:.72;max-width:380px">${e.body}</div>`,mt.appendChild(n),ht.push(n)}),tt.appendChild(mt),ut.style.display=`none`);let gt=ut.querySelector(`[data-qt]`),_t=ut.querySelector(`[data-qs]`),vt=ut.querySelector(`[data-a]`),yt=()=>{if(nt.forEach((e,t)=>{let n=le[t];if(F){let[n]=$e(0,Qe[t]);e.style.left=n+`px`,e.style.top=(t%2?36:8)+`px`,e.style.transform=`translate(-50%,0)`,e.style.fontSize=`11px`}else e.style.left=(Ge<700?10:20)+`px`,e.style.top=Qe[t]-0+`px`;e.dataset.b=String(n),e.innerHTML=e.innerHTML}),nt.forEach((e,t)=>{let n=I[le[t]],r=`<span style="width:6px;height:6px;border-radius:2px;background:${Pd[le[t]%Pd.length]}"></span>`;e.innerHTML=F?`${r}<span style="font-weight:500">${n.name.split(` `)[0]}</span>`:`${r}<span style="font-weight:500">${n.name}</span><span style="${rt};opacity:.5">${n.table}</span>`}),P&&F){let e=Math.max(96,Xe*0+He-14);st.style.cssText+=`;display:flex;left:0;right:0;top:0;height:${e}px`,it.forEach(t=>{t.style.position=`relative`,t.style.left=`0`,t.style.top=`0`,t.style.width=Ge*.78+`px`,t.style.height=e-16+`px`,t.style.flex=`0 0 auto`}),ft.style.left=`16px`,ft.style.width=Ge-32+`px`,ft.style.top=Ke-118+`px`}else if(P){it.length;let e=Qe.length>1?Qe[1]-Qe[0]:We*.8,t=Math.min(118,e-12);it.forEach((e,n)=>{e.style.left=(Ue<700?12:32)+`px`,e.style.width=He-(Ue<700?12:32)+`px`,e.style.height=t+`px`,e.style.top=Qe[n]-t/2+`px`;let r=e.querySelector(`[data-rows]`);r&&(r.style.display=t<90?`none`:`flex`)}),ft.style.left=Ze+`px`,ft.style.top=Ye+22+`px`,ft.style.width=Ue-Ze-32+`px`}let e=Math.min(520,Ge-32);ut.style.width=e+`px`,F?(ut.style.left=`16px`,ut.style.top=Ke-86+`px`,dt.style.display=`none`,vt.style.display=`none`):(ut.style.left=(Ge<900?16:Ge-e-32)+`px`,ut.style.top=Je-(Ge<900?112:104)+`px`,dt.style.top=Ye+20+`px`,dt.style.right=(Ge<900?16:32)+`px`)},bt=1.5,xt=r&&!f&&!g?2.2:0,St=-1,Ct=e=>{if(P)return{P:2*me,phase:`hold`,typed:1,k:0,tau:0};if(St>=0){let e=Fd((St-.5)/.46);return{P:e*me,phase:e<=0?`type`:e>=1?`hold`:`weave`,typed:Fd(St/.5),k:0,tau:0}}let t=me/_,n=bt+t+3.2,r=T?Math.max(0,e-4)+bt+t:Math.max(0,e),i=Math.floor(r/n),a=r-i*n,o,s,c=1;return a<bt?(o=(i+2)*me,s=`type`,c=a/bt):a<bt+t?(o=(i+2)*me+(a-bt)*_,s=`weave`):(o=(i+3)*me,s=`hold`),{P:o,phase:s,typed:c,k:i,tau:a}},wt=new Float32Array(oe),Tt=new Float32Array(oe),Et=(e,t,n,r)=>{let i=Oe.attributes.aPx.array,a=ke.attributes.aPx.array,o=ke.attributes.aNrm.array,s=Oe.attributes.aNrm.array,c=ke.attributes.aAlong.array,l=ke.attributes.aHi.array,u=Oe.attributes.aHi.array,d=P?He-6:-40,f=Ze+2,p=Xe-60,m=Math.max(1.6,qe*(P?.6:.78)),h=Ce.uniforms.uTrace.value>.01?Ce.uniforms.uTraceRow.value:-1;for(let g=0;g<R;g++){let _=B[g],v=le.indexOf(_),y=g-_*z-(z-1)/2,b=Qe[v],x=Je+(g+.5)*qe,S=.08+.3*Sd(_*5.3),C=Sd(g*1.93)*6.283,w=2.3+1.2*Sd(_*2.1);for(let i=0;i<oe;i++){let a=i/(oe-1),o=d+(f-d)*a,s=Fd((o-d)/(p-d)),c=Fd((s-S)/(1-S)),l=Id(c),u=Math.sin(Math.PI*Fd(s*1.02))**2,m=Math.sin(C+o*.05+_)*w*(1-l),h=b+y*(P?qe*.55:2.2)+m*(P?.4:1),v=h+(x-h)*l,T=(5+9*Sd(g*.77))*(1+r*5)*(P?.35:1);v+=u*T*(Math.sin(o*.021+C+e*.55)*.6+Math.sin(o*.047-C*1.7+e*.31)*.4)*(1-l*.85);let E=g*oe+i;if(t>0){let e=0;if(G.active>.01&&o<p+20){let t=o-G.x,n=v-G.y,r=t*t+n*n;r<17496&&(e=Math.sign(n||1)*22*Math.exp(-r/2916)*G.active*(1-l*.9))}Be[E]+=((e-ze[E])*90-Be[E]*9)*t,ze[E]+=Be[E]*t}v+=ze[E]*u,wt[i]=o+(o>Xe-4?n:0)*0,Tt[i]=v}let T=g===h;for(let e=0;e<oe;e++){let t=Math.max(0,e-1),n=Math.min(oe-1,e+1),r=wt[n]-wt[t],p=Tt[n]-Tt[t],h=Math.hypot(r,p)||1;r/=h,p/=h;let _=-p,v=r,y=(g*oe+e)*2,b=e/(oe-1),x=wt[e],S=x<Xe-40?1:Fd((Xe-x)/40+0),C=(4+11*Math.sin(Math.PI*Fd((x-d)/(Xe-d))))*S;a[y*2]=wt[e]+_*m*.5,a[y*2+1]=Tt[e]+v*m*.5,a[y*2+2]=wt[e]-_*m*.5,a[y*2+3]=Tt[e]-v*m*.5,o[y*2]=-_,o[y*2+1]=-v,o[y*2+2]=-_,o[y*2+3]=-v;let w=m*(1.2+C*.22),E=C*.45,D=C*.8;i[y*2]=wt[e]+_*w+E,i[y*2+1]=Tt[e]+v*w+D,i[y*2+2]=wt[e]-_*w+E,i[y*2+3]=Tt[e]-v*w+D,s[y*2]=-_,s[y*2+1]=-v,s[y*2+2]=-_,s[y*2+3]=-v,c[y]=c[y+1]=b*(f-d)/Math.max(1.5,m*.55);let O=T?2:1;l[y]=l[y+1]=O,u[y]=u[y+1]=x>Xe?0:.55+C*.05}}for(let e of[Oe,ke])e.attributes.aPx.needsUpdate=!0,e.attributes.aNrm.needsUpdate=!0,e.attributes.aHi.needsUpdate=!0;ke.attributes.aAlong.needsUpdate=!0},Dt=[7,18,2,26,12,22,9,15],Ot=3.2,kt=-2,At=e=>{let t=Math.floor(e/Ot),n=e-t*Ot,r=Dt[t%Dt.length]%R,i=Ld(n/.4)*(1-Fd((n-2.9000000000000004)/.3)),a=n*.75%1,o=G.inside&&G.x>Xe-20&&G.y>Je&&G.y<Ye,s=ct>=0?ct:ot>=0?ot:F&&at>=0?at:-1;s>=0?(r=s*z+2,i=1):o&&!F&&(r=Fd(Math.floor((G.y-Je)/qe),0,R-1),i=1),Ce.uniforms.uTraceRow.value=r,Ce.uniforms.uTrace.value=i,U.value=i;let c=He-6;W.value=c+(Ue-c)*Rd(a),Number.isFinite(r)||(r=0),r=Fd(Math.round(r),0,R-1);let l=Fd(B[r]??0,0,L-1);if(r!==kt){kt=r;let e=I[l]||kd[l%kd.length],t=jd[l%jd.length]||jd[0],n=Fd((r-l*z)%3,0,2);it.forEach((e,t)=>{let r=t===le.indexOf(l);e.style.transform=r?`translateX(8px)`:`none`,e.style.boxShadow=r?`0 0 0 1.5px ${d},0 18px 40px -18px rgba(17,19,23,.45)`:`0 1px 0 rgba(17,19,23,.06),0 14px 34px -18px rgba(17,19,23,.35),inset 0 0 0 1px rgba(17,19,23,.06)`,e.querySelectorAll(`[data-r]`).forEach((e,t)=>{let i=r&&t===n;e.style.background=i?d:`transparent`,e.style.color=i?`#FFF6F2`:u})});let i=e=>`<span style="${rt};opacity:.5">${e}</span>`,a=e=>`<span style="font-size:14px;letter-spacing:-.01em">${e}</span>`;ft.innerHTML=`${i(`Thread`)}${a(`<b style="font-weight:600">${String(r+1).padStart(2,`0`)}</b> of ${R} \xb7 ${e.name}`)}${i(`From`)}${a(`${e.table}.${t.field} \xb7 ${t.rows[n][0]} = ${t.rows[n][1]}`)}${i(`Step`)}${a(t.op)}${i(`Into`)}${a(`row ${r+1} of the answer, every pick`)}`}ft.style.opacity=String(.35+.65*i)},jt=-1,Mt=``,Nt=(e,t)=>{let n=St>=0?Ld(Fd((St-.04)/.42)):xt>0?Ld(e/xt):1,r=1-n,i=Ct(e),a=Math.floor(i.P),o=i.phase===`weave`?i.P-a:0,s=Fd(o/.72),c=Fd((o-.72)/.28),l=Math.sin(Math.PI*c)*-5,f=a+(i.phase===`weave`?Rd(c):0);Ce.uniforms.uOffset.value=f;let p=Xe+(i.phase===`weave`?l*.6:0);Fe.uniforms.uBox.value.set(p-7,Je-24,p+7,Ye+24),Ie(p-7,Je-24,p+7,Ye+24);let m=a%2==0?1:-1,h=Je-34,g=Ye+34,v=m>0?h+(g-h)*Rd(s):g-(g-h)*Rd(s),y=i.phase===`weave`;if(Le.uniforms.uC.value.set(Ze+4,y?v:-999),Le.uniforms.uBlur.value=y&&s>.05&&s<.95?10:0,Le.uniforms.uWeftOn.value=y&&c<=0?1:0,Le.uniforms.uWeftTop.value=m>0?Je:Ye,Le.uniforms.uWeftX.value=Ze+1.5,Ve.a+=((G.inside&&G.x>Ze&&G.y>Je&&G.y<Ye?1:0)-Ve.a)*(t>0?Math.min(1,t*10):1),G.x>Ze&&(Ve.col=Math.floor(f-(G.x-Ze)/qe)),Ce.uniforms.uHover.value=Ve.col,Ce.uniforms.uHoverA.value=P?0:Ve.a,P)At(e);else if(E>=0){let t=Fd(Math.round(E),0,R-1);Ce.uniforms.uTraceRow.value=t,Ce.uniforms.uTrace.value=1,U.value=.35,W.value=-40+(Ze+42)*(e*.45%1)}Et(e,t,l,r);let b=i.k%ce.length,x=ce[b],C=i.phase===`type`?x.question.slice(0,Math.floor(x.question.length*Ld(i.typed))):x.question;C!==Mt&&(gt.textContent=C,Mt=C);let w=i.phase===`weave`?Math.floor((i.P-(i.k+2)*me)/me*100):100,T=i.phase===`type`?`Reading`:i.phase===`weave`?`Weaving ${w}%`:`Answered`;_t.textContent!==T&&(_t.textContent=T,_t.style.background=i.phase===`hold`?d:u);let D=i.phase===`hold`?x.caption:i.phase===`weave`?`Joining ${I.length} sources \xb7 ${I.slice(0,3).map(e=>e.table).join(` + `)} …`:`Reading the question…`;vt.textContent!==D&&(vt.textContent=D);let O=i.phase===`hold`?`${x.question} Answer: ${x.figure}. ${x.caption}`:``;O&&pt.textContent!==O&&(pt.textContent=O);let k=String(Math.floor(f)).padStart(5,`0`),A=`<span>${R} threads</span><span>${I.length} sources</span><span>pick ${k}</span><span style="color:${d}">${i.phase===`weave`?_+` picks/s`:`idle`}</span>`;if(dt.dataset.t!==A&&(dt.innerHTML=A,dt.dataset.t=A),!P&&Ve.a>.5&&G.x>Ze){let e=Ve.col,t=Math.floor(e/me),n=me-1-(e-t*me),r=_e[(t%_e.length+_e.length)%_e.length],i=r.values.split(`,`).map(Number),a=Fd((n-11)/(me-8-11))*(i.length-1),o=Math.round(a),s=r.labels?r.labels.split(`,`):[];e>=0&&e<f?(lt.innerHTML=`<span style="${rt};opacity:.6">${r.title} \xb7 ${s.length?s[Math.min(s.length-1,Math.floor(o/i.length*s.length))]:`#`+(o+1)}</span><br><b style="font-weight:600">${i[o]}${r.unit===`%`?`%`:r.unit===`x`?``:`k`}</b> <span style="opacity:.6">pick ${e}</span>`,lt.style.left=G.sx+`px`,lt.style.top=G.sy+`px`,lt.style.opacity=`1`):lt.style.opacity=`0`}else lt.style.opacity=`0`;if(nt.forEach(e=>e.style.opacity=String(.2+.8*n)),ht.length){let e=St<0?1:St,t=[0,.3,.5,1];ht.forEach((n,r)=>{let i=Fd((e-t[r])/Math.max(.01,t[r+1]-t[r])),a=e>=t[r]-.001&&(r===ht.length-1||e<t[r+1]);n.style.opacity=a?`1`:i>=1?`0.55`:`0.28`;let o=n.querySelector(`[data-fill]`);o&&(o.style.width=(i*100).toFixed(1)+`%`)})}S.render(re,ie)},Pt=null;if(C&&o!==void 0){let e=s.parentElement,t=o.innerHeight||900;for(;e&&e.getBoundingClientRect().height<t*1.6;)e=e.parentElement;Pt=e}let Ft=()=>{if(!Pt)return;let e=o.innerHeight||900,t=Pt.getBoundingClientRect();St=Fd(-t.top/Math.max(1,t.height-e))};C&&(St=f||g||!Pt?1:0),et();let It=n>=0?n:0;Nt(It,0),jt=It;let Lt=e=>{let t=s.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;G.sx=n,G.sy=r,G.x=F?r:n,G.y=F?t.width-n:r,G.inside=n>=0&&r>=0&&n<=t.width&&r<=t.height},Rt=()=>{G.inside=!1};s.addEventListener(`pointermove`,Lt),s.addEventListener(`pointerleave`,Rt);let zt=0,Bt=performance.now(),Vt=Bt,Ht=!0,Ut=typeof IntersectionObserver<`u`?new IntersectionObserver(e=>{Ht=e[0]?.isIntersecting??!0}):null;Ut?.observe(s);let Wt=e=>{zt=requestAnimationFrame(Wt);let t=Math.min(.05,(e-Vt)/1e3);if(Vt=e,!Ht)return;G.active+=(+!!G.inside-G.active)*Math.min(1,t*6);let r=(e-Bt)/1e3+(n>=0?n:0);C&&Ft(),Nt(r,t)};!f&&!g&&n<0&&(zt=requestAnimationFrame(Wt));let Gt=new ResizeObserver(()=>{et(),n<0&&(f||g)&&(jt=0),Nt(jt,0)});Gt.observe(s);let Kt={render:(e,t,n)=>{t!=null&&n!=null&&(G.sx=t,G.sy=n,G.x=F?n:t,G.y=F?Ge-t:n,G.inside=!0,G.active=1),jt=e;for(let t=0;t<40;t++)Et(e,1/60,0,0);return Nt(e,1/60),!0},stop:()=>cancelAnimationFrame(zt),trace:(e,t)=>{Ce.uniforms.uTraceRow.value=e,Ce.uniforms.uTrace.value=t}};te.current=Kt;let qt=o===void 0?{}:o;qt.__metricloom=qt.__metricloom||{};let Jt=e.hookName||t;return qt.__metricloom[Jt]=Kt,typeof document<`u`&&document.fonts?.ready&&document.fonts.ready.then(()=>{he(),Nt(jt,0)}),()=>{cancelAnimationFrame(zt),Gt.disconnect(),Ut?.disconnect(),s.removeEventListener(`pointermove`,Lt),s.removeEventListener(`pointerleave`,Rt),S.dispose(),S.domElement.remove(),qt.__metricloom&&delete qt.__metricloom[e.hookName||t]}},[t,n,r,JSON.stringify(i),JSON.stringify(a),l,u,d,p,m,h,_,v,y,b,x,S,ne,C,JSON.stringify(w),T,E,O,k,A,j]),/*#__PURE__*/ f(`div`,{ref:N,role:`region`,"aria-label":t===`trace`?`Data lineage: pick a source to trace its thread into the answer`:`Live answer being woven from connected data sources`,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,background:l,...M},children:/*#__PURE__*/ f(`div`,{ref:ee,style:{position:`absolute`,inset:0,pointerEvents:`none`}})})}var kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd;function Qd(){return(Qd=e((()=>{r(),m(),h(),k(),bd(),kd=[{name:`Billing`,table:`invoices`,rows:`412k rows`},{name:`CRM`,table:`accounts`,rows:`18.2k rows`},{name:`Product events`,table:`sessions`,rows:`96M rows`},{name:`Support desk`,table:`tickets`,rows:`231k rows`},{name:`Warehouse`,table:`orders`,rows:`3.4M rows`},{name:`Ad spend`,table:`campaigns`,rows:`8.9k rows`},{name:`Spreadsheets`,table:`targets_fy26`,rows:`1.2k rows`},{name:`HR system`,table:`headcount`,rows:`640 rows`}],Ad=[{question:`Why did net revenue retention dip in March?`,title:`NRR`,figure:`97%`,unit:`%`,kind:`area`,values:`108,109,111,110,112,113,111,104,97,99,103,106,109,112`,labels:`Oct,Nov,Dec,Jan,Feb,Mar,Apr`,mark:8,caption:`EU annual renewals slipped three weeks after the invoicing change on 3 March. 11 accounts, all renewed by April.`},{question:`Which accounts are likely to churn next quarter?`,title:`AT RISK`,figure:`$1.2M`,unit:`k`,kind:`bars`,values:`92,88,81,77,70,64,58,51,44,39,33,28,22,18`,labels:``,mark:0,caption:`14 accounts: seat usage down more than 30% and two or more open P1 tickets. The top five hold $740k of ARR.`},{question:`What turns a trial into a paid plan?`,title:`TRIAL→PAID`,figure:`3.1×`,unit:`x`,kind:`steps`,values:`12,14,15,19,23,29,34,38,41,43,44,45,45,46`,labels:``,mark:5,caption:`Trials that invite a teammate in week one convert 3.1× more often. Nothing else in the first week comes close.`}],jd=[{field:`amount_paid`,op:`sum by account_id, month`,rows:[[`inv_20931`,`$4,120.00`],[`inv_20932`,`$860.00`],[`inv_20940`,`$12,400.00`]]},{field:`segment`,op:`join on account_id`,rows:[[`acc_0412`,`Mid-market`],[`acc_0419`,`Enterprise`],[`acc_0433`,`Startup`]]},{field:`active_seats`,op:`7-day rolling mean`,rows:[[`ses_88f1`,`41 seats`],[`ses_88f4`,`12 seats`],[`ses_8902`,`208 seats`]]},{field:`priority`,op:`count P1 open > 48h`,rows:[[`tkt_5530`,`P1 · open`],[`tkt_5531`,`P3 · closed`],[`tkt_5544`,`P1 · open`]]},{field:`region`,op:`map to billing entity`,rows:[[`ord_77120`,`EU-West`],[`ord_77121`,`US-East`],[`ord_77135`,`EU-North`]]},{field:`cost`,op:`attribute to first touch`,rows:[[`cmp_q3_09`,`$2,300`],[`cmp_q3_11`,`$740`],[`cmp_q3_14`,`$5,020`]]}],Md=[{title:`Connect`,body:`Point Warpyn at your warehouse, billing, CRM and support desk. 240+ connectors, read-only by default.`},{title:`Map`,body:`Every source is combed into one model: customers, revenue, usage and tickets lined up on the same key.`},{title:`Ask`,body:`Ask in plain English. The answer is woven from the rows, and every figure keeps its thread back to them.`}],Nd={question:``,title:``,figure:``,caption:``,kind:`bars`,values:`62,81,58,72,93,86`,labels:``,mark:0,unit:`k`},Pd=[`#20232A`,`#2C3340`,`#383830`,`#272B33`,`#3B342E`,`#252A36`,`#33373D`,`#1C1E23`],Fd=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),Id=e=>(e=Fd(e),e*e*e*(e*(e*6-15)+10)),Ld=e=>1-(1-Fd(e))**3,Rd=e=>(e=Fd(e),e<.5?4*e*e*e:1-(-2*e+2)**3/2),zd=`
uniform vec2 uRes;
uniform float uRot;
vec4 toClip(vec2 p){
  // layout happens in "loom space" (warp runs +x). Phones rotate it so the warp runs down the screen.
  vec2 s = p; vec2 R = uRes;
  if (uRot > 0.5) { s = vec2(uRes.y - p.y, p.x); R = uRes.yx; }
  vec2 c = s / R * 2.0 - 1.0; c.y = -c.y;
  return vec4(c.x, c.y, 0.0, 1.0);
}
`,Bd=`
vec3 toLin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 filmic(vec3 x){ // ACES fitted (Narkowicz), gentle exposure
  x *= 1.0;
  vec3 a = x*(2.51*x+0.03); vec3 b = x*(2.43*x+0.59)+0.14; return clamp(a/b,0.0,1.0);
}
vec3 toOut(vec3 lin){ return pow(filmic(lin*1.08), vec3(1.0/2.2)); }
float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
`,Vd=zd+`
attribute vec2 aPx;
varying vec2 vPx;
void main(){ vPx = aPx; gl_Position = toClip(aPx); }
`,Hd=Bd+`
uniform vec2 uRes; uniform vec3 uTable; uniform vec4 uCloth; uniform vec4 uReed; uniform float uGrid; uniform vec3 uInk;
varying vec2 vPx;
float sdBox(vec2 p, vec2 b){ vec2 d = abs(p)-b; return length(max(d,0.0)) + min(max(d.x,d.y),0.0); }
void main(){
  vec3 c = toLin(uTable);
  // soft light falloff from a window top-left
  vec2 uv = vPx/uRes;
  c *= 1.0 + 0.035*(1.0 - smoothstep(0.05, 0.9, length((uv - vec2(0.3,0.05))*vec2(1.0,1.3))));
  // blueprint grid (12 col) very faint
  float colW = uRes.x/12.0;
  float gx = abs(fract(vPx.x/colW + 0.5) - 0.5)*colW;
  float gl = (1.0 - smoothstep(0.0, 0.8, gx)) * uGrid;
  float outBand = 1.0 - (step(uCloth.y - 40.0, vPx.y) * step(vPx.y, uCloth.w + 40.0));
  c = mix(c, toLin(uInk), gl*(0.035 + 0.035*outBand));
  // cloth contact + soft shadow
  vec2 cc = (uCloth.xy + uCloth.zw)*0.5; vec2 hb = (uCloth.zw - uCloth.xy)*0.5;
  float d1 = sdBox(vPx - cc - vec2(3.0, 7.0), hb);
  float sh = 0.30*(1.0 - smoothstep(-6.0, 26.0, d1)) + 0.25*(1.0 - smoothstep(-2.0, 5.0, sdBox(vPx - cc - vec2(0.5,1.5), hb)));
  // reed shadow
  vec2 rc = (uReed.xy + uReed.zw)*0.5; vec2 rb = (uReed.zw - uReed.xy)*0.5;
  sh += 0.30*(1.0 - smoothstep(-3.0, 18.0, sdBox(vPx - rc - vec2(6.0, 10.0), rb)));
  c *= 1.0 - clamp(sh, 0.0, 0.62);
  // paper-free grain
  c *= 0.99 + 0.02*h21(floor(vPx*1.0));
  gl_FragColor = vec4(toOut(c), 1.0);
}
`,Ud=zd+`
attribute vec2 aPx; attribute float aSide; attribute float aAlong; attribute vec3 aCol; attribute vec2 aNrm; attribute float aHi;
varying float vSide; varying float vAlong; varying vec3 vCol; varying vec2 vNrm; varying float vHi; varying float vX;
uniform vec2 uShadow; uniform float uIsShadow;
void main(){ vSide = aSide; vAlong = aAlong; vCol = aCol; vNrm = aNrm; vHi = aHi; vX = aPx.x;
  gl_Position = toClip(aPx); }
`,Wd=Bd+`
varying float vSide; varying float vAlong; varying vec3 vCol; varying vec2 vNrm; varying float vHi; varying float vX;
uniform float uIsShadow; uniform vec3 uLight; uniform vec3 uAccent; uniform float uPx; uniform float uTraceOn; uniform float uPulseX; uniform vec3 uTable;
void main(){
  float s = vSide;
  if (uIsShadow > 0.5) {
    float a = exp(-s*s*3.2) * 0.20 * vHi;
    gl_FragColor = vec4(0.0, 0.0, 0.0, a);
    return;
  }
  float aa = fwidth(s)*1.2;
  float cover = 1.0 - smoothstep(1.0 - aa, 1.0, abs(s));
  float h = sqrt(max(0.0, 1.0 - s*s));
  vec3 n = normalize(vec3(vNrm * s, h));
  // yarn twist: diagonal plies
  float ply = 0.5 + 0.5*sin(vAlong*1.35 + s*2.4);
  vec3 alb = toLin(vCol) * (0.82 + 0.3*ply);
  alb = mix(alb, toLin(uAccent), vHi > 1.5 ? 0.85 : 0.0);
  float dif = max(dot(n, uLight), 0.0);
  vec3 H = normalize(uLight + vec3(0.0,0.0,1.0));
  float sp = pow(max(dot(n,H),0.0), 26.0) * 0.22 * (0.6 + 0.4*ply);
  vec3 col = alb * (0.30 + 0.95*dif) * (0.55 + 0.45*h) + sp;
  if (vHi > 1.5) {
    float pulse = exp(-pow((vX - uPulseX)/36.0, 2.0));
    col += toLin(uAccent) * pulse * 0.9 * h + vec3(pulse*0.25*h);
  } else {
    col = mix(col, toLin(uTable)*(0.75+0.25*h), 0.55*uTraceOn);
  }
  gl_FragColor = vec4(toOut(col), cover);
}
`,Gd=zd+`
attribute vec2 aPx; varying vec2 vPx; void main(){ vPx = aPx; gl_Position = toClip(aPx); }
`,Kd=Bd+`
uniform sampler2D uPat; uniform sampler2D uRowCol;
uniform float uCols; uniform float uRows; uniform float uFell; uniform float uY0; uniform float uPitch; uniform float uOffset;
uniform vec3 uBone; uniform vec3 uBase; uniform vec3 uAccent; uniform vec3 uInk; uniform vec3 uLight; uniform float uHover; uniform float uHoverA; uniform float uTrace; uniform float uTraceRow;
varying vec2 vPx;
float stateAt(float j, float i){
  float jj = mod(j, uCols);
  return floor(texture2D(uPat, vec2((jj+0.5)/uCols, (i+0.5)/uRows)).r*255.0/40.0 + 0.5);
}
// 1 = warp over (horizontal yarn visible)
float warpUp(float j, float i){
  float st = stateAt(j, i);
  if (st < 0.5 || st > 3.5) return mod(i + j, 4.0) < 2.0 ? 1.0 : 0.0; // 2/2 twill: base, toned fill, bone twill
  if (st < 1.5) return mod(i*3.0 + j, 10.0) < 0.5 ? 1.0 : 0.0;     // bone weft 10-end satin (label ground)
  if (st < 2.5) return mod(i*2.0 + j, 5.0) < 0.5 ? 1.0 : 0.0;      // accent weft satin (chart line)
  return mod(i*3.0 + j, 10.0) < 0.5 ? 1.0 : 0.0;                   // ink weft satin (text, rules)
}
void main(){
  float fc = (vPx.x - uFell)/uPitch;         // columns from the fell line
  float jf = uOffset - fc;                    // pick coordinate
  if (jf < 0.0) discard;
  float j = floor(jf); float u = 1.0 - fract(jf);   // u runs left->right inside the cell
  float yf = (vPx.y - uY0)/uPitch; float i = floor(yf); float v = fract(yf);
  if (i < 0.0 || i >= uRows) discard;
  float st = stateAt(j, i);
  float up = warpUp(j, i);
  vec3 warpC = toLin(texture2D(uRowCol, vec2((i+0.5)/uRows, 0.5)).rgb);
  vec3 weftC = toLin(uBase);
  if (st > 0.5 && st < 1.5) weftC = toLin(uBone) * 1.06;
  if (st > 1.5 && st < 2.5) weftC = toLin(uAccent);
  if (st > 2.5 && st < 3.5) weftC = toLin(uInk) * 0.9;
  if (st > 3.5 && st < 4.5) weftC = toLin(uAccent) * 0.92;
  if (st > 4.5) weftC = toLin(uBone) * 0.85;
  vec3 n; vec3 alb; float h; float ply;
  if (up > 0.5) {
    // warp float: runs along x, dips where neighbour pick is weft-up
    float cs = v*2.0 - 1.0; float w = 0.9; float s = cs / w;
    float l = warpUp(j+1.0, i); float r = warpUp(j-1.0, i); // j+1 lies to the left
    float dipL = l > 0.5 ? 1.0 : smoothstep(0.0, 0.32, u);
    float dipR = r > 0.5 ? 1.0 : smoothstep(0.0, 0.32, 1.0 - u);
    h = sqrt(max(0.0, 1.0 - s*s)) * dipL * dipR;
    float dz = (l > 0.5 ? 0.0 : (1.0 - smoothstep(0.0,0.32,u))) - (r > 0.5 ? 0.0 : (1.0 - smoothstep(0.0,0.32,1.0-u)));
    n = normalize(vec3(dz*0.9, s*1.1, max(h, 0.05)));
    ply = 0.5 + 0.5*sin((u + v*0.55)*6.2832*2.0 + i*1.7);
    alb = warpC;
    if (st > 0.5 && st < 1.5) alb = mix(warpC, toLin(uBone)*0.85, 0.72);
    if (st > 1.5 && st < 2.5) alb = mix(warpC, toLin(uAccent)*0.7, 0.4);
    if (st > 2.5 && st < 3.5) alb = mix(warpC, toLin(uInk), 0.75);
    if (abs(s) > 1.0) { alb = weftC*0.55; h = 0.0; n = vec3(0,0,1); }
  } else {
    float cs = u*2.0 - 1.0; float w = 0.9; float s = cs / w;
    float t = warpUp(j, i-1.0); float b = warpUp(j, i+1.0);
    float dipT = t < 0.5 ? 1.0 : smoothstep(0.0, 0.32, v);
    float dipB = b < 0.5 ? 1.0 : smoothstep(0.0, 0.32, 1.0 - v);
    h = sqrt(max(0.0, 1.0 - s*s)) * dipT * dipB;
    float dz = (t < 0.5 ? 0.0 : (1.0 - smoothstep(0.0,0.32,v))) - (b < 0.5 ? 0.0 : (1.0 - smoothstep(0.0,0.32,1.0-v)));
    n = normalize(vec3(s*1.1, dz*0.9, max(h, 0.05)));
    ply = 0.5 + 0.5*sin((v + u*0.55)*6.2832*2.0 + j*1.3);
    alb = weftC; if (abs(s) > 1.0) { alb = warpC*0.6; h = 0.0; n = vec3(0,0,1); }
  }
  alb *= 0.86 + 0.24*ply;
  float dif = max(dot(n, uLight), 0.0);
  vec3 H = normalize(uLight + vec3(0.0,0.0,1.0));
  float sp = pow(max(dot(n,H),0.0), 18.0) * 0.16;
  float ao = 0.42 + 0.58*smoothstep(0.0, 0.8, h);
  vec3 col = alb * (0.34 + 0.9*dif) * ao + sp*ao;
  // hover column highlight
  float hv = uHoverA * (1.0 - smoothstep(0.0, 1.5, abs(j - uHover)));
  col = mix(col, col*1.35 + 0.02, hv*0.6);
  // trace row highlight: the traced warp yarn turns accent where it floats; other rows recede
  if (uTrace > 0.0) {
    float on = 1.0 - step(0.5, abs(i - uTraceRow));
    if (on > 0.5 && up > 0.5) col = mix(col, toLin(uAccent) * (0.34 + 0.9*dif) * ao + sp*ao*1.5, uTrace);
    else if (on > 0.5) col = mix(col, col * 1.15 + toLin(uAccent)*0.06, uTrace);
    else col *= 1.0 - 0.28*uTrace;
  }
  // selvedge shade near band edges
  float e = min(yf, uRows - yf);
  col *= 0.8 + 0.2*smoothstep(0.0, 1.2, e);
  gl_FragColor = vec4(toOut(col), 1.0);
}
`,qd=Gd,Jd=Bd+`
uniform vec4 uBox; uniform float uY0; uniform float uPitch; uniform float uRows; uniform vec3 uSteel; uniform vec3 uLight;
varying vec2 vPx;
void main(){
  float x = vPx.x - uBox.x; float W = uBox.z - uBox.x; float y = vPx.y;
  float top = uY0 - 3.0; float bot = uY0 + uRows*uPitch + 3.0;
  vec3 steel = toLin(uSteel);
  float a = 0.0; vec3 col = vec3(0.0);
  // baulks (top + bottom rounded bars)
  float by = y < top ? (y - uBox.y)/(top - uBox.y) : (y > bot ? (uBox.w - y)/(uBox.w - bot) : -1.0);
  if (by >= 0.0) {
    // end caps: anodised blocks, rounded across x, chamfered at the far end
    float sx = (x / W)*2.0 - 1.0; float hx = sqrt(max(0.0, 1.0 - sx*sx*0.85));
    float edge = smoothstep(0.0, 0.18, by);
    vec3 n = normalize(vec3(sx*0.9, (y < top ? 1.0 : -1.0)*(1.0-edge)*0.8, hx));
    float dif = max(dot(n,uLight),0.0);
    col = toLin(vec3(0.13,0.14,0.16))*(0.3+0.95*dif) + pow(max(dot(n, normalize(uLight+vec3(0,0,1))),0.0),36.0)*0.45;
    // engraved index line
    col *= 1.0 - 0.35*(1.0 - smoothstep(0.0, 0.6, abs(by - 0.55)*W*0.6));
    a = 1.0 - smoothstep(0.0, 1.0, (abs(sx) - 0.98)*W*0.5);
  } else {
    // side rails
    float rail = min(x, W - x);
    if (rail < 3.0) {
      float s = (x < W*0.5 ? x : W - x)/3.0*2.0 - 1.0;
      vec3 n = normalize(vec3(s, 0.0, sqrt(max(0.0,1.0-s*s))));
      col = steel*(0.3+0.9*max(dot(n,uLight),0.0)) + pow(max(dot(n, normalize(uLight+vec3(0,0,1))),0.0),50.0)*0.5;
      a = 1.0;
    } else {
      // dents: flat steel strips lying between warp rows (seen edge-on from above)
      float r = (y - uY0)/uPitch; float d = abs(r - floor(r + 0.5)) * uPitch;
      float dw = 0.75;
      if (d < dw) {
        float g = x / W;
        col = steel * (0.55 + 0.6*g) + 0.25*pow(1.0 - abs(g*2.0-1.0), 6.0);
        a = 1.0 - smoothstep(dw - 0.5, dw, d);
      }
    }
  }
  if (a <= 0.0) discard;
  gl_FragColor = vec4(toOut(col), a);
}
`,Yd=Bd+`
uniform vec2 uC; uniform vec2 uSize; uniform vec3 uLight; uniform float uBlur; uniform vec3 uWeft; uniform float uWeftTop; uniform float uWeftX; uniform float uWeftOn;
varying vec2 vPx;
float sdCapsule(vec2 p, float h, float r){ p.y -= clamp(p.y, -h, h); return length(p) - r; }
void main(){
  vec4 outc = vec4(0.0);
  // trailing weft thread (vertical, at fell)
  if (uWeftOn > 0.5) {
    float dx = (vPx.x - uWeftX)/1.9;
    float y0 = min(uWeftTop, uC.y), y1 = max(uWeftTop, uC.y);
    if (abs(dx) < 1.0 && vPx.y > y0 && vPx.y < y1) {
      float h = sqrt(1.0 - dx*dx); vec3 n = normalize(vec3(dx, 0.0, h));
      vec3 c = toLin(uWeft)*(0.35+0.85*max(dot(n,uLight),0.0));
      outc = vec4(toOut(c), 1.0 - smoothstep(0.8, 1.0, abs(dx)));
    }
  }
  vec2 p = vPx - uC;
  float r = uSize.x*0.5; float hh = uSize.y*0.5 - r + uBlur;
  float d = sdCapsule(p, hh, r);
  if (d < 1.0) {
    float s = clamp(p.x / r, -1.0, 1.0);
    float taper = clamp(abs(p.y)/(hh + r), 0.0, 1.0);
    vec3 n = normalize(vec3(s, -p.y/(hh+r)*0.6, sqrt(max(0.0, 1.0 - s*s))));
    vec3 body = mix(toLin(vec3(0.12,0.12,0.13)), toLin(vec3(0.62,0.64,0.68)), smoothstep(0.72, 0.9, taper));
    vec3 c = body*(0.3+0.9*max(dot(n,uLight),0.0)) + pow(max(dot(n, normalize(uLight+vec3(0,0,1))),0.0),40.0)*0.6;
    float a = (1.0 - smoothstep(0.0, 1.0, d)) * (uBlur > 4.0 ? 0.75 : 1.0);
    outc = mix(outc, vec4(toOut(c), 1.0), a);
    outc.a = max(outc.a, a);
  }
  if (outc.a <= 0.0) discard;
  gl_FragColor = outc;
}
`,Xd={0:[`0111110`,`1100011`,`1100111`,`1101011`,`1110011`,`1100011`,`1100011`,`1100011`,`0111110`],1:[`001100`,`011100`,`111100`,`001100`,`001100`,`001100`,`001100`,`001100`,`111111`],2:[`0111110`,`1100011`,`0000011`,`0000110`,`0001100`,`0011000`,`0110000`,`1100000`,`1111111`],3:[`0111110`,`1100011`,`0000011`,`0011110`,`0000011`,`0000011`,`0000011`,`1100011`,`0111110`],4:[`0000110`,`0001110`,`0011110`,`0110110`,`1100110`,`1111111`,`0000110`,`0000110`,`0000110`],5:[`1111111`,`1100000`,`1100000`,`1111110`,`0000011`,`0000011`,`0000011`,`1100011`,`0111110`],6:[`0011110`,`0110000`,`1100000`,`1111110`,`1100011`,`1100011`,`1100011`,`1100011`,`0111110`],7:[`1111111`,`0000011`,`0000110`,`0001100`,`0001100`,`0011000`,`0011000`,`0011000`,`0011000`],8:[`0111110`,`1100011`,`1100011`,`0111110`,`1100011`,`1100011`,`1100011`,`1100011`,`0111110`],9:[`0111110`,`1100011`,`1100011`,`1100011`,`0111111`,`0000011`,`0000011`,`0000110`,`0111100`],"%":[`1100001`,`1100011`,`0000110`,`0001100`,`0011000`,`0110000`,`1100011`,`1000011`,`0000000`],$:[`0001000`,`0111110`,`1101000`,`1101000`,`0111110`,`0001011`,`0001011`,`0111110`,`0001000`],".":[`000`,`000`,`000`,`000`,`000`,`000`,`000`,`110`,`110`],",":[`000`,`000`,`000`,`000`,`000`,`000`,`110`,`110`,`100`],"×":[`0000000`,`0000000`,`1100011`,`0110110`,`0011100`,`0110110`,`1100011`,`0000000`,`0000000`],"+":[`000000`,`000000`,`001100`,`001100`,`111111`,`001100`,`001100`,`000000`,`000000`],"-":[`000000`,`000000`,`000000`,`000000`,`111111`,`000000`,`000000`,`000000`,`000000`],"→":[`0000000`,`0000000`,`0000110`,`0000011`,`1111111`,`0000011`,`0000110`,`0000000`,`0000000`]," ":[`0000`,`0000`,`0000`,`0000`,`0000`,`0000`,`0000`,`0000`,`0000`],M:[`1100011`,`1110111`,`1111111`,`1101011`,`1100011`,`1100011`,`1100011`,`1100011`,`1100011`],K:[`1100011`,`1100110`,`1101100`,`1111000`,`1111000`,`1101100`,`1100110`,`1100011`,`1100011`],H:[`1100011`,`1100011`,`1100011`,`1100011`,`1111111`,`1100011`,`1100011`,`1100011`,`1100011`],W:[`1100011`,`1100011`,`1100011`,`1100011`,`1101011`,`1101011`,`1111111`,`1110111`,`1100011`],A:[`0111110`,`1100011`,`1100011`,`1100011`,`1111111`,`1100011`,`1100011`,`1100011`,`1100011`],R:[`1111110`,`1100011`,`1100011`,`1100011`,`1111110`,`1101100`,`1100110`,`1100011`,`1100011`],P:[`1111110`,`1100011`,`1100011`,`1100011`,`1111110`,`1100000`,`1100000`,`1100000`,`1100000`],Y:[`1100011`,`1100011`,`0110110`,`0011100`,`0011100`,`0011100`,`0011100`,`0011100`,`0011100`],N:[`1100011`,`1110011`,`1111011`,`1101111`,`1100111`,`1100011`,`1100011`,`1100011`,`1100011`],S:[`0111111`,`1100000`,`1100000`,`0111110`,`0000011`,`0000011`,`0000011`,`0000011`,`1111110`],X:[`1100011`,`1100011`,`0110110`,`0011100`,`0011100`,`0110110`,`1100011`,`1100011`,`1100011`]},Zd={B:`11110,10001,10001,11110,10001,10001,11110`,C:`01111,10000,10000,10000,10000,10000,01111`,D:`11110,10001,10001,10001,10001,10001,11110`,E:`11111,10000,10000,11110,10000,10000,11111`,F:`11111,10000,10000,11110,10000,10000,10000`,G:`01111,10000,10000,10011,10001,10001,01111`,I:`11111,00100,00100,00100,00100,00100,11111`,J:`00111,00010,00010,00010,00010,10010,01100`,L:`10000,10000,10000,10000,10000,10000,11111`,O:`01110,10001,10001,10001,10001,10001,01110`,Q:`01110,10001,10001,10001,10101,10010,01101`,T:`11111,00100,00100,00100,00100,00100,00100`,U:`10001,10001,10001,10001,10001,10001,01110`,V:`10001,10001,10001,10001,10001,01010,00100`,Z:`11111,00001,00010,00100,01000,10000,11111`},Od.displayName=`Metricloom Loom`,z(Od,{mode:{type:I.Enum,options:[`hero`,`trace`],optionTitles:[`Hero loom`,`Trace a thread`],defaultValue:`hero`},previewTime:{type:I.Number,min:-1,max:120,step:.1,defaultValue:-1,title:`Preview time`},playIntro:{type:I.Boolean,defaultValue:!0,title:`Intro`},sources:{type:I.Array,title:`Sources`,maxCount:8,control:{type:I.Object,controls:{name:{type:I.String,defaultValue:`Billing`},table:{type:I.String,defaultValue:`invoices`},rows:{type:I.String,defaultValue:`412k rows`}}},defaultValue:kd},answers:{type:I.Array,title:`Answers`,maxCount:4,control:{type:I.Object,controls:{question:{type:I.String,defaultValue:`Why did net revenue retention dip in March?`},title:{type:I.String,defaultValue:`NRR`},figure:{type:I.String,defaultValue:`97%`},kind:{type:I.Enum,options:[`area`,`bars`,`steps`],defaultValue:`area`},values:{type:I.String,defaultValue:`108,109,111,110,112,113,111,104,97,99,103,106,109,112`},labels:{type:I.String,defaultValue:``},unit:{type:I.String,defaultValue:`%`},mark:{type:I.Number,defaultValue:8,min:0,max:30,step:1},caption:{type:I.String,displayTextArea:!0,defaultValue:``}}},defaultValue:Ad},table:{type:I.Color,defaultValue:`#E6E5E1`,title:`Table`},ink:{type:I.Color,defaultValue:`#111317`},accent:{type:I.Color,defaultValue:`#FF4B1F`},bone:{type:I.Color,defaultValue:`#ECE7DD`,title:`Weft`},baseWeft:{type:I.Color,defaultValue:`#4B505A`,title:`Base weft`},steel:{type:I.Color,defaultValue:`#A7ADB5`,title:`Reed`},picksPerSecond:{type:I.Number,min:2,max:30,step:1,defaultValue:11,title:`Picks / s`},bandTop:{type:I.Number,min:0,max:1,step:.01,defaultValue:.44},bandBottom:{type:I.Number,min:0,max:1,step:.01,defaultValue:.9},reedAt:{type:I.Number,min:.15,max:.7,step:.01,defaultValue:.36,title:`Reed at`},rows:{type:I.Number,min:24,max:120,step:1,defaultValue:64,title:`Threads`},orientation:{type:I.Enum,options:[`auto`,`horizontal`,`vertical`],optionTitles:[`Auto (vertical on phones)`,`Horizontal`,`Vertical`],defaultValue:`auto`},showGrid:{type:I.Boolean,defaultValue:!0,title:`Grid`},showLabels:{type:I.Boolean,defaultValue:!0,title:`Labels`}})})))()}var $d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp;function Ep(){return(Ep=e((()=>{m(),k(),b(),h(),Qd(),Fe(),ue(),Be(),Ve(),Te(),de(),je(),Ue(),qe(),Ae(),Ze(),Ee(),tt(),at(),$d=C(Od),ef=j(E,{nodeId:`jxubmVVg4`,override:B,scopeId:`augiA20Il`}),tf=j(E,{nodeId:`scJkk6ynf`,override:fe,scopeId:`augiA20Il`}),nf=C(Re),rf=j(E,{nodeId:`QcRoISiod`,override:B,scopeId:`augiA20Il`}),af=j(_.div,{nodeId:`PHfO_Pcsw`,override:H,scopeId:`augiA20Il`}),of=j(E,{nodeId:`uMg5vIByt`,override:B,scopeId:`augiA20Il`}),sf=j(E,{nodeId:`VgBxu690r`,override:B,scopeId:`augiA20Il`}),cf=j(_.a,{nodeId:`H2fGcrM4B`,override:Ce,scopeId:`augiA20Il`}),lf=j(_.div,{nodeId:`oCALpsTJL`,override:Me,scopeId:`augiA20Il`}),uf=j(_.div,{nodeId:`mIzo6I3uf`,override:Me,scopeId:`augiA20Il`}),df=j(_.div,{nodeId:`V3uFbCfd0`,override:Me,scopeId:`augiA20Il`}),ff=j(_.div,{nodeId:`Hj2R0HBp5`,override:H,scopeId:`augiA20Il`}),pf=j(E,{nodeId:`xnHsxNqh9`,override:B,scopeId:`augiA20Il`}),mf=j(E,{nodeId:`EiHdqwbJh`,override:B,scopeId:`augiA20Il`}),hf=C(ze),gf=j(_.div,{nodeId:`DXRUq6DsP`,override:Me,scopeId:`augiA20Il`}),_f=j(E,{nodeId:`GSFK8hYL4`,override:B,scopeId:`augiA20Il`}),vf=j(E,{nodeId:`iPq3ZJygX`,override:B,scopeId:`augiA20Il`}),yf=j(_.div,{nodeId:`PwnNIrAXO`,override:V,scopeId:`augiA20Il`}),bf=j(_.div,{nodeId:`znJ_svi3v`,override:V,scopeId:`augiA20Il`}),xf=j(_.div,{nodeId:`buOzfc8Sl`,override:V,scopeId:`augiA20Il`}),Sf=j(_.div,{nodeId:`vqvrs5Boa`,override:Se,scopeId:`augiA20Il`}),Cf=j(_.div,{nodeId:`IuH_2PW2P`,override:H,scopeId:`augiA20Il`}),wf=j(E,{nodeId:`ma5sVscAf`,override:B,scopeId:`augiA20Il`}),Tf=j(E,{nodeId:`TtS_6VQlb`,override:B,scopeId:`augiA20Il`}),Ef=j(E,{nodeId:`oxOb5aoXq`,override:fe,scopeId:`augiA20Il`}),Df=j(E,{nodeId:`uK5sIgILJ`,override:fe,scopeId:`augiA20Il`}),Of=j(R,{nodeId:`lpNhz9_BC`,override:W,scopeId:`augiA20Il`}),kf=j(E,{nodeId:`rLbkcI8OO`,override:fe,scopeId:`augiA20Il`}),Af=j(E,{nodeId:`CKnuElnOr`,override:fe,scopeId:`augiA20Il`}),jf=j(E,{nodeId:`mZC2VLDd9`,override:fe,scopeId:`augiA20Il`}),Mf=j(E,{nodeId:`hfxg6BQkN`,override:fe,scopeId:`augiA20Il`}),Nf=j(R,{nodeId:`gHvZbWGvC`,override:W,scopeId:`augiA20Il`}),Pf=j(_.div,{nodeId:`rThXRx5FL`,override:Me,scopeId:`augiA20Il`}),Ff=j(E,{nodeId:`ch4uMNM_x`,override:B,scopeId:`augiA20Il`}),If=j(E,{nodeId:`hPQIycFzA`,override:fe,scopeId:`augiA20Il`}),Lf=j(E,{nodeId:`lNMvUjmha`,override:fe,scopeId:`augiA20Il`}),Rf=j(E,{nodeId:`a_3CZP0Ux`,override:fe,scopeId:`augiA20Il`}),zf=j(_.a,{nodeId:`xKDDNaGld`,override:Ce,scopeId:`augiA20Il`}),Bf=j(_.div,{nodeId:`sf4qvPh0k`,override:H,scopeId:`augiA20Il`}),Vf=j(E,{nodeId:`m_lEV2qHV`,override:B,scopeId:`augiA20Il`}),Hf=j(E,{nodeId:`W6stUmg_X`,override:B,scopeId:`augiA20Il`}),Uf=j(R,{nodeId:`xl1hgF8Nf`,override:U,scopeId:`augiA20Il`}),Wf=j(_.a,{nodeId:`eBicXz8GM`,override:V,scopeId:`augiA20Il`}),Gf=j(_.div,{nodeId:`eFpnvzRht`,override:Se,scopeId:`augiA20Il`}),Kf=j(_.div,{nodeId:`e20mWugnb`,override:H,scopeId:`augiA20Il`}),qf=j(E,{nodeId:`n3f9Ekpol`,override:B,scopeId:`augiA20Il`}),Jf=j(E,{nodeId:`Sbz65tCJG`,override:B,scopeId:`augiA20Il`}),Yf=j(_.div,{nodeId:`Q94bT6Psd`,override:Se,scopeId:`augiA20Il`}),Xf=j(_.div,{nodeId:`aTnMCRTTg`,override:H,scopeId:`augiA20Il`}),Zf=j(E,{nodeId:`Wp4gNRQbg`,override:B,scopeId:`augiA20Il`}),Qf=j(E,{nodeId:`bgqj1ZwuO`,override:B,scopeId:`augiA20Il`}),$f=j(_.a,{nodeId:`TEvTWqzFn`,override:V,scopeId:`augiA20Il`}),ep=j(_.div,{nodeId:`JErJzkyep`,override:Se,scopeId:`augiA20Il`}),tp=j(_.a,{nodeId:`zq5BSGn2c`,override:Ce,scopeId:`augiA20Il`}),np=j(_.div,{nodeId:`pwyoJLxQE`,override:H,scopeId:`augiA20Il`}),rp=j(E,{nodeId:`NBvbHDf4x`,override:B,scopeId:`augiA20Il`}),ip=j(E,{nodeId:`LX6uStvxu`,override:B,scopeId:`augiA20Il`}),ap=C(Ie),op=j(E,{nodeId:`QgvbboEfo`,override:B,scopeId:`augiA20Il`}),sp=j(_.a,{nodeId:`iix9NEEYt`,override:Ce,scopeId:`augiA20Il`}),cp=C(Le),lp={i3icAZsxD:`(min-width: 810px) and (max-width: 1439.98px)`,KHYETnAbE:`(max-width: 809.98px)`,WQLkyLRf1:`(min-width: 1440px)`},up=[],dp=`framer-TeiVQ`,fp={i3icAZsxD:`framer-v-14t708l`,KHYETnAbE:`framer-v-apzrpr`,WQLkyLRf1:`framer-v-72rtr7`},pp=(e,t,n)=>e&&t?`position`:n,mp=(e,t)=>{if(e&&typeof e==`object`)return{...e,alt:t}},hp=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,gp=()=>({from:{alias:`eFpnvzRht`,data:G,type:`Collection`},limit:{type:`LiteralValue`,value:3},orderBy:[{collection:`eFpnvzRht`,name:`KDtp_t2F9`,type:`Identifier`}],select:[{collection:`eFpnvzRht`,name:`r06xjBOuP`,type:`Identifier`},{collection:`eFpnvzRht`,name:`nEs9zymxV`,type:`Identifier`},{collection:`eFpnvzRht`,name:`Tvk88duIQ`,type:`Identifier`},{collection:`eFpnvzRht`,name:`A_IhBNXKY`,type:`Identifier`},{collection:`eFpnvzRht`,name:`xzAbWVB5C`,type:`Identifier`},{collection:`eFpnvzRht`,name:`mk2lNEm6r`,type:`Identifier`},{collection:`eFpnvzRht`,name:`HJ_gI7gDM`,type:`Identifier`},{collection:`eFpnvzRht`,name:`id`,type:`Identifier`}]}),_p=({query:e,pageSize:t,children:n})=>n(re(e)),vp=()=>({from:{alias:`JErJzkyep`,data:He,type:`Collection`},limit:{type:`LiteralValue`,value:8},orderBy:[{collection:`JErJzkyep`,name:`SSPSRqEBz`,type:`Identifier`}],select:[{collection:`JErJzkyep`,name:`lIKcq1H1L`,type:`Identifier`},{collection:`JErJzkyep`,name:`aUQ7mvZYv`,type:`Identifier`},{collection:`JErJzkyep`,name:`GCquh9zc0`,type:`Identifier`},{collection:`JErJzkyep`,name:`zF_5v6mWP`,type:`Identifier`},{collection:`JErJzkyep`,name:`E7V9RlMCo`,type:`Identifier`},{collection:`JErJzkyep`,name:`oyhCKC1y3`,type:`Identifier`},{collection:`JErJzkyep`,name:`id`,type:`Identifier`}]}),yp={Desktop:`WQLkyLRf1`,Phone:`KHYETnAbE`,Tablet:`i3icAZsxD`},bp=({value:e})=>ee()?null:/*#__PURE__*/ f(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),xp=({height:e,id:t,width:n,...r})=>({...r,variant:yp[r.variant]??r.variant??`WQLkyLRf1`}),Sp=/*#__PURE__*/ p(function(e,r){let i=c(null),o=r??i,s=n(),{activeLocale:p,setLocale:m}=ce(),h=oe(),{style:g,className:b,layoutId:x,variant:C,...w}=xp(e),T=u(()=>ot({},p),[p]);ne(T);let[D,k]=se(C,lp,!1),A=S(dp,et,ke,Xe,be,Oe,_e,Pe,it,Ke),j=t(te)?.isLayoutTemplate,ee=!!t(v)?.transition?.layout,re=pp(j,ee);return L({}),/*#__PURE__*/ f(te.Provider,{value:{activeVariantId:D,humanReadableVariantMap:yp,primaryVariantId:`WQLkyLRf1`,variantClassNames:fp},children:/*#__PURE__*/ d(y,{id:x??s,children:[/*#__PURE__*/ f(bp,{value:`html body { background: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); }`}),/*#__PURE__*/ d(_.div,{...w,className:S(A,`framer-72rtr7`,b),ref:o,style:{...g},children:[/*#__PURE__*/ d(_.header,{className:`framer-fx6zq9`,"data-framer-name":`01 Hero · The loom`,layout:re,children:[/*#__PURE__*/ f(F,{children:/*#__PURE__*/ f(M,{className:`framer-1i1gbte-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Loom`,isAuthoredByUser:!0,name:`Loom`,nodeId:`hAMRCTYnD`,scopeId:`augiA20Il`,children:/*#__PURE__*/ f(Od,{accent:`rgb(255, 75, 31)`,answers:[{caption:`EU annual renewals slipped three weeks after the invoicing change on 3 March. 11 accounts, all renewed by April.`,figure:`97%`,id:`default-item-0`,kind:`area`,labels:`Oct,Nov,Dec,Jan,Feb,Mar,Apr`,mark:8,question:`Why did net revenue retention dip in March?`,title:`NRR`,unit:`%`,values:`108,109,111,110,112,113,111,104,97,99,103,106,109,112`},{caption:`14 accounts: seat usage down more than 30% and two or more open P1 tickets. The top five hold $740k of ARR.`,figure:`$1.2M`,id:`default-item-1`,kind:`bars`,labels:``,mark:0,question:`Which accounts are likely to churn next quarter?`,title:`AT RISK`,unit:`k`,values:`92,88,81,77,70,64,58,51,44,39,33,28,22,18`},{caption:`Trials that invite a teammate in week one convert 3.1× more often. Nothing else in the first week comes close.`,figure:`3.1×`,id:`default-item-2`,kind:`steps`,labels:``,mark:5,question:`What turns a trial into a paid plan?`,title:`TRIAL→PAID`,unit:`x`,values:`12,14,15,19,23,29,34,38,41,43,44,45,45,46`}],bandBottom:.9,bandTop:.44,baseWeft:`rgb(75, 80, 90)`,bone:`rgb(236, 231, 221)`,height:`100%`,id:`hAMRCTYnD`,ink:`rgb(17, 19, 23)`,layoutId:`hAMRCTYnD`,mode:`hero`,name:`Loom`,orientation:`auto`,picksPerSecond:11,playIntro:!0,previewTime:-1,reedAt:.36,rows:64,showGrid:!0,showLabels:!0,sources:[{id:`default-item-0`,name:`Billing`,rows:`412k rows`,table:`invoices`},{id:`default-item-1`,name:`CRM`,rows:`18.2k rows`,table:`accounts`},{id:`default-item-2`,name:`Product events`,rows:`96M rows`,table:`sessions`},{id:`default-item-3`,name:`Support desk`,rows:`231k rows`,table:`tickets`},{id:`default-item-4`,name:`Warehouse`,rows:`3.4M rows`,table:`orders`},{id:`default-item-5`,name:`Ad spend`,rows:`8.9k rows`,table:`campaigns`},{id:`default-item-6`,name:`Spreadsheets`,rows:`1.2k rows`,table:`targets_fy26`},{id:`default-item-7`,name:`HR system`,rows:`640 rows`,table:`headcount`}],steel:`rgb(167, 173, 181)`,style:{height:`100%`,width:`100%`},table:`rgb(230, 229, 225)`,width:`100%`})})}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h1`,{className:`framer-styles-preset-3ktc3o`,"data-styles-preset":`y9jJLGiqH`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`Ninety tools in. One answer out.`})}),className:`framer-ve940x`,"data-framer-name":`Headline`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1io246r`,"data-styles-preset":`W2Y75rC7K`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`Warpyn connects your billing, CRM, product and support data, then answers questions in plain English. Every figure is woven from rows you can trace.`})}),className:`framer-xhz4i8`,"data-framer-name":`Lede`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(_.section,{className:`framer-hk4tsb`,"data-framer-name":`02 Sources strip`,layout:re,children:[/*#__PURE__*/ d(`div`,{className:`framer-dpw68g`,"data-framer-name":`Header`,children:[/*#__PURE__*/ f(ef,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1io246r`,"data-styles-preset":`W2Y75rC7K`,dir:`auto`,children:`Reads from the tools you already pay for. Read-only, from day one.`})}),className:`framer-1t0liqt`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(`div`,{className:`framer-140oqz3`,"data-framer-name":`Count`,children:[/*#__PURE__*/ f(tf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,children:`240+`})}),className:`framer-ya62a8`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`connectors, and any SQL or REST source in an afternoon`})})}},children:/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`connectors, and any SQL or REST source in an afternoon`})}),className:`framer-yvkced`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]})]}),/*#__PURE__*/ f(F,{children:/*#__PURE__*/ f(M,{className:`framer-c34521-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Marquee`,isAuthoredByUser:!0,name:`Marquee`,nodeId:`AkoNtKrtY`,scopeId:`augiA20Il`,children:/*#__PURE__*/ f(Re,{height:`100%`,id:`AkoNtKrtY`,items:[{color:`rgb(44, 51, 64)`,id:`default-item-0`,kind:`Billing`,name:`Ledgerline`},{color:`rgb(59, 52, 46)`,id:`default-item-1`,kind:`Support`,name:`Northdesk`},{color:`rgb(32, 35, 42)`,id:`default-item-2`,kind:`Warehouse`,name:`Quarry`},{color:`rgb(56, 56, 48)`,id:`default-item-3`,kind:`CRM`,name:`Pipewell`},{color:`rgb(39, 43, 51)`,id:`default-item-4`,kind:`Accounting`,name:`Tallyhouse`},{color:`rgb(37, 42, 54)`,id:`default-item-5`,kind:`Product events`,name:`Eventide`},{color:`rgb(51, 55, 61)`,id:`default-item-6`,kind:`Ad spend`,name:`Adrift`},{color:`rgb(28, 30, 35)`,id:`default-item-7`,kind:`Spreadsheets`,name:`Sheetwise`},{color:`rgb(46, 52, 64)`,id:`default-item-8`,kind:`HR`,name:`Rosterly`},{color:`rgb(58, 58, 52)`,id:`default-item-9`,kind:`Postgres`,name:`Stackhold`}],layoutId:`AkoNtKrtY`,name:`Marquee`,reverse:!1,seconds:70,style:{height:`100%`,width:`100%`},width:`100%`})})}),/*#__PURE__*/ f(F,{children:/*#__PURE__*/ f(M,{className:`framer-1m06dbh-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Marquee reverse`,isAuthoredByUser:!0,name:`Marquee reverse`,nodeId:`fc4EQehIJ`,scopeId:`augiA20Il`,children:/*#__PURE__*/ f(Re,{height:`100%`,id:`fc4EQehIJ`,items:[{color:`rgb(44, 51, 64)`,id:`default-item-0`,kind:`Billing`,name:`Ledgerline`},{color:`rgb(59, 52, 46)`,id:`default-item-1`,kind:`Support`,name:`Northdesk`},{color:`rgb(32, 35, 42)`,id:`default-item-2`,kind:`Warehouse`,name:`Quarry`},{color:`rgb(56, 56, 48)`,id:`default-item-3`,kind:`CRM`,name:`Pipewell`},{color:`rgb(39, 43, 51)`,id:`default-item-4`,kind:`Accounting`,name:`Tallyhouse`},{color:`rgb(37, 42, 54)`,id:`default-item-5`,kind:`Product events`,name:`Eventide`},{color:`rgb(51, 55, 61)`,id:`default-item-6`,kind:`Ad spend`,name:`Adrift`},{color:`rgb(28, 30, 35)`,id:`default-item-7`,kind:`Spreadsheets`,name:`Sheetwise`},{color:`rgb(46, 52, 64)`,id:`default-item-8`,kind:`HR`,name:`Rosterly`},{color:`rgb(58, 58, 52)`,id:`default-item-9`,kind:`Postgres`,name:`Stackhold`}],layoutId:`fc4EQehIJ`,name:`Marquee reverse`,reverse:!0,seconds:90,style:{height:`100%`,width:`100%`},width:`100%`})})})]}),/*#__PURE__*/ d(_.section,{className:`framer-1mhct85`,"data-framer-name":`02 Lineage · Trace a thread`,layout:re,children:[/*#__PURE__*/ d(`div`,{className:`framer-1q9nwve`,"data-framer-name":`Heading`,children:[/*#__PURE__*/ d(`div`,{className:`framer-grfv`,"data-framer-name":`Left`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`02 · Lineage`})}),className:`framer-1jea3gh`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(rf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`Pull any thread back to the row it came from.`})}),className:`framer-j7v5bg`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{i3icAZsxD:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`An answer is only as good as the rows under it. Hover a line of the cloth and Warpyn lights the thread back through the reed to its source, the exact record and every step in between.`})})},KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`An answer is only as good as the rows under it. Hover a line of the cloth and Warpyn lights the thread back through the reed to its source, the exact record and every step in between.`})})}},children:/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`An answer is only as good as the rows under it. Hover a line of the cloth and Warpyn lights the thread back through the reed to its source, the exact record and every step in between.`})}),className:`framer-16axkfd`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ f(F,{children:/*#__PURE__*/ f(M,{className:`framer-ee6qo1-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Trace`,isAuthoredByUser:!0,name:`Trace`,nodeId:`NMQNuUyjh`,scopeId:`augiA20Il`,children:/*#__PURE__*/ f(Od,{accent:`rgb(255, 75, 31)`,answers:[{caption:`EU annual renewals slipped three weeks after the invoicing change on 3 March. 11 accounts, all renewed by April.`,figure:`97%`,id:`default-item-0`,kind:`area`,labels:`Oct,Nov,Dec,Jan,Feb,Mar,Apr`,mark:8,question:`Why did net revenue retention dip in March?`,title:`NRR`,unit:`%`,values:`108,109,111,110,112,113,111,104,97,99,103,106,109,112`},{caption:`14 accounts: seat usage down more than 30% and two or more open P1 tickets. The top five hold $740k of ARR.`,figure:`$1.2M`,id:`default-item-1`,kind:`bars`,labels:``,mark:0,question:`Which accounts are likely to churn next quarter?`,title:`AT RISK`,unit:`k`,values:`92,88,81,77,70,64,58,51,44,39,33,28,22,18`},{caption:`Trials that invite a teammate in week one convert 3.1× more often. Nothing else in the first week comes close.`,figure:`3.1×`,id:`default-item-2`,kind:`steps`,labels:``,mark:5,question:`What turns a trial into a paid plan?`,title:`TRIAL→PAID`,unit:`x`,values:`12,14,15,19,23,29,34,38,41,43,44,45,45,46`}],bandBottom:.9,bandTop:.44,baseWeft:`rgb(75, 80, 90)`,bone:`rgb(236, 231, 221)`,height:`100%`,id:`NMQNuUyjh`,ink:`rgb(17, 19, 23)`,layoutId:`NMQNuUyjh`,mode:`trace`,name:`Trace`,orientation:`auto`,picksPerSecond:11,playIntro:!0,previewTime:-1,reedAt:.36,rows:64,showGrid:!0,showLabels:!0,sources:[{id:`default-item-0`,name:`Billing`,rows:`412k rows`,table:`invoices`},{id:`default-item-1`,name:`CRM`,rows:`18.2k rows`,table:`accounts`},{id:`default-item-2`,name:`Product events`,rows:`96M rows`,table:`sessions`},{id:`default-item-3`,name:`Support desk`,rows:`231k rows`,table:`tickets`},{id:`default-item-4`,name:`Warehouse`,rows:`3.4M rows`,table:`orders`},{id:`default-item-5`,name:`Ad spend`,rows:`8.9k rows`,table:`campaigns`},{id:`default-item-6`,name:`Spreadsheets`,rows:`1.2k rows`,table:`targets_fy26`},{id:`default-item-7`,name:`HR system`,rows:`640 rows`,table:`headcount`}],steel:`rgb(167, 173, 181)`,style:{height:`100%`,width:`100%`},table:`rgb(230, 229, 225)`,width:`100%`})})})]}),/*#__PURE__*/ f(_.section,{className:`framer-1kv0xh7`,"data-framer-name":`04 How it works`,layout:re,children:/*#__PURE__*/ f(`div`,{className:`framer-4g15kz`,"data-framer-name":`Inner`,children:/*#__PURE__*/ d(`div`,{className:`framer-7sedoc`,"data-framer-name":`Split`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1n2ao1l`,"data-framer-name":`Sticky copy`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1irwsix`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`03`})}),className:`framer-1uesj3l`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(af,{className:`framer-sp2mdi`,"data-framer-name":`Rule`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`How it works`})}),className:`framer-mh9vkd`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(of,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,children:`From ninety tabs to one answer, in three steps.`})}),className:`framer-1arzaf1`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(sf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1io246r`,"data-styles-preset":`W2Y75rC7K`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`No new dashboards to maintain and no copy of your data to babysit. Warpyn reads what you already have and keeps every figure traceable.`})}),className:`framer-1wsecs2`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(P,{href:{webPageId:`IBrlQP_Ry`},motionChild:!0,nodeId:`H2fGcrM4B`,scopeId:`augiA20Il`,children:/*#__PURE__*/ d(cf,{className:`framer-5mnt1h framer-lux5qc`,"data-framer-name":`Button · See the product`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1pqkpa6`,"data-styles-preset":`JUO30hGfB`,dir:`auto`,style:{"--framer-text-color":`var(--token-01d06999-e662-4835-a86d-c9689a08fba2)`},children:`See the product`})}),className:`framer-1mfknhd`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1pqkpa6`,"data-styles-preset":`JUO30hGfB`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`→`})}),className:`framer-1mwe63d`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})})]}),/*#__PURE__*/ d(`div`,{className:`framer-rg9420`,"data-framer-name":`Steps`,children:[/*#__PURE__*/ d(`div`,{className:`framer-bkadu7`,"data-framer-name":`Step 01`,children:[/*#__PURE__*/ f(lf,{className:`framer-1vsnhj1`,"data-framer-name":`Image`,children:/*#__PURE__*/ f(N,{breakpoint:D,overrides:{i3icAZsxD:{background:{alt:`Eight loose bundles of data threads leaving their source tags`,fit:`fill`,pixelHeight:804,pixelWidth:1200,sizes:`max(min(${h?.width||`100vw`} - 48px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU.jpg`,srcSet:`../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU_1.jpg 512w,../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU_2.jpg 1024w,../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU.jpg 1200w`}},KHYETnAbE:{background:{alt:`Eight loose bundles of data threads leaving their source tags`,fit:`fill`,pixelHeight:804,pixelWidth:1200,sizes:`min(${h?.width||`100vw`} - 40px, 1376px)`,src:`../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU.jpg`,srcSet:`../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU_1.jpg 512w,../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU_2.jpg 1024w,../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU.jpg 1200w`}}},children:/*#__PURE__*/ f(R,{background:{alt:`Eight loose bundles of data threads leaving their source tags`,fit:`fill`,pixelHeight:804,pixelWidth:1200,sizes:`max(min(${h?.width||`100vw`} - 64px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU.jpg`,srcSet:`../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU_1.jpg 512w,../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU_2.jpg 1024w,../../../framerusercontent.com/images/Wsz0LxzRWrmlCDAKAQv0lawiJHU.jpg 1200w`},className:`framer-lbtsf6`,"data-framer-name":`Photo`})})}),/*#__PURE__*/ d(`div`,{className:`framer-b184v6`,"data-framer-name":`Caption`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`01`})}),className:`framer-s1r86z`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`Connect`})})}},children:/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,children:`Connect`})}),className:`framer-ckbok8`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`Point Warpyn at your warehouse, billing, CRM and support desk. 240+ connectors, read-only by default, live in minutes.`})}),className:`framer-1nwamu7`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]}),/*#__PURE__*/ d(`div`,{className:`framer-1uoplun`,"data-framer-name":`Step 02`,children:[/*#__PURE__*/ f(uf,{className:`framer-1wqzxr0`,"data-framer-name":`Image`,children:/*#__PURE__*/ f(N,{breakpoint:D,overrides:{i3icAZsxD:{background:{alt:`Source records combed into threads that run through the reed`,fit:`fill`,pixelHeight:804,pixelWidth:1200,sizes:`max(min(${h?.width||`100vw`} - 48px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU.jpg`,srcSet:`../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU_1.jpg 512w,../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU_2.jpg 1024w,../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU.jpg 1200w`}},KHYETnAbE:{background:{alt:`Source records combed into threads that run through the reed`,fit:`fill`,pixelHeight:804,pixelWidth:1200,sizes:`min(${h?.width||`100vw`} - 40px, 1376px)`,src:`../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU.jpg`,srcSet:`../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU_1.jpg 512w,../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU_2.jpg 1024w,../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU.jpg 1200w`}}},children:/*#__PURE__*/ f(R,{background:{alt:`Source records combed into threads that run through the reed`,fit:`fill`,pixelHeight:804,pixelWidth:1200,sizes:`max(min(${h?.width||`100vw`} - 64px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU.jpg`,srcSet:`../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU_1.jpg 512w,../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU_2.jpg 1024w,../../../framerusercontent.com/images/kw62QQCN9mAizJ1BA44ptiy2AU.jpg 1200w`},className:`framer-14fnple`,"data-framer-name":`Photo`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1vb2a90`,"data-framer-name":`Caption`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`02`})}),className:`framer-1foxz91`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`Map`})})}},children:/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,children:`Map`})}),className:`framer-e9wxft`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`Every source is combed into one model: customers, revenue, usage and tickets lined up on the same key, with a glossary your team agrees on once.`})}),className:`framer-1uoyp1f`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]}),/*#__PURE__*/ d(`div`,{className:`framer-15nya3m`,"data-framer-name":`Step 03`,children:[/*#__PURE__*/ f(df,{className:`framer-3kj41b`,"data-framer-name":`Image`,children:/*#__PURE__*/ f(N,{breakpoint:D,overrides:{i3icAZsxD:{background:{alt:`The answer woven into cloth: a figure and a chart`,fit:`fill`,pixelHeight:620,pixelWidth:1e3,sizes:`max(min(${h?.width||`100vw`} - 48px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM.jpg`,srcSet:`../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM_1.jpg 512w,../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM.jpg 1000w`}},KHYETnAbE:{background:{alt:`The answer woven into cloth: a figure and a chart`,fit:`fill`,pixelHeight:620,pixelWidth:1e3,sizes:`min(${h?.width||`100vw`} - 40px, 1376px)`,src:`../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM.jpg`,srcSet:`../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM_1.jpg 512w,../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM.jpg 1000w`}}},children:/*#__PURE__*/ f(R,{background:{alt:`The answer woven into cloth: a figure and a chart`,fit:`fill`,pixelHeight:620,pixelWidth:1e3,sizes:`max(min(${h?.width||`100vw`} - 64px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM.jpg`,srcSet:`../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM_1.jpg 512w,../../../framerusercontent.com/images/HxBA2y7pvbuwHF2DJxEktHTM.jpg 1000w`},className:`framer-1b2tnh7`,"data-framer-name":`Photo`})})}),/*#__PURE__*/ d(`div`,{className:`framer-1istwhy`,"data-framer-name":`Caption`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`03`})}),className:`framer-90ixh3`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,style:{"--framer-text-alignment":`start`},children:`Ask`})})}},children:/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,children:`Ask`})}),className:`framer-9d5va7`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`Ask in plain English. The answer is woven from the rows, and every figure keeps its thread back to them.`})}),className:`framer-qs5jkq`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})]})})}),/*#__PURE__*/ f(_.section,{className:`framer-4gxvmx`,"data-framer-name":`05 Ask in plain English`,layout:re,children:/*#__PURE__*/ d(`div`,{className:`framer-37ow9u`,"data-framer-name":`Inner`,children:[/*#__PURE__*/ d(`div`,{className:`framer-8gmm7w`,"data-framer-name":`Heading`,children:[/*#__PURE__*/ d(`div`,{className:`framer-16f915b`,"data-framer-name":`Title`,children:[/*#__PURE__*/ d(`div`,{className:`framer-9nol2h`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`04`})}),className:`framer-oz8p0a`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(ff,{className:`framer-1ooaccb`,"data-framer-name":`Rule`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Ask in plain English`})}),className:`framer-1tlstw6`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(pf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`Type the question you would ask your analyst.`})}),className:`framer-14k7lwv`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`No SQL, no dashboard to find. Pick a question below to see the answer Warpyn weaves, with the figure first and the reason underneath.`})})}},children:/*#__PURE__*/ f(mf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`No SQL, no dashboard to find. Pick a question below to see the answer Warpyn weaves, with the figure first and the reason underneath.`})}),className:`framer-1bzc59x`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ f(F,{children:/*#__PURE__*/ f(M,{className:`framer-1d9uov2-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Ask tabs`,isAuthoredByUser:!0,name:`Ask tabs`,nodeId:`T_UYa8Opt`,scopeId:`augiA20Il`,children:/*#__PURE__*/ f(ze,{height:`100%`,id:`T_UYa8Opt`,layoutId:`T_UYa8Opt`,name:`Ask tabs`,questions:[{alt:`Woven answer: +38% with bars by region`,caption:`Nordics led at +38%, driven by 41 new mid-market accounts; Iberia and Benelux followed.`,figure:`+38%`,id:`oGNZ1JKbI`,image:mp({pixelHeight:1e3,pixelWidth:1400,src:`../../../framerusercontent.com/images/lOC8ZwjsjYPCsj07AnYEf5pIKdo.jpg`,srcSet:`../../../framerusercontent.com/images/lOC8ZwjsjYPCsj07AnYEf5pIKdo_1.jpg 512w,../../../framerusercontent.com/images/lOC8ZwjsjYPCsj07AnYEf5pIKdo_2.jpg 1024w,../../../framerusercontent.com/images/lOC8ZwjsjYPCsj07AnYEf5pIKdo.jpg 1400w`},``),question:`Which regions grew fastest last quarter?`},{alt:`Woven answer: 4.2 hours with a falling curve`,caption:`Median P1 time-to-close fell from 7.1 to 4.2 hours after the on-call rota changed in May.`,figure:`4.2H`,id:`QQsbuUL8R`,image:mp({pixelHeight:1e3,pixelWidth:1400,src:`../../../framerusercontent.com/images/4ApryfqiM3YP0tgrDMwvfdBbtc.jpg`,srcSet:`../../../framerusercontent.com/images/4ApryfqiM3YP0tgrDMwvfdBbtc_1.jpg 512w,../../../framerusercontent.com/images/4ApryfqiM3YP0tgrDMwvfdBbtc_2.jpg 1024w,../../../framerusercontent.com/images/4ApryfqiM3YP0tgrDMwvfdBbtc.jpg 1400w`},``),question:`How long do P1 tickets stay open?`},{alt:`Woven answer: 112% with a rising curve`,caption:`112% trailing twelve months. Expansion from seat growth outweighs churn two to one.`,figure:`112%`,id:`IZlxO0JaP`,image:mp({pixelHeight:1e3,pixelWidth:1400,src:`../../../framerusercontent.com/images/4Qn9b2uDIMi9Q4E9XtBtjw2SJrw.jpg`,srcSet:`../../../framerusercontent.com/images/4Qn9b2uDIMi9Q4E9XtBtjw2SJrw_1.jpg 512w,../../../framerusercontent.com/images/4Qn9b2uDIMi9Q4E9XtBtjw2SJrw_2.jpg 1024w,../../../framerusercontent.com/images/4Qn9b2uDIMi9Q4E9XtBtjw2SJrw.jpg 1400w`},``),question:`What is our net revenue retention?`},{alt:`Woven answer: 6 of 14 with a stepped chart`,caption:`Six of fourteen campaigns paid back inside 90 days; all six targeted existing customers.`,figure:`6/14`,id:`T0h0n9G0M`,image:mp({pixelHeight:1e3,pixelWidth:1400,src:`../../../framerusercontent.com/images/r9zYCWH00VLlf09ffmhM8gMlcA.jpg`,srcSet:`../../../framerusercontent.com/images/r9zYCWH00VLlf09ffmhM8gMlcA_1.jpg 512w,../../../framerusercontent.com/images/r9zYCWH00VLlf09ffmhM8gMlcA_2.jpg 1024w,../../../framerusercontent.com/images/r9zYCWH00VLlf09ffmhM8gMlcA.jpg 1400w`},``),question:`Which campaigns paid back inside 90 days?`}],style:{height:`100%`,width:`100%`},width:`100%`})})})]})}),/*#__PURE__*/ f(_.section,{className:`framer-136d7g5`,"data-framer-name":`06 Pulse`,layout:re,children:/*#__PURE__*/ f(`div`,{className:`framer-148nru`,"data-framer-name":`Inner`,children:/*#__PURE__*/ d(`div`,{className:`framer-guymti`,"data-framer-name":`Split`,children:[/*#__PURE__*/ f(gf,{className:`framer-5au7vb`,"data-framer-name":`Image`,children:/*#__PURE__*/ f(N,{breakpoint:D,overrides:{i3icAZsxD:{background:{alt:`A snagged vermilion thread running through woven cloth`,fit:`fill`,pixelHeight:1e3,pixelWidth:1400,sizes:`max(min(${h?.width||`100vw`} - 48px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg.jpg`,srcSet:`../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg_1.jpg 512w,../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg_2.jpg 1024w,../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg.jpg 1400w`}},KHYETnAbE:{background:{alt:`A snagged vermilion thread running through woven cloth`,fit:`fill`,pixelHeight:1e3,pixelWidth:1400,sizes:`min(${h?.width||`100vw`} - 40px, 1376px)`,src:`../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg.jpg`,srcSet:`../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg_1.jpg 512w,../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg_2.jpg 1024w,../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg.jpg 1400w`}}},children:/*#__PURE__*/ f(R,{background:{alt:`A snagged vermilion thread running through woven cloth`,fit:`fill`,pixelHeight:1e3,pixelWidth:1400,sizes:`max(min(${h?.width||`100vw`} - 64px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg.jpg`,srcSet:`../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg_1.jpg 512w,../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg_2.jpg 1024w,../../../framerusercontent.com/images/9xX8AGgfHFP5xQdY5erK7PtReeg.jpg 1400w`},className:`framer-1ee0l4`,"data-framer-name":`Photo`})})}),/*#__PURE__*/ d(`div`,{className:`framer-tt10mj`,"data-framer-name":`Copy`,children:[/*#__PURE__*/ d(`div`,{className:`framer-n1vukb`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`05`})}),className:`framer-1wrlz9s`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`Signals`})}),className:`framer-t4b4hm`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(_f,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,style:{"--framer-text-color":`var(--token-01d06999-e662-4835-a86d-c9689a08fba2)`},children:`One cue out of line, and you hear about it first.`})}),className:`framer-uo1e9m`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(vf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1io246r`,"data-styles-preset":`W2Y75rC7K`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`Nuance learns what normal looks like for every speaker you care about and only flags up when emotion is both intense and sharp enough to matter. Each alert arrives with the footage attached.`})}),className:`framer-1vt0ag2`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(Sf,{className:`framer-pwl1la`,"data-framer-name":`Alerts`,children:[/*#__PURE__*/ d(yf,{className:`framer-1bwxegu`,"data-border":!0,"data-framer-name":`Alert`,children:[/*#__PURE__*/ d(_.div,{className:`framer-5j301a`,"data-framer-name":`Row`,children:[/*#__PURE__*/ f(_.div,{className:`framer-wq3knh`,"data-framer-name":`Dot`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`09:14 · Today`})}),className:`framer-2hql2b`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,style:{"--framer-text-color":`var(--token-01d06999-e662-4835-a86d-c9689a08fba2)`},children:`EU card payments failing`})}),className:`framer-xatlnf`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`212 invoices declined since 07:40, six times the usual rate. 91% share one processor error code.`})}),className:`framer-175w600`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(bf,{className:`framer-14nmjtc`,"data-border":!0,"data-framer-name":`Alert`,children:[/*#__PURE__*/ d(_.div,{className:`framer-1jpgmlz`,"data-framer-name":`Row`,children:[/*#__PURE__*/ f(_.div,{className:`framer-1d4e716`,"data-framer-name":`Dot`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`Yesterday`})}),className:`framer-5u2ahu`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,style:{"--framer-text-color":`var(--token-01d06999-e662-4835-a86d-c9689a08fba2)`},children:`Trial sign-ups from paid search down 22%`})}),className:`framer-1dalgfm`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`Two campaigns stopped spending on Sunday after a budget cap was reached.`})}),className:`framer-k2s43c`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(xf,{className:`framer-1odtbsw`,"data-border":!0,"data-framer-name":`Alert`,children:[/*#__PURE__*/ d(_.div,{className:`framer-ceyamd`,"data-framer-name":`Row`,children:[/*#__PURE__*/ f(_.div,{className:`framer-1oqkhb1`,"data-framer-name":`Dot`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`Monday`})}),className:`framer-l99r36`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,style:{"--framer-text-color":`var(--token-01d06999-e662-4835-a86d-c9689a08fba2)`},children:`Support backlog above normal`})}),className:`framer-8hthy3`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`P1 queue at 38 tickets against a normal range of 9 to 17. Most mention the new export.`})}),className:`framer-tcrkek`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})]})})}),/*#__PURE__*/ f(_.section,{className:`framer-1ikgntj`,"data-framer-name":`07 In numbers`,layout:re,children:/*#__PURE__*/ d(`div`,{className:`framer-ikdva6`,"data-framer-name":`Inner`,children:[/*#__PURE__*/ d(`div`,{className:`framer-dyovjk`,"data-framer-name":`Heading`,children:[/*#__PURE__*/ d(`div`,{className:`framer-az11pu`,"data-framer-name":`Title`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1kchv7u`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`06`})}),className:`framer-1j8fvdg`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(Cf,{className:`framer-1ja5wa7`,"data-framer-name":`Rule`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`In numbers`})}),className:`framer-1k8t8pw`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(wf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`What changes when every figure has a thread.`})}),className:`framer-1hftxaq`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Averages across 212 companies in their first six months, measured against the reporting they ran before.`})})}},children:/*#__PURE__*/ f(Tf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Averages across 212 companies in their first six months, measured against the reporting they ran before.`})}),className:`framer-l6rqto`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ d(`div`,{className:`framer-1bvw06j`,"data-border":!0,"data-framer-name":`Tiles`,children:[/*#__PURE__*/ d(`div`,{className:`framer-dj726l`,"data-framer-name":`Tile`,children:[/*#__PURE__*/ f(Ef,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`16×`})}),className:`framer-eq0z77`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`faster from question to answer than a ticket to the data team`})}),className:`framer-rpfs5d`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-t35myx`,"data-framer-name":`Tile`,children:[/*#__PURE__*/ f(Df,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`47%`})}),className:`framer-1j946k2`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`fewer dashboards kept alive after the first quarter`})}),className:`framer-12l17ne`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(`div`,{className:`framer-1tow00i`,"data-framer-name":`Tile`,children:/*#__PURE__*/ f(N,{breakpoint:D,overrides:{i3icAZsxD:{background:{alt:`Close-up of a woven answer swatch`,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`max((min(${h?.width||`100vw`} - 48px, 1376px) - 1px) / 2, 50px)`,src:`../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4.jpg`,srcSet:`../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4_1.jpg 512w,../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4_2.jpg 1024w,../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4.jpg 1600w`}},KHYETnAbE:{background:{alt:`Close-up of a woven answer swatch`,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`max((min(${h?.width||`100vw`} - 40px, 1376px) - 1px) / 2, 50px)`,src:`../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4.jpg`,srcSet:`../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4_1.jpg 512w,../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4_2.jpg 1024w,../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4.jpg 1600w`}}},children:/*#__PURE__*/ f(Of,{background:{alt:`Close-up of a woven answer swatch`,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`max((min(${h?.width||`100vw`} - 64px, 1376px) - 3px) / 4, 50px)`,src:`../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4.jpg`,srcSet:`../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4_1.jpg 512w,../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4_2.jpg 1024w,../../../framerusercontent.com/images/5MfgEjKPDK3uSStU1czTNftoR4.jpg 1600w`},className:`framer-y5ht60`,"data-framer-name":`Photo`})})}),/*#__PURE__*/ d(`div`,{className:`framer-13uns92`,"data-framer-name":`Tile`,children:[/*#__PURE__*/ f(kf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`4.2h`})}),className:`framer-1fyb4up`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`saved per analyst every week, mostly on one-off requests`})}),className:`framer-ubd1f`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-ymwbrn`,"data-framer-name":`Tile`,children:[/*#__PURE__*/ f(Af,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`240+`})}),className:`framer-8ytdza`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`connectors, read-only by default`})}),className:`framer-1l7pvgx`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-vt8bq5`,"data-framer-name":`Tile`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,style:{"--framer-text-color":`var(--token-01d06999-e662-4835-a86d-c9689a08fba2)`},children:`Every figure traceable`})}),className:`framer-1wyjaul`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`rgba(255, 255, 255, 0.85)`},children:`Click any number to see the rows, joins and filters behind it.`})}),className:`framer-17h96w0`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-5fjen3`,"data-framer-name":`Tile`,children:[/*#__PURE__*/ f(jf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`96%`})}),className:`framer-16tgx9p`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`of answers accepted without a follow-up question`})}),className:`framer-r7i90r`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-f5xqp7`,"data-framer-name":`Tile`,children:[/*#__PURE__*/ f(Mf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,style:{"--framer-text-color":`var(--token-01d06999-e662-4835-a86d-c9689a08fba2)`},children:`0`})}),className:`framer-4pefem`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`rgba(244, 243, 239, 0.62)`},children:`copies of your raw rows stored by Warpyn`})}),className:`framer-9xbq7f`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})}),/*#__PURE__*/ f(_.section,{className:`framer-ga6o1y`,"data-framer-name":`08 Customer story`,layout:re,children:/*#__PURE__*/ f(`div`,{className:`framer-1x2oc8f`,"data-framer-name":`Inner`,children:/*#__PURE__*/ d(`div`,{className:`framer-1fn7s38`,"data-framer-name":`Split`,children:[/*#__PURE__*/ f(Pf,{className:`framer-1t73rid`,"data-framer-name":`Image`,children:/*#__PURE__*/ f(N,{breakpoint:D,overrides:{i3icAZsxD:{background:{alt:`Woven answer swatch for Harrow and Pike: minus 31 percent`,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`max(min(${h?.width||`100vw`} - 48px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90.jpg`,srcSet:`../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90_1.jpg 512w,../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90_2.jpg 1024w,../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90.jpg 1600w`}},KHYETnAbE:{background:{alt:`Woven answer swatch for Harrow and Pike: minus 31 percent`,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`min(${h?.width||`100vw`} - 40px, 1376px)`,src:`../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90.jpg`,srcSet:`../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90_1.jpg 512w,../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90_2.jpg 1024w,../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90.jpg 1600w`}}},children:/*#__PURE__*/ f(Nf,{background:{alt:`Woven answer swatch for Harrow and Pike: minus 31 percent`,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`max(min(${h?.width||`100vw`} - 64px, 1376px), 320px)`,src:`../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90.jpg`,srcSet:`../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90_1.jpg 512w,../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90_2.jpg 1024w,../../../framerusercontent.com/images/rUDVif3R8nhzn1Xvyc3KsrIt90.jpg 1600w`},className:`framer-6rk0ac`,"data-framer-name":`Photo`})})}),/*#__PURE__*/ d(`div`,{className:`framer-m17l88`,"data-framer-name":`Sticky quote`,children:[/*#__PURE__*/ d(`div`,{className:`framer-czr29`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`07`})}),className:`framer-agge27`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Customer story · Harrow & Pike`})}),className:`framer-q3462m`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(Ff,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1da2mi8`,"data-styles-preset":`SgjAn1egO`,dir:`auto`,children:`“We thought we had a loyalty problem. Warpyn showed us it was a card-expiry problem, and it took one question to see it.”`})}),className:`framer-1bsc8c5`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Maren Solberg, Head of Growth, Harrow & Pike`})}),className:`framer-1ocavus`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(`div`,{className:`framer-57ztp6`,"data-border":!0,"data-framer-name":`Results`,children:[/*#__PURE__*/ d(`div`,{className:`framer-17kclpd`,"data-framer-name":`Result`,children:[/*#__PURE__*/ f(If,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,children:`31%`})}),className:`framer-1n2g908`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`less involuntary churn`})}),className:`framer-ht4u17`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-185lpu6`,"data-framer-name":`Result`,children:[/*#__PURE__*/ f(Lf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,children:`36%`})}),className:`framer-1gkv72h`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`of churn traced to expired cards`})}),className:`framer-4iln2`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-1w33cmm`,"data-framer-name":`Result`,children:[/*#__PURE__*/ f(Rf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-cun25b`,"data-styles-preset":`Tx3vQ27Oa`,dir:`auto`,children:`1`})}),className:`framer-1mozxsq`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`retry rule to fix it`})}),className:`framer-c0va6n`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]}),/*#__PURE__*/ f(P,{href:{pathVariables:{r06xjBOuP:`harrow-and-pike`},unresolvedPathSlugs:{r06xjBOuP:{collectionId:`MT7JtUhTC`,collectionItemId:`oCwdzyn0_`}},webPageId:`bPBinUgUh`},motionChild:!0,nodeId:`xKDDNaGld`,scopeId:`augiA20Il`,children:/*#__PURE__*/ d(zf,{className:`framer-k25x63 framer-lux5qc`,"data-border":!0,"data-framer-name":`Button · Read the story`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1pqkpa6`,"data-styles-preset":`JUO30hGfB`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`Read the story`})}),className:`framer-co2d8f`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1pqkpa6`,"data-styles-preset":`JUO30hGfB`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`→`})}),className:`framer-arw5bt`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})})]})]})})}),/*#__PURE__*/ f(_.section,{className:`framer-19kp5l9`,"data-framer-name":`09 Stories`,layout:re,children:/*#__PURE__*/ d(`div`,{className:`framer-tslrz`,"data-framer-name":`Inner`,children:[/*#__PURE__*/ d(`div`,{className:`framer-m8r8ct`,"data-framer-name":`Heading`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1fk0z15`,"data-framer-name":`Title`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1foc9l3`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`08`})}),className:`framer-k06nry`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(Bf,{className:`framer-bhgga`,"data-framer-name":`Rule`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Customers`})}),className:`framer-1o7gow4`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(Vf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`Teams that decode every cue.`})}),className:`framer-8muide`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Six teams, six emotions they could not detect on text alone, and what they built once they could.`})})}},children:/*#__PURE__*/ f(Hf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Six teams, six emotions they could not detect on text alone, and what they built once they could.`})}),className:`framer-sed7jf`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ f(Gf,{className:`framer-1d2el9t`,"data-framer-name":`Stories`,children:/*#__PURE__*/ f(ae,{children:/*#__PURE__*/ f(_p,{query:gp(),children:(e,t,n)=>/*#__PURE__*/ f(l,{children:e?.map(({A_IhBNXKY:e,HJ_gI7gDM:t,id:n,mk2lNEm6r:r,nEs9zymxV:i,r06xjBOuP:o,Tvk88duIQ:s,xzAbWVB5C:c},l)=>(o??=``,s??=``,e??=``,c??=``,r??=``,t??=``,/*#__PURE__*/ f(y,{id:`eFpnvzRht-${n}`,children:/*#__PURE__*/ f(le.Provider,{value:{r06xjBOuP:o},children:/*#__PURE__*/ f(P,{href:{pathVariables:{r06xjBOuP:o},webPageId:`bPBinUgUh`},motionChild:!0,nodeId:`eBicXz8GM`,scopeId:`augiA20Il`,children:/*#__PURE__*/ d(Wf,{className:`framer-1duseoa framer-lux5qc`,"data-framer-name":`Card`,children:[/*#__PURE__*/ f(N,{breakpoint:D,overrides:{i3icAZsxD:{background:{alt:``,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`max((min(${h?.width||`100vw`} - 48px, 1376px) - 20px) / 2, 280px)`,...hp(i)}},KHYETnAbE:{background:{alt:``,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`max(min(${h?.width||`100vw`} - 40px, 1376px), 280px)`,...hp(i)}}},children:/*#__PURE__*/ f(Uf,{background:{alt:``,fit:`fill`,pixelHeight:1e3,pixelWidth:1600,sizes:`max((min(${h?.width||`100vw`} - 64px, 1376px) - 40px) / 3, 280px)`,...hp(i)},className:`framer-12jgx79`,"data-framer-name":`Cover`})}),/*#__PURE__*/ d(_.div,{className:`framer-jh9704`,"data-framer-name":`Meta`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,children:`Company`})}),className:`framer-2j637h`,fonts:[`Inter`],text:s,verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Industry`})}),className:`framer-u2ccdw`,fonts:[`Inter`],text:e,verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,children:`Title`})}),className:`framer-m5mws2`,fonts:[`Inter`],text:c,verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ d(_.div,{className:`framer-9irwvd`,"data-border":!0,"data-framer-name":`Figure`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`Figure`})}),className:`framer-1av3d82`,fonts:[`Inter`],text:r,verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Figure Label`})}),className:`framer-1sca0ma`,fonts:[`Inter`],text:t,verticalAlignment:`top`,withExternalLayout:!0})]})]})})})},n)))})})})})]})}),/*#__PURE__*/ f(_.section,{className:`framer-x6nmki`,"data-framer-name":`10 Security`,layout:re,children:/*#__PURE__*/ d(`div`,{className:`framer-qb0cwz`,"data-framer-name":`Inner`,children:[/*#__PURE__*/ d(`div`,{className:`framer-68zwsw`,"data-framer-name":`Heading`,children:[/*#__PURE__*/ d(`div`,{className:`framer-3960pm`,"data-framer-name":`Title`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1xv4wrr`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`09`})}),className:`framer-rbm2sr`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(Kf,{className:`framer-1p2kvqc`,"data-framer-name":`Rule`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Security`})}),className:`framer-1sa331j`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(qf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`Permissions travel with the thread.`})}),className:`framer-pmdn5o`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Warpyn reads with the access you give it and nothing more. If a person cannot see a row in the source, the thread from that row never reaches their answer.`})})}},children:/*#__PURE__*/ f(Jf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Warpyn reads with the access you give it and nothing more. If a person cannot see a row in the source, the thread from that row never reaches their answer.`})}),className:`framer-1c89yhi`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ d(Yf,{className:`framer-1jyqf8m`,"data-border":!0,"data-framer-name":`Pillars`,children:[/*#__PURE__*/ d(_.div,{className:`framer-dvldba`,"data-framer-name":`Pillar`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`01`})}),className:`framer-r9vuwi`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,children:`Read-only by default`})}),className:`framer-14gp73d`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`Every connector asks for the narrowest read scope the source offers. Raw rows stay where they are; Warpyn stores query plans and the answers you save.`})}),className:`framer-cez86c`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(_.div,{className:`framer-18fpxrm`,"data-framer-name":`Pillar`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`02`})}),className:`framer-dpfbw1`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,children:`Row-level permissions`})}),className:`framer-1lzj2jx`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`Access rules come from your CRM, warehouse and support desk. Totals are recomputed for what each person is allowed to see.`})}),className:`framer-18f5a5o`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(_.div,{className:`framer-i4oeec`,"data-framer-name":`Pillar`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`03`})}),className:`framer-hwhz7t`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,children:`Your region, your keys`})}),className:`framer-1uy6zz9`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`EU or US data residency, customer-managed keys on Enterprise, SSO, SCIM and an audit log for every question asked.`})}),className:`framer-1mj5pw`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]}),/*#__PURE__*/ d(`div`,{className:`framer-k6955f`,"data-framer-name":`Badges`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1tp61k8`,"data-border":!0,"data-framer-name":`Badge`,children:[/*#__PURE__*/ f(`div`,{className:`framer-1irjbfq`,"data-framer-name":`Tick`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,children:`SOC 2 Type II`})}),className:`framer-1ovlsgn`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-1st5vd`,"data-border":!0,"data-framer-name":`Badge`,children:[/*#__PURE__*/ f(`div`,{className:`framer-1w8audq`,"data-framer-name":`Tick`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,children:`GDPR`})}),className:`framer-ca43d6`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-1l2qqp9`,"data-border":!0,"data-framer-name":`Badge`,children:[/*#__PURE__*/ f(`div`,{className:`framer-rs3wor`,"data-framer-name":`Tick`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,children:`HIPAA-ready`})}),className:`framer-1a66xnt`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-dznmj9`,"data-border":!0,"data-framer-name":`Badge`,children:[/*#__PURE__*/ f(`div`,{className:`framer-1mv43xm`,"data-framer-name":`Tick`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,children:`EU · US residency`})}),className:`framer-abynqx`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-1aqtm2b`,"data-border":!0,"data-framer-name":`Badge`,children:[/*#__PURE__*/ f(`div`,{className:`framer-1f6aoaz`,"data-framer-name":`Tick`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,children:`SSO · SCIM`})}),className:`framer-1h1zhjc`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ d(`div`,{className:`framer-cbuxri`,"data-border":!0,"data-framer-name":`Badge`,children:[/*#__PURE__*/ f(`div`,{className:`framer-1t7zrjh`,"data-framer-name":`Tick`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,children:`Audit log`})}),className:`framer-1fqbjj1`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})}),/*#__PURE__*/ f(_.section,{className:`framer-1q7hgqy`,"data-framer-name":`11 Sources`,layout:re,children:/*#__PURE__*/ d(`div`,{className:`framer-1l9ne2i`,"data-framer-name":`Inner`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1q0970a`,"data-framer-name":`Heading`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1o3n4zd`,"data-framer-name":`Title`,children:[/*#__PURE__*/ d(`div`,{className:`framer-1cu43qt`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`10`})}),className:`framer-17rquuf`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(Xf,{className:`framer-1k03bvm`,"data-framer-name":`Rule`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Sources`})}),className:`framer-uuuv66`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(Zf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`240+ threads, one loom.`})}),className:`framer-1cqvnnv`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Warehouses, billing, CRM, support, product events and the spreadsheets nobody admits to. Each one is read-only and keyed to the same customer.`})})}},children:/*#__PURE__*/ f(Qf,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Warehouses, billing, CRM, support, product events and the spreadsheets nobody admits to. Each one is read-only and keyed to the same customer.`})}),className:`framer-pt5wg6`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ f(ep,{className:`framer-6ujpcm`,"data-framer-name":`Sources`,children:/*#__PURE__*/ f(ae,{children:/*#__PURE__*/ f(_p,{query:vp(),children:(e,t,n)=>/*#__PURE__*/ f(l,{children:e?.map(({aUQ7mvZYv:e,E7V9RlMCo:t,GCquh9zc0:n,id:r,lIKcq1H1L:i,oyhCKC1y3:o,zF_5v6mWP:s},c)=>(i??=``,e??=`#09F`,n??=``,s??=``,t??=``,o??=``,/*#__PURE__*/ f(y,{id:`JErJzkyep-${r}`,children:/*#__PURE__*/ f(le.Provider,{value:{lIKcq1H1L:i},children:/*#__PURE__*/ f(P,{href:{pathVariables:{lIKcq1H1L:i},webPageId:`aCjfHajxL`},motionChild:!0,nodeId:`TEvTWqzFn`,scopeId:`augiA20Il`,children:/*#__PURE__*/ d($f,{className:`framer-cec95d framer-lux5qc`,"data-border":!0,"data-framer-name":`Card`,children:[/*#__PURE__*/ d(_.div,{className:`framer-jzfo24`,"data-framer-name":`Top`,children:[/*#__PURE__*/ f(_.div,{className:`framer-i3qzjw`,"data-border":!0,"data-framer-name":`Yarn`,style:{"--1c35ino":e,"--fucn1w":O(e)}}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Category`})}),className:`framer-z5uyga`,fonts:[`Inter`],text:n,verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h3`,{className:`framer-styles-preset-klgdwc`,"data-styles-preset":`zeRogG0s3`,dir:`auto`,children:`Name`})}),className:`framer-quxyql`,fonts:[`Inter`],text:s,verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`Summary`})}),className:`framer-hmbeha`,fonts:[`Inter`],text:t,verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`Sync`})}),className:`framer-1p421tm`,fonts:[`Inter`],text:o,verticalAlignment:`top`,withExternalLayout:!0})]})})})},r)))})})})}),/*#__PURE__*/ f(`div`,{className:`framer-1divfd1`,"data-framer-name":`More`,children:/*#__PURE__*/ f(P,{href:{webPageId:`MMnLEngiQ`},motionChild:!0,nodeId:`zq5BSGn2c`,scopeId:`augiA20Il`,children:/*#__PURE__*/ d(tp,{className:`framer-1lwnrd4 framer-lux5qc`,"data-framer-name":`Button · Browse all sources`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1pqkpa6`,"data-styles-preset":`JUO30hGfB`,dir:`auto`,style:{"--framer-text-color":`var(--token-01d06999-e662-4835-a86d-c9689a08fba2)`},children:`Browse all sources`})}),className:`framer-1qnx92a`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1pqkpa6`,"data-styles-preset":`JUO30hGfB`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`→`})}),className:`framer-nuwrbr`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})})})]})}),/*#__PURE__*/ f(_.section,{className:`framer-105i651`,"data-framer-name":`12 Pricing`,layout:re,children:/*#__PURE__*/ d(`div`,{className:`framer-kmyk46`,"data-framer-name":`Inner`,children:[/*#__PURE__*/ d(`div`,{className:`framer-13qcilw`,"data-framer-name":`Heading`,children:[/*#__PURE__*/ d(`div`,{className:`framer-hhw3ja`,"data-framer-name":`Title`,children:[/*#__PURE__*/ d(`div`,{className:`framer-3mxao2`,"data-framer-name":`Kicker`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`11`})}),className:`framer-m9sbmn`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(np,{className:`framer-whrj99`,"data-framer-name":`Rule`}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Pricing`})}),className:`framer-16giqas`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(rp,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`Priced by sources and questions, not seats.`})}),className:`framer-12fi4ie`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),/*#__PURE__*/ f(N,{breakpoint:D,overrides:{KHYETnAbE:{children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-alignment":`start`,"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Everyone in the company can ask. You pay for how many tools you connect and how many questions you ask each month.`})})}},children:/*#__PURE__*/ f(ip,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,style:{"--framer-text-color":`var(--token-e51cc098-705f-41f1-84e1-f13642bf174f)`},children:`Everyone in the company can ask. You pay for how many tools you connect and how many questions you ask each month.`})}),className:`framer-1l6p9cu`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),/*#__PURE__*/ f(F,{children:/*#__PURE__*/ f(M,{className:`framer-hc86xk-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`Pricing`,isAuthoredByUser:!0,name:`Pricing`,nodeId:`VDgVPPDaw`,scopeId:`augiA20Il`,children:/*#__PURE__*/ f(Ie,{currency:`$`,height:`100%`,id:`VDgVPPDaw`,layoutId:`VDgVPPDaw`,name:`Pricing`,plans:[{annual:0,blurb:`For one team asking its first questions.`,cta:`Start free`,featured:!1,features:`Plain-English questions|Lineage on every figure|Slack answers|Community support`,id:`default-item-0`,monthly:0,name:`Starter`,picks:`500 questions / month`,threads:`3 sources`},{annual:400,blurb:`For companies running on their numbers.`,cta:`Start a 14-day trial`,featured:!0,features:`Everything in Starter|Pulse alerts on any metric|Row-level permissions|Scheduled answers to email|Priority support`,id:`default-item-1`,monthly:480,name:`Growth`,picks:`10,000 questions / month`,threads:`25 sources`},{annual:-1,blurb:`For regulated data and many teams.`,cta:`Talk to us`,featured:!1,features:`Everything in Growth|SSO, SCIM and audit log|EU or US data residency|Private deployment|Named data engineer`,id:`default-item-2`,monthly:-1,name:`Enterprise`,picks:`Unlimited questions`,threads:`Unlimited sources`}],style:{width:`100%`},width:`100%`})})})]})}),/*#__PURE__*/ f(_.section,{className:`framer-x84ac7`,"data-framer-name":`13 FAQ`,layout:re,children:/*#__PURE__*/ f(`div`,{className:`framer-15625ea`,"data-framer-name":`Inner`,children:/*#__PURE__*/ d(`div`,{className:`framer-d7dyl9`,"data-framer-name":`Split`,children:[/*#__PURE__*/ d(`div`,{className:`framer-3wspv`,"data-framer-name":`Sticky`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1gk0qdc`,"data-styles-preset":`oGFQvyVur`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`12 · Questions`})}),className:`framer-5arim4`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(op,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`h2`,{className:`framer-styles-preset-1mrw2ji`,"data-styles-preset":`yR_STutVj`,dir:`auto`,children:`What teams ask before they connect anything.`})}),className:`framer-eblqqi`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1nupm5d`,"data-styles-preset":`AHAXTwDzD`,dir:`auto`,children:`Something else on your mind? A data engineer answers every message within one working day.`})}),className:`framer-w8cfdz`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(P,{href:{webPageId:`oAfQjeaBo`},motionChild:!0,nodeId:`iix9NEEYt`,scopeId:`augiA20Il`,children:/*#__PURE__*/ d(sp,{className:`framer-14p0fhh framer-lux5qc`,"data-border":!0,"data-framer-name":`Button · Ask us directly`,children:[/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1pqkpa6`,"data-styles-preset":`JUO30hGfB`,dir:`auto`,style:{"--framer-text-color":`var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9)`},children:`Ask us directly`})}),className:`framer-1vhmrr`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),/*#__PURE__*/ f(E,{__fromCanvasComponent:!0,children:/*#__PURE__*/ f(a,{children:/*#__PURE__*/ f(`p`,{className:`framer-styles-preset-1pqkpa6`,"data-styles-preset":`JUO30hGfB`,dir:`auto`,style:{"--framer-text-color":`var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d)`},children:`→`})}),className:`framer-5l5f5u`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})})]}),/*#__PURE__*/ f(F,{children:/*#__PURE__*/ f(M,{className:`framer-l66v72-container`,"data-code-component-plugin-id":`api`,"data-framer-name":`FAQ`,isAuthoredByUser:!0,name:`FAQ`,nodeId:`wztiulgZ9`,scopeId:`augiA20Il`,children:/*#__PURE__*/ f(Le,{height:`100%`,id:`wztiulgZ9`,items:[{a:`No. Warpyn reads from your warehouse and tools with read-only credentials and keeps only the query plans and the answers you save. Raw rows stay where they are.`,id:`default-item-0`,q:`Does Warpyn copy our data?`},{a:`During setup you confirm about thirty definitions (revenue, active account, churn) in a shared glossary. Every answer shows which definition it used, and changing one re-weaves the answers that depend on it.`,id:`default-item-1`,q:`How does it know what 'revenue' means for us?`},{a:`Click any figure to see its thread: the source rows, joins and filters behind it. Flag a step and your data team gets the exact query to fix, not a screenshot.`,id:`default-item-2`,q:`What happens when an answer is wrong?`},{a:`240+ connectors, from warehouses and Postgres to billing, CRM, support desks, ad platforms and spreadsheets. Anything with SQL or a REST API can be added in an afternoon.`,id:`default-item-3`,q:`Which sources can we connect?`},{a:`Permissions follow your sources. If someone can't see a row in the CRM, the thread from that row never reaches their answer.`,id:`default-item-4`,q:`Who can see what?`},{a:`Most teams ask their first real question on day one. A full rollout with glossary, permissions and alerts takes two to three weeks.`,id:`default-item-5`,q:`How long does setup take?`}],layoutId:`wztiulgZ9`,name:`FAQ`,style:{width:`100%`},width:`100%`})})})]})})})]}),/*#__PURE__*/ f(`div`,{id:`overlay`})]})})}),Cp=[`.framer-TeiVQ.framer-lux5qc, .framer-TeiVQ .framer-lux5qc { display: block; }`,`.framer-TeiVQ.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,`.framer-TeiVQ .framer-fx6zq9 { background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); flex: none; height: 100vh; min-height: 820px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1i1gbte-container, .framer-TeiVQ .framer-lbtsf6, .framer-TeiVQ .framer-14fnple, .framer-TeiVQ .framer-1b2tnh7, .framer-TeiVQ .framer-1ee0l4, .framer-TeiVQ .framer-y5ht60 { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,`.framer-TeiVQ .framer-ve940x { flex: none; height: auto; left: 32px; position: absolute; top: 112px; white-space: pre-wrap; width: 760px; word-break: break-word; word-wrap: break-word; z-index: 4; }`,`.framer-TeiVQ .framer-xhz4i8 { flex: none; height: auto; position: absolute; right: 192px; top: 128px; white-space: pre-wrap; width: 360px; word-break: break-word; word-wrap: break-word; z-index: 4; }`,`.framer-TeiVQ .framer-hk4tsb { align-content: flex-start; align-items: flex-start; background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; padding: 88px 0px 40px 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-dpw68g { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1t0liqt { flex: 1 0 0px; height: auto; max-width: 520px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,`.framer-TeiVQ .framer-140oqz3 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,`.framer-TeiVQ .framer-ya62a8, .framer-TeiVQ .framer-1jea3gh, .framer-TeiVQ .framer-1uesj3l, .framer-TeiVQ .framer-mh9vkd, .framer-TeiVQ .framer-1mfknhd, .framer-TeiVQ .framer-1mwe63d, .framer-TeiVQ .framer-oz8p0a, .framer-TeiVQ .framer-1tlstw6, .framer-TeiVQ .framer-1wrlz9s, .framer-TeiVQ .framer-t4b4hm, .framer-TeiVQ .framer-2hql2b, .framer-TeiVQ .framer-5u2ahu, .framer-TeiVQ .framer-l99r36, .framer-TeiVQ .framer-1j8fvdg, .framer-TeiVQ .framer-1k8t8pw, .framer-TeiVQ .framer-agge27, .framer-TeiVQ .framer-q3462m, .framer-TeiVQ .framer-co2d8f, .framer-TeiVQ .framer-arw5bt, .framer-TeiVQ .framer-k06nry, .framer-TeiVQ .framer-1o7gow4, .framer-TeiVQ .framer-2j637h, .framer-TeiVQ .framer-u2ccdw, .framer-TeiVQ .framer-1av3d82, .framer-TeiVQ .framer-rbm2sr, .framer-TeiVQ .framer-1sa331j, .framer-TeiVQ .framer-r9vuwi, .framer-TeiVQ .framer-dpfbw1, .framer-TeiVQ .framer-hwhz7t, .framer-TeiVQ .framer-1ovlsgn, .framer-TeiVQ .framer-ca43d6, .framer-TeiVQ .framer-1a66xnt, .framer-TeiVQ .framer-abynqx, .framer-TeiVQ .framer-1h1zhjc, .framer-TeiVQ .framer-1fqbjj1, .framer-TeiVQ .framer-17rquuf, .framer-TeiVQ .framer-uuuv66, .framer-TeiVQ .framer-z5uyga, .framer-TeiVQ .framer-1p421tm, .framer-TeiVQ .framer-1qnx92a, .framer-TeiVQ .framer-nuwrbr, .framer-TeiVQ .framer-m9sbmn, .framer-TeiVQ .framer-16giqas, .framer-TeiVQ .framer-5arim4, .framer-TeiVQ .framer-1vhmrr, .framer-TeiVQ .framer-5l5f5u { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-TeiVQ .framer-yvkced, .framer-TeiVQ .framer-ckbok8, .framer-TeiVQ .framer-e9wxft, .framer-TeiVQ .framer-9d5va7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 200px; word-break: break-word; word-wrap: break-word; }`,`.framer-TeiVQ .framer-c34521-container, .framer-TeiVQ .framer-1m06dbh-container { flex: none; height: 64px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1mhct85 { align-content: flex-start; align-items: flex-start; background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 140px 0px 80px 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1q9nwve { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-grfv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 760px; min-width: 320px; padding: 0px; position: relative; width: 1px; }`,`.framer-TeiVQ .framer-j7v5bg, .framer-TeiVQ .framer-1arzaf1, .framer-TeiVQ .framer-14k7lwv, .framer-TeiVQ .framer-uo1e9m, .framer-TeiVQ .framer-1hftxaq, .framer-TeiVQ .framer-1bsc8c5, .framer-TeiVQ .framer-8muide, .framer-TeiVQ .framer-pmdn5o, .framer-TeiVQ .framer-1cqvnnv, .framer-TeiVQ .framer-12fi4ie, .framer-TeiVQ .framer-eblqqi { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-16axkfd, .framer-TeiVQ .framer-1bzc59x, .framer-TeiVQ .framer-l6rqto, .framer-TeiVQ .framer-sed7jf, .framer-TeiVQ .framer-1c89yhi, .framer-TeiVQ .framer-pt5wg6, .framer-TeiVQ .framer-1l6p9cu { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 360px; word-break: break-word; word-wrap: break-word; }`,`.framer-TeiVQ .framer-ee6qo1-container { flex: none; height: 880px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1kv0xh7, .framer-TeiVQ .framer-4gxvmx { align-content: center; align-items: center; background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 120px 32px 140px 32px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-4g15kz, .framer-TeiVQ .framer-148nru, .framer-TeiVQ .framer-qb0cwz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: flex-start; max-width: 1376px; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-7sedoc, .framer-TeiVQ .framer-1fn7s38, .framer-TeiVQ .framer-d7dyl9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1n2ao1l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 120px; width: 420px; }`,`.framer-TeiVQ .framer-1irwsix, .framer-TeiVQ .framer-9nol2h, .framer-TeiVQ .framer-n1vukb, .framer-TeiVQ .framer-1kchv7u, .framer-TeiVQ .framer-czr29, .framer-TeiVQ .framer-1foc9l3, .framer-TeiVQ .framer-1xv4wrr, .framer-TeiVQ .framer-1cu43qt, .framer-TeiVQ .framer-3mxao2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,`.framer-TeiVQ .framer-sp2mdi, .framer-TeiVQ .framer-1ooaccb, .framer-TeiVQ .framer-1ja5wa7, .framer-TeiVQ .framer-bhgga, .framer-TeiVQ .framer-1p2kvqc, .framer-TeiVQ .framer-1k03bvm, .framer-TeiVQ .framer-whrj99 { background-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); flex: none; height: 1px; position: relative; width: 24px; }`,`.framer-TeiVQ .framer-1wsecs2, .framer-TeiVQ .framer-1vt0ag2, .framer-TeiVQ .framer-xatlnf, .framer-TeiVQ .framer-175w600, .framer-TeiVQ .framer-1dalgfm, .framer-TeiVQ .framer-k2s43c, .framer-TeiVQ .framer-8hthy3, .framer-TeiVQ .framer-tcrkek, .framer-TeiVQ .framer-eq0z77, .framer-TeiVQ .framer-rpfs5d, .framer-TeiVQ .framer-1j946k2, .framer-TeiVQ .framer-12l17ne, .framer-TeiVQ .framer-1fyb4up, .framer-TeiVQ .framer-ubd1f, .framer-TeiVQ .framer-8ytdza, .framer-TeiVQ .framer-1l7pvgx, .framer-TeiVQ .framer-1wyjaul, .framer-TeiVQ .framer-17h96w0, .framer-TeiVQ .framer-16tgx9p, .framer-TeiVQ .framer-r7i90r, .framer-TeiVQ .framer-4pefem, .framer-TeiVQ .framer-9xbq7f, .framer-TeiVQ .framer-1ocavus, .framer-TeiVQ .framer-1n2g908, .framer-TeiVQ .framer-ht4u17, .framer-TeiVQ .framer-1gkv72h, .framer-TeiVQ .framer-4iln2, .framer-TeiVQ .framer-1mozxsq, .framer-TeiVQ .framer-c0va6n, .framer-TeiVQ .framer-m5mws2, .framer-TeiVQ .framer-14gp73d, .framer-TeiVQ .framer-cez86c, .framer-TeiVQ .framer-1lzj2jx, .framer-TeiVQ .framer-18f5a5o, .framer-TeiVQ .framer-1uy6zz9, .framer-TeiVQ .framer-1mj5pw, .framer-TeiVQ .framer-quxyql, .framer-TeiVQ .framer-hmbeha, .framer-TeiVQ .framer-w8cfdz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-TeiVQ .framer-5mnt1h, .framer-TeiVQ .framer-1lwnrd4 { align-content: center; align-items: center; background-color: var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 14px 20px 14px 20px; position: relative; text-decoration: none; width: min-content; }`,`.framer-TeiVQ .framer-rg9420 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; min-width: 320px; padding: 0px; position: relative; width: 1px; }`,`.framer-TeiVQ .framer-bkadu7, .framer-TeiVQ .framer-1uoplun, .framer-TeiVQ .framer-15nya3m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1vsnhj1, .framer-TeiVQ .framer-1wqzxr0, .framer-TeiVQ .framer-3kj41b { background-color: var(--token-d0cffd48-7a3e-40cd-8df3-c1f29e1888a2); border-bottom-left-radius: 22px; border-bottom-right-radius: 22px; border-top-left-radius: 22px; border-top-right-radius: 22px; flex: none; height: 400px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,`.framer-TeiVQ .framer-b184v6, .framer-TeiVQ .framer-1vb2a90, .framer-TeiVQ .framer-1istwhy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-s1r86z, .framer-TeiVQ .framer-1foxz91, .framer-TeiVQ .framer-90ixh3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 40px; word-break: break-word; word-wrap: break-word; }`,`.framer-TeiVQ .framer-1nwamu7, .framer-TeiVQ .framer-1uoyp1f, .framer-TeiVQ .framer-qs5jkq, .framer-TeiVQ .framer-1sca0ma { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,`.framer-TeiVQ .framer-37ow9u, .framer-TeiVQ .framer-ikdva6, .framer-TeiVQ .framer-tslrz, .framer-TeiVQ .framer-1l9ne2i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1376px; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-8gmm7w, .framer-TeiVQ .framer-dyovjk, .framer-TeiVQ .framer-m8r8ct, .framer-TeiVQ .framer-68zwsw, .framer-TeiVQ .framer-1q0970a, .framer-TeiVQ .framer-13qcilw { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-16f915b, .framer-TeiVQ .framer-az11pu, .framer-TeiVQ .framer-1fk0z15, .framer-TeiVQ .framer-3960pm, .framer-TeiVQ .framer-1o3n4zd, .framer-TeiVQ .framer-hhw3ja { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 820px; min-width: 320px; padding: 0px; position: relative; width: 1px; }`,`.framer-TeiVQ .framer-1d9uov2-container { flex: none; height: 560px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-136d7g5 { align-content: center; align-items: center; background-color: var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 140px 32px 140px 32px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-guymti { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 64px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-5au7vb { background-color: var(--token-9c812085-1500-41ba-bf2d-b6569dff7da9); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: 1.2 0 0px; height: 620px; min-width: 320px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,`.framer-TeiVQ .framer-tt10mj { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; min-width: 300px; padding: 0px; position: relative; width: 1px; }`,`.framer-TeiVQ .framer-pwl1la { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1bwxegu, .framer-TeiVQ .framer-14nmjtc, .framer-TeiVQ .framer-1odtbsw { --border-bottom-width: 1px; --border-color: rgba(244, 243, 239, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(244, 243, 239, 0.06); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 18px 20px 18px 20px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-5j301a, .framer-TeiVQ .framer-1jpgmlz, .framer-TeiVQ .framer-ceyamd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-wq3knh { background-color: var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; flex: none; height: 7px; position: relative; width: 7px; }`,`.framer-TeiVQ .framer-1d4e716, .framer-TeiVQ .framer-1oqkhb1 { background-color: rgba(244, 243, 239, 0.4); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; flex: none; height: 7px; position: relative; width: 7px; }`,`.framer-TeiVQ .framer-1ikgntj, .framer-TeiVQ .framer-ga6o1y, .framer-TeiVQ .framer-1q7hgqy { align-content: center; align-items: center; background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 140px 32px 140px 32px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1bvw06j { --border-bottom-width: 1px; --border-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: grid; flex: none; gap: 1px; grid-auto-rows: 300px; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, 300px); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,`.framer-TeiVQ .framer-dj726l, .framer-TeiVQ .framer-t35myx, .framer-TeiVQ .framer-1tow00i, .framer-TeiVQ .framer-13uns92, .framer-TeiVQ .framer-ymwbrn, .framer-TeiVQ .framer-5fjen3 { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-vt8bq5 { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-0b79d5f0-89f5-47c4-8a58-de255a4ff14d); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-f5xqp7 { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1x2oc8f, .framer-TeiVQ .framer-15625ea { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1376px; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1t73rid { background-color: var(--token-9c812085-1500-41ba-bf2d-b6569dff7da9); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: 1 0 0px; height: 760px; min-width: 320px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,`.framer-TeiVQ .framer-6rk0ac { bottom: -60px; flex: none; left: 0px; position: absolute; right: 0px; top: -60px; }`,`.framer-TeiVQ .framer-m17l88 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; min-width: 300px; padding: 0px; position: sticky; top: 120px; width: 1px; }`,`.framer-TeiVQ .framer-57ztp6 { --border-bottom-width: 0px; --border-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; padding: 24px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-17kclpd, .framer-TeiVQ .framer-185lpu6, .framer-TeiVQ .framer-1w33cmm { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-k25x63, .framer-TeiVQ .framer-14p0fhh { --border-bottom-width: 1px; --border-color: rgba(17, 19, 23, 0.2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0); border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 14px 20px 14px 20px; position: relative; text-decoration: none; width: min-content; }`,`.framer-TeiVQ .framer-19kp5l9, .framer-TeiVQ .framer-105i651 { align-content: center; align-items: center; background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 40px 32px 140px 32px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1d2el9t { display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(280px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1duseoa { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,`.framer-TeiVQ .framer-12jgx79 { border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; flex: none; height: 280px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,`.framer-TeiVQ .framer-jh9704, .framer-TeiVQ .framer-jzfo24 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-9irwvd { --border-bottom-width: 0px; --border-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 14px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-x6nmki { align-content: center; align-items: center; background-color: var(--token-d0cffd48-7a3e-40cd-8df3-c1f29e1888a2); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 140px 32px 140px 32px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1jyqf8m { --border-bottom-width: 1px; --border-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: grid; flex: none; gap: 1px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,`.framer-TeiVQ .framer-dvldba, .framer-TeiVQ .framer-18fpxrm, .framer-TeiVQ .framer-i4oeec { align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-d0cffd48-7a3e-40cd-8df3-c1f29e1888a2); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; justify-self: start; padding: 32px 28px 36px 28px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-k6955f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-1tp61k8, .framer-TeiVQ .framer-1st5vd, .framer-TeiVQ .framer-1l2qqp9, .framer-TeiVQ .framer-dznmj9, .framer-TeiVQ .framer-1aqtm2b, .framer-TeiVQ .framer-cbuxri { --border-bottom-width: 1px; --border-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 999px; border-bottom-right-radius: 999px; border-top-left-radius: 999px; border-top-right-radius: 999px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 10px 14px 10px 12px; position: relative; width: min-content; }`,`.framer-TeiVQ .framer-1irjbfq, .framer-TeiVQ .framer-1w8audq, .framer-TeiVQ .framer-rs3wor, .framer-TeiVQ .framer-1mv43xm, .framer-TeiVQ .framer-1f6aoaz, .framer-TeiVQ .framer-1t7zrjh { background-color: var(--token-e282a826-450e-41a9-9c3a-98f9cb4d10b9); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 6px; position: relative; width: 6px; }`,`.framer-TeiVQ .framer-6ujpcm { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(240px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-cec95d { --border-bottom-width: 1px; --border-color: var(--token-81a66ba1-4d99-4dd0-bc34-7cad334d9c75); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background-color: var(--token-d0cffd48-7a3e-40cd-8df3-c1f29e1888a2); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; justify-self: start; padding: 22px 22px 24px 22px; position: relative; text-decoration: none; width: 100%; }`,`.framer-TeiVQ .framer-i3qzjw { --border-bottom-width: 3px; --border-color: var(--token-b9d1fdd9-b883-48f5-ba00-4d02d50a8380); --border-left-width: 3px; --border-right-width: 3px; --border-style: solid; --border-top-width: 3px; background-color: var(--1piqen4, var(--fucn1w)); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: 30px; position: relative; width: 30px; }`,`.framer-TeiVQ .framer-1divfd1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-kmyk46 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1376px; padding: 0px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-hc86xk-container { flex: none; height: auto; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-x84ac7 { align-content: center; align-items: center; background-color: var(--token-d74a0f68-0620-42ad-92b1-9c1ea50ea821); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 40px 32px 160px 32px; position: relative; width: 100%; }`,`.framer-TeiVQ .framer-3wspv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: sticky; top: 120px; width: 420px; }`,`.framer-TeiVQ .framer-l66v72-container { flex: 1 0 0px; height: auto; min-width: 320px; position: relative; width: 1px; }`,`@supports (color: color(display-p3 1 1 1)) { .framer-TeiVQ .framer-i3qzjw { --1piqen4: var(--1c35ino); --1piqen4: var(--1c35ino); --1piqen4: var(--1c35ino); } }`,...Qe,...ge,...Je,...ye,...xe,...ve,...he,...nt,...We,`.framer-TeiVQ[data-border="true"]::after, .framer-TeiVQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,`@media (min-width: 810px) and (max-width: 1439.98px) { .framer-TeiVQ.framer-72rtr7 { width: 810px; } .framer-TeiVQ .framer-fx6zq9 { min-height: 1000px; } .framer-TeiVQ .framer-ve940x { left: 24px; top: 104px; width: 700px; } .framer-TeiVQ .framer-xhz4i8 { left: 24px; right: unset; top: 270px; width: 520px; } .framer-TeiVQ .framer-hk4tsb { padding: 66px 24px 30px 24px; } .framer-TeiVQ .framer-1mhct85 { padding: 105px 24px 60px 24px; } .framer-TeiVQ .framer-1q9nwve { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 18px; justify-content: flex-start; padding: 0px 24px 0px 24px; } .framer-TeiVQ .framer-grfv { flex: none; min-width: unset; width: 100%; } .framer-TeiVQ .framer-16axkfd { max-width: 560px; width: 100%; } .framer-TeiVQ .framer-1kv0xh7, .framer-TeiVQ .framer-4gxvmx { padding: 90px 24px 105px 24px; } .framer-TeiVQ .framer-7sedoc, .framer-TeiVQ .framer-guymti, .framer-TeiVQ .framer-1fn7s38, .framer-TeiVQ .framer-d7dyl9 { gap: 48px; } .framer-TeiVQ .framer-1vsnhj1, .framer-TeiVQ .framer-1wqzxr0, .framer-TeiVQ .framer-3kj41b { height: 300px; } .framer-TeiVQ .framer-136d7g5, .framer-TeiVQ .framer-1ikgntj, .framer-TeiVQ .framer-ga6o1y, .framer-TeiVQ .framer-x6nmki, .framer-TeiVQ .framer-1q7hgqy { padding: 105px 24px 105px 24px; } .framer-TeiVQ .framer-5au7vb { height: 465px; } .framer-TeiVQ .framer-1bvw06j, .framer-TeiVQ .framer-57ztp6, .framer-TeiVQ .framer-1jyqf8m { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-TeiVQ .framer-1t73rid { height: 570px; } .framer-TeiVQ .framer-19kp5l9, .framer-TeiVQ .framer-105i651 { padding: 30px 24px 105px 24px; } .framer-TeiVQ .framer-1d2el9t { grid-template-columns: repeat(2, minmax(280px, 1fr)); } .framer-TeiVQ .framer-6ujpcm { grid-template-columns: repeat(2, minmax(240px, 1fr)); } .framer-TeiVQ .framer-x84ac7 { padding: 30px 24px 120px 24px; }}`,`@media (max-width: 809.98px) { .framer-TeiVQ.framer-72rtr7 { width: 390px; } .framer-TeiVQ .framer-fx6zq9 { gap: 20px; height: 1040px; min-height: 0px; } .framer-TeiVQ .framer-1i1gbte-container { top: 400px; } .framer-TeiVQ .framer-ve940x { left: 20px; top: 100px; width: 350px; } .framer-TeiVQ .framer-xhz4i8 { left: 20px; right: unset; top: 226px; width: 350px; } .framer-TeiVQ .framer-hk4tsb { padding: 48px 20px 22px 20px; } .framer-TeiVQ .framer-dpw68g { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 26px; justify-content: flex-start; } .framer-TeiVQ .framer-1t0liqt, .framer-TeiVQ .framer-1nwamu7, .framer-TeiVQ .framer-1uoyp1f, .framer-TeiVQ .framer-qs5jkq { flex: none; width: 100%; } .framer-TeiVQ .framer-yvkced, .framer-TeiVQ .framer-16axkfd, .framer-TeiVQ .framer-ckbok8, .framer-TeiVQ .framer-e9wxft, .framer-TeiVQ .framer-9d5va7, .framer-TeiVQ .framer-1bzc59x, .framer-TeiVQ .framer-l6rqto, .framer-TeiVQ .framer-sed7jf, .framer-TeiVQ .framer-1c89yhi, .framer-TeiVQ .framer-pt5wg6, .framer-TeiVQ .framer-1l6p9cu { width: 100%; } .framer-TeiVQ .framer-1mhct85 { padding: 77px 20px 44px 20px; } .framer-TeiVQ .framer-1q9nwve { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 18px; justify-content: flex-start; padding: 0px 20px 0px 20px; } .framer-TeiVQ .framer-grfv, .framer-TeiVQ .framer-rg9420, .framer-TeiVQ .framer-16f915b, .framer-TeiVQ .framer-tt10mj, .framer-TeiVQ .framer-az11pu, .framer-TeiVQ .framer-1fk0z15, .framer-TeiVQ .framer-3960pm, .framer-TeiVQ .framer-1o3n4zd, .framer-TeiVQ .framer-hhw3ja, .framer-TeiVQ .framer-l66v72-container { flex: none; min-width: unset; width: 100%; } .framer-TeiVQ .framer-ee6qo1-container { height: 720px; } .framer-TeiVQ .framer-1kv0xh7, .framer-TeiVQ .framer-4gxvmx { padding: 66px 20px 77px 20px; } .framer-TeiVQ .framer-7sedoc, .framer-TeiVQ .framer-1fn7s38, .framer-TeiVQ .framer-d7dyl9 { flex-direction: column; gap: 32px; } .framer-TeiVQ .framer-1n2ao1l, .framer-TeiVQ .framer-3wspv { position: relative; top: unset; width: 100%; } .framer-TeiVQ .framer-1vsnhj1, .framer-TeiVQ .framer-1wqzxr0, .framer-TeiVQ .framer-3kj41b { height: 320px; } .framer-TeiVQ .framer-b184v6, .framer-TeiVQ .framer-1vb2a90, .framer-TeiVQ .framer-1istwhy { flex-direction: column; gap: 10px; } .framer-TeiVQ .framer-8gmm7w, .framer-TeiVQ .framer-dyovjk, .framer-TeiVQ .framer-m8r8ct, .framer-TeiVQ .framer-68zwsw, .framer-TeiVQ .framer-1q0970a, .framer-TeiVQ .framer-13qcilw { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 18px; justify-content: flex-start; } .framer-TeiVQ .framer-136d7g5, .framer-TeiVQ .framer-1ikgntj, .framer-TeiVQ .framer-ga6o1y, .framer-TeiVQ .framer-x6nmki, .framer-TeiVQ .framer-1q7hgqy { padding: 77px 20px 77px 20px; } .framer-TeiVQ .framer-guymti { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 32px; } .framer-TeiVQ .framer-5au7vb, .framer-TeiVQ .framer-1t73rid { flex: none; height: 320px; min-width: unset; width: 100%; } .framer-TeiVQ .framer-1bvw06j, .framer-TeiVQ .framer-57ztp6 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-TeiVQ .framer-m17l88 { flex: none; min-width: unset; position: relative; top: unset; width: 100%; } .framer-TeiVQ .framer-19kp5l9, .framer-TeiVQ .framer-105i651 { padding: 22px 20px 77px 20px; } .framer-TeiVQ .framer-1d2el9t { grid-template-columns: repeat(1, minmax(280px, 1fr)); } .framer-TeiVQ .framer-1jyqf8m { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-TeiVQ .framer-6ujpcm { grid-template-columns: repeat(1, minmax(240px, 1fr)); } .framer-TeiVQ .framer-x84ac7 { padding: 22px 20px 88px 20px; }}`],wp=ie(Sp,Cp,`framer-TeiVQ`),wp.displayName=`Home`,wp.defaultProps={height:14084,width:1440},x(wp,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`../../../framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`../../../framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`../../../framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`../../../framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`../../../framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`../../../framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`../../../framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`}]},...$d,...nf,...hf,...ap,...cp,...w($e),...w(we),...w(Ye),...w(pe),...w(me),...w(De),...w(Ne),...w(rt),...w(Ge)],{supportsExplicitInterCodegen:!0}),wp.loader={load:(e,t)=>{let n=t.locale,r=t.priority,i=T.get(gp(),n,r),a=T.get(vp(),n,r);return A([()=>i.preload(),()=>a.preload()],t)}},Tp={exports:{default:{type:`reactComponent`,name:`FrameraugiA20Il`,slots:[],annotations:{framerColorSyntax:`true`,framerScrollSections:`false`,framerIntrinsicWidth:`1440`,framerLayoutTemplateFlowEffect:`true`,framerAutoSizeImages:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"i3icAZsxD":{"layout":["fixed","auto"]},"KHYETnAbE":{"layout":["fixed","auto"]}}}`,framerImmutableVariables:`true`,framerIntrinsicHeight:`14084`,framerAcceptsLayoutTemplate:`true`,framerDisplayContentsDiv:`false`,framerComponentViewportWidth:`true`,framerResponsiveScreen:`true`,framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})))()}Ep();export{Tp as __FramerMetadata__,wp as default,up as queryParamNames};
//# sourceMappingURL=QNxnqv_HZJb0wjZ6UfHgGzDblx49p8hj8QmCy0zylxc.CtlDG8tO.mjs.map