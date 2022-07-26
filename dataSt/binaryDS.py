#Recursive 
def binarySearch(arr,l,r,x):

	if r >= l:

		mid = l+(r-l) // 2

		if arr[mid] == x:
			return mid
		elif arr[mid] > x:
			return binarySearch(arr,l,mid-1,x)
		else:
			return binarySearch(arr,mid+1,r,x)

	else:
		return -1

arr = [1,2,3,4,6,7,8]
x = 6

result = binarySearch(arr,0,len(arr)-1,x)
print(result)

#Iterative

def binarySearch(arr,l,r,x):
	
	while l <= r:
		mid = l+(r-l) // 2

		if arr[mid] == x:
			return mid
		
		elif arr[mid] < x:
			l = mid + 1

		else:
			r = mid -1

	return -1

arr = [11,21,31,41,61,71,81]
#a = int(input('enter   '))
#x = a

result = binarySearch(arr,0,len(arr)-1,x)
#print(f'{a} index present in :-> {result}')