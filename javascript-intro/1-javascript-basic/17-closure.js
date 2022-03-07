



function abc(){
    return function(){
        console.log("hi")
    }
}

const returnedFunction=abc()

returnedFunction()