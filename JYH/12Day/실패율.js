function solution(N, stages) {
    let fail = [];
    let num1 = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let num2 = stages.filter(x => x === i).length;
        fail.push([i, num1/num2]);
        num1 = num1 - num2;
    }
    const answer = fail.sort((a, b) => a[1] - b[1]);
    return answer.map(x => x[0]);
}