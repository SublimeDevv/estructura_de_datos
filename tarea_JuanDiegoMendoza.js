class Node {
  constructor(next, value) {
    this.next = next;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.queue = null;
  }

  enqueue(element) {
    let head = this.queue;
    let newNode = new Node(null, element);

    if (!head) {
      this.queue = newNode;
    } else {
      let traverseNode = head;
      while (traverseNode.next) {
        traverseNode = traverseNode.next;
      }
      traverseNode.next = newNode;
    }
  }

  imprimir() {
    let head = this.queue;
    let nodo = head;
    while (nodo) {
      console.log(nodo.value);
      nodo = nodo.next;
    }
    return "--Fin de la cola--";
  }

  dequeue() {
    let head = this.queue;
    if (!head) return "Cola vacía!";
    this.queue = head.next;
    return head.value;
  }

  peek() {
    if (!this.queue) return "Cola vacía!";
    return this.queue.value;
  }

  size() {
    const contador = (node) => {
      if (!node) return 0;
      return 1 + contador(node.next);
    };
    return contador(this.queue);
  }

  firstAndLastValue() {
    let head = this.queue;
    if (!head) return "Sin elementos en la col";

    let last = head;
    while (last.next) {
      last = last.next;
    }

    return (
      "Primer valor de la cola: " +
      head.value +
      "\n" +
      "Último valor de la cola: " +
      last.value
    );
  }

  peekLast() {
    const last = (node) => {
      if (!node.next) {
        return node;
      }
      return last(node.next);
    };

    let head = this.queue;
    if (!head) {
      return null;
    }

    return last(head);
  }
}

const myQueue = new Queue();
myQueue.enqueue(45);
myQueue.enqueue(65);
myQueue.enqueue(75);
myQueue.enqueue(85);
console.log(myQueue);
console.log(myQueue.imprimir());
console.log(myQueue.dequeue());
console.log("Primer nodo en la cola:" + myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue);

// TAREA: Implementar el método que imprime la cantidad de elemtntos y el primer y último valor de la cola
console.log("---------------------");
console.log("Elementos en la cola: " + myQueue.size());
console.log(myQueue.firstAndLastValue());
