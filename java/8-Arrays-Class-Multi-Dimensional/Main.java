import java.util.Arrays;

// Java can create Multi dimensional Arrays
// for Multi-Dimensional Array, use Arrays.deepToString()  Method
// 2-dimensional array --matrix
// 3-dimensional array --cube 

public class Main{
    public static void main(String[]args){

        // 2-dimensional 2x3 Matrix  
            int [][]matrix1 = {{1,2,3},{1,2,3}}; //use curly bracket
            System.out.println(Arrays.deepToString(matrix1));    //[[1, 2, 3], [1, 2, 3]]
            //use Arrays.deepToString() Method


        // 2-dimensional 2x3 Matrix (vertical x horizontal)
            int [][] matrix2 = new int[2][3];
            matrix2 [0][0] =1;   //directly assign value:
            System.out.println(Arrays.deepToString(matrix2));    //[[1, 0, 0], [0, 0, 0]]
         
            
        //3-dimensional 2x3x4 cube  
            int [][][] cube = new int[2][3][4];
            cube [0][0][0] =1;  //directly assign value:
            System.out.println(Arrays.deepToString(cube));       //[[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]]

     } 
 }   
