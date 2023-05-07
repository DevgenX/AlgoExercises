const SelectionSort2 = (arr) => {
		
	for(let i =0; i < arr.length; i++) {

		let lowest = i 

		for(let j = i + 1; j < arr.length ; j++) {
			if(arr[j] < arr[lowest]) {
				lowest = j
			}
		}

		if(i !== lowest) {
			let temp = arr[i]
			arr[i] = arr[lowest]
			arr[lowest] = temp
		}
	}
	return arr
}

const selectionSortSwap = (arr) => {

	// swap function 

	const swap = (arr, idx1, idx2) => {
		([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]) 
	}

	for(let i = 0; i< arr.length; i++) {
		let smallest = i 

		for(let j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[smallest]) smallest = j

		}
	if(i !== smallest) swap(arr, i, smallest)

	}
	return arr
}