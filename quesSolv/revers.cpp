//Revers the array
// [1,2,3,4,5] output [5,4,3,2,1]

#include<iostream>

using namespace std;

void revers(int arr[],int start,int end){
    int tem;
    while(start<end){
        tem = arr[start];
        arr[start] = arr[end];
        arr[end] = tem;
        start++;
        end--;
    }
}
void print(int arr[], int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<""<<endl;
    }
}

int main(){
    int arr[] = {1,2,3,4,5};
    int n = sizeof(arr)/sizeof(arr[0]);
    //print(arr,n);
    revers(arr,0,n-1);
    print(arr,n);
    return 0;
}