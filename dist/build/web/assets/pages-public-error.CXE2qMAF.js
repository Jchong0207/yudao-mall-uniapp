import{U as t,o as e,r as o,e as n,f as a,w as r,i as s,j as i,g as c,bi as l,cJ as p}from"./index-DwytzHTY.js";import{_ as u}from"./s-empty.GaFiCP2Y.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";const m=f({__name:"error",setup(f){const m=t(""),x=t("");async function _(){l({url:"/pages/index/index"}),await p()}return e((t=>{m.value=t.errCode,x.value=t.errMsg})),(t,e)=>{const l=o(n("s-empty"),u),p=s;return i(),a(p,{class:"error-page"},{default:r((()=>["NetworkError"===m.value?(i(),a(l,{key:0,icon:"/static/internet-empty.png",text:"网络连接失败",showAction:"",actionText:"重新连接",onClickAction:_,buttonColor:"#ff3000"})):"TemplateError"===m.value?(i(),a(l,{key:1,icon:"/static/internet-empty.png",text:"未找到模板",showAction:"",actionText:"重新加载",onClickAction:_,buttonColor:"#ff3000"})):""!==m.value?(i(),a(l,{key:2,icon:"/static/internet-empty.png",text:x.value,showAction:"",actionText:"重新加载",onClickAction:_,buttonColor:"#ff3000"},null,8,["text"])):c("",!0)])),_:1})}}},[["__scopeId","data-v-88db9efc"]]);export{m as default};
