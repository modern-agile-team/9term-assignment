function solution(N, stages) {
    const fail = [];
    let num2 = stages.length;

    for (let i = 1; i <= N; i++) {
        const num = stages.filter(v => v === i).length;
        fail.push([i, num / num2]);
        num2 -= num;
    }

    const answer = fail.sort((a, b) => b[1] - a[1]);
    return answer.map(v => v[0]);
}