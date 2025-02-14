import{bm as t,aJ as s,U as e}from"./index-sTbmrhgN.js";import{a as n}from"./index.Bv-U3561.js";function u(t,s){return i("exact"!==t&&s<10?"销量":"已售",t,s)}function o(t,s){return i("已兑换",t,s)}function a(t,s){return i("库存",t,s)}function i(t,s,e){if(e=e||0,"exact"===s)return t+e;if(e<10)return`${t}≤10`;const n=e.toString();return`${t}${n[0]}${"0".repeat(n.length-1)}+`}const r=[".avi",".mp4"];function p(s){return(null==s?void 0:s.filter((t=>t)).map(((s,e)=>({type:r.some((t=>s.includes(t)))?"video":"image",src:t.cdn(s)}))))||[]}function c(t){return 0===t.status?"info-color":10===t.status||20===t.status||30===t.status&&!t.commentStatus?"warning-color":30===t.status&&t.commentStatus?"success-color":"danger-color"}function l(t){return 0===t.status?"待付款":10===t.status&&1===t.deliveryType?"待发货":10===t.status&&2===t.deliveryType?"待核销":20===t.status?"待收货":30!==t.status||t.commentStatus?30===t.status&&t.commentStatus?"已完成":"已关闭":"待评价"}function m(t){return 0===t.status?`请在 ${n(t.payExpireTime)} 前完成支付`:10===t.status?"商家未发货，请耐心等待":20===t.status?"商家已发货，请耐心等待":30!==t.status||t.commentStatus?30===t.status&&t.commentStatus?"交易完成，感谢您的支持":"交易关闭":"已收货，快去评价一下吧"}function f(t){t.buttons=[],3===t.type&&t.buttons.push("combination"),20===t.status&&t.buttons.push("confirm"),t.logisticsId>0&&t.buttons.push("express"),0===t.status&&(t.buttons.push("cancel"),t.buttons.push("pay")),30!==t.status||t.commentStatus||t.buttons.push("comment"),40===t.status&&t.buttons.push("delete")}function d(t){return 10===t.status?"申请售后":20===t.status?"商品待退货":30===t.status?"商家待收货":40===t.status?"等待退款":50===t.status?"退款成功":61===t.status?"买家取消":62===t.status?"商家拒绝":63===t.status?"商家拒收货":"未知状态"}function h(t){return 10===t.status?"退款申请待商家处理":20===t.status?"请退货并填写物流信息":30===t.status?"退货退款申请待商家处理":40===t.status?"等待退款":50===t.status?"退款成功":61===t.status?"退款关闭":62===t.status?`商家不同意退款申请，拒绝原因：${t.auditReason}`:63===t.status?`商家拒绝收货，不同意退款，拒绝原因：${t.auditReason}`:"未知状态"}function v(t){t.buttons=[],[10,20,30].includes(t.status)&&t.buttons.push("cancel"),20===t.status&&t.buttons.push("delivery")}function g(t,n=""){t=function(t){if((t=t.toString()).indexOf("-")>0)return s(t);if(t.length>10)return s(parseInt(t));if(10===t.length)return s.unix(parseInt(t))}(t),""===n&&(n=s());let u=e(t-n);u.value>0&&setTimeout((()=>{u.value>0&&(u.value-=1e3)}),1e3);let o=s.duration(u.value);return{h:(30*o.months()*24+24*o.days()+o.hours()).toString().padStart(2,"0"),m:o.minutes().toString().padStart(2,"0"),s:o.seconds().toString().padStart(2,"0"),ms:o.$ms}}function $(t){return(t/100).toFixed(2)}function y(t){return $(t).replace(/\.?0+$/,"")}function C(t){return(t/10).toFixed(1).replace(/\.?0+$/,"")}function T(t){let s=[];for(const e of t)if(e.properties)for(const t of e.properties){let e=s.find((s=>s.id===t.propertyId));e||(e={id:t.propertyId,name:t.propertyName,values:[]},s.push(e)),e.values.find((s=>s.id===t.valueId))||e.values.push({id:t.valueId,name:t.valueName})}return s}function S(t,s){if(s&&0!==s.length)for(const e of t){const t=s.find((t=>t.spuId===e.id));if(!t)return;const n=t.skus.filter((t=>t.promotionPrice>0)).reduce(((t,s)=>t.promotionPrice<s.promotionPrice?t:s),[]);n&&(e.promotionType=n.promotionType,e.promotionPrice=n.promotionPrice),t.rewardActivity&&(e.rewardActivity=t.rewardActivity)}}function b(t){if(!t||!t.rules||0===t.rules.length)return[];const s=[{name:"满减",values:[]},{name:"赠品",values:[]},{name:"包邮",values:[]}];return t.rules.forEach((e=>{const n=10===t.conditionType?`满 ${y(e.limit)} 元`:`满 ${e.limit} 件`;if(e.limit&&s[0].values.push(`${n} 减 ${y(e.discountPrice)} 元`),e.point||e.giveCouponTemplateCounts&&e.giveCouponTemplateCounts.length>0){let t=[];e.point&&t.push(`送 ${e.point} 积分`),e.giveCouponTemplateCounts&&e.giveCouponTemplateCounts.length>0&&t.push(`送 ${e.giveCouponTemplateCounts.length} 张优惠券`),s[1].values.push(`${n} ${t.join("、")}`)}e.freeDelivery&&s[2].values.push(`${n} 包邮`)})),s.forEach((t=>{0===t.values.length&&s.splice(s.indexOf(t),1)})),s}function x(t){if(!t||!t.rules||0===t.rules.length)return[];const s=[];return t.rules.forEach((e=>{const n=10===t.conditionType?`满${y(e.limit)}元`:`满${e.limit}件`;e.limit&&s.push(`${n}减${y(e.discountPrice)}元`),e.point&&s.push(`${n}送${e.point}积分`),e.giveCouponTemplateCounts&&e.giveCouponTemplateCounts.length>0&&s.push(`${n}送${e.giveCouponTemplateCounts.length}张优惠券`),e.freeDelivery&&s.push(`${n}包邮`)})),s}export{S as a,a as b,T as c,p as d,u as e,$ as f,b as g,x as h,y as i,C as j,o as k,f as l,l as m,m as n,c as o,v as p,d as q,h as r,g as u};
