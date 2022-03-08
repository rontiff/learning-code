
// Comparison Operator show True False result
// > < >= <=  

// == equal operator

1 == 2 // false
2 == 2 // true
"2" == 2 // true


// result0 = true
result1 = 10 == 10 
result2 = 10 == "10"
result3 = 10 == 100

console.log(result1,result2,result3)  //true true false 


////////////////////////////////////////////////

// === Equal Value + Equal Type

1 === 2 // false
2 === 2 // true
"2" === 2 // false

 result4 =10=== 10;
 result5 =10==="10";
 result6 =10===100;
 console.log(result4,result5,result6);  //true false false 

////////////////////////////////////////////////

//  !=  inequality operator 

1 != 2 // true
2 != 2 // false
"2" != 2 // false

let result7 = true != (5 < 10)
let result8 = 10 != "10"
let result9 = 10 != 100

console.log(result7,result8,result9);  // false false true

////////////////////////////////////////////////

//  !== Equal Value + Equal Type

1 !== 2 // true
2 !== 2 // false
"2" !== 2 // true

let result11 = false !== (10 >= 10)
let result12 = 10 !== "10"
let result13 = 10 !== 100

console.log(result11,result12,result13);



// and operator && 


let a, b;

a = 5
b = 11

const result14 = 1 > 0 && 10 >= a;
const result15 = 1 > 0 && 5 >= 2 && 10 < b;
const result16 = result14 && result15;

console.log(result16)



// or operator ||

let c, d;

c = 4
d = 3

const result = 5 < c || 10 > 1 && 2 === d;

console.log(result)


//question: ?????????????????????????????????????
console.log(3 > 2 || 5 >= 2 && 2 === 1); 

// true, because && is executed first  


//???????????????????????????????????????????????



// exercise  (Open it from a separated file)

a = 6
b = 5
c = 10
d = 100
e = 100

const answer1 = 5 < a;
const answer2 = "5" == b;
const answer3 = 10 >= c;
const answer4 = 10 === c;
const answer5 = d !== c;
const answer6 = d == e;
const answer7 = b>a;

console.log(answer1,answer2,answer3,answer4,answer5,answer6,answer7)

