import java.util.*;

class Solution1 {
    public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        Stack<Integer> stack = new Stack<>();

        for (int num: nums2){
            while (!stack.isEmpty() && num > stack.peek()){
                map.put(stack.pop(),num);
            }
            stack.push(num);
        }

        while (!stack.isEmpty()){
            map.put(stack.pop(),-1);
        }

        int[] result = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            result[i] = map.get(nums1[i]);
        }

        return result;
    }

    public static void main(String[] args) {
        int[] num1 = {4,1,2};
        int[] num2 = {1,3,4,2};
        System.out.println(Arrays.toString(nextGreaterElement(num1, num2)));
    }
}
