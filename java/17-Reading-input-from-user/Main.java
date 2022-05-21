import java.util.Scanner;

public class Main{
    public static void main(String[]args){
        //Scanner Class:  use for interact with user. 

        // The Scanner Class Method start with "Next"

        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        
        //Question of Number: 
        Scanner scanner = new Scanner(System.in);  //System method with field "in". 
        System.out.println("Please input your age.");
        System.out.print("Age:");
        byte age= scanner.nextByte();
        System.out.println("You are "+ age + " years old");

        //Question of Name:
        Scanner scanner2=new Scanner(System.in);
        System.out.println("What is your name?");
        String name = scanner2.nextLine().trim();
        System.out.println("Hi "+name+", nice to meet you. ");
     } 
 }   
 