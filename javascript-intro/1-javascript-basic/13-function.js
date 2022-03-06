
// When calling function, it will say hello.

function sayHi(){
    console.log("Hello")
}
// call the function
sayHi()


//////////////////////////////////////////////

// how to set parameter in function

function sayHi(name){
    console.log("Hello "+ name +".")
}
sayHi("Ron")
sayHi("Sara")
sayHi("Vanessa")


//////////////////////////////////////////////


//1 parameter
function double(x){
    return 2*x
}

//2 parameters 
function equation(x,y){
    return 2*x+y
}
console.log(equation(4,4))