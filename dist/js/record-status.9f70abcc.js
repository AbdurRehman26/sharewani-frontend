(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["record-status"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),a=n("07e3"),o=n("8e60"),i=n("63b6"),s=n("9138"),c=n("ebfd").KEY,l=n("294c"),u=n("dbdb"),f=n("45f2"),d=n("62a0"),b=n("5168"),p=n("ccb9"),m=n("6718"),v=n("47ee"),h=n("9003"),y=n("e4ae"),g=n("f772"),w=n("241e"),S=n("36c3"),O=n("1bc3"),x=n("aebd"),C=n("a159"),j=n("0395"),_=n("bf0b"),P=n("9aa9"),E=n("d9f6"),D=n("c3a1"),k=_.f,N=E.f,F=j.f,T=r.Symbol,R=r.JSON,$=R&&R.stringify,A="prototype",J=b("_hidden"),M=b("toPrimitive"),B={}.propertyIsEnumerable,I=u("symbol-registry"),z=u("symbols"),L=u("op-symbols"),K=Object[A],V="function"==typeof T&&!!P.f,W=r.QObject,U=!W||!W[A]||!W[A].findChild,Y=o&&l(function(){return 7!=C(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(K,e);r&&delete K[e],N(t,e,n),r&&t!==K&&N(K,e,r)}:N,q=function(t){var e=z[t]=C(T[A]);return e._k=t,e},G=V&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},Q=function(t,e,n){return t===K&&Q(L,e,n),y(t),e=O(e,!0),y(n),a(z,e)?(n.enumerable?(a(t,J)&&t[J][e]&&(t[J][e]=!1),n=C(n,{enumerable:x(0,!1)})):(a(t,J)||N(t,J,x(1,{})),t[J][e]=!0),Y(t,e,n)):N(t,e,n)},X=function(t,e){y(t);var n,r=v(e=S(e)),a=0,o=r.length;while(o>a)Q(t,n=r[a++],e[n]);return t},H=function(t,e){return void 0===e?C(t):X(C(t),e)},Z=function(t){var e=B.call(this,t=O(t,!0));return!(this===K&&a(z,t)&&!a(L,t))&&(!(e||!a(this,t)||!a(z,t)||a(this,J)&&this[J][t])||e)},tt=function(t,e){if(t=S(t),e=O(e,!0),t!==K||!a(z,e)||a(L,e)){var n=k(t,e);return!n||!a(z,e)||a(t,J)&&t[J][e]||(n.enumerable=!0),n}},et=function(t){var e,n=F(S(t)),r=[],o=0;while(n.length>o)a(z,e=n[o++])||e==J||e==c||r.push(e);return r},nt=function(t){var e,n=t===K,r=F(n?L:S(t)),o=[],i=0;while(r.length>i)!a(z,e=r[i++])||n&&!a(K,e)||o.push(z[e]);return o};V||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===K&&e.call(L,n),a(this,J)&&a(this[J],t)&&(this[J][t]=!1),Y(this,t,x(1,n))};return o&&U&&Y(K,t,{configurable:!0,set:e}),q(t)},s(T[A],"toString",function(){return this._k}),_.f=tt,E.f=Q,n("6abf").f=j.f=et,n("355d").f=Z,P.f=nt,o&&!n("b8e3")&&s(K,"propertyIsEnumerable",Z,!0),p.f=function(t){return q(b(t))}),i(i.G+i.W+i.F*!V,{Symbol:T});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),at=0;rt.length>at;)b(rt[at++]);for(var ot=D(b.store),it=0;ot.length>it;)m(ot[it++]);i(i.S+i.F*!V,"Symbol",{for:function(t){return a(I,t+="")?I[t]:I[t]=T(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),i(i.S+i.F*!V,"Object",{create:H,defineProperty:Q,defineProperties:X,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var st=l(function(){P.f(1)});i(i.S+i.F*st,"Object",{getOwnPropertySymbols:function(t){return P.f(w(t))}}),R&&i(i.S+i.F*(!V||l(function(){var t=T();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],a=1;while(arguments.length>a)r.push(arguments[a++]);if(n=e=r[1],(g(e)||void 0!==t)&&!G(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!G(e))return e}),r[1]=e,$.apply(R,r)}}),T[A][M]||n("35e8")(T[A],M,T[A].valueOf),f(T,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),a=n("6abf").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?s(t):a(r(t))}},1799:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-pagination"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-7"},[n("div",{staticClass:"record-shown"},[n("b-form-group",{class:1==t.selectPaginationDisable?"disable":""},[n("b-form-select",{staticClass:"form-control",attrs:{id:"input-3",options:t.showRecords,required:""},model:{value:t.record,callback:function(e){t.record=e},expression:"record"}})],1),n("p",[t._v(t._s(t.totalRecords))])],1)]),n("div",{staticClass:"col-md-5"},[n("div",{staticClass:"next-previous-pagination"},[n("b-button",{staticClass:"disable",attrs:{type:"submit",variant:"primary"}},[t._v("PREVIOUS")]),n("b-button",{class:1==t.nextBtnDisable?"disable":"",attrs:{type:"submit",variant:"primary"}},[t._v("NEXT")])],1)])])])},a=[],o={components:{},props:{totalRecords:{type:String,default:null},nextBtnDisable:{type:Boolean,default:null},selectPaginationDisable:{type:Boolean,default:null},showRecords:{type:Array,default:null}},data:function(){return{defaultsShowRecords:[{text:"Show 10 records",value:null},{text:"Show 20 records",value:20},{text:"Show 50 records",value:50}],record:null}},computed:{},methods:{},mounted:function(){}},i=o,s=n("2877"),c=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},2200:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-modal",{ref:"my-modal",attrs:{id:"modify-status-popup",title:"Add Nationality Factor",size:"sm",okTitle:"Update",cancelTitle:"Cancel",cancelVariant:"link","no-close-on-backdrop":""}},[n("div",{staticClass:"w-100 archive-popup",attrs:{slot:"modal-header"},slot:"modal-header"},[n("h5",{staticClass:"modal-title"},[t._v(t._s(t.modalTitle))]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.hideModal}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("b-form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"form-group"},[n("label",[t._v(t._s(t.modalLabel))]),n("b-form-select",{staticClass:"form-control",attrs:{id:"rating",options:t.status,autocomplete:"no"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)])])])],1)],1)},a=[],o={props:{mode:{type:String,default:"add"},modalTitle:{type:String,default:null},modalLabel:{type:String,default:null}},data:function(){return{form:{status:null},status:[{value:null,text:"Active"},"Inactive"]}},methods:{hideModal:function(){this.$refs["my-modal"].hide()}}},i=o,s=n("2877"),c=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var r=n("241e"),a=n("c3a1");n("ce7e")("keys",function(){return function(t){return a(r(t))}})},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),a=n("9aa9"),o=n("355d");t.exports=function(t){var e=r(t),n=a.f;if(n){var i,s=n(t),c=o.f,l=0;while(s.length>l)c.call(t,i=s[l++])&&e.push(i)}return e}},6718:function(t,e,n){var r=n("e53d"),a=n("584a"),o=n("b8e3"),i=n("ccb9"),s=n("d9f6").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:i.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),a=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,a)}},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},a4bb:function(t,e,n){t.exports=n("8aae")},bf0b:function(t,e,n){var r=n("355d"),a=n("aebd"),o=n("36c3"),i=n("1bc3"),s=n("07e3"),c=n("794b"),l=Object.getOwnPropertyDescriptor;e.f=n("8e60")?l:function(t,e){if(t=o(t),e=i(e,!0),c)try{return l(t,e)}catch(n){}if(s(t,e))return a(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),a=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return a(r(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),a=n("584a"),o=n("294c");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},cebc:function(t,e,n){"use strict";var r=n("268f"),a=n.n(r),o=n("e265"),i=n.n(o),s=n("a4bb"),c=n.n(s),l=n("85f2"),u=n.n(l);function f(t,e,n){return e in t?u()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=c()(n);"function"===typeof i.a&&(r=r.concat(i()(n).filter(function(t){return a()(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}n.d(e,"a",function(){return d})},e265:function(t,e,n){t.exports=n("ed33")},ebfd:function(t,e,n){var r=n("62a0")("meta"),a=n("f772"),o=n("07e3"),i=n("d9f6").f,s=0,c=Object.isExtensible||function(){return!0},l=!n("294c")(function(){return c(Object.preventExtensions({}))}),u=function(t){i(t,r,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},d=function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},b=function(t){return l&&p.NEED&&c(t)&&!o(t,r)&&u(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:b}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fb4d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screening-data-section"},[n("div",{staticClass:"filter-section row-min-space"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-md-4 text-right"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-9"},[n("base-search",{attrs:{placeholder:"Search record status"}})],1),n("div",{staticClass:"col-md-3"},[n("base-button",{attrs:{btnLabel:"Apply",btnType:"button",btnVariant:"primary"}})],1)])])])]),n("div",{staticClass:"table-section mobile-table-responsive-sm"},[n("b-table",{attrs:{items:t.items,fields:t.fields},scopedSlots:t._u([{key:"status",fn:function(t){return[n("base-status",{attrs:{statusType:t.value}})]}},{key:"action",fn:function(e){return[n("div",{staticClass:"action-review"},["active"==e.value?n("base-action",{directives:[{name:"b-modal",rawName:"v-b-modal.modify-status-popup",modifiers:{"modify-status-popup":!0}}],attrs:{icon:"icon-edit",label:"Modify"}}):t._e()],1)]}}])})],1),n("pagination",{attrs:{totalRecords:"Showing 1 to 2 of 2 records",nextBtnDisable:"",selectPaginationDisable:"",showRecords:t.recordShow}}),n("modify-status-popup",{attrs:{modalTitle:"Modify Record Status",modalLabel:"Active"}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-8 filter-title-section"},[n("h2",[t._v("Record Status")])])}],o=n("cebc"),i=n("2f62"),s=n("1799"),c=n("2200"),l={components:{modifyStatusPopup:c["a"],pagination:s["a"]},props:{},data:function(){return{fields:[],items:[],recordShow:[{text:"Show 10 records",value:null}]}},computed:Object(o["a"])({},Object(i["b"])(["configurationData"])),methods:{initializeData:function(){var t=this.configurationData.screeningData.recordStatus.fields;this.fields=t;var e=this.configurationData.screeningData.recordStatus.items;this.items=e,this.$emit("item-length",this.items.length)}},mounted:function(){this.initializeData()}},u=l,f=n("2877"),d=Object(f["a"])(u,r,a,!1,null,null,null);e["default"]=d.exports},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=record-status.9f70abcc.js.map