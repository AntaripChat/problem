def binarySearch(arr,l,r,x):

    while l<=r:

        mid = l+(r-l) //2

        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            l = mid + 1
        else:
            r = mid - 1

    if arr[mid] > x:
        return mid
    else:
        return mid + 1

arr = [1,2,4,5,7,9]
x = 8
result = binarySearch(arr,0,len(arr)-1,x)
print(result)
##Simple Binary Search algorithm 
