webpackJsonp([1],{HvRr:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"header"}}),this._v(" "),e("router-view",{attrs:{name:"main"}})],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},s,!1,function(t){n("Ry/E")},null,null).exports,r=n("/ocq"),o={name:"Header",data:()=>({list:[{title:"home",path:"/index"},{title:"about",path:"/about"},{title:"note",path:"/note"}],itemCheck:0}),components:{},methods:{tabClass(t){this.itemCheck=t}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"information"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"list-bar"},[n("ul",t._l(t.list,function(e,a){return n("li",{key:e.title,staticClass:"list-select"},[n("router-link",{class:{"list-select":t.itemCheck==a},attrs:{to:e.path},nativeOn:{click:function(e){return t.tabClass(a)}}},[t._v(t._s(e.title))])],1)}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headimg"},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:"#",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("h1",[this._v("魏攀")]),this._v(" "),e("p",[this._v("enjoy life")]),this._v(" "),e("br")])}]};var l=n("VU/8")(o,c,!1,function(t){n("RSXV")},null,null).exports,u={name:"Home",data:()=>({}),components:{}},h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"blog-content"},[this._v("\n    home  \n")])},staticRenderFns:[]};var m=n("VU/8")(u,h,!1,function(t){n("pC4o")},null,null).exports,p={name:"About",data:()=>({}),components:{}},d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    about\n")])},staticRenderFns:[]};var v=n("VU/8")(p,d,!1,function(t){n("uPYp")},null,null).exports,f={name:"Note",data:()=>({}),components:{},mounted(){this.$axios.get("http://localhost:3000/users/user").then(function(t){console.log(t.data)}).catch(function(t){console.log("借口调用失败")})}},_={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("note")])},staticRenderFns:[]};var b=n("VU/8")(f,_,!1,function(t){n("HvRr")},null,null).exports;a.a.use(r.a);var C=new r.a({mode:"history",routes:[{path:"/",redirect:"/index"},{path:"/index",name:"index",components:{header:l,main:m}},{path:"/about",name:"about",components:{header:l,main:v}},{path:"/note",name:"note",components:{header:l,main:b}}]}),x=n("mtWM"),R=n.n(x);a.a.config.productionTip=!1,a.a.prototype.$axios=R.a,new a.a({el:"#app",router:C,components:{App:i},template:"<App/>"})},RSXV:function(t,e){},"Ry/E":function(t,e){},pC4o:function(t,e){},uPYp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9c78290d1c525fcdcf97.js.map