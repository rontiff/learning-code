
import {Person} from "./person";


// you can export one or more object in a given modules
export function promote(){
}

//"default" is the keyword meaning it is the main thing to export
export default class Teacher extends Person{
    constructor(name, degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log('teacher')
    }
}

