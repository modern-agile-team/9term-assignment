function solution(N, stages) {
    const failureRates = [];
    let reachedPlayer = stages.length;
    
    for (let i = 1; i <= N; i++) {
        // 스테이지 별 실패 플레이어 수
        const failedPlayer = stages.filter(num => num === i).length; 

        // 실패율 계산: [스테이지 번호, 실패 플레이어 수 / 도달 플레이어 수]  
        failureRates.push([i,failedPlayer/reachedPlayer]); 

        // 다음 스테이지로 넘어갈 때 도달한 플레이어 수 업데이트
        reachedPlayer -= failedPlayer;
    }
    // 실패율 기준 내림차순 정렬 (동률일 경우 스테이지 번호 순으로 안정 정렬됨)
    failureRates.sort((rate1, rate2) => rate2[1] - rate1[1]);

    // 정렬된 스테이지 번호 반환
    return failureRates.map(stage => stage[0]);
}