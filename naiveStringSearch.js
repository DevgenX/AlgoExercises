const stringSearch = (str, str2) => {

	let count = 0;

	for(let i = 0; i < str.length; i++) {

		for(let j = 0; j < str2.length; j++) {

			if(str2[j] !== str[i+j]) break;
			
			if(j === str2.length - 1) count++
		}
	}
	return count

}


console.log(stringSearch('owwomssomgzdomg', 'omg')) // should log : 2

