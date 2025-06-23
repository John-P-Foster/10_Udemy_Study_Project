/**
 * Optimization technique where you solve problems by braking problems down
 * into sub problems, solving the sub problem and caching the answer. 
 * 
 *
 */

function addTo80(n){
    console.log('long time')
    return n + 80; 
}

// let cache =  {};


// This is an example of how to keep the cache inside the function with 
// out it adding to the number of global variables. 
function memoizedAddTo80(){
    let cache = {};
    return function(n){
        if(n in cache){
            return cache[n];
        } else{
            console.log('long time')
            cache[n] = n + 80; 
            return cache[n];
        }
    }
}
const memoized = memoizedAddTo80();

console.log('1', memoized(5)); 
console.log('2', memoized(5)); 

// Example with fibonaccie

function fibonacci(n){ // O(2^n)
    if (n < 2) {
        return n; 
    }
    return fibonacci(n-1) + fibonacci(n - 2); 
}

console.log(fibonacci(6));

function dynamicFibonacci(){ // O(n)

    let cache = {};
    return function fib(n){
        if(n in cache){
            return cache[n];
        } else{
            if(n < 2){
                cache[n] = n;
                return n; 
            } else {
                cache[n] = fib(n -1 ) + fib(n - 2);
                return cache[n];
            }
        }

    }
}

function dynamicFibonacciBottomUp(n){
    let answer = [0, 1];
    for (let i = 2; i <= n ; i++){
        answer.push(answer[i-2] + answer[i -1])
    }

    return answer.pop(); 

}

const dyFibonacci = dynamicFibonacci(); 

console.log(dyFibonacci(1000)); 
console.log(dynamicFibonacciBottomUp(1000)); 