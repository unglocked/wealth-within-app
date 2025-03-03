(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function hl(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fs={exports:{}},tr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au;function Of(){if(Au)return tr;Au=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,i,s){var a=null;if(s!==void 0&&(a=""+s),i.key!==void 0&&(a=""+i.key),"key"in i){s={};for(var u in i)u!=="key"&&(s[u]=i[u])}else s=i;return i=s.ref,{$$typeof:n,type:r,key:a,ref:i!==void 0?i:null,props:s}}return tr.Fragment=e,tr.jsx=t,tr.jsxs=t,tr}var Ru;function xf(){return Ru||(Ru=1,Fs.exports=Of()),Fs.exports}var q=xf(),js={exports:{}},X={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su;function Lf(){if(Su)return X;Su=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator;function y(T){return T===null||typeof T!="object"?null:(T=m&&T[m]||T["@@iterator"],typeof T=="function"?T:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,V={};function C(T,x,$){this.props=T,this.context=x,this.refs=V,this.updater=$||A}C.prototype.isReactComponent={},C.prototype.setState=function(T,x){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,x,"setState")},C.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function D(){}D.prototype=C.prototype;function M(T,x,$){this.props=T,this.context=x,this.refs=V,this.updater=$||A}var L=M.prototype=new D;L.constructor=M,P(L,C.prototype),L.isPureReactComponent=!0;var G=Array.isArray,B={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function w(T,x,$,j,Z,le){return $=le.ref,{$$typeof:n,type:T,key:x,ref:$!==void 0?$:null,props:le}}function g(T,x){return w(T.type,x,void 0,void 0,void 0,T.props)}function _(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function E(T){var x={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function($){return x[$]})}var I=/\/+/g;function S(T,x){return typeof T=="object"&&T!==null&&T.key!=null?E(""+T.key):x.toString(36)}function v(){}function He(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(v,v):(T.status="pending",T.then(function(x){T.status==="pending"&&(T.status="fulfilled",T.value=x)},function(x){T.status==="pending"&&(T.status="rejected",T.reason=x)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function je(T,x,$,j,Z){var le=typeof T;(le==="undefined"||le==="boolean")&&(T=null);var ee=!1;if(T===null)ee=!0;else switch(le){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(T.$$typeof){case n:case e:ee=!0;break;case f:return ee=T._init,je(ee(T._payload),x,$,j,Z)}}if(ee)return Z=Z(T),ee=j===""?"."+S(T,0):j,G(Z)?($="",ee!=null&&($=ee.replace(I,"$&/")+"/"),je(Z,x,$,"",function(ms){return ms})):Z!=null&&(_(Z)&&(Z=g(Z,$+(Z.key==null||T&&T.key===Z.key?"":(""+Z.key).replace(I,"$&/")+"/")+ee)),x.push(Z)),1;ee=0;var ze=j===""?".":j+":";if(G(T))for(var ye=0;ye<T.length;ye++)j=T[ye],le=ze+S(j,ye),ee+=je(j,x,$,le,Z);else if(ye=y(T),typeof ye=="function")for(T=ye.call(T),ye=0;!(j=T.next()).done;)j=j.value,le=ze+S(j,ye++),ee+=je(j,x,$,le,Z);else if(le==="object"){if(typeof T.then=="function")return je(He(T),x,$,j,Z);throw x=String(T),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return ee}function Q(T,x,$){if(T==null)return T;var j=[],Z=0;return je(T,j,"","",function(le){return x.call($,le,Z++)}),j}function oe(T){if(T._status===-1){var x=T._result;x=x(),x.then(function($){(T._status===0||T._status===-1)&&(T._status=1,T._result=$)},function($){(T._status===0||T._status===-1)&&(T._status=2,T._result=$)}),T._status===-1&&(T._status=0,T._result=x)}if(T._status===1)return T._result.default;throw T._result}var ce=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function de(){}return X.Children={map:Q,forEach:function(T,x,$){Q(T,function(){x.apply(this,arguments)},$)},count:function(T){var x=0;return Q(T,function(){x++}),x},toArray:function(T){return Q(T,function(x){return x})||[]},only:function(T){if(!_(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},X.Component=C,X.Fragment=t,X.Profiler=i,X.PureComponent=M,X.StrictMode=r,X.Suspense=c,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,X.act=function(){throw Error("act(...) is not supported in production builds of React.")},X.cache=function(T){return function(){return T.apply(null,arguments)}},X.cloneElement=function(T,x,$){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var j=P({},T.props),Z=T.key,le=void 0;if(x!=null)for(ee in x.ref!==void 0&&(le=void 0),x.key!==void 0&&(Z=""+x.key),x)!ie.call(x,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&x.ref===void 0||(j[ee]=x[ee]);var ee=arguments.length-2;if(ee===1)j.children=$;else if(1<ee){for(var ze=Array(ee),ye=0;ye<ee;ye++)ze[ye]=arguments[ye+2];j.children=ze}return w(T.type,Z,void 0,void 0,le,j)},X.createContext=function(T){return T={$$typeof:a,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:s,_context:T},T},X.createElement=function(T,x,$){var j,Z={},le=null;if(x!=null)for(j in x.key!==void 0&&(le=""+x.key),x)ie.call(x,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(Z[j]=x[j]);var ee=arguments.length-2;if(ee===1)Z.children=$;else if(1<ee){for(var ze=Array(ee),ye=0;ye<ee;ye++)ze[ye]=arguments[ye+2];Z.children=ze}if(T&&T.defaultProps)for(j in ee=T.defaultProps,ee)Z[j]===void 0&&(Z[j]=ee[j]);return w(T,le,void 0,void 0,null,Z)},X.createRef=function(){return{current:null}},X.forwardRef=function(T){return{$$typeof:u,render:T}},X.isValidElement=_,X.lazy=function(T){return{$$typeof:f,_payload:{_status:-1,_result:T},_init:oe}},X.memo=function(T,x){return{$$typeof:h,type:T,compare:x===void 0?null:x}},X.startTransition=function(T){var x=B.T,$={};B.T=$;try{var j=T(),Z=B.S;Z!==null&&Z($,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(de,ce)}catch(le){ce(le)}finally{B.T=x}},X.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},X.use=function(T){return B.H.use(T)},X.useActionState=function(T,x,$){return B.H.useActionState(T,x,$)},X.useCallback=function(T,x){return B.H.useCallback(T,x)},X.useContext=function(T){return B.H.useContext(T)},X.useDebugValue=function(){},X.useDeferredValue=function(T,x){return B.H.useDeferredValue(T,x)},X.useEffect=function(T,x){return B.H.useEffect(T,x)},X.useId=function(){return B.H.useId()},X.useImperativeHandle=function(T,x,$){return B.H.useImperativeHandle(T,x,$)},X.useInsertionEffect=function(T,x){return B.H.useInsertionEffect(T,x)},X.useLayoutEffect=function(T,x){return B.H.useLayoutEffect(T,x)},X.useMemo=function(T,x){return B.H.useMemo(T,x)},X.useOptimistic=function(T,x){return B.H.useOptimistic(T,x)},X.useReducer=function(T,x,$){return B.H.useReducer(T,x,$)},X.useRef=function(T){return B.H.useRef(T)},X.useState=function(T){return B.H.useState(T)},X.useSyncExternalStore=function(T,x,$){return B.H.useSyncExternalStore(T,x,$)},X.useTransition=function(){return B.H.useTransition()},X.version="19.0.0",X}var Pu;function dl(){return Pu||(Pu=1,js.exports=Lf()),js.exports}var k=dl();const Dt=hl(k);var Bs={exports:{}},Ne={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function Mf(){if(Cu)return Ne;Cu=1;var n=dl();function e(c){var h="https://react.dev/errors/"+c;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)h+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+c+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},i=Symbol.for("react.portal");function s(c,h,f){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:m==null?null:""+m,children:c,containerInfo:h,implementation:f}}var a=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(c,h){if(c==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ne.createPortal=function(c,h){var f=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return s(c,h,null,f)},Ne.flushSync=function(c){var h=a.T,f=r.p;try{if(a.T=null,r.p=2,c)return c()}finally{a.T=h,r.p=f,r.d.f()}},Ne.preconnect=function(c,h){typeof c=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(c,h))},Ne.prefetchDNS=function(c){typeof c=="string"&&r.d.D(c)},Ne.preinit=function(c,h){if(typeof c=="string"&&h&&typeof h.as=="string"){var f=h.as,m=u(f,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,A=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;f==="style"?r.d.S(c,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:m,integrity:y,fetchPriority:A}):f==="script"&&r.d.X(c,{crossOrigin:m,integrity:y,fetchPriority:A,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ne.preinitModule=function(c,h){if(typeof c=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var f=u(h.as,h.crossOrigin);r.d.M(c,{crossOrigin:f,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(c)},Ne.preload=function(c,h){if(typeof c=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var f=h.as,m=u(f,h.crossOrigin);r.d.L(c,f,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ne.preloadModule=function(c,h){if(typeof c=="string")if(h){var f=u(h.as,h.crossOrigin);r.d.m(c,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:f,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(c)},Ne.requestFormReset=function(c){r.d.r(c)},Ne.unstable_batchedUpdates=function(c,h){return c(h)},Ne.useFormState=function(c,h,f){return a.H.useFormState(c,h,f)},Ne.useFormStatus=function(){return a.H.useHostTransitionStatus()},Ne.version="19.0.0",Ne}var bu;function Uf(){if(bu)return Bs.exports;bu=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bs.exports=Mf(),Bs.exports}var Ff=Uf();const jf=hl(Ff);var nr={},ku;function Bf(){if(ku)return nr;ku=1,Object.defineProperty(nr,"__esModule",{value:!0}),nr.parse=a,nr.serialize=h;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,s=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function a(y,A){const P=new s,V=y.length;if(V<2)return P;const C=(A==null?void 0:A.decode)||f;let D=0;do{const M=y.indexOf("=",D);if(M===-1)break;const L=y.indexOf(";",D),G=L===-1?V:L;if(M>G){D=y.lastIndexOf(";",M-1)+1;continue}const B=u(y,D,M),ie=c(y,M,B),w=y.slice(B,ie);if(P[w]===void 0){let g=u(y,M+1,G),_=c(y,G,g);const E=C(y.slice(g,_));P[w]=E}D=G+1}while(D<V);return P}function u(y,A,P){do{const V=y.charCodeAt(A);if(V!==32&&V!==9)return A}while(++A<P);return P}function c(y,A,P){for(;A>P;){const V=y.charCodeAt(--A);if(V!==32&&V!==9)return A+1}return P}function h(y,A,P){const V=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(y))throw new TypeError(`argument name is invalid: ${y}`);const C=V(A);if(!e.test(C))throw new TypeError(`argument val is invalid: ${A}`);let D=y+"="+C;if(!P)return D;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);D+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);D+="; Domain="+P.domain}if(P.path){if(!r.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);D+="; Path="+P.path}if(P.expires){if(!m(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);D+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(D+="; HttpOnly"),P.secure&&(D+="; Secure"),P.partitioned&&(D+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return D}function f(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function m(y){return i.call(y)==="[object Date]"}return nr}Bf();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Du="popstate";function $f(n={}){function e(r,i){let{pathname:s,search:a,hash:u}=r.location;return to("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:gr(i)}return Hf(e,t,null,n)}function me(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Ye(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qf(){return Math.random().toString(36).substring(2,10)}function Nu(n,e){return{usr:n.state,key:n.key,idx:e}}function to(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Nn(e):e,state:t,key:e&&e.key||r||qf()}}function gr({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Nn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Hf(n,e,t,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,u="POP",c=null,h=f();h==null&&(h=0,a.replaceState({...a.state,idx:h},""));function f(){return(a.state||{idx:null}).idx}function m(){u="POP";let C=f(),D=C==null?null:C-h;h=C,c&&c({action:u,location:V.location,delta:D})}function y(C,D){u="PUSH";let M=to(V.location,C,D);h=f()+1;let L=Nu(M,h),G=V.createHref(M);try{a.pushState(L,"",G)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;i.location.assign(G)}s&&c&&c({action:u,location:V.location,delta:1})}function A(C,D){u="REPLACE";let M=to(V.location,C,D);h=f();let L=Nu(M,h),G=V.createHref(M);a.replaceState(L,"",G),s&&c&&c({action:u,location:V.location,delta:0})}function P(C){let D=i.location.origin!=="null"?i.location.origin:i.location.href,M=typeof C=="string"?C:gr(C);return M=M.replace(/ $/,"%20"),me(D,`No window.location.(origin|href) available to create URL for href: ${M}`),new URL(M,D)}let V={get action(){return u},get location(){return n(i,a)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Du,m),c=C,()=>{i.removeEventListener(Du,m),c=null}},createHref(C){return e(i,C)},createURL:P,encodeLocation(C){let D=P(C);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:y,replace:A,go(C){return a.go(C)}};return V}function fl(n,e,t="/"){return zf(n,e,t,!1)}function zf(n,e,t,r){let i=typeof e=="string"?Nn(e):e,s=Ut(i.pathname||"/",t);if(s==null)return null;let a=pl(n);Wf(a);let u=null;for(let c=0;u==null&&c<a.length;++c){let h=rp(s);u=tp(a[c],h,r)}return u}function pl(n,e=[],t=[],r=""){let i=(s,a,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(me(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length));let h=ft([r,c.relativePath]),f=t.concat(c);s.children&&s.children.length>0&&(me(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),pl(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:Zf(h,s.index),routesMeta:f})};return n.forEach((s,a)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,a);else for(let c of ml(s.path))i(s,a,c)}),e}function ml(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=ml(r.join("/")),u=[];return u.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&u.push(...a),u.map(c=>n.startsWith("/")&&c===""?"/":c)}function Wf(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:ep(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Kf=/^:[\w-]+$/,Gf=3,Qf=2,Yf=1,Jf=10,Xf=-2,Vu=n=>n==="*";function Zf(n,e){let t=n.split("/"),r=t.length;return t.some(Vu)&&(r+=Xf),e&&(r+=Qf),t.filter(i=>!Vu(i)).reduce((i,s)=>i+(Kf.test(s)?Gf:s===""?Yf:Jf),r)}function ep(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function tp(n,e,t=!1){let{routesMeta:r}=n,i={},s="/",a=[];for(let u=0;u<r.length;++u){let c=r[u],h=u===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=Ti({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},f),y=c.route;if(!m&&h&&t&&!r[r.length-1].route.index&&(m=Ti({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:ft([s,m.pathname]),pathnameBase:ap(ft([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=ft([s,m.pathnameBase]))}return a}function Ti(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=np(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((h,{paramName:f,isOptional:m},y)=>{if(f==="*"){let P=u[y]||"";a=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const A=u[y];return m&&!A?h[f]=void 0:h[f]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:n}}function np(n,e=!1,t=!0){Ye(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,c)=>(r.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function rp(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ye(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ut(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function ip(n,e="/"){let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?Nn(n):n;return{pathname:t?t.startsWith("/")?t:sp(t,e):e,search:up(r),hash:cp(i)}}function sp(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function $s(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function op(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Co(n){let e=op(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function bo(n,e,t,r=!1){let i;typeof n=="string"?i=Nn(n):(i={...n},me(!i.pathname||!i.pathname.includes("?"),$s("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),$s("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),$s("#","search","hash",i)));let s=n===""||i.pathname==="",a=s?"/":i.pathname,u;if(a==null)u=t;else{let m=e.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}u=m>=0?e[m]:"/"}let c=ip(i,u),h=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&t.endsWith("/");return!c.pathname.endsWith("/")&&(h||f)&&(c.pathname+="/"),c}var ft=n=>n.join("/").replace(/\/\/+/g,"/"),ap=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),up=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,cp=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lp(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var gl=["POST","PUT","PATCH","DELETE"];new Set(gl);var hp=["GET",...gl];new Set(hp);var Vn=k.createContext(null);Vn.displayName="DataRouter";var Hi=k.createContext(null);Hi.displayName="DataRouterState";var _l=k.createContext({isTransitioning:!1});_l.displayName="ViewTransition";var dp=k.createContext(new Map);dp.displayName="Fetchers";var fp=k.createContext(null);fp.displayName="Await";var Xe=k.createContext(null);Xe.displayName="Navigation";var Sr=k.createContext(null);Sr.displayName="Location";var at=k.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName="Route";var ko=k.createContext(null);ko.displayName="RouteError";function pp(n,{relative:e}={}){me(On(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=k.useContext(Xe),{hash:i,pathname:s,search:a}=Pr(n,{relative:e}),u=s;return t!=="/"&&(u=s==="/"?t:ft([t,s])),r.createHref({pathname:u,search:a,hash:i})}function On(){return k.useContext(Sr)!=null}function zt(){return me(On(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Sr).location}var yl="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vl(n){k.useContext(Xe).static||k.useLayoutEffect(n)}function zi(){let{isDataRoute:n}=k.useContext(at);return n?Pp():mp()}function mp(){me(On(),"useNavigate() may be used only in the context of a <Router> component.");let n=k.useContext(Vn),{basename:e,navigator:t}=k.useContext(Xe),{matches:r}=k.useContext(at),{pathname:i}=zt(),s=JSON.stringify(Co(r)),a=k.useRef(!1);return vl(()=>{a.current=!0}),k.useCallback((c,h={})=>{if(Ye(a.current,yl),!a.current)return;if(typeof c=="number"){t.go(c);return}let f=bo(c,JSON.parse(s),i,h.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ft([e,f.pathname])),(h.replace?t.replace:t.push)(f,h.state,h)},[e,t,s,i,n])}k.createContext(null);function Pr(n,{relative:e}={}){let{matches:t}=k.useContext(at),{pathname:r}=zt(),i=JSON.stringify(Co(t));return k.useMemo(()=>bo(n,JSON.parse(i),r,e==="path"),[n,i,r,e])}function gp(n,e){return El(n,e)}function El(n,e,t,r){var M;me(On(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:s}=k.useContext(Xe),{matches:a}=k.useContext(at),u=a[a.length-1],c=u?u.params:{},h=u?u.pathname:"/",f=u?u.pathnameBase:"/",m=u&&u.route;{let L=m&&m.path||"";Tl(h,!m||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let y=zt(),A;if(e){let L=typeof e=="string"?Nn(e):e;me(f==="/"||((M=L.pathname)==null?void 0:M.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${L.pathname}" was given in the \`location\` prop.`),A=L}else A=y;let P=A.pathname||"/",V=P;if(f!=="/"){let L=f.replace(/^\//,"").split("/");V="/"+P.replace(/^\//,"").split("/").slice(L.length).join("/")}let C=!s&&t&&t.matches&&t.matches.length>0?t.matches:fl(n,{pathname:V});Ye(m||C!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),Ye(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=Tp(C&&C.map(L=>Object.assign({},L,{params:Object.assign({},c,L.params),pathname:ft([f,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?f:ft([f,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),a,t,r);return e&&D?k.createElement(Sr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},D):D}function _p(){let n=Sp(),e=lp(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:s},"ErrorBoundary")," or"," ",k.createElement("code",{style:s},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:i},t):null,a)}var yp=k.createElement(_p,null),vp=class extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?k.createElement(at.Provider,{value:this.props.routeContext},k.createElement(ko.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ep({routeContext:n,match:e,children:t}){let r=k.useContext(Vn);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),k.createElement(at.Provider,{value:n},t)}function Tp(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,s=t==null?void 0:t.errors;if(s!=null){let c=i.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);me(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,c+1))}let a=!1,u=-1;if(t)for(let c=0;c<i.length;c++){let h=i[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:f,errors:m}=t,y=h.route.loader&&!f.hasOwnProperty(h.route.id)&&(!m||m[h.route.id]===void 0);if(h.route.lazy||y){a=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((c,h,f)=>{let m,y=!1,A=null,P=null;t&&(m=s&&h.route.id?s[h.route.id]:void 0,A=h.route.errorElement||yp,a&&(u<0&&f===0?(Tl("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,P=null):u===f&&(y=!0,P=h.route.hydrateFallbackElement||null)));let V=e.concat(i.slice(0,f+1)),C=()=>{let D;return m?D=A:y?D=P:h.route.Component?D=k.createElement(h.route.Component,null):h.route.element?D=h.route.element:D=c,k.createElement(Ep,{match:h,routeContext:{outlet:c,matches:V,isDataRoute:t!=null},children:D})};return t&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?k.createElement(vp,{location:t.location,revalidation:t.revalidation,component:A,error:m,children:C(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):C()},null)}function Do(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wp(n){let e=k.useContext(Vn);return me(e,Do(n)),e}function Ip(n){let e=k.useContext(Hi);return me(e,Do(n)),e}function Ap(n){let e=k.useContext(at);return me(e,Do(n)),e}function No(n){let e=Ap(n),t=e.matches[e.matches.length-1];return me(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Rp(){return No("useRouteId")}function Sp(){var r;let n=k.useContext(ko),e=Ip("useRouteError"),t=No("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function Pp(){let{router:n}=wp("useNavigate"),e=No("useNavigate"),t=k.useRef(!1);return vl(()=>{t.current=!0}),k.useCallback(async(i,s={})=>{Ye(t.current,yl),t.current&&(typeof i=="number"?n.navigate(i):await n.navigate(i,{fromRouteId:e,...s}))},[n,e])}var Ou={};function Tl(n,e,t){!e&&!Ou[n]&&(Ou[n]=!0,Ye(!1,t))}k.memo(Cp);function Cp({routes:n,future:e,state:t}){return El(n,void 0,t,e)}function bp({to:n,replace:e,state:t,relative:r}){me(On(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=k.useContext(Xe);Ye(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=k.useContext(at),{pathname:a}=zt(),u=zi(),c=bo(n,Co(s),a,r==="path"),h=JSON.stringify(c);return k.useEffect(()=>{u(JSON.parse(h),{replace:e,state:t,relative:r})},[u,h,r,e,t]),null}function ir(n){me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kp({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:i,static:s=!1}){me(!On(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=n.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:a,navigator:i,static:s,future:{}}),[a,i,s]);typeof t=="string"&&(t=Nn(t));let{pathname:c="/",search:h="",hash:f="",state:m=null,key:y="default"}=t,A=k.useMemo(()=>{let P=Ut(c,a);return P==null?null:{location:{pathname:P,search:h,hash:f,state:m,key:y},navigationType:r}},[a,c,h,f,m,y,r]);return Ye(A!=null,`<Router basename="${a}"> is not able to match the URL "${c}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:k.createElement(Xe.Provider,{value:u},k.createElement(Sr.Provider,{children:e,value:A}))}function Dp({children:n,location:e}){return gp(no(n),e)}function no(n,e=[]){let t=[];return k.Children.forEach(n,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){t.push.apply(t,no(r.props.children,s));return}me(r.type===ir,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),me(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=no(r.props.children,s)),t.push(a)}),t}var ci="get",li="application/x-www-form-urlencoded";function Wi(n){return n!=null&&typeof n.tagName=="string"}function Np(n){return Wi(n)&&n.tagName.toLowerCase()==="button"}function Vp(n){return Wi(n)&&n.tagName.toLowerCase()==="form"}function Op(n){return Wi(n)&&n.tagName.toLowerCase()==="input"}function xp(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Lp(n,e){return n.button===0&&(!e||e==="_self")&&!xp(n)}var ni=null;function Mp(){if(ni===null)try{new FormData(document.createElement("form"),0),ni=!1}catch{ni=!0}return ni}var Up=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qs(n){return n!=null&&!Up.has(n)?(Ye(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`),null):n}function Fp(n,e){let t,r,i,s,a;if(Vp(n)){let u=n.getAttribute("action");r=u?Ut(u,e):null,t=n.getAttribute("method")||ci,i=qs(n.getAttribute("enctype"))||li,s=new FormData(n)}else if(Np(n)||Op(n)&&(n.type==="submit"||n.type==="image")){let u=n.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=n.getAttribute("formaction")||u.getAttribute("action");if(r=c?Ut(c,e):null,t=n.getAttribute("formmethod")||u.getAttribute("method")||ci,i=qs(n.getAttribute("formenctype"))||qs(u.getAttribute("enctype"))||li,s=new FormData(u,n),!Mp()){let{name:h,type:f,value:m}=n;if(f==="image"){let y=h?`${h}.`:"";s.append(`${y}x`,"0"),s.append(`${y}y`,"0")}else h&&s.append(h,m)}}else{if(Wi(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ci,r=null,i=li,a=n}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:s,body:a}}function Vo(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function jp(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bp(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function $p(n,e,t){let r=await Promise.all(n.map(async i=>{let s=e.routes[i.route.id];if(s){let a=await jp(s,t);return a.links?a.links():[]}return[]}));return Wp(r.flat(1).filter(Bp).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function xu(n,e,t,r,i,s){let a=(c,h)=>t[h]?c.route.id!==t[h].route.id:!0,u=(c,h)=>{var f;return t[h].pathname!==c.pathname||((f=t[h].route.path)==null?void 0:f.endsWith("*"))&&t[h].params["*"]!==c.params["*"]};return s==="assets"?e.filter((c,h)=>a(c,h)||u(c,h)):s==="data"?e.filter((c,h)=>{var m;let f=r.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(a(c,h)||u(c,h))return!0;if(c.route.shouldRevalidate){let y=c.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((m=t[0])==null?void 0:m.params)||{},nextUrl:new URL(n,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function qp(n,e,{includeHydrateFallback:t}={}){return Hp(n.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),t&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function Hp(n){return[...new Set(n)]}function zp(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function Wp(n,e){let t=new Set;return new Set(e),n.reduce((r,i)=>{let s=JSON.stringify(zp(i));return t.has(s)||(t.add(s),r.push({key:s,link:i})),r},[])}function Kp(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Gp(){let n=k.useContext(Vn);return Vo(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Qp(){let n=k.useContext(Hi);return Vo(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Oo=k.createContext(void 0);Oo.displayName="FrameworkContext";function wl(){let n=k.useContext(Oo);return Vo(n,"You must render this element inside a <HydratedRouter> element"),n}function Yp(n,e){let t=k.useContext(Oo),[r,i]=k.useState(!1),[s,a]=k.useState(!1),{onFocus:u,onBlur:c,onMouseEnter:h,onMouseLeave:f,onTouchStart:m}=e,y=k.useRef(null);k.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let V=D=>{D.forEach(M=>{a(M.isIntersecting)})},C=new IntersectionObserver(V,{threshold:.5});return y.current&&C.observe(y.current),()=>{C.disconnect()}}},[n]),k.useEffect(()=>{if(r){let V=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(V)}}},[r]);let A=()=>{i(!0)},P=()=>{i(!1),a(!1)};return t?n!=="intent"?[s,y,{}]:[s,y,{onFocus:rr(u,A),onBlur:rr(c,P),onMouseEnter:rr(h,A),onMouseLeave:rr(f,P),onTouchStart:rr(m,A)}]:[!1,y,{}]}function rr(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function Jp({page:n,...e}){let{router:t}=Gp(),r=k.useMemo(()=>fl(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?k.createElement(Zp,{page:n,matches:r,...e}):null}function Xp(n){let{manifest:e,routeModules:t}=wl(),[r,i]=k.useState([]);return k.useEffect(()=>{let s=!1;return $p(n,e,t).then(a=>{s||i(a)}),()=>{s=!0}},[n,e,t]),r}function Zp({page:n,matches:e,...t}){let r=zt(),{manifest:i,routeModules:s}=wl(),{loaderData:a,matches:u}=Qp(),c=k.useMemo(()=>xu(n,e,u,i,r,"data"),[n,e,u,i,r]),h=k.useMemo(()=>xu(n,e,u,i,r,"assets"),[n,e,u,i,r]),f=k.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let A=new Set,P=!1;if(e.forEach(C=>{var M;let D=i.routes[C.route.id];!D||!D.hasLoader||(!c.some(L=>L.route.id===C.route.id)&&C.route.id in a&&((M=s[C.route.id])!=null&&M.shouldRevalidate)||D.hasClientLoader?P=!0:A.add(C.route.id))}),A.size===0)return[];let V=Kp(n);return P&&A.size>0&&V.searchParams.set("_routes",e.filter(C=>A.has(C.route.id)).map(C=>C.route.id).join(",")),[V.pathname+V.search]},[a,r,i,c,e,n,s]),m=k.useMemo(()=>qp(h,i),[h,i]),y=Xp(h);return k.createElement(k.Fragment,null,f.map(A=>k.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...t})),m.map(A=>k.createElement("link",{key:A,rel:"modulepreload",href:A,...t})),y.map(({key:A,link:P})=>k.createElement("link",{key:A,...P})))}function em(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Il=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Il&&(window.__reactRouterVersion="7.2.0")}catch{}function tm({basename:n,children:e,window:t}){let r=k.useRef();r.current==null&&(r.current=$f({window:t,v5Compat:!0}));let i=r.current,[s,a]=k.useState({action:i.action,location:i.location}),u=k.useCallback(c=>{k.startTransition(()=>a(c))},[a]);return k.useLayoutEffect(()=>i.listen(u),[i,u]),k.createElement(kp,{basename:n,children:e,location:s.location,navigationType:s.action,navigator:i})}var Al=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rl=k.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,state:u,target:c,to:h,preventScrollReset:f,viewTransition:m,...y},A){let{basename:P}=k.useContext(Xe),V=typeof h=="string"&&Al.test(h),C,D=!1;if(typeof h=="string"&&V&&(C=h,Il))try{let _=new URL(window.location.href),E=h.startsWith("//")?new URL(_.protocol+h):new URL(h),I=Ut(E.pathname,P);E.origin===_.origin&&I!=null?h=I+E.search+E.hash:D=!0}catch{Ye(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=pp(h,{relative:i}),[L,G,B]=Yp(r,y),ie=sm(h,{replace:a,state:u,target:c,preventScrollReset:f,relative:i,viewTransition:m});function w(_){e&&e(_),_.defaultPrevented||ie(_)}let g=k.createElement("a",{...y,...B,href:C||M,onClick:D||s?e:w,ref:em(A,G),target:c,"data-discover":!V&&t==="render"?"true":void 0});return L&&!V?k.createElement(k.Fragment,null,g,k.createElement(Jp,{page:M})):g});Rl.displayName="Link";var nm=k.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:u,children:c,...h},f){let m=Pr(a,{relative:h.relative}),y=zt(),A=k.useContext(Hi),{navigator:P,basename:V}=k.useContext(Xe),C=A!=null&&lm(m)&&u===!0,D=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,M=y.pathname,L=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;t||(M=M.toLowerCase(),L=L?L.toLowerCase():null,D=D.toLowerCase()),L&&V&&(L=Ut(L,V)||L);const G=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let B=M===D||!i&&M.startsWith(D)&&M.charAt(G)==="/",ie=L!=null&&(L===D||!i&&L.startsWith(D)&&L.charAt(D.length)==="/"),w={isActive:B,isPending:ie,isTransitioning:C},g=B?e:void 0,_;typeof r=="function"?_=r(w):_=[r,B?"active":null,ie?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let E=typeof s=="function"?s(w):s;return k.createElement(Rl,{...h,"aria-current":g,className:_,ref:f,style:E,to:a,viewTransition:u},typeof c=="function"?c(w):c)});nm.displayName="NavLink";var rm=k.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:i,state:s,method:a=ci,action:u,onSubmit:c,relative:h,preventScrollReset:f,viewTransition:m,...y},A)=>{let P=um(),V=cm(u,{relative:h}),C=a.toLowerCase()==="get"?"get":"post",D=typeof u=="string"&&Al.test(u),M=L=>{if(c&&c(L),L.defaultPrevented)return;L.preventDefault();let G=L.nativeEvent.submitter,B=(G==null?void 0:G.getAttribute("formmethod"))||a;P(G||L.currentTarget,{fetcherKey:e,method:B,navigate:t,replace:i,state:s,relative:h,preventScrollReset:f,viewTransition:m})};return k.createElement("form",{ref:A,method:C,action:V,onSubmit:r?c:M,...y,"data-discover":!D&&n==="render"?"true":void 0})});rm.displayName="Form";function im(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sl(n){let e=k.useContext(Vn);return me(e,im(n)),e}function sm(n,{target:e,replace:t,state:r,preventScrollReset:i,relative:s,viewTransition:a}={}){let u=zi(),c=zt(),h=Pr(n,{relative:s});return k.useCallback(f=>{if(Lp(f,e)){f.preventDefault();let m=t!==void 0?t:gr(c)===gr(h);u(n,{replace:m,state:r,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,h,t,r,e,n,i,s,a])}var om=0,am=()=>`__${String(++om)}__`;function um(){let{router:n}=Sl("useSubmit"),{basename:e}=k.useContext(Xe),t=Rp();return k.useCallback(async(r,i={})=>{let{action:s,method:a,encType:u,formData:c,body:h}=Fp(r,e);if(i.navigate===!1){let f=i.fetcherKey||am();await n.fetch(f,t,i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:h,formMethod:i.method||a,formEncType:i.encType||u,flushSync:i.flushSync})}else await n.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:h,formMethod:i.method||a,formEncType:i.encType||u,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,e,t])}function cm(n,{relative:e}={}){let{basename:t}=k.useContext(Xe),r=k.useContext(at);me(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Pr(n||".",{relative:e})},a=zt();if(n==null){s.search=a.search;let u=new URLSearchParams(s.search),c=u.getAll("index");if(c.some(f=>f==="")){u.delete("index"),c.filter(m=>m).forEach(m=>u.append("index",m));let f=u.toString();s.search=f?`?${f}`:""}}return(!n||n===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(s.pathname=s.pathname==="/"?t:ft([t,s.pathname])),gr(s)}function lm(n,e={}){let t=k.useContext(_l);me(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Sl("useViewTransitionState"),i=Pr(n,{relative:e.relative});if(!t.isTransitioning)return!1;let s=Ut(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=Ut(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Ti(i.pathname,a)!=null||Ti(i.pathname,s)!=null}new TextEncoder;var Lu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},hm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],u=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,u=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=s>>2,m=(s&3)<<4|u>>4;let y=(u&15)<<2|h>>6,A=h&63;c||(A=64,a||(y=64)),r.push(t[f],t[m],t[y],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||h==null||m==null)throw new dm;const y=s<<2|u>>4;if(r.push(y),h!==64){const A=u<<4&240|h>>2;if(r.push(A),m!==64){const P=h<<6&192|m;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fm=function(n){const e=Pl(n);return Cl.encodeByteArray(e,!0)},wi=function(n){return fm(n).replace(/\./g,"")},bl=function(n){try{return Cl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=()=>pm().__FIREBASE_DEFAULTS__,gm=()=>{if(typeof process>"u"||typeof Lu>"u")return;const n=Lu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_m=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bl(n[1]);return e&&JSON.parse(e)},Ki=()=>{try{return mm()||gm()||_m()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kl=n=>{var e,t;return(t=(e=Ki())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ym=n=>{const e=kl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Dl=()=>{var n;return(n=Ki())===null||n===void 0?void 0:n.config},Nl=n=>{var e;return(e=Ki())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wi(JSON.stringify(t)),wi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function wm(){var n;const e=(n=Ki())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Im(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Am(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sm(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Pm(){return!wm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cm(){try{return typeof indexedDB=="object"}catch{return!1}}function bm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="FirebaseError";class Et extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=km,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cr.prototype.create)}}class Cr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Dm(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Et(i,u,r)}}function Dm(n,e){return n.replace(Nm,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nm=/\{\$([^}]+)}/g;function Vm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ii(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Mu(s)&&Mu(a)){if(!Ii(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Mu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function or(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Om(n,e){const t=new xm(n,e);return t.subscribe.bind(t)}class xm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Lm(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Hs),i.error===void 0&&(i.error=Hs),i.complete===void 0&&(i.complete=Hs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new vm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fm(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Um(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Um(n){return n===Zt?void 0:n}function Fm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Mm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Bm={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},$m=te.INFO,qm={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Hm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=qm[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xo{constructor(e){this.name=e,this._logLevel=$m,this._logHandler=Hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const zm=(n,e)=>e.some(t=>n instanceof t);let Uu,Fu;function Wm(){return Uu||(Uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Km(){return Fu||(Fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vl=new WeakMap,ro=new WeakMap,Ol=new WeakMap,zs=new WeakMap,Lo=new WeakMap;function Gm(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Nt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vl.set(t,n)}).catch(()=>{}),Lo.set(e,n),e}function Qm(n){if(ro.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ro.set(n,e)}let io={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ro.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ol.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ym(n){io=n(io)}function Jm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ws(this),e,...t);return Ol.set(r,e.sort?e.sort():[e]),Nt(r)}:Km().includes(n)?function(...e){return n.apply(Ws(this),e),Nt(Vl.get(this))}:function(...e){return Nt(n.apply(Ws(this),e))}}function Xm(n){return typeof n=="function"?Jm(n):(n instanceof IDBTransaction&&Qm(n),zm(n,Wm())?new Proxy(n,io):n)}function Nt(n){if(n instanceof IDBRequest)return Gm(n);if(zs.has(n))return zs.get(n);const e=Xm(n);return e!==n&&(zs.set(n,e),Lo.set(e,n)),e}const Ws=n=>Lo.get(n);function Zm(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),u=Nt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Nt(a.result),c.oldVersion,c.newVersion,Nt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const eg=["get","getKey","getAll","getAllKeys","count"],tg=["put","add","delete","clear"],Ks=new Map;function ju(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ks.get(e))return Ks.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=tg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eg.includes(t)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),i&&c.done]))[0]};return Ks.set(e,s),s}Ym(n=>({...n,get:(e,t,r)=>ju(e,t)||n.get(e,t,r),has:(e,t)=>!!ju(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function rg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const so="@firebase/app",Bu="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new xo("@firebase/app"),ig="@firebase/app-compat",sg="@firebase/analytics-compat",og="@firebase/analytics",ag="@firebase/app-check-compat",ug="@firebase/app-check",cg="@firebase/auth",lg="@firebase/auth-compat",hg="@firebase/database",dg="@firebase/data-connect",fg="@firebase/database-compat",pg="@firebase/functions",mg="@firebase/functions-compat",gg="@firebase/installations",_g="@firebase/installations-compat",yg="@firebase/messaging",vg="@firebase/messaging-compat",Eg="@firebase/performance",Tg="@firebase/performance-compat",wg="@firebase/remote-config",Ig="@firebase/remote-config-compat",Ag="@firebase/storage",Rg="@firebase/storage-compat",Sg="@firebase/firestore",Pg="@firebase/vertexai",Cg="@firebase/firestore-compat",bg="firebase",kg="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="[DEFAULT]",Dg={[so]:"fire-core",[ig]:"fire-core-compat",[og]:"fire-analytics",[sg]:"fire-analytics-compat",[ug]:"fire-app-check",[ag]:"fire-app-check-compat",[cg]:"fire-auth",[lg]:"fire-auth-compat",[hg]:"fire-rtdb",[dg]:"fire-data-connect",[fg]:"fire-rtdb-compat",[pg]:"fire-fn",[mg]:"fire-fn-compat",[gg]:"fire-iid",[_g]:"fire-iid-compat",[yg]:"fire-fcm",[vg]:"fire-fcm-compat",[Eg]:"fire-perf",[Tg]:"fire-perf-compat",[wg]:"fire-rc",[Ig]:"fire-rc-compat",[Ag]:"fire-gcs",[Rg]:"fire-gcs-compat",[Sg]:"fire-fst",[Cg]:"fire-fst-compat",[Pg]:"fire-vertex","fire-js":"fire-js",[bg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Map,Ng=new Map,ao=new Map;function $u(n,e){try{n.container.addComponent(e)}catch(t){mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){const e=n.name;if(ao.has(e))return mt.debug(`There were multiple attempts to register component ${e}.`),!1;ao.set(e,n);for(const t of Ai.values())$u(t,n);for(const t of Ng.values())$u(t,n);return!0}function Mo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new Cr("app","Firebase",Vg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=kg;function xl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(t||(t=Dl()),!t)throw Vt.create("no-options");const s=Ai.get(i);if(s){if(Ii(t,s.options)&&Ii(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const a=new jm(i);for(const c of ao.values())a.addComponent(c);const u=new Og(t,r,a);return Ai.set(i,u),u}function Ll(n=oo){const e=Ai.get(n);if(!e&&n===oo&&Dl())return xl();if(!e)throw Vt.create("no-app",{appName:n});return e}function Ot(n,e,t){var r;let i=(r=Dg[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mt.warn(u.join(" "));return}In(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="firebase-heartbeat-database",Lg=1,_r="firebase-heartbeat-store";let Gs=null;function Ml(){return Gs||(Gs=Zm(xg,Lg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_r)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vt.create("idb-open",{originalErrorMessage:n.message})})),Gs}async function Mg(n){try{const t=(await Ml()).transaction(_r),r=await t.objectStore(_r).get(Ul(n));return await t.done,r}catch(e){if(e instanceof Et)mt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mt.warn(t.message)}}}async function qu(n,e){try{const r=(await Ml()).transaction(_r,"readwrite");await r.objectStore(_r).put(e,Ul(n)),await r.done}catch(t){if(t instanceof Et)mt.warn(t.message);else{const r=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mt.warn(r.message)}}}function Ul(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=1024,Fg=30;class jg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $g(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Fg){const a=qg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hu(),{heartbeatsToSend:r,unsentEntries:i}=Bg(this._heartbeatsCache.heartbeats),s=wi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return mt.warn(t),""}}}function Hu(){return new Date().toISOString().substring(0,10)}function Bg(n,e=Ug){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),zu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),zu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $g{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cm()?bm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Mg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zu(n){return wi(JSON.stringify({version:2,heartbeats:n})).length}function qg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n){In(new tn("platform-logger",e=>new ng(e),"PRIVATE")),In(new tn("heartbeat",e=>new jg(e),"PRIVATE")),Ot(so,Bu,n),Ot(so,Bu,"esm2017"),Ot("fire-js","")}Hg("");function Uo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Fl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zg=Fl,jl=new Cr("auth","Firebase",Fl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new xo("@firebase/auth");function Wg(n,...e){Ri.logLevel<=te.WARN&&Ri.warn(`Auth (${xn}): ${n}`,...e)}function hi(n,...e){Ri.logLevel<=te.ERROR&&Ri.error(`Auth (${xn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw Fo(n,...e)}function et(n,...e){return Fo(n,...e)}function Bl(n,e,t){const r=Object.assign(Object.assign({},zg()),{[e]:t});return new Cr("auth","Firebase",r).create(e,{appName:n.name})}function xt(n){return Bl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return jl.create(n,...e)}function W(n,e,...t){if(!n)throw Fo(e,...t)}function lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw hi(e),new Error(e)}function gt(n,e){n||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Kg(){return Wu()==="http:"||Wu()==="https:"}function Wu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kg()||Am()||"connection"in navigator)?navigator.onLine:!0}function Qg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=Tm()||Rm()}get(){return Gg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n,e){gt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new kr(3e4,6e4);function on(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Wt(n,e,t,r,i={}){return ql(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=br(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},s);return Im()||(h.referrerPolicy="no-referrer"),$l.fetch()(Hl(n,n.config.apiHost,t,u),h)})}async function ql(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yg),e);try{const i=new Zg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ri(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[c,h]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ri(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ri(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw ri(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bl(n,f,h);Je(n,f)}}catch(i){if(i instanceof Et)throw i;Je(n,"network-request-failed",{message:String(i)})}}async function Gi(n,e,t,r,i={}){const s=await Wt(n,e,t,r,i);return"mfaPendingCredential"in s&&Je(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Hl(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?jo(n.config,i):`${n.config.apiScheme}://${i}`}function Xg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Jg.get())})}}function ri(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=et(n,e,r);return i.customData._tokenResponse=t,i}function Ku(n){return n!==void 0&&n.enterprise!==void 0}class e_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Xg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function t_(n,e){return Wt(n,"GET","/v2/recaptchaConfig",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e){return Wt(n,"POST","/v1/accounts:delete",e)}async function zl(n,e){return Wt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r_(n,e=!1){const t=Fe(n),r=await t.getIdToken(e),i=Bo(r);W(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hr(Qs(i.auth_time)),issuedAtTime:hr(Qs(i.iat)),expirationTime:hr(Qs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qs(n){return Number(n)*1e3}function Bo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return hi("JWT malformed, contained fewer than 3 sections"),null;try{const i=bl(t);return i?JSON.parse(i):(hi("Failed to decode base64 JWT payload"),null)}catch(i){return hi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gu(n){const e=Bo(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Et&&i_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function i_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(n){var e;const t=n.auth,r=await n.getIdToken(),i=await yr(n,zl(t,{idToken:r}));W(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Wl(s.providerUserInfo):[],u=a_(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(u!=null&&u.length),f=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new co(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function o_(n){const e=Fe(n);await Si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wl(n){return n.map(e=>{var{providerId:t}=e,r=Uo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(n,e){const t=await ql(n,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Hl(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",$l.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function c_(n,e){return Wt(n,"POST","/v2/accounts:revokeToken",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Gu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await u_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new vn;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ht{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new co(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return r_(this,e)}reload(){return o_(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Si(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await yr(this,n_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,c,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,y=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(u=t.tenantId)!==null&&u!==void 0?u:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,D=(h=t.createdAt)!==null&&h!==void 0?h:void 0,M=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:G,isAnonymous:B,providerData:ie,stsTokenManager:w}=t;W(L&&w,e,"internal-error");const g=vn.fromJSON(this.name,w);W(typeof L=="string",e,"internal-error"),At(m,e.name),At(y,e.name),W(typeof G=="boolean",e,"internal-error"),W(typeof B=="boolean",e,"internal-error"),At(A,e.name),At(P,e.name),At(V,e.name),At(C,e.name),At(D,e.name),At(M,e.name);const _=new ht({uid:L,auth:e,email:y,emailVerified:G,displayName:m,isAnonymous:B,photoURL:P,phoneNumber:A,tenantId:V,stsTokenManager:g,createdAt:D,lastLoginAt:M});return ie&&Array.isArray(ie)&&(_.providerData=ie.map(E=>Object.assign({},E))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new vn;i.updateFromServerResponse(t);const s=new ht({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Si(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new vn;u.updateFromIdToken(r);const c=new ht({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new co(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new Map;function dt(n){gt(n instanceof Function,"Expected a class definition");let e=Qu.get(n);return e?(gt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Qu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kl.type="NONE";const Yu=Kl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n,e,t){return`firebase:${n}:${e}:${t}`}class En{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=di(this.userKey,i.apiKey,s),this.fullPersistenceKey=di("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new En(dt(Yu),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dt(Yu);const a=di(r,e.config.apiKey,e.name);let u=null;for(const h of t)try{const f=await h._get(a);if(f){const m=ht._fromJSON(e,f);h!==s&&(u=m),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new En(s,e,r):(s=c[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new En(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zl(e))return"Blackberry";if(eh(e))return"Webos";if(Ql(e))return"Safari";if((e.includes("chrome/")||Yl(e))&&!e.includes("edge/"))return"Chrome";if(Xl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gl(n=Le()){return/firefox\//i.test(n)}function Ql(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yl(n=Le()){return/crios\//i.test(n)}function Jl(n=Le()){return/iemobile/i.test(n)}function Xl(n=Le()){return/android/i.test(n)}function Zl(n=Le()){return/blackberry/i.test(n)}function eh(n=Le()){return/webos/i.test(n)}function $o(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function l_(n=Le()){var e;return $o(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function h_(){return Sm()&&document.documentMode===10}function th(n=Le()){return $o(n)||Xl(n)||eh(n)||Zl(n)||/windows phone/i.test(n)||Jl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n,e=[]){let t;switch(n){case"Browser":t=Ju(Le());break;case"Worker":t=`${Ju(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,u)=>{try{const c=e(s);a(c)}catch(c){u(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n,e={}){return Wt(n,"GET","/v2/passwordPolicy",on(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=6;class m_{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:p_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xu(this),this.idTokenSubscription=new Xu(this),this.beforeStateQueue=new d_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zl(this,{idToken:e}),r=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Si(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(xt(this));const t=e?Fe(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f_(this),t=new m_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await c_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Wg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ln(n){return Fe(n)}class Xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Om(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function __(n){Qi=n}function rh(n){return Qi.loadJS(n)}function y_(){return Qi.recaptchaEnterpriseScript}function v_(){return Qi.gapiScript}function E_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class T_{constructor(){this.enterprise=new w_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class w_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const I_="recaptcha-enterprise",ih="NO_RECAPTCHA";class A_{constructor(e){this.type=I_,this.auth=Ln(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{t_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const h=new e_(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{u(c)})})}function i(s,a,u){const c=window.grecaptcha;Ku(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(ih)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new T_().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&Ku(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=y_();c.length!==0&&(c+=u),rh(c).then(()=>{i(u,s,a)}).catch(h=>{a(h)})}}).catch(u=>{a(u)})})}}async function Zu(n,e,t,r=!1,i=!1){const s=new A_(n);let a;if(i)a=ih;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const c=u.phoneEnrollmentInfo.phoneNumber,h=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const c=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function ec(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Zu(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Zu(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n,e){const t=Mo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ii(s,e??{}))return i;Je(i,"already-initialized")}return t.initialize({options:e})}function S_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function P_(n,e,t){const r=Ln(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=sh(e),{host:a,port:u}=C_(e),c=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),b_()}function sh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function C_(n){const e=sh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:tc(a)}}}function tc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function b_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,t){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function k_(n,e){return Wt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n,e){return Gi(n,"POST","/v1/accounts:signInWithPassword",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(n,e){return Gi(n,"POST","/v1/accounts:signInWithEmailLink",on(n,e))}async function V_(n,e){return Gi(n,"POST","/v1/accounts:signInWithEmailLink",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends qo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new vr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ec(e,t,"signInWithPassword",D_);case"emailLink":return N_(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ec(e,r,"signUpPassword",k_);case"emailLink":return V_(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,e){return Gi(n,"POST","/v1/accounts:signInWithIdp",on(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="http://localhost";class nn extends qo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Uo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new nn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Tn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tn(e,t)}buildRequest(){const e={requestUri:O_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=br(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function L_(n){const e=sr(or(n)).link,t=e?sr(or(e)).deep_link_id:null,r=sr(or(n)).deep_link_id;return(r?sr(or(r)).link:null)||r||t||e||n}class Ho{constructor(e){var t,r,i,s,a,u;const c=sr(or(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=x_((i=c.mode)!==null&&i!==void 0?i:null);W(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=c.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=L_(e);try{return new Ho(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.providerId=Mn.PROVIDER_ID}static credential(e,t){return vr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ho.parseLink(t);return W(r,"argument-error"),vr._fromEmailAndCode(e,r.code,r.tenantId)}}Mn.PROVIDER_ID="password";Mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Dr{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pt.credential(t,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Dr{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Dr{constructor(){super("twitter.com")}static credential(e,t){return nn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return bt.credential(t,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ht._fromIdTokenResponse(e,r,i),a=nc(r);return new An({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=nc(r);return new An({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function nc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Et{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Pi(e,t,r,i)}}function ah(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pi._fromErrorAndOperation(n,s,e,r):s})}async function M_(n,e,t=!1){const r=await yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return An._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(n,e,t=!1){const{auth:r}=n;if(Qe(r.app))return Promise.reject(xt(r));const i="reauthenticate";try{const s=await yr(n,ah(r,i,e,n),t);W(s.idToken,r,"internal-error");const a=Bo(s.idToken);W(a,r,"internal-error");const{sub:u}=a;return W(n.uid===u,r,"user-mismatch"),An._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(n,e,t=!1){if(Qe(n.app))return Promise.reject(xt(n));const r="signIn",i=await ah(n,r,e),s=await An._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function F_(n,e){return uh(Ln(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n){const e=Ln(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function B_(n,e,t){return Qe(n.app)?Promise.reject(xt(n)):F_(Fe(n),Mn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&j_(n),r})}function $_(n,e,t,r){return Fe(n).onIdTokenChanged(e,t,r)}function q_(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}const Ci="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ci,"1"),this.storage.removeItem(Ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=1e3,z_=10;class lh extends ch{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=th(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);h_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,z_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},H_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lh.type="LOCAL";const W_=lh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh extends ch{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hh.type="SESSION";const dh=hh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Yi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async h=>h(t.origin,s)),c=await K_(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,c)=>{const h=zo("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(y.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Q_(n){tt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Y_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function X_(){return fh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="firebaseLocalStorageDb",Z_=1,bi="firebaseLocalStorage",mh="fbase_key";class Nr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ji(n,e){return n.transaction([bi],e?"readwrite":"readonly").objectStore(bi)}function ey(){const n=indexedDB.deleteDatabase(ph);return new Nr(n).toPromise()}function lo(){const n=indexedDB.open(ph,Z_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bi,{keyPath:mh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bi)?e(r):(r.close(),await ey(),e(await lo()))})})}async function rc(n,e,t){const r=Ji(n,!0).put({[mh]:e,value:t});return new Nr(r).toPromise()}async function ty(n,e){const t=Ji(n,!1).get(e),r=await new Nr(t).toPromise();return r===void 0?null:r.value}function ic(n,e){const t=Ji(n,!0).delete(e);return new Nr(t).toPromise()}const ny=800,ry=3;class gh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ry)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yi._getInstance(X_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Y_(),!this.activeServiceWorker)return;this.sender=new G_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lo();return await rc(e,Ci,"1"),await ic(e,Ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ty(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ic(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ji(i,!1).getAll();return new Nr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ny)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gh.type="LOCAL";const iy=gh;new kr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(n,e){return e?dt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends qo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oy(n){return uh(n.auth,new Wo(n),n.bypassAuthState)}function ay(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),U_(t,new Wo(n),n.bypassAuthState)}async function uy(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),M_(t,new Wo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oy;case"linkViaPopup":case"linkViaRedirect":return uy;case"reauthViaPopup":case"reauthViaRedirect":return ay;default:Je(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new kr(2e3,1e4);class yn extends _h{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cy.get())};e()}}yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="pendingRedirect",fi=new Map;class hy extends _h{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fi.get(this.auth._key());if(!e){try{const r=await dy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fi.set(this.auth._key(),e)}return this.bypassAuthState||fi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dy(n,e){const t=my(e),r=py(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function fy(n,e){fi.set(n._key(),e)}function py(n){return dt(n._redirectPersistence)}function my(n){return di(ly,n.config.apiKey,n.name)}async function gy(n,e,t=!1){if(Qe(n.app))return Promise.reject(xt(n));const r=Ln(n),i=sy(r,e),a=await new hy(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=10*60*1e3;class yy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!yh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_y&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function yh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ey(n,e={}){return Wt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wy=/^https?/;async function Iy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Ey(n);for(const t of e)try{if(Ay(t))return}catch{}Je(n,"unauthorized-domain")}function Ay(n){const e=uo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!wy.test(t))return!1;if(Ty.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new kr(3e4,6e4);function oc(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sy(n){return new Promise((e,t)=>{var r,i,s;function a(){oc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oc(),t(et(n,"network-request-failed"))},timeout:Ry.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)a();else{const u=E_("iframefcb");return tt()[u]=()=>{gapi.load?a():t(et(n,"network-request-failed"))},rh(`${v_()}?onload=${u}`).catch(c=>t(c))}}).catch(e=>{throw pi=null,e})}let pi=null;function Py(n){return pi=pi||Sy(n),pi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new kr(5e3,15e3),by="__/auth/iframe",ky="emulator/auth/iframe",Dy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ny=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vy(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jo(e,ky):`https://${n.config.authDomain}/${by}`,r={apiKey:e.apiKey,appName:n.name,v:xn},i=Ny.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${br(r).slice(1)}`}async function Oy(n){const e=await Py(n),t=tt().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:Vy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=et(n,"network-request-failed"),u=tt().setTimeout(()=>{s(a)},Cy.get());function c(){tt().clearTimeout(u),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ly=500,My=600,Uy="_blank",Fy="http://localhost";class ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jy(n,e,t,r=Ly,i=My){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},xy),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Le().toLowerCase();t&&(u=Yl(h)?Uy:t),Gl(h)&&(e=e||Fy,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[A,P])=>`${y}${A}=${P},`,"");if(l_(h)&&u!=="_self")return By(e||"",u),new ac(null);const m=window.open(e||"",u,f);W(m,n,"popup-blocked");try{m.focus()}catch{}return new ac(m)}function By(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="__/auth/handler",qy="emulator/auth/handler",Hy=encodeURIComponent("fac");async function uc(n,e,t,r,i,s){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:xn,eventId:i};if(e instanceof oh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Vm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof Dr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const f of Object.keys(u))u[f]===void 0&&delete u[f];const c=await n._getAppCheckToken(),h=c?`#${Hy}=${encodeURIComponent(c)}`:"";return`${zy(n)}?${br(u).slice(1)}${h}`}function zy({config:n}){return n.emulator?jo(n,qy):`https://${n.authDomain}/${$y}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="webStorageSupport";class Wy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dh,this._completeRedirectFn=gy,this._overrideRedirectResult=fy}async _openPopup(e,t,r,i){var s;gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await uc(e,t,r,uo(),i);return jy(e,a,zo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await uc(e,t,r,uo(),i);return Q_(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Oy(e),r=new yy(e);return t.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ys,{type:Ys},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ys];a!==void 0&&t(!!a),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Iy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return th()||Ql()||$o()}}const Ky=Wy;var cc="@firebase/auth",lc="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yy(n){In(new tn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nh(n)},h=new g_(r,i,s,c);return S_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),In(new tn("auth-internal",e=>{const t=Ln(e.getProvider("auth").getImmediate());return(r=>new Gy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(cc,lc,Qy(n)),Ot(cc,lc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=5*60,Xy=Nl("authIdTokenMaxAge")||Jy;let hc=null;const Zy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Xy)return;const i=t==null?void 0:t.token;hc!==i&&(hc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vh(n=Ll()){const e=Mo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=R_(n,{popupRedirectResolver:Ky,persistence:[iy,W_,dh]}),r=Nl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Zy(s.toString());q_(t,a,()=>a(t.currentUser)),$_(t,u=>a(u))}}const i=kl("auth");return i&&P_(t,`http://${i}`),t}function ev(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}__({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ev().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yy("Browser");const Eh=k.createContext(),tv=({component:n,...e})=>{const{currentUser:t}=k.useContext(Eh);return t?q.jsx(n,{...e}):q.jsx(bp,{to:"/login"})};var nv="firebase",rv="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(nv,rv,"app");var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lt,Th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function _(){}_.prototype=g.prototype,w.D=g.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(E,I,S){for(var v=Array(arguments.length-2),He=2;He<arguments.length;He++)v[He-2]=arguments[He];return g.prototype[I].apply(E,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,_){_||(_=0);var E=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)E[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;16>I;++I)E[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=w.g[0],_=w.g[1],I=w.g[2];var S=w.g[3],v=g+(S^_&(I^S))+E[0]+3614090360&4294967295;g=_+(v<<7&4294967295|v>>>25),v=S+(I^g&(_^I))+E[1]+3905402710&4294967295,S=g+(v<<12&4294967295|v>>>20),v=I+(_^S&(g^_))+E[2]+606105819&4294967295,I=S+(v<<17&4294967295|v>>>15),v=_+(g^I&(S^g))+E[3]+3250441966&4294967295,_=I+(v<<22&4294967295|v>>>10),v=g+(S^_&(I^S))+E[4]+4118548399&4294967295,g=_+(v<<7&4294967295|v>>>25),v=S+(I^g&(_^I))+E[5]+1200080426&4294967295,S=g+(v<<12&4294967295|v>>>20),v=I+(_^S&(g^_))+E[6]+2821735955&4294967295,I=S+(v<<17&4294967295|v>>>15),v=_+(g^I&(S^g))+E[7]+4249261313&4294967295,_=I+(v<<22&4294967295|v>>>10),v=g+(S^_&(I^S))+E[8]+1770035416&4294967295,g=_+(v<<7&4294967295|v>>>25),v=S+(I^g&(_^I))+E[9]+2336552879&4294967295,S=g+(v<<12&4294967295|v>>>20),v=I+(_^S&(g^_))+E[10]+4294925233&4294967295,I=S+(v<<17&4294967295|v>>>15),v=_+(g^I&(S^g))+E[11]+2304563134&4294967295,_=I+(v<<22&4294967295|v>>>10),v=g+(S^_&(I^S))+E[12]+1804603682&4294967295,g=_+(v<<7&4294967295|v>>>25),v=S+(I^g&(_^I))+E[13]+4254626195&4294967295,S=g+(v<<12&4294967295|v>>>20),v=I+(_^S&(g^_))+E[14]+2792965006&4294967295,I=S+(v<<17&4294967295|v>>>15),v=_+(g^I&(S^g))+E[15]+1236535329&4294967295,_=I+(v<<22&4294967295|v>>>10),v=g+(I^S&(_^I))+E[1]+4129170786&4294967295,g=_+(v<<5&4294967295|v>>>27),v=S+(_^I&(g^_))+E[6]+3225465664&4294967295,S=g+(v<<9&4294967295|v>>>23),v=I+(g^_&(S^g))+E[11]+643717713&4294967295,I=S+(v<<14&4294967295|v>>>18),v=_+(S^g&(I^S))+E[0]+3921069994&4294967295,_=I+(v<<20&4294967295|v>>>12),v=g+(I^S&(_^I))+E[5]+3593408605&4294967295,g=_+(v<<5&4294967295|v>>>27),v=S+(_^I&(g^_))+E[10]+38016083&4294967295,S=g+(v<<9&4294967295|v>>>23),v=I+(g^_&(S^g))+E[15]+3634488961&4294967295,I=S+(v<<14&4294967295|v>>>18),v=_+(S^g&(I^S))+E[4]+3889429448&4294967295,_=I+(v<<20&4294967295|v>>>12),v=g+(I^S&(_^I))+E[9]+568446438&4294967295,g=_+(v<<5&4294967295|v>>>27),v=S+(_^I&(g^_))+E[14]+3275163606&4294967295,S=g+(v<<9&4294967295|v>>>23),v=I+(g^_&(S^g))+E[3]+4107603335&4294967295,I=S+(v<<14&4294967295|v>>>18),v=_+(S^g&(I^S))+E[8]+1163531501&4294967295,_=I+(v<<20&4294967295|v>>>12),v=g+(I^S&(_^I))+E[13]+2850285829&4294967295,g=_+(v<<5&4294967295|v>>>27),v=S+(_^I&(g^_))+E[2]+4243563512&4294967295,S=g+(v<<9&4294967295|v>>>23),v=I+(g^_&(S^g))+E[7]+1735328473&4294967295,I=S+(v<<14&4294967295|v>>>18),v=_+(S^g&(I^S))+E[12]+2368359562&4294967295,_=I+(v<<20&4294967295|v>>>12),v=g+(_^I^S)+E[5]+4294588738&4294967295,g=_+(v<<4&4294967295|v>>>28),v=S+(g^_^I)+E[8]+2272392833&4294967295,S=g+(v<<11&4294967295|v>>>21),v=I+(S^g^_)+E[11]+1839030562&4294967295,I=S+(v<<16&4294967295|v>>>16),v=_+(I^S^g)+E[14]+4259657740&4294967295,_=I+(v<<23&4294967295|v>>>9),v=g+(_^I^S)+E[1]+2763975236&4294967295,g=_+(v<<4&4294967295|v>>>28),v=S+(g^_^I)+E[4]+1272893353&4294967295,S=g+(v<<11&4294967295|v>>>21),v=I+(S^g^_)+E[7]+4139469664&4294967295,I=S+(v<<16&4294967295|v>>>16),v=_+(I^S^g)+E[10]+3200236656&4294967295,_=I+(v<<23&4294967295|v>>>9),v=g+(_^I^S)+E[13]+681279174&4294967295,g=_+(v<<4&4294967295|v>>>28),v=S+(g^_^I)+E[0]+3936430074&4294967295,S=g+(v<<11&4294967295|v>>>21),v=I+(S^g^_)+E[3]+3572445317&4294967295,I=S+(v<<16&4294967295|v>>>16),v=_+(I^S^g)+E[6]+76029189&4294967295,_=I+(v<<23&4294967295|v>>>9),v=g+(_^I^S)+E[9]+3654602809&4294967295,g=_+(v<<4&4294967295|v>>>28),v=S+(g^_^I)+E[12]+3873151461&4294967295,S=g+(v<<11&4294967295|v>>>21),v=I+(S^g^_)+E[15]+530742520&4294967295,I=S+(v<<16&4294967295|v>>>16),v=_+(I^S^g)+E[2]+3299628645&4294967295,_=I+(v<<23&4294967295|v>>>9),v=g+(I^(_|~S))+E[0]+4096336452&4294967295,g=_+(v<<6&4294967295|v>>>26),v=S+(_^(g|~I))+E[7]+1126891415&4294967295,S=g+(v<<10&4294967295|v>>>22),v=I+(g^(S|~_))+E[14]+2878612391&4294967295,I=S+(v<<15&4294967295|v>>>17),v=_+(S^(I|~g))+E[5]+4237533241&4294967295,_=I+(v<<21&4294967295|v>>>11),v=g+(I^(_|~S))+E[12]+1700485571&4294967295,g=_+(v<<6&4294967295|v>>>26),v=S+(_^(g|~I))+E[3]+2399980690&4294967295,S=g+(v<<10&4294967295|v>>>22),v=I+(g^(S|~_))+E[10]+4293915773&4294967295,I=S+(v<<15&4294967295|v>>>17),v=_+(S^(I|~g))+E[1]+2240044497&4294967295,_=I+(v<<21&4294967295|v>>>11),v=g+(I^(_|~S))+E[8]+1873313359&4294967295,g=_+(v<<6&4294967295|v>>>26),v=S+(_^(g|~I))+E[15]+4264355552&4294967295,S=g+(v<<10&4294967295|v>>>22),v=I+(g^(S|~_))+E[6]+2734768916&4294967295,I=S+(v<<15&4294967295|v>>>17),v=_+(S^(I|~g))+E[13]+1309151649&4294967295,_=I+(v<<21&4294967295|v>>>11),v=g+(I^(_|~S))+E[4]+4149444226&4294967295,g=_+(v<<6&4294967295|v>>>26),v=S+(_^(g|~I))+E[11]+3174756917&4294967295,S=g+(v<<10&4294967295|v>>>22),v=I+(g^(S|~_))+E[2]+718787259&4294967295,I=S+(v<<15&4294967295|v>>>17),v=_+(S^(I|~g))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var _=g-this.blockSize,E=this.B,I=this.h,S=0;S<g;){if(I==0)for(;S<=_;)i(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<g;)if(E[I++]=w.charCodeAt(S++),I==this.blockSize){i(this,E),I=0;break}}else for(;S<g;)if(E[I++]=w[S++],I==this.blockSize){i(this,E),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var _=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=_&255,_/=256;for(this.u(w),w=Array(16),g=_=0;4>g;++g)for(var E=0;32>E;E+=8)w[_++]=this.g[g]>>>E&255;return w};function s(w,g){var _=u;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=g(w)}function a(w,g){this.h=g;for(var _=[],E=!0,I=w.length-1;0<=I;I--){var S=w[I]|0;E&&S==g||(_[I]=S,E=!1)}this.g=_}var u={};function c(w){return-128<=w&&128>w?s(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return C(h(-w));for(var g=[],_=1,E=0;w>=_;E++)g[E]=w/_|0,_*=4294967296;return new a(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return C(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),E=m,I=0;I<w.length;I+=8){var S=Math.min(8,w.length-I),v=parseInt(w.substring(I,I+S),g);8>S?(S=h(Math.pow(g,S)),E=E.j(S).add(h(v))):(E=E.j(_),E=E.add(h(v)))}return E}var m=c(0),y=c(1),A=c(16777216);n=a.prototype,n.m=function(){if(V(this))return-C(this).m();for(var w=0,g=1,_=0;_<this.g.length;_++){var E=this.i(_);w+=(0<=E?E:4294967296+E)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(V(this))return"-"+C(this).toString(w);for(var g=h(Math.pow(w,6)),_=this,E="";;){var I=G(_,g).g;_=D(_,I.j(g));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=I,P(_))return S+E;for(;6>S.length;)S="0"+S;E=S+E}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function V(w){return w.h==-1}n.l=function(w){return w=D(this,w),V(w)?-1:P(w)?0:1};function C(w){for(var g=w.g.length,_=[],E=0;E<g;E++)_[E]=~w.g[E];return new a(_,~w.h).add(y)}n.abs=function(){return V(this)?C(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],E=0,I=0;I<=g;I++){var S=E+(this.i(I)&65535)+(w.i(I)&65535),v=(S>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);E=v>>>16,S&=65535,v&=65535,_[I]=v<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function D(w,g){return w.add(C(g))}n.j=function(w){if(P(this)||P(w))return m;if(V(this))return V(w)?C(this).j(C(w)):C(C(this).j(w));if(V(w))return C(this.j(C(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,_=[],E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<w.g.length;I++){var S=this.i(E)>>>16,v=this.i(E)&65535,He=w.i(I)>>>16,je=w.i(I)&65535;_[2*E+2*I]+=v*je,M(_,2*E+2*I),_[2*E+2*I+1]+=S*je,M(_,2*E+2*I+1),_[2*E+2*I+1]+=v*He,M(_,2*E+2*I+1),_[2*E+2*I+2]+=S*He,M(_,2*E+2*I+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new a(_,0)};function M(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function L(w,g){this.g=w,this.h=g}function G(w,g){if(P(g))throw Error("division by zero");if(P(w))return new L(m,m);if(V(w))return g=G(C(w),g),new L(C(g.g),C(g.h));if(V(g))return g=G(w,C(g)),new L(C(g.g),g.h);if(30<w.g.length){if(V(w)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,E=g;0>=E.l(w);)_=B(_),E=B(E);var I=ie(_,1),S=ie(E,1);for(E=ie(E,2),_=ie(_,2);!P(E);){var v=S.add(E);0>=v.l(w)&&(I=I.add(_),S=v),E=ie(E,1),_=ie(_,1)}return g=D(w,I.j(g)),new L(I,g)}for(I=m;0<=w.l(g);){for(_=Math.max(1,Math.floor(w.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),S=h(_),v=S.j(g);V(v)||0<v.l(w);)_-=E,S=h(_),v=S.j(g);P(S)&&(S=y),I=I.add(S),w=D(w,v)}return new L(I,w)}n.A=function(w){return G(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)&w.i(E);return new a(_,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)|w.i(E);return new a(_,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)^w.i(E);return new a(_,this.h^w.h)};function B(w){for(var g=w.g.length+1,_=[],E=0;E<g;E++)_[E]=w.i(E)<<1|w.i(E-1)>>>31;return new a(_,w.h)}function ie(w,g){var _=g>>5;g%=32;for(var E=w.g.length-_,I=[],S=0;S<E;S++)I[S]=0<g?w.i(S+_)>>>g|w.i(S+_+1)<<32-g:w.i(S+_);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Lt=a}).apply(typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{});var ii=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wh,ar,Ih,mi,ho,Ah,Rh,Sh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ii=="object"&&ii];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var b=d++;return{value:l(b,o[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function f(o,l,d){return o.call.apply(o.bind,arguments)}function m(o,l,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(l,R)}}return function(){return o.apply(l,arguments)}}function y(o,l,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function A(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,b){for(var U=Array(arguments.length-2),he=2;he<arguments.length;he++)U[he-2]=arguments[he];return l.prototype[R].apply(p,U)}}function V(o){const l=o.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function C(o,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const R=o.length||0,b=p.length||0;o.length=R+b;for(let U=0;U<b;U++)o[R+U]=p[U]}else o.push(p)}}class D{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function G(o){return G[" "](o),o}G[" "]=function(){};var B=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function ie(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function w(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function g(o){const l={};for(const d in o)l[d]=o[d];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let b=0;b<_.length;b++)d=_[b],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function S(o){u.setTimeout(()=>{throw o},0)}function v(){var o=de;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class He{constructor(){this.h=this.g=null}add(l,d){const p=je.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var je=new D(()=>new Q,o=>o.reset());class Q{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ce=!1,de=new He,T=()=>{const o=u.Promise.resolve(void 0);oe=()=>{o.then(x)}};var x=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){S(d)}var l=je;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}ce=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function j(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}j.prototype.h=function(){this.defaultPrevented=!0};var Z=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function le(o,l){if(j.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(B){e:{try{G(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ee[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&le.aa.h.call(this)}}P(le,j);var ee={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),ye=0;function ms(o,l,d,p,R){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=R,this.key=++ye,this.da=this.fa=!1}function Ur(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fr(o){this.src=o,this.g={},this.h=0}Fr.prototype.add=function(o,l,d,p,R){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var U=_s(o,l,p,R);return-1<U?(l=o[U],d||(l.fa=!1)):(l=new ms(l,this.src,b,!!p,R),l.fa=d,o.push(l)),l};function gs(o,l){var d=l.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,l,void 0),b;(b=0<=R)&&Array.prototype.splice.call(p,R,1),b&&(Ur(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function _s(o,l,d,p){for(var R=0;R<o.length;++R){var b=o[R];if(!b.da&&b.listener==l&&b.capture==!!d&&b.ha==p)return R}return-1}var ys="closure_lm_"+(1e6*Math.random()|0),vs={};function Ra(o,l,d,p,R){if(Array.isArray(l)){for(var b=0;b<l.length;b++)Ra(o,l[b],d,p,R);return null}return d=Ca(d),o&&o[ze]?o.K(l,d,h(p)?!!p.capture:!1,R):sf(o,l,d,!1,p,R)}function sf(o,l,d,p,R,b){if(!l)throw Error("Invalid event type");var U=h(R)?!!R.capture:!!R,he=Ts(o);if(he||(o[ys]=he=new Fr(o)),d=he.add(l,d,p,U,b),d.proxy)return d;if(p=of(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Z||(R=U),R===void 0&&(R=!1),o.addEventListener(l.toString(),p,R);else if(o.attachEvent)o.attachEvent(Pa(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function of(){function o(d){return l.call(o.src,o.listener,d)}const l=af;return o}function Sa(o,l,d,p,R){if(Array.isArray(l))for(var b=0;b<l.length;b++)Sa(o,l[b],d,p,R);else p=h(p)?!!p.capture:!!p,d=Ca(d),o&&o[ze]?(o=o.i,l=String(l).toString(),l in o.g&&(b=o.g[l],d=_s(b,d,p,R),-1<d&&(Ur(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ts(o))&&(l=o.g[l.toString()],o=-1,l&&(o=_s(l,d,p,R)),(d=-1<o?l[o]:null)&&Es(d))}function Es(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[ze])gs(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(Pa(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Ts(l))?(gs(d,o),d.h==0&&(d.src=null,l[ys]=null)):Ur(o)}}}function Pa(o){return o in vs?vs[o]:vs[o]="on"+o}function af(o,l){if(o.da)o=!0;else{l=new le(l,this);var d=o.listener,p=o.ha||o.src;o.fa&&Es(o),o=d.call(p,l)}return o}function Ts(o){return o=o[ys],o instanceof Fr?o:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ca(o){return typeof o=="function"?o:(o[ws]||(o[ws]=function(l){return o.handleEvent(l)}),o[ws])}function be(){$.call(this),this.i=new Fr(this),this.M=this,this.F=null}P(be,$),be.prototype[ze]=!0,be.prototype.removeEventListener=function(o,l,d,p){Sa(this,o,l,d,p)};function Me(o,l){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new j(l,o);else if(l instanceof j)l.target=l.target||o;else{var R=l;l=new j(p,o),E(l,R)}if(R=!0,d)for(var b=d.length-1;0<=b;b--){var U=l.g=d[b];R=jr(U,p,!0,l)&&R}if(U=l.g=o,R=jr(U,p,!0,l)&&R,R=jr(U,p,!1,l)&&R,d)for(b=0;b<d.length;b++)U=l.g=d[b],R=jr(U,p,!1,l)&&R}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],p=0;p<d.length;p++)Ur(d[p]);delete o.g[l],o.h--}}this.F=null},be.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},be.prototype.L=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function jr(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,b=0;b<l.length;++b){var U=l[b];if(U&&!U.da&&U.capture==d){var he=U.listener,Re=U.ha||U.src;U.fa&&gs(o.i,U),R=he.call(Re,p)!==!1&&R}}return R&&!p.defaultPrevented}function ba(o,l,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function ka(o){o.g=ba(()=>{o.g=null,o.i&&(o.i=!1,ka(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class uf extends ${constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ka(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $n(o){$.call(this),this.h=o,this.g={}}P($n,$);var Da=[];function Na(o){ie(o.g,function(l,d){this.g.hasOwnProperty(d)&&Es(l)},o),o.g={}}$n.prototype.N=function(){$n.aa.N.call(this),Na(this)},$n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Is=u.JSON.stringify,cf=u.JSON.parse,lf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function As(){}As.prototype.h=null;function Va(o){return o.h||(o.h=o.i())}function Oa(){}var qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rs(){j.call(this,"d")}P(Rs,j);function Ss(){j.call(this,"c")}P(Ss,j);var Qt={},xa=null;function Br(){return xa=xa||new be}Qt.La="serverreachability";function La(o){j.call(this,Qt.La,o)}P(La,j);function Hn(o){const l=Br();Me(l,new La(l))}Qt.STAT_EVENT="statevent";function Ma(o,l){j.call(this,Qt.STAT_EVENT,o),this.stat=l}P(Ma,j);function Ue(o){const l=Br();Me(l,new Ma(l,o))}Qt.Ma="timingevent";function Ua(o,l){j.call(this,Qt.Ma,o),this.size=l}P(Ua,j);function zn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function Wn(){this.g=!0}Wn.prototype.xa=function(){this.g=!1};function hf(o,l,d,p,R,b){o.info(function(){if(o.g)if(b)for(var U="",he=b.split("&"),Re=0;Re<he.length;Re++){var ae=he[Re].split("=");if(1<ae.length){var ke=ae[0];ae=ae[1];var De=ke.split("_");U=2<=De.length&&De[1]=="type"?U+(ke+"="+ae+"&"):U+(ke+"=redacted&")}}else U=null;else U=b;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+d+`
`+U})}function df(o,l,d,p,R,b,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+d+`
`+b+" "+U})}function cn(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+pf(o,d)+(p?" "+p:"")})}function ff(o,l){o.info(function(){return"TIMEOUT: "+l})}Wn.prototype.info=function(){};function pf(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var b=R[0];if(b!="noop"&&b!="stop"&&b!="close")for(var U=1;U<R.length;U++)R[U]=""}}}}return Is(d)}catch{return l}}var $r={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ps;function qr(){}P(qr,As),qr.prototype.g=function(){return new XMLHttpRequest},qr.prototype.i=function(){return{}},Ps=new qr;function Tt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.R=p||1,this.U=new $n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ja}function ja(){this.i=null,this.g="",this.h=!1}var Ba={},Cs={};function bs(o,l,d){o.L=1,o.v=Kr(ut(l)),o.m=d,o.P=!0,$a(o,null)}function $a(o,l){o.F=Date.now(),Hr(o),o.A=ut(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),nu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ja,o.g=Eu(o.j,d?l:null,!o.m),0<o.O&&(o.M=new uf(y(o.Y,o,o.g),o.O)),l=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Da[0]=R.toString()),R=Da);for(var b=0;b<R.length;b++){var U=Ra(d,R[b],p||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Hn(),hf(o.i,o.u,o.A,o.l,o.R,o.m)}Tt.prototype.ca=function(o){o=o.target;const l=this.M;l&&ct(o)==3?l.j():this.Y(o)},Tt.prototype.Y=function(o){try{if(o==this.g)e:{const De=ct(this.g);var l=this.g.Ba();const dn=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||cu(this.g)))){this.J||De!=4||l==7||(l==8||0>=dn?Hn(3):Hn(2)),ks(this);var d=this.g.Z();this.X=d;t:if(qa(this)){var p=cu(this.g);o="";var R=p.length,b=ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Kn(this);var U="";break t}this.h.i=new u.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(b&&l==R-1)});p.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,df(this.i,this.u,this.A,this.l,this.R,De,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Re=this.g;if((he=Re.g?Re.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(he)){var ae=he;break t}}ae=null}if(d=ae)cn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ds(this,d);else{this.o=!1,this.s=3,Ue(12),Yt(this),Kn(this);break e}}if(this.P){d=!0;let Ge;for(;!this.J&&this.C<U.length;)if(Ge=mf(this,U),Ge==Cs){De==4&&(this.s=4,Ue(14),d=!1),cn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==Ba){this.s=4,Ue(15),cn(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else cn(this.i,this.l,Ge,null),Ds(this,Ge);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||U.length!=0||this.h.h||(this.s=1,Ue(16),d=!1),this.o=this.o&&d,!d)cn(this.i,this.l,U,"[Invalid Chunked Response]"),Yt(this),Kn(this);else if(0<U.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Ms(ke),ke.M=!0,Ue(11))}}else cn(this.i,this.l,U,null),Ds(this,U);De==4&&Yt(this),this.o&&!this.J&&(De==4?gu(this.j,this):(this.o=!1,Hr(this)))}else Nf(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),Yt(this),Kn(this)}}}catch{}finally{}};function qa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function mf(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?Cs:(d=Number(l.substring(d,p)),isNaN(d)?Ba:(p+=1,p+d>l.length?Cs:(l=l.slice(p,p+d),o.C=p+d,l)))}Tt.prototype.cancel=function(){this.J=!0,Yt(this)};function Hr(o){o.S=Date.now()+o.I,Ha(o,o.I)}function Ha(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=zn(y(o.ba,o),l)}function ks(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Tt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ff(this.i,this.A),this.L!=2&&(Hn(),Ue(17)),Yt(this),this.s=2,Kn(this)):Ha(this,this.S-o)};function Kn(o){o.j.G==0||o.J||gu(o.j,o)}function Yt(o){ks(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Na(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ds(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Ns(d.h,o))){if(!o.K&&Ns(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Zr(d),Jr(d);else break e;Ls(d),Ue(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=zn(y(d.Za,d),6e3));if(1>=Ka(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Xt(d,11)}else if((o.K||d.g==o)&&Zr(d),!M(l))for(R=d.Da.g.parse(l),l=0;l<R.length;l++){let ae=R[l];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const ke=ae[3];ke!=null&&(d.la=ke,d.j.info("VER="+d.la));const De=ae[4];De!=null&&(d.Aa=De,d.j.info("SVER="+d.Aa));const dn=ae[5];dn!=null&&typeof dn=="number"&&0<dn&&(p=1.5*dn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ge=o.g;if(Ge){const ti=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ti){var b=p.h;b.g||ti.indexOf("spdy")==-1&&ti.indexOf("quic")==-1&&ti.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Vs(b,b.h),b.h=null))}if(p.D){const Us=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Us&&(p.ya=Us,fe(p.I,p.D,Us))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var U=o;if(p.qa=vu(p,p.J?p.ia:null,p.W),U.K){Ga(p.h,U);var he=U,Re=p.L;Re&&(he.I=Re),he.B&&(ks(he),Hr(he)),p.g=U}else pu(p);0<d.i.length&&Xr(d)}else ae[0]!="stop"&&ae[0]!="close"||Xt(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Xt(d,7):xs(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}Hn(4)}catch{}}var gf=class{constructor(o,l){this.g=o,this.map=l}};function za(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ka(o){return o.h?1:o.g?o.g.size:0}function Ns(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Vs(o,l){o.g?o.g.add(l):o.h=l}function Ga(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}za.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Qa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return V(o.i)}function _f(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,p=0;p<d;p++)l.push(o[p]);return l}l=[],d=0;for(p in o)l[d++]=o[p];return l}function yf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const p in o)l[d++]=p;return l}}}function Ya(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=yf(o),p=_f(o),R=p.length,b=0;b<R;b++)l.call(void 0,p[b],d&&d[b],o)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vf(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var b=o[d].substring(0,p);R=o[d].substring(p+1)}else b=o[d];l(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Jt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Jt){this.h=o.h,zr(this,o.j),this.o=o.o,this.g=o.g,Wr(this,o.s),this.l=o.l;var l=o.i,d=new Yn;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Xa(this,d),this.m=o.m}else o&&(l=String(o).match(Ja))?(this.h=!1,zr(this,l[1]||"",!0),this.o=Gn(l[2]||""),this.g=Gn(l[3]||"",!0),Wr(this,l[4]),this.l=Gn(l[5]||"",!0),Xa(this,l[6]||"",!0),this.m=Gn(l[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Jt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Qn(l,Za,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Qn(l,Za,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Qn(d,d.charAt(0)=="/"?wf:Tf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Qn(d,Af)),o.join("")};function ut(o){return new Jt(o)}function zr(o,l,d){o.j=d?Gn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Wr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Xa(o,l,d){l instanceof Yn?(o.i=l,Rf(o.i,o.h)):(d||(l=Qn(l,If)),o.i=new Yn(l,o.h))}function fe(o,l,d){o.i.set(l,d)}function Kr(o){return fe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qn(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Ef),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ef(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Za=/[#\/\?@]/g,Tf=/[#\?:]/g,wf=/[#\?]/g,If=/[#\?@]/g,Af=/#/g;function Yn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function wt(o){o.g||(o.g=new Map,o.h=0,o.i&&vf(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Yn.prototype,n.add=function(o,l){wt(this),this.i=null,o=ln(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function eu(o,l){wt(o),l=ln(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function tu(o,l){return wt(o),l=ln(o,l),o.g.has(l)}n.forEach=function(o,l){wt(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(l,R,p,this)},this)},this)},n.na=function(){wt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const R=o[p];for(let b=0;b<R.length;b++)d.push(l[p])}return d},n.V=function(o){wt(this);let l=[];if(typeof o=="string")tu(this,o)&&(l=l.concat(this.g.get(ln(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return wt(this),this.i=null,o=ln(this,o),tu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function nu(o,l,d){eu(o,l),0<d.length&&(o.i=null,o.g.set(ln(o,l),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const b=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var R=b;U[p]!==""&&(R+="="+encodeURIComponent(String(U[p]))),o.push(R)}}return this.i=o.join("&")};function ln(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Rf(o,l){l&&!o.j&&(wt(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(eu(this,p),nu(this,R,d))},o)),o.j=l}function Sf(o,l){const d=new Wn;if(u.Image){const p=new Image;p.onload=A(It,d,"TestLoadImage: loaded",!0,l,p),p.onerror=A(It,d,"TestLoadImage: error",!1,l,p),p.onabort=A(It,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(It,d,"TestLoadImage: timeout",!1,l,p),u.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Pf(o,l){const d=new Wn,p=new AbortController,R=setTimeout(()=>{p.abort(),It(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(b=>{clearTimeout(R),b.ok?It(d,"TestPingServer: ok",!0,l):It(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),It(d,"TestPingServer: error",!1,l)})}function It(o,l,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function Cf(){this.g=new lf}function bf(o,l,d){const p=d||"";try{Ya(o,function(R,b){let U=R;h(R)&&(U=Is(R)),l.push(p+b+"="+encodeURIComponent(U))})}catch(R){throw l.push(p+"type="+encodeURIComponent("_badmap")),R}}function Gr(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Gr,As),Gr.prototype.g=function(){return new Qr(this.l,this.j)},Gr.prototype.i=function(o){return function(){return o}}({});function Qr(o,l){be.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Qr,be),n=Qr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Xn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ru(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ru(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Jn(this):Xn(this),this.readyState==3&&ru(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Jn(this))},n.Qa=function(o){this.g&&(this.response=o,Jn(this))},n.ga=function(){this.g&&Jn(this)};function Jn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Xn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Xn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function iu(o){let l="";return ie(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Os(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=iu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):fe(o,l,d))}function _e(o){be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(_e,be);var kf=/^https?$/i,Df=["POST","PUT"];n=_e.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ps.g(),this.v=this.o?Va(this.o):Va(Ps),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(b){su(this,b);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())d.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),R=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Df,l,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,U]of d)this.g.setRequestHeader(b,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uu(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){su(this,b)}};function su(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ou(o),Yr(o)}function ou(o){o.A||(o.A=!0,Me(o,"complete"),Me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Me(this,"complete"),Me(this,"abort"),Yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yr(this,!0)),_e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?au(this):this.bb())},n.bb=function(){au(this)};function au(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ct(o)!=4||o.Z()!=2)){if(o.u&&ct(o)==4)ba(o.Ea,0,o);else if(Me(o,"readystatechange"),ct(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=U===0){var R=String(o.D).match(Ja)[1]||null;!R&&u.self&&u.self.location&&(R=u.self.location.protocol.slice(0,-1)),p=!kf.test(R?R.toLowerCase():"")}d=p}if(d)Me(o,"complete"),Me(o,"success");else{o.m=6;try{var b=2<ct(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",ou(o)}}finally{Yr(o)}}}}function Yr(o,l){if(o.g){uu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Me(o,"ready");try{d.onreadystatechange=p}catch{}}}function uu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ct(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),cf(l)}};function cu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Nf(o){const l={};o=(o.g&&2<=ct(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var d=I(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=l[R]||[];l[R]=b,b.push(d)}w(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function lu(o){this.Aa=0,this.i=[],this.j=new Wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,o),this.cb=Zn("retryDelaySeedMs",1e4,o),this.Wa=Zn("forwardChannelMaxRetries",2,o),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new za(o&&o.concurrentRequestLimit),this.Da=new Cf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=lu.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,p){Ue(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=vu(this,null,this.W),Xr(this)};function xs(o){if(hu(o),o.G==3){var l=o.U++,d=ut(o.I);if(fe(d,"SID",o.K),fe(d,"RID",l),fe(d,"TYPE","terminate"),er(o,d),l=new Tt(o,o.j,l),l.L=2,l.v=Kr(ut(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=Eu(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Hr(l)}yu(o)}function Jr(o){o.g&&(Ms(o),o.g.cancel(),o.g=null)}function hu(o){Jr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Zr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Xr(o){if(!Wa(o.h)&&!o.s){o.s=!0;var l=o.Ga;oe||T(),ce||(oe(),ce=!0),de.add(l,o),o.B=0}}function Vf(o,l){return Ka(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=zn(y(o.Ga,o,l),_u(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Tt(this,this.j,o);let b=this.o;if(this.S&&(b?(b=g(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(R.H=b,b=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=fu(this,R,l),d=ut(this.I),fe(d,"RID",o),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),er(this,d),b&&(this.O?l="headers="+encodeURIComponent(String(iu(b)))+"&"+l:this.m&&Os(d,this.m,b)),Vs(this.h,R),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",l),fe(d,"SID","null"),R.T=!0,bs(R,d,null)):bs(R,d,l),this.G=2}}else this.G==3&&(o?du(this,o):this.i.length==0||Wa(this.h)||du(this))};function du(o,l){var d;l?d=l.l:d=o.U++;const p=ut(o.I);fe(p,"SID",o.K),fe(p,"RID",d),fe(p,"AID",o.T),er(o,p),o.m&&o.o&&Os(p,o.m,o.o),d=new Tt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=fu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Vs(o.h,d),bs(d,p,l)}function er(o,l){o.H&&ie(o.H,function(d,p){fe(l,p,d)}),o.l&&Ya({},function(d,p){fe(l,p,d)})}function fu(o,l,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let b=-1;for(;;){const U=["count="+d];b==-1?0<d?(b=R[0].g,U.push("ofs="+b)):b=0:U.push("ofs="+b);let he=!0;for(let Re=0;Re<d;Re++){let ae=R[Re].g;const ke=R[Re].map;if(ae-=b,0>ae)b=Math.max(0,R[Re].g-100),he=!1;else try{bf(ke,U,"req"+ae+"_")}catch{p&&p(ke)}}if(he){p=U.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,p}function pu(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;oe||T(),ce||(oe(),ce=!0),de.add(l,o),o.v=0}}function Ls(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=zn(y(o.Fa,o),_u(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=zn(y(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),Jr(this),mu(this))};function Ms(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function mu(o){o.g=new Tt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ut(o.qa);fe(l,"RID","rpc"),fe(l,"SID",o.K),fe(l,"AID",o.T),fe(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&fe(l,"TO",o.ja),fe(l,"TYPE","xmlhttp"),er(o,l),o.m&&o.o&&Os(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Kr(ut(l)),d.m=null,d.P=!0,$a(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Jr(this),Ls(this),Ue(19))};function Zr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function gu(o,l){var d=null;if(o.g==l){Zr(o),Ms(o),o.g=null;var p=2}else if(Ns(o.h,l))d=l.D,Ga(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var R=o.B;p=Br(),Me(p,new Ua(p,d)),Xr(o)}else pu(o);else if(R=l.s,R==3||R==0&&0<l.X||!(p==1&&Vf(o,l)||p==2&&Ls(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),R){case 1:Xt(o,5);break;case 4:Xt(o,10);break;case 3:Xt(o,6);break;default:Xt(o,2)}}}function _u(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Xt(o,l){if(o.j.info("Error code "+l),l==2){var d=y(o.fb,o),p=o.Xa;const R=!p;p=new Jt(p||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||zr(p,"https"),Kr(p),R?Sf(p.toString(),d):Pf(p.toString(),d)}else Ue(2);o.G=0,o.l&&o.l.sa(l),yu(o),hu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function yu(o){if(o.G=0,o.ka=[],o.l){const l=Qa(o.h);(l.length!=0||o.i.length!=0)&&(C(o.ka,l),C(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function vu(o,l,d){var p=d instanceof Jt?ut(d):new Jt(d);if(p.g!="")l&&(p.g=l+"."+p.g),Wr(p,p.s);else{var R=u.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var b=new Jt(null);p&&zr(b,p),l&&(b.g=l),R&&Wr(b,R),d&&(b.l=d),p=b}return d=o.D,l=o.ya,d&&l&&fe(p,d,l),fe(p,"VER",o.la),er(o,p),p}function Eu(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new _e(new Gr({eb:d})):new _e(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tu(){}n=Tu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ei(){}ei.prototype.g=function(o,l){return new We(o,l)};function We(o,l){be.call(this),this.g=new lu(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!M(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!M(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new hn(this)}P(We,be),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){xs(this.g)},We.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Is(o),o=d);l.i.push(new gf(l.Ya++,o)),l.G==3&&Xr(l)},We.prototype.N=function(){this.g.l=null,delete this.j,xs(this.g),delete this.g,We.aa.N.call(this)};function wu(o){Rs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}P(wu,Rs);function Iu(){Ss.call(this),this.status=1}P(Iu,Ss);function hn(o){this.g=o}P(hn,Tu),hn.prototype.ua=function(){Me(this.g,"a")},hn.prototype.ta=function(o){Me(this.g,new wu(o))},hn.prototype.sa=function(o){Me(this.g,new Iu)},hn.prototype.ra=function(){Me(this.g,"b")},ei.prototype.createWebChannel=ei.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,Sh=function(){return new ei},Rh=function(){return Br()},Ah=Qt,ho={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$r.NO_ERROR=0,$r.TIMEOUT=8,$r.HTTP_ERROR=6,mi=$r,Fa.COMPLETE="complete",Ih=Fa,Oa.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",be.prototype.listen=be.prototype.K,ar=Oa,_e.prototype.listenOnce=_e.prototype.L,_e.prototype.getLastError=_e.prototype.Ka,_e.prototype.getLastErrorCode=_e.prototype.Ba,_e.prototype.getStatus=_e.prototype.Z,_e.prototype.getResponseJson=_e.prototype.Oa,_e.prototype.getResponseText=_e.prototype.oa,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Ha,wh=_e}).apply(typeof ii<"u"?ii:typeof self<"u"?self:typeof window<"u"?window:{});const fc="@firebase/firestore",pc="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new xo("@firebase/firestore");function pn(){return rn.logLevel}function F(n,...e){if(rn.logLevel<=te.DEBUG){const t=e.map(Ko);rn.debug(`Firestore (${Un}): ${n}`,...t)}}function _t(n,...e){if(rn.logLevel<=te.ERROR){const t=e.map(Ko);rn.error(`Firestore (${Un}): ${n}`,...t)}}function Rn(n,...e){if(rn.logLevel<=te.WARN){const t=e.map(Ko);rn.warn(`Firestore (${Un}): ${n}`,...t)}}function Ko(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n="Unexpected state"){const e=`FIRESTORE (${Un}) INTERNAL ASSERTION FAILED: `+n;throw _t(e),new Error(e)}function ue(n,e){n||K()}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class sv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ov{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new Ph(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Oe(e)}}class av{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class uv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new av(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cv{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Qe(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ue(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new mc(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string"),this.R=t.token,new mc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=lv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function Sn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=-62135596800,_c=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*_c);return new we(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<gc)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_c}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-gc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new we(0,0))}static max(){return new Y(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="__name__";class Ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ze.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Ze.isNumericId(e),i=Ze.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lt.fromString(e.substring(4,e.length-2))}}class pe extends Ze{construct(e,t,r){return new pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new pe(t)}static emptyPath(){return new pe([])}}const hv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Ze{construct(e,t,r){return new Pe(e,t,r)}static isValidIdentifier(e){return hv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yc}static keyField(){return new Pe([yc])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new H(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new H(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(t)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(pe.fromString(e))}static fromName(e){return new z(pe.fromString(e).popFirst(5))}static empty(){return new z(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new pe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=-1;function dv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new we(t+1,0):new we(t,r));return new Ft(i,z.empty(),e)}function fv(n){return new Ft(n.readTime,n.key,Er)}class Ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ft(Y.min(),z.empty(),Er)}static max(){return new Ft(Y.max(),z.empty(),Er)}}function pv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==mv)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},c=>r(c))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let u=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++u,u===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function _v(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Xi.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=-1;function Zi(n){return n==null}function ki(n){return n===0&&1/n==-1/0}function yv(n){return typeof n=="number"&&Number.isInteger(n)&&!ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="";function vv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=vc(e)),e=Ev(n.get(t),e);return vc(e)}function Ev(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case bh:t+="";break;default:t+=s}}return t}function vc(n){return n+bh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Kt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new si(this.root,e,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new si(this.root,e,this.comparator,!0)}}class si{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Se.RED,this.left=i??Se.EMPTY,this.right=s??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Se(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tc(this.data.getIterator())}getIteratorFrom(e){return new Tc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Tc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Ke([])}unionWith(e){let t=new Ie(Pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Sn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Dh("Invalid base64 string: "+s):s}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const Tv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(ue(!!n),typeof n=="string"){let e=0;const t=Tv.exec(n);if(ue(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Bt(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="server_timestamp",Vh="__type__",Oh="__previous_value__",xh="__local_write_time__";function Qo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Vh])===null||t===void 0?void 0:t.stringValue)===Nh}function es(n){const e=n.mapValue.fields[Oh];return Qo(e)?es(e):e}function Tr(n){const e=jt(n.mapValue.fields[xh].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t,r,i,s,a,u,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h}}const Di="(default)";class wr{constructor(e,t){this.projectId=e,this.database=t||Di}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database===Di}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="__type__",Iv="__max__",oi={mapValue:{}},Mh="__vector__",Ni="value";function $t(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qo(n)?4:Rv(n)?9007199254740991:Av(n)?10:11:K()}function st(n,e){if(n===e)return!0;const t=$t(n);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Tr(n).isEqual(Tr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=jt(i.timestampValue),u=jt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Bt(i.bytesValue).isEqual(Bt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ve(i.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ve(i.integerValue)===ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ve(i.doubleValue),u=ve(s.doubleValue);return a===u?ki(a)===ki(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Sn(n.arrayValue.values||[],e.arrayValue.values||[],st);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Ec(a)!==Ec(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!st(a[c],u[c])))return!1;return!0}(n,e);default:return K()}}function Ir(n,e){return(n.values||[]).find(t=>st(t,e))!==void 0}function Pn(n,e){if(n===e)return 0;const t=$t(n),r=$t(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return function(s,a){const u=ve(s.integerValue||s.doubleValue),c=ve(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(n,e);case 3:return wc(n.timestampValue,e.timestampValue);case 4:return wc(Tr(n),Tr(e));case 5:return re(n.stringValue,e.stringValue);case 6:return function(s,a){const u=Bt(s),c=Bt(a);return u.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),c=a.split("/");for(let h=0;h<u.length&&h<c.length;h++){const f=re(u[h],c[h]);if(f!==0)return f}return re(u.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const u=re(ve(s.latitude),ve(a.latitude));return u!==0?u:re(ve(s.longitude),ve(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ic(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,c,h,f;const m=s.fields||{},y=a.fields||{},A=(u=m[Ni])===null||u===void 0?void 0:u.arrayValue,P=(c=y[Ni])===null||c===void 0?void 0:c.arrayValue,V=re(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Ic(A,P)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===oi.mapValue&&a===oi.mapValue)return 0;if(s===oi.mapValue)return 1;if(a===oi.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const y=re(c[m],f[m]);if(y!==0)return y;const A=Pn(u[c[m]],h[f[m]]);if(A!==0)return A}return re(c.length,f.length)}(n.mapValue,e.mapValue);default:throw K()}}function wc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=jt(n),r=jt(e),i=re(t.seconds,r.seconds);return i!==0?i:re(t.nanos,r.nanos)}function Ic(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Pn(t[i],r[i]);if(s)return s}return re(t.length,r.length)}function Cn(n){return fo(n)}function fo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=fo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${fo(t.fields[a])}`;return i+"}"}(n.mapValue):K()}function gi(n){switch($t(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=es(n);return e?16+gi(e):16;case 5:return 2*n.stringValue.length;case 6:return Bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+gi(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Kt(r.fields,(s,a)=>{i+=s.length+gi(a)}),i}(n.mapValue);default:throw K()}}function po(n){return!!n&&"integerValue"in n}function Yo(n){return!!n&&"arrayValue"in n}function Ac(n){return!!n&&"nullValue"in n}function Rc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _i(n){return!!n&&"mapValue"in n}function Av(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Lh])===null||t===void 0?void 0:t.stringValue)===Mh}function dr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Kt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=dr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Rv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Iv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.value=e}static empty(){return new $e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_i(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dr(t)}setAll(e){let t=Pe.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=dr(a):i.push(u.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());_i(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];_i(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Kt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $e(dr(this.value))}}function Uh(n){const e=[];return Kt(n.fields,(t,r)=>{const i=new Pe([t]);if(_i(r)){const s=Uh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new xe(e,0,Y.min(),Y.min(),Y.min(),$e.empty(),0)}static newFoundDocument(e,t,r,i){return new xe(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new xe(e,2,t,Y.min(),Y.min(),$e.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,Y.min(),Y.min(),$e.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,t){this.position=e,this.inclusive=t}}function Sc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=Pn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!st(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{}class Te extends Fh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cv(e,t,r):t==="array-contains"?new Dv(e,r):t==="in"?new Nv(e,r):t==="not-in"?new Vv(e,r):t==="array-contains-any"?new Ov(e,r):new Te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bv(e,r):new kv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Pn(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(Pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends Fh{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new ot(e,t)}matches(e){return jh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function jh(n){return n.op==="and"}function Bh(n){return Pv(n)&&jh(n)}function Pv(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function mo(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+Cn(n.value);if(Bh(n))return n.filters.map(e=>mo(e)).join(",");{const e=n.filters.map(t=>mo(t)).join(",");return`${n.op}(${e})`}}function $h(n,e){return n instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&st(r.value,i.value)}(n,e):n instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&$h(a,i.filters[u]),!0):!1}(n,e):void K()}function qh(n){return n instanceof Te?function(t){return`${t.field.canonicalString()} ${t.op} ${Cn(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(qh).join(" ,")+"}"}(n):"Filter"}class Cv extends Te{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class bv extends Te{constructor(e,t){super(e,"in",t),this.keys=Hh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kv extends Te{constructor(e,t){super(e,"not-in",t),this.keys=Hh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class Dv extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yo(t)&&Ir(t.arrayValue,this.value)}}class Nv extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ir(this.value.arrayValue,t)}}class Vv extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ir(this.value.arrayValue,t)}}class Ov extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ir(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.le=null}}function Cc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new xv(n,e,t,r,i,s,a)}function Jo(n){const e=J(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>mo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cn(r)).join(",")),e.le=t}return e.le}function Xo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Sv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$h(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pc(n.startAt,e.startAt)&&Pc(n.endAt,e.endAt)}function go(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Lv(n,e,t,r,i,s,a,u){return new ts(n,e,t,r,i,s,a,u)}function Zo(n){return new ts(n)}function bc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Mv(n){return n.collectionGroup!==null}function fr(n){const e=J(n);if(e.he===null){e.he=[];const t=new Set;for(const s of e.explicitOrderBy)e.he.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ie(Pe.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.he.push(new Oi(s,r))}),t.has(Pe.keyField().canonicalString())||e.he.push(new Oi(Pe.keyField(),r))}return e.he}function nt(n){const e=J(n);return e.Pe||(e.Pe=Uv(e,fr(n))),e.Pe}function Uv(n,e){if(n.limitType==="F")return Cc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oi(i.field,s)});const t=n.endAt?new Vi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Vi(n.startAt.position,n.startAt.inclusive):null;return Cc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function _o(n,e,t){return new ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ns(n,e){return Xo(nt(n),nt(e))&&n.limitType===e.limitType}function zh(n){return`${Jo(nt(n))}|lt:${n.limitType}`}function mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>qh(i)).join(", ")}]`),Zi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Cn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Cn(i)).join(",")),`Target(${r})`}(nt(n))}; limitType=${n.limitType})`}function rs(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of fr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,c){const h=Sc(a,u,c);return a.inclusive?h<=0:h<0}(r.startAt,fr(r),i)||r.endAt&&!function(a,u,c){const h=Sc(a,u,c);return a.inclusive?h>=0:h>0}(r.endAt,fr(r),i))}(n,e)}function Fv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wh(n){return(e,t)=>{let r=!1;for(const i of fr(n)){const s=jv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jv(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(s,a,u){const c=a.data.field(s),h=u.data.field(s);return c!==null&&h!==null?Pn(c,h):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Kt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=new ge(z.comparator);function yt(){return Bv}const Kh=new ge(z.comparator);function ur(...n){let e=Kh;for(const t of n)e=e.insert(t.key,t);return e}function Gh(n){let e=Kh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function en(){return pr()}function Qh(){return pr()}function pr(){return new an(n=>n.toString(),(n,e)=>n.isEqual(e))}const $v=new ge(z.comparator),qv=new Ie(z.comparator);function ne(...n){let e=qv;for(const t of n)e=e.add(t);return e}const Hv=new Ie(re);function zv(){return Hv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(e)?"-0":e}}function Yh(n){return{integerValue:""+n}}function Wv(n,e){return yv(e)?Yh(e):ea(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this._=void 0}}function Kv(n,e,t){return n instanceof xi?function(i,s){const a={fields:{[Vh]:{stringValue:Nh},[xh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qo(s)&&(s=es(s)),s&&(a.fields[Oh]=s),{mapValue:a}}(t,e):n instanceof Ar?Xh(n,e):n instanceof Rr?Zh(n,e):function(i,s){const a=Jh(i,s),u=kc(a)+kc(i.Ie);return po(a)&&po(i.Ie)?Yh(u):ea(i.serializer,u)}(n,e)}function Gv(n,e,t){return n instanceof Ar?Xh(n,e):n instanceof Rr?Zh(n,e):t}function Jh(n,e){return n instanceof Li?function(r){return po(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xi extends is{}class Ar extends is{constructor(e){super(),this.elements=e}}function Xh(n,e){const t=ed(e);for(const r of n.elements)t.some(i=>st(i,r))||t.push(r);return{arrayValue:{values:t}}}class Rr extends is{constructor(e){super(),this.elements=e}}function Zh(n,e){let t=ed(e);for(const r of n.elements)t=t.filter(i=>!st(i,r));return{arrayValue:{values:t}}}class Li extends is{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function kc(n){return ve(n.integerValue||n.doubleValue)}function ed(n){return Yo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qv(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ar&&i instanceof Ar||r instanceof Rr&&i instanceof Rr?Sn(r.elements,i.elements,st):r instanceof Li&&i instanceof Li?st(r.Ie,i.Ie):r instanceof xi&&i instanceof xi}(n.transform,e.transform)}class Yv{constructor(e,t){this.version=e,this.transformResults=t}}class rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ss{}function td(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rd(n.key,rt.none()):new Vr(n.key,n.data,rt.none());{const t=n.data,r=$e.empty();let i=new Ie(Pe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Gt(n.key,r,new Ke(i.toArray()),rt.none())}}function Jv(n,e,t){n instanceof Vr?function(i,s,a){const u=i.value.clone(),c=Nc(i.fieldTransforms,s,a.transformResults);u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Gt?function(i,s,a){if(!yi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=Nc(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(nd(i)),c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function mr(n,e,t,r){return n instanceof Vr?function(s,a,u,c){if(!yi(s.precondition,a))return u;const h=s.value.clone(),f=Vc(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Gt?function(s,a,u,c){if(!yi(s.precondition,a))return u;const h=Vc(s.fieldTransforms,c,a),f=a.data;return f.setAll(nd(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,u){return yi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Xv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Jh(r.transform,i||null);s!=null&&(t===null&&(t=$e.empty()),t.set(r.field,s))}return t||null}function Dc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Sn(r,i,(s,a)=>Qv(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vr extends ss{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gt extends ss{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Nc(n,e,t){const r=new Map;ue(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,Gv(a,u,t[i]))}return r}function Vc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Kv(s,a,e))}return r}class rd extends ss{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zv extends ss{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Jv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=mr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=mr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Qh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;const c=td(a,u);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&Sn(this.mutations,e.mutations,(t,r)=>Dc(t,r))&&Sn(this.baseMutations,e.baseMutations,(t,r)=>Dc(t,r))}}class ta{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ue(e.mutations.length===r.length);let i=function(){return $v}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new ta(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,se;function rE(n){switch(n){case O.OK:return K();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return K()}}function id(n){if(n===void 0)return _t("GRPC error has no .code"),O.UNKNOWN;switch(n){case Ee.OK:return O.OK;case Ee.CANCELLED:return O.CANCELLED;case Ee.UNKNOWN:return O.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return O.INTERNAL;case Ee.UNAVAILABLE:return O.UNAVAILABLE;case Ee.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ee.NOT_FOUND:return O.NOT_FOUND;case Ee.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ee.ABORTED:return O.ABORTED;case Ee.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ee.DATA_LOSS:return O.DATA_LOSS;default:return K()}}(se=Ee||(Ee={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=new Lt([4294967295,4294967295],0);function Oc(n){const e=iE().encode(n),t=new Th;return t.update(e),new Uint8Array(t.digest())}function xc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lt([t,r],0),new Lt([i,s],0)]}class na{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new cr(`Invalid padding: ${t}`);if(r<0)throw new cr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new cr(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Lt.fromNumber(this.Ee)}Ae(e,t,r){let i=e.add(t.multiply(Lt.fromNumber(r)));return i.compare(sE)===1&&(i=new Lt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Oc(e),[r,i]=xc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(r,i,s);if(!this.Re(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new na(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ee===0)return;const t=Oc(e),[r,i]=xc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ae(r,i,s);this.Ve(a)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class cr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Or.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new os(Y.min(),i,new ge(re),yt(),ne())}}class Or{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Or(r,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,r,i){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=i}}class sd{constructor(e,t){this.targetId=e,this.ge=t}}class od{constructor(e,t,r=Ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Lc{constructor(){this.pe=0,this.ye=Mc(),this.we=Ce.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ne(),t=ne(),r=ne();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Or(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=Mc()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ue(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class oE{constructor(e){this.ke=e,this.qe=new Map,this.Qe=yt(),this.$e=ai(),this.Ke=ai(),this.Ue=new ge(re)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,i)=>{this.Je(i)&&t(i)})}Ze(e){const t=e.targetId,r=e.ge.count,i=this.Xe(t);if(i){const s=i.target;if(go(s))if(r===0){const a=new z(s.path);this.ze(t,a,xe.newNoDocument(a,Y.min()))}else ue(r===1);else{const a=this.et(t);if(a!==r){const u=this.tt(e),c=u?this.nt(u,e,a):1;if(c!==0){this.Ye(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,h)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,u;try{a=Bt(r).toUint8Array()}catch(c){if(c instanceof Dh)return Rn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new na(a,i,s)}catch(c){return Rn(c instanceof cr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ee===0?null:u}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.ze(t,s,null),i++)}),i}ot(e){const t=new Map;this.qe.forEach((s,a)=>{const u=this.Xe(a);if(u){if(s.current&&go(u.target)){const c=new z(u.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,xe.newNoDocument(c,e))}s.ve&&(t.set(a,s.Fe()),s.Me())}});let r=ne();this.Ke.forEach((s,a)=>{let u=!0;a.forEachWhile(c=>{const h=this.Xe(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.Qe.forEach((s,a)=>a.setReadTime(e));const i=new os(e,t,this.Ue,this.Qe,r);return this.Qe=yt(),this.$e=ai(),this.Ke=ai(),this.Ue=new ge(re),i}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const i=this.He(e);this.ut(e,t)?i.xe(t,1):i.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Lc,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Ie(re),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ie(re),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Lc),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ai(){return new ge(z.comparator)}function Mc(){return new ge(z.comparator)}const aE={asc:"ASCENDING",desc:"DESCENDING"},uE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cE={and:"AND",or:"OR"};class lE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yo(n,e){return n.useProto3Json||Zi(e)?e:{value:e}}function Mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ad(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function hE(n,e){return Mi(n,e.toTimestamp())}function it(n){return ue(!!n),Y.fromTimestamp(function(t){const r=jt(t);return new we(r.seconds,r.nanos)}(n))}function ra(n,e){return vo(n,e).canonicalString()}function vo(n,e){const t=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ud(n){const e=pe.fromString(n);return ue(fd(e)),e}function Eo(n,e){return ra(n.databaseId,e.path)}function Js(n,e){const t=ud(e);if(t.get(1)!==n.databaseId.projectId)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(ld(t))}function cd(n,e){return ra(n.databaseId,e)}function dE(n){const e=ud(n);return e.length===4?pe.emptyPath():ld(e)}function To(n){return new pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ld(n){return ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Uc(n,e,t){return{name:Eo(n,e),fields:t.value.mapValue.fields}}function fE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string"),Ce.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ce.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(h){const f=h.code===void 0?O.UNKNOWN:id(h.code);return new H(f,h.message||"")}(a);t=new od(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Js(n,r.document.name),s=it(r.document.updateTime),a=r.document.createTime?it(r.document.createTime):Y.min(),u=new $e({mapValue:{fields:r.document.fields}}),c=xe.newFoundDocument(i,s,a,u),h=r.targetIds||[],f=r.removedTargetIds||[];t=new vi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Js(n,r.document),s=r.readTime?it(r.readTime):Y.min(),a=xe.newNoDocument(i,s),u=r.removedTargetIds||[];t=new vi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Js(n,r.document),s=r.removedTargetIds||[];t=new vi([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new nE(i,s),u=r.targetId;t=new sd(u,a)}}return t}function pE(n,e){let t;if(e instanceof Vr)t={update:Uc(n,e.key,e.value)};else if(e instanceof rd)t={delete:Eo(n,e.key)};else if(e instanceof Gt)t={update:Uc(n,e.key,e.data),updateMask:IE(e.fieldMask)};else{if(!(e instanceof Zv))return K();t={verify:Eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const u=a.transform;if(u instanceof xi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ar)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Li)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(n,e.precondition)),t}function mE(n,e){return n&&n.length>0?(ue(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?it(i.updateTime):it(s);return a.isEqual(Y.min())&&(a=it(s)),new Yv(a,i.transformResults||[])}(t,e))):[]}function gE(n,e){return{documents:[cd(n,e.path)]}}function _E(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=cd(n,i);const s=function(h){if(h.length!==0)return dd(ot.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:gn(y.field),direction:EE(y.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=yo(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:t,parent:i}}function yE(n){let e=dE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ue(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const y=hd(m);return y instanceof ot&&Bh(y)?y.getFilters():[y]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(y=>function(P){return new Oi(_n(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(y))}(t.orderBy));let u=null;t.limit&&(u=function(m){let y;return y=typeof m=="object"?m.value:m,Zi(y)?null:y}(t.limit));let c=null;t.startAt&&(c=function(m){const y=!!m.before,A=m.values||[];return new Vi(A,y)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const y=!m.before,A=m.values||[];return new Vi(A,y)}(t.endAt)),Lv(e,i,a,s,u,"F",c,h)}function vE(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=_n(t.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_n(t.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_n(t.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_n(t.unaryFilter.field);return Te.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return Te.create(_n(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>hd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function EE(n){return aE[n]}function TE(n){return uE[n]}function wE(n){return cE[n]}function gn(n){return{fieldPath:n.canonicalString()}}function _n(n){return Pe.fromServerFormat(n.fieldPath)}function dd(n){return n instanceof Te?function(t){if(t.op==="=="){if(Rc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NAN"}};if(Ac(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Rc(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NAN"}};if(Ac(t.value))return{unaryFilter:{field:gn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gn(t.field),op:TE(t.op),value:t.value}}}(n):n instanceof ot?function(t){const r=t.getFilters().map(i=>dd(i));return r.length===1?r[0]:{compositeFilter:{op:wE(t.op),filters:r}}}(n):K()}function IE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function fd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,r,i,s=Y.min(),a=Y.min(),u=Ce.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.Tt=e}}function RE(n){const e=yE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_o(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.Tn=new PE}addToCollectionParentIndex(e,t){return this.Tn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Ft.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class PE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ie(pe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ie(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pd=41943040;class Be{static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(pd,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new bn(0)}static Un(){return new bn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="LruGarbageCollector",CE=1048576;function Bc([n,e],[t,r]){const i=re(n,t);return i===0?re(e,r):i}class bE{constructor(e){this.Hn=e,this.buffer=new Ie(Bc),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Bc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){F(jc,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jn(t)?F(jc,"Ignoring IndexedDB error during garbage collection: ",t):await Fn(t)}await this.er(3e5)})}}class DE{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Xi.ae);const r=new bE(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Fc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fc):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,s,a,u,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,u=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),pn()<=te.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${m} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function NE(n,e){return new DE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.changes=new an(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&mr(r.mutation,i,Ke.empty(),we.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){const i=en();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=ur();return s.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=en();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=yt();const a=pr(),u=function(){return pr()}();return t.forEach((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Gt)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),mr(f.mutation,h,f.mutation.getFieldMask(),we.now())):a.set(h.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var m;return u.set(h,new OE(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),u))}recalculateAndSaveOverlays(e,t){const r=pr();let i=new ge((a,u)=>a-u),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Ke.empty();f=u.applyToLocalView(h,f),r.set(c,f);const m=(i.get(u.batchId)||ne()).add(c);i=i.insert(u.batchId,m)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),h=c.key,f=c.value,m=Qh();f.forEach(y=>{if(!s.has(y)){const A=td(t.get(y),r.get(y));A!==null&&m.set(y,A),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(en());let u=Er,c=s;return a.next(h=>N.forEach(h,(f,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),s.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{c=c.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,ne())).next(f=>({batchId:u,changes:Gh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let i=ur();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=ur();return this.indexManager.getCollectionParents(e,s).next(u=>N.forEach(u,c=>{const h=function(m,y){return new ts(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,xe.newInvalidDocument(f)))});let u=ur();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&mr(f.mutation,h,Ke.empty(),we.now()),rs(t,h)&&(u=u.insert(c,h))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return N.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:it(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:RE(i.bundledQuery),readTime:it(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.overlays=new ge(z.comparator),this.Rr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=en();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Et(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Rr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=en(),s=t.length+1,a=new z(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ge((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=en(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const u=en(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>u.set(h,f)),!(u.size()>=i)););return N.resolve(u)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new tE(t,r));let s=this.Rr.get(t);s===void 0&&(s=ne(),this.Rr.set(t,s)),this.Rr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.Vr=new Ie(Ae.mr),this.gr=new Ie(Ae.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new Ae(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new Ae(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new z(new pe([])),r=new Ae(t,e),i=new Ae(t,e+1),s=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),s.push(a.key)}),s}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new z(new pe([])),r=new Ae(t,e),i=new Ae(t,e+1);let s=ne();return this.gr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Ae(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return z.comparator(e.key,t.key)||re(e.Cr,t.Cr)}static pr(e,t){return re(e.Cr,t.Cr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ie(Ae.mr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new eE(s,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Mr=this.Mr.add(new Ae(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Go:this.Fr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ae(t,0),i=new Ae(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([r,i],a=>{const u=this.Or(a.Cr);s.push(u)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(re);return t.forEach(i=>{const s=new Ae(i,0),a=new Ae(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([s,a],u=>{r=r.add(u.Cr)})}),N.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const a=new Ae(new z(s),0);let u=new Ie(re);return this.Mr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(u=u.add(c.Cr)),!0)},a),N.resolve(this.Br(u))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ue(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return N.forEach(t.mutations,i=>{const s=new Ae(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new Ae(t,0),i=this.Mr.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.kr=e,this.docs=function(){return new ge(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=yt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=yt();const a=t.path,u=new z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||pv(fv(f),r)<=0||(i.has(f.key)||rs(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K()}qr(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new BE(this)}getSize(e){return N.resolve(this.size)}}class BE extends VE{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.persistence=e,this.Qr=new an(t=>Jo(t),Xo),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.$r=0,this.Kr=new ia,this.targetCount=0,this.Ur=bn.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),N.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new bn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.zn(t),N.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Qr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.Kr.Sr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Xi(0),this.zr=!1,this.zr=!0,this.jr=new UE,this.referenceDelegate=e(this),this.Hr=new $E(this),this.indexManager=new SE,this.remoteDocumentCache=function(i){return new jE(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new AE(t),this.Yr=new LE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ME,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new FE(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new qE(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(s=>this.referenceDelegate.Xr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}ei(e,t){return N.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class qE extends gv{constructor(e){super(),this.currentSequenceNumber=e}}class sa{constructor(e){this.persistence=e,this.ti=new ia,this.ni=null}static ri(e){return new sa(e)}get ii(){if(this.ni)return this.ni;throw K()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),N.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.ii.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ii,r=>{const i=z.fromPath(r);return this.si(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return N.or([()=>N.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Ui{constructor(e,t){this.persistence=e,this.oi=new an(r=>vv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=NE(this,t)}static ri(e,t){return new Ui(e,t)}Zr(){}Xr(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return N.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(s=>s?N.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(u=>{u||(r++,s.removeEntry(a,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),N.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gi(e.data.value)),t}ar(e,t,r){return N.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=ne(),i=ne();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new oa(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Pm()?8:_v(Le())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.rs(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ss(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new HE;return this._s(e,t,a).next(u=>{if(s.result=u,this.Xi)return this.us(e,t,a,u.size)})}).next(()=>s.result)}us(e,t,r,i){return r.documentReadCount<this.es?(pn()<=te.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),N.resolve()):(pn()<=te.DEBUG&&F("QueryEngine","Query:",mn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(pn()<=te.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):N.resolve())}rs(e,t){if(bc(t))return N.resolve(null);let r=nt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=_o(t,null,"F"),r=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ne(...s);return this.ns.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.cs(t,u);return this.ls(t,h,a,c.readTime)?this.rs(e,_o(t,null,"F")):this.hs(e,h,t,c)}))})))}ss(e,t,r,i){return bc(t)||i.isEqual(Y.min())?N.resolve(null):this.ns.getDocuments(e,r).next(s=>{const a=this.cs(t,s);return this.ls(t,a,r,i)?N.resolve(null):(pn()<=te.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mn(t)),this.hs(e,a,t,dv(i,Er)).next(u=>u))})}cs(e,t){let r=new Ie(Wh(e));return t.forEach((i,s)=>{rs(e,s)&&(r=r.add(s))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}_s(e,t,r){return pn()<=te.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",mn(t)),this.ns.getDocumentsMatchingQuery(e,t,Ft.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="LocalStore",WE=3e8;class KE{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new ge(re),this.Is=new an(s=>Jo(s),Xo),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xE(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function GE(n,e,t,r){return new KE(n,e,t,r)}async function gd(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],u=[];let c=ne();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){u.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:u}))})})}function QE(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ds.newChangeBuffer({trackRemovals:!0});return function(u,c,h,f){const m=h.batch,y=m.keys();let A=N.resolve();return y.forEach(P=>{A=A.next(()=>f.getEntry(c,P)).next(V=>{const C=h.docVersions.get(P);ue(C!==null),V.version.compareTo(C)<0&&(m.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),A.next(()=>u.mutationQueue.removeMutationBatch(c,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=ne();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(c=c.add(u.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function _d(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function YE(n,e){const t=J(n),r=e.snapshotVersion;let i=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.ds.newChangeBuffer({trackRemovals:!0});i=t.Ts;const u=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;u.push(t.Hr.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Hr.addMatchingKeys(s,f.addedDocuments,m)));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(Ce.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(m,A),function(V,C,D){return V.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=WE?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(y,A,f)&&u.push(t.Hr.updateTargetData(s,A))});let c=yt(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),u.push(JE(s,a,e.documentUpdates).next(f=>{c=f.Vs,h=f.fs})),!r.isEqual(Y.min())){const f=t.Hr.getLastRemoteSnapshotVersion(s).next(m=>t.Hr.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(f)}return N.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.Ts=i,s))}function JE(n,e,t){let r=ne(),i=ne();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=yt();return t.forEach((u,c)=>{const h=s.get(u);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(u,c.readTime),a=a.insert(u,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(u,c)):F(aa,"Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",c.version)}),{Vs:a,fs:i}})}function XE(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Go),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZE(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Hr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.Hr.allocateTargetId(r).next(a=>(i=new kt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function wo(n,e,t){const r=J(n),i=r.Ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!jn(a))throw a;F(aa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(i.target)}function $c(n,e,t){const r=J(n);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=J(c),y=m.Is.get(f);return y!==void 0?N.resolve(m.Ts.get(y)):m.Hr.getTargetData(h,f)}(r,a,nt(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,u.targetId).next(c=>{s=c})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,t?i:Y.min(),t?s:ne())).next(u=>(eT(r,Fv(e),u),{documents:u,gs:s})))}function eT(n,e,t){let r=n.Es.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Es.set(e,r)}class qc{constructor(){this.activeTargetIds=zv()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tT{constructor(){this.ho=new qc,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new qc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="ConnectivityMonitor";class zc{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){F(Hc,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){F(Hc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui=null;function Io(){return ui===null?ui=function(){return 268435456+Math.round(2147483648*Math.random())}():ui++,"0x"+ui.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="RestConnection",rT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iT{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Di?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(e,t,r,i,s){const a=Io(),u=this.bo(e,t.toUriEncodedString());F(Xs,`Sending RPC '${e}' ${a}:`,u,r);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,i,s),this.vo(e,u,c,r).then(h=>(F(Xs,`Received RPC '${e}' ${a}: `,h),h),h=>{throw Rn(Xs,`RPC '${e}' ${a} failed with error: `,h,"url: ",u,"request:",r),h})}Co(e,t,r,i,s,a){return this.So(e,t,r,i,s)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Un}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}bo(e,t){const r=rT[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class oT extends iT{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const s=Io();return new Promise((a,u)=>{const c=new wh;c.setWithCredentials(!0),c.listenOnce(Ih.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case mi.NO_ERROR:const f=c.getResponseJson();F(Ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case mi.TIMEOUT:F(Ve,`RPC '${e}' ${s} timed out`),u(new H(O.DEADLINE_EXCEEDED,"Request time out"));break;case mi.HTTP_ERROR:const m=c.getStatus();if(F(Ve,`RPC '${e}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const P=function(C){const D=C.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(D)>=0?D:O.UNKNOWN}(A.status);u(new H(P,A.message))}else u(new H(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new H(O.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F(Ve,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);F(Ve,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,r,15)})}Wo(e,t,r){const i=Io(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Sh(),u=Rh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");F(Ve,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=a.createWebChannel(f,c);let y=!1,A=!1;const P=new sT({Fo:C=>{A?F(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(y||(F(Ve,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),F(Ve,`RPC '${e}' stream ${i} sending:`,C),m.send(C))},Mo:()=>m.close()}),V=(C,D,M)=>{C.listen(D,L=>{try{M(L)}catch(G){setTimeout(()=>{throw G},0)}})};return V(m,ar.EventType.OPEN,()=>{A||(F(Ve,`RPC '${e}' stream ${i} transport opened.`),P.Qo())}),V(m,ar.EventType.CLOSE,()=>{A||(A=!0,F(Ve,`RPC '${e}' stream ${i} transport closed`),P.Ko())}),V(m,ar.EventType.ERROR,C=>{A||(A=!0,Rn(Ve,`RPC '${e}' stream ${i} transport errored:`,C),P.Ko(new H(O.UNAVAILABLE,"The operation could not be completed")))}),V(m,ar.EventType.MESSAGE,C=>{var D;if(!A){const M=C.data[0];ue(!!M);const L=M,G=(L==null?void 0:L.error)||((D=L[0])===null||D===void 0?void 0:D.error);if(G){F(Ve,`RPC '${e}' stream ${i} received error:`,G);const B=G.status;let ie=function(_){const E=Ee[_];if(E!==void 0)return id(E)}(B),w=G.message;ie===void 0&&(ie=O.INTERNAL,w="Unknown error status: "+B+" with message "+G.message),A=!0,P.Ko(new H(ie,w)),m.close()}else F(Ve,`RPC '${e}' stream ${i} received:`,M),P.Uo(M)}}),V(u,Ah.STAT_EVENT,C=>{C.stat===ho.PROXY?F(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===ho.NOPROXY&&F(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function Zs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){return new lE(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="PersistentStream";class vd{constructor(e,t,r,i,s,a,u,c){this.Ti=e,this.n_=r,this.r_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new yd(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new H(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return F(Wc,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(F(Wc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aT extends vd{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=fE(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?it(a.readTime):Y.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=To(this.serializer),t.addTarget=function(s,a){let u;const c=a.target;if(u=go(c)?{documents:gE(s,c)}:{query:_E(s,c).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=ad(s,a.resumeToken);const h=yo(s,a.expectedCount);h!==null&&(u.expectedCount=h)}else if(a.snapshotVersion.compareTo(Y.min())>0){u.readTime=Mi(s,a.snapshotVersion.toTimestamp());const h=yo(s,a.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const r=vE(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=To(this.serializer),t.removeTarget=e,this.I_(t)}}class uT extends vd{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=mE(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=To(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>pE(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{}class lT extends cT{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.So(e,vo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(O.UNKNOWN,s.toString())})}Co(e,t,r,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(e,vo(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(O.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class hT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(_t(t),this.N_=!1):F("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="RemoteStore";class dT{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To(a=>{r.enqueueAndForget(async()=>{un(this)&&(F(sn,"Restarting streams for network reachability change."),await async function(c){const h=J(c);h.W_.add(4),await xr(h),h.j_.set("Unknown"),h.W_.delete(4),await us(h)}(this))})}),this.j_=new hT(r,i)}}async function us(n){if(un(n))for(const e of n.G_)await e(!0)}async function xr(n){for(const e of n.G_)await e(!1)}function Ed(n,e){const t=J(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),ha(t)?la(t):Bn(t).c_()&&ca(t,e))}function ua(n,e){const t=J(n),r=Bn(t);t.U_.delete(e),r.c_()&&Td(t,e),t.U_.size===0&&(r.c_()?r.P_():un(t)&&t.j_.set("Unknown"))}function ca(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bn(n).y_(e)}function Td(n,e){n.H_.Ne(e),Bn(n).w_(e)}function la(n){n.H_=new oE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Bn(n).start(),n.j_.B_()}function ha(n){return un(n)&&!Bn(n).u_()&&n.U_.size>0}function un(n){return J(n).W_.size===0}function wd(n){n.H_=void 0}async function fT(n){n.j_.set("Online")}async function pT(n){n.U_.forEach((e,t)=>{ca(n,e)})}async function mT(n,e){wd(n),ha(n)?(n.j_.q_(e),la(n)):n.j_.set("Unknown")}async function gT(n,e,t){if(n.j_.set("Online"),e instanceof od&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.U_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.U_.delete(u),i.H_.removeTarget(u))}(n,e)}catch(r){F(sn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fi(n,r)}else if(e instanceof vi?n.H_.We(e):e instanceof sd?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Y.min()))try{const r=await _d(n.localStore);t.compareTo(r)>=0&&await function(s,a){const u=s.H_.ot(a);return u.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.U_.get(h);f&&s.U_.set(h,f.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,h)=>{const f=s.U_.get(c);if(!f)return;s.U_.set(c,f.withResumeToken(Ce.EMPTY_BYTE_STRING,f.snapshotVersion)),Td(s,c);const m=new kt(f.target,c,h,f.sequenceNumber);ca(s,m)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){F(sn,"Failed to raise snapshot:",r),await Fi(n,r)}}async function Fi(n,e,t){if(!jn(e))throw e;n.W_.add(1),await xr(n),n.j_.set("Offline"),t||(t=()=>_d(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F(sn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await us(n)})}function Id(n,e){return e().catch(t=>Fi(n,t,e))}async function cs(n){const e=J(n),t=qt(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Go;for(;_T(e);)try{const i=await XE(e.localStore,r);if(i===null){e.K_.length===0&&t.P_();break}r=i.batchId,yT(e,i)}catch(i){await Fi(e,i)}Ad(e)&&Rd(e)}function _T(n){return un(n)&&n.K_.length<10}function yT(n,e){n.K_.push(e);const t=qt(n);t.c_()&&t.S_&&t.b_(e.mutations)}function Ad(n){return un(n)&&!qt(n).u_()&&n.K_.length>0}function Rd(n){qt(n).start()}async function vT(n){qt(n).C_()}async function ET(n){const e=qt(n);for(const t of n.K_)e.b_(t.mutations)}async function TT(n,e,t){const r=n.K_.shift(),i=ta.from(r,e,t);await Id(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await cs(n)}async function wT(n,e){e&&qt(n).S_&&await async function(r,i){if(function(a){return rE(a)&&a!==O.ABORTED}(i.code)){const s=r.K_.shift();qt(r).h_(),await Id(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cs(r)}}(n,e),Ad(n)&&Rd(n)}async function Kc(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),F(sn,"RemoteStore received new credentials");const r=un(t);t.W_.add(3),await xr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await us(t)}async function IT(n,e){const t=J(n);e?(t.W_.delete(2),await us(t)):e||(t.W_.add(2),await xr(t),t.j_.set("Unknown"))}function Bn(n){return n.J_||(n.J_=function(t,r,i){const s=J(t);return s.M_(),new aT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:fT.bind(null,n),No:pT.bind(null,n),Lo:mT.bind(null,n),p_:gT.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),ha(n)?la(n):n.j_.set("Unknown")):(await n.J_.stop(),wd(n))})),n.J_}function qt(n){return n.Y_||(n.Y_=function(t,r,i){const s=J(t);return s.M_(),new uT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:vT.bind(null,n),Lo:wT.bind(null,n),D_:ET.bind(null,n),v_:TT.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await cs(n)):(await n.Y_.stop(),n.K_.length>0&&(F(sn,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,u=new da(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fa(n,e){if(_t("AsyncQueue",`${e}: ${n}`),jn(n))return new H(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{static emptySet(e){return new wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=ur(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this.Z_=new ge(z.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):K():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class kn{constructor(e,t,r,i,s,a,u,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new kn(e,t,wn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ns(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class RT{constructor(){this.queries=Qc(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=Qc(),s.forEach((a,u)=>{for(const c of u.ta)c.onError(r)})})(this,new H(O.ABORTED,"Firestore shutting down"))}}function Qc(){return new an(n=>zh(n),ns)}async function Sd(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.na()&&e.ra()&&(r=2):(s=new AT,r=e.ra()?0:1);try{switch(r){case 0:s.ea=await t.onListen(i,!0);break;case 1:s.ea=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=fa(a,`Initialization of query '${mn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.ta.push(e),e.sa(t.onlineState),s.ea&&e.oa(s.ea)&&pa(t)}async function Pd(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.ta.indexOf(e);a>=0&&(s.ta.splice(a,1),s.ta.length===0?i=e.ra()?0:1:!s.na()&&e.ra()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ST(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const u of a.ta)u.oa(i)&&(r=!0);a.ea=i}}r&&pa(t)}function PT(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.ta)s.onError(t);r.queries.delete(e)}function pa(n){n.ia.forEach(e=>{e.next()})}var Ao,Yc;(Yc=Ao||(Ao={}))._a="default",Yc.Cache="cache";class Cd{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new kn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Ao.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.key=e}}class kd{constructor(e){this.key=e}}class CT{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ne(),this.mutatedKeys=ne(),this.ya=Wh(e),this.wa=new wn(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new Gc,i=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),A=rs(this.query,m)?m:null,P=!!y&&this.mutatedKeys.has(y.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let C=!1;y&&A?y.data.isEqual(A.data)?P!==V&&(r.track({type:3,doc:A}),C=!0):this.va(y,A)||(r.track({type:2,doc:A}),C=!0,(c&&this.ya(A,c)>0||h&&this.ya(A,h)<0)&&(u=!0)):!y&&A?(r.track({type:0,doc:A}),C=!0):y&&!A&&(r.track({type:1,doc:y}),C=!0,(c||h)&&(u=!0)),C&&(A?(a=a.add(A),s=V?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:u,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,m)=>function(A,P){const V=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return V(A)-V(P)}(f.type,m.type)||this.ya(f.doc,m.doc)),this.Ca(r),i=i!=null&&i;const u=t&&!i?this.Fa():[],c=this.pa.size===0&&this.current&&!i?1:0,h=c!==this.ga;return this.ga=c,a.length!==0||h?{snapshot:new kn(this.query,e.wa,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Gc,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ne(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new kd(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new bd(r))}),t}Oa(e){this.fa=e.gs,this.pa=ne();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return kn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ma="SyncEngine";class bT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class kT{constructor(e){this.key=e,this.Ba=!1}}class DT{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new an(u=>zh(u),ns),this.qa=new Map,this.Qa=new Set,this.$a=new ge(z.comparator),this.Ka=new Map,this.Ua=new ia,this.Wa={},this.Ga=new Map,this.za=bn.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function NT(n,e,t=!0){const r=Ld(n);let i;const s=r.ka.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Dd(r,e,t,!0),i}async function VT(n,e){const t=Ld(n);await Dd(t,e,!0,!1)}async function Dd(n,e,t,r){const i=await ZE(n.localStore,nt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let u;return r&&(u=await OT(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ed(n.remoteStore,i),u}async function OT(n,e,t,r,i){n.Ha=(m,y,A)=>async function(V,C,D,M){let L=C.view.ba(D);L.ls&&(L=await $c(V.localStore,C.query,!1).then(({documents:w})=>C.view.ba(w,L)));const G=M&&M.targetChanges.get(C.targetId),B=M&&M.targetMismatches.get(C.targetId)!=null,ie=C.view.applyChanges(L,V.isPrimaryClient,G,B);return Xc(V,C.targetId,ie.Ma),ie.snapshot}(n,m,y,A);const s=await $c(n.localStore,e,!0),a=new CT(e,s.gs),u=a.ba(s.documents),c=Or.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(u,n.isPrimaryClient,c);Xc(n,t,h.Ma);const f=new bT(e,t,a);return n.ka.set(e,f),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),h.snapshot}async function xT(n,e,t){const r=J(n),i=r.ka.get(e),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter(a=>!ns(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ua(r.remoteStore,i.targetId),Ro(r,i.targetId)}).catch(Fn)):(Ro(r,i.targetId),await wo(r.localStore,i.targetId,!0))}async function LT(n,e){const t=J(n),r=t.ka.get(e),i=t.qa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ua(t.remoteStore,r.targetId))}async function MT(n,e,t){const r=HT(n);try{const i=await function(a,u){const c=J(a),h=we.now(),f=u.reduce((A,P)=>A.add(P.key),ne());let m,y;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=yt(),V=ne();return c.ds.getEntries(A,f).next(C=>{P=C,P.forEach((D,M)=>{M.isValidDocument()||(V=V.add(D))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,P)).next(C=>{m=C;const D=[];for(const M of u){const L=Xv(M,m.get(M.key).overlayedDocument);L!=null&&D.push(new Gt(M.key,L,Uh(L.value.mapValue),rt.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,D,u)}).next(C=>{y=C;const D=C.applyToLocalDocumentSet(m,V);return c.documentOverlayCache.saveOverlays(A,C.batchId,D)})}).then(()=>({batchId:y.batchId,changes:Gh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let h=a.Wa[a.currentUser.toKey()];h||(h=new ge(re)),h=h.insert(u,c),a.Wa[a.currentUser.toKey()]=h}(r,i.batchId,t),await Lr(r,i.changes),await cs(r.remoteStore)}catch(i){const s=fa(i,"Failed to persist write");t.reject(s)}}async function Nd(n,e){const t=J(n);try{const r=await YE(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Ka.get(s);a&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?ue(a.Ba):i.removedDocuments.size>0&&(ue(a.Ba),a.Ba=!1))}),await Lr(t,r,e)}catch(r){await Fn(r)}}function Jc(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((s,a)=>{const u=a.view.sa(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=J(a);c.onlineState=u;let h=!1;c.queries.forEach((f,m)=>{for(const y of m.ta)y.sa(u)&&(h=!0)}),h&&pa(c)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UT(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Ka.get(e),s=i&&i.key;if(s){let a=new ge(z.comparator);a=a.insert(s,xe.newNoDocument(s,Y.min()));const u=ne().add(s),c=new os(Y.min(),new Map,new ge(re),a,u);await Nd(r,c),r.$a=r.$a.remove(s),r.Ka.delete(e),ga(r)}else await wo(r.localStore,e,!1).then(()=>Ro(r,e,t)).catch(Fn)}async function FT(n,e){const t=J(n),r=e.batch.batchId;try{const i=await QE(t.localStore,e);Od(t,r,null),Vd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Lr(t,i)}catch(i){await Fn(i)}}async function jT(n,e,t){const r=J(n);try{const i=await function(a,u){const c=J(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,u).next(m=>(ue(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Od(r,e,t),Vd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Lr(r,i)}catch(i){await Fn(i)}}function Vd(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Od(n,e,t){const r=J(n);let i=r.Wa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}function Ro(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(r=>{n.Ua.containsKey(r)||xd(n,r)})}function xd(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(ua(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),ga(n))}function Xc(n,e,t){for(const r of t)r instanceof bd?(n.Ua.addReference(r.key,e),BT(n,r)):r instanceof kd?(F(ma,"Document no longer in limbo: "+r.key),n.Ua.removeReference(r.key,e),n.Ua.containsKey(r.key)||xd(n,r.key)):K()}function BT(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(F(ma,"New document in limbo: "+t),n.Qa.add(r),ga(n))}function ga(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new z(pe.fromString(e)),r=n.za.next();n.Ka.set(r,new kT(t)),n.$a=n.$a.insert(t,r),Ed(n.remoteStore,new kt(nt(Zo(t.path)),r,"TargetPurposeLimboResolution",Xi.ae))}}async function Lr(n,e,t){const r=J(n),i=[],s=[],a=[];r.ka.isEmpty()||(r.ka.forEach((u,c)=>{a.push(r.Ha(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){i.push(h);const m=oa.Yi(c.targetId,h);s.push(m)}}))}),await Promise.all(a),r.La.p_(i),await async function(c,h){const f=J(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(h,y=>N.forEach(y.Hi,A=>f.persistence.referenceDelegate.addReference(m,y.targetId,A)).next(()=>N.forEach(y.Ji,A=>f.persistence.referenceDelegate.removeReference(m,y.targetId,A)))))}catch(m){if(!jn(m))throw m;F(aa,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const A=f.Ts.get(y),P=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(P);f.Ts=f.Ts.insert(y,V)}}}(r.localStore,s))}async function $T(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){F(ma,"User change. New user:",e.toKey());const r=await gd(t.localStore,e);t.currentUser=e,function(s,a){s.Ga.forEach(u=>{u.forEach(c=>{c.reject(new H(O.CANCELLED,a))})}),s.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Lr(t,r.Rs)}}function qT(n,e){const t=J(n),r=t.Ka.get(e);if(r&&r.Ba)return ne().add(r.key);{let i=ne();const s=t.qa.get(e);if(!s)return i;for(const a of s){const u=t.ka.get(a);i=i.unionWith(u.view.Sa)}return i}}function Ld(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UT.bind(null,e),e.La.p_=ST.bind(null,e.eventManager),e.La.Ja=PT.bind(null,e.eventManager),e}function HT(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jT.bind(null,e),e}class ji{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=as(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return GE(this.persistence,new zE,e.initialUser,this.serializer)}Xa(e){return new md(sa.ri,this.serializer)}Za(e){return new tT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ji.provider={build:()=>new ji};class zT extends ji{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ue(this.persistence.referenceDelegate instanceof Ui);const r=this.persistence.referenceDelegate.garbageCollector;return new kE(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new md(r=>Ui.ri(r,t),this.serializer)}}class So{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$T.bind(null,this.syncEngine),await IT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RT}()}createDatastore(e){const t=as(e.databaseInfo.databaseId),r=function(s){return new oT(s)}(e.databaseInfo);return function(s,a,u,c){return new lT(s,a,u,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new dT(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Jc(this.syncEngine,t,0),function(){return zc.D()?new zc:new nT}())}createSyncEngine(e,t){return function(i,s,a,u,c,h,f){const m=new DT(i,s,a,u,c,h);return f&&(m.ja=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=J(i);F(sn,"RemoteStore shutting down."),s.W_.add(5),await xr(s),s.z_.shutdown(),s.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}So.provider={build:()=>new So};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="FirestoreClient";class WT{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=Ch.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{F(Ht,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F(Ht,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=fa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function eo(n,e){n.asyncQueue.verifyOperationInProgress(),F(Ht,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await KT(n);F(Ht,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Kc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Kc(e.remoteStore,i)),n._onlineComponents=e}async function KT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(Ht,"Using user provided OfflineComponentProvider");try{await eo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Rn("Error using user provided cache. Falling back to memory cache: "+t),await eo(n,new ji)}}else F(Ht,"Using default OfflineComponentProvider"),await eo(n,new zT(void 0));return n._offlineComponents}async function Ud(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(Ht,"Using user provided OnlineComponentProvider"),await Zc(n,n._uninitializedComponentsProvider._online)):(F(Ht,"Using default OnlineComponentProvider"),await Zc(n,new So))),n._onlineComponents}function GT(n){return Ud(n).then(e=>e.syncEngine)}async function Fd(n){const e=await Ud(n),t=e.eventManager;return t.onListen=NT.bind(null,e.syncEngine),t.onUnlisten=xT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LT.bind(null,e.syncEngine),t}function QT(n,e,t={}){const r=new pt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new Md({next:y=>{f.su(),a.enqueueAndForget(()=>Pd(s,m));const A=y.docs.has(u);!A&&y.fromCache?h.reject(new H(O.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&c&&c.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Cd(Zo(u.path),f,{includeMetadataChanges:!0,Ta:!0});return Sd(s,m)}(await Fd(n),n.asyncQueue,e,t,r)),r.promise}function YT(n,e,t={}){const r=new pt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,c,h){const f=new Md({next:y=>{f.su(),a.enqueueAndForget(()=>Pd(s,m)),y.fromCache&&c.source==="server"?h.reject(new H(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new Cd(u,f,{includeMetadataChanges:!0,Ta:!0});return Sd(s,m)}(await Fd(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(n,e,t){if(!t)throw new H(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function JT(n,e,t,r){if(e===!0&&r===!0)throw new H(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function tl(n){if(!z.isDocumentKey(n))throw new H(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nl(n){if(z.isDocumentKey(n))throw new H(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _a(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function vt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_a(n);throw new H(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="firestore.googleapis.com",rl=!0;class il{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$d,this.ssl=rl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:rl;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CE)throw new H(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ls{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iv;switch(r.type){case"firstParty":return new uv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=el.get(t);r&&(F("ComponentProvider","Removing Datastore"),el.delete(t),r.terminate())}(this),Promise.resolve()}}function XT(n,e,t,r={}){var i;const s=(n=vt(n,ls))._getSettings(),a=`${e}:${t}`;if(s.host!==$d&&s.host!==a&&Rn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=Oe.MOCK_USER;else{u=Em(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Oe(h)}n._authCredentials=new sv(new Ph(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hs(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Mt extends hs{constructor(e,t,r){super(e,t,Zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new z(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function ZT(n,e,...t){if(n=Fe(n),Bd("collection","path",e),n instanceof ls){const r=pe.fromString(e,...t);return nl(r),new Mt(n,null,r)}{if(!(n instanceof qe||n instanceof Mt))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return nl(r),new Mt(n.firestore,null,r)}}function Rt(n,e,...t){if(n=Fe(n),arguments.length===1&&(e=Ch.newId()),Bd("doc","path",e),n instanceof ls){const r=pe.fromString(e,...t);return tl(r),new qe(n,null,new z(r))}{if(!(n instanceof qe||n instanceof Mt))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pe.fromString(e,...t));return tl(r),new qe(n.firestore,n instanceof Mt?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="AsyncQueue";class ol{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new yd(this,"async_queue_retry"),this.Su=()=>{const r=Zs();r&&F(sl,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Zs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Zs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new pt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!jn(e))throw e;F(sl,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw _t("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=da.createAndSchedule(this,e,t,r,s=>this.Fu(s));return this.fu.push(i),i}Du(){this.gu&&K()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Mr extends ls{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ol,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ol(e),this._firestoreClient=void 0,await e}}}function qd(n,e){const t=typeof n=="object"?n:Ll(),r=typeof n=="string"?n:Di,i=Mo(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ym("firestore");s&&XT(i,...s)}return i}function ya(n){if(n._terminated)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ew(n),n._firestoreClient}function ew(n){var e,t,r;const i=n._freezeSettings(),s=function(u,c,h,f){return new wv(u,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,jd(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new WT(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dn(Ce.fromBase64String(e))}catch(t){throw new H(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dn(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=/^__.*__$/;class nw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Gt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vr(e,this.data,t,this.fieldTransforms)}}class Hd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Gt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class wa{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new wa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Bi(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(zd(this.Lu)&&tw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class rw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||as(e)}ju(e,t,r,i=!1){return new wa({Lu:e,methodName:t,zu:r,path:Pe.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wd(n){const e=n._freezeSettings(),t=as(n._databaseId);return new rw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function iw(n,e,t,r,i,s={}){const a=n.ju(s.merge||s.mergeFields?2:0,e,t,i);Ia("Data must be an object, but it was:",a,r);const u=Kd(r,a);let c,h;if(s.merge)c=new Ke(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=Po(e,m,t);if(!a.contains(y))throw new H(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Qd(f,y)||f.push(y)}c=new Ke(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new nw(new $e(u),c,h)}class fs extends va{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fs}}function sw(n,e,t,r){const i=n.ju(1,e,t);Ia("Data must be an object, but it was:",i,r);const s=[],a=$e.empty();Kt(r,(c,h)=>{const f=Aa(e,c,t);h=Fe(h);const m=i.Ku(f);if(h instanceof fs)s.push(f);else{const y=ps(h,m);y!=null&&(s.push(f),a.set(f,y))}});const u=new Ke(s);return new Hd(a,u,i.fieldTransforms)}function ow(n,e,t,r,i,s){const a=n.ju(1,e,t),u=[Po(e,r,t)],c=[i];if(s.length%2!=0)throw new H(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)u.push(Po(e,s[y])),c.push(s[y+1]);const h=[],f=$e.empty();for(let y=u.length-1;y>=0;--y)if(!Qd(h,u[y])){const A=u[y];let P=c[y];P=Fe(P);const V=a.Ku(A);if(P instanceof fs)h.push(A);else{const C=ps(P,V);C!=null&&(h.push(A),f.set(A,C))}}const m=new Ke(h);return new Hd(f,m,a.fieldTransforms)}function ps(n,e){if(Gd(n=Fe(n)))return Ia("Unsupported field value:",e,n),Kd(n,e);if(n instanceof va)return function(r,i){if(!zd(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const u of r){let c=ps(u,i.Uu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:Mi(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mi(i.serializer,s)}}if(r instanceof Ea)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dn)return{bytesValue:ad(i.serializer,r._byteString)};if(r instanceof qe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ra(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ta)return function(a,u){return{mapValue:{fields:{[Lh]:{stringValue:Mh},[Ni]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw u.Wu("VectorValues must only contain numeric values.");return ea(u.serializer,h)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${_a(r)}`)}(n,e)}function Kd(n,e){const t={};return kh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kt(n,(r,i)=>{const s=ps(i,e.qu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Gd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof Ea||n instanceof Dn||n instanceof qe||n instanceof va||n instanceof Ta)}function Ia(n,e,t){if(!Gd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=_a(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Po(n,e,t){if((e=Fe(e))instanceof ds)return e._internalPath;if(typeof e=="string")return Aa(n,e);throw Bi("Field path arguments must be of type string or ",n,!1,void 0,t)}const aw=new RegExp("[~\\*/\\[\\]]");function Aa(n,e,t){if(e.search(aw)>=0)throw Bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ds(...e.split("."))._internalPath}catch{throw Bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bi(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new H(O.INVALID_ARGUMENT,u+n+c)}function Qd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uw extends Yd{data(){return super.data()}}function Jd(n,e){return typeof e=="string"?Aa(n,e):e instanceof ds?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lw{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Kt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Ni].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ve(a.doubleValue));return new Ta(s)}convertGeoPoint(e){return new Ea(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=es(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Tr(e));default:return null}}convertTimestamp(e){const t=jt(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=pe.fromString(e);ue(fd(r));const i=new wr(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(t)||_t(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xd extends Yd{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ei extends Xd{data(e={}){return super.data(e)}}class dw{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new lr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ei(this._firestore,this._userDataWriter,r.key,r,new lr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new Ei(i._firestore,i._userDataWriter,u.doc.key,u.doc,new lr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new Ei(i._firestore,i._userDataWriter,u.doc.key,u.doc,new lr(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return u.type!==0&&(h=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:fw(u.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){n=vt(n,qe);const e=vt(n.firestore,Mr);return QT(ya(e),n._key).then(t=>gw(e,n,t))}class Zd extends lw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function pw(n){n=vt(n,hs);const e=vt(n.firestore,Mr),t=ya(e),r=new Zd(e);return cw(n._query),YT(t,n._query).then(i=>new dw(e,r,n,i))}function al(n,e,t){n=vt(n,qe);const r=vt(n.firestore,Mr),i=hw(n.converter,e,t);return ef(r,[iw(Wd(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,rt.none())])}function mw(n,e,t,...r){n=vt(n,qe);const i=vt(n.firestore,Mr),s=Wd(i);let a;return a=typeof(e=Fe(e))=="string"||e instanceof ds?ow(s,"updateDoc",n._key,e,t,r):sw(s,"updateDoc",n._key,e),ef(i,[a.toMutation(n._key,rt.exists(!0))])}function ef(n,e){return function(r,i){const s=new pt;return r.asyncQueue.enqueueAndForget(async()=>MT(await GT(r),i,s)),s.promise}(ya(n),e)}function gw(n,e,t){const r=t.docs.get(e._key),i=new Zd(n);return new Xd(n,i,e._key,r,new lr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Un=i})(xn),In(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new Mr(new ov(r.getProvider("auth-internal")),new cv(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Ot(fc,pc,e),Ot(fc,pc,"esm2017")})();const _w={apiKey:"AIzaSyCF4VUOX4Uzbm4eCLN-KHgR_qvMPodGF_I",authDomain:"wealth-within-guided-journal.firebaseapp.com",projectId:"wealth-within-guided-journal",storageBucket:"wealth-within-guided-journal.firebasestorage.app",messagingSenderId:"890033260196",appId:"1:890033260196:web:8165616d8b96e8ce4c4831",measurementId:"G-CPEXEZ8KDD"},tf=xl(_w),yw=vh(tf);qd(tf);const vw=()=>{const[n,e]=k.useState(""),[t,r]=k.useState(""),i=zi(),s=async()=>{try{await yw.createUserWithEmailAndPassword(n,t),i("/journal")}catch(a){console.error("Sign-up error:",a.message)}};return q.jsxs("div",{children:[q.jsx("h2",{children:"Sign Up"}),q.jsx("input",{type:"email",value:n,onChange:a=>e(a.target.value),placeholder:"Email"}),q.jsx("input",{type:"password",value:t,onChange:a=>r(a.target.value),placeholder:"Password"}),q.jsx("button",{onClick:s,children:"Sign Up"})]})},ul=()=>{const[n,e]=k.useState(""),[t,r]=k.useState(""),i=zi(),s=vh(),a=async()=>{try{await B_(s,n,t),i("/journal")}catch(u){console.error("Login error:",u.message)}};return q.jsxs("div",{children:[q.jsx("h2",{children:"Login"}),q.jsx("input",{type:"email",value:n,onChange:u=>e(u.target.value),placeholder:"Email"}),q.jsx("input",{type:"password",value:t,onChange:u=>r(u.target.value),placeholder:"Password"}),q.jsx("button",{onClick:a,children:"Login"})]})};var nf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cl=Dt.createContext&&Dt.createContext(nf),Ew=["attr","size","title"];function Tw(n,e){if(n==null)return{};var t=ww(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function ww(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function $i(){return $i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},$i.apply(this,arguments)}function ll(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function qi(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ll(Object(t),!0).forEach(function(r){Iw(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ll(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Iw(n,e,t){return e=Aw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Aw(n){var e=Rw(n,"string");return typeof e=="symbol"?e:e+""}function Rw(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function rf(n){return n&&n.map((e,t)=>Dt.createElement(e.tag,qi({key:t},e.attr),rf(e.child)))}function Sw(n){return e=>Dt.createElement(Pw,$i({attr:qi({},n.attr)},e),rf(n.child))}function Pw(n){var e=t=>{var{attr:r,size:i,title:s}=n,a=Tw(n,Ew),u=i||t.size||"1em",c;return t.className&&(c=t.className),n.className&&(c=(c?c+" ":"")+n.className),Dt.createElement("svg",$i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,a,{className:c,style:qi(qi({color:n.color||t.color},t.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&Dt.createElement("title",null,s),n.children)};return cl!==void 0?Dt.createElement(cl.Consumer,null,t=>e(t)):e(nf)}function Cw(n){return Sw({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(n)}const bw=()=>{const{currentUser:n}=k.useContext(Eh),[e,t]=k.useState(""),[r,i]=k.useState(""),[s,a]=k.useState(""),[u,c]=k.useState(!1),[h,f]=k.useState(0),[m,y]=k.useState(""),[A,P]=k.useState(!0),[V,C]=k.useState(!1),[D,M]=k.useState([]),[L,G]=k.useState("Today’s Prompt"),B=qd(),[ie,w]=k.useState(""),g=()=>new Date().toLocaleDateString("en-CA"),_=async()=>{try{const Q=ZT(B,`users/${n.uid}/entries`),ce=(await pw(Q)).docs.map(de=>{const T=de.data(),x=T.timestamp?T.timestamp.toDate():null,$=x?`${x.toLocaleDateString()} ${x.toLocaleTimeString()}`:"No timestamp";return{id:de.id,...T,timestamp:$,isEditing:!1}});M(ce)}catch(Q){console.error("Error fetching past entries:",Q)}};k.useEffect(()=>{(async()=>{P(!0);try{const oe=await fn(Rt(B,"prompts","NHdNnSptRrnGvz4cW3sw"));if(oe.exists()){const de=oe.data();if(de.promptsWithCat){let T=!1;for(const[x,$]of Object.entries(de.promptsWithCat)){for(const j of $)if(!(await fn(Rt(B,`users/${n.uid}/entries`,j))).exists()){t(j),i(x),T=!0;break}if(T)break}}else t("No prompts available"),i("")}else console.error("No such document!"),t("promptDoc does not exist"),i("");const ce=await fn(Rt(B,`users/${n.uid}`));if(ce.exists()){const de=ce.data();f(de.streak||0);const T=de.lastEntryDate,x=g();if(T!==x){const $=new Date;$.setDate($.getDate()-1);const j=$.toLocaleDateString("en-CA");T===j?y("in jeopardy!"):f(0)}}else console.error("User document does not exist!")}catch(oe){console.error("Error fetching prompt:",oe),t("Error loading prompt"),i("")}finally{P(!1)}})(),_()},[n,B]);const E=async()=>{C(!0);try{if(n){const Q=g(),oe=Rt(B,`users/${n.uid}`),ce=await fn(oe);let de=h;if(ce.exists()){const $=ce.data().lastEntryDate;if($!==Q){const j=new Date;j.setDate(j.getDate()-1);const Z=j.toLocaleDateString("en-CA");$===Z?de+=1:de=1}}else de=1;const T=Rt(B,`users/${n.uid}/entries`,e);await al(T,{entry:s,timestamp:new Date}),u||(await al(oe,{streak:de,lastEntryDate:Q},{merge:!0}),f(de),c(!0),y("")),w("Entry saved successfully! Loading next prompt..."),_(),setTimeout(()=>{w(""),I()},3e3)}}catch(Q){console.error("Error:",Q.message)}finally{C(!1)}},I=async()=>{P(!0);try{const Q=await fn(Rt(B,"prompts","NHdNnSptRrnGvz4cW3sw"));if(Q.exists()){const oe=Q.data();if(oe.promptsWithCat){let ce=!1;for(const[de,T]of Object.entries(oe.promptsWithCat)){for(const x of T)if(!(await fn(Rt(B,`users/${n.uid}/entries`,x))).exists()){t(x),i(de),a(""),ce=!0;break}if(ce)break}}else t("No prompts available"),i("")}else console.error("No such document!"),t("promptDoc does not exist"),i("")}catch(Q){console.error("Error fetching prompt:",Q),t("Error loading prompt"),i("")}finally{P(!1),_()}},S=Q=>{G(Q)},v=Q=>{M(D.map(oe=>oe.id===Q?{...oe,isEditing:!0}:oe))},He=async(Q,oe)=>{try{const ce=Rt(B,`users/${n.uid}/entries`,Q);await mw(ce,{entry:oe,timestamp:new Date}),M(D.map(de=>de.id===Q?{...de,entry:oe,isEditing:!1}:de))}catch(ce){console.error("Error updating entry:",ce)}},je=Q=>{M(D.map(oe=>oe.id===Q?{...oe,isEditing:!1}:oe))};return q.jsxs("div",{className:"journal-container",children:[q.jsxs("div",{className:"header",children:[q.jsx("h2",{className:"header-title",children:"Journal"}),q.jsxs("div",{className:"streak",style:{color:m?"red":"green"},children:[q.jsx(Cw,{className:"streak-icon"}),h," day streak ",m]})]}),q.jsxs("div",{className:"tabs",children:[q.jsx("button",{className:`tab-button ${L==="Today’s Prompt"?"active":""}`,onClick:()=>S("Today’s Prompt"),children:"Today’s Prompt"}),q.jsx("button",{className:`tab-button ${L==="Past Entries"?"active":""}`,onClick:()=>S("Past Entries"),children:"Past Entries"})]}),q.jsxs("div",{className:"content",children:[L==="Today’s Prompt"&&q.jsx("div",{className:"tab-content",children:A?q.jsx("p",{className:"loading-message",children:"Loading..."}):q.jsxs(q.Fragment,{children:[r&&q.jsx("h3",{className:"category-header",children:r})," ",q.jsx("p",{className:"prompt",children:e}),q.jsx("textarea",{className:"textarea",value:s,onChange:Q=>a(Q.target.value),placeholder:"Write your response here..."}),q.jsxs("div",{className:"save-container",children:[q.jsx("button",{className:"save-button",onClick:E,disabled:V,children:V?"Saving...":"Save Entry"}),ie&&q.jsx("span",{className:"save-message",children:ie})]})]})}),L==="Past Entries"&&q.jsxs("div",{className:"tab-content",children:[q.jsx("h3",{className:"past-entries-title",children:"Past Entries"}),D.length===0?q.jsx("p",{className:"no-entries-message",children:"No past entries yet. Start journaling today!"}):D.map(Q=>q.jsx("div",{className:"entry-card",children:Q.isEditing?q.jsxs(q.Fragment,{children:[q.jsx("textarea",{className:"textarea",value:Q.entry,onChange:oe=>M(D.map(ce=>ce.id===Q.id?{...ce,entry:oe.target.value}:ce))}),q.jsx("button",{onClick:()=>He(Q.id,Q.entry),children:"Save"}),q.jsx("button",{onClick:()=>je(Q.id),children:"Cancel"})]}):q.jsxs(q.Fragment,{children:[q.jsx("p",{className:"entry-prompt",children:Q.id}),q.jsx("p",{className:"entry-response",children:Q.entry}),q.jsx("p",{className:"entry-timestamp",children:Q.timestamp}),q.jsx("button",{onClick:()=>v(Q.id),children:"Edit"})]})},Q.id))]})]})]})};function kw(){return q.jsxs(Dp,{children:[q.jsx(ir,{path:"/signup",element:q.jsx(vw,{})}),q.jsx(ir,{path:"/login",element:q.jsx(ul,{})}),q.jsx(ir,{path:"/journal",element:q.jsx(tv,{component:bw})}),q.jsx(ir,{path:"/",element:q.jsx(ul,{})})]})}jf.render(q.jsx(Dt.StrictMode,{children:q.jsx(tm,{basename:"/wealth-within-app",children:q.jsx(kw,{})})}),document.getElementById("root"));
