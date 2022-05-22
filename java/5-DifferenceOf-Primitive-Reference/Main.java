import javax.swing.text.Position;
import java.awt.*;

public class Main{
    public static void main(String[]args){

        // Primitive Type. variable are completely independent.
        // Primitive types, store simple number.(integer, number dp)
        // Primitive Type variable have NO method/function. 


        // Reference Type use Class define variable.
        // Reference Type variable can access method. 
        // Reference type store complex object. (Date, Email)

        ////////////////////////////////////////////
        ////////////////////////////////////////////

        byte a=1; 
        byte b=a;  
        a=2;

        // a & b are independent
        System.out.println(a); //2
        System.out.println(b); //1

        ////////////////////////////////////////////
        ////////////////////////////////////////////

        // point1 and point2 are reference same address

        Point point1= new Point(1,1);
        Point point2=point1;
        point1.x = 2;

        // point1 & point2 are dependent because referencing same address. 
        System.out.println(point2); // Point[2,1]
        System.out.println(point1); // Point[2,1]
     } 
 }   
 