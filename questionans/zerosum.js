arr.sort((x,y)=>x-y);
        for(let i = 0; i < n; i++){
            let l = i+1;
            let  r = n-1;
            while(l<n){
                let sum = arr[i] + arr[l] + arr[n];
                if(sum = 0) return true;
                else if (sum > 0) n--;
                else i++;
            }
        }

// link https://practice.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1?page=1&difficulty[]=-1&category[]=Arrays&sortBy=submissions
