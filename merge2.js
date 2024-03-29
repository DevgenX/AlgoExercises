const merge = (arr1, arr2) => {
	let result = []
	let i = 0;
	let j = 0;

	while(i < arr1.length && j < arr2.length) {
		if(arr2[j] >= arr1[i]) {
			result.push(arr1[i])
			i++
		}else {
			result.push(arr2[j])
			j++
		}
	}

	// when we hit the end, add the remaining elements
	while(i < arr1.length) {
		result.push(arr1[i])
		i++
	}
	while(j < arr2.length) {
		result.push(arr2[j])
		j++
	}


	return result
}

const mergeSort = (arr) => {
	if(arr.length <= 1) return arr 
	let mid = Math.floor(arr.length / 2)
	let left = mergeSort(arr.slice(0, mid))
	let right = mergeSort(arr.slice(mid))
	return merge(left, right)

}

console.log(mergeSort([1,5,3,1,5,6,71,5]))


