class Solution(object):
    def check(self, n):
        roman_map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        } 
        return roman_map[n]
        
    def romanToInt(self, val):
        """
        :type val: str
        :rtype: int
        """
        s = 0
        val = list(val)
        n = len(val)
        for i in range(0, n - 1):
            if self.check(val[i]) >= self.check(val[i + 1]):
                s += self.check(val[i])
            else:
                s -= self.check(val[i])
        s += self.check(val[-1])
        return s
sol=Solution()     
print(sol.romanToInt('MDVX'))