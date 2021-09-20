const items = [1,2,3,4,5,5];
const map = require("../map");

const cbFunction = (item,index)=>{
    console.log(item + index);
}

if(!map(items,cbFunction)){
    console.log("Undefined function");
}