import{aJ as t}from"./index-Dg3xN8dW.js";const r=t=>{let r="0.00";if(void 0===t)return r;const e=(t=>{if(void 0===t)return 0;const r="string"==typeof t?parseFloat(t):t;return parseFloat((r/100).toFixed(2))})(t),n=e.toString().split(".")[1];switch(n?n.length:0){case 0:r=e.toString()+".00";break;case 1:r=e.toString()+".0";break;case 2:r=e.toString()}return r};function e(r,e="YYYY-MM-DD HH:mm:ss"){return r?(void 0===e&&(e="YYYY-MM-DD HH:mm:ss"),t(r).format(e)):""}function n(t,r="id",e="parentId",n="children",s=0){const o=JSON.parse(JSON.stringify(t)),i=o.filter((t=>{let n=o.filter((n=>t[r]===n[e]));return n.length>0&&(t.children=n),t[e]===s}));return""!==i?i:t}function s(t){t.list=[],t.total=0,t.pageNo=1}const o=(t,r)=>{const e=Object.assign({},t,r);Object.keys(e).forEach((r=>{-1===Object.keys(t).indexOf(r)&&delete e[r]})),Object.assign(t,e)};function i(t){try{return JSON.parse(t)}catch(r){return console.error(`str[${t}] 不是一个 JSON 字符串`),""}}export{e as a,o as c,r as f,n as h,i as j,s as r};
