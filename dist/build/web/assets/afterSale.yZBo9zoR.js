import{aa as e}from"./index-Bw34y8dl.js";const a={getAfterSalePage:a=>e({url:"/trade/after-sale/page",method:"GET",params:a,custom:{showLoading:!1}}),createAfterSale:a=>e({url:"/trade/after-sale/create",method:"POST",data:a}),getAfterSale:a=>e({url:"/trade/after-sale/get",method:"GET",params:{id:a}}),cancelAfterSale:a=>e({url:"/trade/after-sale/cancel",method:"DELETE",params:{id:a}}),getAfterSaleLogList:a=>e({url:"/trade/after-sale-log/list",method:"GET",params:{afterSaleId:a}}),deliveryAfterSale:a=>e({url:"/trade/after-sale/delivery",method:"PUT",data:a})};export{a as A};
