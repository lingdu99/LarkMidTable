(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c4a365c"],{"1b55":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"mycontent"},[t("common",{ref:"apiAdd"}),a._v(" "),t("el-button",{staticStyle:{margin:"10px 0"},attrs:{type:"primary",plain:""},on:{click:a.save}},[a._v("保存")])],1)},r=[],s=(t("7f7f"),t("eb18")),i={data:function(){return{}},components:{common:s["a"]},methods:{save:function(){var a=this.$refs.apiAdd.detail,e=this.$store.getters.getSql,t={name:a.name,path:a.path,note:a.note,groupId:a.groupId,previlege:a.previlege,cachePlugin:a.cachePlugin,cachePluginParams:a.cachePluginParams,transformPlugin:a.transformPlugin,transformPluginParams:a.transformPluginParams,datasourceId:this.$refs.apiAdd.$refs.sqlCode.datasourceId,sqlList:e,params:JSON.stringify(a.params)};console.log(t),""!=t.sql&&null!=t.datasourceId&&null!=t.name&&null!=t.path&&null!=t.groupId||this.$message.error("必填项未填")}},created:function(){}},o=i,c=(t("9b3a"),t("2877")),l=Object(c["a"])(o,n,r,!1,null,"54e78f12",null);e["default"]=l.exports},"9b3a":function(a,e,t){"use strict";t("a8ae")},a8ae:function(a,e,t){}}]);