// Implement a function that accepts a sorted array and counts the unique values in the array 
// there can be negative numbers in the array but it will always be sorted

const countUniqueValues = (arr) => {
	if(arr.length === 0) return 0;

	let j = 0
	for(let i = 1; i < arr.length; i++) {

		if(arr[j] !== arr[i]) {
			j++ 
			arr[j] = arr[i]	
		}
	}
	return j + 1
	console.log(i)
}
console.log(countUniqueValues([])); // should return 0
console.log(countUniqueValues([1,1,1,2,3,4])) // should return 3

const countUniqueValuesSet = (arr) =>  {

	if(arr.length === 0) return 0; 


	const newArr = [...new Set(arr)]
	
	return newArr.length

}

console.log(countUniqueValuesSet([])); // should return 0
console.log(countUniqueValuesSet([1,1,1,1,1,2])) // should return 2
console.log(countUniqueValuesSet([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // should return 7
