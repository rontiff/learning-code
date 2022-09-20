

// if 0600-1200; Morning!
// if 1200-1800; Afternoon!
// if 1800-0000; night!

let hour=10;

if (hour>=6 && hour<=12){
    console.log('Morning!');
}else if(hour>=12 && hour<=18){
    console.log('Afternoon!');
}else{
    console.log('Night!')
}