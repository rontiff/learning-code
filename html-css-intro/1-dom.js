
//DOM = Document Object Model

//係 website 拎想要既 element 
// doucment default 送既
let count=document.querySelector('span')
let count2=document.querySelector('div')

// 好多function可以用, example:

// 改變 html 內容
count.innerHTML='<b>123</b>'

// 改變 CSS

// 加減野
count.classList.add("testing")
count.classList.remove("testing")

// (F12)可以睇result
console.log("count")  


// set 時間
let i=0
setInterval(function(){
    i+=1
    count.innerHTML='<b>'+i+'</b>'
    if (i%7==0){
        count.style.color="red"
    }else if (i%7!==0){
        return
    }

}, 1000)


let x=100
setInterval(function(){
    x-=1
    count2.innerHTML='<b>'+x+'</b>'
    if (x%7==0){
        count2.style.color="red"
    }else if(i%7!==0){
        return
    }

}, 1000)

