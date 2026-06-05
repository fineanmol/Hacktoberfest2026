# Python program to draw a circle of squares using Turtle

import turtle

# Function to draw a square
def draw_square(side_length):
	for _ in range(4):
		turtle.forward(side_length)
		turtle.right(90)

# Function to draw a circle of squares
def circle_of_squares(num_squares, side_length):
	for _ in range(num_squares):
		draw_square(side_length)
		turtle.right(360 / num_squares)
# Set up the Turtle window 
turtle.speed(2)  # Set the drawing speed 
# Draw a circle of squares with 8 squares and each side length of 50 units 
circle_of_squares(8, 50) 
# Keep the window open until closed by the user 
turtle.done() 