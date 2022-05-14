
//name export
//didn't use "export default ... ... ..." , meed { } to import
import {Teacher} from './teacher'

//default export
//used "export default ... ... ...", dont need { } to import
import Teacher from './teacher'

//export multiple function/ object
import { promote } from './teacher'



//create teacher object
const teacher = new Teacher('Sara', "Nursing")

teacher.teach()