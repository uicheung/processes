(function(e){function t(t){for(var n,o,l=t[0],s=t[1],i=t[2],c=0,p=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);v&&v(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={index:0},a={index:0},u=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8e52a98c"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"c531694e"}[e]+".css",a=s.p+n,u=document.getElementsByTagName("link"),l=0;l<u.length;l++){var i=u[l],c=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(c===n||c===a))return t()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){i=p[l],c=i.getAttribute("data-href");if(c===n||c===a)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],v.parentNode.removeChild(v),r(u)},v.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(v)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(e);var p=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(v);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var v=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/project-name/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var v=c;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("c31f")},"17d7":function(e,t,r){},"2fb8":function(e,t,r){"use strict";var n=r("6ae6"),o=r.n(n);o.a},"42b1":function(e,t,r){"use strict";var n=r("f381"),o=r.n(n);o.a},"54b3":function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},"55cf":function(e,t,r){"use strict";var n=r("17d7"),o=r.n(n);o.a},"6ae6":function(e,t,r){},c31f:function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],u=(r("42b1"),r("2877")),l={},s=Object(u["a"])(l,o,a,!1,null,null,null),i=s.exports,c=r("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("zm-test",{attrs:{bgColor:"blue"}}),n("img",{attrs:{alt:"Vue logo",src:r("54b3")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},g=m,d=(r("55cf"),Object(u["a"])(g,f,h,!1,null,"817f3f90",null)),b=d.exports,_={name:"Home",components:{HelloWorld:b},mounted(){console.log(this)}},j=_,y=Object(u["a"])(j,p,v,!1,null,null,null),w=y.exports;n["a"].use(c["a"]);const k=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"c2a7"))}],E=new c["a"]({routes:k});var x=E,C=r("2f62");n["a"].use(C["a"]);var O=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"zm-test",style:{backgroundColor:e.bgColor}})},P=[],T={name:"ZmTest",props:{bgColor:{type:String,default:"#ccc"}}},$=T,A=(r("2fb8"),Object(u["a"])($,S,P,!1,null,"71182c8b",null)),L=A.exports;L.install=function(e){e.component(L.name,L)};var H=L;const N=[H],V=function(e){V.installed||N.map(t=>e.component(t.name,t))};"undefined"!==typeof window.Vue&&window.Vue&&V(window.Vue);var M={install:V,ZmTest:H};n["a"].config.productionTip=!1,n["a"].use(M),new n["a"]({router:x,store:O,render:e=>e(i)}).$mount("#app")},f381:function(e,t,r){}});
//# sourceMappingURL=index.e3a4816d.js.map