import{z as t,s as e,v as s,aq as l,o as a,r as o,e as i,f as c,w as n,u as d,j as r,k as p,p as u,t as f,g,l as m,m as _,F as C,ag as k,ah as x,A as h,C as b,i as y,D as M,E as j,G as w}from"./index-Bw34y8dl.js";import{_ as L}from"./s-goods-item.Z6G12QLx.js";import{_ as v,S}from"./s-layout.BnNaBtzy.js";import{_ as A}from"./uni-load-more.DvM90YQN.js";import{_ as F}from"./s-empty.BB0R8w5g.js";import{F as G}from"./favorite.C_hQhoEr.js";import{r as I}from"./index.D2olNfS9.js";import{_ as N}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as z}from"./lodash.default.BQAopBuf.js";import"./useGoods.s-Unc0ZH.js";import"./min.C0kljPR4.js";const B=N({__name:"goods-collect",setup(N){t((t=>({"2658b38c":d(B)})));const B=e.$platform.navbar,T=s({pagination:{list:[],total:0,pageNo:1,pageSize:6},loadStatus:"",editMode:!1,selectedCollectList:[],selectAll:!1});async function $(){T.loadStatus="loading";const{code:t,data:e}=await G.getFavoritePage({pageNo:T.pagination.pageNo,pageSize:T.pagination.pageSize});0===t&&(T.pagination.list=z.concat(T.pagination.list,e.list),T.pagination.total=e.total,T.loadStatus=T.pagination.list.length<T.pagination.total?"more":"noMore")}const q=t=>{T.selectedCollectList.includes(t)?T.selectedCollectList.splice(T.selectedCollectList.indexOf(t),1):T.selectedCollectList.push(t),T.selectAll=T.selectedCollectList.length===T.pagination.list.length},D=()=>{T.selectAll=!T.selectAll,T.selectAll?T.selectedCollectList=T.pagination.list.map((t=>t.spuId)):T.selectedCollectList=[]};async function E(){if(T.selectedCollectList){for(const t of T.selectedCollectList)await G.deleteFavorite(t);T.editMode=!1,T.selectedCollectList=[],T.selectAll=!1,I(T.pagination),await $()}}function O(){"noMore"!==T.loadStatus&&(T.pagination.pageNo++,$())}return l((()=>{O()})),a((()=>{$()})),(t,s)=>{const l=b,a=y,G=M,I=j,N=w,z=o(i("s-goods-item"),L),B=o(i("su-fixed"),v),$=o(i("uni-load-more"),A),P=o(i("s-empty"),F),U=o(i("s-layout"),S);return r(),c(U,{title:"商品收藏"},{default:n((()=>[p(a,{class:"cart-box ss-flex ss-flex-col ss-row-between"},{default:n((()=>[p(a,{class:"cart-header ss-flex ss-col-center ss-row-between ss-p-x-30"},{default:n((()=>[p(a,{class:"header-left ss-flex ss-col-center ss-font-26"},{default:n((()=>[u(" 共 "),p(l,{class:"goods-number ui-TC-Main ss-flex"},{default:n((()=>[u(f(T.pagination.total),1)])),_:1}),u(" 件商品 ")])),_:1}),p(a,{class:"header-right"},{default:n((()=>[T.editMode&&T.pagination.total?(r(),c(G,{key:0,class:"ss-reset-button",onClick:s[0]||(s[0]=t=>T.editMode=!1)},{default:n((()=>[u(" 取消 ")])),_:1})):g("",!0),!T.editMode&&T.pagination.total?(r(),c(G,{key:1,class:"ss-reset-button ui-TC-Main",onClick:s[1]||(s[1]=t=>T.editMode=!0)},{default:n((()=>[u(" 编辑 ")])),_:1})):g("",!0)])),_:1})])),_:1}),p(a,{class:"cart-content"},{default:n((()=>[(r(!0),m(C,null,_(T.pagination.list,(t=>(r(),c(a,{class:"goods-box ss-r-10 ss-m-b-14",key:t.id},{default:n((()=>[p(a,{class:"ss-flex ss-col-center"},{default:n((()=>[T.editMode?(r(),c(N,{key:0,class:"check-box ss-flex ss-col-center ss-p-l-10",onClick:e=>q(t.spuId)},{default:n((()=>[p(I,{checked:T.selectedCollectList.includes(t.spuId),color:"var(--ui-BG-Main)",style:{transform:"scale(0.8)"},onClick:h((e=>q(t.spuId)),["stop"])},null,8,["checked","onClick"])])),_:2},1032,["onClick"])):g("",!0),p(z,{title:t.spuName,img:t.picUrl,price:t.price,priceColor:"#FF3000",titleWidth:400,onClick:s=>d(e).$router.go("/pages/goods/index",{id:t.spuId})},null,8,["title","img","price","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),k(p(B,{bottom:"",val:0,placeholder:""},{default:n((()=>[p(a,{class:"cart-footer ss-flex ss-col-center ss-row-between ss-p-x-30 border-bottom"},{default:n((()=>[p(a,{class:"footer-left ss-flex ss-col-center"},{default:n((()=>[p(N,{class:"check-box ss-flex ss-col-center ss-p-r-30",onClick:D},{default:n((()=>[p(I,{checked:T.selectAll,color:"var(--ui-BG-Main)",style:{transform:"scale(0.7)"},onClick:h(D,["stop"])},null,8,["checked"]),p(a,null,{default:n((()=>[u(" 全选 ")])),_:1})])),_:1})])),_:1}),p(a,{class:"footer-right"},{default:n((()=>[p(G,{class:"ss-reset-button ui-BG-Main-Gradient pay-btn ss-font-28 ui-Shadow-Main",onClick:E},{default:n((()=>[u(" 取消收藏 ")])),_:1})])),_:1})])),_:1})])),_:1},512),[[x,T.editMode]])])),_:1}),T.pagination.total>0?(r(),c($,{key:0,status:T.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:O},null,8,["status"])):g("",!0),0===T.pagination.total?(r(),c(P,{key:1,text:"暂无收藏",icon:"/static/collect-empty.png"})):g("",!0)])),_:1})}}},[["__scopeId","data-v-00fb8a85"]]);export{B as default};
