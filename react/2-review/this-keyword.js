
//what is "this" ?

const person={
    name:'sara',
    walk(){
        console.log(this)    //what is "this" ? 
    }
}

//"this" always return a reference to the current object. 

person.walk(); //this is returning a reference to this person object. it print out object.


const walk = person.walk
walk()  //undefine, because walk() is method, not function. 