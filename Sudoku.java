
public class Sudoku {

    public static boolean isSafe(int[][] sudoku, int row, int col, int num) {
        //column
        for (int i = 0; i < 8; i++) {
            if (sudoku[i][col] == num) {
                return false;
            }
        }

        //row
        for (int j = 0; j < 8; j++) {
            if (sudoku[row][j] == num) {
                return false;
            }
        }

        //grid   // starting row = (row/3)*3    starting column = (col/3)*3
        int sr = (row / 3) * 3;
        int sc = (col / 3) * 3;

        for (int i = sr; i < sr + 3; i++) {
            for (int j = sc; j < sc + 3; j++) {
                if (sudoku[i][j] == num) {
                    return false;
                }
            }
        }
        return true;
    }

    public static boolean sudoku_solver(int[][] sudoku, int row, int col) {
        //base case
        if (row == 9) {
            return true;
        }

        //recursion
        int nextRow = row;
        int nextCol = col + 1;
        if (nextCol == 9) {
            nextRow = row + 1;
            nextCol = 0;
        }

        if (sudoku[row][col] != 0) { // already set elements
            return sudoku_solver(sudoku, nextRow, nextCol);
        }

        for (int digit = 1; digit <= 9; digit++) { // to place new values
            if (isSafe(sudoku, row, col, digit)) {
                sudoku[row][col] = digit;
                if (sudoku_solver(sudoku, nextRow, nextCol)) {
                    //sol exists
                    return true;
                }
                sudoku[row][col] = 0;
            }
        }
        return false;
    }

    public static void printSudoku(int sudoku[][]) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                System.out.print(sudoku[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int sudoku[][] = {{0, 0, 8, 0, 0, 0, 0, 0, 0},
        {4, 9, 0, 1, 5, 7, 0, 0, 2},
        {0, 0, 3, 0, 0, 4, 1, 9, 0},
        {1, 8, 5, 0, 6, 0, 0, 2, 0},
        {0, 0, 0, 0, 2, 0, 0, 6, 0},
        {9, 6, 0, 4, 0, 5, 3, 0, 0},
        {0, 3, 0, 0, 7, 2, 0, 0, 4},
        {0, 4, 9, 0, 3, 0, 0, 5, 7},
        {8, 2, 7, 0, 0, 9, 0, 1, 3}};

        if (sudoku_solver(sudoku, 0, 0)) {
            System.out.println();
            System.out.println("SOLUTION EXISTS");
            System.out.println();
            printSudoku(sudoku);
        } else {
            System.out.println("No solution exists");
        }

    }
}
