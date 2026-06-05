#python program to find the largest number in a list without using built-in functions 

def find_largest_number(numbers):
    if not numbers:
        return None  # Return None for an empty list
    
    max_number = numbers[0]  # Assume the first number is the largest
    for num in numbers:
        if num > max_number:
            max_number = num  # Update max_number if a larger number is found
    
    return max_number

# Example usage
num_list = [int(x) for x in input("Enter numbers separated by spaces: ").split()]
largest_number = find_largest_number(num_list)

if largest_number is not None:
    print(f"The largest number in the list is: {largest_number}")
else:
    print("The list is empty.")
