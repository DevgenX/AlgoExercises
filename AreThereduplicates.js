const areThereDuplicatesSet = (...args) => {
	return new Set(args).size !== args.length
}


const areThereDuplicatesBF = (...args) => {

	let values = {}

	for(let val in args) {
		values[args[val]] = (values[args[val]] || 0) + 1

	}

	for(let key in values) {
		if(values[key] > 1) return true;
	}

	return false;
}

function areThereDuplicatesPointers(...args) {
  // Two pointers
   const sortedArr = args.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);
    }
    return a - b;
  });

  let start = 0;
  let next = 1;
  while(next < sortedArr.length){
    if(sortedArr[start] === sortedArr[next]){
        return true
    }
    start++
    next++
  }
  return false
}

console.log(areThereDuplicatesPointers(1, 2, 3)) // false
console.log(areThereDuplicatesPointers(1, 2, 2)) // true 
console.log(areThereDuplicatesPointers('a', 'b', 'c', 'a'))// true 

console.log(areThereDuplicatesBF(1, 2, 3)) // false
console.log(areThereDuplicatesBF(1, 2, 2)) // true 
console.log(areThereDuplicatesBF('a', 'b', 'c', 'a'))// true

console.log(areThereDuplicatesSet(1, 2, 3)) // false
console.log(areThereDuplicatesSet(1, 2, 2)) // true 
console.log(areThereDuplicatesSet('a', 'b', 'c', 'a'))// true