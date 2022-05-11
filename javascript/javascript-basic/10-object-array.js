// Object Array
const books = [
    {
        name:"Harry Potter",
        author:"J.K. Rowling",
    },
    {
        name:"The Lord of the Rings",
        author:"J. R. R. Tolkien",
    },
    {
        name:"The Chronicles of Narnia",
        author:"C. S. Lewis",
    },
]
//first element 
let firstBook=books[0]
console.log(firstBook)

//first element's name
let firstBookName = books[0].name
console.log(firstBookName)

//last element
let lastBook= books[books.length-1]
console.log(lastBook)


//////////////////////////////////////////////////////////////


//array object
const students=[
    {"name":"Gordon","age":30},
    {"name":"Alex","age":31},
    {"name":"Michael","age":32}
]

//find Alex exist or not 
console.log(students.find(function(student){   //如果有Alex, show 佢出黎
    if (student.name=="Alex"){
        return true
    }else{
        return false
    }
}))

//find Alex's index
console.log(students.findIndex(function(student){  // student 係自己定出黎
    if(student.name=="Alex"){
        return true;
    }else{
        return false;
    }
}))
// P.S. 用唔到 indexof("alex")因為係object, 要用findIndex


// find Alex's age
console.log(students.find(function(student){
    if(student.name=="Alex"){
        return true
    }else{
        return false 
    }
}).age)


//有冇人大過age>30 ?
// some = 有冇
console.log(students.some(function(student){
    if (student.age>30){
        return true
    }else{
        return false
    }
}))


/////////////////////////////////////////////////////////////


//mutation
// 話比 program 知邊個 name 放先
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