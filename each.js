    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each

   function each(elements, cb) {
    if(Array.isArray(elements)){
         let i=0;
 while(i<elements.length){
        cb(elements[i],i);
        i++;
}
return true;
}
else{
    return false;
}
}
module.exports = each; 