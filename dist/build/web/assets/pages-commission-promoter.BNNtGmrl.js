import{v as a,aq as t,o as e,r as s,e as n,f as o,w as l,cG as i,s as r,j as u,k as c,l as p,m,F as g,g as d,i as f,y as _,p as k,t as y,C as h,q as w}from"./index-BKnI5veo.js";import{_ as D}from"./uni-load-more.cZn6qWzX.js";import{S}from"./s-layout.Drz3FS_-.js";import{r as b}from"./index.lUf8TWMy.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as v}from"./lodash.default.BZH_nIyb.js";import"./min.CY-78xFv.js";const C=j({__name:"promoter",setup(j){const C=["周排行","月排行"],M=a({currentTab:0,times:[],pagination:{list:[],total:0,pageNo:1,pageSize:10},loadStatus:""});async function T(){M.loadStatus="loading";const{code:a,data:t}=await i.getBrokerageUserRankPageByUserCount({pageNo:M.pagination.pageNo,pageSize:M.pagination.pageSize,"times[0]":M.times[0],"times[1]":M.times[1]});0===a&&(M.pagination.list=v.concat(M.pagination.list,t.list),M.pagination.total=t.total,M.loadStatus=M.pagination.list.length<M.pagination.total?"more":"noMore")}function x(){"noMore"!==M.loadStatus&&(M.pagination.pageNo++,getList())}function F(){let a;a=0===M.currentTab?function(){const a=new Date,t=a.getDay();return[new Date(a.getFullYear(),a.getMonth(),a.getDate()-t,0,0,0),new Date(a.getFullYear(),a.getMonth(),a.getDate()+(6-t),23,59,59)]}():function(){const a=new Date,t=a.getFullYear(),e=a.getMonth(),s=new Date(t,e,1,0,0,0),n=new Date(t,e+1,1),o=new Date(n.getTime()-1);return[s,o]}(),M.times=[N(a[0]),N(a[1])]}function N(a){return r.$helper.timeFormat(a,"yyyy-mm-dd hh:MM:ss")}return t((()=>x())),e((function(){F(),T()})),(a,t)=>{const e=f,i=h,r=w,j=s(n("uni-load-more"),D),v=s(n("s-layout"),S);return u(),o(v,{title:"推广人排行榜"},{default:l((()=>[c(e,{class:"promoter-rank"},{default:l((()=>[c(e,{class:"nav"},{default:l((()=>[(u(),p(g,null,m(C,((a,t)=>c(e,{class:_(["item",M.currentTab===t?"active":""]),key:t,onClick:a=>function(a){M.currentTab!==a&&(M.currentTab=a,b(M.pagination),F(),T())}(t)},{default:l((()=>[k(y(a),1)])),_:2},1032,["class","onClick"]))),64))])),_:1}),c(e,{class:"top-list"},{default:l((()=>[(u(!0),p(g,null,m(M.pagination.list,((a,t)=>(u(),p(g,{key:t},[t<3?(u(),o(e,{key:0,class:"item"},{default:l((()=>[c(e,{class:"pictrue"},{default:l((()=>[c(e,{class:"num"},{default:l((()=>[c(i,null,{default:l((()=>[k(y(t+1),1)])),_:2},1024)])),_:2},1024),c(r,{class:"image",src:a.avatar},null,8,["src"])])),_:2},1024),c(e,{class:"people"},{default:l((()=>[k(y(a.brokerageUserCount)+"人",1)])),_:2},1024),c(e,{class:"nickname"},{default:l((()=>[k(y(a.nickname),1)])),_:2},1024)])),_:2},1024)):d("",!0)],64)))),128))])),_:1})])),_:1}),c(e,{class:"other-list"},{default:l((()=>[(u(!0),p(g,null,m(M.pagination.list,((a,t)=>(u(),p(g,{key:t},[t>2?(u(),o(e,{key:0,class:"item"},{default:l((()=>[c(e,{class:"num"},{default:l((()=>[k(y(t+1),1)])),_:2},1024),c(e,{class:"pictrue"},{default:l((()=>[c(r,{class:"image",src:a.avatar},null,8,["src"])])),_:2},1024),c(e,{class:"nickname"},{default:l((()=>[k(y(a.nickname),1)])),_:2},1024),c(e,{class:"people"},{default:l((()=>[k(y(a.brokerageUserCount)+"人",1)])),_:2},1024)])),_:2},1024)):d("",!0)],64)))),128))])),_:1}),M.pagination.total>0?(u(),o(j,{key:0,status:M.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:x},null,8,["status"])):d("",!0)])),_:1})}}},[["__scopeId","data-v-853e8301"]]);export{C as default};
