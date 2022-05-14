
//when we have an object with at least one method,
//need a blue print to create objects of that type.

//////////////////////////////////////////////////
//////////////////////////////////////////////////

const person1 ={
    name:'sara',
    walk(){
        console.log("walk")
    }
}

const person2 ={
    name:'sara',
    walk(){
        console.log("walk")
    }
}

//create another person object with method
//if there is a bug in the method, really hard to debug. 

//class can solve this problem

class Person {
    // constructor is a reserve function
    constructor(name){
        //this is the current object
        this.name = name;
    }
    //this is the method of the object
    walk(){
        console.log("walk")
    }
}



const person3 = new Person('sara')

console.log(person3)
console.log(person1)


console.log(person3.walk)




