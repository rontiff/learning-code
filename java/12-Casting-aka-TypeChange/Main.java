
// implicit casting 隱含轉換
// explicit casting 明確轉換

// Same type implicit casting   
// different type explicit casting 

        // byte --> short --> int
        // float -->double
        // string

public class Main{
    public static void main(String[]args){

        // implicit casting (short --> int) same number type

                short x=1; 
                int y = x+2;
                System.out.println(y); //print 3

        // implicit casting (double --> double)

                double a=1.1;
                double b = a + 2;  
                System.out.println(b); //print 3.1

        ////////////////////////////////////////////
        ////////////////////////////////////////////

        //explicit casting (double --> int)  Convert double to int

                double c=1.1;
                int d = (int)c + 2;  //define "c" as integer
                System.out.println(d); //print 3.1

        ////////////////////////////////////////////
        ////////////////////////////////////////////

        //Sting type and int type is not compatible 

        //Wrong example:

                // String e="1";
                // int f = (int)e + 2;   
                // System.out.println(f);

        // Correct example:
                String g="1";
                int h= Integer.parseInt(g)+2;  //use Class Integer Method convert string to number.
                System.out.println(h);
       
        ////////////////////////////////////////////
        // Wrong example:
                // String i="1.1";
                // int j= Integer.parseInt(i)+2;
                // //because i=1.1 ,it can't convert to int
                // System.out.println(j);

        // Correct example:
                String k="1.1";
                double l= Double.parseDouble(k)+2; //use Double Class method convert string to double.
                System.out.println(l);
     } 
 }   
 