(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function k(){}function W(e,t){for(const n in t)e[n]=t[n];return e}function et(e){return e()}function Oe(){return Object.create(null)}function T(e){e.forEach(et)}function wt(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function vt(e){return Object.keys(e).length===0}function Le(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function v(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode.removeChild(e)}function xt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function S(e){return document.createElement(e)}function St(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ve(e){return document.createTextNode(e)}function J(){return ve(" ")}function tt(){return ve("")}function X(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function x(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Me(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:x(e,r,t[r])}function Ae(e,t){for(const n in t)x(e,n,t[n])}function kt(e){return Array.from(e.childNodes)}function It(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Fe(e,t){e.value=t==null?"":t}function Ne(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function Ct(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}let B;function N(e){B=e}function xe(){if(!B)throw new Error("Function called outside component initialization");return B}function jt(e){xe().$$.on_mount.push(e)}function Et(e){xe().$$.on_destroy.push(e)}function Pt(){const e=xe();return(t,n,{cancelable:r=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=Ct(t,n,{cancelable:r});return o.slice().forEach(s=>{s.call(e,i)}),!i.defaultPrevented}return!0}}const F=[],ae=[],U=[],$e=[],Tt=Promise.resolve();let de=!1;function Ot(){de||(de=!0,Tt.then(nt))}function pe(e){U.push(e)}const le=new Set;let Q=0;function nt(){const e=B;do{for(;Q<F.length;){const t=F[Q];Q++,N(t),Lt(t.$$)}for(N(null),F.length=0,Q=0;ae.length;)ae.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];le.has(n)||(le.add(n),n())}U.length=0}while(F.length);for(;$e.length;)$e.pop()();de=!1,le.clear(),N(e)}function Lt(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pe)}}const V=new Set;let j;function Mt(){j={r:0,c:[],p:j}}function At(){j.r||T(j.c),j=j.p}function E(e,t){e&&e.i&&(V.delete(e),e.i(t))}function $(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),j.c.push(()=>{V.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ot(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const s=e[i],c=t[i];if(c){for(const u in s)u in c||(r[u]=1);for(const u in c)o[u]||(n[u]=c[u],o[u]=1);e[i]=c}else for(const u in s)o[u]=1}for(const s in r)s in n||(n[s]=void 0);return n}function Se(e){e&&e.c()}function ee(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:c}=e.$$;o&&o.m(t,n),r||pe(()=>{const u=i.map(et).filter(wt);s?s.push(...u):T(u),e.$$.on_mount=[]}),c.forEach(pe)}function te(e,t){const n=e.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(e,t){e.$$.dirty[0]===-1&&(F.push(e),Ot(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(e,t,n,r,o,i,s,c=[-1]){const u=B;N(e);const l=e.$$={fragment:null,ctx:null,props:i,update:k,not_equal:o,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Oe(),dirty:c,skip_bound:!1,root:t.target||u.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(a,h,...m)=>{const d=m.length?m[0]:h;return l.ctx&&o(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),f&&Ft(e,a)),h}):[],l.update(),f=!0,T(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const a=kt(t.target);l.fragment&&l.fragment.l(a),a.forEach(I)}else l.fragment&&l.fragment.c();t.intro&&E(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),nt()}N(u)}class oe{$destroy(){te(this,1),this.$destroy=k}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!vt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Nt(){return window.go.main.App.Initialize()}const D=/^[a-z0-9]+(-[a-z0-9]+)*$/,re=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),u=o.pop(),l={provider:o.length>0?o[0]:r,prefix:u,name:c};return t&&!K(l)?null:l}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!K(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return t&&!K(c,n)?null:c}return null},K=(e,t)=>e?!!((e.provider===""||e.provider.match(D))&&(t&&e.prefix===""||e.prefix.match(D))&&e.name.match(D)):!1,rt=Object.freeze({left:0,top:0,width:16,height:16}),Y=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ie=Object.freeze({...rt,...Y}),he=Object.freeze({...ie,body:"",hidden:!1});function $t(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function De(e,t){const n=$t(e,t);for(const r in he)r in Y?r in e&&!(r in n)&&(n[r]=Y[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Dt(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,u=c&&i(c);u&&(o[s]=[c].concat(u))}return o[s]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function Bt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(c){i=De(r[c]||o[c],i)}return s(t),n.forEach(s),De(e,i)}function it(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Dt(e);for(const o in r){const i=r[o];i&&(t(o,Bt(e,o,i)),n.push(o))}return n}const zt={provider:"",aliases:{},not_found:{},...rt};function ue(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function st(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ue(e,zt))return null;const n=t.icons;for(const o in n){const i=n[o];if(!o.match(D)||typeof i.body!="string"||!ue(i,he))return null}const r=t.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(D)||typeof s!="string"||!n[s]&&!r[s]||!ue(i,he))return null}return t}const Be=Object.create(null);function Rt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function P(e,t){const n=Be[e]||(Be[e]=Object.create(null));return n[t]||(n[t]=Rt(e,t))}function ke(e,t){return st(t)?it(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function qt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let z=!1;function ct(e){return typeof e=="boolean"&&(z=e),z}function Qt(e){const t=typeof e=="string"?re(e,!0,z):e;if(t){const n=P(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Ht(e,t){const n=re(e,!0,z);if(!n)return!1;const r=P(n.provider,n.prefix);return qt(r,n.name,t)}function Ut(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),z&&!t&&!e.prefix){let o=!1;return st(e)&&(e.prefix="",it(e,(i,s)=>{s&&Ht(i,s)&&(o=!0)})),o}const n=e.prefix;if(!K({provider:t,prefix:n,name:"a"}))return!1;const r=P(t,n);return!!ke(r,e)}const lt=Object.freeze({width:null,height:null}),ut=Object.freeze({...lt,...Y}),Vt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Kt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ze(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Vt);if(r===null||!r.length)return e;const o=[];let i=r.shift(),s=Kt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*t*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}function Gt(e,t){const n={...ie,...e},r={...ut,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(m=>{const d=[],_=m.hFlip,y=m.vFlip;let p=m.rotate;_?y?p+=2:(d.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),d.push("scale(-1 1)"),o.top=o.left=0):y&&(d.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),d.push("scale(1 -1)"),o.top=o.left=0);let b;switch(p<0&&(p-=Math.floor(p/4)*4),p=p%4,p){case 1:b=o.height/2+o.top,d.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:d.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,d.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}p%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),d.length&&(i='<g transform="'+d.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,u=o.width,l=o.height;let f,a;return s===null?(a=c===null?"1em":c==="auto"?l:c,f=ze(a,u/l)):(f=s==="auto"?u:s,a=c===null?ze(f,l/u):c==="auto"?l:c),{attributes:{width:f.toString(),height:a.toString(),viewBox:o.left.toString()+" "+o.top.toString()+" "+u.toString()+" "+l.toString()},body:i}}const Wt=/\sid="(\S+)"/g,Jt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Xt=0;function Yt(e,t=Jt){const n=[];let r;for(;r=Wt.exec(e);)n.push(r[1]);return n.length&&n.forEach(o=>{const i=typeof t=="function"?t(o):t+(Xt++).toString(),s=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),e}const ge=Object.create(null);function Zt(e,t){ge[e]=t}function me(e){return ge[e]||ge[""]}function Ie(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Ce=Object.create(null),A=["https://api.simplesvg.com","https://api.unisvg.com"],G=[];for(;A.length>0;)A.length===1||Math.random()>.5?G.push(A.shift()):G.push(A.pop());Ce[""]=Ie({resources:["https://api.iconify.design"].concat(G)});function en(e,t){const n=Ie(t);return n===null?!1:(Ce[e]=n,!0)}function je(e){return Ce[e]}const tn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Re=tn();function nn(e,t){const n=je(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=t+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function on(e){return e===404}const rn=(e,t,n)=>{const r=[],o=nn(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach((u,l)=>{c+=u.length+1,c>=o&&l>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=u.length),s.icons.push(u)}),r.push(s),r};function sn(e){if(typeof e=="string"){const t=je(e);if(t)return t.path}return"/"}const cn=(e,t,n)=>{if(!Re){n("abort",424);return}let r=sn(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),u=new URLSearchParams({icons:c});r+=i+".json?"+u.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;Re(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(on(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},ln={prepare:rn,send:cn};function un(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,u=n[i]||(n[i]=Object.create(null)),l=u[s]||(u[s]=P(i,s));let f;c in l.icons?f=t.loaded:s===""||l.missing.has(c)?f=t.missing:f=t.pending;const a={provider:i,prefix:s,name:c};f.push(a)}),t}function ft(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function fn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(u=>{if(u.prefix!==o)return!0;const l=u.name;if(e.icons[l])s.loaded.push({provider:r,prefix:o,name:l});else if(e.missing.has(l))s.missing.push({provider:r,prefix:o,name:l});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||ft([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let an=0;function dn(e,t,n){const r=an++,o=ft.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function pn(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const i=typeof o=="string"?re(o,t,n):o;i&&r.push(i)}),r}var hn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function gn(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let g=e.resources.slice(0);for(s=[];g.length>1;){const w=Math.floor(Math.random()*g.length);s.push(g[w]),g=g.slice(0,w).concat(g.slice(w+1))}s=s.concat(g)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let u="pending",l=0,f,a=null,h=[],m=[];typeof r=="function"&&m.push(r);function d(){a&&(clearTimeout(a),a=null)}function _(){u==="pending"&&(u="aborted"),d(),h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function y(g,w){w&&(m=[]),typeof g=="function"&&m.push(g)}function p(){return{startTime:c,payload:t,status:u,queriesSent:l,queriesPending:h.length,subscribe:y,abort:_}}function b(){u="failed",m.forEach(g=>{g(void 0,f)})}function Te(){h.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),h=[]}function _t(g,w,M){const q=w!=="success";switch(h=h.filter(C=>C!==g),u){case"pending":break;case"failed":if(q||!e.dataAfterTimeout)return;break;default:return}if(w==="abort"){f=M,b();return}if(q){f=M,h.length||(s.length?ce():b());return}if(d(),Te(),!e.random){const C=e.resources.indexOf(g.resource);C!==-1&&C!==e.index&&(e.index=C)}u="completed",m.forEach(C=>{C(M)})}function ce(){if(u!=="pending")return;d();const g=s.shift();if(g===void 0){if(h.length){a=setTimeout(()=>{d(),u==="pending"&&(Te(),b())},e.timeout);return}b();return}const w={status:"pending",resource:g,callback:(M,q)=>{_t(w,M,q)}};h.push(w),l++,a=setTimeout(ce,e.rotate),n(g,t,w.callback)}return setTimeout(ce),p}function at(e){const t={...hn,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,u,l){const f=gn(t,c,u,(a,h)=>{r(),l&&l(a,h)});return n.push(f),f}function i(c){return n.find(u=>c(u))||null}return{query:o,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function qe(){}const fe=Object.create(null);function mn(e){if(!fe[e]){const t=je(e);if(!t)return;const n=at(t),r={config:t,redundancy:n};fe[e]=r}return fe[e]}function yn(e,t,n){let r,o;if(typeof e=="string"){const i=me(e);if(!i)return n(void 0,424),qe;o=i.send;const s=mn(e);s&&(r=s.redundancy)}else{const i=Ie(e);if(i){r=at(i);const s=e.resources?e.resources[0]:"",c=me(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),qe):r.query(t,o,n)().abort}const Qe="iconify2",R="iconify",dt=R+"-count",He=R+"-version",pt=36e5,bn=168;function ye(e,t){try{return e.getItem(t)}catch{}}function Ee(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Ue(e,t){try{e.removeItem(t)}catch{}}function be(e,t){return Ee(e,dt,t.toString())}function _e(e){return parseInt(ye(e,dt))||0}const se={local:!0,session:!0},ht={local:new Set,session:new Set};let Pe=!1;function _n(e){Pe=e}let H=typeof window>"u"?{}:window;function gt(e){const t=e+"Storage";try{if(H&&H[t]&&typeof H[t].length=="number")return H[t]}catch{}se[e]=!1}function mt(e,t){const n=gt(e);if(!n)return;const r=ye(n,He);if(r!==Qe){if(r){const c=_e(n);for(let u=0;u<c;u++)Ue(n,R+u.toString())}Ee(n,He,Qe),be(n,0);return}const o=Math.floor(Date.now()/pt)-bn,i=c=>{const u=R+c.toString(),l=ye(n,u);if(typeof l=="string"){try{const f=JSON.parse(l);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Ue(n,u)}};let s=_e(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,be(n,s)):ht[e].add(c))}function yt(){if(!Pe){_n(!0);for(const e in se)mt(e,t=>{const n=t.data,r=t.provider,o=n.prefix,i=P(r,o);if(!ke(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function wn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in se)mt(r,o=>{const i=o.data;return o.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function vn(e,t){Pe||yt();function n(r){let o;if(!se[r]||!(o=gt(r)))return;const i=ht[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=_e(o),!be(o,s+1))return;const c={cached:Math.floor(Date.now()/pt),provider:e.provider,data:t};return Ee(o,R+s.toString(),JSON.stringify(c))}t.lastModified&&!wn(e,t.lastModified)||!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Ve(){}function xn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,fn(e)}))}function Sn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let i;if(!o||!(i=me(n)))return;i.prepare(n,r,o).forEach(c=>{yn(n,c,u=>{if(typeof u!="object")c.icons.forEach(l=>{e.missing.add(l)});else try{const l=ke(e,u);if(!l.length)return;const f=e.pendingIcons;f&&l.forEach(a=>{f.delete(a)}),vn(e,u)}catch(l){console.error(l)}xn(e)})})}))}const kn=(e,t)=>{const n=pn(e,!0,ct()),r=un(n);if(!r.pending.length){let u=!0;return t&&setTimeout(()=>{u&&t(r.loaded,r.missing,r.pending,Ve)}),()=>{u=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(u=>{const{provider:l,prefix:f}=u;if(f===c&&l===s)return;s=l,c=f,i.push(P(l,f));const a=o[l]||(o[l]=Object.create(null));a[f]||(a[f]=[])}),r.pending.forEach(u=>{const{provider:l,prefix:f,name:a}=u,h=P(l,f),m=h.pendingIcons||(h.pendingIcons=new Set);m.has(a)||(m.add(a),o[l][f].push(a))}),i.forEach(u=>{const{provider:l,prefix:f}=u;o[l][f].length&&Sn(u,o[l][f])}),t?dn(t,r,i):Ve};function In(e,t){const n={...e};for(const r in t){const o=t[r],i=typeof o;r in lt?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Cn=/[\s,]+/;function jn(e,t){t.split(Cn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function En(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(e.slice(0,e.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return t}function Pn(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Tn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function On(e){return'url("data:image/svg+xml,'+Tn(e)+'")'}const Ke={...ut,inline:!1},Ln={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Mn={display:"inline-block"},we={"background-color":"currentColor"},bt={"background-color":"transparent"},Ge={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},We={"-webkit-mask":we,mask:we,background:bt};for(const e in We){const t=We[e];for(const n in Ge)t[e+"-"+n]=Ge[n]}function Je(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function An(e,t){const n=In(Ke,t),r=t.mode||"svg",o=r==="svg"?{...Ln}:{};let i=typeof t.style=="string"?t.style:"";for(let y in t){const p=t[y];if(p!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[y]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&jn(n,p);break;case"color":i=i+(i.length>0&&i.trim().slice(-1)!==";"?";":"")+"color: "+p+"; ";break;case"rotate":typeof p=="string"?n[y]=En(p):typeof p=="number"&&(n[y]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete o["aria-hidden"];break;default:if(y.slice(0,3)==="on:")break;Ke[y]===void 0&&(o[y]=p)}}const s=Gt(e,n),c=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),r==="svg"){Object.assign(o,c),i!==""&&(o.style=i);let y=0,p=t.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),{svg:!0,attributes:o,body:Yt(s.body,p?()=>p+"ID"+y++:"iconifySvelte")}}const{body:u,width:l,height:f}=e,a=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),h=Pn(u,{...c,width:l+"",height:f+""}),d={"--svg":On(h),width:Je(c.width),height:Je(c.height),...Mn,...a?we:bt};let _="";for(const y in d)_+=y+": "+d[y]+";";return o.style=_+i,{svg:!1,attributes:o}}ct(!0);Zt("",ln);if(typeof document<"u"&&typeof window<"u"){yt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ut(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;en(n,o)||console.error(r)}catch{console.error(r)}}}}function Fn(e,t,n,r,o){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",i(),{data:{...ie,...e}};let s;if(typeof e!="string"||(s=re(e,!1,!0))===null)return i(),null;const c=Qt(s);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:kn([s],r)}),null;i(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const u=["iconify"];return s.prefix!==""&&u.push("iconify--"+s.prefix),s.provider!==""&&u.push("iconify--"+s.provider),{data:c,classes:u}}function Nn(e,t){return e?An({...ie,...e},t):null}function Xe(e){let t;function n(i,s){return i[0].svg?Dn:$n}let r=n(e),o=r(e);return{c(){o.c(),t=tt()},m(i,s){o.m(i,s),O(i,t,s)},p(i,s){r===(r=n(i))&&o?o.p(i,s):(o.d(1),o=r(i),o&&(o.c(),o.m(t.parentNode,t)))},d(i){o.d(i),i&&I(t)}}}function $n(e){let t,n=[e[0].attributes],r={};for(let o=0;o<n.length;o+=1)r=W(r,n[o]);return{c(){t=S("span"),Me(t,r)},m(o,i){O(o,t,i)},p(o,i){Me(t,r=ot(n,[i&1&&o[0].attributes]))},d(o){o&&I(t)}}}function Dn(e){let t,n=e[0].body+"",r=[e[0].attributes],o={};for(let i=0;i<r.length;i+=1)o=W(o,r[i]);return{c(){t=St("svg"),Ae(t,o)},m(i,s){O(i,t,s),t.innerHTML=n},p(i,s){s&1&&n!==(n=i[0].body+"")&&(t.innerHTML=n),Ae(t,o=ot(r,[s&1&&i[0].attributes]))},d(i){i&&I(t)}}}function Bn(e){let t,n=e[0]&&Xe(e);return{c(){n&&n.c(),t=tt()},m(r,o){n&&n.m(r,o),O(r,t,o)},p(r,[o]){r[0]?n?n.p(r,o):(n=Xe(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:k,o:k,d(r){n&&n.d(r),r&&I(t)}}}function zn(e,t,n){const r={name:"",loading:null,destroyed:!1};let o=!1,i=0,s;const c=l=>{typeof t.onLoad=="function"&&t.onLoad(l),Pt()("load",{icon:l})};function u(){n(3,i++,i)}return jt(()=>{n(2,o=!0)}),Et(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),e.$$set=l=>{n(6,t=W(W({},t),Le(l)))},e.$$.update=()=>{{const l=Fn(t.icon,r,o,u,c);n(0,s=l?Nn(l.data,t):null),s&&l.classes&&n(0,s.attributes.class=(typeof t.class=="string"?t.class+" ":"")+l.classes.join(" "),s)}},t=Le(t),[s,r,o,i]}class Rn extends oe{constructor(t){super(),ne(this,t,zn,Bn,Z,{})}}function qn(e){let t,n,r,o,i=e[1].time+"",s,c,u,l,f,a,h,m;return l=new Rn({props:{icon:"material-symbols:play-arrow-rounded"}}),{c(){t=S("div"),n=S("input"),r=J(),o=S("div"),s=ve(i),c=J(),u=S("button"),Se(l.$$.fragment),x(n,"class","svelte-gsk7xu"),x(u,"class","svelte-gsk7xu"),x(o,"class","right svelte-gsk7xu"),x(t,"class",f="card "+L+" svelte-gsk7xu")},m(d,_){O(d,t,_),v(t,n),Fe(n,e[0]),v(t,r),v(t,o),v(o,s),v(o,c),v(o,u),ee(l,u,null),e[5](t),a=!0,h||(m=[X(n,"input",e[4]),X(u,"click",e[3])],h=!0)},p(d,[_]){_&1&&n.value!==d[0]&&Fe(n,d[0]),(!a||_&2)&&i!==(i=d[1].time+"")&&It(s,i),(!a||_&0&&f!==(f="card "+L+" svelte-gsk7xu"))&&x(t,"class",f)},i(d){a||(E(l.$$.fragment,d),a=!0)},o(d){$(l.$$.fragment,d),a=!1},d(d){d&&I(t),te(l),e[5](null),h=!1,T(m)}}}let L;function Qn(e,t,n){let{title:r}=t,{data:o}=t,i;function s(){L&&L!==i&&L.pause(),L=i}function c(){r=this.value,n(0,r)}function u(l){ae[l?"unshift":"push"](()=>{i=l,n(2,i)})}return e.$$set=l=>{"title"in l&&n(0,r=l.title),"data"in l&&n(1,o=l.data)},[r,o,i,s,c,u]}class Hn extends oe{constructor(t){super(),ne(this,t,Qn,qn,Z,{title:0,data:1})}}function Un(e){let t,n,r,o,i,s;return{c(){t=S("header"),n=S("span"),n.textContent="-",r=J(),o=S("span"),o.textContent="x",x(n,"class","icon"),Ne(n,"margin-left","auto"),Ne(t,"--wails-draggable","drag"),x(t,"class","svelte-1ga24xv")},m(c,u){O(c,t,u),v(t,n),v(t,r),v(t,o),i||(s=[X(n,"click",Vn),X(o,"click",Kn)],i=!0)},p:k,i:k,o:k,d(c){c&&I(t),i=!1,T(s)}}}function Vn(){window.runtime.WindowMinimise()}function Kn(){window.runtime.Quit()}class Gn extends oe{constructor(t){super(),ne(this,t,null,Un,Z,{})}}function Ye(e,t,n){const r=e.slice();return r[7]=t[n][0],r[8]=t[n][1],r[10]=n,r}function Ze(e){let t,n;return t=new Hn({props:{title:e[7],data:e[8]}}),{c(){Se(t.$$.fragment)},m(r,o){ee(t,r,o),n=!0},p:k,i(r){n||(E(t.$$.fragment,r),n=!0)},o(r){$(t.$$.fragment,r),n=!1},d(r){te(t,r)}}}function Wn(e){let t,n,r,o,i;n=new Gn({});let s=Object.entries(e[0]),c=[];for(let l=0;l<s.length;l+=1)c[l]=Ze(Ye(e,s,l));const u=l=>$(c[l],1,1,()=>{c[l]=null});return{c(){t=S("main"),Se(n.$$.fragment),r=J(),o=S("div");for(let l=0;l<c.length;l+=1)c[l].c();x(o,"class","cards svelte-1fpge7d")},m(l,f){O(l,t,f),ee(n,t,null),v(t,r),v(t,o);for(let a=0;a<c.length;a+=1)c[a].m(o,null);i=!0},p(l,[f]){if(f&1){s=Object.entries(l[0]);let a;for(a=0;a<s.length;a+=1){const h=Ye(l,s,a);c[a]?(c[a].p(h,f),E(c[a],1)):(c[a]=Ze(h),c[a].c(),E(c[a],1),c[a].m(o,null))}for(Mt(),a=s.length;a<c.length;a+=1)u(a);At()}},i(l){if(!i){E(n.$$.fragment,l);for(let f=0;f<s.length;f+=1)E(c[f]);i=!0}},o(l){$(n.$$.fragment,l),c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)$(c[f]);i=!1},d(l){l&&I(t),te(n),xt(c,l)}}}function Jn(e){window.runtime.EventsOn("time",function(...o){t=o[0],n=o[1],console.log(o)}),Nt();let t="0",n="0";return[{Project1:{time:"00:00"},Project2:{time:"00:00"},Project3:{time:"00:00"},Project4:{time:"00:00"}}]}class Xn extends oe{constructor(t){super(),ne(this,t,Jn,Wn,Z,{})}}new Xn({target:document.getElementById("app")});
