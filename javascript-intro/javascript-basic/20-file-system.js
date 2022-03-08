
//File System is build-in JS function 
//File System sue to save the result of the program. 

const fs=require('fs')
const readFileSync=require('readline-sync')



//寫一個File
fs.writeFileSync('20-file-system.txt',"Hello World")  
//when run the program."21-file-record.txt" will created.



//讀一個file               (      filename     +  type )
const data=fs.readFileSync('20-file-system.txt',"utf-8")
console.log(data)  

