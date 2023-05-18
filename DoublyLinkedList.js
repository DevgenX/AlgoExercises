class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create a new node
    let newVal = new Node(val);
    // check if head or the length 0
    if (!this.head) {
      this.head = newVal;
      this.tail = newVal;
    } else {
      // [99, val] = val to be the tail
      this.tail.next = newVal;
      // set the prev tail to be the prev tail
      newVal.prev = this.tail;
      // set the newvalue as the current tail
      this.tail = newVal;
    }
    //increment the length of the list
    this.length++;
    // return the list
    return this;
  }
  pop() {
    // check if the list has length, if no return undefined
    if (!this.head) return undefined;
    // store the value of the tail
    let currentNode = this.tail;
    // if length is 1 then we pop, return both head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set the tail to be the node before the tail, currentNode is this.tail
      this.tail = currentNode.prev;
      //  set the value of the this.tail.next to be null to delete it
      this.tail.next = null;
      // remove the connection of the prevNode and newTail
      currentNode.prev = null;
    }
    // decrement the length of the list
    this.length--;
    // return the value we removed
    return currentNode;
  }
  shift() {
    // if there is no head, then nothing removed return undefined
    if (!this.head) return undefined;
    // store the value of the currentHead
    let currentHead = this.head;

    // if length is 1 then we called shift() set both properties to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // since we are removing, the next value after the item we removed will be the new head
      this.head = currentHead.next;
      // remove the previous or old head
      this.head.prev = null;
      // remove the connection between the removed node and new head
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }
  unshift(val) {
    let newVal = new Node(val);

    if (this.length === 0) {
      this.head = newVal;
      this.tail = newVal;
    } else {
      // unshift is to add infront, so [50,100] -> [val, 50, 100]
      this.head.prev = newVal;
      //[val, 50, 100] -> linking the nodes properly, this.head is the old head
      newVal.next = this.head;
      // update the head to be the new value
      this.head = newVal;
    }
    //increment the count
    this.length++;
    return this;
  }
  get(index) {
    // to make finding faster, we divide the whole length, and find the nearest to the index
    // edge case
    if (index < 0 || index >= this.length) return null;

    // get the midpoint
    let middle = Math.floor(this.length / 2);
    // create the count and current variables
    let count, current;
    // if index is less than the midpoint,
    // we start to look using the this.head and incrementing the count till the current is equal to the index
    if (index <= middle) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      // if index is greater than the midpoint
      // start the count in the last index of the list
      // start the loop in the tail then doing prev
      // decrement the count
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    // return the value
    return current;
  }
  set(index, val) {
    // set is to change the value that is in the index
    let getValue = this.get(index);
    // check if the value in the index exist
    if (getValue !== null) {
      // update the value of the index into what is passed-in
      getValue.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    // create a new Node
    let newValue = new Node(val);
    // get the left side of the index
    let prevNode = this.get(index - 1);
    // get the right value of the index
    let afterNode = prevNode.next;

    // assign the prevNode.next to ahve the value of the passed-in value
    prevNode.next = newValue;
    // update the connection (1, 5) [1,2,3,4] --> [1,5,2,3,4]
    newNode.prev = prevNode;
    // update the right side of the newValue to be the previous value in that index
    newValue.next = afterNode;
    // update the connection of the nodes
    afterNode.prev = newValue;
    // increment the count
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // get the index of the value we want to removremovedNode
    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // // set the next value of the previous left side of the index to be the next value of the number we removed
    // removedNode.prev.next = removedNode.next
    // // set the prev value of the previous right side of the index to be the prev value of the number we removed
    // removedNode.next.prev = removedNode.prev
    // // set the connections to be null
    removedNode.next = null;
    removedNode.prev = null;
    // decrement the list
    this.length--;
    // return the node we removed
    return removedNode;
  }
}

list = new DoublyLinkedList();
list.push(50);
list.push(25);
list.push(35);
list.remove(0);
console.log(list);
