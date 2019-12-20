class GraphNode {
  constructor(val) {
    this.val = val;
    this.dist = 0;
  }
}

class Graph {
  constructor(adj = new Map()) {
    this.adj = adj; // <Int, [Int,...]>
  }

  getNeighbors(vertex) {
    return this.adj.get(vertex) || [];
  }
}

const g = new Graph(
  new Map([[1, [2]], [2, [3, 4]], [3, [2, 4, 5, 9]], [4, [2, 3]], [5, [3]], [9, [10]]])
);

function bfs(graph, src, dest) {
  const visited = new Map();
  const queue = [src];
  while (queue.length) {
    const vertex = queue.shift();
    if (visited.get(vertex)) continue;
    if (vertex === dest) return true;
    visited.set(vertex, true);
    queue.push(...graph.getNeighbors(vertex));
  }
  return false;
}

function bfsDist(graph, src, dest) {
  const visited = new Map();
  const dists = new Map();
  const queue = [src];
  while (queue.length) {
    const vertex = queue.shift();

    if (visited.get(vertex)) continue;
    if (vertex === dest) return dists.get(vertex);
    visited.set(vertex, true);

    const neighbors = graph.getNeighbors(vertex);
    for (let i = 0; i < neighbors.length; i++) {
      let currDist = dists.get(vertex) || 0;
      dists.set(neighbors[i], currDist + 1);

      queue.push(neighbors[i]);
    }
  }
  return 0;
}

// console.log(bfs(g, 1, 11));
console.log(bfsDist(g, 1, 4));
