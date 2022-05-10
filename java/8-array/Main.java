import java.util.Arrays;

public class Main{
    public static void main(String[]args){

        //array have fix length

        //array is Reference types
        //Create integer array
        int[] numbers = new int[5];

        numbers[0]=1;
        numbers[1]=2;

        //wrong example 
        System.out.println(numbers);

        // use a Class in Java --> Arrays
        Arrays.toString(numbers);

        System.out.println(Arrays.toString(numbers));

        

        ///////////////////////////////////////////////
        ///////////////////////////////////////////////

        int[] numbers2 = {1,2,3,4,5};

        //wrong example
        System.out.println(numbers2);

        System.out.println(numbers2.length);

        



    }
}
