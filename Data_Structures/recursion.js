/**
 * Recursion
 *  - A function that calls itself.
 * 
 *  - Anything that can be done with recursion can normally be solved
 *  with iterative loops. 
 * 
 * - Recursion can help to keep the code dry - lacking repeating code. 
 * 
 * - Adds a lot of function calls to the stack.
 * 
 * - Very useful when you don't know how deep the data structure is.
 *      - This is great for searching trees and graphs.
 * 
 * Think about using Recursion when
 *  - Divided into a number of subproblems that are smaller instance of the same problem.
 *  - Each instance of the subproblem is identical in nature. 
 *  - The solutions of each subproblem can be combined to solve the problem at hand.  
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

/**
 *  Given a number N return the index value of the fibonacci sequence, where the 
 *  sequence is:
 *  0,1,1,2,3,5,8,13,21,34,55,89,144...
 *  
 */

function fibonacciIterative(n){ // O(n)
    let a = 0; 
    let b = 1; 
    let result = 0; 

   if(n < 2){return n; }

    for(let i = 2; i < n; i ++){
        result = a + b; 
        a = b; 
        b = result; 
    }

    result = a + b; 

    return result

}

console.log(fibonacciIterative(10))

function fibonacciIterativeRecursive(n){ // O(2^n)
    if(n < 2){return n; }

    return fibonacciIterativeRecursive(n - 1 ) + fibonacciIterativeRecursive(n - 2);

}

console.log(fibonacciIterativeRecursive(10))