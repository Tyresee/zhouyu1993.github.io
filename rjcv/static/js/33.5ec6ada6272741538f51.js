webpackJsonp([33],{"0UZ/":function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,"\n.upload-wrapper[data-v-3ea8e102] {\n  position: relative;\n  width: 1rem;\n  height: 1rem;\n  color: #fff;\n  text-align: center;\n  background-color: red;\n}\n.upload-preview .video[data-v-3ea8e102] {\n  width: 2rem;\n  height: 2rem;\n}\n","",{version:3,sources:["/work/zhouyu/github/rj-component-vue/src/router/upload/index.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,aAAa;CACd",file:"index.vue",sourcesContent:["\n.upload-wrapper[data-v-3ea8e102] {\n  position: relative;\n  width: 1rem;\n  height: 1rem;\n  color: #fff;\n  text-align: center;\n  background-color: red;\n}\n.upload-preview .video[data-v-3ea8e102] {\n  width: 2rem;\n  height: 2rem;\n}\n"],sourceRoot:""}])},"7qQW":function(e,t,a){"use strict";function o(e){a("roEl")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("teIl"),r=a("wG0d"),i={components:{"demo-example":r.a,"demo-header":n.default},data:function(){return{response:{},poster:"https://zhouyu1993.github.io/rjcv/static/icon.png",preview:!1}},methods:{upload:function(){document.querySelector(".rjcv-upload").click()},uploadResponse:function(e){if(console.log(e),this.response=e,4===e.code){var t=e.data.res&&e.data.res.data&&e.data.res.data.access_url;if(t){var a=t.replace("file","cos.ap-shanghai").replace("http:","https:");console.log("处理后的access_url",a)}}},videoPreview:function(){var e=this;if(!this.preview){var t=this.$refs.video;t&&(this.preview=!0,t.addEventListener("loadeddata",function(){console.log("preview");var a=document.createElement("canvas");a.width=.6*t.videoWidth,a.height=.6*t.videoHeight,a.getContext("2d").drawImage(t,0,0,a.width,a.height),e.poster=a.toDataURL("image/png")}))}}},mounted:function(){this.$$showPage()},updated:function(){this.videoPreview()}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("demo-header"),e._v(" "),a("demo-example",{attrs:{title:"上传控件",tip:"图片、视频"}},[a("div",{staticClass:"upload-wrapper"},[e._v("\n      点我\n      "),a("rjcv-upload",{on:{uploadResponse:e.uploadResponse}})],1),e._v(" "),e.response.data&&2===e.response.data.classify&&e.response.data.src?a("div",{staticClass:"upload-preview"},[a("video",{ref:"video",staticClass:"video",attrs:{src:e.response.data&&e.response.data.src,poster:e.poster}})]):e._e(),e._v(" "),a("br"),e._v(" "),a("rjcv-button",{nativeOn:{click:function(t){e.upload(t)}}},[e._v("点我也可以，模拟点击事件")])],1)],1)},d=[],c={render:s,staticRenderFns:d},p=c,l=a("VU/8"),u=o,v=l(i,p,!1,u,"data-v-3ea8e102",null);t.default=v.exports},roEl:function(e,t,a){var o=a("0UZ/");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("535392ee",o,!0)}});
//# sourceMappingURL=33.5ec6ada6272741538f51.js.map