import{_ as s}from"./s-empty.CKgdhVxR.js";import{z as o,s as e,d as t,v as a,c as i,U as l,o as c,r as n,e as r,f as d,w as u,u as p,a1 as g,j as m,k as f,l as k,p as b,t as I,g as _,y as v,F as y,ab as h,ac as x,q as S,C as w,i as j,D as P}from"./index-BKnI5veo.js";import{_ as $}from"./su-swiper.DCS9Y0Oc.js";import{_ as C}from"./s-select-seckill-sku.C_DHy75A.js";import{S as U}from"./s-layout.Drz3FS_-.js";import{d as M,k as V,f as A}from"./useGoods.BPUYIEuD.js";import{d as L,a as N,_ as O,b as T,c as q,e as z}from"./detail-content-card.BG-cvCmY.js";import{S as D}from"./spu.C2L0F5oY.js";import{P as F}from"./point.C4796Nkd.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./su-number-box.C9HEzpik.js";import"./min.CY-78xFv.js";import"./index.lUf8TWMy.js";import"./favorite.C9EmSqVO.js";import"./comment-item.DrFKWgJE.js";import"./uni-rate.Di3vWHKx.js";import"./su-image.u7eqrTdb.js";import"./mp-html.DSU7F1t9.js";const E=B({__name:"point",setup(B){o((s=>({"732d4420":p(E),"9d4dc3da":p(G),"61aaa212":p(H),"713eb5b4":p(J),b24c0256:p(Z)})));const E=e.$url.css("/static/img/shop/goods/score-bg.png"),G=e.$url.css("/static/img/shop/goods/seckill-btn.png"),H=e.$url.css("/static/img/shop/goods/activity-btn-disabled.png"),J=e.$url.css("/static/img/shop/goods/seckill-tip-bg.png"),Z=e.$url.css("/static/img/shop/goods/groupon-tip-bg.png");t((()=>{}));const K=a({skeletonLoading:!0,goodsInfo:{},showSelectSku:!1,goodsSwiper:[],selectedSku:{},showModel:!1,total:0,price:""});function Q(s){K.selectedSku=s}function R(s){e.$router.go("/pages/order/confirm",{data:JSON.stringify({order_type:"goods",buy_type:"point",pointActivityId:X.value.id,items:[{skuId:s.id,count:s.count}]})})}const W=i((()=>h(p(X))?{}:e.$platform.share.getShareInfo({title:X.value.name,image:e.$url.cdn(K.goodsInfo.picUrl),params:{page:x.POINT.value,query:X.value.id}},{type:"goods",title:X.value.name,image:e.$url.cdn(K.goodsInfo.picUrl),price:(Y.value.price||0)+` + ${Y.value.point} 积分`,marketPrice:A(K.goodsInfo.marketPrice)}))),X=l(),Y=i((()=>{if(!h(K.selectedSku)){const s=K.selectedSku;return{point:s.point,price:s.pointPrice?A(s.pointPrice):""}}return{point:X.value.point,price:X.value.price?A(X.value.price):""}}));i((()=>{let s=`￥${A(K.goodsInfo.price)}`;if(!h(K.selectedSku)){const o=K.selectedSku;s=`${o.point}${o.pointPrice?`+￥${A(o.pointPrice)}`:""}`}return s}));const ss=async s=>{const{data:o}=await D.getSpuDetail(s);o.activity_type=g.POINT.type,K.goodsInfo=o,K.goodsInfo.stock=Math.min(o.stock,X.value.stock),K.goodsSwiper=M(K.goodsInfo.sliderPicUrls),o.skus.forEach((s=>{const o=X.value.products.find((o=>o.skuId===s.id));o?(s.point=o.point,s.pointPrice=o.price,s.stock=Math.min(s.stock,o.stock),s.limitCount=o.count):s.stock=0})),K.skeletonLoading=!1};return c((s=>{s.id?(async s=>{const{data:o}=await F.getPointActivity(s);X.value=o,await ss(o.spuId)})(s.id):K.goodsInfo=null})),(o,t)=>{const a=n(r("s-empty"),s),i=n(r("su-swiper"),$),l=S,c=w,h=j,x=n(r("s-select-seckill-sku"),C),M=P,D=n(r("s-layout"),U);return m(),d(D,{onShareAppMessage:W.value,navbar:"goods"},{default:u((()=>[f(L),K.skeletonLoading?(m(),d(N,{key:0})):null===K.goodsInfo||K.goodsInfo.activity_type!==p(g).POINT.type?(m(),d(a,{key:1,text:"活动不存在或已结束",icon:"/static/soldout-empty.png",showAction:"",actionText:"再逛逛",actionUrl:"/pages/goods/list"})):(m(),k(y,{key:2},[f(h,{class:"detail-swiper-selector"},{default:u((()=>[f(i,{class:"ss-m-b-14",isPreview:"",list:K.goodsSwiper,dotStyle:"tag",imageMode:"widthFix",dotCur:"bg-mask-40",seizeHeight:750},null,8,["list"]),f(h,{class:"title-card detail-card ss-p-y-40 ss-p-x-20"},{default:u((()=>[f(h,{class:"ss-flex ss-row-between ss-col-center ss-m-b-18"},{default:u((()=>[f(h,{class:"price-box ss-flex ss-col-bottom"},{default:u((()=>[f(l,{src:p(e).$url.static("/static/img/shop/goods/score1.svg"),class:"point-img"},null,8,["src"]),f(c,{class:"point-text ss-m-r-16"},{default:u((()=>[b(I(Y.value.point)+" "+I(Y.value.price&&0!==Y.value.price?`+￥${Y.value.price}`:""),1)])),_:1})])),_:1}),f(h,{class:"sales-text"},{default:u((()=>[b(I(p(V)(K.goodsInfo.sales_show_type,K.goodsInfo.sales)),1)])),_:1})])),_:1}),K.goodsInfo.marketPrice?(m(),d(h,{key:0,class:"origin-price-text ss-m-b-60"},{default:u((()=>[b(" 原价：￥"+I(p(A)(K.selectedSku.marketPrice||K.goodsInfo.marketPrice)),1)])),_:1})):_("",!0),f(h,{class:"title-text ss-line-2 ss-m-b-6"},{default:u((()=>[b(I(K.goodsInfo.name||""),1)])),_:1}),f(h,{class:"subtitle-text ss-line-1"},{default:u((()=>[b(I(K.goodsInfo.introduction),1)])),_:1})])),_:1}),f(h,{class:"detail-cell-card detail-card ss-flex-col"},{default:u((()=>[f(O,{sku:K.selectedSku,onClick:t[0]||(t[0]=s=>K.showSelectSku=!0)},null,8,["sku"])])),_:1}),f(x,{modelValue:K.goodsInfo,"onUpdate:modelValue":t[1]||(t[1]=s=>K.goodsInfo=s),show:K.showSelectSku,"single-limit-count":X.value.singleLimitCount,onBuy:R,onChange:Q,onClose:t[2]||(t[2]=s=>K.showSelectSku=!1)},null,8,["modelValue","show","single-limit-count"])])),_:1}),f(T,{class:"detail-comment-selector",goodsId:K.goodsInfo.id},null,8,["goodsId"]),f(q,{class:"detail-content-selector",content:K.goodsInfo.description},null,8,["content"]),f(z,{modelValue:K.goodsInfo,"onUpdate:modelValue":t[5]||(t[5]=s=>K.goodsInfo=s)},{default:u((()=>[f(h,{class:"buy-box ss-flex ss-col-center ss-p-r-20"},{default:u((()=>[K.goodsInfo.marketPrice?(m(),d(M,{key:0,class:"ss-reset-button origin-price-btn ss-flex-col",onClick:t[3]||(t[3]=s=>p(e).$router.go("/pages/goods/index",{id:K.goodsInfo.id}))},{default:u((()=>[f(h,null,{default:u((()=>[f(h,{class:"btn-price"},{default:u((()=>[b(I(p(A)(K.goodsInfo.marketPrice)),1)])),_:1}),f(h,null,{default:u((()=>[b("原价购买")])),_:1})])),_:1})])),_:1})):_("",!0),f(M,{class:v(["ss-reset-button btn-box ss-flex-col",0!=K.goodsInfo.stock?"check-btn-box":"disabled-btn-box"]),onClick:t[4]||(t[4]=s=>K.showSelectSku=!0),disabled:0===K.goodsInfo.stock},{default:u((()=>[f(h,{class:"price-box ss-flex"},{default:u((()=>[f(l,{src:p(e).$url.static("/static/img/shop/goods/score1.svg"),style:{width:"36rpx",height:"36rpx",margin:"0 4rpx"}},null,8,["src"]),f(c,{class:"point-text ss-m-r-16"},{default:u((()=>[b(I(Y.value.point)+" "+I(Y.value.price&&0!==Y.value.price?`+￥${Y.value.price}`:""),1)])),_:1})])),_:1}),0===K.goodsInfo.stock?(m(),d(h,{key:0},{default:u((()=>[b("已售罄")])),_:1})):(m(),d(h,{key:1},{default:u((()=>[b("立即兑换")])),_:1}))])),_:1},8,["class","disabled"])])),_:1})])),_:1},8,["modelValue"])],64))])),_:1},8,["onShareAppMessage"])}}},[["__scopeId","data-v-e53b70cc"]]);export{E as default};
