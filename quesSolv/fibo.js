// Nth fibonacci number
function fibo(n){
    if(n ==0 || n == 1){
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(4));


//print fibonacci number

function fibo(n,arr){
    if(n ==0 || n == 1){
        arr[n] = n;
        return n;
    }
    let value = fibo(n - 1,arr) + fibo(n - 2,arr);
    arr[n] = value;
    return value;
};

let arr = [];

fibo(4,arr);

console.log(arr);
