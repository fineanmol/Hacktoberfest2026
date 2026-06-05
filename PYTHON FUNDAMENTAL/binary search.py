#Python program to implement binary search 

def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    
    while low <= high:
        mid = (low + high) // 2  # Find the middle index
        mid_element = arr[mid]
        
        if mid_element == target:
            return mid  # Target found, return index
        elif mid_element < target:
            low = mid + 1  # Search in the right half
        else:
            high = mid - 1  # Search in the left half
    
    return -1  # Target not found

# Example usage
array = [int(x) for x in input("Enter sorted numbers separated by spaces: ").split()]
target = int(input("Enter the number to search: "))

result = binary_search(array, target)

if result != -1:
    print(f"{target} found at index {result}")
else:
    print(f"{target} not found in the array")
