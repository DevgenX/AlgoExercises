const validAnagram = (str1,str2) => {	
	// edge case, check if both lengths are equal
	if(str1.length !== str2.length) return false;
	// declare an empty object to store the values 
  	let values = {} 
  	// loop through the first string, count the frequency
  	for(let i = 0; i < str1.length; i++) {
  		let letter = str1[i]
  		values[letter] ? values[letter] += 1 : values[letter] = 1
  	}
  	// loop through the second string, count the frequency
  	for(let i = 0; i < str2.length; i++) {
  		let letter = str2[i]
  		if(!values[letter]) {
  			return false
  		}else {
  			values[letter] -= 1
  		}
  	}
  return true
}


// console.log(validAnagram("aaz", 'aa')) // should return false
// console.log(validAnagram("zaa", 'aaz')) // should return true
console.log(validAnagram("anagram", 'nagarma')) // should return true
