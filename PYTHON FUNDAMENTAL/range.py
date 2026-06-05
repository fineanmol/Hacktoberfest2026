#Python program to display all integers within the range 100-200 whose sum of digits is an even number 
 
# Display integers within the specified range with even sum of digits 
print("Integers within the range 100 to 200 with even sum of digits:") 
for num in range(100, 201): 
    # Calculate the sum of digits 
    sum_of_digits = sum(int(digit) for digit in str(num)) 
     
    # Check if the sum of digits is even 
    if sum_of_digits % 2 == 0: 
        print(num) 