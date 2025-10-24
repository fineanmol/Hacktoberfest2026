# palindrome_checker.py
# Author: Lakshay Singh Rathore
# Date: 2025-10-24
# Description: Simple program to check if a string is palindrome or not.

def is_palindrome(s: str) -> bool:
    s = ''.join(c.lower() for c in s if c.isalnum())  # remove non-alphanumeric
    return s == s[::-1]

if __name__ == "__main__":
    text = input("Enter a string: ")
    if is_palindrome(text):
        print("Palindrome")
    else:
        print("Not Palindrome")
