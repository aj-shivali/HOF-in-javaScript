const items = [1,2,3,4,5,5];
const each = require("../each");

const cbFunction = (item,index)=>{
    console.log(item * index);
}

if(!each(items,cbFunction)){
    console.log("Undefined");
}
