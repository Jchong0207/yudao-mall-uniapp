import{v as a,o as t,aq as s,a as o,b as e,r as i,e as n,f as r,w as l,j as u,k as d,g as p,l as c,m,F as g,i as f,p as _,t as b,y,u as j,s as k,D as x}from"./index-Bw34y8dl.js";import{_ as S}from"./su-tabs.Dc0-6g8u.js";import{_ as v}from"./su-sticky.3ho8Wwxm.js";import{_ as C}from"./s-empty.BB0R8w5g.js";import{_ as h}from"./s-goods-item.Z6G12QLx.js";import{_ as w}from"./uni-load-more.DvM90YQN.js";import{S as T}from"./s-layout.BnNaBtzy.js";import{o as N}from"./useGoods.s-Unc0ZH.js";import{r as z}from"./index.D2olNfS9.js";import{C as G}from"./combination.DDmVjP6R.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as M}from"./lodash.default.BQAopBuf.js";import"./min.C0kljPR4.js";const q=I({__name:"order",setup(I){const q=a({currentTab:0,pagination:{list:[],total:0,pageNo:1,pageSize:5},loadStatus:"",deleteOrderId:0}),P=[{name:"全部"},{name:"进行中",value:0},{name:"拼团成功",value:1},{name:"拼团失败",value:2}];function $(a){z(q.pagination),q.currentTab=a.index,B()}async function B(){q.loadStatus="loading";const{code:a,data:t}=await G.getCombinationRecordPage({pageNo:q.pagination.pageNo,pageSize:q.pagination.pageSize,status:P[q.currentTab].value});0===a&&(q.pagination.list=M.concat(q.pagination.list,t.list),q.pagination.total=t.total,q.loadStatus=q.pagination.list.length<q.pagination.total?"more":"noMore")}function D(){"noMore"!==q.loadStatus&&(q.pagination.pageNo++,B())}return t((a=>{a.type&&(q.currentTab=a.type),B()})),s((()=>{D()})),o((()=>{B(),setTimeout((function(){e()}),800)})),(a,t)=>{const s=i(n("su-tabs"),S),o=i(n("su-sticky"),v),e=i(n("s-empty"),C),z=f,G=i(n("s-goods-item"),h),I=x,M=i(n("uni-load-more"),w),B=i(n("s-layout"),T);return u(),r(B,{title:"我的拼团"},{default:l((()=>[d(o,{bgColor:"#fff"},{default:l((()=>[d(s,{list:P,scrollable:!1,onChange:$,current:q.currentTab},null,8,["current"])])),_:1}),0===q.pagination.total?(u(),r(e,{key:0,icon:"/static/goods-empty.png"})):p("",!0),q.pagination.total>0?(u(),r(z,{key:1},{default:l((()=>[(u(!0),c(g,null,m(q.pagination.list,(a=>(u(),r(z,{class:"order-list-card-box bg-white ss-r-10 ss-m-t-14 ss-m-20",key:a.id},{default:l((()=>[d(z,{class:"order-card-header ss-flex ss-col-center ss-row-between ss-p-x-20"},{default:l((()=>[d(z,{class:"order-no"},{default:l((()=>[_("拼团编号："+b(a.id),1)])),_:2},1024),d(z,{class:y(["ss-font-26",j(N)(a)])},{default:l((()=>[_(b(P.find((t=>t.value===a.status)).name),1)])),_:2},1032,["class"])])),_:2},1024),d(z,{class:"border-bottom"},{default:l((()=>[d(G,{img:a.picUrl,title:a.spuName,price:a.combinationPrice},{groupon:l((()=>[d(z,{class:"ss-flex"},{default:l((()=>[d(z,{class:"sales-title"},{default:l((()=>[_(b(a.userSize)+" 人团 ",1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["img","title","price"])])),_:2},1024),d(z,{class:"order-card-footer ss-flex ss-row-right ss-p-x-20"},{default:l((()=>[d(I,{class:"detail-btn ss-reset-button",onClick:t=>j(k).$router.go("/pages/order/detail",{id:a.orderId})},{default:l((()=>[_(" 订单详情 ")])),_:2},1032,["onClick"]),d(I,{class:y(["tool-btn ss-reset-button",{"ui-BG-Main-Gradient":0===a.status}]),onClick:t=>j(k).$router.go("/pages/activity/groupon/detail",{id:a.id})},{default:l((()=>[_(b(0===a.status?"邀请拼团":"拼团详情"),1)])),_:2},1032,["class","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})):p("",!0),q.pagination.total>0?(u(),r(M,{key:2,status:q.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:D},null,8,["status"])):p("",!0)])),_:1})}}},[["__scopeId","data-v-0284b1d7"]]);export{q as default};
