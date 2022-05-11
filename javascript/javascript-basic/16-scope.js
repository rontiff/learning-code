
////////////////////////////////////////////////////////////////////////////////////

//Block Scope = 係有有效範圍  (let,const, function )
//Function Scope = 係Global範圍 (var only)

////////////////////////////////////////////////////////////////////////////////////

// example of Block Scope: let , const, function

if (2>1){
    let a=0;    //"a" only define inside the if-statement. Not global
    a+=1;
    console.log(a)
}

console.log(a) // This will Show error, "a" is not defined in global

////////////////////////////////////////////////////////////////////////////////////

for (let a=0;a<3;a++){
    console.log(a)
}
console.log(a)  // This will Show error

////////////////////////////////////////////////////////////////////////////////////

// Block Scope as well

function abc(){
    let a=99
    console.log(a)
}

abc()  //function run the function. 

console.log(a) // This will Show error

////////////////////////////////////////////////////////////////////////////////////
var x=0   //var is for "FUNCTION SCOPE". 可以重覆define variable. share common variable

if(2>1){
    var x=0;
    x+=1;
    console.log(x)    //=1
}
console.log(x)        //=1 

let b=0   //let is for "BLOCK SCOPE". wont redefine variable. only valid inside the block scope.

if(2>1){
    let b=0;
    b+=1;
    console.log(b)   //=1
}
console.log(b)       //=0 