#Python program to implement matrix addition 
def add_matrices(matrix1, matrix2): 
    result_matrix = []  
    for i in range(len(matrix1)):  
        row = []  
        for j in range(len(matrix1[0])):  
            row.append(matrix1[i][j] + matrix2[i][j])  
        result_matrix.append(row)  
    return result_matrix  

# Example usage  
matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  
matrix2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]  

result = add_matrices(matrix1, matrix2)  

# Display the result  
print("Matrix 1:")  
for row in matrix1:  
    print(row)  

print("\nMatrix 2:")  
for row in matrix2:  
    print(row)  

print("\nMatrix Addition Result:")  
for row in result:  
    print(row)
