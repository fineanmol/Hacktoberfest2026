#Python program to check whether the given integer is a prime number or not 
 
# Input an integer from the user 
num = int(input("Enter an integer: ")) 
 
# Check if the number is prime 
is_prime = True 
if num > 1: 
    for i in range(2, int(num**0.5) + 1): 
        if num % i == 0: 
            is_prime = False 
            break 
else: 
    is_prime = False 
 
# Display the result 
if is_prime: 
    print(f"{num} is a prime number.") 
else: 
    print(f"{num} is not a prime number.")