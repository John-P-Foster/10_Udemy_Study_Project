/*
    What are companies looking for? 

        - Analytic Skills
        - Coding Skills
        - Technical Skills
        - Communication Skills


    Step by step for a problem
        1. Wrte down the key points of the interview (Have all he details)
        2. Double Check: Inputs / outputs
        3. What is the most important value fo the problem? Do you have time, space, memory? 
        4. Don't be ask to many questions.
        5. Start with naive/brute force approach. The first thing that comes to mind. 
        6. Explain why this is not the best approach
        7. Walk through your approach, comment things and see where you might be able to break things. 
        8. Before writing code, wright down the steps and walk through the code. 
        9. Modularize your code form the start. 
        10. Write the code now. 
        11. Think about error checks and assume people are going to try and break the code. 
        12. Don't use bad names like 'i' 
        13. Test code: Check for nop params, 0, undefined, null 
        14. Talk to the interviewer about where you would improve the code. 
        15. If they are happy with the solution expect it to end here. 
 */

// Practice Problem 1.) 

/*
Given 2 arrays, create a function that let's the user know (troue/false) whether 
these two array contain any common item. 

    - Example 1.) 
    const array1 = ['a' , 'b', 'c', 'x']
    const array2 = ['z' , 'y', 'i']
    - Should return false. 

    - Example 2.) 
    const array1 = ['a' , 'b', 'c', 'x']
    const array2 = ['z' , 'y', 'x']
    - Should return true
*/

// 2 parameters - always arrays - no size limit 
// returns true or false

// First naive approach: 
// Could be done with two loops in quadratic time. 

const array1 = ['a' , 'b', 'c', 'x']
const array2 = ['z' , 'y', 'x']

function containsCommonItemBrute(array1, array2){
    for(let i = 0; i < array1.length; i++){ // O(a)
        for(let j = 0; j < array2.length; j++){ // O(b)
            if(array1[i] == array2[j]){
                return true
            }
        }
    }
    return false
} // O (a * b) worst case is O(n^2) 
  // SC O(1)

// console.log(containsCommonItemBrute(array1, array2))

function containsCommonItemsDict(array1, array2){
    let map = {};

    for (let i = 0; i < array1.length; i++){ // O(a)
        if(!map[array1[i]]){
          const item = array1[i]
          map[item] = true;   
        }
    }
    
    for(let i = 0; i < array2.length; i++){ // O (b)
        if(map[array2[i]]){
            return true;
        }
    }
    return false; 
} // O(a + b)
  // SC O(a)


// console.log(containsCommonItemsDict(array1, array2));

function containsCommonItemsDict2(array1, array2){
    return array1.some(item => array2.includes(item));
}

console.log(containsCommonItemsDict2(array1, array2));
