


//array , also known as "List"


let evenNumbers = [0,2,4,6,8,10];

let oddNumbers = [1,3,5,7,9,11];

let names = ["Alice","Bob","Charlie","Delta"]



console.log(evenNumbers)

// last number 
console.log(evenNumbers[evenNumbers.length-1])
console.log(evenNumbers[5])


// 幫助記憶: 索引由0開始數，不是由1開始數。

let myBoyFriend = names[1]
console.log(myBoyFriend)


//how to get the last  item 


//Exercise 

const books = [
    {
        name:"Harry Potter",
        author:"J.K. Rowling" 
    },
    {
        name:"The Lord of the Rings",
        author:"J. R. R. Tolkien"
    },
    {
        name:"The Chronicles of Narnia",
        author:"C. S. Lewis"
    }
]
//讀取books裏面的第一個元素，指定至變數firstBook。
let firstBook=books[0]
console.log(firstBook)

// /讀取books最後一個元素，指定到變數lastBook。
let lastBook= books[books.length-1]
console.log(lastBook)




// push , pop , unshift , shift


//  push = add at the end 
const transactions = [
    { item:"cash deposit", amount: 20000},
    { item:"cheque deposit", amount: 30000},
    { item:"salary",amount: -25000},
]


transactions.push({item:"cash deposit", amount: 50000})
transactions.push({item:"rent", amount:-30000})

console.log(transactions)

//  pop = delete the last one 


const fruits = ["apple", "banana", "orange"];
console.log(fruits.length);    

let removedItem = fruits.pop();
console.log(fruits);    

console.log(fruits.length);    

console.log(removedItem);    // "orange"


//exercise 
const box1 = [ "banana","kiwi","watermelon","plum"];

const box2 = ["apple",'orange','durian'];

moveItem = box1.pop()
console.log(box1)

box2.push(moveItem)
console.log(box2)



// unshift = add item at the front 

const box3 = [ "banana","kiwi","watermelon","plum"];

const box4 = ["apple",'orange','durian'];

moveItem2=box3.pop()

box4.unshift(moveItem2)

console.log(box4)

// shift = delete the first item 

const box5 = [ "banana","kiwi","watermelon","plum"];

const box6 = ["apple",'orange','durian'];

removeBanana = box5.shift()
box6.unshift(removeBanana)

console.log(box6)




//How to copy Array?



const box7 = ["apple",'orange','durian'];

let copyBox7 = [...box7]

copyBox7.unshift("banana")

console.log(copyBox7)
console.log(copyBox7.length)



let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
console.log(b);


let c = [1, 2, 3];
let d = [ ...c];
c.push(4);
console.log(c);
console.log(d);



////////////////////////////////////////////////////////////////////
//Join
//join method is the completely opposite of split. It is a method of array which combine multiple item together as string. 

const theName=['John', 'Peter', 'Sam', 'Anne', 'Susan', 'Josephine' ]

const theName1=theName.join(",")

console.log(theName1)    //result--> John,Peter,Sam,Anne,Susan,Josephine






////////////////////////////////////////////////////////////////////
//Three important array skills ---->   Map, Filter and Reducer


//Map 
//Map simplifying a operation done using a for-loop all the time. 


//filter 
//filter will help filter the condition supplied by the function.
//if the value is true, new item will stay in the new array. Otherwise it will removed. 

//reduce 
//reduce ????