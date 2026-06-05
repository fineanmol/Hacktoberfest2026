#Python program to check whether the given integer is a multiple of 5 

# Python program to check whether the given integer is a multiple of 5 

def is_multiple_of_5(number): 
	return number % 5 == 0 

# Example usage: 
input_number = int(input("Enter an integer: ")) 
if is_multiple_of_5(input_number): 
	print(f"{input_number} is a multiple of 5.") 
else: 
	print(f"{input_number} is not a multiple of 5.")