//in order to use a class in different object.
//you need to import it.

//importing Date at java.util package
import java.util.Date;

public class Main{
    public static void main(String[]args){
        //dont have allocate memory
        int age=30;

        // byte age=30; // no member
        //reference type ALWAYS need tonew opp allocate memory.
        //use new allocate operator 
        Date now=new Date();
        now.getTime();    //member 
        System.out.println(now);
        System.out.println(age);


     } 
 }   
 