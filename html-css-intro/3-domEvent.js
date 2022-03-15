
// let up=document.querySelector(".fa-arrow-up") //class name 
// let down=document.querySelector(".fa-arrow-down")
// let left=document.querySelector(".fa-arrow-left")
// let right=document.querySelector(".fa-arrow-right")


let arrows=document.querySelectorAll('.fa-solid')  //拎曬所有 elements
let current=document.querySelector('.current')     // 空div 用黎 update 
let random=Math.floor(Math.random()*4)

//個 function 用黎update current div
function nextDance(){
    random=Math.floor(Math.random()*4)  //已經有一個 random number
    if (random==0){
    current.innerHTML='<div class="fa-solid fa-arrow-up"></div>'
    }else if (random==1){
        current.innerHTML='<div class="fa-solid fa-arrow-down"></div>'
    }else if (random==2){
        current.innerHTML='<div class="fa-solid fa-arrow-left"></div>'
    }else if (random==3){
        current.innerHTML='<div class="fa-solid fa-arrow-right"></div>'
    }
}
nextDance()



// 如果用 querySelectorAll，就要 for loop 所有button出黎
// Click 邊個button 有咩output
for(const arrow of arrows){
    arrow.addEventListener('click',function(){
        if (random==0 && arrow.classList.contains("fa-arrow-up")){
            console.log('correct')
        }else if (random==1 && arrow.classList.contains("fa-arrow-down")){
            console.log('correct') 
        }else if (random==2 && arrow.classList.contains("fa-arrow-left")){
            console.log('correct')
        }else if (random==3 && arrow.classList.contains("fa-arrow-right")){
            console.log('correct')
        }else{
            console.log('incorrect')
        }
        nextDance()  //每一次 run 完重新 run 一次個program
    })
}



// 用keyboard 上下左右 (38, 40, 37, 39) CHECK IN CONSOLE F12

//body 係html所有野       //keydown 係撳掣用   //event 係自己定
document.body.addEventListener('keydown',function(event){
    if (random==0 && event.keyCode==38){
        console.log('correct')
    }else if (random==1 && event.keyCode==40){
        console.log('correct') 
    }else if (random==2 && event.keyCode==37){
        console.log('correct')
    }else if (random==3 && event.keyCode==39){
        console.log('correct')
    }else{
        console.log('incorrect')
    }
    nextDance()  //每一次 run 完重新 run 一次個program

    // console.log(event.keyCode);
})
