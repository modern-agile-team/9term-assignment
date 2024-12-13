function solution(answers) {
    const answer = [];
    const patterns = [
        [1, 2, 3, 4, 5], 
        [2, 1, 2, 3, 2, 4, 2, 5], 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] 
    ];
    
    const score = [];
    
    for (let i = 0; i < patterns.length; i++) {
        score[i] = answers
            .filter((answer, idx) => answer === patterns[i][idx % patterns[i].length]) // 정답과 patterns의 답이 같은지 확인
            .length; // 맞춘 답의 개수
    }
    
    const max = Math.max(...score); // 최고 점수 찾기
    
    for (let i = 0; i < score.length; i++) { // 최고 점수를 받은 patterns(수포자) 찾기
        if (max === score[i]) {
            answer.push(i+1);
        }
    }   
    return answer;
}
  