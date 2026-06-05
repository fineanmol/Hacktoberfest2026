#python  program to find diagonal elements of a  matrix  

def find_diagonal_elements(matrix):
    diagonal_elements = []  
    for i in range(len(matrix)):  # Iterate only through rows (square matrix assumed)
        diagonal_elements.append(matrix[i][i])  # Add diagonal elements
    return diagonal_elements

# Example usage
matrix = [[1, 2, 3], 
          [4, 5, 6], 
          [7, 8, 9]]

diagonal_elements = find_diagonal_elements(matrix)

# Display the result
print("Matrix:")
for row in matrix:
    print(row)

print("\nDiagonal Elements:", diagonal_elements)
 
