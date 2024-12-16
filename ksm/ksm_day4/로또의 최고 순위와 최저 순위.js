function solution(lottos, win_nums) {
    let zeroCount = 0;
    let rankMin = 0;
    
    for (const lotto of lottos) {
        if (lotto === 0) {
            zeroCount++; // 0일 경우
        } else if (win_nums.includes(lotto)) {
            rankMin++; // 당첨 번호와 로또 번호가 같은 경우
        }
    }

    const rankMax = rankMin + zeroCount; // 최대 순위 = 최저 순위 + 0의 개수
 
    const getRank = (matches) => {
        switch (matches) {
            case 6: return 1; // 6개 맞춤 -> 1등
            case 5: return 2;
            case 4: return 3;
            case 3: return 4;
            case 2: return 5; // 2개 맞춤 -> 5등
            default: return 6; // 그 외 -> 6등
        }
    }
    return [getRank(rankMax), getRank(rankMin)]; // [최대 순위, 최저 순위]
}
