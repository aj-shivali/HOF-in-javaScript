function reduce(elements, cb, startingValue){
    let total;
    
        let s = 0;
        if(!startingValue){
            startingValue = elements[0];
            s = 1;
        }
        total = startingValue;
       let i=s;
       while(i<elements.length){
            total = cb(total,elements[i]);
            i++;
        }
    
    return total;
}
module.exports=reduce;

