function find(elements,cb)
{
    let i=0;
    while(i<elements.length)
    {
        if(cb(elements[i]))
         {
        console.log(elements[i]);
        }
        else
        {
        console.log("Undefined");
    }
    i++;
        
    }
}
module.exports=find;