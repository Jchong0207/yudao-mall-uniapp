import{c as s,j as e,f as a,w as l,k as t,y as d,p as o,t as c,g as u,u as i,s as r,Q as f,x as n,i as p}from"./index-BKnI5veo.js";import{f as y}from"./useGoods.BPUYIEuD.js";import{_}from"./_plugin-vue_export-helper.BCo6x5W8.js";const m=_({__name:"s-coupon-list",props:{data:{type:Object,default:{}},disabled:{type:Boolean,default:!1},type:{type:String,default:"coupon"}},setup(_){const m=s((()=>"coupon"!==b.type&&b.disabled)),b=_;return(s,b)=>{const v=p;return e(),a(v,{class:"ss-m-20",style:n({opacity:_.disabled?"0.5":"1"})},{default:l((()=>[t(v,{class:"content"},{default:l((()=>[t(v,{class:d(["tag ss-flex ss-row-center",m.value?"disabled-bg-color":"info-bg-color"])},{default:l((()=>[o(c(1===_.data.discountType?"满减券":"折扣券"),1)])),_:1},8,["class"]),t(v,{class:"title ss-m-x-30 ss-p-t-18"},{default:l((()=>[t(v,{class:"ss-flex ss-row-between"},{default:l((()=>[t(v,{class:d(["value-text ss-flex-1 ss-m-r-10",m.value?"disabled-color":"info-color"])},{default:l((()=>[o(c(_.data.name),1)])),_:1},8,["class"]),t(v,null,{default:l((()=>[t(v,{class:d(["ss-flex ss-col-bottom",m.value?"disabled-color":"price-text"])},{default:l((()=>[1===_.data.discountType?(e(),a(v,{key:0,class:"value-reduce ss-m-b-10"},{default:l((()=>[o("￥")])),_:1})):u("",!0),t(v,{class:"value-price"},{default:l((()=>[o(c(1===_.data.discountType?i(y)(_.data.discountPrice):_.data.discountPercent/10),1)])),_:1}),2===_.data.discountType?(e(),a(v,{key:1,class:"value-discount ss-m-b-10 ss-m-l-4"},{default:l((()=>[o("折")])),_:1})):u("",!0)])),_:1},8,["class"])])),_:1})])),_:1}),t(v,{class:"ss-flex ss-row-between ss-m-t-16"},{default:l((()=>[2===_.data.validityType?(e(),a(v,{key:0,class:d(["sellby-text",m.value?"disabled-color":"subtitle-color"])},{default:l((()=>[o(" 有效期：领取后 "+c(_.data.fixedEndTerm)+" 天内可用 ",1)])),_:1},8,["class"])):(e(),a(v,{key:1,class:d(["sellby-text",m.value?"disabled-color":"subtitle-color"])},{default:l((()=>[o(" 有效期: "+c(i(r).$helper.timeFormat(_.data.validStartTime,"yyyy-mm-dd"))+" 至 "+c(i(r).$helper.timeFormat(_.data.validEndTime,"yyyy-mm-dd")),1)])),_:1},8,["class"])),t(v,{class:d(["value-enough",m.value?"disabled-color":"subtitle-color"])},{default:l((()=>[o(" 满 "+c(i(y)(_.data.usePrice))+" 可用 ",1)])),_:1},8,["class"])])),_:1})])),_:1})])),_:1}),t(v,{class:"desc ss-flex ss-row-between"},{default:l((()=>[t(v,null,{default:l((()=>[t(v,{class:"desc-title"},{default:l((()=>[o(c(_.data.description),1)])),_:1}),t(v,null,{default:l((()=>[f(s.$slots,"reason",{},void 0,!0)])),_:3})])),_:3}),t(v,null,{default:l((()=>[f(s.$slots,"default",{},void 0,!0)])),_:3})])),_:3})])),_:3},8,["style"])}}},[["__scopeId","data-v-7f0306c4"]]);export{m as _};
