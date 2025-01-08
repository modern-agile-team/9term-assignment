function solution(N, stages) {
    const answer = [];
    //실패한 스테이지 개수 확인
    const failedStage = stages.reduce((acc, cur) => { acc[cur] = (acc[cur] || 0 ) + 1; 
        return acc;
    }, {});
    
    //다음 스테이지에 올라간 유저수
    let stageLength = stages.length;
    //실패율 변수 선언
    const failedRate = [];

    for (let i = 1; i <= N; i++) {
        //해당 객체로 접근해서 사용자의 수를 찾음.
        const failedCount = failedStage[i] || 0;
        //실패율 계산
        failedRate.push({stage : i, rate : failedCount / stageLength});
        //실패율 계산 후 다음 스테이지에 올라온 유저를 빼기 위해 변수 선언
        stageLength -= failedCount;

    }

    //sort 함수를 이용해서 rate의 값을 기준으로 내림차순 진행
    failedRate.sort((a, b) => b.rate - a.rate);

    //for문을 이용해서 각 인덱스마다 stage요소로 접근해 answer 배열에 저장
    for (let i = 0; i < failedRate.length; i++) {
        answer.push(failedRate[i].stage);
    }

    return answer;
}