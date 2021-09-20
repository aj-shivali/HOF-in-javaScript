const items = [1,2,3,4,5,5];
const find = require("../find");

const cbFunction = (item)=>{
    if (item==5)
    {return true;}
    else
    {return false;}
}
console.log(find(items,cbFunction));
