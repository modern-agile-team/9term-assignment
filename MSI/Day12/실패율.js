function solution(N, stages) {
    const fail = [];
    let stateLength = stages.length;

    for (let i = 1; i <= N; i++) {
        const currentStageCount = stages.filter(v => v === i).length;
        fail.push([i, currentStageCount / stateLength]);
        stateLength -= currentStageCount;
    }

    const answer = fail.sort((a, b) => b[1] - a[1]);
    return answer.map(v => v[0]);
}
