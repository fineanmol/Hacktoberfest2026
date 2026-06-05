# This program calculates the average of a set of integers entered by the user.

# Taking input for the set of integers 
numbers = input("Enter a set of integers separated by spaces: ") 
# Splitting the input into a list of integers 
integer_list = [int(num) for num in numbers.split()] 
# Calculating the average 
average = sum(integer_list) / len(integer_list) 
# Displaying the result 
print(f"The average of the set of integers is: {average}")