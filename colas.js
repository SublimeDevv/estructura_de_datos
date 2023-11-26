class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.queue.shift();
  }
  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.queue[0];
  }
  // helper method
  isEmpty() {
    return !this.queue.length;
  }
}

const cola = new Queue();
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);
cola.enqueue(4);
cola.enqueue(5);
console.log(cola);
console.log("Valor en la cima: ", cola.peek());
console.log("Valor eliminado: ", cola.dequeue());
console.log(cola)

