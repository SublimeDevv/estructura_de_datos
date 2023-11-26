class Node {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}
class Stack {
  constructor() {
    this.stack = null;
  }
  push(element) {
    let head = this.stack;
    let newNode = new Node(null, element);
    if (!head) {
      this.stack = newNode;
    } else {
      newNode.next = head;
      this.stack = newNode;
    }
  }
  pop() {
    let head = this.stack;
    if (!head) return "Stack is empty!";
    this.stack = head.next;
    return head.value;
  }
  peek() {
    if (!this.stack) return "Stack is empty!";
    return this.stack.value;
  }
}

const lista = new Stack();
lista.push(1);
lista.push(2);
lista.push(3);
lista.push(4);
lista.push(5);
lista.push(6);

console.log(lista.peek());
lista.pop()

console.log(lista);
