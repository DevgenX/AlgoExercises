const minSubArrayLen = (arr, target) => {
	let start = 0;
	let end = 0;
	let sum = 0;
	let minLen = Infinity

	while(start < arr.length) {
			
		if(sum < target && end < arr.length) {
			sum = sum + arr[end]
			end++
		}else if (sum >= target) {
			minLen = Math.min(minLen, end - start);
			sum -= arr[start]
			start++
		}else {
			break
		}
	}
	return minLength === Infinity ? 0 : minLength
}