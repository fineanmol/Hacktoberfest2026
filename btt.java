/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Tuple{
    TreeNode root;
    int index;
    
    public Tuple(TreeNode root, int index){
        this.root = root;
        this.index = index;
    }
}

class Solution {
    public int widthOfBinaryTree(TreeNode root) {
        Queue<Tuple> q = new LinkedList<>();
        q.add(new Tuple(root, 1));
        List<List<Integer>> outter = new LinkedList<>();
        while(!q.isEmpty()){
            List<Integer> inner = new LinkedList<>();  
            int size = q.size();
            for(int i=0; i<size; i++){
                Tuple tuple = q.remove();
                int index = tuple.index;
                TreeNode node = tuple.root;
                inner.add(index);
                if(node.left != null){
                    q.add(new Tuple(node.left, 2*index));
                }
                if(node.right != null){
                    q.add(new Tuple(node.right, 2*index + 1));
                }
            }
            outter.add(inner);
        }
        int max = 1;
        for(List<Integer> list : outter){
            max = Math.max(max,  (list.get(list.size()-1) - list.get(0) + 1) );
        }
        return max;
    }
}
