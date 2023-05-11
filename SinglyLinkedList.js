class Node {
	constructor(val) {
		this.next = null;
		this.val = val 
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null
		this.length = 0
	}

	push(val) {
		var newNode = new Node(val)
		if(!this.head) {
			this.head = newNode 
			this.tail = this.head
		}else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}
	pop() {
		if(!this.head) return undefined
		let current = this.head
		let newTail = current

		while(current.next) {
			newTail = current 
			current = current.next;
		}
		this.tail = newTail
		this.tail.next = null
		this.length--
		if(this.length === 0) {
			this.head = null;
			this.tail = null
		}
		return current
	}
	shift() {
		if(!this.head) return undefined 
		const currHead = this.head
		this.head = currHead.next 
		this.length--
		if(this.length === 0) {
			this.tail = null
		}
		return currHead
	}
	unshift(val) {
		const newVal = new Node(val)
		if(!this.head) {
			this.head = newVal;
			this.tail = newVal
		} else {
			let prevHead = this.head 
			newVal.next = prevHead
			this.head = newVal
		}
		this.length++
		return this
	}
	get(index) {
		if(index < 0 || index >= this.length) return null 
		var counter = 0;
		var current = this.head
		while(counter !== index) {
			current = current.next
			counter++;
		}
		return current
	}
	set(index, val) {
		if(!this.get(index)) return false; 
		const getValue = this.get(index)
		getValue.val = val
		this.length++
		return this
	}
}


list = new SinglyLinkedList()

console.log(list.push('Goodbye'))
console.log(list.push('Hi'))
console.log(list.push(1))
console.log(list.push(2))
console.log(list.push(3))
console.log(list.set(3, 5))
console.log(list.get(3).val)





