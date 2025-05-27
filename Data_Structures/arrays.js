/* 
 Arrays are stored in contiguous memory 
    - making them the most compact data structure 
    - look ups are done in constant time O(1). 
    - searchs are in linear time O(n).
    - pushes are in constant time O(1).
*/

    const strings = ['a', 'b', 'c', 'd'];

    // push
    strings.push('e'); // O(1)

    // pop
    strings.pop(); // O(1)

    // unshift
    strings.unshift('x') // O(n)

    // splice 
    strings.splice(2, 0, 'Johnny') // O(n)

    // console.log(strings) 


/*
 Static VS Dynamic Array
    Statick Arrays: Have a set size 
    Dynamic Arrays: Let you copy and rebuild an array at a new memory location with more room when adding elements.
        - Dynamic arrays push function is normally O(1), but if the memory space is filled the computer must copy
        the array to a new larger (2x) Memory location. This turns the push into an O(n) funciton. 
 */

/*
 Classes in Javascript

    reference type: Non - primitive type undefined by the programming language. 
    context: Where the program is at inside of an object. 
        - (this) used to point at the current object. 
    scope: Created everytime a new {} is created. Only knows about variables and function with-in a given scope 
    instantiation: Copies of an object. 
 */

    // instantiation 
    class Player{
        constructor(name, type){
            this.name = name; 
            this.type = type;
        }

        introduce(){
            console.log(`Hi I am a ${this.name}, I'm a ${this.type}`)
        }
    }

    class Wizard extends Player {
        constructor(name, type,){
            super(name, type);
        }
        play(){
            console.log(`Weee I'm a ${this.type}` );
        }
    }

    const wizard1 = new Wizard('Shelly', 'Healer');
    const wizard2 = new Wizard('Shawn', 'Dark Magic');

    // wizard1.introduce();

    /*
     How to build an Array in JavaScript
     */

     class MyArray {
        constructor(){
            this.length = 0; 
            this.data = {}; 
        }

        get(index){ // O(1)
            return this.data[index]
        }

        push(item){ // O(1)
            this.data[this.length] = item
            this.length++; 
            return this.length; 
        }

        pop(){ // O(1)
            const lastItem = this.data[this.length - 1];
            delete this.data[this.length-1]; 
            this.length--; 
            return lastItem;
        }

        delete(index){ // O(n)
            const item = this.data[index]; 
            this.shiftItems(index); 
        }

        shiftItems(index) { // O(n)
            for(let i = index; i < this.length - 1; i++){
                this.data[i] = this.data[i + 1]
            }
            delete this.data[this.length-1];
            this.length--;
        }
     }

     const newArray = new MyArray(); 
     newArray.push('hi');
     newArray.push('you');
     newArray.push('!');
     newArray.delete(0);
     newArray.push('are');
     newArray.push('nice');
     newArray.delete(1);

    //  console.log(newArray);

     // Treat any strings questions as an array question 

     /**
      * Reverse a string
      */

     function reverse(str){
        if(!str || str.length <2 || typeof Str !== 'string'){
            return 'Please pass a string'; 
        }

        reveresed = ''
        for(i = str.length - 1; i >= 0; i--){ // O(n)
            reveresed += str[i]; 
        }

        return reveresed;
     }

     test = 'does this work?';

    //  console.log(reverse(test));
    
    function reverse2(str){
        return str.split('').reverse().join(''); 
    }

    const reverse3 = str => [...str].reverse().join(''); 

    /**
     * Given two sorted arrays merge them into a new sorted array.
     */

    let array1 = [0, 3, 4, 31];
    let array2 = [4, 6, 30, 32, 38];

    function mergeSortedArrays(array1, array2) {  // O(a + b)
        mergedArray = [];
        maxLength = array1.length > array2.length ? array1.length - 1 : array2.length -1;
        index1 = 0; 
        index2 = 0; 
        
        while( index1 != array1.length || index2 != array2.length){
            if(array1[index1] <= array2[index2]){
                mergedArray.push(array1[index1]);
                index1++; 
            }
            else{
                mergedArray.push(array2[index2]);
                index2++; 
            }
        }
        return mergedArray; 
    }

    console.log(mergeSortedArrays(array1, array2));

