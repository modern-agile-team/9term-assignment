function solution(N, stages) {
    const failureRates = []; // 각 스테이지의 실패율과 번호를 저장할 배열
    const totalPlayers = stages.length; // 전체 플레이어 수

    for (let stage = 1; stage <= N; stage++) {
        // 현재 스테이지에 멈춘 플레이어 수 계산
        const notCleared = stages.filter(s => s === stage).length;

        // 현재 스테이지 이상에 도달한 플레이어 수 계산
        const reached = stages.filter(s => s >= stage).length;

        // 실패율 계산
        let failureRate = 0;
        if (reached > 0) {
            failureRate = notCleared / reached;
        }

        // 실패율 배열에 추가: [스테이지 번호, 실패율]
        failureRates.push({ stage, failureRate });
    }

    // 실패율 기준으로 내림차순 정렬
    failureRates.sort((a, b) => {
        if (b.failureRate === a.failureRate) {
            // 실패율이 같으면 스테이지 번호 오름차순
            return a.stage - b.stage;
        }
        // 실패율 내림차순
        return b.failureRate - a.failureRate;
    });

    // 정렬된 스테이지 번호 배열 반환
    return failureRates.map(item => item.stage);
}