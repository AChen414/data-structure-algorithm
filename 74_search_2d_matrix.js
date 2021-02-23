/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.


Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

var searchMatrix = function (matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (target === matrix[i][j]) {
                return true;
            }
        }
    }
    return false;
};

// Time: O(m * n)
// Space: O(1)

var searchMatrix = function (matrix, target) {
    let row = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (target > matrix[i][0]) {
            row = i;
            continue;
        } else if (target === matrix[i][0]) {
            return true;
        } else if (target < matrix[i][0]) {
            break;
        }
    }
    for (let j = 0; j < matrix[row].length; j++) {
        if (matrix[row][j] === target) {
            return true;
        }
    }
    return false;
};

// Time: O(m + n)
// Space: O(1)

var searchMatrix = function (matrix, target) {
    let top = 0;
    let bot = matrix.length - 1;

    while (top <= bot) {
        let row = Math.floor((bot + top) / 2);
        if (matrix[row][0] <= target && target <= matrix[row][matrix[row].length - 1]) {
            let left = 0;
            let right = matrix[row].length - 1;
            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                if (matrix[row][mid] === target) {
                    return true;
                } else if (target > matrix[row][mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return false
        }
        if (target < matrix[row][0]) {
            bot = row - 1;
        } else if (target > matrix[row][matrix[row].length - 1]) {
            top = row + 1;
        }
    }

    return false;
};

// Time: O(log(m*n)) since we use binary search;
// Space: O(1)