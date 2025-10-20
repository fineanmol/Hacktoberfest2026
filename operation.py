class Solution {
    public int finalValueAfterOperations(String[] operations) {
 int X=0;
for(String op:operations) 
{
if(op.contains("+")) 
{
X++;
} 
else 
{
X--;
}
}
return X;      
}
}
