import{j as t,f as a,w as s,k as e,p as o,t as l,l as i,F as n,m as c,u as r,s as d,i as u,q as g,r as p,e as f,v as m,c as _,o as y,x,g as v,S as b,y as k}from"./index-hyULoCvK.js";import{_ as h}from"./uni-load-more.uDSBh7Xk.js";import{S as w}from"./s-layout.BjspkmIk.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as S}from"./s-goods-column.Cee0cccB.js";import{f as M}from"./useGoods.BEOTRLPh.js";import{C}from"./category.CSkDZFif.js";import{S as L}from"./spu.BiAbryIM.js";import{h as N}from"./index.B9XYHGVA.js";import{l as I}from"./lodash.default.ajgDM2-e.js";import"./min.f1WvGMf3.js";const $=j({__name:"second-one",props:{data:{type:Object,default:()=>({})},activeMenu:[Number,String]},setup(p){const f=p;return(m,_)=>{const y=u,x=g;return t(),a(y,null,{default:s((()=>[e(y,{class:"title-box ss-flex ss-col-center ss-row-center ss-p-b-30"},{default:s((()=>[e(y,{class:"title-line-left"}),e(y,{class:"title-text ss-p-x-20"},{default:s((()=>[o(l(f.data[p.activeMenu].name),1)])),_:1}),e(y,{class:"title-line-right"})])),_:1}),e(y,{class:"goods-item-box ss-flex ss-flex-wrap ss-p-b-20"},{default:s((()=>[(t(!0),i(n,null,c(f.data[p.activeMenu].children,(i=>(t(),a(y,{class:"goods-item",key:i.id,onClick:t=>r(d).$router.go("/pages/goods/list",{categoryId:i.id})},{default:s((()=>[e(x,{class:"goods-img",src:i.picUrl,mode:"aspectFill"},null,8,["src"]),e(y,{class:"ss-p-10"},{default:s((()=>[e(y,{class:"goods-title ss-line-1"},{default:s((()=>[o(l(i.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-b2688911"]]),z=j({__name:"first-one",props:{pagination:Object},setup:o=>(l,g)=>{const m=p(f("s-goods-column"),S),_=u;return t(),a(_,{class:"ss-flex-col"},{default:s((()=>[(t(!0),i(n,null,c(o.pagination.list,(o=>(t(),a(_,{class:"goods-box",key:o.id},{default:s((()=>[e(m,{size:"sl",data:o,onClick:t=>r(d).$router.go("/pages/goods/index",{id:o.id})},null,8,["data","onClick"])])),_:2},1024)))),128))])),_:1})}},[["__scopeId","data-v-13cff1a5"]]),F=j({__name:"first-two",props:{pagination:Object},setup:p=>(f,m)=>{const _=g,y=u;return t(),a(y,null,{default:s((()=>[e(y,{class:"ss-flex flex-wrap"},{default:s((()=>{var u;return[(t(!0),i(n,null,c(null==(u=p.pagination)?void 0:u.list,(i=>(t(),a(y,{class:"goods-box",key:i.id},{default:s((()=>[e(y,{onClick:t=>r(d).$router.go("/pages/goods/index",{id:i.id})},{default:s((()=>[e(y,{class:"goods-img"},{default:s((()=>[e(_,{class:"goods-img",src:i.picUrl,mode:"aspectFit"},null,8,["src"])])),_:2},1024),e(y,{class:"goods-content"},{default:s((()=>[e(y,{class:"goods-title ss-line-1 ss-m-b-28"},{default:s((()=>[o(l(i.name),1)])),_:2},1024),e(y,{class:"goods-price"},{default:s((()=>[o("￥"+l(r(M)(i.price)),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])])),_:2},1024)))),128))]})),_:1})])),_:1})}},[["__scopeId","data-v-ac64fca1"]]),O=j({__name:"category",setup(j){const S=m({style:"second_one",categoryList:[],activeMenu:0,pagination:{list:[],total:[],pageNo:1,pageSize:6},loadStatus:""}),{safeArea:M}=d.$platform.device,O=_((()=>M.height-44-50));const U=t=>{S.activeMenu=t,"first_one"!==S.style&&"first_two"!==S.style||(S.pagination.pageNo=1,S.pagination.list=[],S.pagination.total=0,q())};async function q(){S.loadStatus="loading";const t=await L.getSpuPage({categoryId:S.categoryList[S.activeMenu].id,pageNo:S.pagination.pageNo,pageSize:S.pagination.pageSize});0===t.code&&(S.pagination.list=I.concat(S.pagination.list,t.data.list),S.pagination.total=t.data.total,S.loadStatus=S.pagination.list.length<S.pagination.total?"more":"noMore")}function A(){"noMore"!==S.loadStatus&&(S.pagination.pageNo++,q())}function G(){A()}return y((async t=>{await async function(){const{code:t,data:a}=await C.getCategoryList();0===t&&(S.categoryList=N(a))}();const a=S.categoryList.find((a=>a.id===Number(t.id)));U(a?S.categoryList.indexOf(a):0)})),(m,_)=>{const y=u,j=b,M=g,C=p(f("uni-load-more"),h),L=p(f("s-layout"),w);return t(),a(L,{bgStyle:{color:"#fff"},tabbar:"/pages/index/category",title:"分类"},{default:s((()=>[e(y,{class:"s-category"},{default:s((()=>[e(y,{class:"three-level-wrap ss-flex ss-col-top",style:x([{height:O.value+"px"}])},{default:s((()=>{var u;return[e(j,{class:"side-menu-wrap","scroll-y":"",style:x([{height:O.value+"px"}])},{default:s((()=>[(t(!0),i(n,null,c(S.categoryList,((i,n)=>(t(),a(y,{class:k(["menu-item ss-flex",[{"menu-item-active":n===S.activeMenu}]]),key:i.id,onClick:t=>U(n)},{default:s((()=>[e(y,{class:"menu-title ss-line-1"},{default:s((()=>[o(l(i.name),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1},8,["style"]),(null==(u=S.categoryList)?void 0:u.length)?(t(),a(j,{key:0,class:"goods-list-box","scroll-y":"",style:x([{height:O.value+"px"}]),onScrolltolower:G},{default:s((()=>[S.categoryList[S.activeMenu].picUrl?(t(),a(M,{key:0,class:"banner-img",src:r(d).$url.cdn(S.categoryList[S.activeMenu].picUrl),mode:"widthFix"},null,8,["src"])):v("",!0),"first_one"===S.style?(t(),a(z,{key:1,pagination:S.pagination},null,8,["pagination"])):v("",!0),"first_two"===S.style?(t(),a(F,{key:2,pagination:S.pagination},null,8,["pagination"])):v("",!0),"second_one"===S.style?(t(),a($,{key:3,data:S.categoryList,activeMenu:S.activeMenu},null,8,["data","activeMenu"])):v("",!0),("first_one"===S.style||"first_two"===S.style)&&S.pagination.total>0?(t(),a(C,{key:4,status:S.loadStatus,"content-text":{contentdown:"点击查看更多"},onClick:A},null,8,["status"])):v("",!0)])),_:1},8,["style"])):v("",!0)]})),_:1},8,["style"])])),_:1})])),_:1})}}},[["__scopeId","data-v-076319b5"]]);export{O as default};
