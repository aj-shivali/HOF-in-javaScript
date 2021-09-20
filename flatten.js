function flatten(elements) {
  let flatarray = [];
  let i = 0;
  while (i < elements.length) {
    if (Array.isArray(elements[i])) {
      flatarray = flatarray.concat(flatten(elements[i]));
    } else {
      flatarray.push(elements[i]);
    }
    i++;
  }
  return flatarray;
}

module.exports = flatten;