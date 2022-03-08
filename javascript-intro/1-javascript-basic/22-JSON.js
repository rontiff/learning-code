
// JSON = Javascript Object Notation 

//We need JSON because of Data Exchange. (Serialization)

//Example:  JS --JSON--> Python


// JSON 6大 data structure

//#1 Object   { }
//#2 Array    [ ]
//#3 String   "  " ,一定係double quote
//#4 Number   123
//#5 Boolean  true
//#6 null     null


//JSON.parse()      //from JSON string to JavaScript 

//JSON.stringify()  //from JavaScript to JSON string

//  TYPE of JSON = STRING !!


////////////////////////////////////////////////////////////////////////////////////


const obj={
    name:"ron",
    age:18,
}

console.log(obj)

//convert JS to JSON

json=JSON.stringify(obj)

console.log(json)

////////////////////////////////////////////////////////////////////////////////////

//convert JSON to JS

jsObj=JSON.parse(json)
jsObjName=JSON.parse(json).name


console.log(jsObj)
console.log(jsObjName)


