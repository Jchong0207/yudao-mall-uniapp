import{v as t,a9 as o,c as e,s,r,e as a,j as l,f as i,w as p,l as d,F as u,m as n,x as y,k as c,u as g,p as m,t as b,g as f,B as h,a1 as v,D as x,i as C,U as _,aq as k,o as B,S as R}from"./index-sTbmrhgN.js";import{_ as S}from"./s-goods-column.BdpwrgXz.js";import{S as T}from"./spu.BcBO2JGi.js";import{_ as L}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as w}from"./s-empty.BrbtlCrO.js";import{_ as I}from"./uni-load-more.CEV2kGaC.js";import{P as j}from"./point.CdtuSytB.js";import{S as F}from"./s-layout.DXqCFQ1i.js";import"./useGoods.ChXgV4tj.js";import"./index.Bv-U3561.js";const $=L({__name:"s-point-card",props:{property:{type:Object,default:()=>({})}},setup(_,{expose:k}){const B="oneColBigImg",R="twoCol",L="oneColSmallImg",w=t({spuList:[],leftSpuList:[],rightSpuList:[],property:{layoutType:"oneColBigImg",fields:{name:{show:!0,color:"#000"},introduction:{show:!0,color:"#999"},price:{show:!0,color:"#ff3000"},marketPrice:{show:!0,color:"#c4c4c4"},salesCount:{show:!0,color:"#c4c4c4"},stock:{show:!0,color:"#c4c4c4"}},badge:{show:!1,imgUrl:""},btnBuy:{type:"text",text:"立即兑换",bgBeginColor:"#FF6000",bgEndColor:"#FE832A",imgUrl:""},borderRadiusTop:8,borderRadiusBottom:8,space:8,style:{bgType:"color",bgColor:"",marginLeft:8,marginRight:8,marginBottom:8}}}),I=_;o((()=>I.property),(t=>{w.property={...w.property,...t}}),{immediate:!0,deep:!0});const{marginLeft:j,marginRight:F}=w.property.styles||{},$=e((()=>"text"===w.property.btnBuy.type?{background:`linear-gradient(to right, ${w.property.btnBuy.bgBeginColor}, ${w.property.btnBuy.bgEndColor})`}:"img"===w.property.btnBuy.type?{width:"54rpx",height:"54rpx",background:`url(${s.$url.cdn(w.property.btnBuy.imgUrl)}) no-repeat`,backgroundSize:"100% 100%"}:void 0));let A=0,P=0,z=0;function W(t=0,o="left"){w.spuList[A]&&("left"===o&&(P+=t),"right"===o&&(z+=t),P<=z?w.leftSpuList.push(w.spuList[A]):w.rightSpuList.push(w.spuList[A]),A++)}async function E(t){const{data:o}=await T.getSpuDetail(t);return o}return k({concatActivity:async function(t){if(!h(t)){for(const o of t)w.spuList.push(await E(o.spuId));t.forEach((t=>{const o=w.spuList.find((o=>t.spuId===o.id));o&&(o.pointStock=t.stock,o.pointTotalStock=t.totalStock,o.point=t.point,o.pointPrice=t.price,o.activityId=t.id,o.activityType=v.POINT.type)})),w.property.layoutType===R&&W()}},getActivityCount:function(){return w.spuList.length},calculateGoodsColumn:W}),(t,o)=>{const e=x,h=r(a("s-goods-column"),S),v=C;return l(),i(v,null,{default:p((()=>[w.property.layoutType===B&&w.spuList.length?(l(),i(v,{key:0,class:"goods-sl-box"},{default:p((()=>[(l(!0),d(u,null,n(w.spuList,(t=>(l(),i(v,{class:"goods-box",key:t.id,style:y([{marginBottom:2*w.property.space+"rpx"}])},{default:p((()=>{var o;return[c(h,{class:"",size:"sl",goodsFields:w.property.fields,tagStyle:w.property.badge,data:t,titleColor:null==(o=w.property.fields.name)?void 0:o.color,subTitleColor:w.property.fields.introduction.color,topRadius:w.property.borderRadiusTop,bottomRadius:w.property.borderRadiusBottom,onClick:o=>g(s).$router.go("/pages/goods/point",{id:t.activityId})},{cart:p((()=>[c(e,{class:"ss-reset-button cart-btn",style:y([$.value])},{default:p((()=>[m(b("text"===w.property.btnBuy.type?w.property.btnBuy.text:""),1)])),_:1},8,["style"])])),_:2},1032,["goodsFields","tagStyle","data","titleColor","subTitleColor","topRadius","bottomRadius","onClick"])]})),_:2},1032,["style"])))),128))])),_:1})):f("",!0),w.property.layoutType===L&&w.spuList.length?(l(),i(v,{key:1,class:"goods-lg-box"},{default:p((()=>[(l(!0),d(u,null,n(w.spuList,(t=>(l(),i(v,{class:"goods-box",style:y([{marginBottom:w.property.space+"px"}]),key:t.id},{default:p((()=>{var o;return[c(h,{class:"goods-card",size:"lg",goodsFields:w.property.fields,data:t,tagStyle:w.property.badge,titleColor:null==(o=w.property.fields.name)?void 0:o.color,subTitleColor:w.property.fields.introduction.color,topRadius:w.property.borderRadiusTop,bottomRadius:w.property.borderRadiusBottom,onClick:o=>g(s).$router.go("/pages/goods/point",{id:t.activityId})},{cart:p((()=>[c(e,{class:"ss-reset-button cart-btn",style:y([$.value])},{default:p((()=>[m(b("text"===w.property.btnBuy.type?w.property.btnBuy.text:""),1)])),_:1},8,["style"])])),_:2},1032,["goodsFields","data","tagStyle","titleColor","subTitleColor","topRadius","bottomRadius","onClick"])]})),_:2},1032,["style"])))),128))])),_:1})):f("",!0),w.property.layoutType===R&&w.spuList.length?(l(),i(v,{key:2,class:"goods-md-wrap ss-flex ss-flex-wrap ss-col-top"},{default:p((()=>[c(v,{class:"goods-list-box"},{default:p((()=>[(l(!0),d(u,null,n(w.leftSpuList,(t=>(l(),i(v,{class:"left-list",style:y([{paddingRight:w.property.space+"rpx",marginBottom:w.property.space+"px"}]),key:t.id},{default:p((()=>{var r;return[c(h,{class:"goods-md-box",size:"md",goodsFields:w.property.fields,tagStyle:w.property.badge,data:t,titleColor:null==(r=w.property.fields.name)?void 0:r.color,subTitleColor:w.property.fields.introduction.color,topRadius:w.property.borderRadiusTop,bottomRadius:w.property.borderRadiusBottom,titleWidth:330-g(j)-g(F),onClick:o=>g(s).$router.go("/pages/goods/point",{id:t.activityId}),onGetHeight:o[0]||(o[0]=t=>W(t,"left"))},{cart:p((()=>[c(e,{class:"ss-reset-button cart-btn",style:y([$.value])},{default:p((()=>[m(b("text"===w.property.btnBuy.type?w.property.btnBuy.text:""),1)])),_:1},8,["style"])])),_:2},1032,["goodsFields","tagStyle","data","titleColor","subTitleColor","topRadius","bottomRadius","titleWidth","onClick"])]})),_:2},1032,["style"])))),128))])),_:1}),c(v,{class:"goods-list-box"},{default:p((()=>[(l(!0),d(u,null,n(w.rightSpuList,(t=>(l(),i(v,{class:"right-list",style:y([{paddingLeft:w.property.space+"rpx",marginBottom:w.property.space+"px"}]),key:t.id},{default:p((()=>{var r;return[c(h,{class:"goods-md-box",size:"md",goodsFields:w.property.fields,tagStyle:w.property.badge,data:t,titleColor:null==(r=w.property.fields.name)?void 0:r.color,subTitleColor:w.property.fields.introduction.color,topRadius:w.property.borderRadiusTop,bottomRadius:w.property.borderRadiusBottom,titleWidth:330-g(j)-g(F),onClick:o=>g(s).$router.go("/pages/goods/point",{id:t.activityId}),onGetHeight:o[1]||(o[1]=t=>W(t,"right"))},{cart:p((()=>[c(e,{class:"ss-reset-button cart-btn",style:y([$.value])},{default:p((()=>[m(b("text"===w.property.btnBuy.type?w.property.btnBuy.text:""),1)])),_:1},8,["style"])])),_:2},1032,["goodsFields","tagStyle","data","titleColor","subTitleColor","topRadius","bottomRadius","titleWidth","onClick"])]})),_:2},1032,["style"])))),128))])),_:1})])),_:1})):f("",!0)])),_:1})}}},[["__scopeId","data-v-2ad8738c"]]),A={__name:"list",setup(o){const{safeAreaInsets:e,safeArea:d}=s.$platform.device,u=2*s.$platform.device.statusBarHeight,n=2*(d.height+e.bottom)+u-s.$platform.navbar-350,g=_(),m=t({pageNo:1,pageSize:5}),b=_(0),h=_(0),v=_("");async function x(){v.value="loading";const{data:t}=await j.getPointActivityPage(m);await g.value.concatActivity(t.list),h.value=g.value.getActivityCount(),b.value=t.total,v.value=h.value<b.value?"more":"noMore"}function C(){"noMore"!==v.value&&(m.pageNo+=1,x())}return k((()=>{C()})),B((()=>{x()})),(t,o)=>{const e=r(a("s-point-card"),$),s=r(a("s-empty"),w),d=r(a("uni-load-more"),I),u=R;return l(),i(F,{title:"积分商城",navbar:"normal",leftWidth:0,rightWidth:0},{default:p((()=>[c(u,{class:"scroll-box",style:y({height:n+"rpx"}),"scroll-y":"true","scroll-with-animation":!1,"enable-back-to-top":!0},{default:p((()=>[c(e,{ref_key:"sPointCardRef",ref:g,class:"ss-p-x-20 ss-m-t-20"},null,512),0===b.value?(l(),i(s,{key:0,icon:"/static/goods-empty.png",text:"暂无积分商品"})):f("",!0),b.value>0?(l(),i(d,{key:1,status:v.value,"content-text":{contentdown:"上拉加载更多"},onClick:C},null,8,["status"])):f("",!0)])),_:1},8,["style"])])),_:1})}}};export{A as default};
