/*
Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024.

*/

const pow = (x, y) => {
    if (y === 0) return 1;
    if (y === 1) return x;
    if (y % 2 === 1) {
        return x * pow(x, (y - 1) / 2) * pow(x, (y - 1) / 2)
    } else {
        return pow(x, y / 2) * pow(x, y / 2);
    }
        
}

console.log(pow(2, 10));

// Time: O(log(y)) since we divide y by 2 on every call stack
// Space: O(log(y)) since we will have log(y) frames on the call stack