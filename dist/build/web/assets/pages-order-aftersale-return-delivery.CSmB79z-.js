import{v as e,o as s,s as a,r as t,e as r,f as l,w as i,j as n,k as o,p as d,t as u,g as c,a6 as p,i as f,C as m,ay as x,az as _,D as y,aA as g}from"./index-Bw34y8dl.js";import{S as w}from"./s-layout.BnNaBtzy.js";import{A as v}from"./afterSale.yZBo9zoR.js";import{D as b}from"./delivery.BGCM8ioe.js";import{_ as h}from"./_plugin-vue_export-helper.BCo6x5W8.js";const j=h({__name:"return-delivery",setup(h){const j=e({id:0,expressIndex:0,expresses:[]});function I(e){j.expressIndex=e.detail.value}async function k(e){let s={id:j.id,logisticsId:j.expresses[j.expressIndex].id,logisticsNo:e.detail.value.logisticsNo};const{code:t}=await v.deliveryAfterSale(s);0===t&&(p({title:"填写退货成功"}),a.$router.go("/pages/order/aftersale/detail",{id:j.id}))}return s((e=>{e.id?(j.id=e.id,async function(){const{code:e,data:s}=await b.getDeliveryExpressList();0===e&&(j.expresses=s)}()):a.$helper.toast("缺少订单信息，请检查")})),(e,s)=>{const a=f,p=m,v=x,b=_,h=y,B=g,G=t(r("s-layout"),w);return n(),l(G,{title:"退货物流"},{default:i((()=>[o(a,null,{default:i((()=>[o(B,{onSubmit:k,"report-submit":"true"},{default:i((()=>[o(a,{class:"apply-return"},{default:i((()=>[o(a,{class:"list borRadius14"},{default:i((()=>[o(a,{class:"item acea-row row-between-wrapper",style:{display:"flex","align-items":"center"}},{default:i((()=>[o(a,null,{default:i((()=>[d("物流公司")])),_:1}),j.expresses.length>0?(n(),l(a,{key:0,style:{flex:"1"}},{default:i((()=>[o(v,{mode:"selector",class:"num",onChange:I,value:j.expressIndex,range:j.expresses,"range-key":"name"},{default:i((()=>[o(a,{class:"picker acea-row row-between-wrapper",style:{display:"flex","justify-content":"space-between"}},{default:i((()=>[o(a,{class:"reason"},{default:i((()=>[d(u(j.expresses[j.expressIndex].name),1)])),_:1}),o(p,{class:"iconfont _icon-forward"})])),_:1})])),_:1},8,["value","range"])])),_:1})):c("",!0)])),_:1}),o(a,{class:"item textarea acea-row row-between",style:{display:"flex","align-items":"center"}},{default:i((()=>[o(a,null,{default:i((()=>[d("物流单号")])),_:1}),o(b,{placeholder:"请填写物流单号",class:"num",name:"logisticsNo","placeholder-class":"placeholder"})])),_:1}),o(h,{class:"returnBnt bg-color ss-reset-button ui-BG-Main-Gradient sub-btn","form-type":"submit",style:{background:"linear-gradient(90deg,var(--ui-BG-Main),var(--ui-BG-Main-gradient))!important"}},{default:i((()=>[d("提交")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-dea8d4f9"]]);export{j as default};
