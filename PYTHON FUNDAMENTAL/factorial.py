#python program to find the factorial of a number using recursion 

def factorial(n): 
	if n == 0 or n == 1: 
		return 1 
	else: 
		return n * factorial(n - 1) 
# Example usage 
number = int(input("Enter a number: ")) 
result = factorial(number) 
print(f"The factorial of {number} is: {result}")