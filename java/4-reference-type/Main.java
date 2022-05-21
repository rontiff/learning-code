

//Reference Types store complex object. (example: date, mail message)

//Reference Types need to import

import java.util.Date;

public class Main{
    public static void main(String[]args){

        //primitive type no allocate memory
        //not object
        //doesn't have any member
        int age=10;
        System.out.println(age);


        //reference type ALWAYS need new operator allocate 分配 memory.

        //Reference type need to create new object to use. 

        Date now=new Date();      //"now" have the Date Class.
        now.getTime();            //reference type family member. using dot to find family.
        System.out.println(now);  
        
     } 
 }   





 
 