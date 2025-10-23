class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int count=0;
        int n=s.length();
        int ans=0;
        map<char,int> mpp;
        int start=0;
        int end=0;
        while(end<=n-1){
            mpp[s[end]]++;
            while(mpp[s[end]] > 1) {
            mpp[s[start]]--;
            start++;
        }
            count=end-start+1;
            ans=max(count,ans);
            end++;
        }
        return ans;
    }
};
