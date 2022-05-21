import java.util.Scanner;
import java.text.*;

public class Main{
    public static void main(String[]args){
        // input principal:
        Scanner amount=new Scanner(System.in);
        System.out.print("Principle:");
        Double principle= amount.nextDouble();   //P

        // input interest rate:
        Scanner interst=new Scanner(System.in);
        System.out.print("Annual Interest Rate:");
        Double interestRate= interst.nextDouble();    
        Double r = interestRate/12/100;         //r

        // input Period:
        Scanner period=new Scanner(System.in);
        System.out.print("Period:");
        Double periodOfTime= period.nextDouble();
        Double n = periodOfTime*12;            //for n
        
        //calculate Mortgage:
        Double m = principle*(((r)*(Math.pow((1+r),n)))/(((Math.pow((1+r),n)))-1));

        //set dp =2
        DecimalFormat df =new DecimalFormat("0.00");
        
        System.out.println("Mortgage:"+df.format(m));


        //M = ? 
        //P = principle
        //r = interestRate/1000/12 
        //n = periodOfTime*12
     } 
 }   

