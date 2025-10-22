# Intuition
We have to find connected components in an undirected graph. Each city is a node, and if two cities are directly connected, there is an edge between them. A province is a connected component in this graph. To count the number of provinces, we need to find how many such connected components exist.

# Approach
1. make an `adjacency` map from the matrix, I prefer using a map, you can make it however you like, will work the same. 
2. Keep a counter `ctr` and a queue `q` to to BFS. Initialize a visited array `vis` with `n+1` since we have city name starting from 1 to n.
3. Iterate over all the cities `for[1 to n]`. if a city has not been visited it not connected to other ones or is the first city we are going to explore. increase `ctr` by `1` if not visited.
4. Now, explore all the other cities if the current `curr` is connected, mark them as visited `vis[x] = 1` and push them back to queue to check if they are connected to other cities.
5. In the end, return `ctr` and we have our answer.

# Complexity
- Time complexity:
$$O(n^2)$$ just because I made adj map else it's $$O(V+E)$$

- Space complexity:
$$O(V+E)$$

# Code
```cpp []
class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        map<int,vector<int>>adj;
        int m = isConnected.size();
        int n = isConnected[0].size();
        for(int i=0;i<m;i++)
        {
            for(int j=0;j<n;j++)
            {
                if(isConnected[i][j] == 1)
                {
                    adj[i+1].push_back(j+1);
                }
            }
        }

        int ctr = 0;
        queue<int>q;
        vector<int>vis(n + 1,0);
        for(int i=1;i<=n;i++)
        {
            if(!vis[i])
            {
                q.push(i);
                ctr++;
            }
            while(!q.empty())
            {
                int curr = q.front();
                q.pop();
                for(auto x:adj[curr])
                {
                    if(!vis[x])
                    {
                        vis[x] = 1;
                        q.push(x);
                    }
                }
            }
        }
        return ctr;
    }
};
```