webpackJsonp([5],{B8wZ:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.flex[data-v-09446f8a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flex .right[data-v-09446f8a] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin-left: 20px;\n}\n","",{version:3,sources:["/work/zhouyu/github/rj-component-vue/src/router/badge/index.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,qBAAqB;EACrB,cAAc;CACf;AACD;IACI,oBAAoB;IACpB,gBAAgB;QACZ,YAAY;YACR,QAAQ;IAChB,kBAAkB;CACrB",file:"index.vue",sourcesContent:["\n.flex[data-v-09446f8a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flex .right[data-v-09446f8a] {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin-left: 20px;\n}\n"],sourceRoot:""}])},b7z0:function(e,t,n){var a=n("B8wZ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("033a3f4e",a,!0)},hCJo:function(e,t,n){"use strict";function a(e){n("b7z0")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("teIl"),o=n("wG0d"),l={components:{"demo-example":o.a,"demo-header":i.default},data:function(){return{badges:[{iconName:"flower",info:0,text:"选型一",href:"https://zhouyu1993.github.io/"},{iconName:"kefu",info:"99",text:"选型二"},{iconName:"store",info:1,text:"选型三"},{iconName:"search",info:100,text:"选型四"}]}},methods:{handleBadgeClick:function(e){console.log(e)}},mounted:function(){this.$$showPage()}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("demo-header"),e._v(" "),n("demo-example",{attrs:{title:"1.基础用法",tip:"数组；设置默认显示第3个(序列为2)；图标、信息（数字等）、显示文本、禁止、点击回调"}},[n("rjcv-badge",{attrs:{defaultIndex:2}},e._l(e.badges,function(t,a){return n("rjcv-badgeitem",{key:a,attrs:{index:a,name:t.iconName,info:t.info,text:t.text,disabled:1===a},on:{badgeClick:e.handleBadgeClick}})}))],1),e._v(" "),n("demo-example",{attrs:{title:"2.slot",tip:"定义其他内容，如链接"}},[n("rjcv-badge",{staticStyle:{width:"200px"}},e._l(e.badges,function(t,a){return n("a",{key:a,attrs:{href:t.href}},[n("rjcv-badgeitem",{attrs:{index:a},on:{badgeClick:e.handleBadgeClick}},[n("span",[e._v(e._s(t.text))])])],1)}))],1)],1)},r=[],d={render:s,staticRenderFns:r},f=d,c=n("VU/8"),x=a,u=c(l,f,!1,x,"data-v-09446f8a",null);t.default=u.exports}});
//# sourceMappingURL=5.fb745d0fd24e61120f98.js.map