function swap(arr,a,b){
    let tem = arr[a];
    arr[a] = arr[b];
    arr[b] = tem;
}

function bubblesort(arr,n){
    for(let i = 0;i<n-1;i++){
        for(let j = 0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
}

let arr = [2,5,3,8];
let n = arr.length;

bubblesort(arr,n);
console.log(arr);