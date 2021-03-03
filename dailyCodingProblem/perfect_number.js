/*
A number is considered perfect if its digits sum up to exactly 10

Given a positive integer n, return the n -th perfect number

For example, given 1, you should return 19. Given 2, you should return 28
*/

function perfectNumber(n) {
    let perfectNums = [];
    i = 19;
    while (perfectNums.length !== n) {
        if (isPerfectNumber(i)) {
            perfectNums.push(i)
        }
        i++;
    }
    return perfectNums[perfectNums.length - 1];
}

function isPerfectNumber(number) {
    let digitSum = 0;
    while (number) {
        let digit = number % 10;
        digitSum += digit;
        number = Math.floor(number / 10);
    }
    return digitSum === 10 ? true : false;
}

console.log(perfectNumber(4))