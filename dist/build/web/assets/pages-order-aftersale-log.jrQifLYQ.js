import{j as t,f as e,w as a,k as s,y as l,g as i,p as o,t as d,u as n,s as c,C as r,i as u,v as m,o as f,r as _,e as p,l as y,m as x,F as g}from"./index-hyULoCvK.js";import{S as b}from"./s-layout.BjspkmIk.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{A as v}from"./afterSale.CqOWUXz8.js";const h=j({__name:"log-item",props:{item:{type:Object,default(){}},index:{type:Number,default:0},data:{type:Object,default(){}}},setup:m=>(f,_)=>{const p=r,y=u;return t(),e(y,{class:"log-item ss-flex"},{default:a((()=>[s(y,{class:"log-icon ss-flex-col ss-col-center ss-m-r-20"},{default:a((()=>[s(p,{class:l(["cicon-title",0===m.index?"activity-color":""])},null,8,["class"]),m.data.length-1!==m.index?(t(),e(y,{key:0,class:"line"})):i("",!0)])),_:1}),s(y,null,{default:a((()=>[s(y,{class:"text"},{default:a((()=>[o(d(m.item.content),1)])),_:1}),s(y,{class:"date"},{default:a((()=>[o(d(n(c).$helper.timeFormat(m.item.createTime,"yyyy-mm-dd hh:MM:ss")),1)])),_:1})])),_:1})])),_:1})}},[["__scopeId","data-v-bbeb067c"]]),k=j({__name:"log",setup(l){const i=m({list:[]});return f((t=>{i.aftersaleId=t.id,async function(t){const{data:e}=await v.getAfterSaleLogList(t);i.list=e}(t.id)})),(l,o)=>{const d=u,n=_(p("s-layout"),b);return t(),e(n,{title:"售后进度"},{default:a((()=>[s(d,{class:"log-box"},{default:a((()=>[(t(!0),y(g,null,x(i.list,((l,o)=>(t(),e(d,{key:l.id},{default:a((()=>[s(h,{item:l,index:o,data:i.list},null,8,["item","index","data"])])),_:2},1024)))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-b61de3f9"]]);export{k as default};
