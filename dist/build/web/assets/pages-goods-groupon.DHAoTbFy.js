import{_ as s}from"./s-empty.CRhUaqAl.js";import{v as o,_ as t,j as e,f as a,w as i,k as l,p as n,t as c,l as d,F as u,m as r,u as f,s as g,A as m,g as p,i as _,C as b,q as k,D as y,z as I,d as x,c as w,o as v,r as S,e as h,y as j,ab as C,ac as $}from"./index-hyULoCvK.js";import{_ as A}from"./su-swiper.DSFqKkf8.js";import{_ as P}from"./s-select-groupon-sku.BNpdX_e7.js";import{S as T}from"./s-layout.BjspkmIk.js";import{d as N,a as V,_ as H,b as U,c as z,e as D}from"./detail-content-card.Duc-oi36.js";import{u as L,d as M,f as O}from"./useGoods.BEOTRLPh.js";import{C as q}from"./combination.CK80mjf4.js";import{_ as F}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{S as G}from"./spu.BiAbryIM.js";import"./su-number-box.DsConDsw.js";import"./favorite.CQSCJpH7.js";import"./comment-item.BnA9HXBe.js";import"./uni-rate.Bo7x1As7.js";import"./su-image.DvirpEaQ.js";import"./mp-html.CSZd6CRr.js";import"./index.B9XYHGVA.js";const J=F({__name:"groupon-card-list",props:{modelValue:{type:Object,default(){}}},emits:["join"],setup(s,{emit:I}){const x=s,w=o({list:[]}),v=I;function S(s){const o=L(s);if(o.ms<=0)return"该团已解散";let t="剩余 ";return t+=`${o.h}时`,t+=`${o.m}分`,t+=`${o.s}秒`,t}return t((async()=>{const{data:s}=await q.getHeadCombinationRecordList(x.modelValue.id,0,10);w.list=s})),(s,o)=>{const t=_,I=b,x=k,h=y;return w.list.length>0?(e(),a(t,{key:0,class:"groupon-list detail-card ss-p-x-20"},{default:i((()=>[l(t,{class:"join-activity ss-flex ss-row-between ss-m-t-30"},{default:i((()=>[l(t,{class:""},{default:i((()=>[n("已有"+c(w.list.length)+"人参与活动",1)])),_:1}),l(I,{class:"cicon-forward"})])),_:1}),(e(!0),d(u,null,r(w.list,((s,o)=>(e(),a(t,{onClick:o=>f(g).$router.go("/pages/activity/groupon/detail",{id:s.id}),key:o,class:"ss-m-t-40 ss-flex ss-row-between border-bottom ss-p-b-30"},{default:i((()=>[l(t,{class:"ss-flex ss-col-center"},{default:i((()=>[l(x,{src:f(g).$url.cdn(s.avatar),class:"user-avatar"},null,8,["src"]),l(t,{class:"user-nickname ss-m-l-20 ss-line-1"},{default:i((()=>[n(c(s.nickname),1)])),_:2},1024)])),_:2},1024),l(t,{class:"ss-flex ss-col-center"},{default:i((()=>[l(t,{class:"ss-flex-col ss-col-bottom ss-m-r-20"},{default:i((()=>[l(t,{class:"title ss-flex ss-m-b-14"},{default:i((()=>[n(" 还差 "),l(t,{class:"num"},{default:i((()=>[n(c(s.userSize-s.userCount)+"人",1)])),_:2},1024),n(" 成团 ")])),_:2},1024),l(t,{class:"end-time"},{default:i((()=>[n(c(S(s.expireTime)),1)])),_:2},1024)])),_:2},1024),l(t,{class:""},{default:i((()=>[l(h,{class:"ss-reset-button go-btn",onClick:m((o=>function(s){v("join",s)}(s)),["stop"])},{default:i((()=>[n(" 去参团 ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):p("",!0)}}},[["__scopeId","data-v-2ff60b94"]]),R=F({__name:"groupon",setup(t){I((s=>({"3b2198f0":f(r),"2c63a7ab":f(m),"483e208f":f(b),"1fd5fc6d":f(F)})));const r=g.$url.css("/static/img/shop/goods/groupon-bg.png"),m=g.$url.css("/static/img/shop/goods/groupon-btn.png"),b=g.$url.css("/static/img/shop/goods/activity-btn-disabled.png"),F=g.$url.css("/static/img/shop/goods/groupon-tip-bg.png");x((()=>{}));const R=o({skeletonLoading:!0,goodsId:0,goodsInfo:{},goodsSwiper:[],showSelectSku:!1,selectedSku:{},activity:{},grouponId:0,grouponNum:0,grouponAction:"create",combinationHeadId:null}),B=w((()=>L(R.activity.endTime)));function E(s){R.selectedSku=s}function Z(){R.showSelectSku=!1}function K(){R.grouponAction="create",R.grouponId=0,R.showSelectSku=!0}function Q(s){R.grouponAction="join",R.grouponId=s.activityId,R.combinationHeadId=s.id,R.grouponNum=s.userSize,R.showSelectSku=!0}function W(s){g.$router.go("/pages/order/confirm",{data:JSON.stringify({order_type:"goods",combinationActivityId:R.activity.id,combinationHeadId:R.combinationHeadId,items:[{skuId:s.id,count:s.count}]})})}const X=w((()=>C(R.activity)?{}:g.$platform.share.getShareInfo({title:R.activity.name,image:g.$url.cdn(R.goodsInfo.picUrl),params:{page:$.GROUPON.value,query:R.activity.id}},{type:"goods",title:R.activity.name,image:g.$url.cdn(R.goodsInfo.picUrl),price:O(R.goodsInfo.price),marketPrice:O(R.goodsInfo.marketPrice)})));return v((async s=>{if(!s.id)return void(R.goodsInfo=null);R.grouponId=s.id;const{code:o,data:t}=await q.getCombinationActivity(R.grouponId);R.activity=t;const{data:e}=await G.getSpuDetail(t.spuId);R.goodsId=e.id,e.price=t.products.reduce(((s,o)=>Math.min(s,o.combinationPrice||1/0)),1/0),e.skus.forEach((s=>{const o=t.products.find((o=>o.skuId===s.id));o?s.price=o.combinationPrice:s.stock=0})),R.skeletonLoading=!1,0===o?(R.goodsInfo=e,R.grouponNum=t.userSize,R.goodsSwiper=M(R.goodsInfo.sliderPicUrls)):R.goodsInfo=null})),(o,t)=>{const r=S(h("s-empty"),s),m=S(h("su-swiper"),A),b=_,I=k,x=S(h("s-select-groupon-sku"),P),w=y,v=S(h("s-layout"),T);return e(),a(v,{onShareAppMessage:X.value,navbar:"goods"},{default:i((()=>[l(N),R.skeletonLoading?(e(),a(V,{key:0})):null===R.goodsInfo||0!==R.activity.status||R.activity.endTime<(new Date).getTime()?(e(),a(r,{key:1,text:"活动不存在或已结束",icon:"/static/soldout-empty.png",showAction:"",actionText:"返回上一页",onClickAction:t[0]||(t[0]=s=>f(g).$router.back())})):(e(),d(u,{key:2},[l(b,{class:"detail-swiper-selector"},{default:i((()=>[l(m,{class:"ss-m-b-14",isPreview:"",list:R.goodsSwiper,dotStyle:"tag",imageMode:"widthFix",dotCur:"bg-mask-40",seizeHeight:750},null,8,["list"]),l(b,{class:"title-card detail-card ss-m-y-14 ss-m-x-20 ss-p-x-20 ss-p-y-34"},{default:i((()=>[l(b,{class:"ss-flex ss-row-between ss-m-b-60"},{default:i((()=>[l(b,null,{default:i((()=>[l(b,{class:"price-box ss-flex ss-col-bottom ss-m-b-18"},{default:i((()=>[l(b,{class:"price-text ss-m-r-16"},{default:i((()=>[n(c(f(O)(R.activity.price||R.goodsInfo.price)),1)])),_:1}),l(b,{class:"tig ss-flex ss-col-center"},{default:i((()=>[l(b,{class:"tig-icon ss-flex ss-col-center ss-row-center"},{default:i((()=>[l(b,{class:"groupon-tag"},{default:i((()=>[l(I,{src:f(g).$url.static("/static/img/shop/goods/groupon-tag.png")},null,8,["src"])])),_:1})])),_:1}),l(b,{class:"tig-title"},{default:i((()=>[n("拼团价")])),_:1})])),_:1})])),_:1}),l(b,{class:"ss-flex ss-row-between"},{default:i((()=>[R.goodsInfo.price?(e(),a(b,{key:0,class:"origin-price ss-flex ss-col-center"},{default:i((()=>[n(" 单买价： "),l(b,{class:"origin-price-text"},{default:i((()=>[n(c(f(O)(R.goodsInfo.marketPrice)),1)])),_:1})])),_:1})):p("",!0)])),_:1})])),_:1}),B.value.ms>0?(e(),a(b,{key:0,class:"countdown-box"},{default:i((()=>[l(b,{class:"countdown-title ss-m-b-20"},{default:i((()=>[n("距结束仅剩")])),_:1}),l(b,{class:"ss-flex countdown-time"},{default:i((()=>[l(b,{class:"ss-flex countdown-h"},{default:i((()=>[n(c(B.value.h),1)])),_:1}),l(b,{class:"ss-m-x-4"},{default:i((()=>[n(":")])),_:1}),l(b,{class:"countdown-num ss-flex ss-row-center"},{default:i((()=>[n(c(B.value.m),1)])),_:1}),l(b,{class:"ss-m-x-4"},{default:i((()=>[n(":")])),_:1}),l(b,{class:"countdown-num ss-flex ss-row-center"},{default:i((()=>[n(c(B.value.s),1)])),_:1})])),_:1})])),_:1})):(e(),a(b,{key:1,class:"countdown-title"},{default:i((()=>[n(" 活动已结束 ")])),_:1}))])),_:1}),l(b,{class:"title-text ss-line-2 ss-m-b-6"},{default:i((()=>[n(c(R.goodsInfo.name),1)])),_:1}),l(b,{class:"subtitle-text ss-line-1"},{default:i((()=>[n(c(R.goodsInfo.introduction),1)])),_:1})])),_:1}),l(b,{class:"detail-cell-card detail-card ss-flex-col"},{default:i((()=>[l(H,{sku:R.selectedSku,onClick:t[1]||(t[1]=s=>R.showSelectSku=!0)},null,8,["sku"])])),_:1}),l(J,{modelValue:R.activity,"onUpdate:modelValue":t[2]||(t[2]=s=>R.activity=s),onJoin:Q},null,8,["modelValue"]),l(x,{show:R.showSelectSku,goodsInfo:R.goodsInfo,grouponAction:R.grouponAction,grouponNum:R.grouponNum,onBuy:W,onChange:E,onClose:Z},null,8,["show","goodsInfo","grouponAction","grouponNum"])])),_:1}),l(U,{class:"detail-comment-selector",goodsId:R.goodsId},null,8,["goodsId"]),l(z,{class:"detail-content-selector",content:R.goodsInfo.description},null,8,["content"]),l(D,{modelValue:R.goodsInfo,"onUpdate:modelValue":t[4]||(t[4]=s=>R.goodsInfo=s)},{default:i((()=>[l(b,{class:"buy-box ss-flex ss-col-center ss-p-r-20"},{default:i((()=>[l(w,{class:"ss-reset-button origin-price-btn ss-flex-col",onClick:t[3]||(t[3]=s=>f(g).$router.go("/pages/goods/index",{id:R.goodsInfo.id}))},{default:i((()=>[l(b,{class:"btn-price"},{default:i((()=>[n(c(f(O)(R.goodsInfo.marketPrice)),1)])),_:1}),l(b,null,{default:i((()=>[n("原价购买")])),_:1})])),_:1}),l(w,{class:j(["ss-reset-button btn-tox ss-flex-col",0===R.activity.status&&0!==R.goodsInfo.stock?"check-btn-box":"disabled-btn-box"]),onClick:K,disabled:0===R.goodsInfo.stock||0!==R.activity.status},{default:i((()=>[l(b,{class:"btn-price"},{default:i((()=>[n(c(f(O)(R.selectedSku.price*R.selectedSku.count||R.activity.price*R.selectedSku.count||R.goodsInfo.price*R.selectedSku.count||R.goodsInfo.price)),1)])),_:1}),R.activity.startTime>(new Date).getTime()?(e(),a(b,{key:0},{default:i((()=>[n("未开始")])),_:1})):R.activity.endTime<=(new Date).getTime()?(e(),a(b,{key:1},{default:i((()=>[n("已结束")])),_:1})):(e(),a(b,{key:2},{default:i((()=>[0===R.goodsInfo.stock?(e(),a(b,{key:0},{default:i((()=>[n("已售罄")])),_:1})):(e(),a(b,{key:1},{default:i((()=>[n("立即开团")])),_:1}))])),_:1}))])),_:1},8,["class","disabled"])])),_:1})])),_:1},8,["modelValue"])],64))])),_:1},8,["onShareAppMessage"])}}},[["__scopeId","data-v-c033b8da"]]);export{R as default};
