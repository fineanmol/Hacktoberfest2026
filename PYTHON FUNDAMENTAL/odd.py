#Python program to find the odd numbers in an array 

def find_odd_numbers(arr): 
	odd_numbers = [num for num in arr if num % 2 != 0] 
	return odd_numbers 
# Example usage 
array = [int(x) for x in input("Enter numbers separated by spaces: ").split()] 
odd_numbers = find_odd_numbers(array) 
print("Odd numbers in the array:", odd_numbers) 