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

        get(index){
            return this.data[index]
        }

        push(item){
            this.data[this.length] = item
            this.length++; 
            return this.length; 
        }

        pop(){
            const lastItem = this.data[this.length - 1];
            delete this.data[this.length-1]; 
            this.length--; 
            return lastItem;
        }

        delete(index){
            const item = this.data[index]; 
            this.shiftItems(index); 
        }

        shiftItems(index) {
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

     console.log(newArray);