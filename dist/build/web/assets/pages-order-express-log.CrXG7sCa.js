import{j as t,f as s,w as e,Q as o,x as d,l,F as r,m as a,g as i,y as c,k as n,p as u,t as f,i as _,C as m,v as g,c as h,o as p,r as y,e as k,a0 as b,T as w,u as x,s as C,q as v,R as S}from"./index-DwytzHTY.js";import{_ as B}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{S as I}from"./s-layout.CDLFZFtp.js";const j=B({name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:()=>[]},current:{type:Number,default:0},dotsStyles:{type:Object,default:()=>({})},mode:{type:String,default:"default"},field:{type:String,default:""}},data:()=>({dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}),watch:{dotsStyles(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode(t){"indexes"===t?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem(t){this.$emit("clickItem",t)}}},[["render",function(g,h,p,y,k,b){const w=_,x=m;return t(),s(w,{class:"uni-swiper__warp"},{default:e((()=>[o(g.$slots,"default",{},void 0,!0),"default"===p.mode?(t(),s(w,{style:d({bottom:k.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"default"},{default:e((()=>[(t(!0),l(r,null,a(p.info,((e,o)=>(t(),s(w,{onClick:t=>b.clickItem(o),style:d({width:(o===p.current?2*k.dots.width:k.dots.width)+"px",height:k.dots.width/2+"px","background-color":o!==p.current?k.dots.backgroundColor:k.dots.selectedBackgroundColor,"border-radius":"0px"}),key:o,class:"uni-swiper__dots-item uni-swiper__dots-bar"},null,8,["onClick","style"])))),128))])),_:1},8,["style"])):i("",!0),"dot"===p.mode?(t(),s(w,{style:d({bottom:k.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"dot"},{default:e((()=>[(t(!0),l(r,null,a(p.info,((e,o)=>(t(),s(w,{onClick:t=>b.clickItem(o),style:d({width:k.dots.width+"px",height:k.dots.height+"px","background-color":o!==p.current?k.dots.backgroundColor:k.dots.selectedBackgroundColor,border:o!==p.current?k.dots.border:k.dots.selectedBorder}),key:o,class:"uni-swiper__dots-item"},null,8,["onClick","style"])))),128))])),_:1},8,["style"])):i("",!0),"round"===p.mode?(t(),s(w,{style:d({bottom:k.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"round"},{default:e((()=>[(t(!0),l(r,null,a(p.info,((e,o)=>(t(),s(w,{onClick:t=>b.clickItem(o),class:c([[o===p.current&&"uni-swiper__dots-long"],"uni-swiper__dots-item"]),style:d({width:(o===p.current?3*k.dots.width:k.dots.width)+"px",height:k.dots.height+"px","background-color":o!==p.current?k.dots.backgroundColor:k.dots.selectedBackgroundColor,border:o!==p.current?k.dots.border:k.dots.selectedBorder}),key:o},null,8,["onClick","class","style"])))),128))])),_:1},8,["style"])):i("",!0),"nav"===p.mode?(t(),s(w,{key:"nav",style:d({"background-color":p.dotsStyles.backgroundColor,bottom:"0"}),class:"uni-swiper__dots-box uni-swiper__dots-nav"},{default:e((()=>[n(x,{style:d({color:p.dotsStyles.color}),class:"uni-swiper__dots-nav-item"},{default:e((()=>[u(f(p.current+1+"/"+p.info.length+" "+p.info[p.current][p.field]),1)])),_:1},8,["style"])])),_:1},8,["style"])):i("",!0),"indexes"===p.mode?(t(),s(w,{key:"indexes",style:d({bottom:k.dots.bottom+"px"}),class:"uni-swiper__dots-box"},{default:e((()=>[(t(!0),l(r,null,a(p.info,((o,l)=>(t(),s(w,{onClick:t=>b.clickItem(l),style:d({width:k.dots.width+"px",height:k.dots.height+"px",color:l===p.current?k.dots.selectedColor:k.dots.color,"background-color":l!==p.current?k.dots.backgroundColor:k.dots.selectedBackgroundColor,border:l!==p.current?k.dots.border:k.dots.selectedBorder}),key:l,class:"uni-swiper__dots-item uni-swiper__dots-indexes"},{default:e((()=>[n(x,{class:"uni-swiper__dots-indexes-text"},{default:e((()=>[u(f(l+1),1)])),_:2},1024)])),_:2},1032,["onClick","style"])))),128))])),_:1},8,["style"])):i("",!0)])),_:3})}],["__scopeId","data-v-77e8f2a6"]]),O=B({__name:"log",setup(o){const d=g({info:[],tracks:[]}),c=h((()=>{let t=[];return d.info.items&&d.info.items.forEach((s=>{t.push({image:s.picUrl})})),t}));return p((t=>{!async function(t){const{data:s}=await b.getOrderExpressTrackList(t);d.tracks=s.reverse()}(t.id),async function(t){const{data:s}=await b.getOrderDetail(t);d.info=s}(t.id)})),(o,g)=>{const h=v,p=S,b=w,B=y(k("uni-swiper-dot"),j),O=_,$=m,N=y(k("s-layout"),I);return t(),s(N,{title:"物流追踪"},{default:e((()=>[n(O,{class:"log-wrap"},{default:e((()=>[c.value.length>0?(t(),s(O,{key:0,class:"log-card ss-flex ss-m-20 ss-r-10"},{default:e((()=>[n(B,{info:c.value,current:d.current,mode:"round"},{default:e((()=>[n(b,{class:"swiper-box"},{default:e((()=>[(t(!0),l(r,null,a(c.value,((o,d)=>(t(),s(p,{key:d},{default:e((()=>[n(h,{class:"log-card-img",src:x(C).$url.static(o.image)},null,8,["src"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["info","current"]),n(O,{class:"log-card-msg"},{default:e((()=>[n(O,{class:"ss-m-b-8"},{default:e((()=>[u("快递单号："+f(d.info.logisticsNo),1)])),_:1}),n(O,null,{default:e((()=>[u("快递公司："+f(d.info.logisticsName),1)])),_:1})])),_:1})])),_:1})):i("",!0),n(O,{class:"log-content ss-m-20 ss-r-10"},{default:e((()=>[(t(!0),l(r,null,a(d.tracks,((o,l)=>(t(),s(O,{class:"log-content-box ss-flex",key:o.title},{default:e((()=>[n(O,{class:"log-icon ss-flex-col ss-col-center ss-m-r-20"},{default:e((()=>[n($,{class:"cicon-title"}),d.tracks.length-1!==l?(t(),s(O,{key:0,class:"line"})):i("",!0)])),_:2},1024),n(O,{class:"log-content-msg"},{default:e((()=>[n(O,{class:"log-msg-desc ss-m-b-16"},{default:e((()=>[u(f(o.content),1)])),_:2},1024),n(O,{class:"log-msg-date ss-m-b-40"},{default:e((()=>[u(f(x(C).$helper.timeFormat(o.time,"yyyy-mm-dd hh:MM:ss")),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-f40a4cdd"]]);export{O as default};
