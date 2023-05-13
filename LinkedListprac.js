// Create a linked list with push, pop, shift, unshift, get, set, insert and remove

class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		// create a new node called val
		let newNode = new Node(val)
		// check if the head exist
		if(!this.head) {
			this.head = newNode 
			this.tail = this.head
			// if it does, add a value after the tail
			// update the value of the tail
		}else {
			this.tail.next = newNode
			this.tail = newNode 
		}
		// increment the length
		// return the whole list
		this.length++
		return this
	}
	pop(){
		if(!this.head) return undefined
		let current = this.head 
		let newTail = current 

		while(current.next) {
			newTail = current
			current.next = current
		}
		//  this.tail to be the last tail
		// set the this.tail.next to be null to remove it
		this.tail = newTail 
		this.tail.next = null 
		this.length-- 
		// edge cases
		if(this.length === 0) {
			this.head = null
			this.tail = null
		}
		// remove the val we removed
		return current
	}
	shift() {
		if(!this.head) return undefined 
			// store the this.head value to a variable
			let currentHead = this.head 
		// set the new value of head to be the next value of the currentHead
			this.head = currentHead.next
			// decrement the count
			this.length--
			// check the length of the list, if 0, let tail be null 
			// needed cuz we only remove the head, it will assign the tail value to be Node
		if(this.length === 0) {
			this.tail = null
		}
		// return what was removed
		return currentHead
	}
	unshift(val) {
		// create a new value using the Node
		const newValue = new Node(val)
		// check if there are no values for head and tail
		if(!this.head) {
			this.head = newValue
			this.tail = this.head
		}else {
			// if there, store the prevHead
			let prevHead = this.head 
			// let the next value after the newVal be the prevHead
			newValue.next = prevHead 
			// update the this.head value to be the newVal
			this.head = newValue
		}
		// increment the length
		this.length++
		// return the list
		return this
	}
	get(index) {
		if(index < 0 || index > this.length) return null
		let counter = 0;
		let current = this.head 

		while(counter !== index) {
			current = current.next 
			counter++
		}
		return current
	}
	set(index, val) {
		// check if the value on the getIndex does exist, if not false
		if(!this.get(index)) return false
		// get the value in the index
		const getValue = this.get(index)
		// update the value from the result of getValue func
		getValue.val = val
		// return the list 
		return this 
	}
	insert(index, val) {
	if(index < 0 || index > this.length) return undefined
	if(index === this.length) return !!this.push(val)
	if(index === 0) return !!this.unshift(val)
	let newValue = new Node(val)
	// we get the left side of the index
	let prev = this.get(index - 1)
	// we get the right side of the index
	let temp = prev.next 
	// set the value of prev.next the new val to insert it
	prev.next = newValue 
	// the next value or right side of the new val is the temp/prev next of the val
	newValue.next = temp
	// increment the length of the list
	this.length++
	}
	remove(index) {
		if(index < 0 || index > this.length) return undefined 
		if(index === this.length - 1) return this.pop()
		if(index === 1) return this.shift()
		// get the left side of the index
		let prevNode = this.get(index - 1)
		// remove the value of the index, prevNode is left side of the index
		let removedVal = prevNode.next 
		// Update the values, the left side of the index has the next val of the value removed
		prevNode.next = removedVal.next
		// decrement the count
		this.length--
		// return the removed value
		return removedVal
	}
}


// list = new LinkedList
// console.log(list.push(3))
// console.log(list.shift())
// console.log(list)

