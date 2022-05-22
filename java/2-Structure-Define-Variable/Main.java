
// Java require Types when define Variable

// example:
// Primitive Type: integer(byte, short, int, long)  Decimal Place number (float, double)
// Reference Type: Date, String, Array


public class Main{
    public static void main(String[]args){

        //Structure:
        //type name = value 
        int age=30;
        System.out.println(age);  //30 

        //variable can re-define
        age=35;
        System.out.println(age); //35

////////////////////////////////////////////////
////////////////////////////////////////////////

        //copy variables from another variable
        int temperature=23;
        int todayTemperature = temperature ;
        
        //print
         System.out.println(temperature); //23
         System.out.println(todayTemperature); //23 
     } 
 }   