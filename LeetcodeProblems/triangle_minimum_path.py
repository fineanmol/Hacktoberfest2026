"""
Triangle Minimum Path Sum

Description:
Given a triangle array, this algorithm finds the minimum path sum from the top to the bottom.
At each step, you may move to adjacent numbers on the row below.
The solution uses dynamic programming to update the triangle in-place, 
accumulating minimum sums row by row, which leads to the final minimum path sum at the bottom.

Time Complexity: O(n^2), where n is the number of rows in the triangle.
Each element is processed once.

Space Complexity: O(1), because the algorithm modifies the input triangle in-place without extra space.
"""

from typing import List

class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)
        
        # Start from the second row and update each element with the minimum path sum
        for i in range(1, n):
            # First element in the row can only come from the first element above
            triangle[i][0] += triangle[i-1][0]
            
            # Last element in the row can only come from the last element above
            triangle[i][i] += triangle[i-1][i-1]
            
            # For middle elements, choose the minimum of the two adjacent elements from the previous row
            for j in range(1, i):
                triangle[i][j] += min(triangle[i-1][j], triangle[i-1][j-1])
        
        # The answer is the minimum element in the last row after accumulation
        return min(triangle[-1])


# Test cases to demonstrate correctness
if __name__ == "__main__":
    sol = Solution()
    
    # Test case 1: example from problem description
    triangle1 = [[2],[3,4],[6,5,7],[4,1,8,3]]
    assert sol.minimumTotal(triangle1) == 11, "Test case 1 failed"
    
    # Test case 2: single element triangle
    triangle2 = [[-10]]
    assert sol.minimumTotal(triangle2) == -10, "Test case 2 failed"
    
    # Additional test case: increasing values
    triangle3 = [[1],[2,3],[3,4,5]]
    assert sol.minimumTotal(triangle3) == 6, "Test case 3 failed"
    
    print("All test cases passed!")
