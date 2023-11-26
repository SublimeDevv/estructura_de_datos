
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype = {
  //contructor
  constructor: BinarySearchTree,

  add: function (value) {
    //Crea un nuevo nodo y se le asigna un valor
    var node = {
      value: value,
      left: null,
      right: null,
    };

    var current;
    //Cuando no hay nodos en el árbol
    if (this.root === null) {
      this.root = node;
    } else {
      current = this.root;
      while (true) {
        //si el nuevo valor es menor que el valor del nodo actual, ir a la izq
        if (current && value < current.value) {
          //si no hay rama izquierda, insertar el nodo
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (current && value > current.value) {
          //si no hay rama derecha, insertar el nodo
          if (current.rigth === null) {
            current.rigth = node;
            break;
          } else {
            current = current.rigth;
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

    // helper function
    function inOrder(node) {
      if (node) {
        // traverse the left subtree
        if (node.left !== null) {
          inOrder(node.left);
        }
        // call the process method on this node
        process.call(this, node);

        // traverse the right subtree
        if (node.right !== null) {
          inOrder(node.right);
        }
      }
    }

    // Iniciar con el nodo raíz
    inOrder(this.root);
  },

  remove: function (value) {
    var found = false,
      parent = null,
      current = this.root,
      childCount,
      replacement,
      replacementParent;

    // Asegurarse que hay un nodo para buscar
    while (!found && current) {
      // si el valor es menor que el nodo actual o current, ir a la izquierda
      if (value < current.value) {
        parent = current;
        current = current.left;

        // si el valor es mayor que el nodo actual o current, ir a la derecha
      } else if (value > current.value) {
        parent = current;
        current = current.right;

        // si el valor es igual, encontrado!
      } else {
        found = true;
      }
    }

    // solo ejecutar si el nodo es encontrado!
    // only proceed if the node was found
    if (found) {
      // figure out how many children
      childCount =
        (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

      // special case: the value is at the root
      if (current === this.root) {
        switch (childCount) {
          // other cases removed to save space

          // two children, little work to do
          case 2:
            // new root will be the old root's left child
            //...maybe
            replacement = this.root.left;

            // find the right-most leaf node to be
            // the real new root
            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            // it's not the first node on the left
            if (replacementParent !== null) {
              // remove the new root from it's
              // previous position
              replacementParent.right = replacement.left;

              // give the new root all of the old
              // root's children
              replacement.right = this.root.right;
              replacement.left = this.root.left;
            } else {
              // just assign the children
              replacement.right = this.root.right;
            }

            // officially assign new root
            this.root = replacement;

          // no default
        }

        // non-root values
      } else {
        switch (childCount) {
          // other cases removed to save space

          // two children, a bit more complicated
          case 2:
            // reset pointers for new traversal
            replacement = current.left;
            replacementParent = current;

            // find the right-most node
            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            replacementParent.right = replacement.left;

            // assign children to the replacement
            replacement.right = current.right;
            replacement.left = current.left;

            // place the replacement in the right spot
            if (current.value < parent.value) {
              parent.left = replacement;
            } else {
              parent.right = replacement;
            }

          // no default
        }
      }
    }
  },

  size: function () {
    var length = 0;

    this.traverse(function (node) {
      length++;
    });

    return length;
  },

  toArray: function () {
    var result = [];

    this.traverse(function (node) {
      result.push(node.value);
    });

    return result;
  },

  toString: function () {
    return this.toArray().toString();
  },
};

var tree = new BinarySearchTree();

tree.add(7);

tree.add(6);

tree.add(4);

tree.add(2);

tree.add(3);

tree.add(10);

// const nodo = tree.add(15);
// tree.traverse()
tree.traverse(function(tree) {
    console.log(tree.value)
})
