#python program to display all the multiples of 3 within the range 10 to 50 
 
# Initialize variables 
start_range = 10 
end_range = 50 
 
# Display multiples of 3 within the specified range 
print(f"Multiples of 3 within the range {start_range} to {end_range}:") 
for num in range(start_range, end_range + 1): 
    if num % 3 == 0: 
        print(num)