import{aa as s}from"./index-BKnI5veo.js";const o={deleteBrowseHistory:o=>s({url:"/product/browse-history/delete",method:"DELETE",data:{spuIds:o},custom:{showSuccess:!0,successMsg:"删除成功"}}),cleanBrowseHistory:()=>s({url:"/product/browse-history/clean",method:"DELETE",custom:{showSuccess:!0,successMsg:"清空成功"}}),getBrowseHistoryPage:o=>s({url:"/product/browse-history/page",method:"GET",data:o,custom:{showLoading:!1}})};export{o as S};
