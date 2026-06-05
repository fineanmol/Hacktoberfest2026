#python  program to implement linear search 

def linear_search(arr, target):
    for index in range(len(arr)):  # Loop through the array
        if arr[index] == target:   # Check if the element matches the target
            return index  # Return the index if found
    return -1  # Return -1 if target is not found

# Example usage
array = [int(x) for x in input("Enter numbers separated by spaces: ").split()]
target = int(input("Enter the number to search: "))

result = linear_search(array, target)

if result != -1:
    print(f"{target} found at index {result}")
else:
    print(f"{target} not found in the array")
