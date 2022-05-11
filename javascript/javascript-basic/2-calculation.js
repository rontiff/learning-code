//加減乘除

let johnAge=24;
let peterAge=23;

let sumOfAge = johnAge+peterAge;
let difOfAge = johnAge-peterAge;

console.log(sumOfAge) //=47
console.log(difOfAge) //=1


//reminder / power / +- sign

let apples=11;
let people=3;
let appleRemain =apples%people;

console.log(appleRemain) //=2


let base=10;
let power=2;

let answer=base**power;

console.log(answer) //=100



//"++"增量符號 "- -"減量符號(前置) (後置)

let year=2019;
let nextYear= ++year;

console.log(nextYear)


let num=5 
console.log(num) //=5
num++
console.log(num) //=6


let num2=7
console.log(num2++) //7     //之後先會加  
console.log(num2)


// +=  -=  *=  /=

let x=150
x=x+10;
console.log(x) //=160

let y=150
y+=10
console.log(y) //=160





//Kyrie Irving Efficiency 

let points=28.5;
let rebounds=5.4;
let assists=7.2;
let steals=1.1;
let blocks=0.5;
let missedFieldGoals=12.7;
let missedFreeThrows=0.3;
let turnover=2.4;
let gamePlayed=11;

let kyrieEfficiency = (points + rebounds + assists + steals + blocks+ missedFieldGoals-missedFreeThrows-turnover) / gamePlayed

console.log(kyrieEfficiency.toFixed(2))