import{v as e,U as s,r as t,e as a,j as r,f as o,w as l,k as d,p as c,x as n,g as i,u as f,s as u,t as p,at as m,i as _,q as y,C as g,z as I,n as x,o as b,a0 as k,l as v,m as h,F as w,M as S,ab as $,D as T,A as C}from"./index-BKnI5veo.js";import{_ as P}from"./s-goods-item.Lap4cogc.js";import{g as j,_ as N,S as q}from"./s-layout.Drz3FS_-.js";import{l as O,m as U,n as z,f as M}from"./useGoods.BPUYIEuD.js";import{D as A}from"./delivery.ADHtUxgs.js";import{_ as D}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./index.lUf8TWMy.js";const R=D({__name:"pickUpVerify",props:{orderInfo:{type:Object,default(){}},systemStore:{type:Object,default(){}}},setup(I,{expose:x}){const b=I,k=e({qrcodeSize:145}),v=()=>{console.log(b.systemStore),b.systemStore.latitude&&b.systemStore.longitude?m({latitude:b.systemStore.latitude,longitude:b.systemStore.longitude,scale:8,name:b.systemStore.name,address:b.systemStore.areaName+b.systemStore.detailAddress}):u.$helper.toast("缺少经纬度信息无法查看地图!")},h=s(),w=s(),S=s(!0),$=e=>{w.value=e,S.value=!1};return x({markCode:e=>{(async e=>{await h.value.render(e)})({css:{width:`${k.qrcodeSize}px`,height:`${k.qrcodeSize}px`},views:[{type:"qrcode",text:e,css:{width:`${k.qrcodeSize}px`,height:`${k.qrcodeSize}px`}}]})}}),(e,s)=>{const m=_,x=y,b=g,T=t(a("l-painter"),j);return r(),o(m,{class:"order-details"},{default:l((()=>[2===I.orderInfo.deliveryType&&I.orderInfo.payStatus?(r(),o(m,{key:0,class:"writeOff borRadius14"},{default:l((()=>[d(m,{class:"title"},{default:l((()=>[c("核销信息")])),_:1}),d(m,{class:"grayBg flex-center"},{default:l((()=>[d(m,{class:"pictrue"},{default:l((()=>[w.value?(r(),o(x,{key:0,src:w.value,style:n({width:`${k.qrcodeSize}px`,height:`${k.qrcodeSize}px`}),"show-menu-by-longpress":!0},null,8,["src","style"])):i("",!0)])),_:1})])),_:1}),d(m,{class:"gear"},{default:l((()=>[d(x,{src:f(u).$url.static("/static/images/writeOff.png","local")},null,8,["src"])])),_:1}),d(m,{class:"num"},{default:l((()=>[c(p(I.orderInfo.pickUpVerifyCode),1)])),_:1}),d(m,{class:"rules"},{default:l((()=>[d(m,{class:"item"},{default:l((()=>[d(m,{class:"rulesTitle flex flex-wrap align-center"},{default:l((()=>[c(" 核销时间 ")])),_:1}),d(m,{class:"info"},{default:l((()=>[c(" 每日： "),d(b,{class:"time"},{default:l((()=>[c("2020-2-+52")])),_:1})])),_:1})])),_:1}),d(m,{class:"item"},{default:l((()=>[d(m,{class:"rulesTitle flex flex-wrap align-center"},{default:l((()=>[d(b,{class:"iconfont icon-shuoming1"}),c(" 使用说明 ")])),_:1}),d(m,{class:"info"},{default:l((()=>[c("可将二维码出示给店员扫描或提供数字核销码")])),_:1})])),_:1})])),_:1})])),_:1})):i("",!0),2===I.orderInfo.deliveryType?(r(),o(m,{key:1,class:"map flex flex-wrap align-center ss-row-between borRadius14"},{default:l((()=>[d(m,null,{default:l((()=>[c("自提地址信息")])),_:1}),d(m,{class:"place cart-color flex flex-wrap flex-center",onClick:v},{default:l((()=>[c(" 查看位置 ")])),_:1})])),_:1})):i("",!0),S.value?(r(),o(T,{key:2,isCanvasToTempFilePath:"",pathType:"url",onSuccess:$,hidden:"",ref_key:"painterRef",ref:h},null,512)):i("",!0)])),_:1})}}},[["__scopeId","data-v-93d35884"]]),F=D({__name:"detail",setup(m){I((e=>({d299897e:f(D)})));const j=2*u.$platform.device.statusBarHeight,D=u.$url.css("/static/img/shop/order/order_bg.png"),F=e({orderInfo:{},merchantTradeNo:"",comeinType:""}),V=s({}),B=()=>{u.$helper.copyText(F.orderInfo.no)};const G=s();async function H(e){let s;if(s="wechat"===F.comeinType?await k.getOrderDetail(e,{merchant_trade_no:F.merchantTradeNo}):await k.getOrderDetail(e),0===s.code){if(F.orderInfo=s.data,O(F.orderInfo),s.data.pickUpStoreId){const{data:e}=await A.getDeliveryPickUpStore(s.data.pickUpStoreId);V.value=e||{}}2===F.orderInfo.deliveryType&&F.orderInfo.payStatus&&G.value&&G.value.markCode(s.data.pickUpVerifyCode)}else u.$router.back()}return x((async()=>{await H(F.orderInfo.id)})),b((async e=>{let s=0;e.id&&(s=e.id),F.comeinType=e.comein_type,"wechat"===F.comeinType&&(F.merchantTradeNo=e.merchant_trade_no),F.orderInfo.id=s})),(e,s)=>{const m=y,I=_,x=g,b=T,O=t(a("s-goods-item"),P),A=t(a("su-fixed"),N),D=t(a("s-layout"),q);return r(),o(D,{title:"订单详情",class:"index-wrap",navbar:"inner"},{default:l((()=>{var e;return[d(I,{class:"state-box ss-flex-col ss-col-center ss-row-right",style:n([{marginTop:"-"+Number(j+88)+"rpx",paddingTop:Number(j+88)+"rpx"}])},{default:l((()=>[d(I,{class:"ss-flex ss-m-t-32 ss-m-b-20"},{default:l((()=>["unpaid"==F.orderInfo.status_code||10===F.orderInfo.status||"nocomment"==F.orderInfo.status_code?(r(),o(m,{key:0,class:"state-img",src:f(u).$url.static("/static/img/shop/order/order_loading.png")},null,8,["src"])):i("",!0),"completed"==F.orderInfo.status_code||"refund_agree"==F.orderInfo.status_code?(r(),o(m,{key:1,class:"state-img",src:f(u).$url.static("/static/img/shop/order/order_success.png")},null,8,["src"])):i("",!0),"cancel"==F.orderInfo.status_code||"closed"==F.orderInfo.status_code?(r(),o(m,{key:2,class:"state-img",src:f(u).$url.static("/static/img/shop/order/order_close.png")},null,8,["src"])):i("",!0),"noget"==F.orderInfo.status_code?(r(),o(m,{key:3,class:"state-img",src:f(u).$url.static("/static/img/shop/order/order_express.png")},null,8,["src"])):i("",!0),d(I,{class:"ss-font-30"},{default:l((()=>[c(p(f(U)(F.orderInfo)),1)])),_:1})])),_:1}),d(I,{class:"ss-font-26 ss-m-x-20 ss-m-b-70"},{default:l((()=>[c(p(f(z)(F.orderInfo)),1)])),_:1})])),_:1},8,["style"]),F.orderInfo.receiverAreaId>0?(r(),o(I,{key:0,class:"order-address-box"},{default:l((()=>[d(I,{class:"ss-flex ss-col-center"},{default:l((()=>[d(x,{class:"address-username"},{default:l((()=>[c(p(F.orderInfo.receiverName),1)])),_:1}),d(x,{class:"address-phone"},{default:l((()=>[c(p(F.orderInfo.receiverMobile),1)])),_:1})])),_:1}),d(I,{class:"address-detail"},{default:l((()=>[c(p(F.orderInfo.receiverAreaName)+" "+p(F.orderInfo.receiverDetailAddress),1)])),_:1})])),_:1})):i("",!0),d(I,{class:"detail-goods",style:n([{marginTop:F.orderInfo.receiverAreaId>0?"0":"-40rpx"}])},{default:l((()=>[(r(!0),v(w,null,h(F.orderInfo.items,(e=>(r(),o(I,{class:"order-list",key:e.goods_id},{default:l((()=>[d(I,{class:"order-card"},{default:l((()=>[d(O,{onClick:s=>{return t=e.spuId,void u.$router.go("/pages/goods/index",{id:t});var t},img:e.picUrl,title:e.spuName,skuText:e.properties.map((e=>e.valueName)).join(" "),price:e.price,num:e.count},{tool:l((()=>[d(I,{class:"ss-flex"},{default:l((()=>[10===e.afterSaleStatus?(r(),o(b,{key:0,class:"ss-reset-button apply-btn",onClick:C((s=>f(u).$router.go("/pages/order/aftersale/detail",{id:e.afterSaleId})),["stop"])},{default:l((()=>[c(" 退款中 ")])),_:2},1032,["onClick"])):i("",!0),20===e.afterSaleStatus?(r(),o(b,{key:1,class:"ss-reset-button apply-btn",onClick:C((s=>f(u).$router.go("/pages/order/aftersale/detail",{id:e.afterSaleId})),["stop"])},{default:l((()=>[c(" 退款成功 ")])),_:2},1032,["onClick"])):i("",!0)])),_:2},1024)])),priceSuffix:l((()=>[e.status_text?(r(),o(b,{key:0,class:"ss-reset-button tag-btn"},{default:l((()=>[c(p(e.status_text),1)])),_:2},1024)):i("",!0)])),_:2},1032,["onClick","img","title","skuText","price","num"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["style"]),d(R,{"order-info":F.orderInfo,systemStore:V.value,ref_key:"pickUpVerifyRef",ref:G},null,8,["order-info","systemStore"]),d(I,{class:"notice-box"},{default:l((()=>[d(I,{class:"notice-box__content"},{default:l((()=>[d(I,{class:"notice-item--center"},{default:l((()=>[d(I,{class:"ss-flex ss-flex-1"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("订单编号：")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c(p(F.orderInfo.no),1)])),_:1})])),_:1}),d(b,{class:"ss-reset-button copy-btn",onClick:B},{default:l((()=>[c("复制")])),_:1})])),_:1}),d(I,{class:"notice-item"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("下单时间：")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c(p(f(u).$helper.timeFormat(F.orderInfo.createTime,"yyyy-mm-dd hh:MM:ss")),1)])),_:1})])),_:1}),F.orderInfo.payTime?(r(),o(I,{key:0,class:"notice-item"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("支付时间：")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c(p(f(u).$helper.timeFormat(F.orderInfo.payTime,"yyyy-mm-dd hh:MM:ss")),1)])),_:1})])),_:1})):i("",!0),d(I,{class:"notice-item"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("支付方式：")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c(p(F.orderInfo.payChannelName||"-"),1)])),_:1})])),_:1})])),_:1})])),_:1}),d(I,{class:"order-price-box"},{default:l((()=>[d(I,{class:"notice-item ss-flex ss-row-between"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("商品总额")])),_:1}),d(I,{class:"ss-flex"},{default:l((()=>[d(x,{class:"detail"},{default:l((()=>[c("￥"+p(f(M)(F.orderInfo.totalPrice)),1)])),_:1})])),_:1})])),_:1}),d(I,{class:"notice-item ss-flex ss-row-between"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("运费")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c("￥"+p(f(M)(F.orderInfo.deliveryPrice)),1)])),_:1})])),_:1}),F.orderInfo.couponPrice>0?(r(),o(I,{key:0,class:"notice-item ss-flex ss-row-between"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("优惠劵金额")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c("-¥"+p(f(M)(F.orderInfo.couponPrice)),1)])),_:1})])),_:1})):i("",!0),F.orderInfo.pointPrice>0?(r(),o(I,{key:1,class:"notice-item ss-flex ss-row-between"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("积分抵扣")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c("-¥"+p(f(M)(F.orderInfo.pointPrice)),1)])),_:1})])),_:1})):i("",!0),F.orderInfo.discountPrice>0?(r(),o(I,{key:2,class:"notice-item ss-flex ss-row-between"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("活动优惠")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c("¥"+p(f(M)(F.orderInfo.discountPrice)),1)])),_:1})])),_:1})):i("",!0),F.orderInfo.vipPrice>0?(r(),o(I,{key:3,class:"notice-item ss-flex ss-row-between"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("会员优惠")])),_:1}),d(x,{class:"detail"},{default:l((()=>[c("-¥"+p(f(M)(F.orderInfo.vipPrice)),1)])),_:1})])),_:1})):i("",!0),d(I,{class:"notice-item all-rpice-item ss-flex ss-m-t-20"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c(p(F.orderInfo.payStatus?"已付款":"需付款"),1)])),_:1}),d(x,{class:"detail all-price"},{default:l((()=>[c("￥"+p(f(M)(F.orderInfo.payPrice)),1)])),_:1})])),_:1}),F.orderInfo.refundPrice>0?(r(),o(I,{key:4,class:"notice-item all-rpice-item ss-flex ss-m-t-20"},{default:l((()=>[d(x,{class:"title"},{default:l((()=>[c("已退款")])),_:1}),d(x,{class:"detail all-price"},{default:l((()=>[c("￥"+p(f(M)(F.orderInfo.refundPrice)),1)])),_:1})])),_:1})):i("",!0)])),_:1}),(null==(e=F.orderInfo.buttons)?void 0:e.length)?(r(),o(A,{key:1,bottom:"",placeholder:"",bg:"bg-white"},{default:l((()=>[d(I,{class:"footer-box ss-flex ss-col-center ss-row-right"},{default:l((()=>{var e,t,a,d,n,p;return[(null==(e=F.orderInfo.buttons)?void 0:e.includes("cancel"))?(r(),o(b,{key:0,class:"ss-reset-button cancel-btn",onClick:s[0]||(s[0]=e=>async function(e){S({title:"提示",content:"确定要取消订单吗?",success:async function(s){if(!s.confirm)return;const{code:t}=await k.cancelOrder(e);0===t&&await H(e)}})}(F.orderInfo.id))},{default:l((()=>[c(" 取消订单 ")])),_:1})):i("",!0),(null==(t=F.orderInfo.buttons)?void 0:t.includes("pay"))?(r(),o(b,{key:1,class:"ss-reset-button pay-btn ui-BG-Main-Gradient",onClick:s[1]||(s[1]=e=>{return s=F.orderInfo.payOrderId,void u.$router.go("/pages/pay/index",{id:s});var s})},{default:l((()=>[c(" 继续支付 ")])),_:1})):i("",!0),(null==(a=F.orderInfo.buttons)?void 0:a.includes("combination"))?(r(),o(b,{key:2,class:"ss-reset-button cancel-btn",onClick:s[2]||(s[2]=e=>f(u).$router.go("/pages/activity/groupon/detail",{id:F.orderInfo.combinationRecordId}))},{default:l((()=>[c(" 拼团详情 ")])),_:1})):i("",!0),(null==(d=F.orderInfo.buttons)?void 0:d.includes("express"))?(r(),o(b,{key:3,class:"ss-reset-button cancel-btn",onClick:s[3]||(s[3]=e=>async function(e){u.$router.go("/pages/order/express/log",{id:e})}(F.orderInfo.id))},{default:l((()=>[c(" 查看物流 ")])),_:1})):i("",!0),(null==(n=F.orderInfo.buttons)?void 0:n.includes("confirm"))?(r(),o(b,{key:4,class:"ss-reset-button cancel-btn",onClick:s[4]||(s[4]=e=>async function(e,s=!1){"WechatMiniProgram"!==u.$platform.name||$(F.orderInfo.wechat_extra_data)||s?S({title:"提示",content:"确认收货吗？",success:async function(s){if(!s.confirm)return;const{code:t}=await k.receiveOrder(e);0===t&&await H(e)}}):mpConfirm(e)}(F.orderInfo.id))},{default:l((()=>[c(" 确认收货 ")])),_:1})):i("",!0),(null==(p=F.orderInfo.buttons)?void 0:p.includes("comment"))?(r(),o(b,{key:5,class:"ss-reset-button cancel-btn",onClick:s[5]||(s[5]=e=>{return s=F.orderInfo.id,void u.$router.go("/pages/goods/comment/add",{id:s});var s})},{default:l((()=>[c(" 评价 ")])),_:1})):i("",!0)]})),_:1})])),_:1})):i("",!0)]})),_:1})}}},[["__scopeId","data-v-6688bd90"]]);export{F as default};
