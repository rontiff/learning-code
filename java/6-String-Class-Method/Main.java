
// Create String variable
// String is a Class of Reference Type. 
// String using a faster way to create variable. don't need to allocate. 

// Wrong example:
// String message = new String("Hello")

// Correct example:
// String message = "Hello"

public class Main{
    public static void main(String[]args){

        // Method with String Class:
            // 1. operator
            // 2. find word in string (start & end)
            // 3. find index of string
            // 4. length of string
            // 5. replace word in string
            // 6. to lowerCase & to UpperCase
            // 7. trim (remove space)
            // 7. assign variable
            // 8. double quote inside a string
            // 9. use back slash in a string
            //10. create a new line in a string

        //create a string variable
            String message1 = "this is message1.";
            System.out.println(message1);

        //combine 2 strings
            String messageCombine="Hello"+ " World";
            System.out.println(messageCombine);

        //find a word in string 
            //start with 
            String message3 = "this is message3.";
            message3.startsWith("this");
            System.out.println(message3.startsWith("this"));      //true
            System.out.println(message3.startsWith("message3.")); //false

            //end with
            String message4 = "this is message4.";
            message4.endsWith("message4.");
            System.out.println(message4.endsWith("message4."));   //true
            System.out.println(message4.endsWith("is"));          //false


        //find a index of string
            String message5 = "this is message5.";
            message5.indexOf("m");
            System.out.println(message5.indexOf("m")); //result: 8
            System.out.println(message5.indexOf("z")); //result: -1 , "z" doesn't exist


        //find a length of string
            String message6 = "this is message6.";
            message6.length();
            System.out.println(message6.length());

        //replace a word in string
            String message7 = "this is message7.";
            message7.replace("this","here");
            System.out.println(message7.replace("this","here"));
            //target & replacement = parameters
            //"World" & "Mother" = argument 

        //upper case:
            String message8 = "this message toUppercase.";
            message8.toUpperCase();
            System.out.println(message8.toUpperCase());

            //lower case:
            String message9 = "this message toLowercase.";
            message9.toLowerCase();
            System.out.println(message9.toLowerCase());

        //trim the message. 
            String message10 = "           this message need to trim.";
            message10.trim();
            System.out.println(message10.trim());

        //assign variable from a variable with method. 
            String message11=message8.toUpperCase();
            System.out.println(message11);

        //use double quote inside a string
            String message12 = "The word \"Hello\" is double quoted";
            System.out.println(message12);

        //use back slash in a string
            String message13 = "C:\\drive\\folder1\\folder2";
            System.out.println(message13);

        //create a new line in a string
            String message14 = "this is sentence 1,\nthis is sentence 2.";
            System.out.println(message14);
        } 
    }   
