import{P as e,r as t,e as i,j as s,f as a,w as l,k as n,y as o,Q as h,g as r,p as c,t as d,x as p,q as u,C as m,i as f}from"./index-BKnI5veo.js";import{b as g}from"./s-layout.Drz3FS_-.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";const _=y({name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:()=>({isOpen:!1,isheight:null,height:0,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,nameSync:0}),watch:{open(e){this.isOpen=e,this.onClick(e,"init")}},updated(e){this.$nextTick((()=>{this.init(!0)}))},created(){this.collapse=this.getCollapse(),this.oldHeight=0,this.onClick(this.open,"init")},unmounted(){this.__isUnmounted=!0,this.uninstall()},mounted(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):console.warn(`name 值 ${this.nameSync} 重复`),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init(e){this.getCollapseHeight(e)},uninstall(){this.collapse&&(this.collapse.childrens.forEach(((e,t)=>{e===this&&this.collapse.childrens.splice(t,1)})),this.collapse.names.forEach(((e,t)=>{e===this.nameSync&&this.collapse.names.splice(t,1)})))},onClick(e,t){this.disabled||(this.isOpen=e,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==t&&this.collapse.onChange(e,this))},getCollapseHeight(t,i=0){e().in(this).select(`#${this.elId}`).fields({size:!0},(e=>{if(!(i>=10)){if(!e)return i++,void this.getCollapseHeight(!1,i);this.height=e.height,this.isheight=!0,t||this.onClick(this.isOpen,"init")}})).exec()},getNvueHwight(e){dom.getComponentRect(this.$refs["collapse--hook"],(t=>{if(t&&t.result&&t.size){if(this.height=t.size.height,this.isheight=!0,e)return;this.onClick(this.open,"init")}}))},getCollapse(e="uniCollapse"){let t=this.$parent,i=t.$options.name;for(;i!==e;){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}},[["render",function(e,y,_,b,C,v){const w=u,O=m,S=f,$=t(i("uni-icons"),g);return s(),a(S,{class:"uni-collapse-item"},{default:l((()=>[n(S,{onClick:y[0]||(y[0]=e=>v.onClick(!C.isOpen)),class:o(["uni-collapse-item__title",{"is-open":C.isOpen&&"auto"===_.titleBorder,"uni-collapse-item-border":"none"!==_.titleBorder}])},{default:l((()=>[n(S,{class:"uni-collapse-item__title-wrap"},{default:l((()=>[h(e.$slots,"title",{},(()=>[n(S,{class:o(["uni-collapse-item__title-box",{"is-disabled":_.disabled}])},{default:l((()=>[_.thumb?(s(),a(w,{key:0,src:_.thumb,class:"uni-collapse-item__title-img"},null,8,["src"])):r("",!0),n(O,{class:"uni-collapse-item__title-text"},{default:l((()=>[c(d(_.title),1)])),_:1})])),_:1},8,["class"])]),!0)])),_:3}),_.showArrow?(s(),a(S,{key:0,class:o([{"uni-collapse-item__title-arrow-active":C.isOpen,"uni-collapse-item--animation":!0===_.showAnimation},"uni-collapse-item__title-arrow"])},{default:l((()=>[n($,{color:_.disabled?"#ddd":"#bbb",size:"14",type:"bottom"},null,8,["color"])])),_:1},8,["class"])):r("",!0)])),_:3},8,["class"]),n(S,{class:o(["uni-collapse-item__wrap",{"is--transition":_.showAnimation}]),style:p({height:(C.isOpen?C.height:0)+"px"})},{default:l((()=>[n(S,{id:C.elId,ref:"collapse--hook",class:o(["uni-collapse-item__wrap-content",{open:C.isheight,"uni-collapse-item--border":_.border&&C.isOpen}])},{default:l((()=>[h(e.$slots,"default",{},void 0,!0)])),_:3},8,["id","class"])])),_:3},8,["class","style"])])),_:3})}],["__scopeId","data-v-d9eb4150"]]);const b=y({name:"uniCollapse",emits:["change","activeItem","input","update:modelValue"],props:{value:{type:[String,Array],default:""},modelValue:{type:[String,Array],default:""},accordion:{type:[Boolean,String],default:!1}},data:()=>({}),computed:{dataValue(){let e="string"==typeof this.value&&""===this.value||Array.isArray(this.value)&&0===this.value.length;"string"==typeof this.modelValue&&""===this.modelValue||Array.isArray(this.modelValue)&&this.modelValue.length;return e?this.modelValue:this.value}},watch:{dataValue(e){this.setOpen(e)}},created(){this.childrens=[],this.names=[]},mounted(){this.$nextTick((()=>{this.setOpen(this.dataValue)}))},methods:{setOpen(e){let t="string"==typeof e,i=Array.isArray(e);this.childrens.forEach(((s,a)=>{if(t&&e===s.nameSync){if(!this.accordion)return void console.warn("accordion 属性为 false ,v-model 类型应该为 array");s.isOpen=!0}i&&e.forEach((e=>{if(e===s.nameSync){if(this.accordion)return void console.warn("accordion 属性为 true ,v-model 类型应该为 string");s.isOpen=!0}}))})),this.emit(e)},setAccordion(e){this.accordion&&this.childrens.forEach(((t,i)=>{e!==t&&(t.isOpen=!1)}))},resize(){this.childrens.forEach(((e,t)=>{e.getCollapseHeight()}))},onChange(e,t){let i=[];this.accordion?i=e?t.nameSync:"":this.childrens.forEach(((e,t)=>{e.isOpen&&i.push(e.nameSync)})),this.$emit("change",i),this.emit(i)},emit(e){this.$emit("input",e),this.$emit("update:modelValue",e)}}},[["render",function(e,t,i,n,o,r){const c=f;return s(),a(c,{class:"uni-collapse"},{default:l((()=>[h(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-3aec18a2"]]);export{_,b as a};
