

// arrow function don't re-bind "this" key word 

const person={
    talk(){
        setTimeout(() => {
            console.log("this", this)
            
        }, 1000);
    }
}

person.talk()