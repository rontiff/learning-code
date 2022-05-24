
//this is "Module Wrapper Function"

// what actually happen when export module:
(function (exports , require, module, __filename, __dirname){
        //lets create a logger

    console.log(__filename)
    console.log(__dirname)


    let url="http://mylogger.io/log"

    function printMessage(message){
        //send an HTTP request 
        console.log(message)
    }

    //export the function outside
    module.exports= printMessage;
})