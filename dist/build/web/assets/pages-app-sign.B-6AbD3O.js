import{_ as s}from"./s-empty.CKgdhVxR.js";import{aa as e,z as a,s as t,v as n,cH as l,r as i,e as o,f as c,w as d,u,j as r,g as f,k as g,p as y,t as m,l as p,m as _,F as b,i as w,C as x,D as h,y as k}from"./index-BKnI5veo.js";import{c as v,S as D}from"./s-layout.Drz3FS_-.js";import{_ as I}from"./_plugin-vue_export-helper.BCo6x5W8.js";const C=()=>e({url:"/member/sign-in/config/list",method:"GET"}),R=()=>e({url:"/member/sign-in/record/get-summary",method:"GET"}),j=()=>e({url:"/member/sign-in/record/create",method:"POST"}),L=I({__name:"sign",setup(e){a((s=>({"214cd1b8":u(I)})));const I=t.$url.css("/static/img/shop/app/sign.png"),L=n({loading:!0,signInfo:{},signConfigList:[],maxDay:0,showModel:!1,signResult:{}});async function M(){const{code:s,data:e}=await j();0===s&&(L.showModel=!0,L.signResult=e,await S())}function T(){L.showModel=!1}async function S(){const{code:s,data:e}=await R();0===s&&(L.signInfo=e,L.loading=!1)}return l((()=>{S(),async function(){const{code:s,data:e}=await C();0===s&&(L.signConfigList=e,e.length>0&&(L.maxDay=e[e.length-1].day))}()})),(e,a)=>{const t=i(o("s-empty"),s),n=w,l=x,u=h,I=i(o("su-popup"),v),C=i(o("s-layout"),D);return r(),c(C,{title:"签到有礼"},{default:d((()=>[L.loading?(r(),c(t,{key:0,icon:"/static/data-empty.png",text:"签到活动还未开始"})):f("",!0),L.loading?(r(),c(n,{key:1})):L.loading?f("",!0):(r(),c(n,{key:2,class:"sign-wrap"},{default:d((()=>[g(n,{class:"content-box calendar"},{default:d((()=>[g(n,{class:"sign-everyday ss-flex ss-col-center ss-row-between ss-p-x-30"},{default:d((()=>[g(l,{class:"sign-everyday-title"},{default:d((()=>[y("签到日历")])),_:1}),g(n,{class:"sign-num-box"},{default:d((()=>[y(" 已连续签到 "),g(l,{class:"sign-num"},{default:d((()=>[y(m(L.signInfo.continuousDay),1)])),_:1}),y(" 天 ")])),_:1})])),_:1}),g(n,{class:"list acea-row row-between-wrapper",style:{padding:"0 30rpx",height:"240rpx",display:"flex","justify-content":"space-between","align-items":"center"}},{default:d((()=>[(r(!0),p(b,null,_(L.signConfigList,((s,e)=>(r(),c(n,{class:"item",key:e},{default:d((()=>[g(n,{class:k((e===L.signConfigList.length?"reward":"")+" "+(L.signInfo.continuousDay>=s.day?"rewardTxt":""))},{default:d((()=>[y(" 第"+m(s.day)+"天 ",1)])),_:2},1032,["class"]),g(n,{class:k(["venus",(e+1===L.signConfigList.length?"reward":"")+" "+(L.signInfo.continuousDay>=s.day?"venusSelect":"")])},null,8,["class"]),g(n,{class:k(["num",L.signInfo.continuousDay>=s.day?"on":""])},{default:d((()=>[y(" + "+m(s.point),1)])),_:2},1032,["class"])])),_:2},1024)))),128))])),_:1}),g(n,{class:"myDateTable"},{default:d((()=>[g(n,{class:"ss-flex ss-col-center ss-row-center sign-box ss-m-y-40"},{default:d((()=>[L.signInfo.todaySignIn?(r(),c(u,{key:1,class:"ss-reset-button already-btn",disabled:""},{default:d((()=>[y(" 已签到 ")])),_:1})):(r(),c(u,{key:0,class:"ss-reset-button sign-btn",onClick:M},{default:d((()=>[y(" 签到 ")])),_:1}))])),_:1})])),_:1})])),_:1}),g(n,{class:"bg-white ss-m-t-16 ss-p-t-30 ss-p-b-60 ss-p-x-40"},{default:d((()=>[g(n,{class:"activity-title ss-m-b-30"},{default:d((()=>[y("签到说明")])),_:1}),g(n,{class:"activity-des"},{default:d((()=>[y("1.已累计签到"+m(L.signInfo.totalDay)+"天",1)])),_:1}),g(n,{class:"activity-des"},{default:d((()=>[y(" 2.据说连续签到第 "+m(L.maxDay)+" 天可获得超额积分，要坚持签到哦~~ ",1)])),_:1}),g(n,{class:"activity-des"},{default:d((()=>[y(" 3.积分可以在购物时抵现金结算的哦 ~~")])),_:1})])),_:1})])),_:1})),g(I,{show:L.showModel,type:"center",round:"10",isMaskClick:!1},{default:d((()=>[g(n,{class:"model-box ss-flex-col"},{default:d((()=>[g(n,{class:"ss-m-t-56 ss-flex-col ss-col-center"},{default:d((()=>[g(l,{class:"cicon-check-round"}),g(n,{class:"score-title"},{default:d((()=>[L.signResult.point?(r(),c(l,{key:0},{default:d((()=>[y(m(L.signResult.point)+" 积分 ",1)])),_:1})):f("",!0),L.signResult.experience?(r(),c(l,{key:1},{default:d((()=>[y(m(L.signResult.experience)+" 经验",1)])),_:1})):f("",!0)])),_:1}),g(n,{class:"model-title ss-flex ss-col-center ss-m-t-22 ss-m-b-30"},{default:d((()=>[y(" 已连续打卡 "+m(L.signResult.day)+" 天 ",1)])),_:1})])),_:1}),g(n,{class:"model-bg ss-flex-col ss-col-center ss-row-right"},{default:d((()=>[g(n,{class:"title ss-m-b-64"},{default:d((()=>[y("签到成功")])),_:1}),g(n,{class:"ss-m-b-40"},{default:d((()=>[g(u,{class:"ss-reset-button confirm-btn",onClick:T},{default:d((()=>[y("确认")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])])),_:1})}}},[["__scopeId","data-v-0a844931"]]);export{L as default};
