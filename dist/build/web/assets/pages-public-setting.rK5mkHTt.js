import{c as s,cI as t,v as e,r as o,e as l,f as a,w as r,j as c,k as i,u,s as n,p as f,t as d,g as p,M as g,aX as b,q as m,i as _,D as x}from"./index-hyULoCvK.js";import{_ as h,a as w}from"./uni-list.CajBp7-l.js";import{_ as $,S as k}from"./s-layout.BjspkmIk.js";import{_ as v}from"./_plugin-vue_export-helper.BCo6x5W8.js";const y=v({__name:"setting",setup(v){const y=s((()=>n.$store("app").info)),C=s((()=>n.$store("user").isLogin)),j=t().currentSize+"Kb";function A(){n.$platform.checkUpdate()}function M(){g({title:"提示",content:"确认注销账号？",success:async function(s){if(!s.confirm)return;const{code:t}=await b.logout();0===t&&(n.$store("user").logout(),n.$router.go("/pages/index/user"))}})}function S(){g({title:"提示",content:"确认退出账号？",success:async function(s){if(!s.confirm)return;const{code:t}=await b.logout();0===t&&(n.$store("user").logout(),n.$router.go("/pages/index/user"))}})}return e({showModal:!1}),(s,t)=>{const e=m,g=_,b=o(l("uni-list-item"),h),v=o(l("uni-list"),w),T=x,I=o(l("su-fixed"),$),q=o(l("s-layout"),k);return c(),a(q,{bgStyle:{color:"#fff"},class:"set-wrap",title:"系统设置"},{default:r((()=>[i(g,{class:"header-box ss-flex-col ss-row-center ss-col-center"},{default:r((()=>[i(e,{class:"logo-img ss-m-b-46",src:u(n).$url.cdn(y.value.logo),mode:"aspectFit"},null,8,["src"]),i(g,{class:"name ss-m-b-24"},{default:r((()=>[f(d(y.value.name),1)])),_:1})])),_:1}),i(g,{class:"container-list"},{default:r((()=>[i(v,{border:!1},{default:r((()=>[i(b,{title:"当前版本",rightText:y.value.version,showArrow:"",clickable:"",border:!1,class:"list-border",onClick:A},null,8,["rightText"]),i(b,{title:"本地缓存",rightText:j,showArrow:"",border:!1,class:"list-border"}),i(b,{title:"关于我们",showArrow:"",clickable:"",border:!1,class:"list-border",onClick:t[0]||(t[0]=s=>u(n).$router.go("/pages/public/richtext",{title:"关于我们"}))}),C.value&&"ios"===u(n).$platform.os&&"App"===u(n).$platform.name?(c(),a(b,{key:0,title:"注销账号",rightText:"",showArrow:"",clickable:"",border:!1,class:"list-border",onClick:M})):p("",!0)])),_:1})])),_:1}),i(g,{class:"set-footer ss-flex-col ss-row-center ss-col-center"},{default:r((()=>[i(g,{class:"agreement-box ss-flex ss-col-center ss-m-b-40"},{default:r((()=>[i(g,{class:"ss-flex ss-col-center ss-m-b-10"},{default:r((()=>[i(g,{class:"tcp-text",onClick:t[1]||(t[1]=s=>u(n).$router.go("/pages/public/richtext",{title:"用户协议"}))},{default:r((()=>[f(" 《用户协议》 ")])),_:1}),i(g,{class:"agreement-text"},{default:r((()=>[f("与")])),_:1}),i(g,{class:"tcp-text",onClick:t[2]||(t[2]=s=>u(n).$router.go("/pages/public/richtext",{title:"隐私协议"}))},{default:r((()=>[f(" 《隐私协议》 ")])),_:1})])),_:1})])),_:1}),i(g,{class:"copyright-text ss-m-b-10"},{default:r((()=>[f(d(y.value.copyright),1)])),_:1}),i(g,{class:"copyright-text"},{default:r((()=>[f(d(y.value.copytime),1)])),_:1})])),_:1}),i(I,{bottom:"",placeholder:""},{default:r((()=>[i(g,{class:"ss-p-x-20 ss-p-b-40"},{default:r((()=>[C.value?(c(),a(T,{key:0,class:"loginout-btn ss-reset-button ui-BG-Main ui-Shadow-Main",onClick:S},{default:r((()=>[f(" 退出登录 ")])),_:1})):p("",!0)])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-244f1b51"]]);export{y as default};
