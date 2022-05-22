import java.lang.reflect.Array;
import java.util.Arrays;

    // for Multi-Dimensional Array, use Arrays.deepToString()  Method
    // Java can create Multi dimensional Arrays
    // 2-dimensional array --matrix
    // 3-dimensional array --cube 

public class Main{
    public static void main(String[]args){

        // vertical x horizontal
        // 2-dimensional 2x3 Matrix  
        // directly assign value:
        int [][] matrix = {{1,2,3},{4,5,6}};  //use curly bracket
        System.out.println(Arrays.deepToString(matrix));

        //print [[1, 2, 3], [4, 5, 6]]

        /////////////////////////////////////////////////////////////////

        //2-dimensional 2x3 Matrix  
        int[][] numbers= new int[2][3];

        //assign value
        numbers[0][0]=1;

        //print 2-dimensional Matrix
        System.out.println(Arrays.deepToString(numbers));

        ///////////////////////////////////////////////////////////////////////////////

        //3-dimensional 2x3x4 cube  
        int[][][] cube= new int[3][3][4];

        //assign value
        cube[0][0][0]=1;

        //print 3-dimensional cube
        System.out.println(Arrays.deepToString(cube));
     } 
 }   
 