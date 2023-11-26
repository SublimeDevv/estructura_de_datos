function binarySearchTree() {
  this.root = null;
}

binarySearchTree.prototype = {
  constructor: binarySearchTree,

  add: function (value) {
    var node = {
      value: value,
      left: null,
      right: null,
    };

    var current;
    if (this.root === null) {
      this.root = node;
    } else {
      current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  },
  contains: function (value) {
    var found = false;
    current = this.root;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  },

  traverse: function (process) {
    function inOrder(node) {
      if (node) {
        if (node.left !== null) {
          inOrder(node.left);
        }

        process.call(this, node);

        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }

    inOrder(this.root);
  },

  remove: function (value) {
    
  },
  size: function () {},
  toArray: function () {},
  toString: function () {},
};


agregar, eliminar, buscar, mostrar MOSTRAR EN FORMA DE ARBOLITO

containts: pasa saber si existe