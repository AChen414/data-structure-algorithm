/*
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.


Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
*/

var pacificAtlantic = function (matrix) {
    const result = [];
    if (matrix.length === 0) return result;
    const pacific = new Array(matrix.length).fill().map(() => new Array(matrix[0].length).fill(false));
    const atlantic = new Array(matrix.length).fill().map(() => new Array(matrix[0].length).fill(false));
    const PQ = [];
    const AQ = [];
    for (let i = 0; i < matrix.length; i++) {
        PQ.push([i, 0]);
        AQ.push([i, matrix[i].length - 1]);
        pacific[i][0] = true;
        atlantic[i][matrix[i].length - 1] = true;
    }
    for (let i = 0; i < matrix[0].length; i++) {
        PQ.push([0, i]);
        AQ.push([matrix.length - 1, i]);
        pacific[0][i] = true;
        atlantic[matrix.length - 1][i] = true;
    }
    bfs(matrix, PQ, pacific);
    bfs(matrix, AQ, atlantic);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (pacific[i][j] === true && atlantic[i][j] === true) result.push([i, j]);
        }
    }
    return result;
};

var bfs = function (matrix, queue, visited) {
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while (queue.length) {
        let curr = queue.pop();
        for (let i = 0; i < directions.length; i++) {
            const x = curr[0] + directions[i][0];
            const y = curr[1] + directions[i][1];
            if (x < 0 || x > matrix.length - 1 || y < 0 || y > matrix[0].length - 1 || matrix[x][y] < matrix[curr[0]][curr[1]] || visited[x][y]) continue;
            visited[x][y] = true;
            queue.push([x, y]);
        }
    }
}

let matrix = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]];
console.log(pacificAtlantic(matrix));

// Time: O(m * n) where m is the number of rows and n is the number of columns
// Space: O(m * n)