import{b as s,c as a,S as e}from"./s-layout.DXqCFQ1i.js";import{z as t,u as o,c as l,s as i,v as c,j as n,f as r,w as m,k as u,p as d,t as p,q as f,i as g,_,cG as h,r as w,e as x,D as b,C as y,l as k,F as S,m as M,aJ as v,g as $,S as C,n as j,ac as I}from"./index-sTbmrhgN.js";import{_ as F}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{f as z}from"./useGoods.ChXgV4tj.js";import{_ as B}from"./uni-load-more.CEV2kGaC.js";import{l as N}from"./lodash.default.B_jLv88b.js";import"./index.Bv-U3561.js";import"./min.nKVuoSVN.js";const A=F({__name:"commission-info",setup(s){t((s=>({d2ece834:o(e)})));const a=l((()=>i.$store("user").userInfo)),e=i.$url.css("/static/img/shop/commission/background.png");return c({showMoney:!1}),(s,e)=>{const t=f,l=g;return n(),r(l,{class:"user-card ss-flex ss-col-bottom"},{default:m((()=>[u(l,{class:"card-top ss-flex ss-row-between"},{default:m((()=>[u(l,{class:"ss-flex"},{default:m((()=>[u(l,{class:"head-img-box"},{default:m((()=>[u(t,{class:"head-img",src:o(i).$url.cdn(a.value.avatar),mode:"aspectFill"},null,8,["src"])])),_:1}),u(l,{class:"ss-flex-col"},{default:m((()=>[u(l,{class:"user-name"},{default:m((()=>[d(p(a.value.nickname),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-6d9b7b62"]]),G=F({__name:"account-info",setup(a){l((()=>i.$store("user").userInfo));const e=c({showMoney:!1,summary:{}});return _((async()=>{let{code:s,data:a}=await h.getBrokerageUserSummary();0===s&&(e.summary=a||{})})),(a,t)=>{const l=g,c=w(x("uni-icons"),s),f=b,_=y;return n(),r(l,{class:"account-card"},{default:m((()=>[u(l,{class:"account-card-box"},{default:m((()=>[u(l,{class:"ss-flex ss-row-between card-box-header"},{default:m((()=>[u(l,{class:"ss-flex"},{default:m((()=>[u(l,{class:"header-title ss-m-r-16"},{default:m((()=>[d("账户信息")])),_:1}),u(f,{class:"ss-reset-button look-btn ss-flex",onClick:t[0]||(t[0]=s=>e.showMoney=!e.showMoney)},{default:m((()=>[u(c,{type:e.showMoney?"eye-filled":"eye-slash-filled",color:"#A57A55",size:"20"},null,8,["type"])])),_:1})])),_:1}),u(l,{class:"ss-flex",onClick:t[1]||(t[1]=s=>o(i).$router.go("/pages/commission/wallet"))},{default:m((()=>[u(l,{class:"header-title ss-m-r-4"},{default:m((()=>[d("查看明细")])),_:1}),u(_,{class:"cicon-play-arrow"})])),_:1})])),_:1}),u(l,{class:"card-content ss-flex"},{default:m((()=>[u(l,{class:"ss-flex-1 ss-flex-col ss-col-center"},{default:m((()=>[u(l,{class:"item-title"},{default:m((()=>[d("当前佣金(元)")])),_:1}),u(l,{class:"item-detail"},{default:m((()=>[d(p(e.showMoney?o(z)(e.summary.brokeragePrice||0):"***"),1)])),_:1})])),_:1}),u(l,{class:"ss-flex-1 ss-flex-col ss-col-center"},{default:m((()=>[u(l,{class:"item-title"},{default:m((()=>[d("昨天的佣金(元)")])),_:1}),u(l,{class:"item-detail"},{default:m((()=>[d(p(e.showMoney?o(z)(e.summary.yesterdayPrice||0):"***"),1)])),_:1})])),_:1}),u(l,{class:"ss-flex-1 ss-flex-col ss-col-center"},{default:m((()=>[u(l,{class:"item-title"},{default:m((()=>[d("累计已提(元)")])),_:1}),u(l,{class:"item-detail"},{default:m((()=>[d(p(e.showMoney?o(z)(e.summary.withdrawPrice||0):"***"),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-a3716f2f"]]),P=F({__name:"commission-log",setup(s){const a=c({loadStatus:"",pagination:{list:[],total:0,pageNo:1,pageSize:8}});async function e(){a.loadStatus="loading";const{code:s,data:e}=await h.getBrokerageRecordPage({pageNo:a.pagination.pageNo,pageSize:a.pagination.pageSize});0===s&&(a.pagination.list=N.concat(a.pagination.list,e.list),a.pagination.total=e.total,a.loadStatus=a.pagination.list.length<a.pagination.total?"more":"noMore")}function t(){"noMore"!==a.loadStatus&&(a.pagination.pageNo++,e())}return e(),(s,e)=>{const l=f,c=g,_=y,h=w(x("uni-load-more"),B),b=C;return n(),r(c,{class:"distribution-log-wrap"},{default:m((()=>[u(c,{class:"header-box"},{default:m((()=>[u(l,{class:"header-bg",src:o(i).$url.static("/static/img/shop/commission/title2.png")},null,8,["src"]),u(c,{class:"ss-flex header-title"},{default:m((()=>[u(c,{class:"title"},{default:m((()=>[d("实时动态")])),_:1}),u(_,{class:"cicon-forward"})])),_:1})])),_:1}),u(b,{"scroll-y":"true",onScrolltolower:t,class:"scroll-box log-scroll","scroll-with-animation":"true"},{default:m((()=>[a.pagination.list?(n(),r(c,{key:0},{default:m((()=>[(n(!0),k(S,null,M(a.pagination.list,(s=>(n(),r(c,{class:"log-item-box ss-flex ss-row-between",key:s.id},{default:m((()=>[u(c,{class:"log-item-wrap"},{default:m((()=>[u(c,{class:"log-item ss-flex ss-ellipsis-1 ss-col-center"},{default:m((()=>[u(c,{class:"ss-flex ss-col-center"},{default:m((()=>[u(l,{class:"log-img",src:o(i).$url.static("/static/img/shop/avatar/notice.png"),mode:"aspectFill"},null,8,["src"])])),_:1}),u(c,{class:"log-text ss-ellipsis-1"},{default:m((()=>[d(p(s.title)+" "+p(o(z)(s.price))+" 元 ",1)])),_:2},1024)])),_:2},1024)])),_:2},1024),u(_,{class:"log-time"},{default:m((()=>[d(p(o(v)(s.createTime).fromNow()),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):$("",!0),a.pagination.total>0?(n(),r(h,{key:1,status:a.loadStatus,color:"#333333",onClick:t},null,8,["status"])):$("",!0)])),_:1})])),_:1})}}},[["__scopeId","data-v-4e0204f4"]]),D=F({__name:"commission-menu",setup(s){const a=c({menuList:[{img:"/static/img/shop/commission/commission_icon1.png",title:"我的团队",path:"/pages/commission/team"},{img:"/static/img/shop/commission/commission_icon2.png",title:"佣金明细",path:"/pages/commission/wallet"},{img:"/static/img/shop/commission/commission_icon3.png",title:"分销订单",path:"/pages/commission/order"},{img:"/static/img/shop/commission/commission_icon4.png",title:"推广商品",path:"/pages/commission/goods"},{img:"/static/img/shop/commission/commission_icon7.png",title:"邀请海报",path:"action:showShareModal"},{img:"/static/img/shop/commission/commission_icon8.png",title:"推广排行",path:"/pages/commission/promoter"},{img:"/static/img/shop/commission/commission_icon9.png",title:"佣金排行",path:"/pages/commission/commission-ranking"}]});return(s,e)=>{const t=f,l=g,c=y;return n(),r(l,{class:"menu-box ss-flex-col"},{default:m((()=>[u(l,{class:"header-box"},{default:m((()=>[u(t,{class:"header-bg",src:o(i).$url.static("/static/img/shop/commission/title1.png")},null,8,["src"]),u(l,{class:"ss-flex header-title"},{default:m((()=>[u(l,{class:"title"},{default:m((()=>[d("功能专区")])),_:1}),u(c,{class:"cicon-forward"})])),_:1})])),_:1}),u(l,{class:"menu-list ss-flex ss-flex-wrap"},{default:m((()=>[(n(!0),k(S,null,M(a.menuList,((s,a)=>(n(),r(l,{key:a,class:"item-box ss-flex-col ss-col-center",onClick:a=>o(i).$router.go(s.path)},{default:m((()=>[u(t,{class:"menu-icon ss-m-b-10",src:o(i).$url.static(s.img),mode:"aspectFill"},null,8,["src"]),u(l,null,{default:m((()=>[d(p(s.title),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-63e68ef8"]]),E=F({__name:"commission-auth",setup(s){const e=c({show:!1});return j((async()=>{const{code:s,data:a}=await h.getBrokerageUser();0!==s||(null==a?void 0:a.brokerageEnabled)||(e.show=!0)})),(s,t)=>{const l=f,c=g,p=b,_=w(x("su-popup"),a);return n(),r(_,{show:e.show,type:"center",round:"10",onClose:t[2]||(t[2]=s=>e.show=!1),isMaskClick:!1,maskBackgroundColor:"rgba(0, 0, 0, 0.7)"},{default:m((()=>[u(c,{class:"notice-box"},{default:m((()=>[u(c,{class:"img-wrap"},{default:m((()=>[u(l,{class:"notice-img",src:o(i).$url.static("/static/img/shop/commission/forbidden.png"),mode:"aspectFill"},null,8,["src"])])),_:1}),u(c,{class:"notice-title"},{default:m((()=>[d(" 抱歉！您没有分销权限 ")])),_:1}),u(c,{class:"notice-detail"},{default:m((()=>[d(" 该功能暂不可用 ")])),_:1}),u(p,{class:"ss-reset-button notice-btn ui-Shadow-Main ui-BG-Main-Gradient",onClick:t[0]||(t[0]=s=>o(i).$router.back())},{default:m((()=>[d(" 知道了 ")])),_:1}),u(p,{class:"ss-reset-button back-btn",onClick:t[1]||(t[1]=s=>o(i).$router.back())},{default:m((()=>[d(" 返回 ")])),_:1})])),_:1})])),_:1},8,["show"])}}},[["__scopeId","data-v-b5f426d3"]]),L=F({__name:"index",setup(s){const a=l((()=>i.$platform.share.getShareInfo({params:{page:I.HOME.value}},{type:"user"}))),t={color:"#F7D598"};return(s,o)=>{const l=w(x("s-layout"),e);return n(),r(l,{navbar:"inner",class:"index-wrap",title:"分销中心",bgStyle:t,onShareAppMessage:a.value},{default:m((()=>[u(A),u(G),u(D),u(P),u(E)])),_:1},8,["onShareAppMessage"])}}},[["__scopeId","data-v-fe335e81"]]);export{L as default};
