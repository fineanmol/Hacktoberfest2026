class Solution:
    def isHappy(self, n: int) -> bool:
        seen = set()
        while n!=1 and n not in seen:
            seen.add(n)
            s = 0
            for d in str(n):
                s = s+ int(d) * int(d)
            n = s
        result = (n==1)
        return result
        