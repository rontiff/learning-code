
// function calculate property Tax

function propertyTax(price){
    if(price<2000000){
        return price*0.015

    }else if(price>=2000000 && price<2176470){
        return (30000+(price-2000000)*0.2)

    }else if(price>=2176470 && price<3000000){
        return(price*0.03)

    }else if(price>=3000000 && price<3290330){
        return(90000+(price-3000000)*0.2)

    }else if(price>=3290330 && price<4000000){
        return(price*0.045)

    }else if(price>=4000000 && price<4428580){
        return(180000+(price-4000000)*0.2)

    }else if(price>=4428580 && price<6000000){
        return(price*0.06)

    }else if(price>=6000000 && price<6720000){
        return(360000+(price-6000000)*0.2)

    }else if(price>=6720000 && price<20000000){
        return(price*0.075)

    }else if(price>=20000000 && price<21739130){
        return(1500000+(price-20000000)*0.2)

    }else if (price>=21739130){
        return(price*0.085)
    }
}



amount=(propertyTax(123456789)).toFixed(0)

payment="You need to pay "+amount+ "$ for property tax."

console.log(payment)