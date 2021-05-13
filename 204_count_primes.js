/*
Count the number of prime numbers less than a non-negative number, n.



Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0


Constraints:

0 <= n <= 5 * 106
*/

var countPrimes = function (n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime(i)) {
            result++;
        }
    }
    return result;
};

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

// Time: O(n^(3/2))
// Space: O(1)

var countPrimes = function (n) {
    // Fill boolean array with all numbers from 0 to n
    const primes = new Array(n).fill(true);

    // go through each number and if it is a prime then all multiples of that number is also prime
    for (let i = 2; i * i < primes.length; i++) {
        if (primes[i]) {
            for (let j = i; j * i < primes.length; j++) {
                primes[i * j] = false;
            }
        }
    }

    // count the primes in the boolean array
    let count = 0;
    for (let i = 2; i < primes.length; i++) {
        if (primes[i]) count++;
    }
    return count;
}

// Time: O(sqrt(n)loglogn)
// Space: O(n)