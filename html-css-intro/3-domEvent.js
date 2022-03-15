// let up=document.querySelector(".fa-arrow-up") //class name 
// let down=document.querySelector(".fa-arrow-down")
// let left=document.querySelector(".fa-arrow-left")
// let right=document.querySelector(".fa-arrow-right")


// let current=document.querySelector(".current")
// let random=Math.floor(Math.random()*4)



let arrows=document.querySelectorAll('.fa-solid')
let current=document.querySelector('.current')
let random=Math.floor(Math.random()*4)

function nextDance(){
    random=Math.floor(Math.random()*4)
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
        nextDance()
    })
}






// if (random==0){
//     current.innerHTML='<div class="fa-solid fa-arrow-up"></div>'
// }else if(random==1){
//     current.innerHTML='<div class="fa-solid fa-arrow-down"></div>'
// }else if(random==2){
//     current.innerHTML='<div class="fa-solid fa-arrow-left"></div>'
// }else if(random==3){
//     current.innerHTML='<div class="fa-solid fa-arrow-right"></div>'
// }






// up.addEventListener('click', function(){
//     console.log("up");
// })

// down.addEventListener('click', function(){
//     console.log("down");
// })

// left.addEventListener('click', function(){
//     console.log("left");
// })

// right.addEventListener('click', function(){
//     console.log("right");
// })