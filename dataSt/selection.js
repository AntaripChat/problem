function selectionsort(arr,n){
    for(let i = 0;i < n - 1;i++){
        for(let j = i + 1; j < n;j++){
            if(arr[i]>arr[j]){
                let tem = arr[j];
                arr[j] = arr[i];
                arr[i] = tem;
            }
        }
    }
}

let arr = [8,3,2,9];
let n = arr.length;

selectionsort(arr,n);
console.log(arr);