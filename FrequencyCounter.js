// Write a function that returns true if every value of the first array 
// has the equivalent squared of the each value in the 2nd array, Otherwise, false. 

const checkSquaredVal = (arr1, arr2) => {
	// edge cases 
	if(arr1.length !== arr2.length) return false; 


	// loop through the first array, check if the squared values are present in 2nd array 
	for(let i = 0; i < arr1.length; i++) {
		let value = arr2.indexOf(arr1[i] ** 2) 

		// if value is not present, return false
		if(value === -1) {
			return false
		}
		// remove the item from the array 
		arr2.splice(value, 1)
	}
	return true
}


const checkSquaredValMap = (arr1, arr2) => {
	if(arr1.length !== arr2.length) return false; 
	const getSquaredVal = arr1.map((x) => x ** 2)
	const sortedArr2 = arr2.slice().sort()
	return getSquaredVal.every((x, i) => x === sortedArr2[i])
}


console.log(checkSquaredValMap([1,2,3], [4,1,9])) // should return true 
console.log(checkSquaredValMap([1,4,3], [1,4,9])) // should return false

console.log(checkSquaredVal([1,2,3], [1,4,9])) // should return true 
console.log(checkSquaredVal([1,4,3], [1,4,9])) // should return false








