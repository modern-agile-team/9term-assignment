function solution(lottos, win_nums){
    const rank = [6, 6, 5, 4, 3, 2, 1];
    const zeroCount = lottos.fillter(num => num === 0).lenght;
    const matchCount = lottos.fillter( num => win_nums.include(num) ).length;

    const mixRank = rank[matchCount + zeroCount];
    const minRank = rank[zeroCount];

    return [maxRank, minRank];
}