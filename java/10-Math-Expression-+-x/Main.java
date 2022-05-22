
// arithmetic Expression 

public class Main{
    public static void main(String[]args){
        
        // +-*/
        int add=10+3;
        int minus=10-3;
        int multiply=10*3;
        //out come have decimal places. need to explicit to float or double
        float answer = (float)10 / (float)3;

        //先乘除後加減
        int priority = 10+3*2;
        int bracket = (10+3)*2;

        //////////////////////////////////////

        System.out.println(add);         //13
        System.out.println(minus);       //7
        System.out.println(multiply);    //30
        System.out.println(answer);      //3.333333
        System.out.println(priority);    //16
        System.out.println(bracket);      //26
     } 
 }   
 