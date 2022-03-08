//Closure : 有記憶既 function
//Closure : 可以分開獨立function 

function abc(){
    let count=0
    return function(){
        count= count+1
        console.log(count)
    }
}

const returnedFunction=abc();

returnedFunction() //=1
returnedFunction() //=2
returnedFunction() //=3


//////////////////////////////////////////////

function createCounter(){
    let count=0
    return{
        add:function(){
            count=count+1
        },
        result:function(){
            return count;
        }
    }
}

const counter1= createCounter();
counter1.add()
counter1.add()
console.log(counter1.result())



const counter2= createCounter();
counter1.add()
counter2.add()

console.log(counter1.result())
console.log(counter2.result())

