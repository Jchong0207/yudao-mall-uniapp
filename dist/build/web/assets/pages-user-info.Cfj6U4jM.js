import{v as e,aB as s,c as a,j as l,f as t,w as o,Q as r,y as n,g as c,k as u,x as i,p as d,t as f,i as m,q as p,ak as b,r as _,e as h,s as y,ao as g,l as v,m as x,F as k,u as w,a8 as B,aC as V,M as $,aD as S,D as C,ax as I,C as P,E as j,G as M}from"./index-hyULoCvK.js";import{_ as F}from"./su-image.DvirpEaQ.js";import{f as z,i as A,h as O,_ as U,S as W,F as G}from"./s-layout.BjspkmIk.js";import{_ as T}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as D,a as H}from"./uni-list.CajBp7-l.js";const q=T({__name:"su-radio",props:{customStyle:{type:Object,default:()=>({})},ui:{type:String,default:"check"},modelValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:!1},bg:{type:String,default:"ui-BG-Main"},unbg:{type:String,default:"borderss"},src:{type:String,default:""},label:{type:String,default:""},labelStyle:{type:Object,default:()=>({})},none:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(b,{emit:_}){const h=e({currentValue:!1}),y=_,g=b;s((()=>{h.currentValue=g.modelValue,y("update:modelValue",h.currentValue)}));const v=a((()=>h.currentValue)),x=()=>{g.disabled||(h.currentValue=!h.currentValue,y("update:modelValue",h.currentValue),y("change",{label:g.label,value:h.currentValue}))};return(e,s)=>{const a=m,_=p;return l(),t(a,{class:n(["ui-radio ss-flex ss-col-center",[{disabled:b.disabled},{img:b.src},b.ui]]),onClick:x,style:i([b.customStyle])},{default:o((()=>[r(e.$slots,"leftLabel",{},void 0,!0),b.none?c("",!0):(l(),t(a,{key:0,class:n(["ui-radio-input",[v.value?"cur "+b.bg:b.unbg,b.src?"radius":"round"]])},null,8,["class"])),b.src?(l(),t(_,{key:1,class:"ui-radio-img radius",src:b.src,mode:"aspectFill"},null,8,["src"])):(l(),t(a,{key:2,class:"ui-radio-content"},{default:o((()=>[r(e.$slots,"default",{},(()=>[u(a,{class:"ui-label-text",style:i([b.labelStyle])},{default:o((()=>[d(f(b.label),1)])),_:1},8,["style"])]),!0)])),_:3})),b.ui.includes("card")?(l(),t(a,{key:3,class:n(["ui-radio-bg round",[v.value?"cur "+b.bg:""]])},null,8,["class"])):c("",!0)])),_:3},8,["class","style"])}}},[["__scopeId","data-v-2c6d6010"]]),E=T({__name:"info",setup(s){const r=e({model:{},rules:{},thirdInfo:{}}),n=[{name:"男",value:"1"},{name:"女",value:"2"}],i=a((()=>y.$store("user").userInfo));function T(e){r.model.sex=e.detail.value}const E=()=>{B("changeMobile")};function L(){V({success:async e=>{const s=e.tempFilePaths[0];await async function(e){if(!e)return;let{data:s}=await G.uploadFile(e);r.model.avatar=s}(s)}})}function N(){B("changePassword")}async function Q(){await y.$platform.useProvider("wechat").bind()&&await K()}function Z(){$({title:"解绑提醒",content:"解绑后您将无法通过微信登录此账号",cancelText:"再想想",confirmText:"确定",success:async function(e){if(!e.confirm)return;await y.$platform.useProvider("wechat").unbind(r.thirdInfo.openid)&&await K()}})}async function J(){const{code:e}=await S.updateUser({avatar:r.model.avatar,nickname:r.model.nickname,sex:r.model.sex});0===e&&await K()}const K=async()=>{const e=await y.$store("user").getInfo();if(r.model=g(e),"H5"!==y.$platform.name){const e=await y.$platform.useProvider("wechat").getInfo();r.thirdInfo=e||{}}};return b((()=>{K()})),(e,s)=>{const a=_(h("su-image"),F),b=C,g=m,B=_(h("uni-easyinput"),z),V=_(h("uni-forms-item"),A),$=j,S=M,G=I,K=_(h("su-radio"),q),R=P,X=_(h("uni-list-item"),D),Y=_(h("uni-list"),H),ee=_(h("uni-forms"),O),se=p,ae=_(h("su-fixed"),U),le=_(h("s-layout"),W);return l(),t(le,{title:"用户信息",class:"set-userinfo-wrap"},{default:o((()=>[u(ee,{model:r.model,rules:r.rules,labelPosition:"left",border:"",class:"form-box"},{default:o((()=>[u(g,{class:"ss-flex ss-row-center ss-col-center ss-p-t-60 ss-p-b-0 bg-white"},{default:o((()=>[u(g,{class:"header-box-content"},{default:o((()=>{var e;return[u(a,{class:"content-img",isPreview:"",current:0,src:null==(e=r.model)?void 0:e.avatar,height:160,width:160,radius:80,mode:"scaleToFill"},null,8,["src"]),u(g,{class:"avatar-action"},{default:o((()=>[u(b,{class:"ss-reset-button avatar-action-btn",onClick:L},{default:o((()=>[d("修改")])),_:1})])),_:1})]})),_:1})])),_:1}),u(g,{class:"bg-white ss-p-x-30"},{default:o((()=>[u(V,{name:"nickname",label:"昵称"},{default:o((()=>[u(B,{modelValue:r.model.nickname,"onUpdate:modelValue":s[0]||(s[0]=e=>r.model.nickname=e),type:"nickname",placeholder:"设置昵称",inputBorder:!1,placeholderStyle:"color:#BBBBBB;font-size:28rpx;line-height:normal"},null,8,["modelValue"])])),_:1}),u(V,{name:"sex",label:"性别"},{default:o((()=>[u(g,{class:"ss-flex ss-col-center ss-h-100"},{default:o((()=>[u(G,{onChange:T,class:"ss-flex ss-col-center"},{default:o((()=>[(l(),v(k,null,x(n,(e=>u(S,{class:"radio",key:e.value},{default:o((()=>[u(g,{class:"ss-flex ss-col-center ss-m-r-32"},{default:o((()=>{var s;return[u($,{value:e.value,color:"var(--ui-BG-Main)",style:{transform:"scale(0.8)"},checked:parseInt(e.value)===(null==(s=r.model)?void 0:s.sex)},null,8,["value","checked"]),u(g,{class:"gender-name"},{default:o((()=>[d(f(e.name),1)])),_:2},1024)]})),_:2},1024)])),_:2},1024))),64))])),_:1})])),_:1})])),_:1}),u(V,{name:"mobile",label:"手机号",onClick:E},{default:o((()=>[u(B,{modelValue:i.value.mobile,"onUpdate:modelValue":s[1]||(s[1]=e=>i.value.mobile=e),placeholder:"请绑定手机号",inputBorder:!1,disabled:"",styles:{disableColor:"#fff"},placeholderStyle:"color:#BBBBBB;font-size:28rpx;line-height:normal",clearable:!1},{right:o((()=>[u(g,{class:"ss-flex ss-col-center"},{default:o((()=>{var e;return[(null==(e=i.value.verification)?void 0:e.mobile)?(l(),t(K,{key:0,modelValue:!0})):(l(),t(b,{key:1,class:"ss-reset-button ss-flex ss-col-center ss-row-center"},{default:o((()=>[u(R,{class:"_icon-forward",style:{color:"#bbbbbb","font-size":"26rpx"}})])),_:1}))]})),_:1})])),_:1},8,["modelValue"])])),_:1}),u(V,{name:"password",label:"登录密码",onClick:N},{default:o((()=>[u(B,{modelValue:i.value.password,"onUpdate:modelValue":s[2]||(s[2]=e=>i.value.password=e),placeholder:"点击修改登录密码",inputBorder:!1,styles:{disableColor:"#fff"},disabled:"",placeholderStyle:"color:#BBBBBB;font-size:28rpx;line-height:normal",clearable:!1},{right:o((()=>[u(g,{class:"ss-flex ss-col-center"},{default:o((()=>{var e;return[(null==(e=i.value.verification)?void 0:e.password)?(l(),t(K,{key:0,class:"ss-flex",modelValue:!0})):(l(),t(b,{key:1,class:"ss-reset-button ss-flex ss-col-center ss-row-center"},{default:o((()=>[u(R,{class:"_icon-forward",style:{color:"#bbbbbb","font-size":"26rpx"}})])),_:1}))]})),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),u(g,{class:"bg-white ss-m-t-14"},{default:o((()=>[u(Y,null,{default:o((()=>[u(X,{clickable:"",onClick:s[3]||(s[3]=e=>w(y).$router.go("/pages/user/address/list")),title:"地址管理",showArrow:"",border:!1,class:"list-border"})])),_:1})])),_:1})])),_:1},8,["model","rules"]),"H5"!==w(y).$platform.name?(l(),t(g,{key:0},{default:o((()=>[u(g,{class:"title-box ss-p-l-30"},{default:o((()=>[d("第三方账号绑定")])),_:1}),u(g,{class:"account-list ss-flex ss-row-between"},{default:o((()=>["WechatOfficialAccount"===w(y).$platform.name?(l(),t(g,{key:0,class:"ss-flex ss-col-center"},{default:o((()=>[u(se,{class:"list-img",src:w(y).$url.static("/static/img/shop/platform/WechatOfficialAccount.png")},null,8,["src"]),u(R,{class:"list-name"},{default:o((()=>[d("微信公众号")])),_:1})])),_:1})):c("",!0),"WechatMiniProgram"===w(y).$platform.name?(l(),t(g,{key:1,class:"ss-flex ss-col-center"},{default:o((()=>[u(se,{class:"list-img",src:w(y).$url.static("/static/img/shop/platform/WechatMiniProgram.png")},null,8,["src"]),u(R,{class:"list-name"},{default:o((()=>[d("微信小程序")])),_:1})])),_:1})):c("",!0),"App"===w(y).$platform.name?(l(),t(g,{key:2,class:"ss-flex ss-col-center"},{default:o((()=>[u(se,{class:"list-img",src:w(y).$url.static("/static/img/shop/platform/wechat.png")},null,8,["src"]),u(R,{class:"list-name"},{default:o((()=>[d("微信开放平台")])),_:1})])),_:1})):c("",!0),u(g,{class:"ss-flex ss-col-center"},{default:o((()=>[r.thirdInfo?(l(),t(g,{key:0,class:"info ss-flex ss-col-center"},{default:o((()=>[u(se,{class:"avatar ss-m-r-20",src:w(y).$url.cdn(r.thirdInfo.avatar)},null,8,["src"]),u(R,{class:"name"},{default:o((()=>[d(f(r.thirdInfo.nickname),1)])),_:1})])),_:1})):c("",!0),u(g,{class:"bind-box ss-m-l-20"},{default:o((()=>[r.thirdInfo.openid?(l(),t(b,{key:0,class:"ss-reset-button relieve-btn",onClick:Z},{default:o((()=>[d(" 解绑 ")])),_:1})):(l(),t(b,{key:1,class:"ss-reset-button bind-btn",onClick:Q},{default:o((()=>[d("绑定")])),_:1}))])),_:1})])),_:1})])),_:1})])),_:1})):c("",!0),u(ae,{bottom:"",placeholder:"",bg:"none"},{default:o((()=>[u(g,{class:"footer-box ss-p-20"},{default:o((()=>[u(b,{class:"ss-rest-button logout-btn ui-Shadow-Main",onClick:J},{default:o((()=>[d("保存")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-fbf1f5aa"]]);export{E as default};
