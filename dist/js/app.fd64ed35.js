(function(e){function t(t){for(var o,a,c=t[0],l=t[1],u=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"2ee1":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="2ee1"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("UploadForm",{attrs:{fileIsReady:e.fileIsReady}})],1)},i=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"form-box"},[n("div",{staticClass:"file-choose"},[n("input",{attrs:{type:"file",id:"file",multiple:""},on:{change:function(t){return e.handleFileSubmit(t)}}})]),n("div",{staticClass:"file-submit"},[n("button",{on:{click:function(t){return e.submitFile()}}},[e._v("Submit")])])])])}),c=[],l=n("b85c"),u={name:"UploadForm",data:function(){return{file:""}},methods:{submitFile:function(){var e,t=new FormData,n=Object(l["a"])(this.file);try{for(n.s();!(e=n.n()).done;){var o=e.value;t.append("file",o)}}catch(r){n.e(r)}finally{n.f()}console.log(t),this.$root.$emit("sendFiles",t)},handleFileSubmit:function(e){this.file=[];var t,n=Object(l["a"])(e.target.files);try{for(n.s();!(t=n.n()).done;){var o=t.value;this.file.push(o)}}catch(r){n.e(r)}finally{n.f()}}}},f=u,s=(n("c11b"),n("2877")),d=Object(s["a"])(f,a,c,!1,null,"a32a3304",null),p=d.exports,b=n("bc3a"),h=n.n(b),v={name:"App",data:function(){return{fileIsReady:null}},components:{UploadForm:p},methods:{sendFiles:function(e){var t=this;console.log(e.get("file")),h.a.post("/convertFile",e,{responseType:"arraybuffer",headers:{"Content-Type":"application/json",Accept:"application/pdf"}}).then((function(e){t.fileIsReady=!0;var n=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=n,o.setAttribute("download","file.pdf"),document.body.appendChild(o),o.click()})).catch((function(e){return console.log(e)}))}},beforeCreate:function(){var e=this;this.$root.$on("sendFiles",(function(t){e.sendFiles(t)}))}},m=v,y=(n("034f"),Object(s["a"])(m,r,i,!1,null,null,null)),O=y.exports,w=n("6efd");o["a"].http.options.root=w["apiHost"],o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(O)}}).$mount("#app")},7171:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="7171"},"85ec":function(e,t,n){},c11b:function(e,t,n){"use strict";n("fb84")},fb84:function(e,t,n){}});
//# sourceMappingURL=app.fd64ed35.js.map