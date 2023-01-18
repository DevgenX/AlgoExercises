const plusOne = (digits) => {

	for(let i = digits.length -1; i >= 0; i--) {
		if(digits[i] < 9) {
			digits[i] = digits[i] + 1
			return digits
		}else {
			digits[i] = 0
		}
	}

	digits.unshift(1)
	return digits
};


// Good solution for small data, fails to convert into num when the array has length more than 10
const plusOne2 = (digits) => {

	if(digits.length > 10) return undefined

	return (parseInt(digits.join('')) + 1).toString().split('').map(Number)
}

const digit = [4,3,2,1] 
const digit2 = [1,2,3] 
const digit3 = [9] 
const digit4 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

console.log(plusOne(digit)) // should log : [4,3,2,2]
console.log(plusOne(digit2)) // should log : [1,2,4]
console.log(plusOne(digit3)) // should log : [ 1, 0]
console.log(plusOne(digit4)) // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

