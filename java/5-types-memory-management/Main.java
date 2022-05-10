import javax.swing.text.Position;

public class Main{
    public static void main(String[]args){


        byte a=1; 
        byte b=a;  //different memory location
        a=2;

        System.out.println(b);
        System.out.println(a);

        //////////////////////

        // there are some problem in this code, Point doesn't work. 

        Point point1 =new Point(1,1);
        Point point2 = point1;   //not independent, reference same objec.

        point1.x=2;
        System.out.println(point2);

     } 
 }   
 