/*
MegaCorp wants to give bonuses to its employees based on how many lines of codes they have written. They would like to give the smallest positive amount to each worker consistent with the constraint that if a developer has written more lines of code than their neighbor, they should receive more money.

Given an array representing a line of seats of employees at MegaCorp, determine how much each one should get paid.

For example, given [10, 40, 200, 1000, 60, 30], you should return [1, 2, 3, 4, 2, 1].

*/

function giveBonuses(array) {
    if (array.length === 1) return [1];
    const streaks = getStreaks(array);

    console.log(streaks);

}

function getStreaks(array) {
    let ascending = array[0] < array[1];
    let prev = array[0];
    let begin = 0;
    const streaks = [];

    for (let i = 1; i < array.length; i++) {
        if (ascending && array[i] < prev || !ascending && array[i] > prev) {
            ascending ? streaks.push(i - begin) : streaks.push(-(i - begin));
            ascending = !ascending;
            begin = i;
        }
        prev = array[i];
    }
    streaks.push(array.length - begin);
    return streaks;
}

giveBonuses([10,20,19,18,17,20,21,20,19]);