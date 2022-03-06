// WhileLoop係用黎數野
// WhileLoop條件係true, 就會不斷做野

//Run 10次 console.log(y)
let x=1
let y=1
     
while(x<=10){ 
    console.log(y)  //出現10次
    x+=1
}

//////////////////////////////////////////////////////////

//output: 1 2 3 4 5 6 7 8 9 10 
x=1
while(x<=10){
    console.log(x)
    x+=1
}

//////////////////////////////////////////////////////////
 
//output: 10 9 8 7 6 5 4 3 2 1 

x=10
while(x>=1){
    console.log(x)
    x-=1
}

//////////////////////////////////////////////////////////

//output:2,4,6,8,10,12,14,16,18,20
let z=2   

while(z<=20){
    console.log(z)
    z+=2
}

//////////////////////////////////////////////////////////

//output:0,1,0,1,0,1
x=0
while(x<6){
    console.log(x%2)
    x+=1
}

//////////////////////////////////////////////////////////

// output
// *
// **
// ***
// ****
// *****

x=0
star='*'
while(x<5){
    console.log(star)
    star=star+'*'
    x+=1
}

//alternative 

x=0
while(x<5){
    star="*"

    let y=0
    while (y<x){
        star=star+"*"
        y+=1
    }
    console.log(star)
    x+=1
}
//////////////////////////////////////////////////////////

//Infinity Loop
// let x=1
// while(true){
//     console.log(x)
// }