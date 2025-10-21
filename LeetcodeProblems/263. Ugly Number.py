class Solution:
    def isUgly(self, n: int) -> bool:
        if n == 0:
            res = False
        else:
            while n % 2 == 0:
                n = n// 2
            while n % 3 == 0:
                n = n// 3
            while n % 5 == 0:
                n = n // 5
         
            res = (n==1)
        return res
        