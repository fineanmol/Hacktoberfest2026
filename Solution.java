import java.util.HashMap;

class Solution {
    public static boolean isAnagram(String s, String t) {
        HashMap<Character,Integer> map = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            map.put(s.charAt(i),map.getOrDefault(s.charAt(i),0)+1);
        }

        for (int i = 0; i < t.length(); i++) {
            char a = t.charAt(i);

            if (!map.containsKey(a)){
                return false;
            }else {
                if ((map.get(a)-1)<0){
                    return false;
                }
                map.put(a,map.get(a)-1);
                if (map.get(a)==0)map.remove(a);
            }
        }
        return map.isEmpty();
    }
    public static void main(String[] args) {
       String s ="anagram";
       String t = "nagaram";

        System.out.println(isAnagram(s,t));
    }
}
