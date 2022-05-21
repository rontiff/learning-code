
  
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

            // 1. operator
            // 2. find word in string (start & end)
            // 3. find index of string
            // 4. length of string
            // 5. replace word in string
            // 6. to lowerCase & to UpperCase
            // 7. trim (remove space)
            // 7. assign variable

        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////

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
        
            //IndexOf the character, result = # of index

                String message4 = "abcdefghijklmnop";

                message4.indexOf("p");
                System.out.println(message4.indexOf("p"));
                //print: 15

                message4.indexOf("x");
                System.out.println(message4.indexOf("x"));
                //print: -1  
                //x doesn't exist in message4 
        ////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////

            //length of string

                String message5 = "What is the length of this message?";
                message5.length();
                System.out.println(message5.length());
                //print: 35


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
 