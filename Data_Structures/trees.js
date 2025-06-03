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
 */

class BinaryTreeNode{
    constructor(value){
        this.value = value; 
        this.left = null; 
        this.right = null;
    }
}