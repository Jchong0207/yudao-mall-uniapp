import{v as e,j as t,f as a,w as i,k as s,x as l,al as r,am as u,i as o,an as d,c as n,r as p,e as c,y as g,l as y,F as m,m as f,u as h,s as v,g as b,p as _,t as w,ao as S,ap as T,q as x,R as k,T as P}from"./index-Dg3xN8dW.js";import{_ as N}from"./_plugin-vue_export-helper.BCo6x5W8.js";const H=N({__name:"su-video",props:{moveX:{type:[Number],default:0},uid:{type:[Number,String],default:0},height:{type:Number,default:300},width:{type:Number,default:750},initialTime:{type:Number,default:1},src:{type:String,default:""},poster:{type:String,default:"https://img1.baidu.com/it/u=1601695551,235775011&fm=26&fmt=auto"},autoplay:{type:Boolean,default:!1}},emits:["videoTimeupdate"],setup(n,{expose:p,emit:c}){const g=d(),y=e({enableProgressGesture:!1,showModal:!1}),m=n,f=c,h=e=>{f("videoTimeupdate",e)},v=e=>{console.log("视频错误信息:",e.target.errMsg)},b=()=>{console.log("视频开始")},_=()=>{console.log("视频暂停")},w=()=>{console.log("视频结束")};return p({pausePlay:()=>{r(`sVideo${m.index}`,g).pause()}}),(e,r)=>{const d=u,p=o;return t(),a(p,{class:"ui-video-wrap"},{default:i((()=>[s(d,{id:`sVideo${n.uid}`,class:"radius",style:l([{height:n.height+"rpx"}]),src:n.src,controls:"","object-fit":"contain","enable-progress-gesture":y.enableProgressGesture,"initial-time":n.initialTime,"x5-video-player-type":"h5","x-webkit-airplay":"allow","webkit-playsinline":"true",onError:v,onTimeupdate:h,onPlay:b,onPause:_,onEnded:w,poster:n.poster,autoplay:n.autoplay},null,8,["id","style","src","enable-progress-gesture","initial-time","poster","autoplay"])])),_:1})}}},[["__scopeId","data-v-f5e784aa"]]),$=N({__name:"su-swiper",props:{circular:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!1},interval:{type:Number,default:3e3},duration:{type:Number,default:500},mode:{type:String,default:"default"},imageMode:{type:String,default:"scaleToFill"},list:{type:Array,default:()=>[]},dotStyle:{type:String,default:"long"},dotCur:{type:String,default:"ss-bg-opactity-block"},bg:{type:String,default:"bg-none"},height:{type:Number,default:0},imgHeight:{type:Number,default:0},imgTopRadius:{type:Number,default:0},imgBottomRadius:{type:Number,default:0},isPreview:{type:Boolean,default:!1},seizeHeight:{type:Number,default:200}},setup(r){const u=e({imgHeight:0,cur:0,moveX:0,videoPlaySataus:!1,heightList:[]}),d=e({videoRef:{}}),N=r,$=e=>{"touch"!==e.detail.source&&"autoplay"!==e.detail.source||(u.cur=e.detail.current,u.videoPlaySataus=!1,"video"===N.list[u.cur].type&&d.videoRef[`video_${u.cur}`].pausePlay())},C=()=>{if(!N.isPreview)return;let e=S(N.list);e.forEach(((t,a)=>{"video"===t.type&&e.splice(a,1)})),T({urls:e.length<1?[N.src]:e.reduce(((e,t)=>(e.push(t.src),e)),[]),current:u.cur})},R=e=>{},X=e=>{u.moveX=0},B=e=>{N.list[u.cur].currentTime=e.detail.currentTime},j=n((()=>{let e;return 0!==N.height&&(e=N.height),0===N.height&&(0!==u.imgHeight?e=u.imgHeight:0!==N.seizeHeight&&(e=N.seizeHeight)),{height:e+"rpx"}}));function z(e){if(0===N.height){let t=e.detail.height/e.detail.width*750;u.imgHeight<t&&(u.imgHeight=t)}}return(e,n)=>{const S=x,T=p(c("su-video"),H),M=o,E=k,V=P;return t(),a(M,null,{default:i((()=>[s(M,{class:g(["ui-swiper",[N.mode,N.bg,N.ui]])},{default:i((()=>[s(V,{circular:N.circular,current:u.cur,autoplay:N.autoplay&&!u.videoPlaySataus,interval:N.interval,duration:N.duration,onTransition:R,onAnimationfinish:X,style:l(j.value),onChange:$},{default:i((()=>[(t(!0),y(m,null,f(N.list,((e,l)=>(t(),a(E,{class:g(["swiper-item",{cur:u.cur==l}]),key:l,onClick:t=>(e=>{"video"===e.type?u.videoPlaySataus=!0:(v.$router.go(e.url),C())})(e)},{default:i((()=>[s(M,{class:"ui-swiper-main"},{default:i((()=>["image"===e.type?(t(),a(S,{key:0,class:"swiper-image",mode:N.imageMode,src:e.src,width:"100%",height:"100%",onLoad:z},null,8,["mode","src"])):(t(),a(T,{key:1,ref_for:!0,ref:e=>d.videoRef[`video_${l}`]=e,poster:h(v).$url.cdn(e.poster),src:h(v).$url.cdn(e.src),index:l,moveX:u.moveX,initialTime:e.currentTime||0,height:r.seizeHeight,onVideoTimeupdate:B},null,8,["poster","src","index","moveX","initialTime","height"]))])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1},8,["circular","current","autoplay","interval","duration","style"]),u.videoPlaySataus?b("",!0):(t(),y(m,{key:0},["tag"!=N.dotStyle?(t(),a(M,{key:0,class:g(["ui-swiper-dot",N.dotStyle])},{default:i((()=>[(t(!0),y(m,null,f(N.list,((e,i)=>(t(),a(M,{class:g(["line-box",[u.cur==i?"cur":"",N.dotCur]]),key:i},null,8,["class"])))),128))])),_:1},8,["class"])):b("",!0),"tag"==N.dotStyle?(t(),a(M,{key:1,class:g(["ui-swiper-dot",N.dotStyle])},{default:i((()=>[s(M,{class:g(["ui-tag radius-lg",[N.dotCur]]),style:{"pointer-events":"none",padding:"0 10rpx"}},{default:i((()=>[s(M,{style:{transform:"scale(0.7)"}},{default:i((()=>[_(w(u.cur+1)+" / "+w(N.list.length),1)])),_:1})])),_:1},8,["class"])])),_:1},8,["class"])):b("",!0)],64))])),_:1},8,["class"])])),_:1})}}},[["__scopeId","data-v-e03a1d3b"]]);export{$ as _,H as a};
