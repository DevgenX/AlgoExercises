const validAnagram = (str1,str2) => {	
	// edge case, check if both lengths are equal
	if(str1.length !== str2.length) return false;
	// declare an empty object to store the values 
  	let values = {} 
  	// loop through the strings, count and subtract the frequency	

  	for(let i = 0; i < str1.length; i++) {
  		let letter1 = str1[i]
  		let letter2 = str2[i]

  		values[letter1] = (values[letter1] || 0) + 1
  		values[letter2] = (values[letter2] || 0) - 1
  	}
  // return true
  return Object.values(values).every((value) => value === 0)
}


console.log(validAnagram("aaz", 'aa')) // should return false
console.log(validAnagram("zaa", 'aaz')) // should return true
console.log(validAnagram("anagram", 'nagarma')) // should return true