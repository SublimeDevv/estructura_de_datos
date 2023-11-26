
class nodoArbol {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// crear arbol binario

const raiz = new nodoArbol(1);
raiz.left = new nodoArbol(2);
raiz.right = new nodoArbol(3);
raiz.left.left = new nodoArbol(4);
raiz.left.right = new nodoArbol(5);
raiz.right.left = new nodoArbol(6);
raiz.right.right = new nodoArbol(7);

/* function inorderTraversal(node) {
  if (node === null) {
    return [];
  }

  const result = [];
  result.push(...inorderTraversal(node.left));
  result.push(node.value);
  result.push(...inorderTraversal(node.right));
  return result;
}
 */
const result = flatten(raiz);
console.log(result);

function inorderTraversal(root) {
  let stack = [];
  let results = [];
  let current = [];

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    results.push(current.value);
    current = current.right;
  }
  return results;
}

function flatten(root) {
  let queue = [];
  preOrder(root, queue);
  let curr = queue.shift();
  while (queue.length > 0) {
    let next = queue.shift();
    curr.left = null;
    curr.right = null;
    curr = next;
  }
  return root;
}

function preOrder(node, queue) {
  if (!node) return;
  queue.push(node);
  preOrder(node.left, queue);
  preOrder(node.right, queue);
}

// console.log(root);
// const result = flatten(raiz);
// console.log(result);
 