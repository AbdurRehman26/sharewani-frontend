(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["risk-rating"],{"014b":function(t,e,r){"use strict";var n=r("e53d"),i=r("07e3"),o=r("8e60"),a=r("63b6"),s=r("9138"),c=r("ebfd").KEY,l=r("294c"),f=r("dbdb"),u=r("45f2"),d=r("62a0"),p=r("5168"),b=r("ccb9"),m=r("6718"),v=r("47ee"),g=r("9003"),h=r("e4ae"),y=r("f772"),k=r("241e"),w=r("36c3"),S=r("1bc3"),O=r("aebd"),C=r("a159"),j=r("0395"),x=r("bf0b"),E=r("9aa9"),R=r("d9f6"),_=r("c3a1"),P=x.f,N=R.f,D=j.f,$=n.Symbol,F=n.JSON,T=F&&F.stringify,M="prototype",Y=p("_hidden"),I=p("toPrimitive"),J={}.propertyIsEnumerable,z=f("symbol-registry"),q=f("symbols"),H=f("op-symbols"),K=Object[M],W="function"==typeof $&&!!E.f,A=n.QObject,G=!A||!A[M]||!A[M].findChild,L=o&&l(function(){return 7!=C(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=P(K,e);n&&delete K[e],N(t,e,r),n&&t!==K&&N(K,e,n)}:N,U=function(t){var e=q[t]=C($[M]);return e._k=t,e},V=W&&"symbol"==typeof $.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof $},Q=function(t,e,r){return t===K&&Q(H,e,r),h(t),e=S(e,!0),h(r),i(q,e)?(r.enumerable?(i(t,Y)&&t[Y][e]&&(t[Y][e]=!1),r=C(r,{enumerable:O(0,!1)})):(i(t,Y)||N(t,Y,O(1,{})),t[Y][e]=!0),L(t,e,r)):N(t,e,r)},B=function(t,e){h(t);var r,n=v(e=w(e)),i=0,o=n.length;while(o>i)Q(t,r=n[i++],e[r]);return t},X=function(t,e){return void 0===e?C(t):B(C(t),e)},Z=function(t){var e=J.call(this,t=S(t,!0));return!(this===K&&i(q,t)&&!i(H,t))&&(!(e||!i(this,t)||!i(q,t)||i(this,Y)&&this[Y][t])||e)},tt=function(t,e){if(t=w(t),e=S(e,!0),t!==K||!i(q,e)||i(H,e)){var r=P(t,e);return!r||!i(q,e)||i(t,Y)&&t[Y][e]||(r.enumerable=!0),r}},et=function(t){var e,r=D(w(t)),n=[],o=0;while(r.length>o)i(q,e=r[o++])||e==Y||e==c||n.push(e);return n},rt=function(t){var e,r=t===K,n=D(r?H:w(t)),o=[],a=0;while(n.length>a)!i(q,e=n[a++])||r&&!i(K,e)||o.push(q[e]);return o};W||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(r){this===K&&e.call(H,r),i(this,Y)&&i(this[Y],t)&&(this[Y][t]=!1),L(this,t,O(1,r))};return o&&G&&L(K,t,{configurable:!0,set:e}),U(t)},s($[M],"toString",function(){return this._k}),x.f=tt,R.f=Q,r("6abf").f=j.f=et,r("355d").f=Z,E.f=rt,o&&!r("b8e3")&&s(K,"propertyIsEnumerable",Z,!0),b.f=function(t){return U(p(t))}),a(a.G+a.W+a.F*!W,{Symbol:$});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;nt.length>it;)p(nt[it++]);for(var ot=_(p.store),at=0;ot.length>at;)m(ot[at++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return i(z,t+="")?z[t]:z[t]=$(t)},keyFor:function(t){if(!V(t))throw TypeError(t+" is not a symbol!");for(var e in z)if(z[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!W,"Object",{create:X,defineProperty:Q,defineProperties:B,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var st=l(function(){E.f(1)});a(a.S+a.F*st,"Object",{getOwnPropertySymbols:function(t){return E.f(k(t))}}),F&&a(a.S+a.F*(!W||l(function(){var t=$();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){var e,r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e=n[1],(y(e)||void 0!==t)&&!V(t))return g(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!V(e))return e}),n[1]=e,T.apply(F,n)}}),$[M][I]||r("35e8")($[M],I,$[M].valueOf),u($,"Symbol"),u(Math,"Math",!0),u(n.JSON,"JSON",!0)},"0395":function(t,e,r){var n=r("36c3"),i=r("6abf").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},"222e":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"infoengine"},[t._m(0),r("div",{staticClass:"table-section tablet-table-min-width"},[r("b-table",{attrs:{items:t.items,fields:t.fields},scopedSlots:t._u([{key:"worktypeimpact",fn:function(e){return[r("div",{staticClass:"work-impact"},[r("span",[t._v(t._s(e.value))]),r("i",{staticClass:"icon-caret-right"})])]}},{key:"rating",fn:function(t){return[r("base-status",{attrs:{statusType:t.value}})]}},{key:"action",fn:function(e){return[r("div",{staticClass:"action-review"},["active"==e.value?r("base-action",{directives:[{name:"b-modal",rawName:"v-b-modal.modify-risk-rating-popup",modifiers:{"modify-risk-rating-popup":!0}}],attrs:{icon:"icon-edit",label:"Modify"}}):t._e()],1)]}}])})],1),t._m(1),r("div",{staticClass:"table-section tablet-table-min-width"},[r("b-table",{attrs:{items:t.itemSecond,fields:t.fieldSecond},scopedSlots:t._u([{key:"rating",fn:function(t){return[r("base-status",{attrs:{statusType:t.value}})]}},{key:"action",fn:function(e){return[r("div",{staticClass:"action-review"},["active"==e.value?r("base-action",{directives:[{name:"b-modal",rawName:"v-b-modal.modify-risk-rating-override-popup",modifiers:{"modify-risk-rating-override-popup":!0}}],attrs:{icon:"icon-edit",label:"Modify"}}):t._e()],1)]}}])})],1),r("modify-risk-rating-popup"),r("risk-rating-override-popup")],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter-section"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("h2",{staticClass:"filter-heading"},[t._v("Risk Rating Score")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filter-section sub-filter"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("h2",[t._v("Risk Rating Overrides")])])])])}],o=r("cebc"),a=r("2f62"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{attrs:{id:"modify-risk-rating-popup",title:"Modify Risk Rating Score",size:"sm",okTitle:"Update",cancelTitle:"Cancel",cancelVariant:"link","no-close-on-backdrop":""}},[r("b-form",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("h5",{staticClass:"mb-20"},[t._v("Point Scoring (Initial Range)")])]),r("div",{staticClass:"col-md-12 row-min-space"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"input-group-1",label:"Start","label-for":"start-score"}},[r("b-form-input",{attrs:{id:"start-score",type:"text",required:"",autocomplete:"no",placeholder:"Enter start score"},model:{value:t.form.startScore,callback:function(e){t.$set(t.form,"startScore",e)},expression:"form.startScore"}})],1)],1),r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"input-group-2",label:"End","label-for":"end-score"}},[r("b-form-input",{attrs:{id:"end-score",type:"text",required:"",autocomplete:"no",placeholder:"Enter end score"},model:{value:t.form.endScore,callback:function(e){t.$set(t.form,"endScore",e)},expression:"form.endScore"}})],1)],1)])]),r("div",{staticClass:"col-md-12"},[r("b-form-group",{attrs:{id:"input-group-3",label:"Rating","label-for":"rating"}},[r("b-form-select",{staticClass:"form-control",attrs:{options:t.rating,autocomplete:"no"},model:{value:t.form.rating,callback:function(e){t.$set(t.form,"rating",e)},expression:"form.rating"}})],1)],1),r("div",{staticClass:"col-md-12"},[r("b-form-group",{attrs:{id:"input-group-4",label:"Review Period","label-for":"period"}},[r("b-form-input",{attrs:{id:"period",type:"text",required:"",autocomplete:"no",placeholder:"Enter review period"},model:{value:t.form.period,callback:function(e){t.$set(t.form,"period",e)},expression:"form.period"}})],1)],1),r("div",{staticClass:"col-md-12"},[r("b-form-group",{staticClass:"mb-0 kyc-status-radio overwrite-radio",attrs:{id:"input-group-4",label:"Generate Alert","label-for":"generate"}},[r("b-form-group",[r("b-form-radio-group",{attrs:{options:t.form.generate,name:"generate"},model:{value:t.generate,callback:function(e){t.generate=e},expression:"generate"}})],1)],1)],1)])])],1)],1)},c=[],l={data:function(){return{rejected:"",generate:"",form:{startScore:"",endScore:"",rating:null,period:null,rejected:[{text:"Yes",value:null},"No"],generate:[{text:"Yes",value:null},"No"]},rating:[{value:null,text:"Select Rating"},"High Risk","Medium Risk","Low Risk","Sanctioned"],period:[{value:null,text:"Select review period"},"1 Year","3 Years","6 Years"]}},methods:{}},f=l,u=r("2877"),d=Object(u["a"])(f,s,c,!1,null,null,null),p=d.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{attrs:{id:"modify-risk-rating-override-popup",title:"Modify Risk Rating Override",size:"sm",okTitle:"Update",cancelTitle:"Cancel",cancelVariant:"link","no-close-on-backdrop":""}},[r("b-form",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("h5",{staticClass:"mb-20"},[t._v("If PEP Hit")])]),r("br"),r("br"),r("div",{staticClass:"col-md-12"},[r("b-form-group",{attrs:{id:"input-group-1",label:"Override Rating","label-for":"rating"}},[r("b-form-select",{staticClass:"form-control",attrs:{options:t.rating,autocomplete:"no"},model:{value:t.form.rating,callback:function(e){t.$set(t.form,"rating",e)},expression:"form.rating"}})],1)],1),r("div",{staticClass:"col-md-12"},[r("b-form-group",{staticClass:"mb-0 kyc-status-radio overwrite-radio",attrs:{id:"input-group-4",label:"Is Rejected?","label-for":"rejected"}},[r("b-form-group",[r("b-form-radio-group",{attrs:{options:t.form.rejected,name:"rejected"},model:{value:t.rejected,callback:function(e){t.rejected=e},expression:"rejected"}})],1)],1)],1)])])],1)],1)},m=[],v={data:function(){return{form:{rating:null,rejected:[{text:"Yes",value:null},"No"]},rating:[{value:null,text:"Select Rating"},"High Risk","Medium Risk","Low Risk","Sanctioned"]}},methods:{}},g=v,h=Object(u["a"])(g,b,m,!1,null,null,null),y=h.exports,k={components:{modifyRiskRatingPopup:p,riskRatingOverridePopup:y},props:{},data:function(){return{fields:[],items:[],fieldSecond:[],itemSecond:[]}},computed:Object(o["a"])({},Object(a["b"])(["configurationData"])),methods:{initializeData:function(){var t=this.configurationData.idenfoEngine.riskRating.fields;this.fields=t;var e=this.configurationData.idenfoEngine.riskRating.items;this.items=e;var r=this.configurationData.idenfoEngine.riskRatingOverride.fields;this.fieldSecond=r;var n=this.configurationData.idenfoEngine.riskRatingOverride.items;this.itemSecond=n,this.$emit("item-length",this.items.length)}},mounted:function(){this.initializeData()}},w=k,S=Object(u["a"])(w,n,i,!1,null,null,null);e["default"]=S.exports},"268f":function(t,e,r){t.exports=r("fde4")},"32a6":function(t,e,r){var n=r("241e"),i=r("c3a1");r("ce7e")("keys",function(){return function(t){return i(n(t))}})},"454f":function(t,e,r){r("46a7");var n=r("584a").Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},"46a7":function(t,e,r){var n=r("63b6");n(n.S+n.F*!r("8e60"),"Object",{defineProperty:r("d9f6").f})},"47ee":function(t,e,r){var n=r("c3a1"),i=r("9aa9"),o=r("355d");t.exports=function(t){var e=n(t),r=i.f;if(r){var a,s=r(t),c=o.f,l=0;while(s.length>l)c.call(t,a=s[l++])&&e.push(a)}return e}},6718:function(t,e,r){var n=r("e53d"),i=r("584a"),o=r("b8e3"),a=r("ccb9"),s=r("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},"6abf":function(t,e,r){var n=r("e6f3"),i=r("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"85f2":function(t,e,r){t.exports=r("454f")},"8aae":function(t,e,r){r("32a6"),t.exports=r("584a").Object.keys},a4bb:function(t,e,r){t.exports=r("8aae")},bf0b:function(t,e,r){var n=r("355d"),i=r("aebd"),o=r("36c3"),a=r("1bc3"),s=r("07e3"),c=r("794b"),l=Object.getOwnPropertyDescriptor;e.f=r("8e60")?l:function(t,e){if(t=o(t),e=a(e,!0),c)try{return l(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},bf90:function(t,e,r){var n=r("36c3"),i=r("bf0b").f;r("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(n(t),e)}})},ccb9:function(t,e,r){e.f=r("5168")},ce7e:function(t,e,r){var n=r("63b6"),i=r("584a"),o=r("294c");t.exports=function(t,e){var r=(i.Object||{})[t]||Object[t],a={};a[t]=e(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},cebc:function(t,e,r){"use strict";var n=r("268f"),i=r.n(n),o=r("e265"),a=r.n(o),s=r("a4bb"),c=r.n(s),l=r("85f2"),f=r.n(l);function u(t,e,r){return e in t?f()(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=c()(r);"function"===typeof a.a&&(n=n.concat(a()(r).filter(function(t){return i()(r,t).enumerable}))),n.forEach(function(e){u(t,e,r[e])})}return t}r.d(e,"a",function(){return d})},e265:function(t,e,r){t.exports=r("ed33")},ebfd:function(t,e,r){var n=r("62a0")("meta"),i=r("f772"),o=r("07e3"),a=r("d9f6").f,s=0,c=Object.isExtensible||function(){return!0},l=!r("294c")(function(){return c(Object.preventExtensions({}))}),f=function(t){a(t,n,{value:{i:"O"+ ++s,w:{}}})},u=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[n].i},d=function(t,e){if(!o(t,n)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[n].w},p=function(t){return l&&b.NEED&&c(t)&&!o(t,n)&&f(t),t},b=t.exports={KEY:n,NEED:!1,fastKey:u,getWeak:d,onFreeze:p}},ed33:function(t,e,r){r("014b"),t.exports=r("584a").Object.getOwnPropertySymbols},fde4:function(t,e,r){r("bf90");var n=r("584a").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=risk-rating.79373d83.js.map