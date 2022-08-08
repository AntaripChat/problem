function secondMaxSalaryBubble(arr, k) {
    for(let i=0;i<k;i++) {
        let isSwapped = false;
        for(let j=0;j<arr.length-i-1;j++) {
            if(arr[j].salary > arr[j+1].salary) {  
                swap(arr, j, j+1);
                isSwapped = true;
            }
        }
        if(!isSwapped) {
            break;
        }
    }
    return arr[arr.length - k].name;
}
