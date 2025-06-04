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