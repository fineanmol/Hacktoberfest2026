# Python program to find the average of 10 numbers using while loop 

# Initialize variables 
total = 0 
count = 0 
# Use a while loop to input 10 numbers 
while count < 10: 
	number = float(input("Enter a number: ")) 
	total += number 
	count += 1 
# Calculate and print the average 
average = total / 10 
print(f"The average of the 10 numbers is: {average}")