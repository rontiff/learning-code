
// render a list of item, use map method of array.

const colors =['red','green','blue']

//map function
const item1=colors.map(function(color){
    return '<li>'+color+'</li>'
})
//or
const item2=colors.map(function(color){
    return `<li>${color}</li>`
})
//or 
const item3=colors.map((color)=> '<li>'+color+'</li>')
//or
const item4=colors.map((color)=> `<li>${color}</li>`)



console.log(item1)
console.log(item2)
console.log(item3)
console.log(item4)

