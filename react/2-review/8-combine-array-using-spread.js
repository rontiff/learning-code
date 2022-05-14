
// the spread operator is represented using three dots

//2 arrays example 
const first=[1,2,3]
const second=[5,6,7]

// combine 2 arrays (method 1)
const combined1 = first.concat(second);
console.log(combined1)

// combine 2 arrays (method 2)
const combine2 = [...first,...second];
console.log(combine2)


////////////////////////////////////////
////////////////////////////////////////

//Spread operator add elements
const combine3 = [...first,4,...second];
console.log(combine3)



























