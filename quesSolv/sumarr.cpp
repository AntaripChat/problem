//Sum of an array
//input [1,2,3,4] output 10

#include<iostream>
using namespace std;
int sumarr(int arr[],int n){
    int sum = 0;
    for(int i = 0;i < n;i++){
        sum += arr[i];
    }
    return sum;
}
int main(){
    int arr[] = {1,2,3,4};
    int n = sizeof(arr)/sizeof(arr[0]);
    cout<<sumarr(arr,n);
    return 0;
}

////---------
