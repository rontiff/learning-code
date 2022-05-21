import javax.swing.text.Position;
import java.awt.*;

public class Main{
    public static void main(String[]args){

        // Reference Type copy by the reference.
        //Primitive Type copy by the value.

        // Primitive Type. Completely independent.
        byte a=1; 
        byte b=a;  
        a=2;

        System.out.println(b);
        System.out.println(a);

        ////////////////////////////////////////////
        ////////////////////////////////////////////

        // Reference Type. dependent because referencing same address.

        // point1 and point2 are reference same address
        Point point1= newPoint(x:1, y:1);
        Point point2=point1;

        point1.x = 2;
        System.out.println(point2); // Point[2,1]
      
     } 
 }   
 