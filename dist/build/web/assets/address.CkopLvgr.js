import{aa as e}from"./index-BKnI5veo.js";const s={getAreaTree:()=>e({url:"/system/area/tree",method:"GET"})},d={getAddressList:()=>e({url:"/member/address/list",method:"GET"}),createAddress:s=>e({url:"/member/address/create",method:"POST",data:s,custom:{showSuccess:!0,successMsg:"保存成功"}}),updateAddress:s=>e({url:"/member/address/update",method:"PUT",data:s,custom:{showSuccess:!0,successMsg:"更新成功"}}),getAddress:s=>e({url:"/member/address/get",method:"GET",params:{id:s}}),deleteAddress:s=>e({url:"/member/address/delete",method:"DELETE",params:{id:s}})};export{d as A,s as a};
