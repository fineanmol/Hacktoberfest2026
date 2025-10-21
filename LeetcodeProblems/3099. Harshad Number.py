class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        s = sum(int(d) for d in str(x))
        if x % s ==0 :
            return s
        else:
            return -1