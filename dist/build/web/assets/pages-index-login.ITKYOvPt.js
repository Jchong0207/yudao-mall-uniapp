import{o as a,s as e,I as r,J as s,K as o,f as t,j as n,i}from"./index-elTIKzuw.js";const l={__name:"login",setup:l=>(a((async a=>{new URLSearchParams(location.search).forEach(((e,r)=>{a[r]=e}));const t=a.event,n=a.code,i=a.state;"login"===t?await e.$platform.useProvider().login(n,i):"bind"===t&&await e.$platform.useProvider().bind(n,i);let l=r("returnUrl");l?(s({key:"returnUrl"}),location.replace(l)):o({url:"/"})})),(a,e)=>{const r=i;return n(),t(r)})};export{l as default};
