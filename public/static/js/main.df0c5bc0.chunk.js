(this.webpackJsonpreact_client=this.webpackJsonpreact_client||[]).push([[0],Array(68).concat([function(e,t,n){e.exports=n(142)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),c=n.n(l),o=(n(73),n(74),n(75),n(1)),s=n(2),u=n(4),i=n(3),m=(n(76),n(77),n(78),n(26)),p=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).myRef=r.a.createRef(),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.size_x,n=e.size_y,a=e.rect_cx,r=e.fill,l=e.dataset,c=m.a(this.myRef.current).append("svg").attr("width",t).attr("height",n),o=t/l.length-a;c.selectAll("rect").data(l).enter().append("rect").attr("x",(function(e,t){return o/2+t*(a+o)})).attr("y",(function(e){return n-e})).attr("width",a).attr("height",(function(e){return e})).attr("fill",r)}},{key:"render",value:function(){var e=this.props.funcHandle;return r.a.createElement("div",{className:"sly-icon-container"},r.a.createElement("div",{ref:this.myRef,onClick:e,className:"sly-icon"}))}}]),n}(a.Component);p.defaultProps={size_x:75/4,size_y:12.5,rect_cx:2.5,fill:"white",dataset:[8.75,5,7.5,3.75,12.5],funcHandle:function(e){return e}};var y=p,f=(n(80),n(8)),h=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.linkAddress,a=e.funcHandle,l=e.extraStyle,c=null;return c=n?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{to:n,className:"sly-link-button "+l},t)):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:a,className:"sly-link-button "+l},t)),r.a.createElement("div",{className:"sly-link-button-container"},c)}}]),n}(a.Component);h.defaultProps={text:"Sign up",linkAddress:void 0,funcHandle:function(e){return e},extraStyle:""};var d=h,E=n(9),b=n(6),v=n(7),O={ADD_NUM:"ADD_NUM",REDUCE_NUM:"REDUCE_NUM",ADD_ASTRONAUTS_FETCH_START:"ADD_ASTRONAUTS_FETCH_START",ADD_ASTRONAUTS_FETCH_SUCCESS:"ADD_ASTRONAUTS_FETCH_SUCCESS",ADD_ASTRONAUTS_FETCH_FAUILE:"ADD_ASTRONAUTS_FETCH_FAUILE",USER_SIGNOUT:"USER_SIGNOUT",ADD_MENU:"ADD_MENU",REMOVE_MENU:"REMOVE_MENU",CLEAR_MENU:"CLEAR_MENU"},j=n(41),S=n.n(j),g=n(38),N=function(){return g.remove("astronauts"),{type:O.USER_SIGNOUT,payload:{}}},C=function(e){return{type:O.ADD_MENU,menu:Object(v.a)({},e)}},k=function(e){return{type:O.REMOVE_MENU,menu:Object(v.a)({},e)}},w=function(){return{type:O.CLEAR_MENU}},_=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onSlyCommonArticles=function(){e.props.history.push("/my/SlyCommonArticles")},e.onSlyCommonQuestionBanks=function(){e.props.history.push("/my/SlyCommonQuestionBanks")},e.onSlyCommonSurveys=function(){e.props.history.push("/my/SlyCommonSurveys")},e.handleClickFeatures=function(){console.log("--handleClickFeatures"),e.props.history.push("/my/SlyCommonMissingParts")},e.handleClickSolutions=function(){console.log("--handleClickSolutions"),e.props.history.push("/my/SlyCommonSolutions")},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-comp-left-container"},r.a.createElement(y,{size_x:75/4,size_y:12.5,rect_cx:2.5,fill:"indigo",funcHandle:this.handleClickFeatures}),r.a.createElement("div",{className:"sly-comp-left-shadow-sm"},r.a.createElement(y,{size_x:75,size_y:12.5,rect_cx:7,fill:"indigo",funcHandle:this.handleClickSolutions})),r.a.createElement(d,{text:"articles",funcHandle:this.onSlyCommonArticles}),r.a.createElement("div",{className:"sly-comp-left-shadow-md"},r.a.createElement(d,{text:"question banks",funcHandle:this.onSlyCommonQuestionBanks}),r.a.createElement(d,{text:"surveys",funcHandle:this.onSlyCommonSurveys})))}}]),n}(a.Component),A=Object(E.b)((function(e){return e.astronautsReducer}),(function(e){return{userSignout:function(){e(N())},addMenu:function(t){e(C(t))},removeMenu:function(t){e(k(t))},clearMenu:function(){e(w())}}}))(Object(b.f)(_)),x=(n(97),n(98),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).myRef=r.a.createRef(),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.size_x,n=e.size_y,a=e.rect_cx,r=e.fill,l=e.dataset,c=m.a(this.myRef.current).append("svg").attr("width",t).attr("height",n),o=t/l.length-a;c.selectAll("rect").data(l).enter().append("rect").attr("x",(function(e,t){return o/2+t*(a+o)})).attr("y",(function(e){return n-e})).attr("width",a).attr("height",(function(e){return e})).attr("fill",r)}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.myRef,className:"sly-d3card"})}}]),n}(a.Component));x.defaultProps={size_x:75,size_y:55,rect_cx:10,fill:"teal",dataset:[35,20,30,15,50]};var T=x,M=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-search-container"},r.a.createElement(T,{size_x:24,size_y:18,rect_cx:3,fill:"teal",dataset:[16,12,15,14,17]}),r.a.createElement("div",{className:"sly-search-shadow-xs"},r.a.createElement("input",{className:"sly-search",type:"text",autocomplete:"off",maxLength:"52",placeholder:"Kw1,Kw2,..."})))}}]),n}(a.Component),R=(n(99),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"handleClick",value:function(e){if(null===e.email||null===e.password)console.log("--\x3e Jump path or perform local operation");else{console.log("--\x3e Perform remote calls");var t={email:e.email.current.value,password:e.password.current.value};this.props.fetchAstronauts(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.text,a=t.data,l=t.linkAddress,c=null;return c=l?r.a.createElement(f.b,{to:l,className:"sly-button"},n):r.a.createElement("button",{onClick:function(){return e.handleClick(a)},className:"sly-button stretch"},n),r.a.createElement("div",{className:"sly-button-container"},c)}}]),n}(a.Component));R.defaultProps={text:"Sign up",linkAddress:void 0,data:{email:null,password:null}};var U=Object(E.b)((function(e){return e.astronautsReducer}),(function(e){return{fetchAstronauts:function(t){e(function(e){return function(t){t({type:O.ADD_ASTRONAUTS_FETCH_START});var n=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");S()("/auth/login",{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}).then((function(e){if(!e.ok)throw e;return e.json()})).then((function(e){return g.set("astronauts",e.token),t({type:O.ADD_ASTRONAUTS_FETCH_SUCCESS,astronauts:e.token}),e})).catch((function(e){var n={status:e.status,statusText:e.statusText};t({type:O.ADD_ASTRONAUTS_FETCH_FAUILE,error:JSON.stringify(n)})}))}}(t))}}}))(Object(b.f)(R)),D=(n(100),n(101),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-divider-container"})}}]),n}(a.Component)),P=(n(102),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-menu-item-container"},this.props.children)}}]),n}(a.Component));P.defaultProps={isVisible:!1};var H=Object(E.b)((function(e){return e.astronautsReducer}),(function(e){return{userSignout:function(){e(N())}}}))(Object(b.f)(P)),F=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onSignout=function(){e.props.userSignout(),e.props.history.push("/users/login")},e.onSlyNotes=function(){e.props.history.push("/my/SlyNotes"),e.toggleMenuPanel()},e.onSlyNotesView=function(){e.props.history.push("/my/SlyNotesView"),e.toggleMenuPanel()},e.onSlyNotesSearch=function(){e.props.history.push("/my/SlyNotesSearch"),e.toggleMenuPanel()},e.onSlyNotesEdit=function(){e.props.history.push("/my/SlyNotesEdit"),e.toggleMenuPanel()},e.onSlyPaperclip=function(){e.props.history.push("/my/SlyPaperclip"),e.toggleMenuPanel()},e.handleClickTools=function(){console.log("--handleClickTools"),e.toggleMenuPanel()},e.toggleMenuPanel=function(){console.log("--toggleMenuPanel");var t=e.props,n=t.menus,a=t.addMenu;(0,t.clearMenu)(),a({tag:"menu-tools",visible:!n["menu-tools"]})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=null;return e=this.props.menus["menu-tools"]?r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,r.a.createElement(d,{extraStyle:"push",text:"SlyNotes",funcHandle:this.onSlyNotes}),r.a.createElement(D,null),r.a.createElement(d,{extraStyle:"push",text:"SlyNotesView",funcHandle:this.onSlyNotesView}),r.a.createElement(d,{extraStyle:"push",text:"SlyNotesSearch",funcHandle:this.onSlyNotesSearch}),r.a.createElement(d,{extraStyle:"push",text:"SlyNotesEdit",funcHandle:this.onSlyNotesEdit}),r.a.createElement(D,null),r.a.createElement(d,{extraStyle:"push",text:"SlyPaperclip",funcHandle:this.onSlyPaperclip}))):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"sly-menu-tools-container"},r.a.createElement(y,{size_x:75/4,size_y:12.5,rect_cx:2.5,fill:"#009688",funcHandle:this.handleClickTools}),e)}}]),n}(a.Component),z=Object(E.b)((function(e){return e.astronautsReducer}),(function(e){return{userSignout:function(){e(N())},addMenu:function(t){e(C(t))},removeMenu:function(t){e(k(t))},clearMenu:function(){e(w())}}}))(Object(b.f)(F)),I=(n(103),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onSignout=function(){e.props.userSignout(),e.props.history.push("/users/login")},e.onSlyYourProfiles=function(){e.props.history.push("/my/SlyYourProfiles"),e.toggleMenuPanel()},e.onSlyYourTools=function(){e.props.history.push("/my/SlyYourTools"),e.toggleMenuPanel()},e.onSlyDashboards=function(){e.props.history.push("/my/SlyDashboards"),e.toggleMenuPanel()},e.onSlyBooks=function(){e.props.history.push("/my/SlyBooks"),e.toggleMenuPanel()},e.onSlyManuals=function(){e.props.history.push("/my/SlyManuals"),e.toggleMenuPanel()},e.onSlyWorkflows=function(){e.props.history.push("/my/SlyWorkflows"),e.toggleMenuPanel()},e.onSlySettings=function(){e.props.history.push("/my/SlySettings"),e.toggleMenuPanel()},e.handleClickProfiles=function(){console.log("--handleClickProfiles"),e.toggleMenuPanel()},e.toggleMenuPanel=function(){console.log("--toggleMenuPanel");var t=e.props,n=t.menus,a=t.addMenu;(0,t.clearMenu)(),a({tag:"menu-profiles",visible:!n["menu-profiles"]})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=null;return e=this.props.menus["menu-profiles"]?r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,r.a.createElement(d,{extraStyle:"push",text:"SlyYourProfiles",funcHandle:this.onSlyYourProfiles}),r.a.createElement(d,{extraStyle:"push",text:"SlyYourTools",funcHandle:this.onSlyYourTools}),r.a.createElement(D,null),r.a.createElement(d,{extraStyle:"push",text:"SlyDashboards",funcHandle:this.onSlyDashboards}),r.a.createElement(d,{extraStyle:"push",text:"SlyBooks",funcHandle:this.onSlyBooks}),r.a.createElement(d,{extraStyle:"push",text:"SlyManuals",funcHandle:this.onSlyManuals}),r.a.createElement(d,{extraStyle:"push",text:"SlyWorkflows",funcHandle:this.onSlyWorkflows}),r.a.createElement(d,{extraStyle:"push",text:"SlySettings",funcHandle:this.onSlySettings}),r.a.createElement(D,null),r.a.createElement(d,{extraStyle:"push",text:"Sign out",funcHandle:this.onSignout}))):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"sly-menu-profiles-container"},r.a.createElement(y,{size_x:75/4,size_y:12.5,rect_cx:2.5,fill:"#9E9E9E",funcHandle:this.handleClickProfiles}),e)}}]),n}(a.Component)),B=Object(E.b)((function(e){return e.astronautsReducer}),(function(e){return{userSignout:function(){e(N())},addMenu:function(t){e(C(t))},removeMenu:function(t){e(k(t))},clearMenu:function(){e(w())}}}))(Object(b.f)(I)),L=n(38),Y=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;return e=this.props.astronauts||L.get("astronauts")?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(B,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{text:"Sign in",linkAddress:"/users/login"}),r.a.createElement(U,{text:"Get started",linkAddress:"/articles/getting-started"})),r.a.createElement("div",{className:"sly-comp-right-container"},r.a.createElement(M,null),e)}}]),n}(a.Component),V=Object(E.b)((function(e){return e.astronautsReducer}))(Object(b.f)(Y)),W=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-header-container"},r.a.createElement("div",{className:"sly-header-wrapper"},r.a.createElement("div",{className:"comp-all"},r.a.createElement(A,null),r.a.createElement(V,null))))}}]),n}(a.Component),G=(n(104),n(105),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-bulletin-board-container"},r.a.createElement("div",{className:"sly-bulletin-board-wrapper"},r.a.createElement("div",{className:"sly-comp-left-shadow"},"By using our site, you acknowledge that you have read and understand our Cookie Policy, Privacy Policy, and our Terms of Service."),r.a.createElement("div",{className:"sly-comp-right-shadow"},r.a.createElement(y,{size_x:75/4,size_y:12.5,rect_cx:2.5,fill:"#9E9E9E"}))))}}]),n}(a.Component)),J=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-banner-container"},r.a.createElement(G,null))}}]),n}(a.Component),Q=(n(106),n(107),r.a.forwardRef((function(e,t){return r.a.createElement("div",{className:"sly-input-field-container"},r.a.createElement("label",null,e.label),r.a.createElement("input",{autocomplete:"on",className:"sly-input-field",type:e.type,ref:t,size:"26",maxLength:"52",placeholder:e.placeholder}))}))),q=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).email=r.a.createRef(),e.password=r.a.createRef(),e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.astronauts;e.error;t&&this.props.history.push("/")}},{key:"render",value:function(){var e=this.props.error;return r.a.createElement("div",{className:"sly-page-content"},r.a.createElement(T,null),r.a.createElement("div",{className:"sly-page-login-container"},e&&JSON.parse(e).statusText,r.a.createElement("h1",null,"Sign in to FyHub"),r.a.createElement("div",{className:"sly-page-login-form"},r.a.createElement(Q,{label:"Email",type:"email",ref:this.email,placeholder:"email..."}),r.a.createElement(Q,{label:"Password",type:"password",ref:this.password,placeholder:"password..."}),r.a.createElement(U,{text:"Log in",data:{email:this.email,password:this.password}})),r.a.createElement("p",null,"Don\u2019t have an account?",r.a.createElement(f.b,{to:"/users/signup"},"Sign up")),r.a.createElement("p",null,r.a.createElement(f.b,{to:"/"},"Forgot password?"))))}}]),n}(a.Component),K=Object(E.b)((function(e){return e.astronautsReducer}))(Object(b.f)(q)),$=(n(108),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-page-signup-container"},r.a.createElement("h1",null,"[SlyPageSignup]"),r.a.createElement("h3",null,"Join the *** community"),r.a.createElement("p",null,"Use the power of *** inside your organization."),r.a.createElement("p",null,"Already have an account?",r.a.createElement(f.b,{to:"/users/login"},"Log in")))}}]),n}(a.Component)),X=(n(109),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-page-get-started-container"},r.a.createElement("h1",null,"[SlyPageGetStarted]"))}}]),n}(a.Component)),Z=(n(110),n(111),n(112),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-category-item-container"},r.a.createElement("div",{className:"sly-category-item-wrapper"},r.a.createElement("h1",null,"[SlyCategoryItem]")))}}]),n}(a.Component)),ee=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-categories-container"},r.a.createElement("div",{className:"sly-categories-wrapper"},r.a.createElement("h1",null,"[SlyCategories]"),r.a.createElement(Z,null),r.a.createElement(Z,null),r.a.createElement(Z,null)))}}]),n}(a.Component),te=(n(113),n(114),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-article-item-container"},r.a.createElement("div",{className:"sly-article-item-wrapper"},r.a.createElement("h1",null,"[SlyArticleItem]")))}}]),n}(a.Component)),ne=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-articles-container"},r.a.createElement("div",{className:"sly-articles-wrapper"},r.a.createElement("h1",null,"[SlyArticles]"),r.a.createElement(te,null),r.a.createElement(te,null),r.a.createElement(te,null),r.a.createElement(te,null),r.a.createElement(te,null),r.a.createElement(te,null),r.a.createElement(te,null),r.a.createElement(te,null),r.a.createElement(te,null),r.a.createElement(te,null)))}}]),n}(a.Component),ae=(n(115),n(116),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-traversal-page-item-container"},r.a.createElement("div",{className:"sly-traversal-page-item-wrapper"},r.a.createElement("h1",null,"[SlyTraversalPageItem]")))}}]),n}(a.Component)),re=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-traversal-pages-container"},r.a.createElement("div",{className:"sly-traversal-pages-wrapper"},r.a.createElement("h1",null,"[SlyTraversalPages]"),r.a.createElement(ae,null),r.a.createElement(ae,null),r.a.createElement(ae,null),r.a.createElement(ae,null),r.a.createElement(ae,null),r.a.createElement(ae,null),r.a.createElement(ae,null),r.a.createElement(ae,null),r.a.createElement(ae,null),r.a.createElement(ae,null)))}}]),n}(a.Component),le=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-notes-container"},r.a.createElement("div",{className:"sly-notes-wrapper"},r.a.createElement("h1",null,"[SlyNotes]"),r.a.createElement(ee,null),r.a.createElement(ne,null),r.a.createElement(re,null)))}}]),n}(a.Component),ce=(n(117),n(118),n(119),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-catalog-title-item-container"},r.a.createElement("div",{className:"sly-catalog-title-item-wrapper"},r.a.createElement("h1",null,"[SlyCatalogTitleItem]")))}}]),n}(a.Component)),oe=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-catalogtitles-container"},r.a.createElement("div",{className:"sly-catalogtitles-wrapper"},r.a.createElement("h1",null,"[SlyCatalogTitles]"),r.a.createElement(ce,null),r.a.createElement(ce,null),r.a.createElement(ce,null),r.a.createElement(ce,null),r.a.createElement(ce,null)))}}]),n}(a.Component),se=(n(120),n(121),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-radish-item-container"},r.a.createElement("div",{className:"sly-radish-item-wrapper"},r.a.createElement("h1",null,"[SlyRadishItem]")))}}]),n}(a.Component)),ue=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-radishes-container"},r.a.createElement("div",{className:"sly-radishes-wrapper"},r.a.createElement("h1",null,"[SlyRadishes]"),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null),r.a.createElement(se,null)))}}]),n}(a.Component),ie=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-notes-view-container"},r.a.createElement("div",{className:"sly-notes-view-wrapper"},r.a.createElement("h1",null,"[SlyNotesView]"),r.a.createElement(oe,null),r.a.createElement(ue,null)))}}]),n}(a.Component),me=(n(122),n(123),n(124),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-history-item-container"},r.a.createElement("div",{className:"sly-history-item-wrapper"},r.a.createElement("h1",null,"[SlyHistoryItem]")))}}]),n}(a.Component)),pe=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-histories-container"},r.a.createElement("div",{className:"sly-histories-wrapper"},r.a.createElement("h1",null,"[SlyHistories]"),r.a.createElement(me,null),r.a.createElement(me,null),r.a.createElement(me,null),r.a.createElement(me,null),r.a.createElement(me,null)))}}]),n}(a.Component),ye=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-notes-search-container"},r.a.createElement("div",{className:"sly-notes-search-wrapper"},r.a.createElement("h1",null,"[SlyNotesSearch]"),r.a.createElement(pe,null),r.a.createElement(oe,null),r.a.createElement(ue,null)))}}]),n}(a.Component),fe=(n(125),n(126),n(127),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-style-switcher-item-container"},r.a.createElement("div",{className:"sly-style-switcher-item-wrapper"},r.a.createElement("h1",null,"[SlyStyleSwitcherItem]")))}}]),n}(a.Component)),he=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-style-switchers-container"},r.a.createElement("div",{className:"sly-style-switchers-wrapper"},r.a.createElement("h1",null,"[SlyStyleSwitchers]"),r.a.createElement(fe,null),r.a.createElement(fe,null),r.a.createElement(fe,null)))}}]),n}(a.Component),de=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-notes-edit-container"},r.a.createElement("div",{className:"sly-notes-edit-wrapper"},r.a.createElement("h1",null,"[SlyNotesEdit]"),r.a.createElement(pe,null),r.a.createElement(ue,null),r.a.createElement(he,null)))}}]),n}(a.Component),Ee=(n(128),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-paperclip-container"},r.a.createElement("h1",null,"[SlyPaperclip]"))}}]),n}(a.Component)),be=(n(129),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-your-profiles-container"},r.a.createElement("div",{className:"sly-your-profiles-wrapper"},r.a.createElement("h1",null,"[SlyYourProfiles]")))}}]),n}(a.Component)),ve=(n(130),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-your-tools-container"},r.a.createElement("div",{className:"sly-your-tools-wrapper"},r.a.createElement("h1",null,"[SlyYourTools]")))}}]),n}(a.Component)),Oe=(n(131),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-dashboards-container"},r.a.createElement("div",{className:"sly-dashboards-wrapper"},r.a.createElement("h1",null,"[SlyDashboards]")))}}]),n}(a.Component)),je=(n(132),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-books-container"},r.a.createElement("div",{className:"sly-books-wrapper"},r.a.createElement("h1",null,"[SlyBooks]")))}}]),n}(a.Component)),Se=(n(133),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-manuals-container"},r.a.createElement("div",{className:"sly-manuals-wrapper"},r.a.createElement("h1",null,"[SlyManuals]")))}}]),n}(a.Component)),ge=(n(134),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-workflows-container"},r.a.createElement("div",{className:"sly-workflows-wrapper"},r.a.createElement("h1",null,"[SlyWorkflows]")))}}]),n}(a.Component)),Ne=(n(135),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-settings-container"},r.a.createElement("div",{className:"sly-settings-wrapper"},r.a.createElement("h1",null,"[SlySettings]")))}}]),n}(a.Component)),Ce=(n(136),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-common-articles-container"},r.a.createElement("div",{className:"sly-common-articles-wrapper"},r.a.createElement("h1",null,"[SlyCommonArticles]")))}}]),n}(a.Component)),ke=(n(137),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-common-question-banks-container"},r.a.createElement("div",{className:"sly-common-question-banks-wrapper"},r.a.createElement("h1",null,"[SlyCommonQuestionBanks]")))}}]),n}(a.Component)),we=(n(138),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-common-surveys-container"},r.a.createElement("div",{className:"sly-common-surveys-wrapper"},r.a.createElement("h1",null,"[SlyCommonSurveys]")))}}]),n}(a.Component)),_e=(n(139),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-common-home-container"},r.a.createElement("div",{className:"sly-common-home-wrapper"},r.a.createElement("h1",null,"[SlyCommonHome]")))}}]),n}(a.Component)),Ae=(n(140),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-common-missing-parts-container"},r.a.createElement("div",{className:"sly-common-missing-parts-wrapper"},r.a.createElement("h1",null,"[SlyCommonMissingParts]")))}}]),n}(a.Component)),xe=(n(141),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sly-common-solutions-container"},r.a.createElement("div",{className:"sly-common-solutions-wrapper"},r.a.createElement("h1",null,"[SlyCommonSolutions]")))}}]),n}(a.Component)),Te=function(e){var t=e.location;return r.a.createElement("section",{className:"pagesnotfound"},r.a.createElement("h1",null,"Resource not found at '",t.pathname,"'"))};window.React=r.a;var Me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement(W,null),r.a.createElement("div",{className:"main"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:_e}),r.a.createElement(b.a,{path:"/users/login",component:K}),r.a.createElement(b.a,{path:"/users/signup",component:$}),r.a.createElement(b.a,{path:"/articles/getting-started",component:X}),r.a.createElement(b.a,{path:"/my/SlyNotes",component:le}),r.a.createElement(b.a,{path:"/my/SlyNotesView",component:ie}),r.a.createElement(b.a,{path:"/my/SlyNotesSearch",component:ye}),r.a.createElement(b.a,{path:"/my/SlyNotesEdit",component:de}),r.a.createElement(b.a,{path:"/my/SlyPaperclip",component:Ee}),r.a.createElement(b.a,{path:"/my/SlyYourProfiles",component:be}),r.a.createElement(b.a,{path:"/my/SlyYourTools",component:ve}),r.a.createElement(b.a,{path:"/my/SlyDashboards",component:Oe}),r.a.createElement(b.a,{path:"/my/SlyBooks",component:je}),r.a.createElement(b.a,{path:"/my/SlyManuals",component:Se}),r.a.createElement(b.a,{path:"/my/SlyWorkflows",component:ge}),r.a.createElement(b.a,{path:"/my/SlySettings",component:Ne}),r.a.createElement(b.a,{path:"/my/SlyCommonArticles",component:Ce}),r.a.createElement(b.a,{path:"/my/SlyCommonQuestionBanks",component:ke}),r.a.createElement(b.a,{path:"/my/SlyCommonSurveys",component:we}),r.a.createElement(b.a,{path:"/my/SlyCommonHome",component:_e}),r.a.createElement(b.a,{path:"/my/SlyCommonMissingParts",component:Ae}),r.a.createElement(b.a,{path:"/my/SlyCommonSolutions",component:xe}),r.a.createElement(b.a,{component:Te})))),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=n(14),Ue=n(35),De={count:0},Pe=n(25),He={astronauts:null,pending:!1,error:null,menus:{"menu-tools":!1,"menu-profiles":!1}},Fe=Object(Re.c)({spinnerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.ADD_NUM:return Object(Ue.a)({},e,{count:e.count+t.payload.num});case O.REDUCE_NUM:return Object(Ue.a)({},e,{count:e.count-t.payload.num});default:return e}},astronautsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.ADD_ASTRONAUTS_FETCH_START:return Object(v.a)(Object(v.a)({},e),{},{pending:!0});case O.ADD_ASTRONAUTS_FETCH_SUCCESS:return Object(v.a)(Object(v.a)({},e),{},{astronauts:t.astronauts,pending:!1});case O.ADD_ASTRONAUTS_FETCH_FAUILE:return Object(v.a)(Object(v.a)({},e),{},{astronauts:t.astronauts,pending:!1,error:t.error});case O.USER_SIGNOUT:return Object(v.a)(Object(v.a)({},e),{},{astronauts:null,pending:!1,error:null});case O.ADD_MENU:return Object(v.a)(Object(v.a)({},e),{},{menus:Object(v.a)(Object(v.a)({},e.menus),{},Object(Pe.a)({},t.menu.tag,t.menu.visible))});case O.REMOVE_MENU:var n=e.menus;return delete n[t.menu.tag],Object(v.a)(Object(v.a)({},e),{},{menus:Object(v.a)({},n)});case O.CLEAR_MENU:return Object(v.a)(Object(v.a)({},e),{},{menus:{"menu-tools":!1,"menu-profiles":!1}});default:return e}}}),ze=n(42),Ie=n(43),Be=n.n(Ie),Le=Object(Re.d)(Fe,Object(Re.a)(ze.a,Be.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,{store:Le},r.a.createElement(Me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[68,1,2]]]);
//# sourceMappingURL=main.df0c5bc0.chunk.js.map