const sumZero = (arr) => {
		
	if(arr.length  === 0) return false;
	

	let left = 0;
	let right = arr.length - 1

	while(left < right) {
		let sum = arr[left] + arr[right]
		if(sum === 0) {
			return [arr[left], arr[right]]
		}else if (sum > 0) {
			right--
		}else {
			left++
		}
	}
	return null; // if no pair found
}	

console.log(sumZero([]))
console.log(sumZero([-4,-3,-2,-1,0,1,2,10]))
console.log(sumZero([-5,-6,-2,-1,0,3,4,10]))