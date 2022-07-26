// Find the Minimum value in an Array
// [3,2,4,7,9] output 2
#include<iostream>
using namespace std;

int minValu(int arr[],int n){
    int min = arr[0];
    for(int i = 1;i<n;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}

int main(){
    
    int arr[] = {3,2,4,7,9};
    int n = sizeof(arr)/sizeof(arr[0]);
    // int min = arr[0];
    // for(int i = 1;i < n;i++){
    //     if(arr[i]<min){
    //         min = arr[i];
    //     }
    //     //cout<<arr[i]<<endl;
    // }
    // cout<<min;
    cout<<minValu(arr,n);
    return 0;
}