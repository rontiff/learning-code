
// use int Define Variable

// Copy Variable

public class Main{
    public static void main(String[]args){

        //create integer, no decimal point 
        int age=30;
        System.out.println(age);  //30 

        //the subject can re-define
        age=35;
        System.out.println(age); //35

////////////////////////////////////////////////
////////////////////////////////////////////////

        //copy variables 
        int temperature=23;
        int todayTemperature = temperature ;
        
        //print
         System.out.println(temperature); //23
         System.out.println(todayTemperature); //23 
     } 
 }   