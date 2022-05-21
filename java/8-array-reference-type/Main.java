import java.util.Arrays;
    //array is Reference types
    //array have fix length

    //array store list of object. 

public class Main{
    public static void main(String[]args){

        //Create integer array (reference type)
        int[] numbers = new int[5];

        // define what is in the array
        numbers[0]=1;
        numbers[1]=2;
        numbers[2]=3;
        // numbers[10]=3; 
        //Can't define numbers[10]=3;  

        //wrong example. java will print out the address.
        System.out.println(numbers); 

        //correct example, use "Arrays" class
        Arrays.toString(numbers);     

        System.out.println(Arrays.toString(numbers));

        ///////////////////////////////////////////////
        ///////////////////////////////////////////////

        // another way to print array
        int[] numbers2 = {1,2,3,4,5};

        System.out.println(Arrays.toString(numbers2));

        System.out.println(numbers2.length);
    }
}
