import java.text.NumberFormat;

import javax.swing.text.NumberFormatter;

public class Main{
    public static void main(String[]args){

        // format the number with $ or % 

        //Class :NumberFormat

        // NumberFormat currency =NumberFormat.Numberforat();   <-- can't do this. 
        // Because NumberFormat is abstract. it can't be instantiated.實例

        /////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////

        // step1. use the class of NumberFormat.

        // step2. NumberFormat have a lot of "get" method to use for formatting unit. (example:　getCurrencyInstance)

        // step3. store it at object variable. while this object variable has method for formatting value. 

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Method 1

        // format as number
        NumberFormat currency =NumberFormat.getCurrencyInstance();  // this object variable is reusable 
        String result =currency.format(123456.789);
        System.out.println(result);
        
        //format as percentage
        NumberFormat percentage=NumberFormat.getPercentInstance(); // this object variable is reusable 
        String todayLoss=percentage.format(0.1);
        System.out.println(todayLoss);

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //Method 2   (Method Chaining)
        // NumberFormat.getCurrencyInstance().format(123.456);
        
        String number = NumberFormat.getCurrencyInstance().format(123.456);
        System.out.println(number);
     } 
 }   
 