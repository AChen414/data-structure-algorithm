function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);
    let redFrontRow = redShirtHeights[0] > blueShirtHeights[0] ? true : false;

    for (let i = 0; i < redShirtHeights.length; i++) {
        if (redFrontRow) {
            if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
        } else {
            if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
        }
    }
    return true;
}

// Time: O(nlog(n))
// Space: O(1)