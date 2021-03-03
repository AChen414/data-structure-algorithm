/*
Given a positive integer N, find the smallest number of steps it will take to reach 1.

There are two kinds of permitted steps:

You may decrement N to N - 1.
If a * b = N, you may decrement N to the larger of a and b.
For example, given 100, you can reach 1 in five steps with the following route: 100 -> 10 -> 9 -> 3 -> 2 -> 1.

*/
class Node {
    constructor(value, steps) {
        this.value = value;
        this.steps = steps;
    }
}

function stepsToOne(number) {
    let queue = [new Node(number, 0)];


    while (queue.length) {
        let num = queue.shift();
        if (num.value === 1) return num.steps;
        
        queue.push(new Node(num.value - 1, num.steps + 1));
        for (let i = 2; i * i <= num.value; i++) {
            if (num.value % i === 0) {
                queue.push(new Node(num.value / i, num.steps + 1));
            }
        }
    }
    return;
}

console.log(stepsToOne(100));