// Run code with node file name in the terminal 

/*
What is good code? 
1. Readable 
2. Scalable, won't slow down when many variables are added. 
    * This is where big O becomes important
    * Big O is basically short for the number of operations need for N variables. 
*/ 

// linear time example O(n)
const nemo = ['nemo']; 
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo'); // Neat way to fill arrays for tests

function findNemo(array){
    //let t0 = performance.now(); // timer to check the peformance of the code
    for(let i = 0; i < array.length; i ++){
        if(array[i] === 'nemo'){
        console.log('found Nemo!');
        break;
        }
    }
    //let t1 = performance.now();
    //console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds')
}

//findNemo(nemo);
//findNemo(everyone);
//findNemo(large); // O(n) --> Linear time

//-------------------------------------------------------------------------------------------------------

// Constant time examples Big O(1)
function logFirstTwoBoxes(boxes){
    console.log(boxes[0]);
    console.log(boxes[1]);
}

/* 
    Technically when calculating Big O you can get more specific and find the total number of operations 
    for a given function using n as a variable.
*/

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
      let x = i + 1; // O(n)
      let y = i + 2; // O(n)
      let z = i + 3; // O(n)

    }
    for (let j = 0; j < input; j++) { // O(n)
      let p = j * 2; // O(n)
      let q = j * 2; // O(n) 
    }
    let whoAmI = "I don't know"; // O(1)
  }
  // Big O = 4 + 7n = O(n)

/* BigO rules  
    1.) Worst Case
        - Always worry about the worse case when figuring out BigO
    
    2.) Remove Constants
        - They don't matter when the numbers get really big. 

    3.) Different terms for inputs
        - Differnt parameters have to have different terms to show thier size when figuring out BigO
        - function(inputA, inputB) - > BigO(a + b) -> assuming linear time. 
        - Anything that happens one after the other is added together ( a + b)
        - Anything that happens nested is multiplied (a * b) 
    
    4.) Drop Non Dominants
        - If you have one sub opperation that takes O(n) and another that takes O(n^2), the larger time
        complexity takes overs at larger numbers, so the BigO is O(n^2)

*/


// Quadratic time Example O(n^2) 
// Logging all pairs of an array

const boxes = [1,2,3,4,5]; 

function logAllPairs(array){
    for(i = 0; i < array.length; i++){ // O(n)
        for(j = 0; j < array.length; j++){ //O(n)
            console.log('pair: [' + array[i] + ', ' + array[j] + ']')
        }
    }
}

//logAllPairs(boxes) // BigO = (n * n ) ->(n^2)

/*
    Scalable code is: 
        - Fast with Speed of the codes (Big O) growth
        - Memory use 

    *** The three pilliars of good code!***
        - Readable
        - Speed (time Complexity) -> Big O
        - Memory (Space Complexity) 

    A program has two ways to store information
        - The Heap 
        - The Stack
    
    Space Complexity Adders: 
        - Variables
        - Data Structures
        - Function Call
        - Allocations
*/

/* Space Complexity Example Funciton */
// Input size does not effect the space complexity of the function 

function boo(n){
    for(let i = 0; i < n.length; i ++){ // SC(1) -> Creating only one variable. 
        console.log('Booo'); 
    }
}

//boo([1,2,3,4,5])

function arrayOfHintTimes(n){
    let hiArry = [];
    for(let i = 0; i < n; i ++){ // SC(1) -> Creating only one variable. 
        hiArry[i] = 'hi'; // SC(n) -> Creating a new variable for each n element. 
    }
    return hiArry; 
}

//arrayOfHintTimes(5); // SC(n) -> BigO(n)

// More Examples

const findNemo2 = array => {
    array.forEach(element => {
        if(element === 'nemo'){
            console.log('Found NEMO!')
        }
    });
}

const findNemo3 = array => {
    for(let i of array) {
        if( i === 'nemo'){
            console.log('Found NEMO!')
        }
    };
}

// findNemo(everyone);
// findNemo2(everyone);
// findNemo3(everyone);