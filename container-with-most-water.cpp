class Solution {
public:
    int maxArea(vector<int>& height) {
         int left = 0, right = height.size() - 1;
        int max_area = 0;
        while (left < right) {
            max_area = max(max_area, (right - left) * min(height[left], height[right]));
            if (height[left] < height[right]) {
                left += 1;
            } else {
                right -= 1;
            }
        }
        return max_area;
    }
};
