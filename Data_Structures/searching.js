/**
 * Linear Search
 *  - Looking at each item in a list until a match is found.
 *  - In Javascript IndexOf uses linear search
 *  - Only option with unsorted data
 */

// These are all examples of linear searches. 
var beasts = [
    'Centaur',
    'Godzilla',
    'Mosura',
    'Minotaur',
    'Hydra',
    'Nessie',
]

console.log(beasts.indexOf('Godzilla'));

console.log(beasts.findIndex(function(item){
    return item ==='Godzilla'; 
}));

console.log(beasts.find(function(item){
    return item === 'Godzilla'
}));

console.log(beasts.includes('Godzilla'));

/**
 * Binary Search
 *  - Used when list is sorted.
 *  - Implemented the same way as a B-tree
 */

/**
 * Graph and Tree Traversals
 * - 
 * 
 *  Breadth First Search / Traversal
 *  - Searchs from left to right on each level before dropping down a level. 
 *  - Uses memory because it has to track the children node of node on a level. 
 *  - Can help find the shortest path between a starting node and target node. 
 * 
 *  Depth First Search / Tracersal
 *  - Searchs on branch all they way down until the end of a branch is reached or the item is found.
 *  - Then it searches the other children on the node all the way down. 
 *  - Lower memory requirment than BFS. - No need to keep track of child nodes. 
 *  - Good for finding out if a path exists from a starting node to a target node. 
 */