print("title: Python program to display the sumof n numbers using a list") 

n = int(input("Enter the number of elements: ")) 
numbers = [] 
for i in range(n): 
    num = float(input(f"Enter number {i + 1}: ")) 
    numbers.append(num) 
sum_of_numbers = sum(numbers) 
print(f"Sum of numbers: {sum_of_numbers:.2f}") 