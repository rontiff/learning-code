

const fs=require('fs')
const readFileSync=require('readline-sync')

//Saving Name List 
//create a file "21-file-system.txt"

//ask name 
const name=readFileSync.question('what is your name?')

// name already existed
const existingStudent=fs.readFileSync('21-file-system.txt','utf-8')

// list out all the name 
fs.writeFileSync('21-file-system.txt',existingStudent+"\n" +name)
console.log("Added "+ name+ " to the file system.")




// const existingStudent=fs.readFileSync('21-file-system.txt','utf-8')
