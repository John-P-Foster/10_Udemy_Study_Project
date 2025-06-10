/**
 * Recursion
 *  - A function that calls itself.
 */

/**
 * Write two functions that finds the factorial of a given number
 *  - Use recursice in the first and another means in the other. 
 */

function findFactorialRecursive( number ){
    if(number === 1 ){
        return 1; 
    }

    return number * findFactorialRecursive(number -1);
}


console.log(findFactorialRecursive(5))

function findFactorialIterative(number){
    let factorial = number; 
    for(let i = number -1; i > 0; i --){
        factorial = factorial * i; 
    }

    return factorial; 
}

console.log(findFactorialIterative(5))