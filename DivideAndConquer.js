// Given a sorted array of integers, write a function that accepts and value
// and returns the index of the given value. 


const search = (arr, target) => {

	if(arr.length === 0) return 0;


	let left = 0;

	let right = arr.length - 1 

	while(left <= right) {
		let middle = Math.floor(left + right) / 2
		let currEl = arr[middle]

		if(currEl < target) {
			left = middle + 1
		}else if(currEl > target) {
			right = middle - 1
		}else {
			return middle
		}

	}
	return -1;
}

console.log(search([1,2,3,4,5,6,7], 3))

