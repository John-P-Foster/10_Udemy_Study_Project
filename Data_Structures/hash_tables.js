/**
 * Pros of a Hash Table
 *  - Can have looks ups, deletes, and insertions that are O(1).
 *  - Keys and values can typically be any kind of data object. 
 * Cons of a Hash Table
 *  - collisions: Can reduce the effiency of the hash table all the way down to O(n)
 *      - Collisions are fixed with linked lists, but incease the O(n)
 * 
 */


let user = {
    age: 54, 
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhh!');
    }
}

user.spell = 'abra kadabra'; 


/**
 *  Maps: Allow you to save any data type as a key in JavaScript
 *  - Maps maintain insertion order
 */

const map = new Map(); 

/**
 *  Sets: Stores only the keys
 *  - No duplicates. 
 */

const set = new Set(); 

/**
 * Creating a Hash table in JavaScript
 */

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    // by writing a function with the _ it marks the function as private
    _hash(key) {
        let hash = 0; 
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash; 
    }

    set(key, value){
        let location = this._hash(key)
        
        if (!this.data[location]) {
            this.data[location] = [];
            this.data[location].push([key, value]);
       }
       this.data[location].push(key, value);
    }

    get(key, value){
        let location = this._hash(key);
        const currentBucket = this.data[location];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i ++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]; 
                }
            }
        }
        return undefined; 
        
    }

    // this doesn't get nested keys in the array...
    keys(){ 
        const keysArray = []; 
        for(let i = 0; i < this.data.length; i ++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0]); 
            }
        }
        return keysArray
    }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
// console.log(myHashTable.get('grapes')); 

/**
 *  Practice problems with Hash Tables
 * 
 * Google Question: 
 *  Given an array = [2,5,1,2,3,5,1,2,4]: -> returns 2
 *  Given an array = [2,1,1,2,3,5,1,2,4]: -> returns 1
 *  Given an array = [2,3,4,5]: -> returns undefined
 */

let test1 = [2,5,1,2,3,5,1,2,4];
let test2 = [2,1,1,2,3,5,1,2,4];
let test3 = [2,3,4,5];

function findDuplicates(array){
    let map = {};

    for (let i = 0; i < array.length; i++){ // O(a)
        if(!map[array[i]]){
          map[array[i]] = true;   
        }else{
            return array[i]; 
        }
    }
    return undefined; 
}

console.log(findDuplicates(test1));
console.log(findDuplicates(test2));
console.log(findDuplicates(test3));