function filter(elements,cb){
let newarray=[];
let i=0;
    while(i<elements.length){
    if (cb(elements[i])==true){
        newarray.push(elements[i])
    }
    i++;

}
return newarray;
}
module.exports=filter;