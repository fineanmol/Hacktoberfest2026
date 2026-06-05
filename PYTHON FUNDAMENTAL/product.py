#Python program to find the product of a set of real numbers 
 
def calculate_product(numbers): 
    result = 1
    for num in numbers:
        result *= num
    return result
# Example usage: 
input_numbers = [2.5, 3.0, 1.5, 4.0] 
product = calculate_product(input_numbers) 
print(f"The product of the numbers is: {product}")