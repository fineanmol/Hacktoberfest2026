# longest_consecutive.py
import sys

def longest_consecutive(nums):
    s = set(nums)
    best = 0
    for x in s:
        if x - 1 not in s:
            length = 1
            while x + length in s:
                length += 1
            best = max(best, length)
    return best

if __name__ == "__main__":
    data = list(map(int, sys.stdin.read().split()))
    if not data:
        print(0)
    else:
        print(longest_consecutive(data))
