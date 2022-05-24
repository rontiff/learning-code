
const fs=require('fs'); //import 

//after import modules, use the method.
//Method always pair: async & sync.   ALWAYS prefer asyn


const files=fs.readdirSync('./')
console.log(files)  // list out the file in the folder.


//async method  
fs.readdir('./',function(err,files){
    if (err){
        console.log("error",err);
    }else{
        console.log("result",files);
    } 
});


