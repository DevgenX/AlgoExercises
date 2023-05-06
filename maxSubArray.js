const maxSubArraySum = (arr, num) => {
	
	if(arr.length < num) return 0;

	let maxSum = 0;
	let tempSum = 0;

	for(let i = 0; i < num; i++) {
		maxSum += arr[i]
	}
	tempSum = maxSum; 

	for(let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i]
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum

}

console.log(maxSubArraySum([1,2,3,4,5,6,7,1,2,7,42,3], 3)) // should return 52 
console.log(maxSubArraySum([1,2], 3)) // should return 0;