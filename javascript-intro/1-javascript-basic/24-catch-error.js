


try{
    console.log(JSON.parse('{name:"Alex","age":18}'))  //should have syntax error 
}catch(e){
    console.log(e)          //show番問題出黎
    console.log("continue")
}

//可以無視錯誤