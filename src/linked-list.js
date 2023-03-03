class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    let node = new LinkedListNode(data)
    let current
    if (this.head ==null) {
      this.head = node
    } 
    else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    } 
    this.size++
  }

  remove(key) {

    let current = this.head
    let prev = null

    while (current != null) {
      if (current.data.key === key) {
        if (prev === null) {
          this.head = current.next
        } else {
          prev.next = current.next
        }
        this.size--
        return current
      }
      prev = current
      current = current.next
    }
    return -1
  }

  contains(key) {
    let node = this.head
    while(node) {
      if (node.data.key === key) {
        return node.data
      } else {
        node = node.next
      }
    }
    return null
  }

  toString() {

    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    // console.log(str);

    return str
  }
}

// LinkedListNode.LinkedList.size