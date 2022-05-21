
// arithmetic Expression 

public class Main{
    public static void main(String[]args){
        int p=1;
        System.out.println(p);
        // print: 1

        ///////////////////////
        ///////////////////////

        // increment operator
        int i=1;

        // pre-fix   // i will add 1 first in line 16
        ++i;  
        //post-fix   // i will add 1 first in line 18
        i++;  

        System.out.println(i);
        // print: 2

        ///////////////////////
         ///////////////////////
        // post-fix & pre-fix

        int x=1;
        int y=x++;
        //y=x first, then x+1
        
        System.out.println(x); //print: 2
        System.out.println(y); //print: 1

        int a=1;
        int b=++a;
        //a+1 first, then b=a

        System.out.println(a); //print: 2
        System.out.println(b); //print: 2
     } 
 }   
 