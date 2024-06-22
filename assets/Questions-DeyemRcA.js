import{d as Re,o as H,c as X,a as C,t as ae,u as ce,h as $e,p as We,b as Ke,_ as Qe,g as ue,y as Ge,f as le,F as Xe,r as Ze,C as Ye,z as et}from"./index-ClVDzDPP.js";import{P as tt}from"./PageTitle-Dp7A2ce0.js";import{I as nt}from"./Inquiry-C3AxoH3O.js";import"./subtitleIcon_lg-BIHoQ05f.js";function ge(e,t){return function(){return e.apply(t,arguments)}}const{toString:rt}=Object.prototype,{getPrototypeOf:re}=Object,M=(e=>t=>{const n=rt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>M(t)===e),z=e=>t=>typeof t===e,{isArray:B}=Array,k=z("undefined");function st(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=T("ArrayBuffer");function ot(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const it=z("string"),g=z("function"),xe=z("number"),v=e=>e!==null&&typeof e=="object",at=e=>e===!0||e===!1,q=e=>{if(M(e)!=="object")return!1;const t=re(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ct=T("Date"),ut=T("File"),lt=T("Blob"),dt=T("FileList"),ft=e=>v(e)&&g(e.pipe),pt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=M(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},ht=T("URLSearchParams"),mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Te(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _e=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ce=e=>!k(e)&&e!==_e;function Z(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&Te(t,s)||s;q(t[o])&&q(r)?t[o]=Z(t[o],r):q(r)?t[o]=Z({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const yt=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,o)=>{n&&g(s)?e[o]=ge(s,n):e[o]=s},{allOwnKeys:r}),e),wt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Et=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&re(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},St=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ot=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Rt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&re(Uint8Array)),gt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},At=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xt=T("HTMLFormElement"),Tt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=T("RegExp"),Pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ct=e=>{Pe(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Pt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},Nt=()=>{},Ft=(e,t)=>(e=+e,Number.isFinite(e)?e:t),W="abcdefghijklmnopqrstuvwxyz",fe="0123456789",Ne={DIGIT:fe,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+fe},Bt=(e=16,t=Ne.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Dt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const kt=e=>{const t=new Array(10),n=(r,s)=>{if(v(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return L(r,(i,c)=>{const h=n(i,s+1);!k(h)&&(o[c]=h)}),t[s]=void 0,o}}return r};return n(e,0)},Lt=T("AsyncFunction"),Ut=e=>e&&(v(e)||g(e))&&g(e.then)&&g(e.catch),a={isArray:B,isArrayBuffer:Ae,isBuffer:st,isFormData:pt,isArrayBufferView:ot,isString:it,isNumber:xe,isBoolean:at,isObject:v,isPlainObject:q,isUndefined:k,isDate:ct,isFile:ut,isBlob:lt,isRegExp:_t,isFunction:g,isStream:ft,isURLSearchParams:ht,isTypedArray:Rt,isFileList:dt,forEach:L,merge:Z,extend:yt,trim:mt,stripBOM:wt,inherits:bt,toFlatObject:Et,kindOf:M,kindOfTest:T,endsWith:St,toArray:Ot,forEachEntry:gt,matchAll:At,isHTMLForm:xt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Pe,freezeMethods:Ct,toObjectSet:Pt,toCamelCase:Tt,noop:Nt,toFiniteNumber:Ft,findKey:Te,global:_e,isContextDefined:Ce,ALPHABET:Ne,generateString:Bt,isSpecCompliantForm:Dt,toJSONObject:kt,isAsyncFn:Lt,isThenable:Ut};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Fe=m.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(m,Be);Object.defineProperty(Fe,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Fe);return a.toFlatObject(e,i,function(h){return h!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const jt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function De(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=De(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ht(e){return a.isArray(e)&&!e.some(Y)}const qt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,E){return!a.isUndefined(E[d])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!h&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?h&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,d,E){let w=f;if(f&&!E&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Ht(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(w=a.toArray(f)))return d=De(d),w.forEach(function(S,P){!(a.isUndefined(S)||S===null)&&t.append(i===!0?pe([d],P,o):i===null?d:d+"[]",p(S))}),!1}return Y(f)?!0:(t.append(pe(E,d,o),p(f)),!1)}const u=[],y=Object.assign(qt,{defaultVisitor:l,convertValue:p,isVisitable:Y});function R(f,d){if(!a.isUndefined(f)){if(u.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));u.push(f),a.forEach(f,function(w,O){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(O)?O.trim():O,d,y))===!0&&R(w,d?d.concat(O):[O])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function se(e,t){this._pairs=[],e&&J(e,this,t)}const ke=se.prototype;ke.append=function(t,n){this._pairs.push([t,n])};ke.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function It(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||It,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new se(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class me{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Mt=typeof URLSearchParams<"u"?URLSearchParams:se,zt=typeof FormData<"u"?FormData:null,vt=typeof Blob<"u"?Blob:null,Jt={isBrowser:!0,classes:{URLSearchParams:Mt,FormData:zt,Blob:vt},protocols:["http","https","file","blob","url","data"]},je=typeof window<"u"&&typeof document<"u",Vt=(e=>je&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),$t=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Wt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:je,hasStandardBrowserEnv:Vt,hasStandardBrowserWebWorkerEnv:$t},Symbol.toStringTag,{value:"Module"})),x={...Wt,...Jt};function Kt(e,t){return J(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Qt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Gt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function He(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),h=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,h?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Gt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Qt(r),s,n,0)}),n}return null}function Xt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const U={transitional:Ue,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return J(c?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Xt(t)):t}],transformResponse:[function(t){const n=this.transitional||U.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{U.headers[e]={}});const Zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function en(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const tn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function K(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function nn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function rn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,h,p){const l=D(h);if(!l)throw new Error("header name must be a non-empty string");const u=a.findKey(s,l);(!u||s[u]===void 0||p===!0||p===void 0&&s[u]!==!1)&&(s[u||h]=I(c))}const i=(c,h)=>a.forEach(c,(p,l)=>o(p,l,h));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!tn(t)?i(Yt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return en(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||K(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const c=a.findKey(r,i);c&&(!n||K(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||K(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=I(s),delete n[o];return}const c=t?nn(o):String(o).trim();c!==o&&delete n[o],n[c]=I(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=D(i);r[c]||(rn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function Q(e,t){const n=this||U,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function qe(e){return!!(e&&e.__CANCEL__)}function j(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(j,m,{__CANCEL__:!0});function sn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const on=x.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function an(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!an(t)?cn(e,t):t}const un=x.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function ln(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),l=r[o];i||(i=p),n[s]=h,r[s]=p;let u=o,y=0;for(;u!==s;)y+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),p-i<t)return;const R=l&&p-l;return R?Math.round(y*1e3/R):void 0}}function we(e,t){let n=0;const r=dn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,h=r(c),p=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:h||void 0,estimated:h&&i&&p?(i-o)/h:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const fn=typeof XMLHttpRequest<"u",pn=fn&&function(e){return new Promise(function(n,r){let s=e.data;const o=A.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,h;function p(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let l;if(a.isFormData(s)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((l=o.getContentType())!==!1){const[d,...E]=l?l.split(";").map(w=>w.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...E].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+E))}const y=Ie(e.baseURL,e.url);u.open(e.method.toUpperCase(),Le(y,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function R(){if(!u)return;const d=A.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:d,config:e,request:u};sn(function(S){n(S),p()},function(S){r(S),p()},w),u=null}if("onloadend"in u?u.onloadend=R:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(R)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Ue;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new m(E,w.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},x.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&un(y))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&on.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(E,w){u.setRequestHeader(w,E)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",we(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",we(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=d=>{u&&(r(!d||d.type?new j(null,e,u):d),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const f=ln(y);if(f&&x.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},ee={http:jt,xhr:pn};a.forEach(ee,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const be=e=>`- ${e}`,hn=e=>a.isFunction(e)||e===null||e===!1,Me={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!hn(n)&&(r=ee[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,h])=>`adapter ${c} `+(h===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(be).join(`
`):" "+be(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ee};function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function Ee(e){return G(e),e.headers=A.from(e.headers),e.data=Q.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Me.getAdapter(e.adapter||U.adapter)(e).then(function(r){return G(e),r.data=Q.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return qe(r)||(G(e),r&&r.response&&(r.response.data=Q.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Se=e=>e instanceof A?{...e}:e;function F(e,t){t=t||{};const n={};function r(p,l,u){return a.isPlainObject(p)&&a.isPlainObject(l)?a.merge.call({caseless:u},p,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(p,l,u){if(a.isUndefined(l)){if(!a.isUndefined(p))return r(void 0,p,u)}else return r(p,l,u)}function o(p,l){if(!a.isUndefined(l))return r(void 0,l)}function i(p,l){if(a.isUndefined(l)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,l)}function c(p,l,u){if(u in t)return r(p,l);if(u in e)return r(void 0,p)}const h={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(p,l)=>s(Se(p),Se(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const u=h[l]||s,y=u(e[l],t[l],l);a.isUndefined(y)&&u!==c||(n[l]=y)}),n}const ze="1.6.8",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Oe={};oe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Oe[i]&&(Oe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],h=c===void 0||i(c,o,e);if(h!==!0)throw new m("option "+o+" must be "+h,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const te={assertOptions:mn,validators:oe},_=te.validators;class N{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:te.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=A.concat(i,o);const c=[];let h=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(h=h&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const p=[];this.interceptors.response.forEach(function(d){p.push(d.fulfilled,d.rejected)});let l,u=0,y;if(!h){const f=[Ee.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,p),y=f.length,l=Promise.resolve(n);u<y;)l=l.then(f[u++],f[u++]);return l}y=c.length;let R=n;for(u=0;u<y;){const f=c[u++],d=c[u++];try{R=f(R)}catch(E){d.call(this,E);break}}try{l=Ee.call(this,R)}catch(f){return Promise.reject(f)}for(u=0,y=p.length;u<y;)l=l.then(p[u++],p[u++]);return l}getUri(t){t=F(this.defaults,t);const n=Ie(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){N.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}N.prototype[t]=n(),N.prototype[t+"Form"]=n(!0)});class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new j(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}function yn(e){return function(n){return e.apply(null,n)}}function wn(e){return a.isObject(e)&&e.isAxiosError===!0}const ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ne).forEach(([e,t])=>{ne[t]=e});function ve(e){const t=new N(e),n=ge(N.prototype.request,t);return a.extend(n,N.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ve(F(e,s))},n}const b=ve(U);b.Axios=N;b.CanceledError=j;b.CancelToken=ie;b.isCancel=qe;b.VERSION=ze;b.toFormData=J;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=yn;b.isAxiosError=wn;b.mergeConfig=F;b.AxiosHeaders=A;b.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=Me.getAdapter;b.HttpStatusCode=ne;b.default=b;const bn=async e=>{const t={data:null,error:null};return await e.then(n=>t.data=n.data).catch(n=>{const r=n.response;if(r===void 0)return t.error=n;if(!r.data)return t.error=`${r.status} ${r.statusText}`;t.error=r.data}),t},V=(e,t)=>{const n=new AbortController,r=b.create({baseURL:e,signal:n.signal});return{...Object.entries(t).reduce((o,[i,c])=>{const{method:h,url:p,needParams:l,needBody:u,needQuery:y,dataType:R,...f}=c,d=p.endsWith("/")?p.slice(0,-1):p,E=async(...w)=>{let O,S,P;l&&u&&y?[O,S,P]=w:u&&l?[O,S]=w:u&&y?[O,P]=w:l&&y?[S,P]=w:u?[O]=w:l?[S]=w:y&&([P]=w);const Ve={method:h,url:(S==null?void 0:S.length)!==0?`${d}/${S==null?void 0:S.join("/")}`:d,...f,params:P,data:O};return await bn(r(Ve))};return{...o,[i]:E}},{}),cancel:n.abort}},En=e=>V(e,{getHomePage:{method:"get",url:"/",dataType:"IFeatures"},editHomePage:{method:"put",url:"/",needParams:!0,needBody:!0}}),Sn=e=>V(e,{getProduct:{method:"get",url:"/",dataType:"IProducts"},addProduct:{method:"post",url:"/",needBody:!0},editProduct:{method:"put",url:"/",needParams:!0,needBody:!0},deleteProduct:{method:"delete",url:"/",needParams:!0}}),On=e=>V(e,{getHistory:{method:"get",url:"/",dataType:"IHistorys"},addHistory:{method:"post",url:"/",needBody:!0},editHistory:{method:"put",url:"/",needParams:!0,needBody:!0},deleteHistory:{method:"delete",url:"/",needParams:!0}}),Rn=e=>V(e,{getQuestion:{method:"get",url:"/",dataType:"IQuestions"},addQuestion:{method:"post",url:"/",needBody:!0},editQuestion:{method:"put",url:"/",needParams:!0,needBody:!0},deleteQuestion:{method:"delete",url:"/",needParams:!0}}),$="http://localhost:8001/server";En($);Sn($+"/product");On($+"/history");Rn($+"/question");const gn="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12.9995'%20cy='13.0005'%20r='12.0005'%20stroke='%23DC6A29'%20stroke-width='2'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.6255%208.62506C13.6255%208.27985%2013.3457%208%2013.0005%208C12.6553%208%2012.3754%208.27985%2012.3754%208.62506V12.3754H8.62506C8.27985%2012.3754%208%2012.6553%208%2013.0005C8%2013.3457%208.27985%2013.6255%208.62506%2013.6255H12.3754V17.3759C12.3754%2017.7211%2012.6553%2018.001%2013.0005%2018.001C13.3457%2018.001%2013.6255%2017.7211%2013.6255%2017.3759V13.6255H17.3759C17.7211%2013.6255%2018.001%2013.3457%2018.001%2013.0005C18.001%2012.6553%2017.7211%2012.3754%2017.3759%2012.3754H13.6255V8.62506Z'%20fill='%23DC6A29'/%3e%3c/svg%3e",An="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='13'%20cy='13'%20r='12'%20stroke='%23DC6A29'%20stroke-width='2'/%3e%3cpath%20d='M7.85714%2013H18.1429C18.7143%2013%2019%2013.1667%2019%2013.5C19%2013.8333%2018.7143%2014%2018.1429%2014H7.85714C7.28571%2014%207%2013.8333%207%2013.5C7%2013.1667%207.28571%2013%207.85714%2013Z'%20fill='%23DC6A29'/%3e%3c/svg%3e",Je=e=>(We("data-v-36440d39"),e=e(),Ke(),e),xn={class:"p-3 sm:p-6 bg-white rounded-20px questionShadow"},Tn=Je(()=>C("span",{class:"text-5 sm:text-9 color-primary select-none specialFont"},"Q",-1)),_n={class:"sm:text-5"},Cn=["src"],Pn=Je(()=>C("span",{class:"text-[calc(1.25rem-2px)] sm:text-[calc(2.25rem-2px)] color-white z-0 select-none specialFont relative after:absolute after:left-0 after:content-['A'] after:text-stroke-2 after:text-stroke-primary after:z--1"},"A",-1)),Nn={class:"lh-1.5em text-justify"},Fn=Re({__name:"FAQ",props:{question:{},isOpen:{type:Boolean}},emits:["open"],setup(e,{emit:t}){const n=t;return(r,s)=>(H(),X("article",xn,[C("div",{class:"flex items-center gap-3",onClick:s[0]||(s[0]=o=>n("open"))},[Tn,C("span",_n,ae(r.question.question),1),C("img",{src:r.isOpen?ce(An):ce(gn),alt:"open/opened icon",class:"ml-auto w-25px h-25px pointer"},null,8,Cn)]),C("div",{class:$e(["grid grid-cols-[auto|1fr|25px] gap-3 grid-rows-[0fr] children:overflow-hidden transition-duration-200 transition-ease-linear",{"mt-2 grid-rows-[1fr]":r.isOpen}])},[Pn,C("span",Nn,ae(r.question.answer),1)],2)]))}}),Bn=Qe(Fn,[["__scopeId","data-v-36440d39"]]),Dn={class:"mx-4 sm:mx-13% mb-12 sm:mb-28 flex flex-col gap-4"},kn="如果您有任何建議或意見，我們非常歡迎您來信或傳Line訊息。綠采團隊將真誠聆聽，並以最快的速度回應您。謝謝！",Ln="聯絡我們",In=Re({__name:"Questions",setup(e){Ye();const t=ue([]),n=ue(null),r=s=>n.value=n.value===s?null:s;return Ge(async()=>{t.value=[{question:"我剛創業，紙盒數量不多能做嗎?",answer:"肯定可以的~ 我們曾經也是從小做起，很能理解被忽視的感受，我們不會因為量少， 或無經驗，就婉拒你的到來。彩盒、紙袋起訂量 300 個起，但是每道工序的機器要運 轉都會有一個基本價喔，就像計程車就算只搭 10 公尺一樣要付一個基本費，所以我 們會建議製作量最好要 500-1000 個以上會比較划算實惠喔~"},{question:"除了找你們做紙盒紙袋還能做什麼?",answer:"紙盒、紙袋、紙箱印刷&設計 還有任何平面印刷包括:名片、吊牌、貼紙、DM、書籍、菜單、紙資料夾、聯單、電 腦報表紙、信封、大圖輸出、帆布都可以喔!其他品項也可以聯絡我們詢問討論。"},{question:"我是設計師，我可以自備檔案請你們代工就好了嗎?",answer:"當然可以!!!!!!!!!!!!!"}]}),(s,o)=>(H(),X("section",null,[le(tt,{text_cn:["常見","問題"],text_eng:"Q & A"}),C("div",Dn,[(H(!0),X(Xe,null,Ze(t.value,(i,c)=>(H(),et(Bn,{key:c,question:i,isOpen:c===n.value,onOpen:h=>r(c)},null,8,["question","isOpen","onOpen"]))),128))]),le(nt,{showImg:!1,text:kn,buttonText:Ln})]))}});export{In as default};
