(this.webpackJsonpreact_client=this.webpackJsonpreact_client||[]).push([[0],{64:function(e,t,n){e.exports=n(78)},69:function(e,t,n){},70:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),u=(n(69),n(70),n(4)),l=n(11),i=n.n(l),s=n(34),m={ADD_NUM:"ADD_NUM",REDUCE_NUM:"REDUCE_NUM",ADD_ASTRONAUTS_FETCH_START:"ADD_ASTRONAUTS_FETCH_START",ADD_ASTRONAUTS_FETCH_SUCCESS:"ADD_ASTRONAUTS_FETCH_SUCCESS",ADD_ASTRONAUTS_FETCH_FAUILE:"ADD_ASTRONAUTS_FETCH_FAUILE"},d=n(35),E=n.n(d);var p=Object(u.b)(null,(function(e){return{sendAdd:function(t){e(function(e){return{type:m.ADD_NUM,payload:{num:e}}}(t))},sendReduce:function(t){e(function(e){return{type:m.REDUCE_NUM,payload:{num:e}}}(t))}}}))((function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.sendAdd(10)}},"+10"),r.a.createElement("button",{onClick:function(){e.sendReduce(2)}},"-2"))}));var f=Object(u.b)((function(e){return e.spinnerReducer}))((function(e){return r.a.createElement("div",null,e.count)})),h=n(5),A=n(1),T=function(){return r.a.createElement("section",{className:"home"},r.a.createElement("h1",null,"[Home Page]"))},_=function(){return r.a.createElement("section",{className:"about"},r.a.createElement("h1",null,"[About the Company]"))},b=function(){return r.a.createElement("section",{className:"events"},r.a.createElement("h1",null,"[Events Calendar]"))},v=function(){return r.a.createElement("section",{className:"products"},r.a.createElement("h1",null,"[Products Catalog]"))},S=function(){return r.a.createElement("section",{className:"contact"},r.a.createElement("h1",null,"[Contact Us]"))},C=function(){return r.a.createElement("div",{className:"pagesnavigator"},r.a.createElement("nav",null,r.a.createElement(h.b,{to:"/"},"[Home]"),r.a.createElement(h.b,{to:"about"},"[About]"),r.a.createElement(h.b,{to:"events"},"[Events]"),r.a.createElement(h.b,{to:"products"},"[Products]"),r.a.createElement(h.b,{to:"contact"},"[Contact]")))},O=function(e){var t=e.location;return r.a.createElement("section",{className:"pagesnotfound"},r.a.createElement("h1",null,"Resource not found at '",t.pathname,"'"))},D=n(17),U=n(18),R=n(19),N=n(20),g=n(21),y=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;return Object(D.a)(this,n),(e=t.call(this)).handleOnClick=e.handleOnClick.bind(Object(R.a)(e)),e}return Object(U.a)(n,[{key:"handleOnClick",value:function(){this.props.fetchAstronauts()}},{key:"render",value:function(){var e=this.props,t=e.astronauts,n=e.pending,a=e.error,c=JSON.stringify(t);return r.a.createElement("div",{className:"Astro"},r.a.createElement("button",{onClick:this.handleOnClick},"Fetch Astro"),r.a.createElement("h1",null,n?"loading...":""),n||c,a)}}]),n}(a.Component),j=Object(u.b)((function(e){return e.astronautsReducer}),(function(e){return{fetchAstronauts:function(){e((function(e){e({type:m.ADD_ASTRONAUTS_FETCH_START});var t={email:"admin@qq.com",password:"Umph2014$@"},n=Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");console.log(n),E()("https://hub.fy1m.net/auth/login",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}).then(function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("response: ",t),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(t){if(t.error)throw t.error;return e({type:m.ADD_ASTRONAUTS_FETCH_SUCCESS,astronauts:t}),t})).catch((function(t){console.log(t),e({type:m.ADD_ASTRONAUTS_FETCH_FAUILE,error:JSON.stringify(t)})}))}))}}}))(y),w=n(39),k=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(){var e;return Object(D.a)(this,n),(e=t.call(this)).myRef=r.a.createRef(),e.dataset=[35,20,30,15,50],e}return Object(U.a)(n,[{key:"componentDidMount",value:function(){console.log(this.myRef);var e=w.a(this.myRef.current).append("svg").attr("width",75).attr("height",75);e.selectAll("rect").data(this.dataset).enter().append("rect").attr("x",(function(e,t){return 2.5+15*t})).attr("y",(function(e){return 75-e})).attr("width",10).attr("height",(function(e){return e})).attr("fill","teal")}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.myRef})}}]),n}(a.Component);window.React=r.a;var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(h.a,null,r.a.createElement(C,null),r.a.createElement("div",{className:"main"},r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",component:T}),r.a.createElement(A.a,{path:"/about",component:_}),r.a.createElement(A.a,{path:"/events",component:b}),r.a.createElement(A.a,{path:"/products",component:v}),r.a.createElement(A.a,{path:"/contact",component:S}),r.a.createElement(A.a,{component:O})))),r.a.createElement(j,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(6),M=n(7),I={count:0},x={astronauts:[],pending:!1,error:null},J=Object(H.c)({spinnerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.ADD_NUM:return Object(M.a)({},e,{count:e.count+t.payload.num});case m.REDUCE_NUM:return Object(M.a)({},e,{count:e.count-t.payload.num});default:return e}},astronautsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.ADD_ASTRONAUTS_FETCH_START:return Object(M.a)({},e,{pending:!0});case m.ADD_ASTRONAUTS_FETCH_SUCCESS:return Object(M.a)({},e,{astronauts:t.astronauts,pending:!1});case m.ADD_ASTRONAUTS_FETCH_FAUILE:return Object(M.a)({},e,{astronauts:t.astronauts,pending:!1,error:t.error});default:return e}}}),L=n(37),P=n(38),q=n.n(P),B=Object(H.d)(J,Object(H.a)(L.a,q.a));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:B},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.50ac0147.chunk.js.map