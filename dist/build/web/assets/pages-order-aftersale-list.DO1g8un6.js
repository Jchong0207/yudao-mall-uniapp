import{v as a,o as t,aq as s,r as e,e as o,f as l,w as n,j as i,k as r,g as c,l as u,m as p,F as d,i as f,u as m,s as g,p as _,t as y,A as b,M as x,C as j,D as k}from"./index-sTbmrhgN.js";import{_ as w}from"./su-tabs.Cb9CU93n.js";import{_ as S}from"./su-sticky.DBBlaXc1.js";import{_ as v}from"./s-empty.BrbtlCrO.js";import{_ as h}from"./s-goods-item.DJ0JapKi.js";import{_ as C}from"./uni-load-more.CEV2kGaC.js";import{S as N}from"./s-layout.DXqCFQ1i.js";import{p as T,q as A,r as q}from"./useGoods.ChXgV4tj.js";import{A as z}from"./afterSale.DgDzDglv.js";import{r as M}from"./index.Bv-U3561.js";import{_ as P}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as D}from"./lodash.default.B_jLv88b.js";import"./min.nKVuoSVN.js";const E=P({__name:"list",setup(P){const E=a({currentTab:0,showApply:!1,pagination:{list:[],total:0,pageNo:1,pageSize:10},loadStatus:""}),F=[{name:"全部",value:"all"}];function G(a){M(E.pagination),E.currentTab=a.index,I()}async function I(){E.loadStatus="loading";let{data:a,code:t}=await z.getAfterSalePage({pageNo:E.pagination.pageNo,pageSize:E.pagination.pageSize});0===t&&(a.list.forEach((a=>T(a))),E.pagination.list=D.concat(E.pagination.list,a.list),E.pagination.total=a.total,E.loadStatus=E.pagination.list.length<E.pagination.total?"more":"noMore")}function U(){"noMore"!==E.loadStatus&&(E.pagination.pageNo++,I())}return t((async a=>{a.type&&(E.currentTab=a.type),await I()})),s((()=>{U()})),(a,t)=>{const s=e(o("su-tabs"),w),T=e(o("su-sticky"),S),P=e(o("s-empty"),v),D=j,Z=f,$=e(o("s-goods-item"),h),B=k,H=e(o("uni-load-more"),C),J=e(o("s-layout"),N);return i(),l(J,{title:"售后列表"},{default:n((()=>[r(T,{bgColor:"#fff"},{default:n((()=>[r(s,{list:F,scrollable:!1,onChange:G,current:E.currentTab},null,8,["current"])])),_:1}),0===E.pagination.total?(i(),l(P,{key:0,icon:"/static/data-empty.png",text:"暂无数据"})):c("",!0),E.pagination.total>0?(i(),l(Z,{key:1},{default:n((()=>[(i(!0),u(d,null,p(E.pagination.list,(a=>(i(),l(Z,{class:"list-box ss-m-y-20",key:a.id,onClick:t=>m(g).$router.go("/pages/order/aftersale/detail",{id:a.id})},{default:n((()=>[r(Z,{class:"order-head ss-flex ss-col-center ss-row-between"},{default:n((()=>[r(D,{class:"no"},{default:n((()=>[_("服务单号："+y(a.no),1)])),_:2},1024),r(D,{class:"state"},{default:n((()=>[_(y(m(A)(a)),1)])),_:2},1024)])),_:2},1024),r($,{img:a.picUrl,title:a.spuName,skuText:a.properties.map((a=>a.valueName)).join(" "),price:a.refundPrice},null,8,["img","title","skuText","price"]),r(Z,{class:"apply-box ss-flex ss-col-center ss-row-between border-bottom ss-p-x-20"},{default:n((()=>[r(Z,{class:"ss-flex ss-col-center"},{default:n((()=>[r(Z,{class:"title ss-m-r-20"},{default:n((()=>[_(y(10===a.way?"仅退款":"退款退货"),1)])),_:2},1024),r(Z,{class:"value"},{default:n((()=>[_(y(m(q)(a)),1)])),_:2},1024)])),_:2},1024),r(D,{class:"_icon-forward"})])),_:2},1024),r(Z,{class:"tool-btn-box ss-flex ss-col-center ss-row-right ss-p-r-20"},{default:n((()=>[r(Z,null,{default:n((()=>[(null==a?void 0:a.buttons.includes("cancel"))?(i(),l(B,{key:0,class:"ss-reset-button tool-btn",onClick:b((t=>{return s=a.id,void x({title:"提示",content:"确定要取消此申请吗？",success:async function(a){if(!a.confirm)return;const{code:t}=await z.cancelAfterSale(s);0===t&&(M(E.pagination),await I())}});var s}),["stop"])},{default:n((()=>[_(" 取消申请 ")])),_:2},1032,["onClick"])):c("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):c("",!0),E.pagination.total>0?(i(),l(H,{key:2,status:E.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:U},null,8,["status"])):c("",!0)])),_:1})}}},[["__scopeId","data-v-56d68fd2"]]);export{E as default};
