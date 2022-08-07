function frequency(array){
    let freq = {};
    for(let val of array){
        freq[val] = (freq[val] || 0) + 1;
    }
    console.log(freq);
}


let array = [1,2,3,4,5,6,1,1,2,4];
frequency(array);
