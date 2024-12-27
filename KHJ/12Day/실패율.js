function solution(N, stages) {
    const totalPlayers = stages.length; 
    const failureRates = [];
    for (let i = 1; i <= N; i++) {
        const playersAtStage = stages.filter(stage => stage === i).length; // 현재 스테이지에 도전 중인 플레이어 수
        const playersReachedStage = stages.filter(stage => stage >= i).length; // 현재 스테이지에 도달한 플레이어 수
        const failureRate = playersReachedStage === 0 ? 0 : playersAtStage / playersReachedStage;
        failureRates.push({ stage: i, rate: failureRate }); // 스테이지 번호와 실패율 저장
    }
    failureRates.sort((a, b) => b.rate - a.rate || a.stage - b.stage);
    return failureRates.map(obj => obj.stage);
}