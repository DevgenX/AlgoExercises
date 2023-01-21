// Using reduce

const findShortestString = (arr) => {
	
	return arr.reduce((shortest, current) => {
		return shortest.length < current.length ? shortest : current
	})
}

const arr1 = ['aaa', 'a', 'bbb', 'cdds', 'wefewfwef', 'wefwefewfewf'] // should log : a
const t1 = performance.now()
console.log(findShortestString(arr1))
const t2 = performance.now()
console.log(`Time elapsed ${t2-t1} ms`)


const findShortestString2 = (arr) => {
	let shortest = arr[0]
	for(let i = 1; i < arr.length; i++) {
		if(arr[i].length < shortest.length) {
			return arr[i]
		}else {
			return shortest
		}
	}
}
const arr2 = ['aaa', 'a', 'bbb', 'cdds', 'wefewfwef', 'wefwefewfewf'] // should log : a
const t3 = performance.now()
console.log(findShortestString2(arr2))
const t4 = performance.now()

console.log(`Time elapsed ${t4-t3} ms`)







