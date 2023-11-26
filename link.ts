class Node<T> {
  next: Node<T> | null;
  value: T;
  constructor(next: Node<T> | null, value: T) {
    this.next = next;
    this.value = value;
  }
}

class Stack<T> {
  private stack: Node<T> | null;
  constructor() {
    this.stack = null;
  }
  push(element: T): void {
    let head = this.stack;
    let newNode = new Node<T>(null, element);
    if (!head) {
      this.stack = newNode;
    } else {
      newNode.next = head;
      this.stack = newNode;
    }
  }
  pop(): T | string {
    let head = this.stack;
    if (!head) return "Stack is empty!";
    this.stack = head.next;
    return head.value;
  }
  peek(): T | string {
    if (!this.stack) return "Stack is empty!";
    return this.stack.value;
  }
}