import{X as t,cp as s,aS as e,aQ as i,P as o,bn as c,cq as n,cs as h,cr as r,j as d,f as a,w as y,k as l,x as p,Q as u,i as k}from"./index-sTbmrhgN.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";const x=f({name:"su-sticky",props:{offsetTop:{type:[String,Number],default:0},customNavHeight:{type:[String,Number],default:44},stickyToTop:{type:Boolean,default:!1},bgColor:{type:String,default:"transparent"},zIndex:{type:[String,Number],default:""},index:{type:[String,Number],default:""},customStyle:{type:[Object,String],default:()=>({})}},data:()=>({cssSticky:!1,stickyTop:0,elId:t(),left:0,width:"auto",height:"auto",fixed:!1}),computed:{style(){const t={};return this.stickyToTop?t.position="static":this.cssSticky?(t.position="sticky",t.zIndex=this.uZindex,t.top=s(this.stickyTop)):t.height=this.fixed?this.height+"px":"auto",t.backgroundColor=this.bgColor,e(i(this.customStyle),t)},stickyContent(){const t={};return this.cssSticky||(t.position=this.fixed?"fixed":"static",t.top=this.stickyTop+"px",t.left=this.left+"px",t.width="auto"==this.width?"auto":this.width+"px",t.zIndex=this.uZindex),t},uZindex(){return this.zIndex?this.zIndex:970}},mounted(){this.init()},methods:{init(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.stickyToTop&&this.initObserveContent()},$uGetRect(t,s){return new Promise((e=>{o().in(this)[s?"selectAll":"select"](t).boundingClientRect((t=>{s&&Array.isArray(t)&&t.length&&e(t),!s&&t&&e(t)})).exec()}))},initObserveContent(){this.$uGetRect("#"+this.elId).then((t=>{this.height=t.height,this.left=t.left,this.width=t.width,this.$nextTick((()=>{this.observeContent()}))}))},observeContent(){this.disconnectObserver("contentObserver");const t=c({thresholds:[.95,.98,1]});t.relativeToViewport({top:-this.stickyTop}),t.observe(`#${this.elId}`,(t=>{this.setFixed(t.boundingClientRect.top)})),this.contentObserver=t},setFixed(t){const s=t<=this.stickyTop;this.fixed=s},disconnectObserver(t){const s=this[t];s&&s.disconnect()},getStickyTop(){this.stickyTop=n(this.offsetTop)+n(this.customNavHeight)},async checkSupportCssSticky(){this.checkCssStickyForH5()&&(this.cssSticky=!0),"android"===h()&&Number(r().system)>8&&(this.cssSticky=!0),"ios"===h()&&(this.cssSticky=!0)},checkComputedStyle(){},checkCssStickyForH5(){const t=["","-webkit-","-ms-","-moz-","-o-"],s=t.length,e=document.createElement("div");for(let i=0;i<s;i++)if(e.style.position=t[i]+"sticky",""!==e.style.position)return!0;return!1}},beforeDestroy(){this.disconnectObserver("contentObserver")}},[["render",function(t,s,e,i,o,c){const n=k;return d(),a(n,{class:"u-sticky",id:o.elId,style:p([c.style])},{default:y((()=>[l(n,{style:p([c.stickyContent]),class:"u-sticky__content"},{default:y((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["id","style"])}],["__scopeId","data-v-c4511e77"]]);export{x as _};
