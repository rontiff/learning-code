
//"this" always return a reference to the current object. 

const person={
    name:'sara',
    walk(){
        console.log(this)  
    }
}
person.walk(); 
//run "console.log(this)" , so the object will print out.

/////////////////////////////////////////////////////////////////////////
//assign variable
const walk1 = person.walk.bind(person)
walk1()
//bind method = can set "this" permanently

//function in JS are Object. While property and method can use in object.

/////////////////////////////////////////////////////////////////////////

const walk2 = person.walk
walk2() 
//undefine, because walk() is method, not function. 
