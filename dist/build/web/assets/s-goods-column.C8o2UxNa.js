import{c as s,a1 as t,_ as e,aM as a,j as l,f as o,w as i,y as d,k as c,u as r,s as n,g as u,p,t as y,l as g,F as f,m,bi as _,Q as k,P as v,q as h,i as w,C as x,am as b}from"./index-B9abLD3F.js";import{k as P,e as F,b as S,h as T,f as $}from"./useGoods.CNfLrev9.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";const O=C({__name:"s-goods-column",props:{goodsFields:{type:[Array,Object],default:()=>({price:{show:!0},stock:{show:!0},name:{show:!0},introduction:{show:!0},marketPrice:{show:!0},salesCount:{show:!0}})},tagStyle:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},size:{type:String,default:"sl"},background:{type:String,default:""},topRadius:{type:Number,default:0},bottomRadius:{type:Number,default:0},titleWidth:{type:Number,default:0},titleColor:{type:String,default:"#333"},priceColor:{type:String,default:""},originPriceColor:{type:String,default:"#C4C4C4"},priceUnit:{type:String,default:"￥"},subTitleColor:{type:String,default:"#999999"},subTitleBackground:{type:String,default:""},buttonShow:{type:Boolean,default:!0},seckillTag:{type:Boolean,default:!1},grouponTag:{type:Boolean,default:!1}},emits:["click","getHeight"],setup(C,{emit:O}){const U=C,A=s((()=>{const s=U.data.promotionType;return 4===s?"限时优惠":6===s?"会员价":void 0})),N=s((()=>({background:U.background,"border-top-left-radius":U.topRadius+"px","border-top-right-radius":U.topRadius+"px","border-bottom-left-radius":U.bottomRadius+"px","border-bottom-right-radius":U.bottomRadius+"px"}))),B=s((()=>{var s,e;let a=[];return(null==(s=U.goodsFields.salesCount)?void 0:s.show)&&(U.data.activityType&&U.data.activityType===t.POINT.type?a.push(P(U.data.sales_show_type,(U.data.pointTotalStock||0)-(U.data.pointStock||0))):a.push(F(U.data.sales_show_type,U.data.salesCount))),(null==(e=U.goodsFields.stock)?void 0:e.show)&&(U.data.activityType&&U.data.activityType===t.POINT.type?a.push(S(U.data.stock_show_type,U.data.pointTotalStock)):a.push(S(U.data.stock_show_type,U.data.stock))),a.join(" | ")})),j=O,z=()=>{j("click")},{proxy:I}=b(),W=`sheep_${Math.ceil(1e6*Math.random()).toString(36)}`;return e((()=>{a((()=>{!function(){if("md"===U.size){const s=v().in(I);s.select(`#${W}`).fields({size:!0,scrollOffset:!0}),s.exec((s=>{let t=0;const e=s[0];t=U.data.image_wh?e.width/U.data.image_wh.w*U.data.image_wh.h+e.height:e.width,j("getHeight",t)}))}}()}))})),(s,e)=>{const a=h,v=w,b=x;return l(),o(v,{class:"ss-goods-wrap"},{default:i((()=>["xs"===C.size?(l(),o(v,{key:0,class:"xs-goods-card ss-flex ss-col-stretch",style:d([N.value]),onClick:z},{default:i((()=>{var s,e,k;return[C.tagStyle.show?(l(),o(v,{key:0,class:"tag-icon-box"},{default:i((()=>[c(a,{class:"tag-icon",src:r(n).$url.cdn(C.tagStyle.src||C.tagStyle.imgUrl)},null,8,["src"])])),_:1})):u("",!0),c(a,{class:"xs-img-box",src:r(n).$url.cdn(C.data.image||C.data.picUrl),mode:"aspectFit"},null,8,["src"]),(null==(s=C.goodsFields.title)?void 0:s.show)||(null==(e=C.goodsFields.name)?void 0:e.show)||(null==(k=C.goodsFields.price)?void 0:k.show)?(l(),o(v,{key:1,class:"xs-goods-content ss-flex-col ss-row-around"},{default:i((()=>{var s,e,k;return[(null==(s=C.goodsFields.title)?void 0:s.show)||(null==(e=C.goodsFields.name)?void 0:e.show)?(l(),o(v,{key:0,class:"xs-goods-title ss-line-1",style:d([{color:C.titleColor,width:C.titleWidth?C.titleWidth+"rpx":""}])},{default:i((()=>[p(y(C.data.title||C.data.name),1)])),_:1},8,["style"])):u("",!0),C.data.promotionType>0||C.data.rewardActivity?(l(),o(v,{key:1,class:"iconBox"},{default:i((()=>[A.value?(l(),o(v,{key:0,class:"card"},{default:i((()=>[p(y(A.value),1)])),_:1})):u("",!0),(l(!0),g(f,null,m(r(T)(C.data.rewardActivity).slice(0,1),(s=>(l(),o(v,{class:"card2",key:s},{default:i((()=>[p(y(s),1)])),_:2},1024)))),128))])),_:1})):u("",!0),(null==(k=C.goodsFields.price)?void 0:k.show)?(l(),o(v,{key:2,class:"xs-goods-price font-OPPOSANS",style:d([{color:C.goodsFields.price.color}])},{default:i((()=>[C.data.activityType&&C.data.activityType===r(t).POINT.type?(l(),o(v,{key:0,class:"ss-flex"},{default:i((()=>[c(a,{src:r(n).$url.static("/static/img/shop/goods/score1.svg"),class:"point-img"},null,8,["src"]),c(b,{class:"point-text ss-m-r-16"},{default:i((()=>[p(y(C.data.point)+" "+y(C.data.pointPrice&&0!==C.data.pointPrice?`+${C.priceUnit}${r($)(C.data.pointPrice)}`:""),1)])),_:1})])),_:1})):(l(),g(f,{key:1},[c(b,{class:"price-unit ss-font-24"},{default:i((()=>[p(y(C.priceUnit),1)])),_:1}),C.data.promotionPrice>0?(l(),o(b,{key:0},{default:i((()=>[p(y(r($)(C.data.promotionPrice)),1)])),_:1})):(l(),o(b,{key:1},{default:i((()=>[p(y(r(_)(C.data.price)?r($)(C.data.price[0]):r($)(C.data.price)),1)])),_:1}))],64))])),_:1},8,["style"])):u("",!0)]})),_:1})):u("",!0)]})),_:1},8,["style"])):u("",!0),"sm"===C.size?(l(),o(v,{key:1,class:"sm-goods-card ss-flex-col",style:d([N.value]),onClick:z},{default:i((()=>{var s,e,k;return[C.tagStyle.show?(l(),o(v,{key:0,class:"tag-icon-box"},{default:i((()=>[c(a,{class:"tag-icon",src:r(n).$url.cdn(C.tagStyle.src||C.tagStyle.imgUrl)},null,8,["src"])])),_:1})):u("",!0),c(a,{class:"sm-img-box",src:r(n).$url.cdn(C.data.image||C.data.picUrl),mode:"aspectFill"},null,8,["src"]),(null==(s=C.goodsFields.title)?void 0:s.show)||(null==(e=C.goodsFields.name)?void 0:e.show)||(null==(k=C.goodsFields.price)?void 0:k.show)?(l(),o(v,{key:1,class:"sm-goods-content",style:d([{color:C.titleColor,width:C.titleWidth?C.titleWidth+"rpx":""}])},{default:i((()=>{var s,e,k;return[(null==(s=C.goodsFields.title)?void 0:s.show)||(null==(e=C.goodsFields.name)?void 0:e.show)?(l(),o(v,{key:0,class:"sm-goods-title ss-line-1 ss-m-b-16"},{default:i((()=>[p(y(C.data.title||C.data.name),1)])),_:1})):u("",!0),C.data.promotionType>0||C.data.rewardActivity?(l(),o(v,{key:1,class:"iconBox"},{default:i((()=>[A.value?(l(),o(v,{key:0,class:"card"},{default:i((()=>[p(y(A.value),1)])),_:1})):u("",!0),(l(!0),g(f,null,m(r(T)(C.data.rewardActivity).slice(0,1),(s=>(l(),o(v,{class:"card2",key:s},{default:i((()=>[p(y(s),1)])),_:2},1024)))),128))])),_:1})):u("",!0),(null==(k=C.goodsFields.price)?void 0:k.show)?(l(),o(v,{key:2,class:"sm-goods-price font-OPPOSANS",style:d([{color:C.goodsFields.price.color}])},{default:i((()=>[C.data.activityType&&C.data.activityType===r(t).POINT.type?(l(),o(v,{key:0,class:"ss-flex"},{default:i((()=>[c(a,{src:r(n).$url.static("/static/img/shop/goods/score1.svg"),class:"point-img"},null,8,["src"]),c(b,{class:"point-text ss-m-r-16"},{default:i((()=>[p(y(C.data.point)+" "+y(C.data.pointPrice&&0!==C.data.pointPrice?`+${C.priceUnit}${r($)(C.data.pointPrice)}`:""),1)])),_:1})])),_:1})):(l(),g(f,{key:1},[c(b,{class:"price-unit ss-font-24"},{default:i((()=>[p(y(C.priceUnit),1)])),_:1}),C.data.promotionPrice>0?(l(),o(b,{key:0},{default:i((()=>[p(y(r($)(C.data.promotionPrice)),1)])),_:1})):(l(),o(b,{key:1},{default:i((()=>[p(y(r(_)(C.data.price)?r($)(C.data.price[0]):r($)(C.data.price)),1)])),_:1}))],64))])),_:1},8,["style"])):u("",!0)]})),_:1},8,["style"])):u("",!0)]})),_:1},8,["style"])):u("",!0),"md"===C.size?(l(),o(v,{key:2,class:"md-goods-card ss-flex-col",style:d([N.value]),onClick:z},{default:i((()=>[C.tagStyle.show?(l(),o(v,{key:0,class:"tag-icon-box"},{default:i((()=>[c(a,{class:"tag-icon",src:r(n).$url.cdn(C.tagStyle.src||C.tagStyle.imgUrl)},null,8,["src"])])),_:1})):u("",!0),c(a,{class:"md-img-box",src:r(n).$url.cdn(C.data.image||C.data.picUrl),mode:"widthFix"},null,8,["src"]),c(v,{class:"md-goods-content ss-flex-col ss-row-around ss-p-b-20 ss-p-t-20 ss-p-x-16",id:W},{default:i((()=>{var e,h,w,x;return[(null==(e=C.goodsFields.title)?void 0:e.show)||(null==(h=C.goodsFields.name)?void 0:h.show)?(l(),o(v,{key:0,class:"md-goods-title ss-line-1",style:d([{color:C.titleColor,width:C.titleWidth?C.titleWidth+"rpx":""}])},{default:i((()=>[p(y(C.data.title||C.data.name),1)])),_:1},8,["style"])):u("",!0),(null==(w=C.goodsFields.subtitle)?void 0:w.show)||(null==(x=C.goodsFields.introduction)?void 0:x.show)?(l(),o(v,{key:1,class:"md-goods-subtitle ss-m-t-16 ss-line-1",style:d([{color:C.subTitleColor,background:C.subTitleBackground}])},{default:i((()=>[p(y(C.data.subtitle||C.data.introduction),1)])),_:1},8,["style"])):u("",!0),k(s.$slots,"activity",{},(()=>{var s;return[(null==(s=C.data.promos)?void 0:s.length)?(l(),o(v,{key:0,class:"tag-box ss-flex-wrap ss-flex ss-col-center"},{default:i((()=>[(l(!0),g(f,null,m(C.data.promos,(s=>(l(),o(v,{class:"activity-tag ss-m-r-10 ss-m-t-16",key:s.id},{default:i((()=>[p(y(s.title),1)])),_:2},1024)))),128))])),_:1})):u("",!0)]}),!0),C.data.promotionType>0||C.data.rewardActivity?(l(),o(v,{key:2,class:"iconBox"},{default:i((()=>[A.value?(l(),o(v,{key:0,class:"card"},{default:i((()=>[p(y(A.value),1)])),_:1})):u("",!0),(l(!0),g(f,null,m(r(T)(C.data.rewardActivity).slice(0,1),(s=>(l(),o(v,{class:"card2",key:s},{default:i((()=>[p(y(s),1)])),_:2},1024)))),128))])),_:1})):u("",!0),c(v,{class:"ss-flex ss-col-bottom"},{default:i((()=>{var s,e,m;return[(null==(s=C.goodsFields.price)?void 0:s.show)?(l(),o(v,{key:0,class:"md-goods-price ss-m-t-16 font-OPPOSANS ss-m-r-10",style:d([{color:C.goodsFields.price.color}])},{default:i((()=>[C.data.activityType&&C.data.activityType===r(t).POINT.type?(l(),o(v,{key:0,class:"ss-flex"},{default:i((()=>[c(a,{src:r(n).$url.static("/static/img/shop/goods/score1.svg"),class:"point-img"},null,8,["src"]),c(b,{class:"point-text ss-m-r-16"},{default:i((()=>[p(y(C.data.point)+" "+y(C.data.pointPrice&&0!==C.data.pointPrice?`+${C.priceUnit}${r($)(C.data.pointPrice)}`:""),1)])),_:1})])),_:1})):(l(),g(f,{key:1},[c(b,{class:"price-unit ss-font-24"},{default:i((()=>[p(y(C.priceUnit),1)])),_:1}),C.data.promotionPrice>0?(l(),o(b,{key:0},{default:i((()=>[p(y(r($)(C.data.promotionPrice)),1)])),_:1})):(l(),o(b,{key:1},{default:i((()=>[p(y(r(_)(C.data.price)?r($)(C.data.price[0]):r($)(C.data.price)),1)])),_:1}))],64))])),_:1},8,["style"])):u("",!0),((null==(e=C.goodsFields.original_price)?void 0:e.show)||(null==(m=C.goodsFields.marketPrice)?void 0:m.show))&&(C.data.original_price>0||C.data.marketPrice>0)?(l(),o(v,{key:1,class:"goods-origin-price ss-m-t-16 font-OPPOSANS ss-flex",style:d([{color:C.originPriceColor}])},{default:i((()=>[c(b,{class:"price-unit ss-font-20"},{default:i((()=>[p(y(C.priceUnit),1)])),_:1}),c(v,{class:"ss-m-l-8"},{default:i((()=>[p(y(r($)(C.data.marketPrice)),1)])),_:1})])),_:1},8,["style"])):u("",!0)]})),_:1}),c(v,{class:"ss-m-t-16 ss-flex ss-col-center ss-flex-wrap"},{default:i((()=>[c(v,{class:"sales-text"},{default:i((()=>[p(y(B.value),1)])),_:1})])),_:1})]})),_:3}),k(s.$slots,"cart",{},(()=>[c(v,{class:"cart-box ss-flex ss-col-center ss-row-center"},{default:i((()=>[c(a,{class:"cart-icon",src:"/static/img/shop/tabbar/category2.png",mode:""})])),_:1})]),!0)])),_:3},8,["style"])):u("",!0),"lg"===C.size?(l(),o(v,{key:3,class:"lg-goods-card ss-flex ss-col-stretch",style:d([N.value]),onClick:z},{default:i((()=>[C.tagStyle.show?(l(),o(v,{key:0,class:"tag-icon-box"},{default:i((()=>[c(a,{class:"tag-icon",src:r(n).$url.cdn(C.tagStyle.src||C.tagStyle.imgUrl)},null,8,["src"])])),_:1})):u("",!0),C.seckillTag?(l(),o(v,{key:1,class:"seckill-tag ss-flex ss-row-center"},{default:i((()=>[p("秒杀")])),_:1})):u("",!0),C.grouponTag?(l(),o(v,{key:2,class:"groupon-tag ss-flex ss-row-center"},{default:i((()=>[c(v,{class:"tag-icon"},{default:i((()=>[p("拼团")])),_:1})])),_:1})):u("",!0),c(a,{class:"lg-img-box",src:r(n).$url.cdn(C.data.image||C.data.picUrl),mode:"aspectFill"},null,8,["src"]),c(v,{class:"lg-goods-content ss-flex-1 ss-flex-col ss-row-between ss-p-b-10 ss-p-t-20"},{default:i((()=>[c(v,null,{default:i((()=>{var s,t,e,a;return[(null==(s=C.goodsFields.title)?void 0:s.show)||(null==(t=C.goodsFields.name)?void 0:t.show)?(l(),o(v,{key:0,class:"lg-goods-title ss-line-2",style:d([{color:C.titleColor}])},{default:i((()=>[p(y(C.data.title||C.data.name),1)])),_:1},8,["style"])):u("",!0),(null==(e=C.goodsFields.subtitle)?void 0:e.show)||(null==(a=C.goodsFields.introduction)?void 0:a.show)?(l(),o(v,{key:1,class:"lg-goods-subtitle ss-m-t-10 ss-line-1",style:d([{color:C.subTitleColor,background:C.subTitleBackground}])},{default:i((()=>[p(y(C.data.subtitle||C.data.introduction),1)])),_:1},8,["style"])):u("",!0)]})),_:1}),c(v,null,{default:i((()=>{var e;return[k(s.$slots,"activity",{},(()=>{var s;return[(null==(s=C.data.promos)?void 0:s.length)?(l(),o(v,{key:0,class:"tag-box ss-flex ss-col-center"},{default:i((()=>[(l(!0),g(f,null,m(C.data.promos,(s=>(l(),o(v,{class:"activity-tag ss-m-r-10",key:s.id},{default:i((()=>[p(y(s.title),1)])),_:2},1024)))),128))])),_:1})):u("",!0)]}),!0),C.data.promotionType>0||C.data.rewardActivity?(l(),o(v,{key:0,class:"iconBox"},{default:i((()=>[A.value?(l(),o(v,{key:0,class:"card"},{default:i((()=>[p(y(A.value),1)])),_:1})):u("",!0),(l(!0),g(f,null,m(r(T)(C.data.rewardActivity).slice(0,1),(s=>(l(),o(v,{class:"card2",key:s},{default:i((()=>[p(y(s),1)])),_:2},1024)))),128))])),_:1})):u("",!0),(null==(e=C.goodsFields.price)?void 0:e.show)?(l(),o(v,{key:1,class:"ss-flex ss-col-bottom font-OPPOSANS"},{default:i((()=>{var s,e;return[c(v,{class:"sl-goods-price ss-m-r-12",style:d([{color:C.goodsFields.price.color}])},{default:i((()=>[C.data.activityType&&C.data.activityType===r(t).POINT.type?(l(),o(v,{key:0,class:"ss-flex"},{default:i((()=>[c(a,{src:r(n).$url.static("/static/img/shop/goods/score1.svg"),class:"point-img"},null,8,["src"]),c(b,{class:"point-text ss-m-r-16"},{default:i((()=>[p(y(C.data.point)+" "+y(C.data.pointPrice&&0!==C.data.pointPrice?`+${C.priceUnit}${r($)(C.data.pointPrice)}`:""),1)])),_:1})])),_:1})):(l(),g(f,{key:1},[c(b,{class:"price-unit ss-font-24"},{default:i((()=>[p(y(C.priceUnit),1)])),_:1}),C.data.promotionPrice>0?(l(),o(b,{key:0},{default:i((()=>[p(y(r($)(C.data.promotionPrice)),1)])),_:1})):(l(),o(b,{key:1},{default:i((()=>[p(y(r(_)(C.data.price)?r($)(C.data.price[0]):r($)(C.data.price)),1)])),_:1}))],64))])),_:1},8,["style"]),((null==(s=C.goodsFields.original_price)?void 0:s.show)||(null==(e=C.goodsFields.marketPrice)?void 0:e.show))&&(C.data.original_price>0||C.data.marketPrice>0)?(l(),o(v,{key:0,class:"goods-origin-price ss-m-t-16 font-OPPOSANS ss-flex",style:d([{color:C.originPriceColor}])},{default:i((()=>[c(b,{class:"price-unit ss-font-20"},{default:i((()=>[p(y(C.priceUnit),1)])),_:1}),c(v,{class:"ss-m-l-8"},{default:i((()=>[p(y(r($)(C.data.marketPrice)),1)])),_:1})])),_:1},8,["style"])):u("",!0)]})),_:1})):u("",!0),c(v,{class:"ss-m-t-8 ss-flex ss-col-center ss-flex-wrap"},{default:i((()=>[c(v,{class:"sales-text"},{default:i((()=>[p(y(B.value),1)])),_:1})])),_:1})]})),_:3})])),_:3}),k(s.$slots,"cart",{},(()=>[C.buttonShow?(l(),o(v,{key:0,class:"buy-box ss-flex ss-col-center ss-row-center"},{default:i((()=>[p(" 去购买")])),_:1})):u("",!0)]),!0)])),_:3},8,["style"])):u("",!0),"sl"===C.size?(l(),o(v,{key:4,class:"sl-goods-card ss-flex-col",style:d([N.value]),onClick:z},{default:i((()=>[C.tagStyle.show?(l(),o(v,{key:0,class:"tag-icon-box"},{default:i((()=>[c(a,{class:"tag-icon",src:r(n).$url.cdn(C.tagStyle.src||C.tagStyle.imgUrl)},null,8,["src"])])),_:1})):u("",!0),c(a,{class:"sl-img-box",src:r(n).$url.cdn(C.data.image||C.data.picUrl),mode:"aspectFill"},null,8,["src"]),c(v,{class:"sl-goods-content"},{default:i((()=>[c(v,null,{default:i((()=>{var s,t,e,a;return[(null==(s=C.goodsFields.title)?void 0:s.show)||(null==(t=C.goodsFields.name)?void 0:t.show)?(l(),o(v,{key:0,class:"sl-goods-title ss-line-1",style:d([{color:C.titleColor}])},{default:i((()=>[p(y(C.data.title||C.data.name),1)])),_:1},8,["style"])):u("",!0),(null==(e=C.goodsFields.subtitle)?void 0:e.show)||(null==(a=C.goodsFields.introduction)?void 0:a.show)?(l(),o(v,{key:1,class:"sl-goods-subtitle ss-m-t-16",style:d([{color:C.subTitleColor,background:C.subTitleBackground}])},{default:i((()=>[p(y(C.data.subtitle||C.data.introduction),1)])),_:1},8,["style"])):u("",!0)]})),_:1}),c(v,null,{default:i((()=>{var e;return[k(s.$slots,"activity",{},(()=>{var s;return[(null==(s=C.data.promos)?void 0:s.length)?(l(),o(v,{key:0,class:"tag-box ss-flex ss-col-center ss-flex-wrap"},{default:i((()=>[(l(!0),g(f,null,m(C.data.promos,(s=>(l(),o(v,{class:"activity-tag ss-m-r-10 ss-m-t-16",key:s.id},{default:i((()=>[p(y(s.title),1)])),_:2},1024)))),128))])),_:1})):u("",!0)]}),!0),C.data.promotionType>0||C.data.rewardActivity?(l(),o(v,{key:0,class:"iconBox"},{default:i((()=>[A.value?(l(),o(v,{key:0,class:"card"},{default:i((()=>[p(y(A.value),1)])),_:1})):u("",!0),(l(!0),g(f,null,m(r(T)(C.data.rewardActivity).slice(0,1),(s=>(l(),o(v,{class:"card2",key:s},{default:i((()=>[p(y(s),1)])),_:2},1024)))),128))])),_:1})):u("",!0),(null==(e=C.goodsFields.price)?void 0:e.show)?(l(),o(v,{key:1,class:"ss-flex ss-col-bottom font-OPPOSANS"},{default:i((()=>{var s,e;return[c(v,{class:"sl-goods-price ss-m-r-12",style:d([{color:C.goodsFields.price.color}])},{default:i((()=>[C.data.activityType&&C.data.activityType===r(t).POINT.type?(l(),o(v,{key:0,class:"ss-flex"},{default:i((()=>[c(a,{src:r(n).$url.static("/static/img/shop/goods/score1.svg"),class:"point-img"},null,8,["src"]),c(b,{class:"ss-m-r-16"},{default:i((()=>[p(y(C.data.point)+" "+y(C.data.pointPrice&&0!==C.data.pointPrice?`+${C.priceUnit}${r($)(C.data.pointPrice)}`:""),1)])),_:1})])),_:1})):(l(),g(f,{key:1},[c(b,{class:"price-unit ss-font-24"},{default:i((()=>[p(y(C.priceUnit),1)])),_:1}),C.data.promotionPrice>0?(l(),o(b,{key:0},{default:i((()=>[p(y(r($)(C.data.promotionPrice)),1)])),_:1})):(l(),o(b,{key:1},{default:i((()=>[p(y(r(_)(C.data.price)?r($)(C.data.price[0]):r($)(C.data.price)),1)])),_:1}))],64))])),_:1},8,["style"]),((null==(s=C.goodsFields.original_price)?void 0:s.show)||(null==(e=C.goodsFields.marketPrice)?void 0:e.show))&&(C.data.original_price>0||C.data.marketPrice>0)?(l(),o(v,{key:0,class:"goods-origin-price ss-m-t-16 font-OPPOSANS ss-flex",style:d([{color:C.originPriceColor}])},{default:i((()=>[c(b,{class:"price-unit ss-font-20"},{default:i((()=>[p(y(C.priceUnit),1)])),_:1}),c(v,{class:"ss-m-l-8"},{default:i((()=>[p(y(r($)(C.data.marketPrice)),1)])),_:1})])),_:1},8,["style"])):u("",!0)]})),_:1})):u("",!0),c(v,{class:"ss-m-t-16 ss-flex ss-flex-wrap"},{default:i((()=>[c(v,{class:"sales-text"},{default:i((()=>[p(y(B.value),1)])),_:1})])),_:1})]})),_:3})])),_:3}),k(s.$slots,"cart",{},(()=>[c(v,{class:"buy-box ss-flex ss-col-center ss-row-center"},{default:i((()=>[p("去购买")])),_:1})]),!0)])),_:3},8,["style"])):u("",!0)])),_:3})}}},[["__scopeId","data-v-9b817759"]]);export{O as _};
