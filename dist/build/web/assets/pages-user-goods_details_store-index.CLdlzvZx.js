import{v as e,_ as s,o as t,I as a,r as l,e as o,f as d,w as r,s as u,L as i,aI as n,j as c,k as _,l as f,m as g,F as m,i as p,p as x,t as h,a2 as y,A as k,at as b,aF as w,q as j,C as v}from"./index-DwytzHTY.js";import{S as L}from"./s-layout.CDLFZFtp.js";import{D as N}from"./delivery.ulGipbxw.js";import{_ as C}from"./_plugin-vue_export-helper.BCo6x5W8.js";const F=C({__name:"index",setup(C){const F=e({loaded:!1,loading:!1,storeList:[],system_store:{},locationShow:!1,user_latitude:0,user_longitude:0}),S=async()=>{if(F.loading||F.loaded)return;F.loading=!0;const{data:e,code:s}=await N.getDeliveryPickUpStoreList({latitude:F.user_latitude,longitude:F.user_longitude});0===s&&(F.loading=!1,F.storeList=e)};return s((()=>{F.user_latitude&&F.user_longitude||(()=>{const e=u.$platform.useProvider("wechat").jsWxSdk;e.isWechat()?e.getLocation((e=>{F.user_latitude=e.latitude,F.user_longitude=e.longitude,i("user_latitude",e.latitude),i("user_longitude",e.longitude),S()})):n({type:"gcj02",success:e=>{try{F.user_latitude=e.latitude,F.user_longitude=e.longitude,i("user_latitude",e.latitude),i("user_longitude",e.longitude)}catch(s){console.error(s)}S()},complete:()=>{S()}})})(),S()})),t((()=>{try{F.user_latitude=a("user_latitude"),F.user_longitude=a("user_longitude")}catch(e){console.error(e)}})),(e,s)=>{const t=j,a=p,i=v,n=l(o("s-layout"),L);return c(),d(n,{bgStyle:{color:"#FFF"},title:"选择自提门店"},{default:r((()=>[_(a,{class:"storeBox",ref:"container"},{default:r((()=>[(c(!0),f(m,null,g(F.storeList,((e,s)=>(c(),d(a,{class:"storeBox-box",key:s,onClick:s=>(w("SELECT_PICK_UP_INFO",{addressInfo:e}),void u.$router.back())},{default:r((()=>[_(a,{class:"store-img"},{default:r((()=>[_(t,{src:e.logo,class:"img"},null,8,["src"])])),_:2},1024),_(a,{class:"store-cent-left"},{default:r((()=>[_(a,{class:"store-name"},{default:r((()=>[x(h(e.name),1)])),_:2},1024),_(a,{class:"store-address line1"},{default:r((()=>[x(h(e.areaName)+h(", "+e.detailAddress),1)])),_:2},1024)])),_:2},1024),_(a,{class:"row-right ss-flex-col ss-col-center"},{default:r((()=>[_(a,null,{default:r((()=>[y("a",{class:"store-phone",href:"tel:"+e.phone},[_(a,{class:"iconfont"},{default:r((()=>[_(a,{class:"ss-rest-button"},{default:r((()=>[_(i,{class:"_icon-forward"})])),_:1})])),_:1})],8,["href"])])),_:2},1024),_(a,{class:"store-distance ss-flex ss-row-center",onClick:k((s=>(e=>{const s=u.$platform.useProvider("wechat").jsWxSdk;s.isWechat()?s.openLocation({latitude:Number(e.latitude),longitude:Number(e.longitude),name:e.name,address:`${e.areaName}-${e.detailAddress}`}):b({latitude:Number(e.latitude),longitude:Number(e.longitude),name:e.name,address:`${e.areaName}-${e.detailAddress}`,success:function(){console.log("success")}})})(e)),["stop"])},{default:r((()=>[e.distance?(c(),d(i,{key:0,class:"addressTxt"},{default:r((()=>[x(" 距离"+h(e.distance.toFixed(2))+"千米 ",1)])),_:2},1024)):(c(),d(i,{key:1,class:"addressTxt"},{default:r((()=>[x("查看地图")])),_:1})),_(a,{class:"iconfont"},{default:r((()=>[_(a,{class:"ss-rest-button"},{default:r((()=>[_(i,{class:"_icon-forward"})])),_:1})])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1},512)])),_:1})}}},[["__scopeId","data-v-d767c007"]]);export{F as default};
