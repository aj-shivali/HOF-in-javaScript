function map(elements, cb) {
    var newarray = [];
    let i = 0;
    while (i < elements.length) {
      newarray.push(cb(elements[i], i));
      i++;
    }
    return newarray;
  }
  module.exports= map;