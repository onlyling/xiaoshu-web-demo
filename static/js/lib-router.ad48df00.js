/*! For license information please see lib-router.ad48df00.js.LICENSE.txt */
"use strict";(self.webpackChunkxiaoshu_web_demo=self.webpackChunkxiaoshu_web_demo||[]).push([["118"],{5648:function(e,t,n){n.d(t,{Ep:()=>h,aU:()=>a,cP:()=>p,q_:()=>o});var r,a,l=n(6019);(r=a||(a={})).Pop="POP",r.Push="PUSH",r.Replace="REPLACE";var i=function(e){return e},u="beforeunload";function o(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,r=n.history;function o(){var e=p(n.location.hash.substr(1)),t=e.pathname,a=e.search,l=e.hash,u=r.state||{};return[u.idx,i({pathname:void 0===t?"/":t,search:void 0===a?"":a,hash:void 0===l?"":l,state:u.usr||null,key:u.key||"default"})]}var f=null;function d(){if(f)P.call(f),f=null;else{var e=a.Pop,t=o(),n=t[0],r=t[1];if(P.length){if(null!=n){var l=g-n;l&&(f={action:e,location:r,retry:function(){k(-1*l)}},k(l))}}else O(e)}}n.addEventListener("popstate",d),n.addEventListener("hashchange",function(){h(o()[1])!==h(y)&&d()});var m=a.Pop,v=o(),g=v[0],y=v[1],x=s(),P=s();function b(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var r=n.location.href,a=r.indexOf("#");t=-1===a?r:r.slice(0,a)}return t}()+"#"+("string"==typeof e?e:h(e))}function E(e,t){return void 0===t&&(t=null),i((0,l.Z)({pathname:y.pathname,hash:"",search:""},"string"==typeof e?p(e):e,{state:t,key:Math.random().toString(36).substr(2,8)}))}function C(e,t){return[{usr:e.state,key:e.key,idx:t},b(e)]}function S(e,t,n){return!P.length||(P.call({action:e,location:t,retry:n}),!1)}function O(e){m=e;var t=o();g=t[0],y=t[1],x.call({action:m,location:y})}function k(e){r.go(e)}return null==g&&(g=0,r.replaceState((0,l.Z)({},r.state,{idx:g}),"")),{get action(){return m},get location(){return y},createHref:b,push:function e(t,l){var i=a.Push,u=E(t,l);if(S(i,u,function(){e(t,l)})){var o=C(u,g+1),c=o[0],s=o[1];try{r.pushState(c,"",s)}catch(e){n.location.assign(s)}O(i)}},replace:function e(t,n){var l=a.Replace,i=E(t,n);if(S(l,i,function(){e(t,n)})){var u=C(i,g),o=u[0],c=u[1];r.replaceState(o,"",c),O(l)}},go:k,back:function(){k(-1)},forward:function(){k(1)},listen:function(e){return x.push(e)},block:function(e){var t=P.push(e);return 1===P.length&&n.addEventListener(u,c),function(){t(),P.length||n.removeEventListener(u,c)}}}}function c(e){e.preventDefault(),e.returnValue=""}function s(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter(function(e){return e!==t})}},call:function(t){e.forEach(function(e){return e&&e(t)})}}}function h(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,a=void 0===r?"":r,l=e.hash,i=void 0===l?"":l;return a&&"?"!==a&&(n+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:"#"+i),n}function p(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}},9711:function(e,t,n){n.d(t,{UT:()=>o,rU:()=>c});var r=n(7294),a=n(5648),l=n(6974);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let u=["onClick","reloadDocument","replace","state","target","to"];function o(e){let{basename:t,children:n,window:i}=e,u=(0,r.useRef)();null==u.current&&(u.current=(0,a.q_)({window:i}));let o=u.current,[c,s]=(0,r.useState)({action:o.action,location:o.location});return(0,r.useLayoutEffect)(()=>o.listen(s),[o]),(0,r.createElement)(l.F0,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:o})}let c=(0,r.forwardRef)(function(e,t){let{onClick:n,reloadDocument:o,replace:c=!1,state:s,target:h,to:p}=e,f=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,u),d=(0,l.oQ)(p),m=function(e,t){let{target:n,replace:i,state:u}=void 0===t?{}:t,o=(0,l.s0)(),c=(0,l.TH)(),s=(0,l.WU)(e);return(0,r.useCallback)(t=>{0!==t.button||n&&"_self"!==n||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),o(e,{replace:!!i||(0,a.Ep)(c)===(0,a.Ep)(s),state:u}))},[c,o,s,i,u,n,e])}(p,{replace:c,state:s,target:h});return(0,r.createElement)("a",i({},f,{href:d,onClick:function(e){n&&n(e),e.defaultPrevented||o||m(e)},ref:t,target:h}))})},6974:function(e,t,n){n.d(t,{AW:()=>C,F0:()=>S,TH:()=>x,UO:()=>b,WU:()=>E,Z5:()=>O,oQ:()=>g,s0:()=>P});var r=n(5648),a=n(7294);let l=(0,a.createContext)(null),i=(0,a.createContext)(null),u=(0,a.createContext)({outlet:null,matches:[]});function o(e,t){if(!e)throw Error(t)}let c=/^:\w+$/,s=e=>"*"===e;function h(e,t,n){let a,l="string"==typeof e?(0,r.cP)(e):e,i=""===e||""===l.pathname?"/":l.pathname;if(null==i)a=n;else{let e=t.length-1;if(i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;l.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e,t){var n;let a;void 0===t&&(t="/");let{pathname:l,search:i="",hash:u=""}="string"==typeof e?(0,r.cP)(e):e;return{pathname:l?l.startsWith("/")?l:(n=l,a=t.replace(/\/+$/,"").split("/"),n.split("/").forEach(e=>{".."===e?a.length>1&&a.pop():"."!==e&&a.push(e)}),a.length>1?a.join("/"):"/"):t,search:m(i),hash:v(u)}}(l,a);return i&&"/"!==i&&i.endsWith("/")&&!u.pathname.endsWith("/")&&(u.pathname+="/"),u}function p(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}let f=e=>e.join("/").replace(/\/\/+/g,"/"),d=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),m=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",v=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function g(e){y()||o(!1);let{basename:t,navigator:n}=(0,a.useContext)(l),{hash:i,pathname:u,search:c}=E(e),s=u;if("/"!==t){let n=""===e||""===e.pathname?"/":"string"==typeof e?(0,r.cP)(e).pathname:e.pathname,a=null!=n&&n.endsWith("/");s="/"===u?t+(a?"/":""):f([t,u])}return n.createHref({pathname:s,search:c,hash:i})}function y(){return null!=(0,a.useContext)(i)}function x(){return y()||o(!1),(0,a.useContext)(i).location}function P(){y()||o(!1);let{basename:e,navigator:t}=(0,a.useContext)(l),{matches:n}=(0,a.useContext)(u),{pathname:r}=x(),i=JSON.stringify(n.map(e=>e.pathnameBase)),c=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{c.current=!0}),(0,a.useCallback)(function(n,a){if(void 0===a&&(a={}),!c.current)return;if("number"==typeof n){t.go(n);return}let l=h(n,JSON.parse(i),r);"/"!==e&&(l.pathname=f([e,l.pathname])),(a.replace?t.replace:t.push)(l,a.state)},[e,t,i,r])}function b(){let{matches:e}=(0,a.useContext)(u),t=e[e.length-1];return t?t.params:{}}function E(e){let{matches:t}=(0,a.useContext)(u),{pathname:n}=x(),r=JSON.stringify(t.map(e=>e.pathnameBase));return(0,a.useMemo)(()=>h(e,JSON.parse(r),n),[e,r,n])}function C(e){o(!1)}function S(e){let{basename:t="/",children:n=null,location:u,navigationType:c=r.aU.Pop,navigator:s,static:h=!1}=e;y()&&o(!1);let f=d(t),m=(0,a.useMemo)(()=>({basename:f,navigator:s,static:h}),[f,s,h]);"string"==typeof u&&(u=(0,r.cP)(u));let{pathname:v="/",search:g="",hash:x="",state:P=null,key:b="default"}=u,E=(0,a.useMemo)(()=>{let e=p(v,f);return null==e?null:{pathname:e,search:g,hash:x,state:P,key:b}},[f,v,g,x,P,b]);return null==E?null:(0,a.createElement)(l.Provider,{value:m},(0,a.createElement)(i.Provider,{children:n,value:{location:E,navigationType:c}}))}function O(e){let{children:t,location:n}=e;return function(e,t){var n,l,i;let h;y()||o(!1);let{matches:m}=(0,a.useContext)(u),v=m[m.length-1],g=v?v.params:{};v&&v.pathname;let P=v?v.pathnameBase:"/";v&&v.route;let b=x();if(t){let e="string"==typeof t?(0,r.cP)(t):t;"/"===P||(null==(n=e.pathname)?void 0:n.startsWith(P))||o(!1),h=e}else h=b;let E=h.pathname||"/",C=function(e,t,n){void 0===n&&(n="/");let a=p(("string"==typeof t?(0,r.cP)(t):t).pathname||"/",n);if(null==a)return null;let l=function e(t,n,r,a){return void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a=""),t.forEach((t,l)=>{var i,u;let h,p,d={relativePath:t.path||"",caseSensitive:!0===t.caseSensitive,childrenIndex:l,route:t};d.relativePath.startsWith("/")&&(d.relativePath.startsWith(a)||o(!1),d.relativePath=d.relativePath.slice(a.length));let m=f([a,d.relativePath]),v=r.concat(d);t.children&&t.children.length>0&&(!0===t.index&&o(!1),e(t.children,n,v,m)),(null!=t.path||t.index)&&n.push({path:m,score:(i=m,u=t.index,p=(h=i.split("/")).length,h.some(s)&&(p+=-2),u&&(p+=2),h.filter(e=>!s(e)).reduce((e,t)=>e+(c.test(t)?3:""===t?1:10),p)),routesMeta:v})}),n}(e);!function(e){e.sort((e,t)=>{var n,r;return e.score!==t.score?t.score-e.score:(n=e.routesMeta.map(e=>e.childrenIndex),r=t.routesMeta.map(e=>e.childrenIndex),n.length===r.length&&n.slice(0,-1).every((e,t)=>e===r[t])?n[n.length-1]-r[r.length-1]:0)})}(l);let i=null;for(let e=0;null==i&&e<l.length;++e)i=function(e,t){let{routesMeta:n}=e,r={},a="/",l=[];for(let e=0;e<n.length;++e){let i=n[e],u=e===n.length-1,o="/"===a?t:t.slice(a.length)||"/",c=function(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(e,t)=>(r.push(t),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:r.reduce((e,t,n)=>{if("*"===t){let e=u[n]||"";i=l.slice(0,l.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(u[n]||"",0),e},{}),pathname:l,pathnameBase:i,pattern:e}}({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},o);if(!c)return null;Object.assign(r,c.params);let s=i.route;l.push({params:r,pathname:f([a,c.pathname]),pathnameBase:d(f([a,c.pathnameBase])),route:s}),"/"!==c.pathnameBase&&(a=f([a,c.pathnameBase]))}return l}(l[e],a);return i}(e,{pathname:"/"===P?E:E.slice(P.length)||"/"});return l=C&&C.map(e=>Object.assign({},e,{params:Object.assign({},g,e.params),pathname:f([P,e.pathname]),pathnameBase:"/"===e.pathnameBase?P:f([P,e.pathnameBase])})),(void 0===(i=m)&&(i=[]),null==l)?null:l.reduceRight((e,t,n)=>(0,a.createElement)(u.Provider,{children:void 0!==t.route.element?t.route.element:e,value:{outlet:e,matches:i.concat(l.slice(0,n+1))}}),null)}(function e(t){let n=[];return a.Children.forEach(t,t=>{if(!(0,a.isValidElement)(t))return;if(t.type===a.Fragment){n.push.apply(n,e(t.props.children));return}t.type!==C&&o(!1);let r={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(r.children=e(t.props.children)),n.push(r)}),n}(t),n)}}}]);