//Array , also known as "List"

let numbers = [1,2,3,4,5,6,7,8,9,10];

// list all Number 
console.log(numbers)

//Array Length
const numLength=numbers.length

// 索引由0開始數，不是由1開始數
console.log(numbers[3])  //=4

// last number 
console.log(numbers[numbers.length-1])


//list out the array items
let y=0
while(y<numbers.length){
    console.log(numbers[y])
    y+=1
}

//////////////////////////////////////////////////////////////

//Array for names
let names=["ron","alex","jason"]
let myBoyFriend = names[0]
console.log(myBoyFriend)




// Array 加減 elements, push(尾加) , pop(尾減) , unshift (頭加) , shift (頭減), splice(減中間)

/////////////////////////////////////////////////////////////

//  push = 尾加
const transactions = [
    { item:"cash deposit", amount: 20000},
    { item:"cheque deposit", amount: 30000},
    { item:"salary",amount: -25000},
]
transactions.push({item:"cash deposit", amount: 50000})
transactions.push({item:"rent", amount:-30000})
console.log(transactions)

/////////////////////////////////////////////////////////////

//  pop = 尾減
const fruits = ["apple", "banana", "orange"];

let removedItem = fruits.pop();  //尾減 item   

console.log(removedItem);  // "orange"

console.log(fruits)

/////////////////////////////////////////////////////////////

//exercise
//Move item from box1 to box2
const box1 = [ "banana","kiwi","watermelon","plum"];

const box2 = ["apple",'orange','durian'];

moveItem = box1.pop()
console.log(box1)

box2.push(moveItem)
console.log(box2)

/////////////////////////////////////////////////////////////

// unshift = 加頭

const box3 = [ "banana","kiwi","watermelon","plum"];

const box4 = ["apple",'orange','durian'];

// item 加頭
box4.unshift("avocado")

//Move item from box3 to box4
moveItem2=box3.pop()

box4.unshift(moveItem2)

console.log(box4)

/////////////////////////////////////////////////////////////

// shift = 減頭

const box5 = [ "banana","kiwi","watermelon","plum"];

const box6 = ["apple",'orange','durian'];

// remove box5 item 1st
box5.shift()

// remove box5 item 2nd move to box6
removeBanana = box5.shift()
box6.unshift(removeBanana)

console.log(box6)  //4 items total
console.log(box5)  //2 items left

/////////////////////////////////////////////////////////////

// splice = 減中間
const box7 = [ "banana","kiwi","watermelon","plum"];

// remove kiwi from the array

//splice (start index, del # of item)
box7.splice(1,1)

console.log(box7)

/////////////////////////////////////////////////////////////


// sort = 跟字母排隊  (number not apply)

className=["ron","will","desmond","yank","bene","dennis","rene","april","karen","maxwell"]

//before
console.log(className)

//after
className.sort()
console.log(className)

//reverse
className.reverse()
console.log(className)

//index of the item (search)
aprilIndex=className.indexOf("april")  // .indexof("xxx") <-- use for searching element's index
willIndex=className.indexOf("will")

console.log(aprilIndex)  //9
console.log(willIndex)  //1