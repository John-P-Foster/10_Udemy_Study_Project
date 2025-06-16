/**
 *  Trees
 *  - Built with nodes
 *  - A linked list is a type of tree, but one with only one path. 
 *  - There are many types of trees that can be used in different use cases.
 * 
 */

/**
 * Binary tree
 *  - A tree were each parent has only two children 
 * 
 *  - Perfect Binary Tree
 *      - All nodes have either zero or two children 
 *      - The bottom row has all nodes full
 *      - Each level has double the nodes of the level above it. 
 *      - the number of nodes on each level is equal to the sum of all the nodes above it plus 1.
 *      - Can calculate the number of nodes for a given level by raising it to 2. 
 * 
 *  - Full Binary Tree
 *      - All node have either zero or two children. 
 * 
 * - Binary Search Tree
 *      - Preserves relationships
 *      - Search, insert and delete are done in O(log N)
 *      - Rules
 *          - All child node to the right must be greater than the current node
 *          - All values to the left must be less than then the parrent
 */

class Node{
    constructor(value){
        this.value = value; 
        this.left = null; 
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null; 
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root ===  null){
            this.root = newNode;
            return; 
        }
        let currentNode = this.root; 
        while(true){
            if(newNode.value <= currentNode.value){
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    return; 
                }
                currentNode = currentNode.left; 
            }else{
                if(currentNode.right === null){
                    currentNode.right = newNode; 
                    return; 
                }
                currentNode = currentNode.right; 
            }
        }

    }

    lookup(value){
        if(this.root === null){ return null};

        let currentNode = this.root; 

        while(currentNode){
            if(currentNode.value === value){return currentNode;}
            if(currentNode.value < value){
        
                currentNode = currentNode.right;
            }else{
           
                currentNode = currentNode.left; 
            }
        }
        return null; 
    }

    remove(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
          if (value < currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.left;
          } else if (value > currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.right;
          } else if (currentNode.value === value) {
            //We have a match, get to work!
    
            //Option 1: No right child:
            if (currentNode.right === null) {
              if (parentNode === null) {
                this.root = currentNode.left;
              } else {
                //if parent > current value, make current left child a child of parent
                if (currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.left;
    
                  //if parent < current value, make left child a right child of parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.left;
                }
              }
    
              //Option 2: Right child which doesnt have a left child
            } else if (currentNode.right.left === null) {
              currentNode.right.left = currentNode.left;
              if (parentNode === null) {
                this.root = currentNode.right;
              } else {
                //if parent > current, make right child of the left the parent
                if (currentNode.value < parentNode.value) {
                  parentNode.left = currentNode.right;
    
                  //if parent < current, make right child a right child of the parent
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = currentNode.right;
                }
              }
    
              //Option 3: Right child that has a left child
            } else {
              //find the Right child's left most child
              let leftmost = currentNode.right.left;
              let leftmostParent = currentNode.right;
              while (leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
              }
    
              //Parent's left subtree is now leftmost's right subtree
              leftmostParent.left = leftmost.right;
              leftmost.left = currentNode.left;
              leftmost.right = currentNode.right;
    
              if (parentNode === null) {
                this.root = leftmost;
              } else {
                if (currentNode.value < parentNode.value) {
                  parentNode.left = leftmost;
                } else if (currentNode.value > parentNode.value) {
                  parentNode.right = leftmost;
                }
              }
            }
            return true;
          }
        }
      }

      // BFS lession 
      breadthFirstSearch(){
        let currentNode = this.root; 
        let list = [];
        let queue = []; 
        queue.push(currentNode);

        while(queue.length > 0){
          currentNode = queue.shift(); 
          list.push(currentNode.value); 
          if(currentNode.left){
            queue.push(currentNode.left);
          }
          if(currentNode.right){
            queue.push(currentNode.right);
          }
        }
        return list; 
      }

      breadthFirstSearchR(queue, list){
        if(!queue.length){
          return list; 
        }

        let currentNode = queue.shift(); 
        list.push(currentNode.value);
        if(currentNode.left){
          queue.push(currentNode.left);
        }
        if(currentNode.right){
          queue.push(currentNode.right);
        }

        return(this.breadthFirstSearchR(queue, list))
      }
}

let tree = new BinarySearchTree(); 

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(20));
// tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
//console.log(tree.lookup(20));
//     9
//  4     20
// 1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchR([tree.root], []));