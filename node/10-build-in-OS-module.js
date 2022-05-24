
const os=require('os');

let totalMemory=os.totalmem();
let freeMemory=os.totalmem();


console.log("Total Memory: "+totalMemory)
console.log("Free Memory: "+freeMemory)


// Template String
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

