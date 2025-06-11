const letters = ['a','e','w','g','k','y','j' ];
const basket = [2, 56, 34, 2, 5, 7, 8];

// JavaScripts sort method converts numbers to characters and compairs the values.
console.log(letters.sort())
// console.log(basket.sort(function(a, b){
//     return a - b; 
// }));

/**
 * Bubble Sort
 *  - Conducts comparisons between two values and switches the place of each value when required. 
 *  - Requires a lot of comparisons as the values are bubbled up to the top. 
 */

function bubbleSort(array){
    let length = array.length;
    let loops = 0; 
    
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(array[j] > array [j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp; 
            }
            loops ++;
        }
        length --; 
        loops ++;
    }
     console.log('Loops Ran: ' + loops)
}

// bubbleSort(basket);
// console.log(basket); 

/**
 * Selection Sort 
 */