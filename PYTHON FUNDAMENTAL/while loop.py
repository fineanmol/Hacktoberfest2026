#Python program to find the sum of the digits of an integer using a while loop 

num = int(input("Enter an integer: ")) 
# Initialize variables 
sum_of_digits = 0 
# Use a while loop to extract and sum the digits 
while num > 0: 
    digit = num % 10 
    sum_of_digits += digit 
    num //= 10 
# Display the sum of the digits 
print(f"The sum of the digits is: {sum_of_digits}")