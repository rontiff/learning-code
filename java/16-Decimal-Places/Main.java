import java.text.DecimalFormat;

public class Main{
    public static void main(String[]args){
       //Class of DecimalFormat

       //set up 2 Decimal Place:
       DecimalFormat df=new DecimalFormat("0.00");
       double a=Math.random()*100;
       System.out.println(df.format(a));

        //set up 3 Decimal Place:
        DecimalFormat threedf=new DecimalFormat("0.000");
        double b=Math.random()*100;
        System.out.println(threedf.format(b));
     } 
 }   
 