# Python program to find the area of a triangle whose sides are given

def calculate_area(a, b, c):
    s = (a + b + c) / 2
    area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
    return area

side_a = float(input("Enter the length of side a: "))
side_b = float(input("Enter the length of side b: "))
side_c = float(input("Enter the length of side c: "))

triangle_area = calculate_area(side_a, side_b, side_c)
print(f"The area of the triangle is: {triangle_area}")