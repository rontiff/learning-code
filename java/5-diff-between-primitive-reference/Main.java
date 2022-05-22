import javax.swing.text.Position;
import java.awt.*;

public class Main{
    public static void main(String[]args){

        // Primitive Type. variable are completely independent.
        // Primitive types, store simple number.(integer, number dp)

        // Reference Type use Class define variable. can access method. 
        // Reference Type. dependent because referencing same address.

        byte a=1; 
        byte b=a;  
        a=2;

        System.out.println(b);
        System.out.println(a);

        ////////////////////////////////////////////
        ////////////////////////////////////////////


        // point1 and point2 are reference same address
        Point point1= new Point(x:1, y:1);
        Point point2=point1;

        point1.x = 2;
        System.out.println(point2); // Point[2,1]
      
     } 
 }   
 