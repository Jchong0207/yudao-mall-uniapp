import{v as t,o as e,bp as s,r as a,e as l,f as i,w as o,j as n,k as r,i as c}from"./index-BKnI5veo.js";import{_ as p}from"./mp-html.DSU7F1t9.js";import{S as m}from"./s-layout.Drz3FS_-.js";import{A as u}from"./article.B5zALbRD.js";import{_ as d}from"./_plugin-vue_export-helper.BCo6x5W8.js";const f=d({__name:"richtext",setup(d){const f=t({title:"",content:""});return e((t=>{t.title&&(f.title=t.title,s({title:f.title})),async function(t,e){const{code:a,data:l}=await u.getArticle(t,e);0===a&&(f.content=l.content,f.title!==l.title&&(f.title=l.title,s({title:f.title})))}(t.id,t.title)})),(t,e)=>{const s=a(l("mp-html"),p),u=c,d=a(l("s-layout"),m);return n(),i(d,{bgStyle:{color:"#FFF"},title:f.title,class:"set-wrap"},{default:o((()=>[r(u,{class:"ss-p-30"},{default:o((()=>[r(s,{class:"richtext",content:f.content},null,8,["content"])])),_:1})])),_:1},8,["title"])}}},[["__scopeId","data-v-afddc728"]]);export{f as default};
