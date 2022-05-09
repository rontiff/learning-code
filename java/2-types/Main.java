
//Types : Integer, variable to variable

public class Main{
    public static void main(String[]args){

        //create integer, no decimal point 
        int age=30;
        int temperature=23;
        System.out.println(age);  //30 

        //the subject can re-define
        age=35;

        //copy variables 
        int todayTemperature = temperature ;
        
        //print
         System.out.println(age); //35
         System.out.println(temperature); //23
         System.out.println(todayTemperature); //23 
     } 
 }   