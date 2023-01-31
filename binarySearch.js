const binarySearch = (arr, target) => {

	if(arr.length === 0) return null;

	let left = 0
	let right = arr.length - 1
	let mid = Math.floor((left + right) / 2)

	while(arr[mid] !== target && left <= right) {
		if(target < arr[mid]) {
			right = mid -1;
		}else {
			left = mid + 1
		}
		mid = Math.floor((left + right) / 2)
	}
	return arr[mid] === target ? mid : -1
}

const arr = [1,2,3,4,5,6,7,8,9,10,11]
console.log(binarySearch(arr, 12))