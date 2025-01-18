import{aN as t,cm as e,aP as i,P as s,cn as r,aQ as l,co as a,j as n,f as c,w as _,k as h,Q as o,l as u,F as d,m as p,z as f,y as m,p as b,t as w,C as y,i as g,S as v}from"./index-B9abLD3F.js";import{_ as S}from"./_plugin-vue_export-helper.BCo6x5W8.js";const x=S({name:"su-tabs",data:()=>({addStyle:t,addUnit:e,firstTime:!0,scrollLeft:0,scrollViewWidth:0,lineOffsetLeft:0,tabsRect:{left:0},innerCurrent:0,moving:!1}),props:{duration:{type:Number,default:300},list:{type:Array,default:[]},lineColor:{type:String,default:""},activeStyle:{type:[String,Object],default:()=>({color:"#303133"})},inactiveStyle:{type:[String,Object],default:()=>({color:"#606266"})},lineWidth:{type:[String,Number],default:20},lineHeight:{type:[String,Number],default:3},lineBgSize:{type:String,default:"cover"},itemStyle:{type:[String,Object],default:()=>({height:"44px"})},scrollable:{type:Boolean,default:!0},current:{type:[Number,String],default:0},keyName:{type:String,default:"name"}},watch:{current:{immediate:!0,handler(t,e){t!==this.innerCurrent&&(this.innerCurrent=t,this.$nextTick((()=>{this.resize()})))}},list(){this.$nextTick((()=>{this.resize()}))}},computed:{textStyle(){return e=>{const s={},r=e===this.innerCurrent?t(this.activeStyle):t(this.inactiveStyle);return this.list[e].disabled&&(s.color="#c8c9cc"),i(r,s)}}},async mounted(){this.init()},methods:{$uGetRect(t,e){return new Promise((i=>{s().in(this)[e?"selectAll":"select"](t).boundingClientRect((t=>{e&&Array.isArray(t)&&t.length&&i(t),!e&&t&&i(t)})).exec()}))},setLineLeft(){const t=this.list[this.innerCurrent];if(!t)return;let e=this.list.slice(0,this.innerCurrent).reduce(((t,e)=>t+e.rect.width),0);const i=r(this.lineWidth);this.lineOffsetLeft=e+(t.rect.width-i)/2,this.firstTime&&setTimeout((()=>{this.firstTime=!1}),10)},animation(t,e=0){},clickHandler(t,e){this.$emit("click",{...t,index:e}),t.disabled||(this.innerCurrent=e,this.resize(),this.$emit("change",{...t,index:e}))},init(){l().then((()=>{this.resize()}))},setScrollLeft(){const t=this.list[this.innerCurrent],e=this.list.slice(0,this.innerCurrent).reduce(((t,e)=>t+e.rect.width),0),i=a().windowWidth;let s=e-(this.tabsRect.width-t.rect.width)/2-(i-this.tabsRect.right)/2+this.tabsRect.left/2;s=Math.min(s,this.scrollViewWidth-this.tabsRect.width),this.scrollLeft=Math.max(0,s)},resize(){0!==this.list.length&&Promise.all([this.getTabsRect(),this.getAllItemRect()]).then((([t,e=[]])=>{this.tabsRect=t,this.scrollViewWidth=0,e.map(((t,e)=>{this.scrollViewWidth+=t.width,this.list[e].rect=t})),this.setLineLeft(),this.setScrollLeft()}))},getTabsRect(){return new Promise((t=>{this.queryRect("u-tabs__wrapper__scroll-view").then((e=>t(e)))}))},getAllItemRect(){return new Promise((t=>{const e=this.list.map(((t,e)=>this.queryRect(`u-tabs__wrapper__nav__item-${e}`,!0)));Promise.all(e).then((e=>t(e)))}))},queryRect(t,e){return new Promise((e=>{this.$uGetRect(`.${t}`).then((t=>{e(t)}))}))}}},[["render",function(t,e,i,s,r,l){const a=y,S=g,x=v;return n(),c(S,{class:"u-tabs"},{default:_((()=>[h(S,{class:"u-tabs__wrapper"},{default:_((()=>[o(t.$slots,"left",{},void 0,!0),h(S,{class:"u-tabs__wrapper__scroll-view-wrapper"},{default:_((()=>[h(x,{"scroll-x":i.scrollable,"scroll-left":r.scrollLeft,"scroll-with-animation":"","enable-flex":"",class:"u-tabs__wrapper__scroll-view white-space","show-scrollbar":!1,ref:"u-tabs__wrapper__scroll-view"},{default:_((()=>[h(S,{class:"u-tabs__wrapper__nav",ref:"u-tabs__wrapper__nav"},{default:_((()=>[(n(!0),u(d,null,p(i.list,((t,e)=>(n(),c(S,{class:f(["u-tabs__wrapper__nav__item",[`u-tabs__wrapper__nav__item-${e}`,t.disabled&&"u-tabs__wrapper__nav__item--disabled"]]),key:e,onClick:i=>l.clickHandler(t,e),ref_for:!0,ref:`u-tabs__wrapper__nav__item-${e}`,style:m([r.addStyle(i.itemStyle),{flex:i.scrollable?"":1}])},{default:_((()=>[h(a,{class:f([[t.disabled&&"u-tabs__wrapper__nav__item__text--disabled"],"u-tabs__wrapper__nav__item__text"]),style:m([l.textStyle(e)])},{default:_((()=>[b(w(t[i.keyName]),1)])),_:2},1032,["class","style"])])),_:2},1032,["onClick","style","class"])))),128)),h(S,{class:"u-tabs__wrapper__nav__line",ref:"u-tabs__wrapper__nav__line",style:m([{width:r.addUnit(i.lineWidth),transform:`translate(${r.lineOffsetLeft}px)`,transitionDuration:`${r.firstTime?0:i.duration}ms`,height:r.addUnit(i.lineHeight),background:i.lineColor?i.lineColor:"var(--ui-BG-Main)",backgroundSize:i.lineBgSize}])},null,8,["style"])])),_:1},512)])),_:1},8,["scroll-x","scroll-left"])])),_:1}),o(t.$slots,"right",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-289e62c6"]]);export{x as _};
