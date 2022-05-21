import java.lang.reflect.Array;
import java.util.Arrays;

// java can create multi-dimentional array
    // 2 dimentional array --matrix
    // 3 dimentional array --cube 


public class Main{
    public static void main(String[]args){

        //2-dimentional 2x3 matrix  (column x row ) (vertical x horizontal)
        int[][] numbers= new int[2][3];

        // first row, first column =1
        numbers[0][0]=1;

        //print multi-dimentional array
        System.out.println(Arrays.deepToString(numbers));

        //print:  [[1, 0, 0], [0, 0, 0]]

        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////

        //directly assign value:
        int [][] matrix = {{1,2,3},{4,5,6}};

        System.out.println(Arrays.deepToString(matrix));

        //print [[1, 2, 3], [4, 5, 6]]
     } 
 }   
 