
const findMissingWords = (base, target) => {
	base = base.split(' ')
	target = target.split(' ')

	return base.reduce((acc, val) => {
		return base.filter(item => {
			return !target.includes(item)
		})
	})
}


const s = 'I am using HackerRank to improve programming'
const t = 'am HackerRank to improve'

const t1 = performance.now()
console.log(findMissingWords(s, t))
const t2 = performance.now()
console.log(`Time elapsed: ${t2-t1} ms`)




