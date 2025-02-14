import{v as e,c as s,ab as t,a9 as l,r as a,e as o,j as r,f as c,w as u,k as d,u as n,s as i,p as f,t as p,a1 as m,g as y,l as _,F as k,m as b,y as x,q as g,i as h,C as S,D as v,S as w}from"./index-sTbmrhgN.js";import{_ as P}from"./su-number-box.DFYPbD4G.js";import{c as I}from"./s-layout.DXqCFQ1i.js";import{f as A,c as C}from"./useGoods.ChXgV4tj.js";import{_ as j}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{m as O}from"./min.nKVuoSVN.js";const $=j({__name:"s-select-seckill-sku",props:{modelValue:{type:Object,default(){}},show:{type:Boolean,default:!1},singleLimitCount:{type:Number,default:1}},emits:["change","addCart","buy","close"],setup(j,{emit:$}){const V=$,E=j,U=e({goodsInfo:s((()=>E.modelValue)),selectedSku:{},currentPropertyArray:[]}),F=s((()=>{let e=`￥${A(U.goodsInfo.price)}`;if(!t(U.selectedSku)){const s=U.selectedSku;e=`${s.point}${s.pointPrice?`+￥${A(s.pointPrice)}`:""}`}return e})),L=C(U.goodsInfo.skus),N=s((()=>{let e=U.goodsInfo.skus;for(let s of e)s.value_id_array=s.properties.map((e=>e.valueId));return e}));l((()=>U.selectedSku),(e=>{V("change",e)}),{immediate:!0,deep:!0});const q=()=>{U.selectedSku.id?U.selectedSku.stock<=0?i.$helper.toast("库存不足"):V("buy",U.selectedSku):i.$helper.toast("请选择规格")};const B=(e=!1,s=0,t=0)=>{let l=[];if(e)for(let r of N.value)r.stock<=0||r.value_id_array.indexOf(t)>=0&&l.push(r);else l=D();let a=[];for(let r of l)a=a.concat(r.value_id_array);if(a=Array.from(new Set(a)),e){let e=a.indexOf(t);a.splice(e,1)}else U.currentPropertyArray.forEach((e=>{if(""!==e.toString())return;let s=a.indexOf(e);s>=0&&a.splice(s,1)}));let o=[];e?o=[s]:U.currentPropertyArray.forEach(((e,s)=>{""!==e&&o.push(s)}));for(let r in L)if(!(o.indexOf(L[r].id)>=0))for(let e in L[r].values)L[r].values[e].disabled=a.indexOf(L[r].values[e].id)<0},D=()=>{let e=[];for(let s of N.value){if(s.stock<=0)continue;let t=!0;U.currentPropertyArray.forEach((e=>{""!==e.toString()&&s.value_id_array.indexOf(e)<0&&(t=!1)})),t&&e.push(s)}return e};return B(!1),(e,s)=>{const l=g,C=h,$=S,E=v,N=a(o("su-number-box"),P),G=w,T=a(o("su-popup"),I);return r(),c(T,{show:j.show,round:"10",onClose:s[2]||(s[2]=e=>V("close"))},{default:u((()=>[d(C,{class:"ss-modal-box bg-white ss-flex-col"},{default:u((()=>[d(C,{class:"modal-header ss-flex ss-col-center"},{default:u((()=>[d(C,{class:"header-left ss-m-r-30"},{default:u((()=>[d(l,{class:"sku-image",src:n(i).$url.cdn(U.selectedSku.picUrl||U.goodsInfo.picUrl),mode:"aspectFill"},null,8,["src"])])),_:1}),d(C,{class:"header-right ss-flex-col ss-row-between ss-flex-1"},{default:u((()=>[d(C,{class:"goods-title ss-line-2"},{default:u((()=>[f(p(U.goodsInfo.name),1)])),_:1}),d(C,{class:"header-right-bottom ss-flex ss-col-center ss-row-between"},{default:u((()=>[U.goodsInfo.activity_type===n(m).POINT.type?(r(),c(C,{key:0,class:"price-text ss-flex"},{default:u((()=>[n(t)(U.selectedSku)?y("",!0):(r(),c(l,{key:0,src:n(i).$url.static("/static/img/shop/goods/score1.svg"),class:"point-img"},null,8,["src"])),d($,{class:"point-text ss-m-r-16"},{default:u((()=>[f(p(F.value),1)])),_:1})])),_:1})):(r(),c(C,{key:1,class:"price-text"},{default:u((()=>[f(" ￥"+p(n(A)(U.selectedSku.price||U.goodsInfo.price)),1)])),_:1})),d(C,{class:"tig ss-flex ss-col-center"},{default:u((()=>[d(C,{class:"tig-icon ss-flex ss-col-center ss-row-center"},{default:u((()=>[d($,{class:"cicon-alarm"})])),_:1}),d(C,{class:"tig-title"},{default:u((()=>[f("秒杀价")])),_:1})])),_:1}),d(C,{class:"stock-text ss-m-l-20"},{default:u((()=>[f(" 库存"+p(U.selectedSku.stock||U.goodsInfo.stock)+"件 ",1)])),_:1})])),_:1})])),_:1})])),_:1}),d(C,{class:"modal-content ss-flex-1"},{default:u((()=>[d(G,{"scroll-y":"true",class:"modal-content-scroll"},{default:u((()=>[(r(!0),_(k,null,b(n(L),(e=>(r(),c(C,{class:"sku-item ss-m-b-20",key:e.id},{default:u((()=>[d(C,{class:"label-text ss-m-b-20"},{default:u((()=>[f(p(e.name),1)])),_:2},1024),d(C,{class:"ss-flex ss-col-center ss-flex-wrap"},{default:u((()=>[(r(!0),_(k,null,b(e.values,(s=>(r(),c(E,{class:x(["ss-reset-button spec-btn",[{"checked-btn":U.currentPropertyArray[e.id]===s.id},{"disabled-btn":!0===s.disabled}]]),key:s.id,disabled:!0===s.disabled,onClick:t=>((e,s)=>{let t=!0;void 0!==U.currentPropertyArray[e]&&U.currentPropertyArray[e]===s?(t=!1,U.currentPropertyArray.splice(e,1,"")):U.currentPropertyArray[e]=s;let l=[];U.currentPropertyArray.forEach((e=>{""!==e&&l.push(e)}));let a=D();l.length===L.length&&a.length?(a[0].count=U.selectedSku.count||1,U.selectedSku=a[0]):U.selectedSku={},B(t,e,s)})(e.id,s.id)},{default:u((()=>[f(p(s.name),1)])),_:2},1032,["class","disabled","onClick"])))),128))])),_:2},1024)])),_:2},1024)))),128)),d(C,{class:"buy-num-box ss-flex ss-col-center ss-row-between"},{default:u((()=>[d(C,{class:"label-text"},{default:u((()=>[f("购买数量")])),_:1}),d(N,{min:1,max:n(O)([j.singleLimitCount,U.selectedSku.stock]),step:1,modelValue:U.selectedSku.count,"onUpdate:modelValue":s[0]||(s[0]=e=>U.selectedSku.count=e),onChange:s[1]||(s[1]=e=>{var s;(s=e)>0&&U.selectedSku.count!==s&&(U.selectedSku.count=s)}),activity:"seckill"},null,8,["max","modelValue"])])),_:1})])),_:1})])),_:1}),d(C,{class:"modal-footer"},{default:u((()=>[d(C,{class:"buy-box ss-flex ss-col-center ss-flex ss-col-center ss-row-center"},{default:u((()=>[d(E,{class:"ss-reset-button buy-btn",onClick:q},{default:u((()=>[f("确认")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-f14c63e3"]]);export{$ as _};
