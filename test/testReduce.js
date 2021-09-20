const items = [1,2,3,4,5,5];
const reduce = require("../reduce");

const cbFunction = (total, element)=>{
    return total+element;
}

console.log(reduce(items,cbFunction,1));
