var sortColors = function(nums) {
    let start = 0;
    let a = 0;
    let end = nums.length - 1;
    while(a <= end){
        if(nums[a]==2){
            let tem = nums[a];
            nums[a] = nums[end];
            nums[end] = tem;
            end--;
        }
        if(nums[a]==1){
            a++;
        }
        if(nums[a]==0){
            let tem = nums[a];
            nums[a] = nums[start];
            nums[start] = tem;
            a++;
            start++;
        }
    }
    return nums;
};
