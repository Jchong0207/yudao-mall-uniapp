import{aa as e}from"./index-elTIKzuw.js";const t={getFavoritePage:t=>e({url:"/product/favorite/page",method:"GET",params:t}),isFavoriteExists:t=>e({url:"/product/favorite/exits",method:"GET",params:{spuId:t}}),createFavorite:t=>e({url:"/product/favorite/create",method:"POST",data:{spuId:t},custom:{auth:!0,showSuccess:!0,successMsg:"收藏成功"}}),deleteFavorite:t=>e({url:"/product/favorite/delete",method:"DELETE",data:{spuId:t},custom:{auth:!0,showSuccess:!0,successMsg:"取消成功"}})};export{t as F};
