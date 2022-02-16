
//array , also known as "List"
let numbers = [1,2,3,4,5,6,7,8,9,10];

// list all Number 
console.log(numbers)
// last number 
console.log(numbers[evenNumbers.length-1])
// 索引由0開始數，不是由1開始數
console.log(numbers[9])


let names=["ron","alex","jason"]
let myBoyFriend = names[1]
console.log(myBoyFriend)



// object list
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
//first element 
let firstBook=books[0]
console.log(firstBook)

//last element
let lastBook= books[books.length-1]
console.log(lastBook)



// Array 加減 elements

// push(尾加) , pop(尾減) , unshift (頭加) , shift (頭減), splice(減中間)



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

console.log(fruits.length); //3

let removedItem = fruits.pop();  //尾減 item   

console.log(fruits.length); //2

console.log(removedItem);  // "orange"

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

className=["ron","will","desmond","yanki","beeno","dennis","remoo","april","karen","maxwell"]

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

/////////////////////////////////////////////////////////////

// sort object 

//array object
const students=[
    {"name":"Gordon","age":30},
    {"name":"Alex","age":31},
    {"name":"Michael","age":32}
]



//find Alex's index
console.log(students.findIndex(function(student){  // student 係自己定出黎
    if(student.name=="Alex"){
        return true;
    }else{
        return false;
    }
}))
// P.S. 用唔到 indexof("alex")因為係object, 要用findIndex


//有冇人大過age>30 ?
// some = 有冇
console.log(students.some(function(student){
    if (student.age>30){
        return true
    }else{
        return false
    }
}))

//有冇人大過age>40 ?
// some = 有冇
console.log(students.some(function(student){
    if(student.age>=40){
        return true
    }else{
        return false
    }
}))

// Find Alex , and find Alex 幾多歲?
console.log(students.find(function(student){
    if(student.name=="Alex"){
        return true
    }else{
        return false 
    }
}).age)




//mutation
// 教program 邊個name 放先
students.sort(function(studentA, studentB){
    if (studentA.name>studentB.name){
        return 1
    }else if (studentA.name<studentB.name){
        return -1
    }else{
        return 0
    }
})

/////////////////////////////////////////////////////////////

//Map, Filter and Reducer

// map =對照
//Only select all the student name :
console.log(students.map(function(student){
    return student.name
}))

//filter = 過濾
//only select student age<=30
console.log(students.filter(function(student){  //only Gordon fulfilled 
    if (student.age<=30){
        return true
    }else{
        return false
    }
}))

//while loop the same logic
let x=0;
let ageBelow30=[];

while(x<students.length){
    if (students[x].age<=30){
        ageBelow30.push(students[x])
    }
    x++
}
console.log(ageBelow30)



// list out the name of the students >=30
console.log(students.filter(function(student){
    if (student.age>30){
        return true
    }else{
        return false
    }
}).map(function(student){
    return student.name
}))


//reduce 

//reduce = 壓縮

//sum of age for students
console.log(students.reduce(function(previous, current){
    return previous +current.age;
},0))



//Join
//Array to String

const theName=['John', 'Peter', 'Sam', 'Anne', 'Susan', 'Josephine' ]

const theName1=theName.join(",")

console.log(theName1)    //result--> John,Peter,Sam,Anne,Susan,Josephine



/////////////////////////////////////////////////////////////



//Copy Array

const box8 = ["apple",'orange','durian'];

let copyBox8 = [...box8] //same as copy 

copyBox8.unshift("banana")

console.log(copyBox8)
console.log(copyBox8.length)


// 2 array are the same 
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
console.log(b);


// 2 array are different 
let c = [1, 2, 3];
let d = [ ...c]; //copy array from c 
c.push(4);
console.log(c);
console.log(d);

/////////////////////////////////////////////////////////////