

// {Teacher}    is the default export from module or library
// './teacher'  module or library
import {Teacher} from './teacher'

//create teacher object
const teacher = new Teacher('Sara', "Nursing")

teacher.teach()

console.log(teacher)