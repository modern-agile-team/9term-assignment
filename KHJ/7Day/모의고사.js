function solution(answers) {
    var answer = [];
    const fool1 = [1, 2, 3, 4, 5];
    const fool2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const fool3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const scores = [0, 0, 0]; 
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === fool1[i % fool1.length]) {
            scores[0]++; 
        }
        if (answers[i] === fool2[i % fool2.length]) {
            scores[1]++; 
        }
        if (answers[i] === fool3[i % fool3.length]) {
            scores[2]++; 
        }
    }
    const maxScore = Math.max(...scores);
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            answer.push(i + 1); // 수포자는 1, 2, 3으로 표시
        }
    }
    return answer;
}