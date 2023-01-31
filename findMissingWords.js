
const findMissing = (base, target) => {
	base = base.split(' ')
	target = target.split(' ')

	return base.reduce((acc, val) => {
		return base.filter(item => {
			return !target.includes(item)
		})
	})
}







