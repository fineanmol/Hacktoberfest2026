class Solution:
    def missingNumber(self, nums):
        n = len(nums)
        tsum = n*(n+1) // 2
        asum = sum(nums)
        res = tsum - asum
        return res
        