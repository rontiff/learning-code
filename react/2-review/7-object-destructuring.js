

// Object destructuring is 
const address={
    street:'',
    city:'',
    country:'',

}

//store them in separate variables.

//problem with this code: too repetitive. 
const street = address.street
const city = address.city
const country = address.country

/////////////////////////////////////////////
//alternative

const{street, city, country}= address;


//store only one variable: you can store one variable.
const{street}= address;

const{street:st}= address;


