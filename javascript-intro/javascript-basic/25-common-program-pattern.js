
//example: 

const peter = {
    name: "Peter",
    age: 50,
    students:[
       { name:"Andy", age:20},
       { name:"Bob", age:23},
       {name: "Charlie", age:25 , exercises:[
           { score: 60 , date: new Date("2019-01-05") }
       ]}
    ]
}

////////////////////////////////////////////////////////////////////////////

// 搵出所有人名
let list=[]
for(let student of peter.students){
    list.push(student)
    console.log(`Student ${student.name} is ${student.age} years old`)
}

// ////////////////////////////////////////////////////////////////////////////

// // 搵出所有有做運動既人名

for(let student of peter.students){
    if(student.exercises){
        for(let exercise of student.exercises){
            console.log(`Student ${student.name} has a exercise of  score ${exercise.score} submitted on ${exercise.date}`);
        }
    }
}

// ////////////////////////////////////////////////////////////////////////////

// 搵出 Array 有冇 Peter

let studentFound;
for(let student of peter.students){
    if(student.name === "Andy"){
       studentFound = student;
    }
}

////////////////////////////////////////////////////////////////////////////

//用 function 搵人

function findStudent(name){
    let studentFound;
    for(let student of peter.students){
        if(student.name === name){
           studentFound = student;
        }
    }
       return studentFound;
}

findStudent("Andy");
findStudent("Bob");
findStudent("Charlie");

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Another Example:

const peter2 = {
    name: "Peter",
    age: 50,
    students:[
       { name:"Andy", age:20,exercises:[
          {score: 60, date: new Date("2018-10-01")}
       ]},
       { name:"Bob", age:23,exercises:[
          {score: 76 ,date: new Date("2019-01-05")},
          {score: 55 ,date: new Date("2018-11-05")}
       ]},
       {name: "Charlie", age:25 , exercises:[
           { score: 60 , date: new Date("2019-01-05") }
       ]}
    ]
}

// Collect the scores and dates of the exercises

const exercises=[]

for (student of peter2.students){
    for (exercise of student.exercises){
        exercises.push(exercise);
    }
}
console.log(exercises);



/////////////////////////////////////////////////////////

//Map, Filter and Reducer

//array object
const students=[
    {"name":"Gordon","age":30},
    {"name":"Alex","age":31},
    {"name":"Michael","age":32}
]


// map =對照
//Only select all the student name :
console.log(students.map(function(student){
    return student.name
}))

//filter = 過濾條件
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
