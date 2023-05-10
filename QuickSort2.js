const pivotHelper = (arr, start=0, end = arr.length + 1) => {
	const swap = (arr, i, j) => {
		let temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}

	let pivot = arr[start]
	let swapIdx = start;

	for(let i = start + 1; i < arr.length; i++) {
		if(pivot > arr[i]) {
			swapIdx++
			swap(arr, swapIdx, i)
		}
	}
	swap(arr, start, swapIdx)
	return swapIdx
}

console.log(pivotHelper([4,3,2,5,7,2,6])) //should return 3

const quickSort = (arr, left=0, right= arr.length -1) => {

	if(left < right) {
		let pivotIndex = pivotHelper(arr, left, right)
		quickSort(arr, left, pivotIndex - 1)
		quickSort(arr, pivotIndex+1, right)
	}
	return arr
}

console.log(quickSort([4,3,2,5,7,2,6])) // should return [2 , 2 ,3 ,4 ,5 ,6 ,7]