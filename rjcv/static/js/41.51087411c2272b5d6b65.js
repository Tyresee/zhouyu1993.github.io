webpackJsonp([41],{IkBQ:function(e,t,n){var a=n("tvJy");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("a39b1cf8",a,!0)},JG4h:function(e,t,n){"use strict";function a(e){n("IkBQ")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),c=n.n(r),o=n("exGp"),i=n.n(o),s=n("teIl"),p=n("wG0d"),u={components:{"demo-example":p.a,"demo-header":s.default},data:function(){return{}},methods:{open1:function(){var e=this;return i()(c.a.mark(function t(){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$$map.mapping({id:"map1"});case 3:n=t.sent,console.log(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},open2:function(){var e=this;return i()(c.a.mark(function t(){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$$map.getPosition();case 3:n=t.sent,console.log(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},open3:function(){var e=this;return i()(c.a.mark(function t(){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$$map.getPosition({id:"map3"});case 3:n=t.sent,console.log(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},open4:function(){var e=this;return i()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$$map.mapping({id:"map4",dragEnable:!1,zoomEnable:!1,center:[118.888231,32.013308],mark:!0});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}},t,e,[[0,5]])}))()},open5:function(){var e=this;return i()(c.a.mark(function t(){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$$map.mapping({id:"map5",dragEnable:!1,zoomEnable:!1,center:[118.888231,32.013308],mark:!0});case 3:n=t.sent,setTimeout(i()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$$map.route(n,"Driving",{origin:[118.81541,32.03998],destination:[118.888231,32.013308]});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}},t,e,[[0,5]])})),2e3),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()}},mounted:function(){this.$$showPage()}},v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("demo-header"),e._v(" "),n("demo-example",{attrs:{title:"1.绘制地图",tip:"option中的id决定是否绘制地图"}},[n("rjcv-button",{nativeOn:{click:function(t){e.open1(t)}}},[e._v("open")]),e._v(" "),n("div",{attrs:{id:"map1"}},[e._v("因为有id，所以会在这绘制地图")])],1),e._v(" "),n("demo-example",{attrs:{title:"2.定位",tip:"这里只定位，控制台打出结果，不会绘制地图"}},[n("rjcv-button",{nativeOn:{click:function(t){e.open2(t)}}},[e._v("open")])],1),e._v(" "),n("demo-example",{attrs:{title:"3.定位并绘制地图"}},[n("rjcv-button",{nativeOn:{click:function(t){e.open3(t)}}},[e._v("open")]),e._v(" "),n("div",{attrs:{id:"map3"}})],1),e._v(" "),n("demo-example",{attrs:{title:"4.根据经纬度绘制地图"}},[n("rjcv-button",{nativeOn:{click:function(t){e.open4(t)}}},[e._v("open")]),e._v(" "),n("div",{attrs:{id:"map4"}})],1),e._v(" "),n("demo-example",{attrs:{title:"5.根据经纬度绘制地图，并导航"}},[n("rjcv-button",{nativeOn:{click:function(t){e.open5(t)}}},[e._v("open")]),e._v(" "),n("div",{attrs:{id:"map5"}})],1)],1)},m=[],d={render:v,staticRenderFns:m},l=d,f=n("VU/8"),h=a,x=f(u,l,!1,h,"data-v-0e307cc2",null);t.default=x.exports},tvJy:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n#map1[data-v-0e307cc2], #map3[data-v-0e307cc2], #map4[data-v-0e307cc2] {\n  height: 100px;\n}\n#map5[data-v-0e307cc2] {\n  height: 500px;\n}\n","",{version:3,sources:["/work/zhouyu/github/rj-component-vue/src/router/map/index.vue"],names:[],mappings:";AACA;EACE,cAAc;CACf;AACD;EACE,cAAc;CACf",file:"index.vue",sourcesContent:["\n#map1[data-v-0e307cc2], #map3[data-v-0e307cc2], #map4[data-v-0e307cc2] {\n  height: 100px;\n}\n#map5[data-v-0e307cc2] {\n  height: 500px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=41.51087411c2272b5d6b65.js.map