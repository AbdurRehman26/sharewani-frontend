(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["branding"],{"2d00b":function(o,a,r){"use strict";r.r(a);var l=function(){var o=this,a=o.$createElement,r=o._self._c||a;return r("div",{staticClass:"wrap-content branding-page"},[o._m(0),r("div",{staticClass:"config-card-switch"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card custom-card"},[r("div",{staticClass:"fields-area"},[r("div",{staticClass:"brand-logo-area"},[r("h5",[o._v("\n                                Brand Logo\n                            ")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("b-form-group",{attrs:{id:"input-group-6",label:"LOGO FOR LIGHT BACKGROUND","label-for":"documentScan"}},[r("b-form-file",{attrs:{id:"documentScan",accept:"image/jpeg, image/png",placeholder:"Choose transparent logo image file (PNG)","drop-placeholder":"Drop file here..."},on:{change:o.uploadLogoOne}})],1)],1),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"brand-logo light"},[r("div",{staticClass:"logo-area-preview",style:{"background-image":"url("+o.logoLight+")"}})])]),r("div",{staticClass:"col-md-9"},[r("b-form-group",{attrs:{id:"input-group-6",label:"LOGO FOR DARK BACKGROUND","label-for":"documentBg"}},[r("b-form-file",{attrs:{id:"documentBg",accept:"image/jpeg, image/png",placeholder:"Choose transparent logo image file (PNG)","drop-placeholder":"Drop file here..."},on:{change:o.uploadLogoTwo}})],1)],1),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"brand-logo dark"},[r("div",{staticClass:"logo-area-preview",style:{"background-image":"url("+o.logoDark+")"}})])])])])]),r("div",{staticClass:"fields-area"},[r("div",{staticClass:"brand-color-area"},[r("h5",[o._v("\n                                Brand Colours\n                            ")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"input-group-6",label:"PRIMARY COLOUR CODE","label-for":"primary-code"}},[r("div",{staticClass:"color-area"},[r("b-form-input",{attrs:{id:"primary-code",type:"text",placeholder:"Primary Colour"},model:{value:o.primaryColor,callback:function(a){o.primaryColor=a},expression:"primaryColor"}}),r("b-form-input",{attrs:{type:"color"},model:{value:o.primaryColor,callback:function(a){o.primaryColor=a},expression:"primaryColor"}}),r("div",{staticClass:"input-color"},[r("div",{staticClass:"color-pallet",style:{"background-color":""+o.primaryColor}}),r("i",{staticClass:"icon-color-picker"})])],1)])],1),r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"input-group-6",label:"SECONDARY COLOUR CODE","label-for":"secondary-code"}},[r("div",{staticClass:"color-area"},[r("b-form-input",{attrs:{id:"secondary-code",type:"text",placeholder:"Secondary Colour"},model:{value:o.secondaryColor,callback:function(a){o.secondaryColor=a},expression:"secondaryColor"}}),r("b-form-input",{attrs:{type:"color"},model:{value:o.secondaryColor,callback:function(a){o.secondaryColor=a},expression:"secondaryColor"}}),r("div",{staticClass:"input-color"},[r("div",{staticClass:"color-pallet",style:{"background-color":""+o.secondaryColor}}),r("i",{staticClass:"icon-color-picker"})])],1)])],1),r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"input-group-6",label:"INTERFACE DARK COLOUR CODE","label-for":"interface-dark-code"}},[r("div",{staticClass:"color-area"},[r("b-form-input",{attrs:{id:"interface-dark-code",type:"text",placeholder:"Secondary Colour"},model:{value:o.darkColor,callback:function(a){o.darkColor=a},expression:"darkColor"}}),r("b-form-input",{attrs:{type:"color"},model:{value:o.darkColor,callback:function(a){o.darkColor=a},expression:"darkColor"}}),r("div",{staticClass:"input-color"},[r("div",{staticClass:"color-pallet",style:{"background-color":""+o.darkColor}}),r("i",{staticClass:"icon-color-picker"})])],1)])],1),r("div",{staticClass:"col-md-6"},[r("b-form-group",{attrs:{id:"input-group-6",label:"INTERFACE DARK MEDIUM DARK COLOUR CODE","label-for":"interface-medium-code"}},[r("div",{staticClass:"color-area"},[r("b-form-input",{attrs:{id:"interface-medium-code",type:"text",placeholder:"Secondary Colour"},model:{value:o.darkMediumColor,callback:function(a){o.darkMediumColor=a},expression:"darkMediumColor"}}),r("b-form-input",{attrs:{type:"color"},model:{value:o.darkMediumColor,callback:function(a){o.darkMediumColor=a},expression:"darkMediumColor"}}),r("div",{staticClass:"input-color"},[r("div",{staticClass:"color-pallet",style:{"background-color":""+o.darkMediumColor}}),r("i",{staticClass:"icon-color-picker"})])],1)])],1)])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("base-button",{attrs:{btnVariant:"primary",btnLabel:"UPDATE"}})],1)])])])])])])},t=[function(){var o=this,a=o.$createElement,r=o._self._c||a;return r("div",{staticClass:"filter-section"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("h2",[o._v("Branding Configurations")])])])])}],e={components:{},props:{},data:function(){return{logoLight:"/logo-light.png",logoDark:"/logo-dark.png",primaryColor:"#662d91",secondaryColor:"#b35fa5",darkColor:"#22003c",darkMediumColor:"#3c1559"}},computed:{},methods:{uploadLogoOne:function(o){var a=this,r=o.target.files[0],l=new FileReader;l.readAsDataURL(r),l.onload=function(o){a.logoLight=o.target.result,console.log(a.logoLight)}},uploadLogoTwo:function(o){var a=this,r=o.target.files[0],l=new FileReader;l.readAsDataURL(r),l.onload=function(o){a.logoDark=o.target.result,console.log(a.logoDark)}}},mounted:function(){}},i=e,s=r("2877"),c=Object(s["a"])(i,l,t,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=branding.5fed5410.js.map