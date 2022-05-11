data=[
    {"date": "1 Jan", "minTemperature": 11, "maxTemperature": 18},
    {"date": "2 Jan", "minTemperature": 10, "maxTemperature": 17},
    {"date": "3 Jan", "minTemperature": 12, "maxTemperature": 17},
    {"date": "4 Jan", "minTemperature": 14, "maxTemperature": 19},
    {"date": "5 Jan", "minTemperature": 16, "maxTemperature": 21},
    {"date": "6 Jan", "minTemperature": 17, "maxTemperature": 21},
    {"date": "7 Jan", "minTemperature": 18, "maxTemperature": 22},
]


//   Use .sort() to get an array with the forecasts ordered by minimum temperature in descending order

console.log(data.sort(function(temA, temB){
    if (temA.minTemperature>temB.minTemperature){
        return -1
    }else if (temA.minTemperature<temB.minTemperature){
        return 1
    }else{
        return 0
    }
}))

//   Use .map() to get an array with dates only
console.log(data.map(function(content){
    return content.date
}))
  



//   Use .filter() to get an array with all dates with forecast maximum temperatures higher than 20

console.log(data.filter(function(content){
    return content.maxTemperature>20
}))




//   [BONUS] Use .reduce() to find the date with the lowest temperature

console.log(data.reduce(function(previous, current){
    if (previous.minTemperature>current.minTemperature){
        return current
    }else{
        return previous;
    }
},{date: "No date", minTemperature:9999}).date)