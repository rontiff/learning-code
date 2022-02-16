

// > < >= <=  compare operator 

// == equal operator

1 == 2 // false
2 == 2 // true
"2" == 2 // true

let result1, result2, result3;

// result0 = true
result1 = 10 == 10 
result2 = 10 == "10"
result3 = 10 == 100

console.log(result1,result2,result3)


////////////////////////////////////////////////






// === identity operator 

1 === 2 // false
2 === 2 // true
"2" === 2 // false


let result4, result5, result6;

// result0 = true
 result4 =10=== 10;
 result5 =10==="10";
 result6 =10===100;
 console.log(result4,result5,result6);


//  !=  inequality operator 

1 != 2 // true
2 != 2 // false
"2" != 2 // false

let result7, result8, result9;

// result0 = true
result7 = true != (5 < 10)
result8 = 10 != "10"
result9 = 10 != 100
console.log(result7,result8,result9);


//  !==  Non-identity Operator

1 !== 2 // true
2 !== 2 // false
"2" !== 2 // true

let result11, result12, result13;

// result0 = true
result11 = false !== (10 >= 10)
result12 = 10 !== "10"
result13 = 10 !== 100

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







 
// exercise  (Open it from a seperate file)

let a;
let b;
let c;
let d;
let e;

a = 6
b = 5
c = 10
d = 100
e = 100

const result1 = 5 < a;
const result2 = "5" == b;
const result3 = 10 >= c;
const result4 = 10 === c;
const result5 = d !== c;
const result6 = d == e;

console.log(result1,result2,result3,result4,result5,result6)


