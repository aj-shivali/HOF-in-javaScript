const nestedArray = [1, [2], [[3]], [[[4]]]]; 
const flatten = require("../flatten");

console.log(flatten(nestedArray));