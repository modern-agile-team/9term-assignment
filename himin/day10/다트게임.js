function solution(dartResult) {
    const turns = dartResult.match(/\d{1,2}[SDT][*#]?/g); // 회차별로 분리
    const scores = []; // 점수를 저장할 배열
  
    for (const turn of turns) {
      let score = 0;
  
      // 숫자, 보너스, 옵션 분리
      const match = turn.match(/(\d{1,2})([SDT])([*#]?)/);
      const baseScore = parseInt(match[1]); // 점수
      const bonus = match[2]; // 보너스
      const option = match[3]; // 옵션 (없을 수도 있음)
  
      // 보너스 적용
      if (bonus === "S") score = baseScore ** 1;
      else if (bonus === "D") score = baseScore ** 2;
      else if (bonus === "T") score = baseScore ** 3;
  
      // 옵션 적용
      if (option === "*") {
        score *= 2;
        if (scores.length > 0) {
          scores[scores.length - 1] *= 2; // 이전 점수도 2배
        }
      } else if (option === "#") {
        score *= -1;
      }
  
      // 점수 저장
      scores.push(score);
    }
  
    // 총합 계산
    return scores.reduce((sum, score) => sum + score, 0);
  }