/* 
You are given a list of preferences for n friends, where n is always even.

For each person i, preferences[i] contains a list of friends sorted in the order of preference. In other words, a friend earlier in the list is more preferred than a friend later in the list. Friends in each list are denoted by integers from 0 to n-1.

All the friends are divided into pairs. The pairings are given in a list pairs, where pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.

However, this pairing may cause some of the friends to be unhappy. A friend x is unhappy if x is paired with y and there exists a friend u who is paired with v but:

x prefers u over y, and
u prefers x over v.
Return the number of unhappy friends.



Example 1:

Input: n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
Output: 2
Explanation:
Friend 1 is unhappy because:
- 1 is paired with 0 but prefers 3 over 0, and
- 3 prefers 1 over 2.
Friend 3 is unhappy because:
- 3 is paired with 2 but prefers 1 over 2, and
- 1 prefers 3 over 0.
Friends 0 and 2 are happy.
*/

function unhappyFriends(n, preferences, pairs) {
    const happyScore = [];
    let unhappy = 0;
    for (let i = 0; i < pairs.length; i++) {
        let friend1 = pairs[i][0];
        let friend2 = pairs[i][1];
        happyScore[friend1] = preferences[friend1].indexOf(friend2);
        happyScore[friend2] = preferences[friend2].indexOf(friend1);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < happyScore[i]; j++) {
            let friend = preferences[i][j];
            if (happyScore[friend] > preferences[friend].indexOf(i)) {
                unhappy++;
                break;
            }
        }
    }
    unhappy;
}

// Time: O(n^2)
// Space: O(n)