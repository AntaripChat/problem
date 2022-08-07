//Find the Kth max element
let arr = [3,5,1,2,7];
let n = arr.length;

arr.sort(x,y => y-x);

console.log(arr[k-1]); 
/*
OR

arr.sort(x,y => x-y);
console.log(arr[n-k])
*/

