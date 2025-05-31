/**
 * Linked List: Contains a set of nodes with two elements, the value and a pointer. 
 *  - The first node is called the head.
 *  - The last node is the tail. 
 *  - Null terminated. 
 *  - Must be transversed to find elements. 
 * 
 *   Java Script doesn't have built in linked list. 
 */

/**
 *  Pointer: A reference to anothe place in memory. 
 */

const obj1 = {a: true};
const obj2 = obj1; // <- this creates a pointer. 

/**
 *  When to use single and Doubly linked list? 
 *  Single
 *      - Single is a little faster and takes a little less memory.
 *      - Cannot be traversed in the opposite direction. 
 * 
 *  Doubly linked list
 *      - Can get the last node for deletions.
 *      - Can be transversed in the opposite direction
 *      - Allows for faster searching. 
 * 
 */


/**
 * Custom linked list
 */

class Node{
    constructor(value){
        this.value = value; 
        this.next = null; 
        this.prev = null; 
    }

}

class DoublyLinkedList {

    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head; 
        this.length = 1; 
    }

    append(value) { // O(1)
       const newNode = new Node(value); 
       this.tail.next = newNode; 
       newNode.prev = this.tail; 
       this.tail = newNode; 
       this.length ++; 
       return this; 
    }

    prepend(value){ // O(1)
        const newNode = new Node(value); 
        newNode.next = this.head; 
        this.head.prev = newNode;
        this.head = newNode; 
        this.length ++; 
        return this; 
    }

    printList(){
        const array = []; 
        let currentNode = this.head; 
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next; 
        }
        return array; 
    }

    insert(index, value){ // O(n)
        if(index >= this.length){
            return this.append(value); 
        } 
        if(index <= 0){
            return this.prepend(value); 
        }

        let newNode = new Node(value); 
        let currentNode = this.head; 

        for(let i = 1; i < index; i ++){
            currentNode = currentNode.next; 
        }
        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        currentNode.next = newNode;  
        this.length ++; 
    }

    remove(index){ // O(n)
        if(index > this.length || index < 0){
            return; 
        }

        let currentNode = this.head

        for(let i = 0; i < index-1; i ++){
            currentNode = currentNode.next; 
        }
        currentNode.next = currentNode.next.next; 
        currentNode.next.next.prev = currentNode;
    
        this.length --; 

    }

    reverse(){
        if(this.length === 1){
            return this.printList(); 
        }

        const reversedList = new DoublyLinkedList(0)

        let currentNode = this.head; 
        reversedList.head.value = this.head.value;

        for(let i = 0; i < this.length-1; i ++){
            currentNode = currentNode.next;
            reversedList.prepend(currentNode.value);
        }

        return reversedList.printList();
    }

    reverse2(){
        if(!this.head.next){
            return this.head;
        }

        let currentNode = this.head;

        const reversedList = new DoublyLinkedList(currentNode.value); 
        currentNode = currentNode.next;

        while(currentNode.next){
            const newNode = new Node(currentNode.value); 
            newNode.next = reversedList.head; 
            reversedList.head = newNode; 
            currentNode = currentNode.next; 
        }
        const newNode = new Node(currentNode.value); 
        newNode.next = reversedList.head; 
        reversedList.head = newNode; 
        return reversedList.printList();
    }

    reverseThisList(){
        if(!this.head.next){
            return this.head;
        }

        let first = this.head;
        let second = first.next; 

        while(second) {
            const third = second.next; 
            second.next = first; 
            first = second; 
            second = third;             
        }

        this.head.next = null; 
        this.tail = this.head;
        this.head = first; 
        return this.printList();
    }

    reverseNodeAgain(){
        if(!this.head.next){
            return this.head;
        }

        let prev = null;
        let current = this.head; 

        while(current){
           let next = current.next; 
           current.next = prev;
           prev = current;
           current = next; 
        }

        this.head.next = null; 
        this.tail = this.head; 

        this.head = prev;
    
        return this.printList();
    }
    
}

const myLinkedList = new DoublyLinkedList(10); 
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);

console.log(myLinkedList.printList());

console.log(myLinkedList.reverse());
console.log(myLinkedList.reverse2());
// console.log(myLinkedList.reverseThisList())
console.log(myLinkedList.reverseNodeAgain())