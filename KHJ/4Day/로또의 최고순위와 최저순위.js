function solution(lottos, win_nums) {
    let zeroCount = 0;
    let matchCount = 0; 
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0) {
            zeroCount++;
        } else if (win_nums.includes(lottos[i])) {
            matchCount++;
        }
    }
    const maxRank = Math.max(1, 7 - (matchCount + zeroCount)); 
    const minRank = Math.max(1, 7 - matchCount); 
    return [maxRank, minRank].map(rank => rank === 7 ? 6 : rank);
}
