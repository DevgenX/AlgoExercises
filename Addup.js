const addUp = (n) => {
	return n * (n + 1) / 2
}


const t1 = performance.now()
addUp(1000000)
const t2 = performance.now()

console.log(`Time elapsed ${(t2 - t1) } ms`)

const addUpTwo = (n) => {

	let total = 0;

	for(let i = 0; i < n; i++) {
		total+=i
	}

	return total;
}

const t3 = performance.now()
addUpTwo(1000000)
const t4 = performance.now()
console.log(`Time elapsed ${(t4 - t3) } ms`)