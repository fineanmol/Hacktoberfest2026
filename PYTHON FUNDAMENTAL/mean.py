print("title: Python program to find the geometric mean of n numbers") 

N = int(input("Enter the number of elements: ")) 
Product = 1 
for I in range(N): 
	Num = float(input(f"Enter number {I + 1}: ")) 
	Product *= Num 
Geometric_mean = Product**(1/N) 
print(f"Geometric Mean: {Geometric_mean:.2f}") 