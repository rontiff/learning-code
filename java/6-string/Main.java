
  
// Define string.   "String class" is a reference.

// Wrong example:
// String message = new String("Hello")

// Correct example:
// String message = "Hello"

public class Main{
    public static void main(String[]args){

        //print string
        String message ="Hello World";
        System.out.println(message);

        //print : Hello World

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////

        // Method with String Class:

            // + operator

                String message2 = "Hello World" + ",my name is Ron.";
                System.out.println(message2);

                //print: Hello World,my name is Ron.

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////

            //Search String 

                //Starting string:  searching

                String message3 ="Hello, today is a really good day.";

                message3.startsWith("Hello");
                System.out.println(message3.startsWith("Hello"));
                //print: true

                //Ending string:   searching
                message3.endsWith("day.");
                System.out.println(message3.endsWith("day."));
                //print: true

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////

            //length of message

                String message4 = "What is the length of this message?";
                message4.length();
                System.out.println(message4.length());
                //print: 35

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////

             //IndexOf the character, result = # of index

                String message5 = "abcdefghijklmnop";

                message5.indexOf("p");
                System.out.println(message5.indexOf("p"));
                //print: 15

                message5.indexOf("x");
                System.out.println(message5.indexOf("x"));
                //print: -1  
                //x doesn't exist in message5 

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////
    
            //replace string word

                String message6 ="The word of father can change.";

                message6.replace("father", "mother");
                //target & replacement = parameters
                //"World" & "Mother" = argument 

                System.out.println(message6.replace("father", "mother"));
                //print: The word of mother can change.

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////       

            //to lowerCase
                String message7 = "This sentence is all lower case.";
                message7.toLowerCase();
                System.out.println(message7.toLowerCase());
                //print: this sentence is all lower case.

            //to UpperCase
                String message8 = "This sentence is all Upper case.";

                message8.toUpperCase();
                System.out.println(message8.toUpperCase());
                //print: THIS SENTENCE IS ALL UPPER CASE.

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////   

            //trim , remove the empty spacing
                String message9 = "                    Remove the extra empty spacing";

                message9.trim();
                System.out.println(message9.trim());
                //print: Remove the empty spacing

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

            //Assign variable: 
                String sentence = "this is a sentence";
                System.out.println(sentence);

                    // using original variable
                        sentence.toUpperCase();
                        System.out.println(sentence.toUpperCase());
                        //print: THIS IS A SENTENCE

                    // assign new variable from a variable with method.
                        String sentenceShort = sentence.toUpperCase();
                        System.out.println(sentenceShort);
                        //print: THIS IS A SENTENCE
     } 
 }   
 
 //print Hello World 