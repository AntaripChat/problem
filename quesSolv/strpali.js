function palindrom(string,start,end){
    if(start > end){
        return true;
    }
    if(string.charAt(start)==string.charAt(end)){
        return palindrom(string,start+1,end-1);
    }else{
        return false;
    }
};

let str = "fod";

console.log(palindrom(str,0,str.length-1));
