

//Objects

const book={                                        // remember add the = sign 
    title: "Introduction of JavaScript",            // between item need to add ","
    author:"Sara Chan",
    price: 0
}

console.log(book)
console.log(book.author)





////////////////////////////////////////////////////////////////////////////////////
//有一個名為 teacher的物件，及一個常數subjectKey。請嘗試定義一個變數名為subject，以subjectKey讀取teacher的subject的性質。

const subjectKey = "subject";

const teacher = {
    name:"Sam",
    subject:"Physics",
    commencementDate: "2020-01-01"
}
console.log(teacher.subject)

//use variable to take value 
console.log(teacher[subjectKey])





///////////////////////////////////////////////////////////////////////////////////////////

//Change object item change physic -->History     2020-1-1 to 2019-1-1

//step 1: directly write the object name. -->  teacher2.subject="History"

const teacher2 = {
    name:"Sam",
    subject:"Physics",
    commencementDate: "2020-01-01"
}

teacher2.subject="History"
teacher2.commencementDate="2019-01-01"

console.log(teacher2)


///////////////////////////////////////////////////////////////////////////////////////////////
//change object item from variable 

//step 1: Create nother variable 
//step 2: assign value into the variable

const student = {
    age: 20,
    grade: "C-"
}

const ageKey = "age"
const gradeKey="grade"

student[ageKey]="15" 
student[gradeKey]="B+"                

console.log(student)



/////////////////////////////////////////////////////////////////////////////////////

// 3 ways to create an Object. 

//1  everything inside the curly bracket 
const book1 ={
    title: "Introduction of JavaScript",           
    author:"Sara Chan",
    price: 0
}
console.log(book1)

//2 everything outside the curly bracket   (if you know the properties name)
const book2 ={}

book2.title="Introduciton of JavaScript 2"
book2.author="Sara Chan 2.0"
book2.price=0

console.log(book2)


//3 everything outside the curly bracket   (if you dont know the properties name)
const book3 ={}

book3['title']="Introcution of JavaScript3"
book3['author']="Sara Chan 3.0"
book3['price']=0

console.log(book3)


//方法二與三非常相似，那我們應該如何取捨要使用那一個方法呢？
// 基本原則是如果性質名稱是已知的話(Known properties name)，就可以使用方法二，如果性質名稱是未知的話，就要使用方法三。



///////////////////////////////////////////////////////////////////////////////////////
//Copy Object: 2 methods 


const book4 ={
    title: "Introduction of JavaScript",           
    author:"Sara Chan",
    price: 0
}

console.log(book4)

//Method 1: create a new name, and copy the object 
const clonedBook4 ={
    title: "Introduction of JavaScript",           
    author:"Sara Chan",
    price: 0
} 
console.log(clonedBook4)


//method 2:
const cloneBook5 = Object.assign({},book4)

console.log(cloneBook5)

