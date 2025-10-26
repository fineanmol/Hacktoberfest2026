
def print_triangle_pattern(rows):
    """Prints a symmetrical triangle pattern of asterisks."""
    for i in range(1, rows + 1):
        # Print leading spaces
        print(" " * (rows - i), end="")
        # Print asterisks
        print("*" * (2 * i - 1))

# Run the function to print a 5-row triangle.
if __name__ == '__main__':
    print_triangle_pattern(5)