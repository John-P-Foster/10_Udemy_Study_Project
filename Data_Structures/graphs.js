/**
 *  Graphs
 *  - Each item is a node or vertex
 *  - Each node is connected with an edge. 
 * 
 *  Directed Graph
 *      - Each node has a set path that is one way
 * 
 *  Undirected Graph
 *      - Edges are two way connections
 * 
 *  Weighted Graph
 *      - Each edge has a weight added to it to help find optimal paths
 * 
 *  Unweighted Graphs
 *      - No prefered edge path
 * 
 *  Cyclic
 *      - Nodes edges can be followed back to a given start node
 * 
 *  Acylic
 *      - No way to get back to any given node. 
 */

/**
 * Building a graph 
 *  - Three different common ways to build
 */

// Edge List - each array pair shows a connection betwen the two nodes. 
const graph = [[0,2], [2,3], [2,1], [1,3]];

// Adjacency List
// Each index is a node   0      1        2         3
const graph2 =          [[2], [2, 3], [0, 1, 3], [1, 2]]


//Adjacency Matrix
/**
 *  Each node is shown as an x and y and connections are marked with a 1.
Node    0  1  2  3 
    0  [0, 0, 1, 0],
    1  [0, 0, 1, 1],
    2  [1, 1, 0, 1],
    3  [0, 1, 1, 0],
 */
const graph3 = [ 
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0],
]

// Creating a Graph in JS

class Graph { 
    constructor() { 
      this.numberOfNodes = 0;
      this.adjacentList = {
      }; 
    } 
    addVertex(node)  { 
        this.adjacentList[node] = [];
        this.numberOfNodes ++;
    } 
    addEdge(node1, node2) { 
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    } 
    showConnections() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "-->" + connections); 
      } 
  } 
  } 
  
  const myGraph = new Graph();
  myGraph.addVertex('0');
  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');
  myGraph.addVertex('5');
  myGraph.addVertex('6');
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '2'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  myGraph.addEdge('6', '5');
  
  myGraph.showConnections(); 
  //Answer:
  // 0-->1 2 
  // 1-->3 2 0 
  // 2-->4 1 0 
  // 3-->1 4 
  // 4-->3 2 5 
  // 5-->4 6 
  // 6-->5