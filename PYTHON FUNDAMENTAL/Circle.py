# This program calculates the circumference and area of a circle given its radius.

import math 
radius = float(input("Enter the radius of the circle: ")) 
circumference = 2 * math.pi * radius 
area = math.pi * radius**2 
print(f"Circumference: {circumference:.2f}") 
print(f"Area: {area:.2f}")