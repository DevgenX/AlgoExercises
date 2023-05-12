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
		return this
	}
	insert(index, val) {
		if(index < 0 || index > this.length) return false 
		if(index === this.length) !!this.push(val)
		if(index === 0) return !!this.unshift(val)
		let newNode = new Node(val)
		let prev  = this.get(index - 1)
		let temp = prev.next
		prev.next = newNode
		newNode.next = temp
		this.length++
	}
	remove(index) {
		if(index < 0 || index > this.length) return undefined 
		if(index === length - 1) return this.pop()
		if(index === 0) return this.shift()
		let prevNode = this.get(index - 1)
		let removedVal = prevNode.next 
		prevNode.next = removedVal.next 
		this.length--
		return removedVal
	}
	reverse() {
	let node = this.head 
	this.tail = this.head
	this.head = node 
	let next;
	let prev = null ;

	for(let i = 0; i < this.length; i++) {
		next = node.next
		node.next = prev;
		prev = node 
		node = next 
	}
	return this
	}
}