#Python program to print all the items in a dictionary 

def print_dictionary_items(dictionary): 
	for key, value in dictionary.items(): 
		print(f"{key}: {value}") 
# Example usage 
my_dict = {'name': 'saurabh', 'age': 25, 'city': 'New York'} 
print("Dictionary Items:") 
print_dictionary_items(my_dict)