import{v as t,o as s,aq as a,a as e,b as o,r as n,e as i,f as l,w as r,a0 as c,j as u,k as d,g as p,l as f,m,F as g,i as b,p as y,t as k,y as _,u as x,A as C,s as v,ab as w,M as h,D as j}from"./index-elTIKzuw.js";import{_ as S}from"./su-tabs.DFIg15x_.js";import{_ as T}from"./su-sticky.B_SzlDbx.js";import{_ as N}from"./s-empty.C79dWESw.js";import{_ as $}from"./s-goods-item.QFuJe_JF.js";import{_ as I}from"./uni-load-more.CdG2oDEj.js";import{S as M}from"./s-layout.CN_pWsHh.js";import{l as O,o as z,m as G,f as P}from"./useGoods.CvuXdKBl.js";import{r as q}from"./index.D28Cy_eo.js";import{_ as A}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as B}from"./lodash.default.DaD-suQh.js";import"./min.CVwn9Ptd.js";const D=A({__name:"list",setup(A){const D=t({currentTab:0,pagination:{list:[],total:0,pageNo:1,pageSize:5},loadStatus:""}),E=[{name:"全部"},{name:"待付款",value:0},{name:"待发货",value:10},{name:"待收货",value:20},{name:"待评价",value:30}];function F(t){D.currentTab!==t.index&&(q(D.pagination),D.currentTab=t.index,U())}function R(t){v.$router.go("/pages/order/detail",{id:t})}async function U(){D.loadStatus="loading";let{code:t,data:s}=await c.getOrderPage({pageNo:D.pagination.pageNo,pageSize:D.pagination.pageSize,status:E[D.currentTab].value,commentStatus:30!==E[D.currentTab].value&&null});0===t&&(s.list.forEach((t=>O(t))),D.pagination.list=B.concat(D.pagination.list,s.list),D.pagination.total=s.total,D.loadStatus=D.pagination.list.length<D.pagination.total?"more":"noMore")}function W(){"noMore"!==D.loadStatus&&(D.pagination.pageNo++,U())}return s((async t=>{t.type&&(D.currentTab=t.type),await U()})),a((()=>{W()})),e((()=>{q(D.pagination),U(),setTimeout((function(){o()}),800)})),(t,s)=>{const a=n(i("su-tabs"),S),e=n(i("su-sticky"),T),o=n(i("s-empty"),N),A=b,B=n(i("s-goods-item"),$),Z=j,H=n(i("uni-load-more"),I),J=n(i("s-layout"),M);return u(),l(J,{title:"我的订单"},{default:r((()=>[d(e,{bgColor:"#fff"},{default:r((()=>[d(a,{list:E,scrollable:!1,onChange:F,current:D.currentTab},null,8,["current"])])),_:1}),0===D.pagination.total?(u(),l(o,{key:0,icon:"/static/order-empty.png",text:"暂无订单"})):p("",!0),D.pagination.total>0?(u(),l(A,{key:1},{default:r((()=>[(u(!0),f(g,null,m(D.pagination.list,(t=>(u(),l(A,{class:"bg-white order-list-card-box ss-r-10 ss-m-t-14 ss-m-20",key:t.id,onClick:s=>R(t.id)},{default:r((()=>[d(A,{class:"order-card-header ss-flex ss-col-center ss-row-between ss-p-x-20"},{default:r((()=>[d(A,{class:"order-no"},{default:r((()=>[y("订单号："+k(t.no),1)])),_:2},1024),d(A,{class:_(["order-state ss-font-26",x(z)(t)])},{default:r((()=>[y(k(x(G)(t)),1)])),_:2},1032,["class"])])),_:2},1024),(u(!0),f(g,null,m(t.items,(t=>(u(),l(A,{class:"border-bottom",key:t.id},{default:r((()=>[d(B,{img:t.picUrl,title:t.spuName,skuText:t.properties.map((t=>t.valueName)).join(" "),price:t.price,num:t.count},null,8,["img","title","skuText","price","num"])])),_:2},1024)))),128)),d(A,{class:"pay-box ss-m-t-30 ss-flex ss-row-right ss-p-r-20"},{default:r((()=>[d(A,{class:"ss-flex ss-col-center"},{default:r((()=>[d(A,{class:"discounts-title pay-color"},{default:r((()=>[y("共 "+k(t.productCount)+" 件商品,总金额:",1)])),_:2},1024),d(A,{class:"discounts-money pay-color"},{default:r((()=>[y(" ￥"+k(x(P)(t.payPrice)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),d(A,{class:_(["order-card-footer ss-flex ss-col-center ss-p-x-20",t.buttons.length>3?"ss-row-between":"ss-row-right"])},{default:r((()=>[d(A,{class:"ss-flex ss-col-center"},{default:r((()=>[t.buttons.includes("combination")?(u(),l(Z,{key:0,class:"tool-btn ss-reset-button",onClick:C((s=>function(t){v.$router.go("/pages/activity/groupon/detail",{id:t.combinationRecordId})}(t)),["stop"])},{default:r((()=>[y(" 拼团详情 ")])),_:2},1032,["onClick"])):p("",!0),0===t.buttons.length?(u(),l(Z,{key:1,class:"tool-btn ss-reset-button",onClick:C((s=>R(t.id)),["stop"])},{default:r((()=>[y(" 查看详情 ")])),_:2},1032,["onClick"])):p("",!0),t.buttons.includes("confirm")?(u(),l(Z,{key:2,class:"tool-btn ss-reset-button",onClick:C((s=>async function(t,s=!1){"WechatMiniProgram"!==v.$platform.name||w(t.wechat_extra_data)||s?h({title:"提示",content:"确认收货吗？",success:async function(s){if(!s.confirm)return;const{code:a}=await c.receiveOrder(t.id);0===a&&(q(D.pagination),await U())}}):mpConfirm(t)}(t)),["stop"])},{default:r((()=>[y(" 确认收货 ")])),_:2},1032,["onClick"])):p("",!0),t.buttons.includes("express")?(u(),l(Z,{key:3,class:"tool-btn ss-reset-button",onClick:C((s=>async function(t){v.$router.go("/pages/order/express/log",{id:t})}(t.id)),["stop"])},{default:r((()=>[y(" 查看物流 ")])),_:2},1032,["onClick"])):p("",!0),t.buttons.includes("cancel")?(u(),l(Z,{key:4,class:"tool-btn ss-reset-button",onClick:C((s=>async function(t){h({title:"提示",content:"确定要取消订单吗?",success:async function(s){if(!s.confirm)return;const{code:a}=await c.cancelOrder(t);if(0===a){let s=D.pagination.list.findIndex((s=>s.id===t));const a=D.pagination.list[s];a.status=40,O(a)}}})}(t.id)),["stop"])},{default:r((()=>[y(" 取消订单 ")])),_:2},1032,["onClick"])):p("",!0),t.buttons.includes("comment")?(u(),l(Z,{key:5,class:"tool-btn ss-reset-button",onClick:C((s=>{return a=t.id,void v.$router.go("/pages/goods/comment/add",{id:a});var a}),["stop"])},{default:r((()=>[y(" 评价 ")])),_:2},1032,["onClick"])):p("",!0),t.buttons.includes("delete")?(u(),l(Z,{key:6,class:"delete-btn ss-reset-button",onClick:C((s=>{return a=t.id,void h({title:"提示",content:"确定要删除订单吗?",success:async function(t){if(t.confirm){const{code:t}=await c.deleteOrder(a);if(0===t){let t=D.pagination.list.findIndex((t=>t.id===a));D.pagination.list.splice(t,1)}}}});var a}),["stop"])},{default:r((()=>[y(" 删除订单 ")])),_:2},1032,["onClick"])):p("",!0),t.buttons.includes("pay")?(u(),l(Z,{key:7,class:"tool-btn ss-reset-button ui-BG-Main-Gradient",onClick:C((s=>{return a=t.payOrderId,void v.$router.go("/pages/pay/index",{id:a});var a}),["stop"])},{default:r((()=>[y(" 继续支付 ")])),_:2},1032,["onClick"])):p("",!0)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1032,["onClick"])))),128))])),_:1})):p("",!0),D.pagination.total>0?(u(),l(H,{key:2,status:D.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:W},null,8,["status"])):p("",!0)])),_:1})}}},[["__scopeId","data-v-4759b163"]]);export{D as default};
