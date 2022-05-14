

class Person {
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walk")
    }
}

// new class of teacher inheritance Person 

class Teacher extends Person{
    constructor(name, degree){
        //need to reference to parent's class
        super(name);
        this.degree=degree;
    }
    //teacher own method:
    teacher(){
        console.log('teacher')
    }
}

const teacher = new Teacher('sara')