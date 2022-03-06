
//Strings 
let name = "Hello my name is Ron"

//count number of character
console.log(name.length)  //=20, meaning number of character

//Select word "Hello" only
console.log(name.substring(0,5))
console.log(name.substring(-3))


//Change lower case, Upper case
console.log(name.toLowerCase())
console.log(name.toUpperCase())


let john="John said, \"I have a bad day today\""
console.log(john)


const lastName = "Ha"
const firstName="Ron"

const fullName= lastName+" "+firstName;

console.log(fullName)


////////////////////////////////////////////////////////////////////

const firstSentence ="This is the first sentence."
const secondSentence = "This is the second sentence."

const fullSentence = firstSentence+ "\n" + secondSentence     

console.log(fullSentence)



////////////////////////////////////////////////////////////////////

const oldStr = "my name is tom"
const newStr=oldStr.replace("tom","Paul")

console.log(newStr)




////////////////////////////////////////////////////////////////////
//split is use to convert the string into array. 

const names = "John,Peter,Sam,Anne,Susan,Josephine";
const newNames = names.split(",")

const fruits ="apple,orange,watermelon,banana,melon,plum";
const splitFruit = fruits.split(",")

const vegetables ="broccoli;tomato;potato;spinach;lettuce;cabbage"
const splitVegetables = vegetables.split(";")


console.log(newNames)
console.log(splitFruit)
console.log(splitVegetables)





