//////////////////////////////////////////////////////////////

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