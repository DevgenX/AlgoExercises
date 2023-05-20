class Node {
	constructor(value) {
		this.value = value 
		this.next = null
	}
}


class Stack {
	constructor() {
		this.first = null
		this.last = null 
		this.size = 0
	}

	push(val){
		let newNode = new Node(val)

		if(!this.first) {
			this.first = newNode 
			this.last = newNode 
		}else {
			let temp = this.first 
			this.first = newNode 
			this.first.next = temp
			// newNode.next = temp
		}
		return ++this.size
	}
	pop() {
		if(!this.first) return null 

		let temp = this.first 

		if(this.size === 0) {
			this.first = null
			this.last = null
		}else {
			this.first = temp.next
		}
		this.size--
		return temp.value
	}
}

stack = new Stack()

console.log(stack.push('FIRST'))
console.log(stack.push('SECOND'))
console.log(stack.push('THIRD'))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
