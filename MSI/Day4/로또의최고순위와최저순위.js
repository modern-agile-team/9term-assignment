function solution(lottos, winNums) {
    const zeroCount = lottos.filter(num => num === 0).length;
    const matchCount = lottos.filter(num => winNums.includes(num)).length;

    const highestRank = 7 - (matchCount + zeroCount);
    const lowestRank = 7 - matchCount;

    return [Math.min(highestRank, 6), Math.min(lowestRank, 6)];
}