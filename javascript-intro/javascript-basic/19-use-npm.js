
//What is npm? 高手已經寫好咗嘅code, 可以download 黎用

// command
// Step1: npm init
//     -多左個file 叫 "package.json"

// Step2: npm install 
//     -可以用npm 既工具

// Step3: npm install readline-sync
//     -當npm install 加工具，package.json 會 update
//     -node_modules 係儲存install 左要用既 npm 工具
//     -記得git push 要 gitignore (node_modules, package-lock.json, package.json)

//Step4: import 入去JS file 用

const readline = require('readline-sync') //要用readline-sync就要睇說明書
const busboy = require('busboy')
const date = require('date-fns')

//example 1 Question
const name =readline.question("what is your name?")
console.log("hi "+name+", nice to meet you.")

//example 2 Color
const colors=["blue","yellow","black","white"]
const favouriteColor = readline.keyInSelect(colors, "what is your favorite color?")
console.log("Good taste! your favorite color is "+ colors[favouriteColor]+" color!")


//example 3 BMI
const weight=readline.question("what is your weight in KG?")
const height=readline.question("what is your height in meter?")

bmiValue=(parseInt(weight)/(parseFloat(height))**2).toFixed(2)

console.log("Your BMI value is "+bmiValue+".")
