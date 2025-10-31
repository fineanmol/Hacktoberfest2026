# palindrome_checker.py

def is_palindrome(text):
    cleaned = ''.join(c.lower() for c in text if c.isalnum())
    return cleaned == cleaned[::-1]

if __name__ == "__main__":
    user_input = input("Enter text to check palindrome: ")
    if is_palindrome(user_input):
        print("✅ This is a palindrome!")
    else:
        print("❌ Not a palindrome!")
