import{v as e,c as t,a9 as s,r as o,e as l,j as a,f as i,w as d,k as c,p as n,t as r,u,g as f,A as m,l as p,F as y,m as g,y as _,s as k,q as b,i as h,C as x,D as w,S,aa as C,z as v,x as I,d as T,o as A,a5 as P,a0 as j,a2 as $,a6 as B,ab as M,ac as E}from"./index-Dg3xN8dW.js";import{_ as L}from"./s-empty.B8kqmxKH.js";import{_ as O}from"./su-swiper.C-8RHlap.js";import{_ as V}from"./su-number-box.Jw1uu72z.js";import{c as D,_ as U,S as F}from"./s-layout.CtijfRHG.js";import{c as G,f as q,b as z,g as N,d as R,e as H,h as J,i as Z,j as K}from"./useGoods.4swDD5p_.js";import{_ as Q}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{F as W}from"./favorite.BTwfi_f6.js";import{R as X}from"./rewardActivity.BWYvYjZi.js";import{d as Y,a as ee,_ as te,b as se,c as oe,e as le}from"./detail-content-card.aLJHIfxr.js";import{S as ae}from"./spu.1kgcyaVd.js";import"./index.ByU0YzVi.js";import"./comment-item.CUam6h-D.js";import"./uni-rate.CGIekzSz.js";import"./su-image.FaBriyDt.js";import"./mp-html.D1EWOurx.js";const ie=Q({__name:"s-select-sku",props:{goodsInfo:{type:Object,default(){}},show:{type:Boolean,default:!1}},emits:["change","addCart","buy","close"],setup(C,{emit:v}){const I=v,T=C,A=e({selectedSku:{},currentPropertyArray:[]}),P=G(T.goodsInfo.skus),j=t((()=>{let e=T.goodsInfo.skus;for(let t of e)t.value_id_array=t.properties.map((e=>e.valueId));return e}));function $(){A.selectedSku.id<=0?k.$helper.toast("请选择规格"):A.selectedSku.stock<=0?k.$helper.toast("库存不足"):I("addCart",A.selectedSku)}function B(){A.selectedSku.id<=0?k.$helper.toast("请选择规格"):A.selectedSku.stock<=0?k.$helper.toast("库存不足"):I("buy",A.selectedSku)}function M(e=!1,t=0,s=0){let o=[];if(e)for(let i of j.value)i.stock<=0||i.value_id_array.indexOf(s)>=0&&o.push(i);else o=E();let l=[];for(let i of o)l=l.concat(i.value_id_array);if(l=Array.from(new Set(l)),e){let e=l.indexOf(s);l.splice(e,1)}else A.currentPropertyArray.forEach((e=>{if(""!==e.toString())return;let t=l.indexOf(e);t>=0&&l.splice(t,1)}));let a=[];e?a=[t]:A.currentPropertyArray.forEach(((e,t)=>{""!==e&&a.push(t)}));for(let i in P)if(!(a.indexOf(P[i].id)>=0))for(let e in P[i].values)P[i].values[e].disabled=l.indexOf(P[i].values[e].id)<0}function E(){let e=[];for(let t of j.value){if(t.stock<=0)continue;let s=!0;A.currentPropertyArray.forEach((e=>{""!==e.toString()&&t.value_id_array.indexOf(e)<0&&(s=!1)})),s&&e.push(t)}return e}return s((()=>A.selectedSku),(e=>{I("change",e)}),{immediate:!0,deep:!0}),M(!1),(e,t)=>{const s=b,k=h,v=x,T=w,j=o(l("su-number-box"),V),L=S,O=o(l("su-popup"),D);return a(),i(O,{show:C.show,round:"10",onClose:t[3]||(t[3]=e=>I("close"))},{default:d((()=>[c(k,{class:"ss-modal-box bg-white ss-flex-col"},{default:d((()=>[c(k,{class:"modal-header ss-flex ss-col-center"},{default:d((()=>[c(k,{class:"header-left ss-m-r-30"},{default:d((()=>[c(s,{class:"sku-image",src:A.selectedSku.picUrl||C.goodsInfo.picUrl,mode:"aspectFill"},null,8,["src"])])),_:1}),c(k,{class:"header-right ss-flex-col ss-row-between ss-flex-1"},{default:d((()=>[c(k,{class:"goods-title ss-line-2"},{default:d((()=>[n(r(C.goodsInfo.name),1)])),_:1}),c(k,{class:"header-right-bottom ss-flex ss-col-center ss-row-between"},{default:d((()=>[c(k,{class:"ss-flex"},{default:d((()=>[c(k,{class:"price-text"},{default:d((()=>[n(r(u(q)(A.selectedSku.promotionPrice||A.selectedSku.price||C.goodsInfo.price))+" ",1),A.selectedSku.promotionType>0?(a(),i(v,{key:0},{default:d((()=>[4===A.selectedSku.promotionType?(a(),i(v,{key:0,class:"iconBox"},{default:d((()=>[n(" 限时优惠 ")])),_:1})):6===A.selectedSku.promotionType?(a(),i(v,{key:1,class:"iconBox"},{default:d((()=>[n(" 会员价 ")])),_:1})):f("",!0),c(v,{class:"origin-price-text"},{default:d((()=>[n(r(u(q)(A.selectedSku.price)),1)])),_:1})])),_:1})):f("",!0)])),_:1})])),_:1}),c(k,{class:"stock-text ss-m-l-20"},{default:d((()=>[n(r(u(z)("exact",A.selectedSku.stock||C.goodsInfo.stock)),1)])),_:1})])),_:1})])),_:1})])),_:1}),c(k,{class:"modal-content ss-flex-1"},{default:d((()=>[c(L,{"scroll-y":"true",class:"modal-content-scroll",onTouchmove:t[2]||(t[2]=m((()=>{}),["stop"]))},{default:d((()=>[(a(!0),p(y,null,g(u(P),(e=>(a(),i(k,{class:"sku-item ss-m-b-20",key:e.id},{default:d((()=>[c(k,{class:"label-text ss-m-b-20"},{default:d((()=>[n(r(e.name),1)])),_:2},1024),c(k,{class:"ss-flex ss-col-center ss-flex-wrap"},{default:d((()=>[(a(!0),p(y,null,g(e.values,(t=>(a(),i(T,{class:_(["ss-reset-button spec-btn",[{"ui-BG-Main-Gradient":A.currentPropertyArray[e.id]===t.id},{"disabled-btn":!0===t.disabled}]]),key:t.id,disabled:!0===t.disabled,onClick:s=>function(e,t){let s=!0;void 0!==A.currentPropertyArray[e]&&A.currentPropertyArray[e]===t?(s=!1,A.currentPropertyArray.splice(e,1,"")):A.currentPropertyArray[e]=t;let o=[];A.currentPropertyArray.forEach((e=>{""!==e&&o.push(e)}));let l=E();o.length===P.length&&l.length?(l[0].goods_num=A.selectedSku.goods_num||1,A.selectedSku=l[0]):A.selectedSku={},M(s,e,t)}(e.id,t.id)},{default:d((()=>[n(r(t.name),1)])),_:2},1032,["class","disabled","onClick"])))),128))])),_:2},1024)])),_:2},1024)))),128)),c(k,{class:"buy-num-box ss-flex ss-col-center ss-row-between ss-m-b-40"},{default:d((()=>[c(k,{class:"label-text"},{default:d((()=>[n("购买数量")])),_:1}),c(j,{min:1,max:A.selectedSku.stock,step:1,modelValue:A.selectedSku.goods_num,"onUpdate:modelValue":t[0]||(t[0]=e=>A.selectedSku.goods_num=e),onChange:t[1]||(t[1]=e=>{var t;0!==(t=e)&&A.selectedSku.goods_num!==t&&(A.selectedSku.goods_num=t)})},null,8,["max","modelValue"])])),_:1})])),_:1})])),_:1}),c(k,{class:"modal-footer border-top"},{default:d((()=>[c(k,{class:"buy-box ss-flex ss-col-center ss-flex ss-col-center ss-row-center"},{default:d((()=>[c(T,{class:"ss-reset-button add-btn ui-Shadow-Main",onClick:$},{default:d((()=>[n("加入购物车")])),_:1}),c(T,{class:"ss-reset-button buy-btn ui-Shadow-Main",onClick:B},{default:d((()=>[n("立即购买")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-3e6c6665"]]),de=Q({__name:"s-activity-pop",props:{modelValue:{type:Object,default(){}},show:{type:Boolean,default:!1}},emits:["close"],setup(s,{emit:_}){const b=s,w=_,C=e({rewardActivity:t((()=>b.modelValue.rewardActivity)),couponInfo:t((()=>b.modelValue.couponInfo))});return(e,t)=>{const _=h,b=x,v=S,I=o(l("su-popup"),D);return a(),i(I,{show:s.show,type:"bottom",round:"20",onClose:t[1]||(t[1]=e=>w("close")),showClose:""},{default:d((()=>[c(_,{class:"model-box"},{default:d((()=>[c(_,{class:"title ss-m-t-16 ss-m-l-20 ss-flex"},{default:d((()=>[n("优惠")])),_:1}),C.rewardActivity&&C.rewardActivity.id>0?(a(),i(_,{key:0},{default:d((()=>[c(_,{class:"titleLi"},{default:d((()=>[n("促销")])),_:1}),c(v,{class:"model-content","scroll-y":"","scroll-with-animation":!1,"enable-back-to-top":!0},{default:d((()=>[(a(!0),p(y,null,g(u(N)(C.rewardActivity),((e,s)=>(a(),i(_,{class:"actBox",key:s},{default:d((()=>[c(_,{class:"boxCont ss-flex ss-col-top ss-m-b-40",onClick:t[0]||(t[0]=e=>{return t=C.rewardActivity,void k.$router.go("/pages/activity/index",{activityId:t.id});var t})},{default:d((()=>[c(_,{class:"model-content-tag ss-flex ss-row-center"},{default:d((()=>[n(r(e.name),1)])),_:2},1024),c(_,{class:"model-content-title"},{default:d((()=>[c(_,{class:"contBu"},{default:d((()=>[n(r(e.values.join(";")),1)])),_:2},1024),c(_,{class:"ss-m-b-24 cotBu-txt"},{default:d((()=>[n(r(u(k).$helper.timeFormat(C.rewardActivity.startTime,"yyyy.mm.dd"))+" - "+r(u(k).$helper.timeFormat(C.rewardActivity.endTime,"yyyy.mm.dd")),1)])),_:1})])),_:2},1024),c(b,{class:"cicon-forward"})])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):f("",!0),c(_,{class:"titleLi"},{default:d((()=>[n("可领优惠券")])),_:1}),C.couponInfo.length?(a(),i(v,{key:1,class:"model-content","scroll-y":"","scroll-with-animation":!1,"enable-back-to-top":!0},{default:d((()=>[(a(!0),p(y,null,g(C.couponInfo,(e=>(a(),i(_,{class:"actBox",key:e.id},{default:d((()=>[c(_,{class:"boxCont ss-flex ss-col-top ss-m-b-40"},{default:d((()=>[c(_,{class:"model-content-tag2"},{default:d((()=>[c(_,{class:"usePrice"},{default:d((()=>[n(" ￥"+r(u(q)(e.discountPrice)),1)])),_:2},1024),c(_,{class:"impose"},{default:d((()=>[n(" 满￥"+r(u(q)(e.usePrice))+"可用 ",1)])),_:2},1024)])),_:2},1024),c(_,{class:"model-content-title2"},{default:d((()=>[c(_,{class:"contBu"},{default:d((()=>[n(r(e.name),1)])),_:2},1024),c(_,{class:"ss-m-b-24 cotBu-txt"},{default:d((()=>[n(r(1==e.validityType?u(k).$helper.timeFormat(e.validStartTime,"yyyy-mm-dd")+"-"+u(k).$helper.timeFormat(e.validEndTime,"yyyy-mm-dd"):"领取后"+e.fixedStartTerm+"-"+e.fixedEndTerm+"天可用"),1)])),_:2},1024)])),_:2},1024),e.canTake?(a(),i(_,{key:0,class:"coupon",onClick:m((t=>{return s=e.id,void w("get",s);var s}),["stop"])},{default:d((()=>[n(" 立即领取 ")])),_:2},1032,["onClick"])):(a(),i(_,{key:1,class:"coupon2"},{default:d((()=>[n(" 已领取 ")])),_:1}))])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(a(),i(_,{key:2,class:"nullBox"},{default:d((()=>[n(" 暂无可领优惠券 ")])),_:1}))])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-dfb72acd"]]),ce=e=>C({url:"/promotion/activity/list-by-spu-id",method:"GET",params:{spuId:e}}),ne=Q({__name:"detail-activity-tip",props:{activityList:{type:Array,default:()=>[]}},setup(e){v((e=>({ea6cf000:u(t),"6a42e1af":u(s)})));const t=k.$url.css("/static/img/shop/goods/seckill-tip-bg.png"),s=k.$url.css("/static/img/shop/goods/groupon-tip-bg.png"),m=e;return(e,t)=>{const s=b,x=h,S=w,C=o(l("su-fixed"),U);return a(),i(C,{bottom:"",placeholder:"",val:44},{default:d((()=>[c(x,null,{default:d((()=>[(a(!0),p(y,null,g(m.activityList,(e=>(a(),i(x,{key:e.id},{default:d((()=>[c(x,{class:_(["activity-box ss-p-x-38 ss-flex ss-row-between ss-col-center",1===e.type?"seckill-box":"groupon-box"])},{default:d((()=>[c(x,{class:"activity-title ss-flex"},{default:d((()=>[c(x,{class:"ss-m-r-16"},{default:d((()=>[1===e.type?(a(),i(s,{key:0,src:u(k).$url.static("/static/img/shop/goods/seckill-icon.png"),class:"activity-icon"},null,8,["src"])):3===e.type?(a(),i(s,{key:1,src:u(k).$url.static("/static/img/shop/goods/groupon-icon.png"),class:"activity-icon"},null,8,["src"])):f("",!0)])),_:2},1024),c(x,null,{default:d((()=>[n("该商品正在参与"+r(e.name)+"活动",1)])),_:2},1024)])),_:2},1024),c(S,{class:"ss-reset-button activity-go",onClick:t=>function(e){const t=e.type,s=1===t?"seckill":2===t?"TODO 拼团":"groupon";k.$router.go(`/pages/goods/${s}`,{id:e.id})}(e)},{default:d((()=>[n(" GO ")])),_:2},1032,["onClick"])])),_:2},1032,["class"])])),_:2},1024)))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-07464290"]]);const re=Q({name:"countDown",props:{justifyLeft:{type:String,default:""},tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0},isCol:{type:Boolean,default:!1},bgColor:{type:Object,default:null}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){let e=this;function t(){let t=e.datatime-Date.parse(new Date)/1e3,s=0,o=0,l=0,a=0;t>0?(s=!0===e.isDay?Math.floor(t/86400):0,o=Math.floor(t/3600)-24*s,l=Math.floor(t/60)-24*s*60-60*o,a=Math.floor(t)-24*s*60*60-60*o*60-60*l,o<=9&&(o="0"+o),l<=9&&(l="0"+l),a<=9&&(a="0"+a),e.day=s,e.hour=o,e.minute=l,e.second=a):(e.day="00",e.hour="00",e.minute="00",e.second="00")}t(),setInterval(t,1e3)}}},[["render",function(e,t,s,o,l,u){const m=x,p=h;return a(),i(p,{class:"time",style:I(s.justifyLeft)},{default:d((()=>[s.tipText?(a(),i(m,{key:0,class:""},{default:d((()=>[n(r(s.tipText),1)])),_:1})):f("",!0),!0===s.isDay?(a(),i(m,{key:1,class:"styleAll p6",style:I({background:s.bgColor.bgColor,color:s.bgColor.Color})},{default:d((()=>[n(r(e.day)+r(s.bgColor.isDay?"天":""),1)])),_:1},8,["style"])):f("",!0),s.dayText?(a(),i(m,{key:2,class:"timeTxt",style:I({width:s.bgColor.timeTxtwidth,color:s.bgColor.bgColor})},{default:d((()=>[n(r(s.dayText),1)])),_:1},8,["style"])):f("",!0),c(m,{class:_(["styleAll",s.isCol?"timeCol":""]),style:I({background:s.bgColor.bgColor,color:s.bgColor.Color,width:s.bgColor.width})},{default:d((()=>[n(r(e.hour),1)])),_:1},8,["class","style"]),s.hourText?(a(),i(m,{key:3,class:_(["timeTxt",s.isCol?"whit":""]),style:I({width:s.bgColor.timeTxtwidth,color:s.bgColor.bgColor})},{default:d((()=>[n(r(s.hourText),1)])),_:1},8,["class","style"])):f("",!0),c(m,{class:_(["styleAll",s.isCol?"timeCol":""]),style:I({background:s.bgColor.bgColor,color:s.bgColor.Color,width:s.bgColor.width})},{default:d((()=>[n(r(e.minute),1)])),_:1},8,["class","style"]),s.minuteText?(a(),i(m,{key:4,class:_(["timeTxt",s.isCol?"whit":""]),style:I({width:s.bgColor.timeTxtwidth,color:s.bgColor.bgColor})},{default:d((()=>[n(r(s.minuteText),1)])),_:1},8,["class","style"])):f("",!0),c(m,{class:_(["styleAll",s.isCol?"timeCol":""]),style:I({background:s.bgColor.bgColor,color:s.bgColor.Color,width:s.bgColor.width})},{default:d((()=>[n(r(e.second),1)])),_:1},8,["class","style"]),s.secondText?(a(),i(m,{key:5,class:"timeTxt"},{default:d((()=>[n(r(s.secondText),1)])),_:1})):f("",!0)])),_:1},8,["style"])}],["__scopeId","data-v-429a6cd3"]]),ue=Q({__name:"index",setup(s){T((()=>{}));const m={bgColor:"#E93323",Color:"#fff",width:"44rpx",timeTxtwidth:"16rpx",isDay:!0},_=t((()=>k.$store("user").isLogin)),S=e({goodsId:0,skeletonLoading:!0,goodsInfo:{},showSelectSku:!1,selectedSku:{},settlementSku:{},showModel:!1,couponInfo:[],showActivityModel:!1,rewardActivity:{},activityList:[]});function C(e){S.selectedSku=e,S.settlementSku=e}function v(e){e.id?k.$store("cart").add(e):k.$helper.toast("请选择商品规格")}function I(e){e.id?k.$router.go("/pages/order/confirm",{data:JSON.stringify({items:[{skuId:e.id,count:e.goods_num,categoryId:S.goodsInfo.categoryId}]})}):k.$helper.toast("请选择商品规格")}function V(){S.showActivityModel=!0}async function D(e){const{code:t}=await P.takeCoupon(e);0===t&&(B({title:"领取成功"}),setTimeout((()=>{G()}),1e3))}const U=t((()=>M(S.goodsInfo)?{}:k.$platform.share.getShareInfo({title:S.goodsInfo.name,image:k.$url.cdn(S.goodsInfo.picUrl),desc:S.goodsInfo.introduction,params:{page:E.GOODS.value,query:S.goodsInfo.id}},{type:"goods",title:S.goodsInfo.name,image:k.$url.cdn(S.goodsInfo.picUrl),price:q(S.goodsInfo.price),original_price:q(S.goodsInfo.marketPrice)})));async function G(){const{code:e,data:t}=await P.getCouponTemplateList(S.goodsId,2,10);0===e&&(S.couponInfo=t)}async function z(e){let{data:t,code:s}=await j.getSettlementProduct(e);0===s&&1===t.length&&(t=t[0],S.goodsInfo.skus.forEach((e=>{t.skus.forEach((t=>{e.id===t.id&&(e.promotionType=t.promotionType,e.promotionPrice=t.promotionPrice,e.promotionId=t.promotionId,e.promotionEndTime=t.promotionEndTime)}))})),S.settlementSku=S.goodsInfo.skus.filter((e=>e.stock>0&&e.promotionPrice>0)).reduce(((e,t)=>e.promotionPrice<t.promotionPrice?e:t),[]),t.rewardActivity&&(S.rewardActivity=t.rewardActivity,async function(e){const{code:t,data:s}=await X.getRewardActivity(e);0===t&&(S.rewardActivity.startTime=s.startTime,S.rewardActivity.endTime=s.endTime)}(S.rewardActivity.id)))}return A((e=>{e.id?(S.goodsId=e.id,ae.getSpuDetail(S.goodsId).then((e=>{0===e.code&&e.data?(S.skeletonLoading=!1,S.goodsInfo=e.data,_.value&&W.isFavoriteExists(S.goodsId,"goods").then((e=>{0===e.code&&(S.goodsInfo.favorite=e.data)}))):S.goodsInfo=null})),G(),ce(S.goodsId).then((e=>{0===e.code&&(S.activityList=e.data)})),z(S.goodsId)):S.goodsInfo=null})),(e,t)=>{const s=o(l("s-empty"),L),_=o(l("su-swiper"),O),T=b,A=h,P=x,j=o(l("s-select-sku"),ie),B=w,M=o(l("s-activity-pop"),de),E=o(l("s-layout"),F);return a(),i(A,null,{default:d((()=>[c(E,{onShareAppMessage:U.value,navbar:"goods"},{default:d((()=>[c(Y),S.skeletonLoading?(a(),i(ee,{key:0})):null===S.goodsInfo?(a(),i(s,{key:1,text:"商品不存在或已下架",icon:"/static/soldout-empty.png",showAction:"",actionText:"再逛逛",actionUrl:"/pages/goods/list"})):(a(),p(y,{key:2},[c(A,{class:"detail-swiper-selector"},{default:d((()=>[c(_,{class:"ss-m-b-14",isPreview:"",list:u(R)(S.goodsInfo.sliderPicUrls),otStyle:"tag",imageMode:"widthFix",dotCur:"bg-mask-40",seizeHeight:750},null,8,["list"]),S.settlementSku&&S.settlementSku.id&&S.settlementSku.promotionPrice?(a(),i(A,{key:0,class:"discount"},{default:d((()=>[c(T,{class:"disImg",src:u(k).$url.static("/static/img/shop/goods/dis.png")},null,8,["src"]),c(A,{class:"discountCont"},{default:d((()=>[c(A,{class:"disContT"},{default:d((()=>[c(A,{class:"disContT1"},{default:d((()=>[c(A,{class:"disContT1P"},{default:d((()=>[n(" ￥"+r(u(q)(S.settlementSku.promotionPrice)),1)])),_:1}),c(A,{class:"disContT1End"},{default:d((()=>[n(" 直降￥ "+r(u(q)(S.settlementSku.price-S.settlementSku.promotionPrice)),1)])),_:1})])),_:1}),4===S.settlementSku.promotionType?(a(),i(A,{key:0,class:"disContT2"},{default:d((()=>[n(" 限时折扣 ")])),_:1})):6===S.settlementSku.promotionType?(a(),i(A,{key:1,class:"disContT2"},{default:d((()=>[n(" 会员折扣 ")])),_:1})):f("",!0)])),_:1}),c(A,{class:"disContB"},{default:d((()=>[c(A,{class:"disContB1"},{default:d((()=>[n(" 价格：￥"+r(u(q)(S.settlementSku.price))+" 丨 剩余： "+r(S.settlementSku.stock),1)])),_:1}),S.settlementSku.promotionEndTime>0?(a(),i(A,{key:0,class:"disContB2"},{default:d((()=>[n(" 距结束仅剩 "),c(re,{tipText:" ",bgColor:m,dayText:":",hourText:":",minuteText:":",secondText:" ",datatime:S.settlementSku.promotionEndTime/1e3,isDay:!1},null,8,["datatime"])])),_:1})):f("",!0)])),_:1})])),_:1})])),_:1})):f("",!0),c(A,{class:"title-card detail-card ss-p-y-30 ss-p-x-20"},{default:d((()=>[S.settlementSku.promotionPrice?f("",!0):(a(),i(A,{key:0,class:"ss-flex ss-row-between ss-col-center ss-m-b-26"},{default:d((()=>[c(A,{class:"price-box ss-flex ss-col-bottom"},{default:d((()=>[c(A,{class:"price-text ss-m-r-16"},{default:d((()=>[n(r(u(q)(S.selectedSku.price||S.goodsInfo.price)),1)])),_:1}),S.goodsInfo.marketPrice>S.goodsInfo.price?(a(),i(A,{key:0,class:"origin-price-text"},{default:d((()=>[n(r(u(q)(S.selectedSku.marketPrice||S.goodsInfo.marketPrice)),1)])),_:1})):f("",!0)])),_:1}),c(A,{class:"sales-text"},{default:d((()=>[n(r(u(H)("exact",S.goodsInfo.salesCount)),1)])),_:1})])),_:1})),c(A,{class:"discounts-box ss-flex ss-row-between ss-m-b-28"},{default:d((()=>[(a(!0),p(y,null,g(S.couponInfo.slice(0,1),(e=>(a(),i(A,{class:"tag ss-m-r-10",key:e.id,onClick:V},{default:d((()=>[n(" [劵]满"+r(u(Z)(e.usePrice))+"元"+r(1===e.discountType?"减"+u(Z)(e.discountPrice)+"元":"打"+u(K)(e.discountPercent)+"折"),1)])),_:2},1024)))),128)),$("div",{class:"tag-content"},[c(A,{class:"tag-box ss-flex"},{default:d((()=>[(a(!0),p(y,null,g(u(J)(S.rewardActivity).slice(0,3-S.couponInfo.slice(0,1).length),(e=>(a(),i(A,{key:e,class:"tag ss-m-r-10",onClick:V},{default:d((()=>[c(P,null,{default:d((()=>[n(r(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})]),S.couponInfo.length?(a(),i(A,{key:0,class:"get-coupon-box ss-flex ss-col-center ss-m-l-20",onClick:V},{default:d((()=>[c(A,{class:"discounts-title ss-m-r-8"},{default:d((()=>[n("领券")])),_:1}),c(P,{class:"cicon-forward"})])),_:1})):f("",!0)])),_:1}),c(A,{class:"title-text ss-line-2 ss-m-b-6"},{default:d((()=>[n(r(S.goodsInfo.name),1)])),_:1}),c(A,{class:"subtitle-text ss-line-1"},{default:d((()=>[n(r(S.goodsInfo.introduction),1)])),_:1})])),_:1}),c(A,{class:"detail-cell-card detail-card ss-flex-col"},{default:d((()=>[c(te,{modelValue:S.selectedSku.goods_sku_text,"onUpdate:modelValue":t[0]||(t[0]=e=>S.selectedSku.goods_sku_text=e),sku:S.selectedSku,onClick:t[1]||(t[1]=e=>S.showSelectSku=!0)},null,8,["modelValue","sku"])])),_:1}),c(j,{goodsInfo:S.goodsInfo,show:S.showSelectSku,onAddCart:v,onBuy:I,onChange:C,onClose:t[2]||(t[2]=e=>S.showSelectSku=!1)},null,8,["goodsInfo","show"])])),_:1}),c(se,{class:"detail-comment-selector",goodsId:S.goodsId},null,8,["goodsId"]),c(oe,{class:"detail-content-selector",content:S.goodsInfo.description},null,8,["content"]),S.activityList.length>0?(a(),i(ne,{key:0,"activity-list":S.activityList},null,8,["activity-list"])):f("",!0),c(le,{modelValue:S.goodsInfo,"onUpdate:modelValue":t[5]||(t[5]=e=>S.goodsInfo=e)},{default:d((()=>[S.goodsInfo.stock>0?(a(),i(A,{key:0,class:"buy-box ss-flex ss-col-center ss-p-r-20"},{default:d((()=>[c(B,{class:"ss-reset-button add-btn ui-Shadow-Main",onClick:t[3]||(t[3]=e=>S.showSelectSku=!0)},{default:d((()=>[n(" 加入购物车 ")])),_:1}),c(B,{class:"ss-reset-button buy-btn ui-Shadow-Main",onClick:t[4]||(t[4]=e=>S.showSelectSku=!0)},{default:d((()=>[n(" 立即购买 ")])),_:1})])),_:1})):(a(),i(A,{key:1,class:"buy-box ss-flex ss-col-center ss-p-r-20"},{default:d((()=>[c(B,{class:"ss-reset-button disabled-btn",disabled:""},{default:d((()=>[n(" 已售罄 ")])),_:1})])),_:1}))])),_:1},8,["modelValue"]),c(M,{modelValue:S,"onUpdate:modelValue":t[6]||(t[6]=e=>S=e),show:S.showActivityModel,onClose:t[7]||(t[7]=e=>S.showActivityModel=!1),onGet:D},null,8,["modelValue","show"])],64))])),_:1},8,["onShareAppMessage"])])),_:1})}}},[["__scopeId","data-v-68ca2507"]]);export{ue as default};
