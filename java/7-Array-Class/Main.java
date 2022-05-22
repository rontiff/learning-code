import java.util.Arrays;
    //Arrays is Class in Reference types
    //Arrays have fix length
    //Arrays store list of object. 

public class Main{
    public static void main(String[]args){

        //Create Integer Arrays (Arrays is Reference Type)
        int[] numbers = new int[5];

        //Specifically define what is in the array
        numbers[0]=1;
        numbers[1]=2;
        numbers[2]=3;
        //numbers[10]=3 doesn't exist

        ///////////////////////////////////////////////
        ///////////////////////////////////////////////  

        // Print out the Arrays

        //wrong example
        System.out.println(numbers); 

        //Correct example (use Arrays Class Method)
        System.out.println(Arrays.toString(numbers));

        ///////////////////////////////////////////////
        ///////////////////////////////////////////////

        // another way to print array
        int[] numbers2 = {1,2,3,4,5};

        System.out.println(Arrays.toString(numbers2));

        System.out.println(numbers2.length);
    }
}
