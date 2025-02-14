import{s,v as e,d as t,af as a,r as l,e as c,j as o,f as r,w as n,k as i,x as u,u as d,l as m,F as f,m as p,y as b,p as _,t as x,ag as g,ah as y,ai as v,P as w,aj as h,C as k,i as $,D as I,c as C,g as T,a7 as j,Q as V,q as S,ak as F}from"./index-sTbmrhgN.js";import{e as L,_ as O}from"./s-layout.DXqCFQ1i.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{F as N}from"./favorite.Ca_e0YNo.js";import{_ as P}from"./s-empty.BrbtlCrO.js";import{c as H,C as M}from"./comment-item.DOaMS0bP.js";import{_ as R}from"./mp-html.BgKpfQmV.js";const q=B({__name:"detail-navbar",emits:["clickLeft"],setup(I,{emit:C}){const T=s.$platform.device.statusBarHeight,j=s.$platform.navbar;s.$platform.capsule.width,s.$platform.capsule.height;const V=e({tabOpacityVal:0,curTab:"goods",tabList:[{label:"商品",value:"goods",to:"detail-swiper-selector"},{label:"评价",value:"comment",to:"detail-comment-selector"},{label:"详情",value:"detail",to:"detail-content-selector"}]}),S=C,F=s.$router.hasHistory();function B(){F?s.$router.back():s.$router.go("/pages/index/index"),S("clickLeft")}function N(){v()}let P={top:0,bottom:0};return t((e=>{V.tabOpacityVal=e.scrollTop>s.$platform.navbar?1:.01*e.scrollTop,0===P.top&&a((()=>{new Promise(((s,e)=>{w().select(".detail-comment-selector").boundingClientRect((e=>{e?(P.top=e.top,P.bottom=e.top+e.height,s(e)):s(null)})).exec()}))}),50),e.scrollTop<P.top-j?V.curTab="goods":e.scrollTop>=P.top-j&&e.scrollTop<=P.bottom-j?V.curTab="comment":V.curTab="detail"})),(s,e)=>{const t=l(c("su-status-bar"),L),a=k,v=$,w=l(c("su-fixed"),O);return o(),r(w,{alway:"",bgStyles:{background:"#fff"},val:0,noNav:"",opacity:"",placeholder:!1},{default:n((()=>[i(t),i(v,{class:"ui-bar ss-flex ss-col-center ss-row-between ss-p-x-20",style:u([{height:d(j)-d(T)+"px"}])},{default:n((()=>[i(v,{class:"icon-box ss-flex"},{default:n((()=>[i(v,{class:"icon-button icon-button-left ss-flex ss-row-center",onClick:B},{default:n((()=>[d(F)?(o(),r(a,{key:0,class:"sicon-back"})):(o(),r(a,{key:1,class:"sicon-home"}))])),_:1}),i(v,{class:"line"}),i(v,{class:"icon-button icon-button-right ss-flex ss-row-center",onClick:N},{default:n((()=>[i(a,{class:"sicon-more"})])),_:1})])),_:1}),i(v,{class:"detail-tab-card ss-flex-1",style:u([{opacity:V.tabOpacityVal}])},{default:n((()=>[i(v,{class:"tab-box ss-flex ss-col-center ss-row-around"},{default:n((()=>[(o(!0),m(f,null,p(V.tabList,(s=>(o(),r(v,{class:"tab-item ss-flex-1 ss-flex ss-row-center ss-col-center",key:s.value,onClick:e=>function(s){let e=0;"comment"===s.value?e=P.top-j+1:"detail"===s.value&&(e=P.bottom-j+1),h({scrollTop:e,duration:200})}(s)},{default:n((()=>[i(v,{class:b(["tab-title",V.curTab===s.value?"cur-tab-title":""])},{default:n((()=>[_(x(s.label),1)])),_:2},1032,["class"]),g(i(v,{class:"tab-line"},null,512),[[y,V.curTab===s.value]])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["style"])])),_:1},8,["style"])])),_:1})}}},[["__scopeId","data-v-cc0f3beb"]]),z=B({__name:"detail-cell",props:{label:{type:String,default:""},value:{type:String,default:""}},emits:["click"],setup(s,{emit:e}){const t=e,a=()=>{t("click")};return(e,t)=>{const l=$,c=k,u=I;return o(),r(l,{class:"detail-cell-wrap ss-flex ss-col-center ss-row-between",onClick:a},{default:n((()=>[i(l,{class:"label-text"},{default:n((()=>[_(x(s.label),1)])),_:1}),i(l,{class:"cell-content ss-line-1 ss-flex-1"},{default:n((()=>[_(x(s.value),1)])),_:1}),i(u,{class:"ss-reset-button"},{default:n((()=>[i(c,{class:"_icon-forward right-forwrad-icon"})])),_:1})])),_:1})}}},[["__scopeId","data-v-879372e1"]]),A={__name:"detail-cell-sku",props:{modelValue:{type:Array,default:()=>[]},sku:{type:Object}},setup(s){const e=s,t=C((()=>{var s;if(!(null==(s=e.sku)?void 0:s.id))return"请选择商品规格";let t="";return e.sku.properties.forEach((s=>{t+=s.propertyName+":"+s.valueName+" "})),t}));return(s,e)=>(o(),r(z,{label:"选择",value:t.value},null,8,["value"]))}},D=B({__name:"detail-tabbar",props:{modelValue:{type:Object,default(){}},bg:{type:String,default:"bg-white"},bgStyles:{type:Object,default(){}},ui:{type:String,default:""},noFixed:{type:Boolean,default:!1},topRadius:{type:Number,default:0},collectIcon:{type:Boolean,default:!0},serviceIcon:{type:Boolean,default:!0},shareIcon:{type:Boolean,default:!0}},setup(t){e({});const a=t;async function u(){if(a.modelValue.favorite){const{code:e}=await N.deleteFavorite(a.modelValue.id);if(0!==e)return;s.$helper.toast("取消收藏"),a.modelValue.favorite=!1}else{const{code:e}=await N.createFavorite(a.modelValue.id);if(0!==e)return;s.$helper.toast("收藏成功"),a.modelValue.favorite=!0}}const p=()=>{s.$router.go("/pages/chat/index",{id:a.modelValue.id})};return(e,a)=>{const b=S,x=$,g=l(c("su-fixed"),O);return o(),r(g,{bottom:"",placeholder:"",bg:"bg-white"},{default:n((()=>[i(x,{class:"ui-tabbar-box"},{default:n((()=>[i(x,{class:"ui-tabbar ss-flex ss-col-center ss-row-between"},{default:n((()=>[t.collectIcon?(o(),r(x,{key:0,class:"detail-tabbar-item ss-flex ss-flex-col ss-row-center ss-col-center",onClick:u},{default:n((()=>[t.modelValue.favorite?(o(),m(f,{key:0},[i(b,{class:"item-icon",src:d(s).$url.static("/static/img/shop/goods/collect_1.gif"),mode:"aspectFit"},null,8,["src"]),i(x,{class:"item-title"},{default:n((()=>[_("已收藏")])),_:1})],64)):(o(),m(f,{key:1},[i(b,{class:"item-icon",src:d(s).$url.static("/static/img/shop/goods/collect_0.png"),mode:"aspectFit"},null,8,["src"]),i(x,{class:"item-title"},{default:n((()=>[_("收藏")])),_:1})],64))])),_:1})):T("",!0),t.serviceIcon?(o(),r(x,{key:1,class:"detail-tabbar-item ss-flex ss-flex-col ss-row-center ss-col-center",onClick:p},{default:n((()=>[i(b,{class:"item-icon",src:d(s).$url.static("/static/img/shop/goods/message.png"),mode:"aspectFit"},null,8,["src"]),i(x,{class:"item-title"},{default:n((()=>[_("客服")])),_:1})])),_:1})):T("",!0),t.shareIcon?(o(),r(x,{key:2,class:"detail-tabbar-item ss-flex ss-flex-col ss-row-center ss-col-center",onClick:d(j)},{default:n((()=>[i(b,{class:"item-icon",src:d(s).$url.static("/static/img/shop/goods/share.png"),mode:"aspectFit"},null,8,["src"]),i(x,{class:"item-title"},{default:n((()=>[_("分享")])),_:1})])),_:1},8,["onClick"])):T("",!0),V(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3})])),_:3})}}},[["__scopeId","data-v-2671a514"]]),E=B({__name:"detail-skeleton",setup(e){const t=C((()=>s.$store("sys")));return(s,e)=>{const a=$,u=I,d=l(c("su-fixed"),O);return o(),r(a,{class:b(["skeleton-wrap",["theme-"+t.value.mode,"main-"+t.value.theme,"font-"+t.value.fontSize]])},{default:n((()=>[i(a,{class:"skeleton-banner"}),i(a,{class:"container-box"},{default:n((()=>[i(a,{class:"container-box-strip title ss-m-b-58"}),i(a,{class:"container-box-strip ss-m-b-20"}),i(a,{class:"container-box-strip ss-m-b-20"}),i(a,{class:"container-box-strip w-364"})])),_:1}),i(a,{class:"container-box"},{default:n((()=>[i(a,{class:"ss-flex ss-row-between ss-m-b-34"},{default:n((()=>[i(a,{class:"container-box-strip w-380"}),i(a,{class:"circle"})])),_:1}),i(a,{class:"ss-flex ss-row-between ss-m-b-34"},{default:n((()=>[i(a,{class:"container-box-strip w-556"}),i(a,{class:"circle"})])),_:1}),i(a,{class:"ss-flex ss-row-between"},{default:n((()=>[i(a,{class:"container-box-strip w-556"}),i(a,{class:"circle"})])),_:1})])),_:1}),i(a,{class:"container-box"},{default:n((()=>[i(a,{class:"container-box-strip w-198 ss-m-b-42"}),i(a,{class:"ss-flex"},{default:n((()=>[i(a,{class:"circle ss-m-r-12"}),i(a,{class:"container-box-strip w-252"})])),_:1})])),_:1}),i(d,{bottom:"",placeholder:"",bg:"bg-white"},{default:n((()=>[i(a,{class:"ui-tabbar-box"},{default:n((()=>[i(a,{class:"foot ss-flex ss-col-center"},{default:n((()=>[i(a,{class:"ss-m-r-54 ss-m-l-32"},{default:n((()=>[i(a,{class:"rec ss-m-b-8"}),i(a,{class:"oval"})])),_:1}),i(a,{class:"ss-m-r-54"},{default:n((()=>[i(a,{class:"rec ss-m-b-8"}),i(a,{class:"oval"})])),_:1}),i(a,{class:"ss-m-r-50"},{default:n((()=>[i(a,{class:"rec ss-m-b-8"}),i(a,{class:"oval"})])),_:1}),i(u,{class:"ss-reset-button add-btn ui-Shadow-Main"}),i(u,{class:"ss-reset-button buy-btn ui-Shadow-Main"})])),_:1})])),_:1})])),_:1})])),_:1},8,["class"])}}},[["__scopeId","data-v-fc3678c9"]]),Q=B({__name:"detail-comment-card",props:{goodsId:{type:[Number,String],default:0}},setup(t){const a=t,u=e({commentList:[],total:0});return F((()=>{!async function(s){const{data:e}=await M.getCommentPage(s,1,3,0);u.commentList=e.list,u.total=e.total}(a.goodsId)})),(e,a)=>{const b=$,g=I,y=k,v=l(c("s-empty"),P);return o(),r(b,{class:"detail-comment-card bg-white"},{default:n((()=>[i(b,{class:"card-header ss-flex ss-col-center ss-row-between ss-p-b-30"},{default:n((()=>[i(b,{class:"ss-flex ss-col-center"},{default:n((()=>[i(b,{class:"line"}),i(b,{class:"title ss-m-l-20 ss-m-r-10"},{default:n((()=>[_("评价")])),_:1}),i(b,{class:"des"},{default:n((()=>[_("("+x(u.total)+")",1)])),_:1})])),_:1}),u.commentList.length>0?(o(),r(b,{key:0,class:"ss-flex ss-col-center",onClick:a[0]||(a[0]=e=>d(s).$router.go("/pages/goods/comment/list",{id:t.goodsId}))},{default:n((()=>[i(g,{class:"ss-reset-button more-btn"},{default:n((()=>[_("查看全部")])),_:1}),i(y,{class:"cicon-forward"})])),_:1})):T("",!0)])),_:1}),i(b,{class:"card-content"},{default:n((()=>[(o(!0),m(f,null,p(u.commentList,(s=>(o(),r(b,{class:"comment-box ss-p-y-30",key:s.id},{default:n((()=>[i(H,{item:s},null,8,["item"])])),_:2},1024)))),128)),0===u.commentList.length?(o(),r(v,{key:0,paddingTop:"0",icon:"/static/comment-empty.png",text:"期待您的第一个评价"})):T("",!0)])),_:1})])),_:1})}}},[["__scopeId","data-v-f2cb4fc6"]]),Z=B({__name:"detail-content-card",props:{content:{type:String,default:""}},setup:e=>(s.$platform.device,(s,t)=>{const a=$,u=l(c("mp-html"),R);return o(),r(a,{class:"detail-content-card bg-white ss-m-x-20 ss-p-t-20"},{default:n((()=>[i(a,{class:"card-header ss-flex ss-col-center ss-m-b-30 ss-m-l-20"},{default:n((()=>[i(a,{class:"line"}),i(a,{class:"title ss-m-l-20 ss-m-r-20"},{default:n((()=>[_("详情")])),_:1})])),_:1}),i(a,{class:"card-content"},{default:n((()=>[i(u,{content:e.content},null,8,["content"])])),_:1})])),_:1})})},[["__scopeId","data-v-05c8b18d"]]);export{A as _,E as a,Q as b,Z as c,q as d,D as e};
