
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



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

const classmates=[
    {"name":"ron","age":30},
    {"name":"susey","age":31},
    {"name":"sara","age":32}
]

const above30 = students.filter(function(student){
                    if (student.age>30){
                        return true;
                    }else {
                        return false;
                    }
                })

console.log(above30)
