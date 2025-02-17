function solution(s) {
    let countP = 0;
    let countY = 0;

    for (const char of s.toLowerCase()) {
        if (char === 'p') {
            countP++;
        }
        if (char === 'y') {
            countY++;
        }
    };

    return countP === countY;
}