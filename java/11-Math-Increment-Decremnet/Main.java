// arithmetic Expression 

public class Main{
    public static void main(String[]args){

        // Increment Operator
            int x=1;
            ++x; // pre-fix   // y will add 1
            x++; //post-fix   // y will add 1 

            System.out.println(x);  // print: 3 in total

        // Decrement Operator
            int y=10;
            --y;   // pre-fix   // y will add 1
            y--;   //post-fix   // y will add 1 

            System.out.println(y);  // print: 8 in total


        ////////////////////////////////////////////////
        ////////////////////////////////////////////////

        // Different between post-fix & pre-fix

            int a=1;
            int b=a++;  //b=a first, then a+1
            
            System.out.println(a); //print: 2
            System.out.println(b); //print: 1

            int c=1;
            int d=++c;  //c+1 first, then d=c
            
            System.out.println(c); //print: 2
            System.out.println(d); //print: 2
     } 
 }   
 