import{z as t,s as a,d as s,v as e,o,aq as l,r,e as n,f as i,w as u,y as c,u as d,cG as p,j as m,k as f,p as g,t as _,x as b,l as y,m as x,F as h,g as w,i as T,C as j}from"./index-elTIKzuw.js";import{_ as v}from"./su-tabs.DFIg15x_.js";import{_ as S}from"./su-sticky.B_SzlDbx.js";import{_ as k}from"./s-empty.C79dWESw.js";import{_ as z}from"./uni-load-more.CdG2oDEj.js";import{S as N}from"./s-layout.CN_pWsHh.js";import{r as C}from"./index.D28Cy_eo.js";import{f as M}from"./useGoods.CvuXdKBl.js";import{_ as $}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as q}from"./lodash.default.DaD-suQh.js";import"./min.CVwn9Ptd.js";const B=$({__name:"order",setup($){t((t=>({"308b6117":d(F)})));const B=2*a.$platform.device.statusBarHeight,F=a.$url.css("/static/img/shop/user/withdraw_bg.png");s((t=>{G.scrollTop=t.scrollTop<=100}));const G=e({totals:0,scrollTop:!1,currentTab:0,loadStatus:"",pagination:{list:[],total:0,pageNo:1,pageSize:8}}),I=[{name:"全部",value:-1},{name:"待结算",value:0},{name:"已结算",value:1}];function H(t){C(G.pagination),G.currentTab=t.index,P()}async function P(){G.loadStatus="loading";const t=I[G.currentTab],a={pageSize:G.pagination.pageSize,pageNo:G.pagination.pageNo,bizType:1,status:t.value};t.value<0&&delete a.status;const{code:s,data:e}=await p.getBrokerageRecordPage(a);0===s&&(G.pagination.list=q.concat(G.pagination.list,e.list),G.pagination.total=e.total,G.loadStatus=G.pagination.list.length<G.pagination.total?"more":"noMore",0===G.currentTab&&(G.totals=e.total))}function R(){"noMore"!==G.loadStatus&&(G.pagination.pageNo++,P())}return o((()=>{P()})),l((()=>{R()})),(t,s)=>{const e=T,o=r(n("su-tabs"),v),l=r(n("su-sticky"),S),p=j,C=r(n("s-empty"),k),$=r(n("uni-load-more"),z),q=r(n("s-layout"),N);return m(),i(q,{title:"分销订单",class:c(G.scrollTop?"order-warp":""),navbar:"inner"},{default:u((()=>[f(e,{class:"header-box",style:b([{marginTop:"-"+Number(B+88)+"rpx",paddingTop:Number(B+108)+"rpx"}])},{default:u((()=>[f(e,{class:"team-data-box ss-flex ss-col-center ss-row-between",style:{width:"100%"}},{default:u((()=>[f(e,{class:"data-card",style:{width:"100%"}},{default:u((()=>[f(e,{class:"total-item",style:{width:"100%"}},{default:u((()=>[f(e,{class:"item-title",style:{"text-align":"center"}},{default:u((()=>[g("累计推广订单（单）")])),_:1}),f(e,{class:"total-num",style:{"text-align":"center"}},{default:u((()=>[g(_(G.totals),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["style"]),f(l,{bgColor:"#fff"},{default:u((()=>[f(o,{list:I,scrollable:!1,current:G.currentTab,onChange:H},null,8,["current"])])),_:1}),f(e,{class:"order-box"},{default:u((()=>[(m(!0),y(h,null,x(G.pagination.list,(t=>(m(),i(e,{class:"order-item",key:t},{default:u((()=>[f(e,{class:"order-header"},{default:u((()=>[f(e,{class:"no-box ss-flex ss-col-center ss-row-between"},{default:u((()=>[f(p,{class:"order-code"},{default:u((()=>[g("订单编号："+_(t.bizId),1)])),_:2},1024),f(p,{class:"order-state"},{default:u((()=>[g(_(0===t.status?"待结算":1===t.status?"已结算":"已取消")+" ( 佣金 "+_(d(M)(t.price))+" 元 ) ",1)])),_:2},1024)])),_:2},1024),f(e,{class:"order-from ss-flex ss-col-center ss-row-between"},{default:u((()=>[f(e,{class:"from-user ss-flex ss-col-center"},{default:u((()=>[f(p,null,{default:u((()=>[g(_(t.title),1)])),_:2},1024)])),_:2},1024),f(e,{class:"order-time"},{default:u((()=>[g(_(d(a).$helper.timeFormat(t.createTime,"yyyy-mm-dd hh:MM:ss")),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)),0===G.pagination.total?(m(),i(C,{key:0,icon:"/static/order-empty.png",text:"暂无订单"})):w("",!0),G.pagination.total>0?(m(),i($,{key:1,status:G.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:R},null,8,["status"])):w("",!0)])),_:1})])),_:1},8,["class"])}}},[["__scopeId","data-v-3cf70905"]]);export{B as default};
