
// Parent class
class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walk")
    }
}

//Son class (inheritance from Parent)
class Teacher extends Person{
    constructor(name, degree){
        //need to reference to parent's class
        super(name);
        this.degree=degree;
    }
    //teacher own method:
    teach(){
        console.log('teacher')
    }
}

///////////////////////////////////////////////////
///////////////////////////////////////////////////

//create teacher object
const teacher = new Teacher('Sara', "Nursing")

//use the object dot ( teacher. ), to select object element 

// teacher.

// should see degree, name, teach, walk to select. 

