import{_ as e}from"./s-goods-item.5-Ni1Ngh.js";import{v as t,o as s,s as a,a0 as o,r as l,e as n,f as i,w as r,j as m,k as u,l as d,m as c,F as p,p as f,i as _,D as h,ar as x,G as g,as as y}from"./index-hyULoCvK.js";import{_ as b}from"./uni-rate.Bo7x1As7.js";import{f as L,_ as V,S}from"./s-layout.BjspkmIk.js";import{_ as U}from"./s-uploader.BgsWy3Mz.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./useGoods.BEOTRLPh.js";import"./index.B9XYHGVA.js";const k=j({__name:"add",setup(j){const k=t({orderInfo:{},commentList:[],id:null});async function v(){for(const e of k.commentList)await o.createOrderItemComment(e);a.$router.back()}return s((async e=>{if(!e.id)return void a.$helper.toast("缺少订单信息，请检查");k.id=e.id;const{code:t,data:s}=await o.getOrderDetail(k.id);0===t?(s.items.forEach((e=>{k.commentList.push({anonymous:!1,orderItemId:e.id,descriptionScores:5,benefitScores:5,content:"",picUrls:[]})})),k.orderInfo=s):a.$helper.toast("无待评价订单")})),(t,s)=>{const a=l(n("s-goods-item"),e),o=_,j=l(n("uni-rate"),b),w=l(n("uni-easyinput"),L),I=l(n("s-uploader"),U),C=x,G=g,M=y,$=h,B=l(n("su-fixed"),V),D=l(n("s-layout"),S);return m(),i(D,{title:"评价"},{default:r((()=>[u(o,null,{default:r((()=>[(m(!0),d(p,null,c(k.orderInfo.items,((e,t)=>(m(),i(o,{key:e.id},{default:r((()=>[u(o,null,{default:r((()=>[u(o,{class:"commont-from-wrap"},{default:r((()=>[u(a,{img:e.picUrl,title:e.spuName,skuText:e.properties.map((e=>e.valueName)).join(" "),price:e.payPrice,num:e.count},null,8,["img","title","skuText","price","num"])])),_:2},1024),u(o,{class:"form-item"},{default:r((()=>[u(o,{class:"star-box ss-flex ss-col-center"},{default:r((()=>[u(o,{class:"star-title ss-m-r-40"},{default:r((()=>[f("商品质量")])),_:1}),u(j,{modelValue:k.commentList[t].descriptionScores,"onUpdate:modelValue":e=>k.commentList[t].descriptionScores=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),u(o,{class:"star-box ss-flex ss-col-center"},{default:r((()=>[u(o,{class:"star-title ss-m-r-40"},{default:r((()=>[f("服务态度")])),_:1}),u(j,{modelValue:k.commentList[t].benefitScores,"onUpdate:modelValue":e=>k.commentList[t].benefitScores=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),u(o,{class:"area-box"},{default:r((()=>[u(w,{inputBorder:!1,type:"textarea",maxlength:"120",autoHeight:"",modelValue:k.commentList[t].content,"onUpdate:modelValue":e=>k.commentList[t].content=e,placeholder:"宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧~"},null,8,["modelValue","onUpdate:modelValue"]),u(o,{class:"img-box"},{default:r((()=>[u(I,{url:k.commentList[t].images,"onUpdate:url":e=>k.commentList[t].images=e,fileMediatype:"image",limit:"9",mode:"grid",imageStyles:{width:"168rpx",height:"168rpx"},onSuccess:e=>function(e,t){k.commentList[t].picUrls=e.tempFilePaths}(e,t)},null,8,["url","onUpdate:url","onSuccess"])])),_:2},1024)])),_:2},1024),u(o,{class:"checkbox-container"},{default:r((()=>[u(M,{onChange:e=>function(e,t){k.commentList[e].anonymous="anonymousChecked"===t.detail.value[0]}(t,e)},{default:r((()=>[u(G,null,{default:r((()=>[u(C,{value:"anonymousChecked"}),f(" 匿名评论 ")])),_:1})])),_:2},1032,["onChange"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),u(B,{bottom:"",placeholder:""},{default:r((()=>[u(o,{class:"foot_box ss-flex ss-row-center ss-col-center"},{default:r((()=>[u($,{class:"ss-reset-button post-btn ui-BG-Main-Gradient ui-Shadow-Main",onClick:v},{default:r((()=>[f(" 发布 ")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-689e6676"]]);export{k as default};
