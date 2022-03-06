//Summary
name.length  //number of character
name.substring(0,5) //select word
name.toLowerCase() //capital letter
name.toUpperCase() //small letter

//Replace Word
let coco="coco is good."
let lulu=coco.replace("coco","lulu")
console.log(lulu)  //lulu is good.

//String to Object
const names = "John,Peter,Sam";
const newNames = names.split(",")
console.log(newNames)  //["john","peter","Sam"]

const value1 = 123;
let sentence=`Back quote allow changing ${value1} in the string.`
console.log(sentence)


////////////////////////////////////////////////////////////////////


//Strings 
let name = "Hello my name is Ron"

//print out statement
console.log(name)

//count number of character
console.log(name.length)  //=20, meaning number of character

//Select word "Hello" only
hello=name.substring(0,5)
console.log(hello)   

//Change lower case, Upper case
console.log(name.toLowerCase())
console.log(name.toUpperCase())

////////////////////////////////////////////////////////////////////

const value = 123;
let example=`Back quote allow changing ${value} in the string `
console.log(example)

////////////////////////////////////////////////////////////////////

let tom='tom said, "I have a good day today"'
console.log(tom)

let bob="bob said, 'I have a good day today'"
console.log(bob)

let john="John said, \"I have a good day today\""
console.log(john)

let may='May said, \'I have a good day today\''
console.log(may)


////////////////////////////////////////////////////////////////////

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

const tommy = "my name is Tommy."

// set up new variable
const Paul = tommy.replace("Tommy","Paul")

console.log(Paul)

////////////////////////////////////////////////////////////////////
//split is use to convert the string into array. 



const fruits ="apple,orange,watermelon,banana,melon,plum";
const splitFruit = fruits.split(",")

const vegetables ="broccoli;tomato;potato;spinach;lettuce;cabbage"
const splitVegetables = vegetables.split(";")


console.log(splitFruit)
console.log(splitVegetables)





