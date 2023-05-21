class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class Queue {
	constructor() {
		this.first = null 
		this.last = null
		this.size = 0
	}
	enqueue(val) {
		let newValue = new Node(val)
		if(!this.first) {
			this.first = newValue
			this.last = newValue
		}else {
			this.last.next = newValue 
			this.last = newValue
		}
		return ++this.size // return the size of the queue
	}
	dequeue(){
		if(!this.first) return null

		let temp = this.first

		if(this.size === 1) {
			this.last = null
		}
		this.first = this.first.next 
		this.size--
		return temp.val
	}

}

q = new Queue()
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.dequeue()
q.dequeue()
console.log(q.dequeue())
console.log(q.dequeue())


