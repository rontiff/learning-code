
const os=require('os');

let hostname= os.hostname();
let platform=os.platform()
let release=os.release();
let tmpdir=os.tmpdir();
let totalMemory=os.totalmem();
let freeMemory=os.totalmem();
let uptime=os.uptime();
let userInfo=os.userInfo();
let version=os.version();



// Template String

console.log(hostname)
console.log(platform)
console.log(release)
console.log(tmpdir)
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(uptime)
console.log(userInfo)
console.log(version)


function PCinformation(){
    console.log(hostname)
    console.log(platform)
    console.log(release)
    console.log(tmpdir)
    console.log(`Total Memory: ${totalMemory}`);
    console.log(`Free Memory: ${freeMemory}`);
    console.log(uptime)
    console.log(userInfo)
    console.log(version)
}

PCinformation();