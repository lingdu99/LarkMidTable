(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b79cd4b2"],{"0f64":function(t,e,i){"use strict";i("f8cb")},"1b55":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("ul",[i("li",[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("创建API")])],1),t._v(" "),i("li",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("API分组管理")])],1),t._v(" "),i("li",[i("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-download",round:""},on:{click:function(e){t.dialogVisible2=!0}}},[t._v("导出API文档")])],1),t._v(" "),i("li",[i("el-button",{attrs:{type:"warning",icon:"el-icon-download",round:""},on:{click:function(e){t.dialogVisible3=!0}}},[t._v("导出API")])],1),t._v(" "),i("li",[i("el-upload",{attrs:{action:"/apiConfig/import",accept:".json","on-success":t.importSuccess,headers:t.headers,"on-error":t.importFail,"file-list":t.fileList}},[i("el-button",{attrs:{type:"warning",icon:"el-icon-upload2",round:""}},[t._v("导入API")])],1)],1),t._v(" "),i("li",[i("el-button",{attrs:{type:"warning",icon:"el-icon-download",round:""},on:{click:function(e){t.dialogVisible4=!0}}},[t._v("导出API分组")])],1),t._v(" "),i("li",[i("el-upload",{attrs:{action:"/apiConfig/importGroup",accept:".json","on-success":t.importGroupSuccess,headers:t.headers,"on-error":t.importFail,"file-list":t.groupFile}},[i("el-button",{attrs:{type:"warning",icon:"el-icon-upload2",round:""}},[t._v("导入API分组")])],1)],1)]),t._v(" "),i("div",{staticClass:"search"},[i("my-select",{attrs:{label:"API分组",options:t.groups,option_label:"name",option_value:"id"},model:{value:t.groupId,callback:function(e){t.groupId=e},expression:"groupId"}}),t._v(" "),i("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入关键字",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[i("el-select",{staticStyle:{width:"80px"},attrs:{slot:"prepend",placeholder:""},slot:"prepend",model:{value:t.field,callback:function(e){t.field=e},expression:"field"}},[i("el-option",{attrs:{label:"名称",value:"name"}}),t._v(" "),i("el-option",{attrs:{label:"描述",value:"note"}}),t._v(" "),i("el-option",{attrs:{label:"路径",value:"path"}})],1)],1),t._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-search",plain:""},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),i("div",{staticClass:"search"},[i("el-table",{attrs:{data:t.tableData,border:"",stripe:"","max-height":"700",width:"100%"}},[i("el-table-column",{attrs:{label:"id",prop:"id",width:"100px"}}),t._v(" "),i("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?i("i",{staticClass:"iconfont icon-on_line1 circle"}):i("i",{staticClass:"iconfont icon-off_line circle offline"}),t._v(" "),0==e.row.previlege?i("i",{staticClass:"el-icon-lock circle lock"}):i("i",{staticClass:"el-icon-unlock circle"}),t._v(" "),i("span",{attrs:{title:e.row.note}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"路径"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v("/"+t._s(t.context)+"/"+t._s(e.row.path))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"参数"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.p,(function(t){return i("data-tag",{attrs:{name:t.name,type:t.type}})}))}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"updateTime",label:"修改时间",width:"170px"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"220px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{plain:"",size:"mini",type:"info",circle:""},on:{click:function(i){return t.detail(e.row.id)}}},[i("i",{staticClass:"iconfont icon-detail"})]),t._v(" "),i("el-button",{attrs:{plain:"",size:"mini",type:"warning",circle:""},on:{click:function(i){return t.handleEdit(e.row.id)}}},[i("i",{staticClass:"el-icon-edit"})]),t._v(" "),0==e.row.status?i("el-button",{attrs:{plain:"",size:"mini",type:"warning",circle:""},on:{click:function(i){return t.online(e.row.id)}}},[i("i",{staticClass:"iconfont icon-on_line2"})]):t._e(),t._v(" "),1==e.row.status?i("el-button",{attrs:{plain:"",size:"mini",type:"info",circle:""},on:{click:function(i){return t.offline(e.row.id)}}},[i("i",{staticClass:"iconfont icon-off_line1"})]):t._e(),t._v(" "),1==e.row.status?i("el-button",{attrs:{plain:"",size:"mini",type:"primary",title:"接口请求测试",circle:""},on:{click:function(i){return t.httpTest(e.row.id)}}},[i("i",{staticClass:"iconfont icon-HTTPRequest"})]):t._e(),t._v(" "),i("el-button",{attrs:{plain:"",size:"mini",type:"danger",circle:""},on:{click:function(i){return t.handleDelete(e.row.id)}}},[i("i",{staticClass:"el-icon-delete"})])]}}])})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"创建API",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},close:t.getAllGroups}},[i("group")],1),t._v(" "),i("el-dialog",{attrs:{title:"导出API文档",visible:t.dialogVisible2},on:{"update:visible":function(e){t.dialogVisible2=e},open:t.getApiTree}},[i("el-tree",{ref:"tree",attrs:{data:t.treeData,"show-checkbox":"","node-key":"id",props:t.defaultProps}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible2=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible2=!1,t.exportDocs()}}},[t._v("导出")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"导出API",visible:t.dialogVisible3},on:{"update:visible":function(e){t.dialogVisible3=e},open:t.getApiTree}},[i("el-tree",{ref:"tree2",attrs:{data:t.treeData,"show-checkbox":"","node-key":"id",props:t.defaultProps}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible3=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible3=!1,t.exportConfig()}}},[t._v("导出")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"导出API分组",visible:t.dialogVisible4},on:{"update:visible":function(e){t.dialogVisible4=e},open:t.getAllGroups}},[i("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.groups,(function(e){return i("el-checkbox",{attrs:{label:e.id}},[t._v("\n          "+t._s(e.name)+"\n          "),i("span",{staticStyle:{color:"#ccc"}},[t._v(t._s(e.id))])])})),1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible4=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible4=!1,t.exportGroupConfig()}}},[t._v("导出")])],1)],1)],1)])},o=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.groups,(function(e){return i("el-tag",{key:e.id,attrs:{title:"id: "+e.id,closable:"","disable-transitions":!1,effect:"dark"},on:{close:function(i){return t.handleClose(e.id)}}},[t._v(t._s(e.name))])})),t._v(" "),t.inputVisible?i("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):i("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v("+ 创建API分组")])],2)},s=[],a={data:function(){return{groups:[],inputVisible:!1,inputValue:""}},methods:{getAllGroups:function(){},createGroup:function(){},handleClose:function(t){},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&this.createGroup(),this.inputVisible=!1,this.inputValue=""}},created:function(){this.getAllGroups()}},r=a,c=(i("0f64"),i("2877")),u=Object(c["a"])(r,l,s,!1,null,"35e465a9",null),p=u.exports,d={name:"api",data:function(){return{dialogVisible:!1,dialogVisible2:!1,dialogVisible3:!1,dialogVisible4:!1,keyword:null,field:null,tableData:[],groups:[],groupId:"",treeData:[],defaultProps:{children:"children",label:"name"},headers:{Authorization:localStorage.getItem("token")},fileList:[],groupFile:[],checkList:[],context:null}},components:{group:p},methods:{importSuccess:function(t,e,i){this.fileList=[],this.$message.success("Import Success"),this.getAllApis()},importGroupSuccess:function(t,e,i){this.groupFile=[],this.$message.success("Import Success"),this.getAllGroups()},importFail:function(t,e,i){this.$message.error("Import failed!  "+t.message)},getAllApis:function(){},search:function(){},getContext:function(){},handleDelete:function(t){},online:function(t){},offline:function(t){},httpTest:function(t){this.$router.push({path:"/api/request",query:{id:t}})},detail:function(t){this.$router.push({path:"/api/detail",query:{id:t}})},handleEdit:function(t){this.$router.push({path:"/api/edit",query:{id:t}})},handleAdd:function(){this.$router.push({path:"/api/add"})},getAllGroups:function(){},getApiTree:function(){},exportDocs:function(){},exportConfig:function(){},exportGroupConfig:function(){}},created:function(){this.getAllApis(),this.getAllGroups(),this.getContext()}},f=d,b=(i("4639"),Object(c["a"])(f,n,o,!1,null,"3c809854",null));e["default"]=b.exports},4639:function(t,e,i){"use strict";i("51cd")},"51cd":function(t,e,i){},f8cb:function(t,e,i){}}]);