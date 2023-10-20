(()=>{"use strict";var e={146:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"/** @format */\n\n.add_button {\n  background-color: #eee3cb;\n  width: 50px;\n  height: 30px;\n  border: none;\n  border-radius: 50%;\n}\n",""]);const i=c},694:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),d=new URL(t(954),t.b),l=new URL(t(284),t.b),u=c()(o()),f=s()(d),p=s()(l);u.push([e.id,`/** @format */\n\n/*\n#B7C4CF\n#EEE3CB\n#D7C0AE\n#967E76*/\n@font-face {\n  font-family: "cafe";\n  src: url(${f});\n  font-family: "cafe_bold";\n  src: url(${p});\n}\n\n.main_container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.default_header {\n  background-color: #eee3cb;\n  font-family: "cafe_bold";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n}\n.default_folder {\n  display: grid;\n  background-color: #d7c0ae;\n  grid-template-rows: 1fr 4fr;\n  width: 400px;\n  height: 400px;\n  overflow: auto;\n\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n`,""]);const m=u},947:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),d=new URL(t(954),t.b),l=new URL(t(284),t.b),u=c()(o()),f=s()(d),p=s()(l);u.push([e.id,`/** @format */\n@font-face {\n  font-family: "cafe";\n  src: url(${f});\n  font-family: "cafe_bold";\n  src: url(${p});\n}\n/*\n#F9F5F6\n#F8E8EE\n#FDCEDF\n#F2BED1*/\n\n/*\n#B7C4CF\n#EEE3CB\n#D7C0AE\n#967E76*/\n\n.container {\n  display: grid;\n  grid-template-rows: 1fr 3fr;\n  gap: 30px;\n}\n.main_header {\n  background-color: #b7c4cf;\n  font-family: "cafe_bold";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.6rem;\n}\n`,""]);const m=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var f=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},284:(e,n,t)=>{e.exports=t.p+"c14429d37480c50e3dcf.ttf"},954:(e,n,t)=>{e.exports=t.p+"dc92b4f17f7b2f06a557.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),u=t(589),f=t.n(u),p=t(947),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var h=t(694),v={};v.styleTagTransform=f(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),n()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var b=t(146),y={};y.styleTagTransform=f(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),n()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;(function(){const e=document.getElementById("container"),n=document.createElement("div"),t=document.createElement("p");t.innerText="Too-To-Do",n.classList.add("main_header"),n.appendChild(t),e.appendChild(n)})(),function(){const e=document.createElement("div");e.classList.add("main_container");const n=document.createElement("div"),t=document.createElement("div");t.innerText="Everything",t.classList.add("default_header"),n.id="dfolder",n.classList.add("default_folder"),document.getElementById("container").appendChild(e),n.appendChild(t),e.appendChild(n),function(){const e=document.createElement("button");e.classList.add("add_button"),e.innerText="+",document.getElementById("dfolder").appendChild(e)}()}()})()})();