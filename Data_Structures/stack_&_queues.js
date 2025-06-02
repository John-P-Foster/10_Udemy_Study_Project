/**
 * Stacks and Queues
 *  - Leniar data structures
 *  - Typically used for push and pop functions. 
 * 
 * Stacks
 *  - LIFO (Last in First out)
 *  - Main methods
 *      - Pop  O(1)
 *      - Push O(1)
 *      - Peek O(1)
 *      - Lookup (not common) O(n)
 * 
 * Queues
 *  - FIFO (First in First Out)
 *  - Main Methods
 *      - enqueue O(1)
 *      - dequeue O(1)
 *      - Peek O(1)
 *      - Lookup (not common) O(n)
 */

/**
 * How Java Scripts Works
 * 
 *  - Java Script is a single threaded language that can be non-blocking
 *      - This means it has only one call stack and can only do one thing at time. 
 *      - This prevents dead locks. 
 * 
 * - Java is also a synchronous langauge. 
 *      - synchronous programing: Function are exicuted in the call order and each operation has 
 *      to be completed before the next one can start. 
 * 
 * - Non-blocking: Functions don't have to wait for an async function to finish.
 *      - Controlled in the Java run time enviorment.
 *      asynchronous: Starts the function than hands off the operation to the web API,
 *      once completed, the web API pushes the result onto the call back que. 
 * 
 *  - v8 engine in chrome 
 *      - Two parts
 *          * The memory heap
 *          * The Call stack
 */

// Custom Stack

class Node {
    constructor(value){
        this.value = value;
        this.next = null; 
    }
}

class Stack {
    constructor(){
        this.top = null; 
        this.bottom = null; 
        this.length = 0; 
    }

    peek(){
        return this.top.value;
    }

    push(value){
        let node = new Node(value);
        node.next = this.top;
        this.top = node; 
        this.length ++; 
    }

    pop(){
        let temp = this.top;
        this.top = this.top.next; 
        this.length --; 
        return temp.value; 
    }
}

let myStack = new Stack();

myStack.push(5);
myStack.push(4);
myStack.push(3);

console.log(myStack.pop())