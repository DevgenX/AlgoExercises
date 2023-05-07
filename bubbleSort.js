const bubbleSort = (arr) => {
	
	for(let i = arr.length; i > 0; i--) {
		let noSwaps;
		for(let j = 0; j < i - 1; j++) {
			noSwaps = true;
			if(arr[j] < arr[j+1]) {
				// console.log(arr, arr[j], arr[j+1])
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
				noSwaps= false;
			}
		}
		if(noSwaps) break;
	}
	return arr
}

console.log(bubbleSort([35,37,45,29,8, 9,27,36,13,4,3,19]))
