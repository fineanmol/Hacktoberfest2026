#include<bits/stdc++.h>
using namespace std; 

int main(){
  int n,count=0;
  cin>>n;
  int arr[n];
  for(int i=0;i<n;i++){
    cin>>arr[i];
  }
  int key;
  cin>>key;
  for(int i=0;i<n;i++){
    if(arr[i]==key){
      count++;
      break;
    }
  }
  if(count){
    cout<<"Number is present";
  } else{
    cout<<"Number is not present";
  }
  return 0;
} 