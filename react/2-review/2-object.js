

// if a function inside of object = method

const person ={
    name:'ron',
    jump:function(){}, //this is a method
    walk(){},          //this is a method
    talk(){},          //this is a method
}

// 2 ways to access the object elements: 

//dot notation
person.talk();
//bracket notation
person['name'] = 'sara'; //can re-assign value