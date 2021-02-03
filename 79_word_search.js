/*
Given an m x n board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.



Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

var exist = function (board, word) {
    let row = board[0].length;
    let col = board.length;
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (wordSearch(i, j, board, word)) return true;
        }
    }
    return false;
};

function wordSearch(row, col, board, word) {
    if (!word.length) return true;
    if (outOfBounds(row, col, board) || board[col][row] !== word[0]) return false;

    const letter = word[0];
    const newWord = word.slice(1, word.length);
    board[col][row] = '*';

    const result = wordSearch(row + 1, col, board, newWord) ||
        wordSearch(row, col + 1, board, newWord) ||
        wordSearch(row - 1, col, board, newWord) ||
        wordSearch(row, col - 1, board, newWord);
    board[col][row] = letter;
    return result;
}

function outOfBounds(row, col, board) {
    return row < 0 || row >= board[0].length || col < 0 || col >= board.length;
}

// Time: O(m*n) as we look through every element in the matrix;
// Space: O(m*n) as worst case, the word will have every letter in the matrix, making our call stack have m*n frames on it