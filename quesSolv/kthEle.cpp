//Find the Kth-smallest Element in an array;
// [3,9,4,5,8,6], 3rd smallest element output 6

#include<iostream>
#include<algorithm>
using namespace std;
int LargEle(int arr[],int n,int k){
    sort(arr,arr+n);
    return arr[k-1];
}
int main(){
    int arr[] = {3,9,4,5,8,6};
    int n = sizeof(arr)/sizeof(arr[0]);
    int k = 3;
    cout<<LargEle(arr,n,k);
    return 0;
}

