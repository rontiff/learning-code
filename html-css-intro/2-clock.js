const clock=document.querySelector('div')
const clock2=document.querySelector('span')

//hard code
setInterval(function(){
    const date=new Date()

    let sec="0"+date.getSeconds()
    sec=sec.substring(sec.length-2)

    clock.innerHTML=date.getHours() + ":" + date.getMinutes() + ":" + sec
    
}, 1000);


//CDN library
setInterval(function(){
    const date=new Date()

    let sec="0"+date.getSeconds()
    sec=sec.substring(sec.length-2)

    clock2.innerHTML=dateFns.format(date, "HH:mm:ss")
}, 1000);