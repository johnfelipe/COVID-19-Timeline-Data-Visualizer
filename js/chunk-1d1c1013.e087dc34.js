(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d1c1013"],{1832:function(t,e,a){},"7c43":function(t,e,a){"use strict";var n=a("1832"),i=a.n(n);i.a},ea8a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.series&&t.dates?a("div",{staticClass:"mBlock",staticStyle:{color:"grey"}},[a("DataSwitch",{attrs:{"data-type":t.dataType},on:{typeChange:function(e){t.dataType=e}}}),a("div",{staticStyle:{"padding-bottom":"10px","font-size":"12px"}},[t._v("*"+t._s(t.$t("compareNote")))]),t.selectedCountries.length>0?a("VueApexCharts",{attrs:{width:"100%",height:"320",type:"line",options:t.options,series:t.series}}):t._e(),t._v(" "+t._s(t.$t("compareSelect"))+" "),a("v-select",{attrs:{multiple:"",placeholder:"Select countries to compare",label:"countries",options:t.countryListFiltered,selectable:function(){return t.selectedCountries.length<10}},model:{value:t.selectedCountries,callback:function(e){t.selectedCountries=e},expression:"selectedCountries"}})],1):t._e()},i=[],o=(a("a630"),a("d81d"),a("fb6a"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("130f"),a("1321")),s=a.n(o),r=a("4a7a"),d=a.n(r),c=a("fa68"),l=a("aef7"),u={name:"CountryCompareSection",props:["globalData","countryList"],components:{VueApexCharts:s.a,vSelect:d.a,DataSwitch:c["a"]},data:function(){return{countryListFiltered:[],selectedCountries:["United Kingdom","Spain","France","Italy","Germany"],dates:null,dataType:"confirmed",series:null}},mounted:function(){var t=this;window.calculatedCountryData||(window.calculatedCountryData={}),this.countryListFiltered=this.countryList.slice(3),setImmediate((function(){console.time("series"),t.getSeries(),console.timeEnd("series")}))},watch:{selectedCountries:function(){this.getSeries(),window.ga("send","event","compare","countries-loaded",this.selectedCountries.toString())},dataType:function(){this.getSeries(),window.ga("send","event","compare","type-changed",this.dataType)}},methods:{getSeries:function(){var t=this;if(0===this.selectedCountries.length)return[];var e=this.selectedCountries.map((function(e){var a,n;return window.calculatedCountryData[e]?n=window.calculatedCountryData[e]:(n=Object(l["e"])(t.globalData,e,50),window.calculatedCountryData[e]=n),{name:e,data:null===(a=n)||void 0===a?void 0:a.map((function(e){return"active"===t.dataType?e.confirmed-e.death-e.cured:"dRate"===t.dataType?(e.death/e.confirmed).toPrecision(2):"cRate"===t.dataType?(e.cured/e.confirmed).toPrecision(2):e[t.dataType]}))}})),a=Math.max.apply(Math,e.map((function(t){return t.data.length}))),n=Array.from(Array(a).keys());this.dates=n.map((function(t){return"D"+t})),this.series=e}},computed:{options:function(){return{chart:{id:"cc",height:320,type:"line",stacked:!1,zoom:{enabled:window.innerWidth>800}},tooltip:{shared:!0,intersect:!1,x:{formatter:function(t){return"Day "+t}}},stroke:{width:3},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{type:"text",categories:this.dates,labels:{rotate:-10}},yaxis:{logarithmic:!1,decimalsInFloat:2}}}}},p=u,h=a("2877"),y=Object(h["a"])(p,n,i,!1,null,"3b81dee7",null);e["default"]=y.exports},fa68:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-secondary dropdown-toggle btn-sm",class:{disabled:t.disabled},attrs:{type:"button",id:"dropdownMenu","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.disabled?t.$t("dataSwitch.number"):t.$t("dataSwitch."+t.dataType)))]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu"}},t._l(t.options,(function(e){return a("div",{key:e},["#"===e?a("div",{staticClass:"dropdown-divider"}):a("button",{staticClass:"dropdown-item",class:{active:t.dataType===e},attrs:{type:"button"},on:{click:function(a){return t.$emit("typeChange",e)}}},[t._v(t._s(t.$t("dataSwitch."+e)))])])})),0)])},i=[],o={name:"DataSwitch",props:["dataType","disabled"],data:function(){return{options:["confirmed","active","death","cured","#","dRate","cRate"]}},watch:{dataType:function(){window.ga("send","event","data-switch","type-changed",this.dataType)}}},s=o,r=(a("7c43"),a("2877")),d=Object(r["a"])(s,n,i,!1,null,"77083ec9",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-1d1c1013.e087dc34.js.map