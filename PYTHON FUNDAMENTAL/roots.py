#Python program to find the roots of a quadratic equation 

import math

def find_roots(a, b, c):
	# Calculate the discriminant
	discriminant = b**2 - 4*a*c
	# Check if roots are real
	if discriminant >= 0:
		# Calculate real roots
		root1 = (-b + math.sqrt(discriminant)) / (2*a)
		root2 = (-b - math.sqrt(discriminant)) / (2*a)
		return root1, root2
	else:
		return None  # No real roots

# Example usage
a = float(input("Enter the coefficient of x^2: "))
b = float(input("Enter the coefficient of x: "))
c = float(input("Enter the constant term: "))
roots = find_roots(a, b, c)
if roots:
	print("Roots:", roots)
else:
	print("No real roots.")