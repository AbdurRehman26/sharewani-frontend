(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["branches"],{"014b":function(t,e,n){"use strict";var a=n("e53d"),r=n("07e3"),i=n("8e60"),o=n("63b6"),s=n("9138"),c=n("ebfd").KEY,l=n("294c"),u=n("dbdb"),f=n("45f2"),d=n("62a0"),p=n("5168"),b=n("ccb9"),m=n("6718"),v=n("47ee"),h=n("9003"),y=n("e4ae"),g=n("f772"),w=n("241e"),S=n("36c3"),x=n("1bc3"),C=n("aebd"),O=n("a159"),_=n("0395"),j=n("bf0b"),k=n("9aa9"),D=n("d9f6"),P=n("c3a1"),E=j.f,T=D.f,A=_.f,N=a.Symbol,M=a.JSON,$=M&&M.stringify,F="prototype",R=p("_hidden"),z=p("toPrimitive"),J={}.propertyIsEnumerable,U=u("symbol-registry"),V=u("symbols"),B=u("op-symbols"),I=Object[F],Y="function"==typeof N&&!!k.f,q=a.QObject,K=!q||!q[F]||!q[F].findChild,W=i&&l(function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,e,n){var a=E(I,e);a&&delete I[e],T(t,e,n),a&&t!==I&&T(I,e,a)}:T,L=function(t){var e=V[t]=O(N[F]);return e._k=t,e},G=Y&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},Q=function(t,e,n){return t===I&&Q(B,e,n),y(t),e=x(e,!0),y(n),r(V,e)?(n.enumerable?(r(t,R)&&t[R][e]&&(t[R][e]=!1),n=O(n,{enumerable:C(0,!1)})):(r(t,R)||T(t,R,C(1,{})),t[R][e]=!0),W(t,e,n)):T(t,e,n)},X=function(t,e){y(t);var n,a=v(e=S(e)),r=0,i=a.length;while(i>r)Q(t,n=a[r++],e[n]);return t},H=function(t,e){return void 0===e?O(t):X(O(t),e)},Z=function(t){var e=J.call(this,t=x(t,!0));return!(this===I&&r(V,t)&&!r(B,t))&&(!(e||!r(this,t)||!r(V,t)||r(this,R)&&this[R][t])||e)},tt=function(t,e){if(t=S(t),e=x(e,!0),t!==I||!r(V,e)||r(B,e)){var n=E(t,e);return!n||!r(V,e)||r(t,R)&&t[R][e]||(n.enumerable=!0),n}},et=function(t){var e,n=A(S(t)),a=[],i=0;while(n.length>i)r(V,e=n[i++])||e==R||e==c||a.push(e);return a},nt=function(t){var e,n=t===I,a=A(n?B:S(t)),i=[],o=0;while(a.length>o)!r(V,e=a[o++])||n&&!r(I,e)||i.push(V[e]);return i};Y||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===I&&e.call(B,n),r(this,R)&&r(this[R],t)&&(this[R][t]=!1),W(this,t,C(1,n))};return i&&K&&W(I,t,{configurable:!0,set:e}),L(t)},s(N[F],"toString",function(){return this._k}),j.f=tt,D.f=Q,n("6abf").f=_.f=et,n("355d").f=Z,k.f=nt,i&&!n("b8e3")&&s(I,"propertyIsEnumerable",Z,!0),b.f=function(t){return L(p(t))}),o(o.G+o.W+o.F*!Y,{Symbol:N});for(var at="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;at.length>rt;)p(at[rt++]);for(var it=P(p.store),ot=0;it.length>ot;)m(it[ot++]);o(o.S+o.F*!Y,"Symbol",{for:function(t){return r(U,t+="")?U[t]:U[t]=N(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in U)if(U[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),o(o.S+o.F*!Y,"Object",{create:H,defineProperty:Q,defineProperties:X,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var st=l(function(){k.f(1)});o(o.S+o.F*st,"Object",{getOwnPropertySymbols:function(t){return k.f(w(t))}}),M&&o(o.S+o.F*(!Y||l(function(){var t=N();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))})),"JSON",{stringify:function(t){var e,n,a=[t],r=1;while(arguments.length>r)a.push(arguments[r++]);if(n=e=a[1],(g(e)||void 0!==t)&&!G(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!G(e))return e}),a[1]=e,$.apply(M,a)}}),N[F][z]||n("35e8")(N[F],z,N[F].valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(a.JSON,"JSON",!0)},"0395":function(t,e,n){var a=n("36c3"),r=n("6abf").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):r(a(t))}},1799:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-pagination"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7"},[n("div",{staticClass:"record-shown"},[n("b-form-group",{class:1==t.selectPaginationDisable?"disable":""},[n("b-form-select",{staticClass:"form-control",attrs:{id:"input-3",options:t.showRecords,required:""},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}})],1),n("p",[t._v(t._s(t.totalRecords))])],1)]),n("div",{staticClass:"col-md-5"},[n("div",{staticClass:"next-previous-pagination"},[n("b-button",{staticClass:"disable",attrs:{type:"submit",variant:"primary"}},[t._v("PREVIOUS")]),n("b-button",{class:1==t.nextBtnDisable?"disable":"",attrs:{type:"submit",variant:"primary"}},[t._v("NEXT")])],1)])])])},r=[],i={components:{},props:{totalRecords:{type:String,default:null},nextBtnDisable:{type:Boolean,default:null},selectPaginationDisable:{type:Boolean,default:null},showRecords:{type:Array,default:null}},data:function(){return{defaultsShowRecords:[{text:"Show 10 records",value:null},{text:"Show 20 records",value:20},{text:"Show 50 records",value:50}],record:null}},computed:{},methods:{},mounted:function(){}},o=i,s=n("2877"),c=Object(s["a"])(o,a,r,!1,null,null,null);e["a"]=c.exports},"1bde":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{ref:"my-modal",attrs:{id:"activate-popup",size:"sm",okTitle:"Activate",cancelTitle:"Cancel",cancelVariant:"link","no-close-on-backdrop":""}},[n("div",{staticClass:"w-100 archive-popup",attrs:{slot:"modal-header"},slot:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v("Activate User")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.hideModal}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("p",[t._v("\n            Are you sure you want to activate this user? You can re-activate\n            account later.\n        ")])])],1)},r=[],i={props:{title:{type:String,default:null},description:{type:String,default:null}},data:function(){return{}},methods:{hideModal:function(){this.$refs["my-modal"].hide()}}},o=i,s=n("2877"),c=Object(s["a"])(o,a,r,!1,null,null,null);e["a"]=c.exports},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var a=n("241e"),r=n("c3a1");n("ce7e")("keys",function(){return function(t){return r(a(t))}})},"454f":function(t,e,n){n("46a7");var a=n("584a").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}},"46a7":function(t,e,n){var a=n("63b6");a(a.S+a.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var a=n("c3a1"),r=n("9aa9"),i=n("355d");t.exports=function(t){var e=a(t),n=r.f;if(n){var o,s=n(t),c=i.f,l=0;while(s.length>l)c.call(t,o=s[l++])&&e.push(o)}return e}},6718:function(t,e,n){var a=n("e53d"),r=n("584a"),i=n("b8e3"),o=n("ccb9"),s=n("d9f6").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:a.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},"6abf":function(t,e,n){var a=n("e6f3"),r=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},"83cc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{ref:"my-modal",attrs:{id:"archive-popup",size:"sm",okTitle:"Archive",cancelTitle:"Cancel",cancelVariant:"link","no-close-on-backdrop":""}},[n("div",{staticClass:"w-100 archive-popup",attrs:{slot:"modal-header"},slot:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v(t._s(t.title))]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.hideModal}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("p",[t._v("\n            "+t._s(t.description)+"\n        ")])])],1)},r=[],i={props:{title:{type:String,default:null},description:{type:String,default:null}},data:function(){return{}},methods:{hideModal:function(){this.$refs["my-modal"].hide()}}},o=i,s=n("2877"),c=Object(s["a"])(o,a,r,!1,null,null,null);e["a"]=c.exports},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},a4bb:function(t,e,n){t.exports=n("8aae")},bf0b:function(t,e,n){var a=n("355d"),r=n("aebd"),i=n("36c3"),o=n("1bc3"),s=n("07e3"),c=n("794b"),l=Object.getOwnPropertyDescriptor;e.f=n("8e60")?l:function(t,e){if(t=i(t),e=o(e,!0),c)try{return l(t,e)}catch(n){}if(s(t,e))return r(!a.f.call(t,e),t[e])}},bf90:function(t,e,n){var a=n("36c3"),r=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return r(a(t),e)}})},c479:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap-content data-segment-page"},[n("div",{staticClass:"filter-section row-min-space"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-md-7 text-right"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-xs-12"},[n("base-search",{attrs:{placeholder:"Search data segment"}})],1),n("div",{staticClass:"col-md-6 col-xs-12 filter-btn-section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-xs-12"},[n("base-button",{attrs:{btnLabel:"Apply",btnType:"submit",btnVariant:"primary"}})],1),n("div",{staticClass:"col-md-8 col-xs-12"},[n("base-button",{staticClass:"secondary-add-btn",attrs:{btnLabel:"+ Add Data Segment",btnType:"submit",btnVariant:"secondary btn-block"},on:{click:function(e){return t.addModify("Add Data Segment","Submit")}}})],1)])])])])])]),n("div",{staticClass:"table-section tablet-table-xs-min-width mobile-table-responsive-lg"},[n("b-table",{staticClass:"user-roles-table",attrs:{items:t.items,fields:t.fields},scopedSlots:t._u([{key:"status",fn:function(t){return[n("base-status",{attrs:{statusType:t.value}})]}},{key:"action",fn:function(e){return[n("div",{staticClass:"action-review"},["active"==e.value||"archive"==e.value?n("base-action",{attrs:{icon:"icon-edit",label:"Modify"},on:{click:function(e){return t.addModify("Modify Data Segment","Update")}}}):t._e(),"active"==e.value?n("base-action",{directives:[{name:"b-modal",rawName:"v-b-modal.archive-popup",modifiers:{"archive-popup":!0}}],attrs:{icon:"icon-trash",label:"Archive"}}):t._e(),"archive"==e.value?n("base-action",{directives:[{name:"b-modal",rawName:"v-b-modal.activate-popup",modifiers:{"activate-popup":!0}}],attrs:{icon:"icon-done",label:"Activate"}}):t._e()],1)]}}])})],1),n("pagination",{attrs:{totalRecords:"Showing 1 to 4 of 4 records",nextBtnDisable:"",selectPaginationDisable:"",showRecords:t.recordShow}}),n("add-data-segment-popup",{attrs:{title:t.title,buttonText:t.buttonText}}),n("archive-popup",{attrs:{title:"Archive Data Segment",description:"Are you sure you want to archive this data segment? You can re-activate it later."}}),n("activate-popup")],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-5 filter-title-section"},[n("h2",[t._v("Data Segments")])])}],i=n("cebc"),o=n("2f62"),s=n("1799"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{attrs:{id:"add-data-segment-popup",title:t.title,size:"sm",okTitle:t.buttonText,cancelTitle:"Cancel",cancelVariant:"link","no-close-on-backdrop":""}},[n("b-form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("b-form-group",{attrs:{id:"input-group-1",label:"Data Segment Title","label-for":"segment-title"}},[n("b-form-input",{attrs:{id:"segment-title",type:"text",required:"",autocomplete:"no",placeholder:"Enter data segment title"},model:{value:t.form.segmentTitle,callback:function(e){t.$set(t.form,"segmentTitle",e)},expression:"form.segmentTitle"}})],1)],1),n("div",{staticClass:"col-md-12"},[n("b-form-group",{attrs:{id:"input-group-2",label:"Data Segment Code","label-for":"segment-code"}},[n("b-form-input",{attrs:{id:"segment-code",type:"text",required:"",autocomplete:"no",placeholder:"Enter data segment code (max 3 characters)"},model:{value:t.form.segmentCode,callback:function(e){t.$set(t.form,"segmentCode",e)},expression:"form.segmentCode"}})],1)],1)])])],1)],1)},l=[],u={props:{title:{type:String,default:null},buttonText:{type:String,default:"Submit"}},data:function(){return{form:{segmentTitle:"",segmentCode:""}}},methods:{}},f=u,d=n("2877"),p=Object(d["a"])(f,c,l,!1,null,null,null),b=p.exports,m=n("83cc"),v=n("1bde"),h={components:{addDataSegmentPopup:b,archivePopup:m["a"],pagination:s["a"],activatePopup:v["a"]},props:{},data:function(){return{selected:"1",fields:[],items:[],title:"",buttonText:"",recordShow:[{text:"Show 10 records",value:null}]}},computed:Object(i["a"])({},Object(o["b"])(["systemUsersData"])),methods:{initializeData:function(){var t=this.systemUsersData.segments.fields;this.fields=t;var e=this.systemUsersData.segments.items;this.items=e},addModify:function(t,e){this.title=t,this.buttonText=e,this.$bvModal.show("add-data-segment-popup")}},mounted:function(){this.initializeData()}},y=h,g=Object(d["a"])(y,a,r,!1,null,null,null);e["default"]=g.exports},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var a=n("63b6"),r=n("584a"),i=n("294c");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],o={};o[t]=e(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},cebc:function(t,e,n){"use strict";var a=n("268f"),r=n.n(a),i=n("e265"),o=n.n(i),s=n("a4bb"),c=n.n(s),l=n("85f2"),u=n.n(l);function f(t,e,n){return e in t?u()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=c()(n);"function"===typeof o.a&&(a=a.concat(o()(n).filter(function(t){return r()(n,t).enumerable}))),a.forEach(function(e){f(t,e,n[e])})}return t}n.d(e,"a",function(){return d})},e265:function(t,e,n){t.exports=n("ed33")},ebfd:function(t,e,n){var a=n("62a0")("meta"),r=n("f772"),i=n("07e3"),o=n("d9f6").f,s=0,c=Object.isExtensible||function(){return!0},l=!n("294c")(function(){return c(Object.preventExtensions({}))}),u=function(t){o(t,a,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,a)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[a].i},d=function(t,e){if(!i(t,a)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[a].w},p=function(t){return l&&b.NEED&&c(t)&&!i(t,a)&&u(t),t},b=t.exports={KEY:a,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var a=n("584a").Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=branches.56712958.js.map