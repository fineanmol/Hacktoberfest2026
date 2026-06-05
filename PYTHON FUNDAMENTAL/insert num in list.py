#Python program to insert a number to any position in a list 

def insert_number_at_position(lst, num, position): 
	lst.insert(position, num) 
# Example usage 
num_list = [int(x) for x in input("Enter numbers separated by spaces: ").split()] 
number_to_insert = int(input("Enter the number to insert: ")) 
insert_position = int(input("Enter the position to insert the number: ")) 
insert_number_at_position(num_list, number_to_insert, insert_position) 
print("Updated list:", num_list)