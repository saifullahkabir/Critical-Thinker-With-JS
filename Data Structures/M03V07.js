class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //* O(1)
  append(value) {
    const newNode = new Node(value);

    // if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  //* O(1)
  prepend(value) {
    const newNode = new Node(value);

    // if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the linked list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  //* Best case = O(1)
  //* Worst case = O(n)
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("Index out of bound");
      return undefined;
    }

    // if the insert is in the start of the linked list
    if (index === 0) {
      return this.prepend(value);
    }

    // if the insert is in the end of the list
    if (index === this.length) {
      return this.append(value);
    }

    // if the insert is in the middle
    // find the leading node

    const leadingNode = this._traverseToIndex(index - 1);
    const holdingNode = leadingNode.next;

    const newNode = new Node(value);

    leadingNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
  }

  //* Best case = O(1)
  //* Worst case = O(n)
  remove(index) {
    if (index === 0) {
      const removedItem = this.head.value;

      this.head = this.head.next;

      if (this.length === 1) {
        this.tail = null;
      }

      this.length--;

      return removedItem;
    }

    const leadingNode = this._traverseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;

    leadingNode.next = nodeToRemove.next;

    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }

    return nodeToRemove.value;
  }

  // private helper method(private indicate symbol : _ )
  _traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    //* O(n)
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  print() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(" -> "), "-> null");
  }
}

const linkedList = new LinkedList();

// linkedList.append("A"); //* 0
// linkedList.append("B"); //* 1
// linkedList.append("C"); //* 2

// linkedList.print();

// linkedList.remove(2);
// linkedList.remove(1);
// linkedList.remove(0);

// linkedList.print();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.print();

linkedList.prepend(50);

linkedList.print();

