import java.util.Arrays;

public class Main{
    public static void main(String[]args){
        
        //array is Reference types
        //array have fix length

        //Create integer array
        int[] numbers = new int[5];

        numbers[0]=1;
        numbers[1]=2;

        //wrong example 
        System.out.println(numbers);  //don't do this

        //correct example, use "Arrays" class
        Arrays.toString(numbers);     //do this 

        System.out.println(Arrays.toString(numbers));

        ///////////////////////////////////////////////
        ///////////////////////////////////////////////

        int[] numbers2 = {1,2,3,4,5};

        //wrong example
        System.out.println(numbers2);

        System.out.println(numbers2.length);
    }
}
