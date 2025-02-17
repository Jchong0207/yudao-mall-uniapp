import{P as e,j as t,f as s,w as a,k as l,Q as n,g as o,x as i,p as r,t as u,i as c,z as d,s as f,U as p,c as g,v as m,aq as v,o as h,r as _,e as y,u as x,aJ as k,ae as b,aP as w,l as T,m as $,F as S,q as A,T as D,S as C,y as I,a2 as j,R as N,C as B,D as W}from"./index-Bw34y8dl.js";import{_ as E}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as R}from"./s-goods-column.BM-uKKc9.js";import{_ as M}from"./uni-load-more.DvM90YQN.js";import{S as P}from"./s-layout.BnNaBtzy.js";import{u as Y}from"./useGoods.s-Unc0ZH.js";import{S as z}from"./seckill.B4FCcK0R.js";import"./index.D2olNfS9.js";const F=E({name:"AiProgress",components:{},props:{percentage:{type:[Number,String],required:!0},textInside:{type:Boolean,default:!1},strokeWidth:{type:[Number,String],default:6},duration:{type:[Number,String],default:2e3},isAnimate:{type:Boolean,default:!1},bgColor:{type:String,default:"linear-gradient(90deg, var(--ui-BG-Main) 0%, var(--ui-BG-Main-gradient) 100%)"},noData:{type:Boolean,default:!1},lineData:{type:Boolean,default:!1},inBgColor:{type:String,default:"#ebeef5"}},data:()=>({width:0,timer:null,containerWidth:0,contentWidth:0}),methods:{start(){if(this.isAnimate){this.$nextTick((()=>{let e=this.$refs.progressContainer.$el,t=this.$refs.progressContent.$el,s=window.getComputedStyle(e,null).width.replace("px","")*(1*this.percentage/100);t.style.width=s.toFixed(2)+"px",t.style.transition=`width ${this.duration/1e3}s ease`}));const t=e().in(this).selectAll("#container");e().in(this).selectAll("#content"),t.boundingClientRect().exec((e=>{this.contentWidth=1*e[0][0].width*(1*this.percentage/100).toFixed(2)+"px"}))}}},mounted(){this.$nextTick((()=>{this.start()}))},created(){},filters:{},computed:{},watch:{},directives:{}},[["render",function(e,d,f,p,g,m){const v=c;return t(),s(v,null,{default:a((()=>[f.lineData?(t(),s(v,{key:0,class:"flex a-center content"},{default:a((()=>[l(v,null,{default:a((()=>[n(e.$slots,"content",{},void 0,!0)])),_:3})])),_:3})):o("",!0),l(v,{class:"flex a-center",style:{"padding-right":"10rpx"}},{default:a((()=>[l(v,{class:"progress-container",id:"container",ref:"progressContainer",style:i({background:f.inBgColor})},{default:a((()=>[f.isAnimate?(t(),s(v,{key:0,class:"progress-content flex j-end",id:"content",ref:"progressContent",style:i({height:f.strokeWidth+"px",background:f.bgColor,width:g.contentWidth,transition:`width ${f.duration/1e3}s ease`})},{default:a((()=>[f.textInside&&!f.noData?(t(),s(v,{key:0,class:"textInside flex a-center j-center"},{default:a((()=>[l(v,{class:"text"},{default:a((()=>[r(u(f.percentage)+"%",1)])),_:1})])),_:1})):o("",!0)])),_:1},8,["style"])):o("",!0),f.isAnimate?o("",!0):(t(),s(v,{key:1,class:"progress-content flex j-end",style:i({width:f.percentage+"%",height:f.strokeWidth+"px",background:f.bgColor})},{default:a((()=>[f.textInside&&!f.noData?(t(),s(v,{key:0,class:"textInside flex a-center j-center"},{default:a((()=>[l(v,{class:"text"},{default:a((()=>[r(u(f.percentage)+"%",1)])),_:1})])),_:1})):o("",!0)])),_:1},8,["style"]))])),_:1},8,["style"]),l(v,null,{default:a((()=>[f.textInside||f.lineData||f.noData||f.isAnimate?o("",!0):(t(),s(v,{key:0,class:"percentage"},{default:a((()=>[r(u(f.percentage)+"% ",1)])),_:1}))])),_:1})])),_:1})])),_:3})}],["__scopeId","data-v-0ecdc384"]]),q=E({__name:"list",setup(e){d((e=>({"53e5b336":x(U)})));const{safeAreaInsets:n,safeArea:E}=f.$platform.device,q=2*f.$platform.device.statusBarHeight,G=2*(E.height+n.bottom)+q-f.$platform.navbar-350,U=f.$url.css("/static/img/shop/goods/seckill-header.png"),H={name:{show:!0},introduction:{show:!0},price:{show:!0},marketPrice:{show:!0}},J=p([]),L=p(""),Q=e=>{w((()=>L.value=`timeItem${e}`))},Z=p(0),K=g((()=>J.value[Z.value])),O=(e,t)=>{Z.value=e,X.pageNo=1,X.configId=t,te.value=[],ae()},V=g((()=>{var e;const t=null==(e=K.value)?void 0:e.endTime;if(t)return Y(`${k().format("YYYY-MM-DD")} ${t}`)})),X=m({configId:0,pageNo:1,pageSize:5}),ee=p(0),te=p([]),se=p("");async function ae(){se.value="loading";const{data:e}=await z.getSeckillActivityPage(X);e.list.forEach((e=>{e.percent=parseInt(100*(e.totalStock-e.stock)/e.totalStock)})),te.value=te.value.concat(...e.list),ee.value=e.total,se.value=te.value.length<ee.value?"more":"noMore"}function le(){"noMore"!==se.value&&(X.pageNo+=1,ae())}return v((()=>le())),h((async()=>{await(async()=>{const{data:e}=await z.getSeckillConfigList(),t=k(),s=t.format("YYYY-MM-DD"),a=p([]);e.forEach(((e,l)=>{const n=k(`${s} ${e.startTime}`),o=k(`${s} ${e.endTime}`);a.value[l]=e.id,t.isBefore(n)?e.status=b.WAIT_START:t.isAfter(o)?e.status=b.END:(e.status=b.STARTED,Z.value=l)})),J.value=e,O(Z.value,a.value[Z.value]),Q(Z.value)})()})),(e,n)=>{const d=c,p=A,g=N,m=D,v=C,h=B,k=_(y("su-progress"),F),w=W,E=_(y("s-goods-column"),R),Y=_(y("uni-load-more"),M),z=_(y("s-layout"),P);return t(),s(z,{bgStyle:{color:"rgb(245,28,19)"},navbar:"inner"},{default:a((()=>{var e,n;return[l(d,{class:"page-bg",style:i([{marginTop:"-"+Number(q+88)+"rpx"}])},null,8,["style"]),(null==(n=null==(e=K.value)?void 0:e.sliderPicUrls)?void 0:n.length)>0?(t(),s(d,{key:0,class:"header"},{default:a((()=>[l(m,{"indicator-dots":"true",autoplay:"true",circular:!0,interval:"3000",duration:"1500","indicator-color":"rgba(255,255,255,0.6)","indicator-active-color":"#fff"},{default:a((()=>[(t(!0),T(S,null,$(K.value.sliderPicUrls,((e,n)=>(t(),s(g,{key:n,class:"borRadius14"},{default:a((()=>[l(p,{src:e,class:"slide-image borRadius14","lazy-load":""},null,8,["src"])])),_:2},1024)))),128))])),_:1})])),_:1})):o("",!0),l(d,{class:"flex align-center justify-between ss-p-25"},{default:a((()=>[l(d,{class:"time-icon"},{default:a((()=>[l(p,{class:"ss-w-100 ss-h-100",src:"http://mall.yudao.iocoder.cn/static/images/priceTag.png"})])),_:1}),l(v,{class:"time-list","scroll-into-view":L.value,"scroll-x":"","scroll-with-animation":""},{default:a((()=>[(t(!0),T(S,null,$(J.value,((e,n)=>(t(),s(d,{key:n,class:I(["item",{active:Z.value===n}]),id:`timeItem${n}`,onClick:t=>O(n,e.id)},{default:a((()=>[l(d,{class:"time"},{default:a((()=>[r(u(e.startTime),1)])),_:2},1024),l(d,{class:"status"},{default:a((()=>[r(u(null==e?void 0:e.status),1)])),_:2},1024)])),_:2},1032,["class","id","onClick"])))),128))])),_:1},8,["scroll-into-view"])])),_:1}),l(d,{class:"list-content"},{default:a((()=>[l(d,{class:"content-header ss-flex-col ss-col-center ss-row-center"},{default:a((()=>[l(d,{class:"content-header-box ss-flex ss-row-center"},{default:a((()=>{var e;return[(null==(e=K.value)?void 0:e.status)===x(b).STARTED?(t(),s(d,{key:0,class:"countdown-box ss-flex"},{default:a((()=>[l(d,{class:"countdown-title ss-m-r-12"},{default:a((()=>[r("距结束")])),_:1}),l(d,{class:"ss-flex countdown-time"},{default:a((()=>[l(d,{class:"ss-flex countdown-h"},{default:a((()=>[r(u(V.value.h),1)])),_:1}),l(d,{class:"ss-m-x-4"},{default:a((()=>[r(":")])),_:1}),l(d,{class:"countdown-num ss-flex ss-row-center"},{default:a((()=>[r(u(V.value.m),1)])),_:1}),l(d,{class:"ss-m-x-4"},{default:a((()=>[r(":")])),_:1}),l(d,{class:"countdown-num ss-flex ss-row-center"},{default:a((()=>[r(u(V.value.s),1)])),_:1})])),_:1})])),_:1})):(t(),s(d,{key:1},{default:a((()=>{var e;return[r(u(null==(e=K.value)?void 0:e.status),1)]})),_:1}))]})),_:1})])),_:1}),l(v,{class:"scroll-box",style:i({height:G+"rpx"}),"scroll-y":"true","scroll-with-animation":!1,"enable-back-to-top":!0},{default:a((()=>[(t(!0),T(S,null,$(te.value,(e=>(t(),s(d,{class:"goods-box ss-m-b-20",key:e.id},{default:a((()=>[l(E,{size:"lg",data:{...e,price:e.seckillPrice},goodsFields:H,seckillTag:!0},{activity:a((()=>[l(d,{class:"limit"},{default:a((()=>[r(" 限量 "),l(h,{class:"ss-m-l-5"},{default:a((()=>[r(u(e.stock)+" "+u(e.unitName),1)])),_:2},1024)])),_:2},1024),l(k,{percentage:e.percent,strokeWidth:"10",textInside:"",isAnimate:""},null,8,["percentage"])])),cart:a((()=>{var l,n,o,i,r;return[(null==(l=K.value)?void 0:l.status)===x(b).WAIT_START?(t(),s(w,{key:0,class:I(["ss-reset-button cart-btn",{disabled:(null==(n=K.value)?void 0:n.status)===x(b).END}])},{default:a((()=>[j("span",null,"未开始")])),_:1},8,["class"])):(null==(o=K.value)?void 0:o.status)===x(b).STARTED?(t(),s(w,{key:1,class:I(["ss-reset-button cart-btn",{disabled:(null==(i=K.value)?void 0:i.status)===x(b).END}]),onClick:t=>x(f).$router.go("/pages/goods/seckill",{id:e.id})},{default:a((()=>[j("span",null,"马上抢")])),_:2},1032,["class","onClick"])):(t(),s(w,{key:2,class:I(["ss-reset-button cart-btn",{disabled:(null==(r=K.value)?void 0:r.status)===x(b).END}])},{default:a((()=>[j("span",null,"已结束")])),_:1},8,["class"]))]})),_:2},1032,["data"])])),_:2},1024)))),128)),ee.value>0?(t(),s(Y,{key:0,status:se.value,"content-text":{contentdown:"上拉加载更多"},onClick:le},null,8,["status"])):o("",!0)])),_:1},8,["style"])])),_:1})]})),_:1},8,["bgStyle"])}}},[["__scopeId","data-v-91f9a52a"]]);export{q as default};
