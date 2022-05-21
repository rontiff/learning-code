public class Main{
    public static void main(String[]args){
        //string wrong example:
        // String message = new String("hello world")

        //rint string
        String message ="Hello World";
        System.out.println(message);

        // + operator
        String message2 = "Hello World" + ",my name is Ron.";
        System.out.println(message2);

        //Starting string:  searching
        message.startsWith("Hello");
        System.out.println(message.startsWith("Hello"));

        //Ending string:   searching
        message.endsWith("Ron.");
        System.out.println(message.endsWith("World"));

        //length of message
        message.length();
        System.out.println(message.length());

        //IndexOf the character, result = # of index
        message.indexOf("W");
        System.out.println(message.indexOf("W"));
        
        //if word doesn't exist , result = -1
        message.indexOf("z");
        System.out.println(message.indexOf("z"));

        //replace string word
        message.replace("World", "Mother");
        System.out.println(message.replace("World", "Mother"));
        //target & replacement = parameters
        //"World" & "Mother" = argument


        //to lowerCase
        message.toLowerCase();
        System.out.println(message.toLowerCase());

        //to upperCase
        message.toUpperCase();
        System.out.println(message.toUpperCase());

        //trim , remove the empty spacing
        message.trim();
        System.out.println(message.trim());

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

        //Assign variable: 
        String sentence = "this is a sentence";
        System.out.println(sentence);

        sentence.toUpperCase();
        System.out.println(sentence.toUpperCase());

        //Assign variable:  
        String sentenceShort = sentence.toUpperCase();
        System.out.println(sentenceShort);

     } 
 }   
 
 //print Hello World 