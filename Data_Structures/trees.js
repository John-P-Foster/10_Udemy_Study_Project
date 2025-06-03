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
 */

function BinaryTreeNode(value){
    this.value = value; 
    this.left = null; 
    this.right = null;
}