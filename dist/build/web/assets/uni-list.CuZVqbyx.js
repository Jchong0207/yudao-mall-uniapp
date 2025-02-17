import{j as t,f as e,w as i,Q as s,y as a,x as l,p as o,t as n,g as r,C as d,i as c,bh as u,K as h,bi as p,bj as f,r as b,e as g,k as y,q as m,bk as k}from"./index-Bw34y8dl.js";import{b as _}from"./s-layout.BnNaBtzy.js";import{_ as w}from"./_plugin-vue_export-helper.BCo6x5W8.js";const S=w({name:"UniBadge",emits:["click"],props:{type:{type:String,default:"error"},inverted:{type:Boolean,default:!1},isDot:{type:Boolean,default:!1},maxNum:{type:Number,default:99},absolute:{type:String,default:""},offset:{type:Array,default:()=>[0,0]},text:{type:[String,Number],default:""},size:{type:String,default:"small"},customStyle:{type:Object,default:()=>({})}},data:()=>({}),computed:{width(){return 8*String(this.text).length+12},classNames(){const{inverted:t,type:e,size:i,absolute:s}=this;return[t?"uni-badge--"+e+"-inverted":"","uni-badge--"+e,"uni-badge--"+i,s?"uni-badge--absolute":""].join(" ")},positionStyle(){if(!this.absolute)return{};let t=this.width/2,e=10;this.isDot&&(t=5,e=5);const i=`${-t+this.offset[0]}px`,s=`${-e+this.offset[1]}px`,a={rightTop:{right:i,top:s},rightBottom:{right:i,bottom:s},leftBottom:{left:i,bottom:s},leftTop:{left:i,top:s}},l=a[this.absolute];return l||a.rightTop},badgeWidth(){return{width:`${this.width}px`}},dotStyle(){return this.isDot?{width:"10px",height:"10px",borderRadius:"10px"}:{}},displayValue(){const{isDot:t,text:e,maxNum:i}=this;return t?"":Number(e)>i?`${i}+`:e}},methods:{onClick(){this.$emit("click")}}},[["render",function(u,h,p,f,b,g){const y=d,m=c;return t(),e(m,{class:"uni-badge--x"},{default:i((()=>[s(u.$slots,"default",{},void 0,!0),p.text?(t(),e(y,{key:0,class:a([g.classNames,"uni-badge"]),style:l([g.badgeWidth,g.positionStyle,p.customStyle,g.dotStyle]),onClick:h[0]||(h[0]=t=>g.onClick())},{default:i((()=>[o(n(g.displayValue),1)])),_:1},8,["class","style"])):r("",!0)])),_:3})}],["__scopeId","data-v-ea905333"]]);const x=w({name:"UniListItem",emits:["click","switchChange"],props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},badgeStyle:{type:Object,default:()=>({})},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:()=>({type:"",color:"#000000",size:20})},border:{type:Boolean,default:!0}},data:()=>({isFirstChild:!1}),mounted(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{getForm(t="uniList"){let e=this.$parent,i=e.$options.name;for(;i!==t;){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange(t){this.$emit("switchChange",t.detail)},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(t){let e={url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t})}};switch(t){case"navigateTo":default:u(e);break;case"redirectTo":f(e);break;case"reLaunch":p(e);break;case"switchTab":h(e)}}}},[["render",function(l,u,h,p,f,w){const x=c,B=m,C=b(g("uni-icons"),_),T=d,$=b(g("uni-badge"),S),v=k;return t(),e(x,{class:a([{"uni-list-item--disabled":h.disabled},"uni-list-item"]),"hover-class":!h.clickable&&!h.link||h.disabled||h.showSwitch?"":"uni-list-item--hover",onClick:w.onClick},{default:i((()=>[f.isFirstChild?r("",!0):(t(),e(x,{key:0,class:a(["border--left",{"uni-list--border":h.border}])},null,8,["class"])),y(x,{class:a(["uni-list-item__container",{"container--right":h.showArrow||h.link,"flex--direction":"column"===h.direction}])},{default:i((()=>[s(l.$slots,"header",{},(()=>[y(x,{class:"uni-list-item__header"},{default:i((()=>[h.thumb?(t(),e(x,{key:0,class:"uni-list-item__icon"},{default:i((()=>[y(B,{src:h.thumb,class:a(["uni-list-item__icon-img",["uni-list--"+h.thumbSize]])},null,8,["src","class"])])),_:1})):h.showExtraIcon?(t(),e(x,{key:1,class:"uni-list-item__icon"},{default:i((()=>[y(C,{color:h.extraIcon.color,size:h.extraIcon.size,type:h.extraIcon.type},null,8,["color","size","type"])])),_:1})):r("",!0)])),_:1})]),!0),s(l.$slots,"body",{},(()=>[y(x,{class:a(["uni-list-item__content",{"uni-list-item__content--center":h.thumb||h.showExtraIcon||h.showBadge||h.showSwitch}])},{default:i((()=>[h.title?(t(),e(T,{key:0,class:a(["uni-list-item__content-title",[0!==h.ellipsis&&h.ellipsis<=2?"uni-ellipsis-"+h.ellipsis:""]])},{default:i((()=>[o(n(h.title),1)])),_:1},8,["class"])):r("",!0),h.note?(t(),e(T,{key:1,class:"uni-list-item__content-note"},{default:i((()=>[o(n(h.note),1)])),_:1})):r("",!0)])),_:1},8,["class"])]),!0),s(l.$slots,"footer",{},(()=>[h.rightText||h.showBadge||h.showSwitch?(t(),e(x,{key:0,class:a(["uni-list-item__extra",{"flex--justify":"column"===h.direction}])},{default:i((()=>[h.rightText?(t(),e(T,{key:0,class:"uni-list-item__extra-text"},{default:i((()=>[o(n(h.rightText),1)])),_:1})):r("",!0),h.showBadge?(t(),e($,{key:1,type:h.badgeType,text:h.badgeText,"custom-style":h.badgeStyle},null,8,["type","text","custom-style"])):r("",!0),h.showSwitch?(t(),e(v,{key:2,disabled:h.disabled,checked:h.switchChecked,onChange:w.onSwitchChange},null,8,["disabled","checked","onChange"])):r("",!0)])),_:1},8,["class"])):r("",!0)]),!0)])),_:3},8,["class"]),h.showArrow||h.link?(t(),e(C,{key:1,size:16,class:"uni-icon-wrapper",color:"#bbb",type:"arrowright"})):r("",!0)])),_:3},8,["class","hover-class","onClick"])}],["__scopeId","data-v-9a7910cb"]]);const B=w({name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0}},created(){this.firstChildAppend=!1},methods:{loadMore(t){this.$emit("scrolltolower")}}},[["render",function(a,l,o,n,d,u){const h=c;return t(),e(h,{class:"uni-list uni-border-top-bottom"},{default:i((()=>[o.border?(t(),e(h,{key:0,class:"uni-list--border-top"})):r("",!0),s(a.$slots,"default",{},void 0,!0),o.border?(t(),e(h,{key:1,class:"uni-list--border-bottom"})):r("",!0)])),_:3})}],["__scopeId","data-v-911b1cd2"]]);export{x as _,B as a,S as b};
