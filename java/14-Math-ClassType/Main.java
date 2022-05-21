
// Math Class is a default method

public class Main{
    public static void main(String[]args){


       int a = Math.round(1.1F);                  // 四捨五入
       int b = (int)Math.ceil(1.1F);              // around up 
       int c = (int)Math.floor(1.1F);             // around down
       int d = Math.max(100,1);                //result bigger number
       int e = Math.min(100,1);                //result smaller number
       double f = (double)Math.random();            //random number from 0 to 1
       double g = (double)Math.random()*100;        //random number from 0 to 100 with decimal places
       double h = Math.round(Math.random()*100);    //random number from 0 to 100 with 1 decimal place ZERO (example: 89.0)
       int i = (int) Math.round(Math.random()*100); //random number from 0 to 100 with no decimal place (example: 89)
       int j = (int)(Math.random()*100);            //random number from 0 to 100 with no decimal place (example: 89)


       System.out.println(a);
       System.out.println(b);
       System.out.println(c);
       System.out.println(d);
       System.out.println(e);
       System.out.println(f);
       System.out.println(g);
       System.out.println(h);
       System.out.println(i);
       System.out.println(j);
     } 
 }   
 