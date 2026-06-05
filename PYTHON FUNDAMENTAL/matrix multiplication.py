# Python program to implement matrix multiplication

def matrix_multiply(mat1, mat2):
	result = [[0 for _ in range(len(mat2[0]))] for _ in range(len(mat1))]
	for i in range(len(mat1)):
		for j in range(len(mat2[0])):
			for k in range(len(mat2)):
				result[i][j] += mat1[i][k] * mat2[k][j]
	return result
# Example matrices 
matrix1 = [[1, 2, 3], 
[4, 5, 6], 
[7, 8, 9]] 
matrix2 = [[9, 8, 7], 
[6, 5, 4], 
[3, 2, 1]] 
result_matrix = matrix_multiply(matrix1, matrix2) 
print(result_matrix)