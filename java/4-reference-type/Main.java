//Reference Types need to import
import java.util.Date;

public class Main{
    public static void main(String[]args){

        //primitive type no allocate memory
        int age=10;
        System.out.println(age);


        //reference type ALWAYS need new operator allocate 分配 memory.

        Date now=new Date();      //"now" instance become the Date Class
        now.getTime();            //reference type family member. using dot to find family.
        System.out.println(now);  //short cut: sout
        
     } 
 }   





 
 