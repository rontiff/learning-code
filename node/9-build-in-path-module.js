
// import "path" module and use it

const path=require('path');

let pathObj = path.parse(__filename);  //from module wrapper function.

console.log([pathObj]);