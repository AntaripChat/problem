//Alternative Sorting
//input [5,3,9,6,8] output [9,3,8,5,6]

#include<iostream>
#include<algorithm>
using namespace std;
void alter(int arr[],int n){
    sort(arr,arr+n);

    int start = 0,end = n-1;
    while(start<end){
        cout<<arr[end--]<<"";
        cout<<arr[start++]<<"";
    }
    if (n % 2 != 0)
        cout << arr[start];
}

int main(){
    int arr[] = {5,3,9,6,8};
    int n = sizeof(arr)/sizeof(arr[0]);
    alter(arr,n);
    return 0;
}

