import java.text.DecimalFormat;

// Math Class is a default method

public class Main{
    public static void main(String[]args){

       int a = Math.round(1.1F);                  // 四捨五入
       int b = (int)Math.ceil(1.1F);              // around up 
       int c = (int)Math.floor(1.1F);             // around down
       int d = Math.max(100,1);                //result bigger number
       int e = Math.min(100,1);                //result smaller number
       int f =(int)Math.pow(2,3);              // 2 power of 2
       double g = (double)Math.random();            //random number from 0 to 1
       double h = (double)Math.random()*100;        //random number from 0 to 100 with decimal places
       double i = Math.round(Math.random()*100);    //random number from 0 to 100 with 1 decimal place ZERO (example: 89.0)
       int j = (int) Math.round(Math.random()*100); //random number from 0 to 100 with no decimal place (example: 89)
       int k = (int)(Math.random()*100);            //random number from 0 to 100 with no decimal place (example: 89)

       //set up 2 Decimal Place:
       DecimalFormat df=new DecimalFormat("0.00");
       double l=Math.random()*100;
       System.out.println(df.format(l));


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
       System.out.println(k);

     } 
 }   
 



 import java.text.NumberFormat;
import java.util.Scanner;

public class Main{
    public static void main(String[]args){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Principal: ");
        int principal =scanner.nextInt();
        System.out.print("Annual Interest Rate: ");
        double interestRate=scanner.nextDouble();
        System.out.print("Period (Years): ");
        int year=scanner.nextInt();

        //Calculation
        //r
        final byte monthInYear=12;
        final byte percent=100;
        double monthlyIntRate = interestRate/monthInYear/percent;
        //n
        int n= year*12;
        //top
        double equationTop = monthlyIntRate*(Math.pow((1+monthlyIntRate),(n)));
        //bottom
        double equationBottom =(Math.pow((1+monthlyIntRate),(n)))-1;
        
        //final answer
        double mortgage = (double)Math.ceil(principal*(equationTop/equationBottom));

        //dollar sign format
        String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
        
        System.out.println("Mortgage: "+mortgageFormatted);
    }
}

