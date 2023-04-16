const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    let newNode = new Node(data);
    function addNode(node, newNode) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
        }
        else {
          addNode(node.left, newNode);
        }
      }
      else {
        if (!node.right) {
          node.right = newNode;
        }
        else {
          addNode(node.right, newNode);
        }
      }
    }
    if (!this.rootNode) {
      this.rootNode = newNode;
    }
    else {
      addNode(this.rootNode, newNode);
    }
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        return hasNode(node.left, data)
      }
      else {
        return hasNode(node.right, data)
      }
    }
   return  hasNode(this.rootNode, data)
  }
  find(data) {
    let value = this.rootNode;
    while (value.data !== data) {
        if (data < value.data) {
             value = value.left
        } else {
            value = value.right
        }
        if (!value) {
            return null
        }
    }
    return value;
}

remove(data) {
  function removeNode(node, data) {
    if (!node){
      return null;
    } 
    if (data < node.data) {
      node.left = removeNode(node.left, data)
    } 
    else if (data > node.data) {
      node.right = removeNode(node.right, data)
    } 
    else {
      if (!node.left && !node.right) {
        return null
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }

      let minRight = node.right;
      while(minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = removeNode(node.right, minRight.data);
      return node;
    }
    return node;
  }

  this.rootNode = removeNode(this.rootNode, data);
}

min() {
  let node = this.rootNode
  if (!this.rootNode) {
    return
  }
  while (node.left) {
    node = node.left
  }
  return node.data
}

max() {
  let node = this.rootNode
  if ( !this.rootNode) {
    return
  }

  while (node.right) {
    node = node.right
  }
  return node.data
}
}

module.exports = {
  BinarySearchTree
};