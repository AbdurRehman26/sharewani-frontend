(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["advance-search"],{"120f":function(a,e,i){"use strict";i.r(e);var t=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"wrap-content advance-search"},[a._m(0),i("div",{staticClass:"card"},[a.show?i("b-form",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-1",label:"First name","label-for":"input-1"}},[i("b-form-input",{attrs:{id:"input-1",type:"text",required:"",autocomplete:"no",placeholder:"Search by first name"},model:{value:a.form.firstName,callback:function(e){a.$set(a.form,"firstName",e)},expression:"form.firstName"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-2",label:"Middle Name","label-for":"input-2"}},[i("b-form-input",{attrs:{id:"input-2",type:"text",required:"",autocomplete:"no",placeholder:"Search by middle name"},model:{value:a.form.middleName,callback:function(e){a.$set(a.form,"middleName",e)},expression:"form.middleName"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-3",label:"Last name","label-for":"input-3"}},[i("b-form-input",{attrs:{id:"input-3",type:"text",required:"",autocomplete:"no",placeholder:"Search by last name"},model:{value:a.form.lastName,callback:function(e){a.$set(a.form,"lastName",e)},expression:"form.lastName"}})],1)],1),i("div",{staticClass:"col-md-4 form-radio"},[i("b-form-group",{attrs:{id:"input-group-4",label:"Gender","label-for":"gender"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.form.genderOptions,autocomplete:"no"},model:{value:a.form.gender,callback:function(e){a.$set(a.form,"gender",e)},expression:"form.gender"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-5",label:"Nationality","label-for":"nationality"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.nationality},model:{value:a.form.nationality,callback:function(e){a.$set(a.form,"nationality",e)},expression:"form.nationality"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-6",label:"Country of Residence","label-for":"residence"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.residence},model:{value:a.form.residence,callback:function(e){a.$set(a.form,"residence",e)},expression:"form.residence"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-7",label:"Work Type","label-for":"work"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.workType},model:{value:a.form.workType,callback:function(e){a.$set(a.form,"workType",e)},expression:"form.workType"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-8",label:"Industry","label-for":"industry"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.industry},model:{value:a.form.industry,callback:function(e){a.$set(a.form,"industry",e)},expression:"form.industry"}})],1)],1),i("div",{staticClass:"col-md-12 seprator-line"},[i("hr")]),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-9",label:"KYC Status","label-for":"status"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.status},model:{value:a.form.status,callback:function(e){a.$set(a.form,"status",e)},expression:"form.status"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-10",label:"Name Screening Hit Type","label-for":"hitType"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.hitType},model:{value:a.form.hitType,callback:function(e){a.$set(a.form,"hitType",e)},expression:"form.hitType"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-11",label:"Risk Rating Level","label-for":"ratingLevel"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.ratingLevel},model:{value:a.form.ratingLevel,callback:function(e){a.$set(a.form,"ratingLevel",e)},expression:"form.ratingLevel"}})],1)],1),i("div",{staticClass:"col-md-4 form-radio reg-channel"},[i("b-form-group",{attrs:{id:"input-group-12",label:"Registration Channel","label-for":"channel"}},[i("b-form-group",[i("b-form-radio-group",{attrs:{options:a.form.channel,name:"channel"},model:{value:a.channel,callback:function(e){a.channel=e},expression:"channel"}})],1)],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-13",label:"Id Type","label-for":"type"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.type},model:{value:a.form.type,callback:function(e){a.$set(a.form,"type",e)},expression:"form.type"}})],1)],1),i("div",{staticClass:"col-md-4"},[i("b-form-group",{attrs:{id:"input-group-14",label:"Product Type","label-for":"productType"}},[i("b-form-select",{staticClass:"form-control",attrs:{options:a.productType},model:{value:a.form.productType,callback:function(e){a.$set(a.form,"productType",e)},expression:"form.productType"}})],1)],1),i("div",{staticClass:"col-md-12 seprator-line"},[i("hr")]),i("div",{staticClass:"col-md-12"},[i("base-button",{attrs:{btnLabel:"Search now",btnType:"submit",btnVariant:"primary"}})],1)])]):a._e()],1)])},n=[function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"filter-section"},[i("h2",[a._v("Advance Search")])])}],o={components:{},props:{},data:function(){return{show:!0,channel:null,gender:null,form:{firstName:"",middleName:"",lastName:"",gender:null,nationality:null,residence:null,workType:null,industry:null,status:null,hitType:null,ratingLevel:null,type:null,productType:null,genderOptions:[{text:"Select Gender",value:null},"Male","Female","Not Applicable"],channel:[{text:"All",value:null},"Face-To-Face","Not-Face-To-Face"]},workType:[{value:null,text:"Select Work Type",disabled:!0},"Self-Employed / Business Owner","Salaried-Executive Level","Salaried-General","Homemaker","Student","Unemployed","Retired"],industry:[{value:null,text:"Select Industry",disabled:!0},"Automotive Industry","Textile Industry","Agriculture, forestry and fishing","Mining and quarrying","Manufacturing","Electricity, gas, steam and air conditioning supply","Water supply, sewerage, waste management","Construction","Wholesale and retail trade, repair of motor vehicles","Transportation and storage","Accommodation and food service activities","Information and communication","Financial and insurance activities","Real estate activities","Professional, scientific and technical activities","Administrative and support service activities","Public administration and defence, compulsory social security","Education","Human health and social work activities","Arts, entertainment and recreation","Other service activities","Activities of households as employers","Activities of extraterritorial organizations and bodies"],nationality:[{value:null,text:"Select Nationality",disabled:!0},"Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia (Plurinational State of)","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalam","Bulgaria","BurkinaFaso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czechia","Côte d'Ivoire","Democratic People's Republic of Korea","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Faroe Islands","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia (Federated States of)","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Niue","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Republic of Korea","Republic of Moldova","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syrian Arab Republic","Tajikistan","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United Republic of Tanzania","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Yemen","Zambia","Zimbabwe"],residence:[{value:null,text:"Select Country of Residence",disabled:!0},"Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia (Plurinational State of)","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalam","Bulgaria","BurkinaFaso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czechia","Côte d'Ivoire","Democratic People's Republic of Korea","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Faroe Islands","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia (Federated States of)","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Niue","North Macedonia","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Republic of Korea","Republic of Moldova","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syrian Arab Republic","Tajikistan","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United Republic of Tanzania","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Yemen","Zambia","Zimbabwe"],status:[{value:null,text:"Select KYC Status"},"Approved","Pending","Reject"],hitType:[{value:null,text:"Select Name Screening Hit Type"},"PEP hit","Enforcement hit","Blacklist hit","Sanction hit"],ratingLevel:[{value:null,text:"Select Risk Rating Level"},"High Risk","Medium Risk","Low Risk"],type:[{value:null,text:"Select ID Type"},"Passport","Driving Licence","National ID card"],productType:[{value:null,text:"Select Product Type"},"Current Account","Saving Account","Credit Card","Short Term Loan","Financial Investment"]}},computed:{},methods:{},mounted:function(){}},r=o,l=i("2877"),s=Object(l["a"])(r,t,n,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=advance-search.8ae0e9ea.js.map