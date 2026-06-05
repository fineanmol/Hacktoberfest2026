#python program to  check leap year 

def is_leap_year(year):
    # A leap year is either divisible by 4 and not by 100, or divisible by 400
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    else:
        return False

# Example usage
year_to_check = int(input("Enter a year to check: "))

if is_leap_year(year_to_check):
    print(f"{year_to_check} is a leap year.")
else:
    print(f"{year_to_check} is not a leap year.")
