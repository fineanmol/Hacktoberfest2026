#Python program to check whether the given integer is a multiple of both 5 and 7 

def is_multiple_of_5_and_7(number): 
    return number % 5 == 0 and number % 7 == 0
# Example usage: 
input_number = int(input("Enter an integer: ")) 
if is_multiple_of_5_and_7(input_number): 
    print(f"{input_number} is a multiple of both 5 and 7.") 
else: 
    print(f"{input_number} is not a multiple of both 5 and 7.") 