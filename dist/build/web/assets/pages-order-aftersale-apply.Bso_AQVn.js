import{U as e,v as s,o as a,s as t,a0 as l,r as o,e as r,f as i,w as u,j as d,k as n,p as c,l as f,m as p,F as m,t as _,u as x,aw as y,a6 as h,i as w,ax as g,C as b,D as v,E as k,G as I}from"./index-hyULoCvK.js";import{_ as j}from"./s-goods-item.5-Ni1Ngh.js";import{f as C,h as M,_ as V,c as R,S as G}from"./s-layout.BjspkmIk.js";import{_ as U}from"./s-uploader.BgsWy3Mz.js";import{T as L}from"./config.eL0f3mXL.js";import{f as P}from"./useGoods.BEOTRLPh.js";import{A as S}from"./afterSale.CqOWUXz8.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./index.B9XYHGVA.js";const D=B({__name:"apply",setup(B){const D=e(null),T=s({orderId:0,itemId:0,order:{},item:{},config:{},wayList:[{text:"仅退款",value:"10"},{text:"退款退货",value:"20"}],reasonList:[],showModal:!1,currentValue:""});let $=s({way:"",applyReason:"",applyDescription:"",applyPicUrls:[]});const A=s({});async function N(){let e={orderItemId:T.itemId,refundPrice:T.item.payPrice,...$};const{code:s}=await S.createAfterSale(e);0===s&&(h({title:"申请成功"}),t.$router.redirect("/pages/order/aftersale/list"))}function E(e){$.way=e.detail.value,T.reasonList="10"===$.way?T.config.afterSaleRefundReasons||[]:T.config.afterSaleReturnReasons||[],$.applyReason="",T.currentValue=""}function F(e){T.currentValue=e.detail.value}function H(){$.applyReason=T.currentValue,T.showModal=!1}return a((async e=>{if(!e.orderId||!e.itemId)return void t.$helper.toast("缺少订单信息，请检查");T.orderId=e.orderId,T.itemId=parseInt(e.itemId);const{code:s,data:a}=await l.getOrderDetail(T.orderId);0===s&&(T.order=a,T.item=a.items.find((e=>e.id===T.itemId))||{},10===T.order.status&&T.wayList.splice(1,1),T.config=(await L.getTradeConfig()).data)})),(e,s)=>{const a=o(r("s-goods-item"),j),l=w,h=k,L=I,S=g,B=b,O=o(r("uni-easyinput"),C),Z=o(r("s-uploader"),U),q=o(r("uni-forms"),M),z=v,J=o(r("su-fixed"),V),K=o(r("su-popup"),R),Q=o(r("s-layout"),G);return d(),i(Q,{title:"申请售后"},{default:u((()=>[n(l,{class:"goods-box"},{default:u((()=>{var e;return[n(a,{img:T.item.picUrl,title:T.item.spuName,skuText:null==(e=T.item.properties)?void 0:e.map((e=>e.valueName)).join(" "),price:T.item.price,num:T.item.count},null,8,["img","title","skuText","price","num"])]})),_:1}),n(q,{ref_key:"form",ref:D,modelValue:x($),"onUpdate:modelValue":s[4]||(s[4]=e=>y($)?$.value=e:$=e),rules:A,"label-position":"top"},{default:u((()=>[n(l,{class:"refund-item"},{default:u((()=>[n(l,{class:"item-title ss-m-b-20"},{default:u((()=>[c("售后类型")])),_:1}),n(l,{class:"ss-flex-col"},{default:u((()=>[n(S,{onChange:E},{default:u((()=>[(d(!0),f(m,null,p(T.wayList,((e,s)=>(d(),i(L,{class:"ss-flex ss-col-center ss-p-y-10",key:s},{default:u((()=>[n(h,{checked:x($).type===e.value,color:"var(--ui-BG-Main)",style:{transform:"scale(0.8)"},value:e.value},null,8,["checked","value"]),n(l,{class:"item-value ss-m-l-8"},{default:u((()=>[c(_(e.text),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),n(l,{class:"refund-item ss-flex ss-col-center ss-row-between",onClick:s[0]||(s[0]=e=>T.showModal=!0)},{default:u((()=>[n(B,{class:"item-title"},{default:u((()=>[c("退款金额")])),_:1}),n(l,{class:"ss-flex refund-cause ss-col-center"},{default:u((()=>[n(B,{class:"ss-m-r-20"},{default:u((()=>[c("￥"+_(x(P)(T.item.payPrice)),1)])),_:1})])),_:1})])),_:1}),n(l,{class:"refund-item ss-flex ss-col-center ss-row-between",onClick:s[1]||(s[1]=e=>T.showModal=!0)},{default:u((()=>[n(B,{class:"item-title"},{default:u((()=>[c("申请原因")])),_:1}),n(l,{class:"ss-flex refund-cause ss-col-center"},{default:u((()=>[x($).applyReason?(d(),i(B,{key:0,class:"ss-m-r-20"},{default:u((()=>[c(_(x($).applyReason),1)])),_:1})):(d(),i(B,{key:1,class:"ss-m-r-20"},{default:u((()=>[c("请选择申请原因~")])),_:1})),n(B,{class:"cicon-forward",style:{height:"28rpx"}})])),_:1})])),_:1}),n(l,{class:"refund-item"},{default:u((()=>[n(l,{class:"item-title ss-m-b-20"},{default:u((()=>[c("相关描述")])),_:1}),n(l,{class:"describe-box"},{default:u((()=>[n(O,{inputBorder:!1,class:"describe-content",type:"textarea",maxlength:"120",autoHeight:"",modelValue:x($).applyDescription,"onUpdate:modelValue":s[2]||(s[2]=e=>x($).applyDescription=e),placeholder:"客官~请描述您遇到的问题，建议上传照片"},null,8,["modelValue"]),n(l,{class:"upload-img"},{default:u((()=>[n(Z,{url:x($).applyPicUrls,"onUpdate:url":s[3]||(s[3]=e=>x($).applyPicUrls=e),fileMediatype:"image",limit:"9",mode:"grid",imageStyles:{width:"168rpx",height:"168rpx"}},null,8,["url"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","rules"]),n(J,{bottom:"",placeholder:""},{default:u((()=>[n(l,{class:"foot-wrap"},{default:u((()=>[n(l,{class:"foot_box ss-flex ss-col-center ss-row-between ss-p-x-30"},{default:u((()=>[n(z,{class:"ss-reset-button contcat-btn",onClick:s[5]||(s[5]=e=>x(t).$router.go("/pages/chat/index"))},{default:u((()=>[c(" 联系客服 ")])),_:1}),n(z,{class:"ss-reset-button ui-BG-Main-Gradient sub-btn",onClick:N},{default:u((()=>[c("提交")])),_:1})])),_:1})])),_:1})])),_:1}),n(K,{show:T.showModal,round:"10",showClose:!0,onClose:s[6]||(s[6]=e=>T.showModal=!1)},{default:u((()=>[n(l,{class:"modal-box page_box"},{default:u((()=>[n(l,{class:"modal-head item-title head_box ss-flex ss-row-center ss-col-center"},{default:u((()=>[c(" 申请原因 ")])),_:1}),n(l,{class:"modal-content content_box"},{default:u((()=>[n(S,{onChange:F},{default:u((()=>[(d(!0),f(m,null,p(T.reasonList,(e=>(d(),i(L,{class:"radio ss-flex ss-col-center",key:e},{default:u((()=>[n(l,{class:"ss-flex-1 ss-p-20"},{default:u((()=>[c(_(e),1)])),_:2},1024),n(h,{value:e,color:"var(--ui-BG-Main)",checked:e===T.currentValue},null,8,["value","checked"])])),_:2},1024)))),128))])),_:1})])),_:1}),n(l,{class:"modal-foot foot_box ss-flex ss-row-center ss-col-center"},{default:u((()=>[n(z,{class:"ss-reset-button close-btn ui-BG-Main-Gradient",onClick:H},{default:u((()=>[c(" 确定 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1})}}},[["__scopeId","data-v-d665b59d"]]);export{D as default};
