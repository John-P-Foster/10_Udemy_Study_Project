const letters = ['a','e','w','g','k','y','j' ];
const basket = [2, 56, 34, 2, 5, 7, 8];

// JavaScripts sort method converts numbers to characters and compairs the values.
console.log(letters.sort())
console.log(basket.sort(function(a, b){
    return a - b; 
}));

/**
 * Bubble Sort
 */

