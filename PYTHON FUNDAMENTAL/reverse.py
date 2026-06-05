#Python program to display the given integer in a reverse manner 

# Input an integer from the user 
num = int(input("Enter an integer: ")) 
# Convert the integer to a string and reverse it 
reversed_num = str(num)[::-1] 
# Display the reversed integer 
print(f"The reversed integer is: {reversed_num}")