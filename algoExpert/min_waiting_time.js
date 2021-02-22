function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let result = 0;
    let waitingTime = queries[0];

    for (let i = 1; i < queries.length; i++) {
        result += waitingTime;
        waitingTime += queries[i];
    }

    return result;
}

// Time: O(nlog(n))
// Space: O(1)