import{v as a,o as t,aq as o,r as s,e,f as n,w as i,a5 as l,j as r,k as p,g as u,l as c,m as d,F as g,u as m,s as f,y as b,A as y,p as k,t as _,a6 as T,D as C,i as S}from"./index-BKnI5veo.js";import{_ as j}from"./su-tabs.B6taBwRS.js";import{_ as x}from"./su-sticky.Bt06CEYN.js";import{_ as v}from"./s-empty.CKgdhVxR.js";import{_ as w}from"./s-coupon-list.lqErh275.js";import{_ as N}from"./uni-load-more.cZn6qWzX.js";import{S as h}from"./s-layout.Drz3FS_-.js";import{r as z}from"./index.lUf8TWMy.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{l as M}from"./lodash.default.BZH_nIyb.js";import"./useGoods.BPUYIEuD.js";import"./min.CY-78xFv.js";const $=I({__name:"list",setup(I){const $=a({currentTab:0,type:"1",pagination:{list:[],total:0,pageNo:1,pageSize:5},loadStatus:""}),q=[{name:"领券中心",value:"all"},{name:"已领取",value:"1"},{name:"已使用",value:"2"},{name:"已失效",value:"3"}];function P(a){$.currentTab=a.index,$.type=a.value,z($.pagination),0===$.currentTab?A():D()}async function A(){$.loadStatus="loading";const{data:a,code:t}=await l.getCouponTemplatePage({pageNo:$.pagination.pageNo,pageSize:$.pagination.pageSize});0===t&&($.pagination.list=M.concat($.pagination.list,a.list),$.pagination.total=a.total,$.loadStatus=$.pagination.list.length<$.pagination.total?"more":"noMore")}async function D(){$.loadStatus="loading";const{data:a,code:t}=await l.getCouponPage({pageNo:$.pagination.pageNo,pageSize:$.pagination.pageSize,status:$.type});0===t&&($.pagination.list=M.concat($.pagination.list,a.list),$.pagination.total=a.total,$.loadStatus=$.pagination.list.length<$.pagination.total?"more":"noMore")}function F(){"noMore"!==$.loadStatus&&($.pagination.pageNo++,0===$.currentTab?A():D())}return t((a=>{"all"!==a.type&&a.type?("geted"===a.type?$.currentTab=1:"used"===a.type?$.currentTab=2:$.currentTab=3,$.type=$.currentTab,D()):A()})),o((()=>{F()})),(a,t)=>{const o=s(e("su-tabs"),j),I=s(e("su-sticky"),x),M=s(e("s-empty"),v),D=C,G=s(e("s-coupon-list"),w),Z=S,B=s(e("uni-load-more"),N),E=s(e("s-layout"),h);return r(),n(E,{bgStyle:{color:"#f2f2f2"},title:"优惠券"},{default:i((()=>[p(I,{bgColor:"#fff"},{default:i((()=>[p(o,{list:q,scrollable:!1,onChange:P,current:$.currentTab},null,8,["current"])])),_:1}),0===$.pagination.total?(r(),n(M,{key:0,icon:"/static/coupon-empty.png",text:"暂无优惠券"})):u("",!0),0===$.currentTab?(r(!0),c(g,{key:1},d($.pagination.list,(a=>(r(),n(Z,{key:a.id},{default:i((()=>[p(G,{data:a,onClick:t=>m(f).$router.go("/pages/coupon/detail",{id:a.id})},{default:i((()=>[p(D,{class:b(["ss-reset-button card-btn ss-flex ss-row-center ss-col-center",a.canTake?"":"border-btn"]),onClick:y((t=>async function(a){const{code:t}=await l.takeCoupon(a);0===t&&(T({title:"领取成功"}),setTimeout((()=>{z($.pagination),A()}),1e3))}(a.id)),["stop"]),disabled:!a.canTake},{default:i((()=>[k(_(a.canTake?"立即领取":"已领取"),1)])),_:2},1032,["class","onClick","disabled"])])),_:2},1032,["data","onClick"])])),_:2},1024)))),128)):(r(!0),c(g,{key:2},d($.pagination.list,(a=>(r(),n(Z,{key:a.id},{default:i((()=>[p(G,{data:a,type:"user",onClick:t=>m(f).$router.go("/pages/coupon/detail",{couponId:a.id})},{default:i((()=>[p(D,{class:b(["ss-reset-button card-btn ss-flex ss-row-center ss-col-center",1!==a.status?"disabled-btn":""]),disabled:1!==a.status,onClick:y((t=>m(f).$router.go("/pages/coupon/detail",{couponId:a.id})),["stop"])},{default:i((()=>[k(_(1===a.status?"立即使用":2===a.status?"已使用":"已过期"),1)])),_:2},1032,["class","disabled","onClick"])])),_:2},1032,["data","onClick"])])),_:2},1024)))),128)),$.pagination.total>0?(r(),n(B,{key:3,status:$.loadStatus,"content-text":{contentdown:"上拉加载更多"},onClick:F},null,8,["status"])):u("",!0)])),_:1})}}},[["__scopeId","data-v-5071bee3"]]);export{$ as default};
