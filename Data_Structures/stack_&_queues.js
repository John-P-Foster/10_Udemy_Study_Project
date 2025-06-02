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

    peek(){ //O(1)
        return this.top.value;
    }

    push(value){ //O(1)
        let newNode = new Node(value);
        if(this.length === 0){
            this.bottom = newNode; 
        }

        newNode.next = this.top;
        this.top = newNode; 
        this.length ++; 
    }

    pop(){ //O(1)
        if(!this.top){return null;}
        if(this.length === 0){this.bottom = null;}
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
console.log(myStack.pop())
console.log(myStack.pop())


class ArrayStack{
    constructor(){
        this.array = [];
        this.top = this.array[this.array.length -1]; 
        this.bottom = this.array[0]; 
    }

    peek(){
        return this.array[this.array.length - 1]
    }

    push(value){
        this.array.push(value);
    }

    pop(){
        return this.array.pop();
    }
}

let myArrayStack = new ArrayStack();
myArrayStack.push(5);
myArrayStack.push(4);
myArrayStack.push(3);

console.log(myArrayStack.pop())
console.log(myArrayStack.pop())
console.log(myArrayStack.pop())


class Queue {
    constructor(){
        this.first = null;
        this.last = null; 
        this.length = 0;
    }

    peek(){
        return this.first.value; 
    }

    enqueue(value){
        let newNode = new Node(value);
        
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode
            this.length ++;
            return; 
        }
        this.last.next = newNode; 
        this.last = newNode;
        this.length ++;
        return;
    }

    dequeue(){
        let temp = this.first;
        this.first = temp.next;
        this.length --; 
        return temp.value; 
    }

}   

const myQueue = new Queue();

myQueue.enqueue('matt');
myQueue.enqueue('mia');
myQueue.enqueue('frank');

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
