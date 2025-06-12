const letters = ['a','e','w','g','k','y','j' ];
//const basket = [5, 3, 4, 2, 1];

// JavaScripts sort method converts numbers to characters and compairs the values.
// console.log(letters.sort())
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
 *  - searches for the smallest item by keeping track of the smallest item seen
 *    and moves the smallest item to the current loop index. 
 */

function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let smallestIndex = i; 
        for(let j = i; j < array.length; j ++){
            if(array[smallestIndex] > array[j]){
              smallestIndex = j;
            }
            console.log(array);
        }
        if(smallestIndex != i){
            let temp = array[i];
            array[i] = array[smallestIndex];
            array[smallestIndex] = temp; 
        }
    }
}

// selectionSort(basket); 
// console.log(basket); 

const basket = [7, 3, 5, 1, 9];
// selectionSort(basket);
// console.log(basket);

/**
 * Insertion Sort
 *  - Best when the list is almost sorted. 
 */

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // Move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // Find where number should go
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    // Move number to the right spot
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }

    return array;
}

// console.log(insertionSort(numbers));

/**
 * Merge Sort
 * - Can complete a sorting in O (n Log n) time, with SO(n)
 */

const mergeNumbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }

  let left = array.splice(0, array.length / 2); 
  let right = array;


  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
    let merged = [];
    let leftIndex = 0;
    let rightIndex = 0; 

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            merged.push(left[leftIndex]);
            leftIndex ++; 
        }else{
            merged.push(right[rightIndex]);
            rightIndex++; 
        }
    }

    while(leftIndex < left.length){
        merged.push(left[leftIndex]);
        leftIndex ++; 
    }

    while(rightIndex < right.length){
        merged.push(right[rightIndex]);
        rightIndex++; 
    }

    return merged; 
}


const answer = mergeSort(mergeNumbers);
console.log(answer)