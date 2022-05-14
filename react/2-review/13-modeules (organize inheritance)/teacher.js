

import {Person} from "./person"; //reference parent


//Son class (inheritance from Parent)
export class Teacher extends Person{
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

// the object create with modules is private from default
// need to public it using "export"