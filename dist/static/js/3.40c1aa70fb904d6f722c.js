webpackJsonp([3],{"+8S/":function(e,t,n){var r;function s(e){function n(){if(n.enabled){var e=n,s=+new Date,o=s-(r||s);e.diff=o,e.prev=r,e.curr=s,r=s;for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;c++;var s=t.formatters[r];if("function"==typeof s){var o=i[c];n=s.call(e,o),i.splice(c,1),c--}return n}),t.formatArgs.call(e,i),(n.log||t.log||console.log.bind(console)).apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=s.debug=s.default=s).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,s=0;s<r;s++)n[s]&&("-"===(e=n[s].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("W3uh"),t.names=[],t.skips=[],t.formatters={}},"22O3":function(e,t,n){"use strict";var r=n("mvHQ"),s=n.n(r),o=window.localStorage;t.a={set:function(e,t){void 0!==t&&o.setItem(e,function(e){return s()(e)}(t))},get:function(e,t){var n=function(e){if("string"!=typeof e)return;try{return JSON.parse(e)}catch(t){return e||void 0}}(o.getItem(e));return void 0===n?t:n},remove:function(e){o.removeItem(e)},clear:function(){o.clear()}}},"2xPN":function(e,t){},"6yg2":function(e,t,n){var r=n("gdV4")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var i,a,c=t.prefix||"__jp",u=t.name||c+s++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,h=document.getElementsByTagName("script")[0]||document.head;f&&(a=setTimeout(function(){m(),n&&n(new Error("Timeout"))},f));function m(){i.parentNode&&i.parentNode.removeChild(i),window[u]=o,a&&clearTimeout(a)}return window[u]=function(e){r("jsonp got",e),m(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+d(u)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,h.parentNode.insertBefore(i,h),function(){window[u]&&m()}};var s=0;function o(){}},"87sq":function(e,t){},W3uh:function(e,t){var n=1e3,r=60*n,s=60*r,o=24*s,i=365.25*o;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*i;case"days":case"day":case"d":return a*o;case"hours":case"hour":case"hrs":case"hr":case"h":return a*s;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?a(c=e,o,"day")||a(c,s,"hour")||a(c,r,"minute")||a(c,n,"second")||c+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=s)return Math.round(e/s)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},YZWX:function(e,t){},ar59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("8MDr"),s={name:"MeConfirm",props:{title:{type:String,default:""},msg:{type:String,default:"确定执行此操作吗？"},cancelBtnText:{type:String,default:"取消"},confirmBtnText:{type:String,default:"确定"}},data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},cancel:function(){this.hide(),this.$emit("cancel")},confirm:function(){this.hide(),this.$emit("confirm")}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"mine-confirm"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mine-confirm-wrapper"},[n("div",{staticClass:"mine-confirm"},[e.title?n("div",{staticClass:"mine-confirm-title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),n("div",{staticClass:"mine-confirm-msg"},[e._v(e._s(e.msg))]),e._v(" "),n("div",{staticClass:"mine-confirm-btns"},[n("button",{staticClass:"mine-confirm-btn mine-confirm-cancel",on:{click:e.cancel}},[e._v(e._s(e.cancelBtnText))]),e._v(" "),n("button",{staticClass:"mine-confirm-btn mine-confirm-ok",on:{click:e.confirm}},[e._v(e._s(e.confirmBtnText))])])])])])},staticRenderFns:[]};var i=n("VU/8")(s,o,!1,function(e){n("2xPN")},"data-v-4e7d4444",null).exports,a=n("/l8+"),c=n("Fk3l"),u={name:"SearchHeader",components:{MeNavbar:a.a,MeSearchBox:c.a},methods:{query:function(e){this.$emit("query",e)},goBack:function(){this.$router.back()}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("me-navbar",{staticClass:"header"},[t("i",{staticClass:"iconfont icon-back",attrs:{slot:"left"},on:{click:this.goBack},slot:"left"}),this._v(" "),t("me-search-box",{attrs:{slot:"center",placeholder:"开学季有礼，好货5折起"},on:{query:this.query},slot:"center"})],1)},staticRenderFns:[]};var f=n("VU/8")(u,l,!1,function(e){n("nMnR")},"data-v-ad55438e",null).exports,d=n("//Fk"),h=n.n(d),m=n("odKQ"),v=n("cQcd"),g=n("T452"),p=n("22O3"),y={methods:{$_search_selectItem:function(e){var t=p.a.get("mall-search-history-keyword-key",[]);0!==t.length&&(t=t.filter(function(t){return t!==e})),t.unshift(e),p.a.set("mall-search-history-keyword-key",t),location.href="https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&q="+e}}},w={name:"SearchHot",components:{MeLoading:m.a},mixins:[y],created:function(){var e=this;this.getHotKeyword().then(function(){e.$emit("loaded")})},data:function(){return{hots:[]}},methods:{getHotKeyword:function(){var e=this;return Object(v.a)("https://wq.jd.com/bases/searchhotword/GetHotWords?_=1564995925786",{sceneval:2},g.d).then(function(e){if(console.log(e),e&&e.owner)return e.owner;throw console.log(e),new Error("没有成功获取到数据！")}).catch(function(e){e&&console.log(e)}).then(function(e){return new h.a(function(t){setTimeout(function(){t(e)},1e3)})}).then(function(t){return new h.a(function(n){t&&(e.hots=t,n())})})}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hot"},[n("h4",{staticClass:"hot-title"},[e._v("热门搜索")]),e._v(" "),e.hots.length?n("ul",{staticClass:"hot-list"},e._l(e.hots,function(t,r){return n("li",{key:r,staticClass:"hot-item",on:{click:function(n){return e.$_search_selectItem(t)}}},[e._v(e._s(t))])}),0):n("div",{staticClass:"loading-container"},[n("me-loading")],1)])},staticRenderFns:[]};var b=n("VU/8")(w,_,!1,function(e){n("YZWX")},"data-v-5aedbaf3",null).exports,C={name:"SearchHistory",mixins:[y],data:function(){return{historys:[]}},created:function(){this.getKeyword()},methods:{update:function(){this.getKeyword()},getKeyword:function(){this.historys=p.a.get("mall-search-history-keyword-key",[])},removeItem:function(e){var t=this;this.historys=this.historys.filter(function(t){return t!==e}),p.a.set("mall-search-history-keyword-key",this.historys),setTimeout(function(){t.$emit("remove-item",e)},100)},showConfirm:function(){this.$emit("show-confirm")},clear:function(){p.a.remove("mall-search-history-keyword-key")}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.historys.length?n("div",{staticClass:"history"},[n("h4",{staticClass:"history-title"},[e._v("历史搜索")]),e._v(" "),n("transition-group",{staticClass:"g-list",attrs:{name:"list",tag:"ul"}},e._l(e.historys,function(t){return n("li",{key:t,staticClass:"g-list-item",on:{click:function(n){return e.$_search_selectItem(t)}}},[n("span",{staticClass:"g-list-text"},[e._v(e._s(t))]),e._v(" "),n("i",{staticClass:"iconfont icon-delete",on:{click:function(n){return n.stopPropagation(),e.removeItem(t)}}})])}),0),e._v(" "),n("a",{staticClass:"history-btn",attrs:{href:"javascript:;"},on:{click:e.showConfirm}},[n("i",{staticClass:"iconfont icon-clear"}),e._v("清空历史搜索")])],1):e._e()},staticRenderFns:[]};var x=n("VU/8")(C,k,!1,function(e){n("87sq")},"data-v-4aa9ae32",null).exports,S={name:"SearchResult",components:{MeLoading:m.a},data:function(){return{results:[],loading:!0}},props:{query:{type:String,default:""}},mixins:[y],watch:{query:function(e){this.getResults(e)}},methods:{getResults:function(e){var t=this;e&&(this.loading=!0,function(e){var t={q:e,code:"utf-8",area:"c2c",nick:"",sid:null};return Object(v.a)("https://suggest.taobao.com/sug",t,g.d).then(function(e){if(e.result)return e.result;throw new Error("没有成功获取到数据！")}).catch(function(e){e&&console.log(e)}).then(function(e){return new h.a(function(t){setTimeout(function(){t(e)},1e3)})})}(e).then(function(e){e&&(t.results=e,t.loading=!1)}))}}},q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"result"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-container"},[n("me-loading")],1),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.results.length,expression:"!loading && results.length"}],staticClass:"g-list"},e._l(e.results,function(t,r){return n("li",{key:r,staticClass:"g-list-item",on:{click:function(n){return e.$_search_selectItem(t[0])}}},[n("span",{staticClass:"g-list-text"},[e._v(e._s(t[0]))])])}),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.results.length,expression:"!loading && !results.length"}],staticClass:"no-result"},[e._v("没有结果")])])},staticRenderFns:[]};var N=n("VU/8")(S,q,!1,function(e){n("cPmb")},"data-v-141a71d7",null).exports,$={name:"Search",components:{MeScroll:r.a,MeConfirm:i,SearchHeader:f,SearchHot:b,SearchHistory:x,SearchResult:N},data:function(){return{query:""}},methods:{getQuery:function(e){this.query=e},showConfirm:function(){this.$refs.confirm.show()},clearAllSearchHistorys:function(){this.$refs.history.clear(),this.$refs.history.update()},updateScroll:function(){this.$refs.scroll.update()}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"search"}},[n("div",{staticClass:"search"},[n("header",{staticClass:"g-header-container"},[n("search-header",{on:{query:e.getQuery}})],1),e._v(" "),n("div",{staticClass:"g-content-container"},[n("me-scroll",{ref:"scroll"},[n("search-hot",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],on:{loaded:e.updateScroll}}),e._v(" "),n("search-history",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],ref:"history",on:{"show-confirm":e.showConfirm,"remove-item":e.updateScroll}}),e._v(" "),n("search-result",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],attrs:{query:e.query}})],1)],1),e._v(" "),n("me-confirm",{ref:"confirm",attrs:{msg:"确定要清空吗？"},on:{confirm:e.clearAllSearchHistorys}})],1)])},staticRenderFns:[]};var M=n("VU/8")($,E,!1,function(e){n("dPKB")},"data-v-5a6f154e",null);t.default=M.exports},cPmb:function(e,t){},cQcd:function(e,t,n){"use strict";var r=n("//Fk"),s=n.n(r),o=n("6yg2"),i=n.n(o);t.a=function(e,t,n){return e+=(e.indexOf("?")<0?"?":"&")+function(e){var t=[];for(var n in e)t.push([n,encodeURIComponent(e[n])]);return t.map(function(e){return e.join("=")}).join("&")}(t),new s.a(function(t,r){i()(e,n,function(e,n){e?r(e):t(n)})})}},dPKB:function(e,t){},gdV4:function(e,t,n){(function(r){function s(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=Object({NODE_ENV:"production"}).DEBUG),e}(t=e.exports=n("+8S/")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var s=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&"%c"===e&&(o=++s)}),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=s,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(s())}).call(t,n("W2nU"))},mvHQ:function(e,t,n){e.exports={default:n("qkKv"),__esModule:!0}},nMnR:function(e,t){},qkKv:function(e,t,n){var r=n("FeBl"),s=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}}});
//# sourceMappingURL=3.40c1aa70fb904d6f722c.js.map