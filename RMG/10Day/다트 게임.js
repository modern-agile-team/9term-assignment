function solution(dartResult) {
  // 정규식을 사용하여 점수, 보너스, 옵션을 추출합니다.
  // (\d+)는 숫자를, ([SDT])는 S/D/T 문자를, ([*#])?는 * 또는 # 옵션을 매칭합니다.
  const regex = /(\d+)([SDT])([*#])?/g;

  // 정규식에 매칭된 결과를 배열로 저장합니다.
  // 각 항목을 문자 단위로 나누어 배열로 변환합니다.
  const matches = dartResult.match(regex).map((match) => match.split(""));

  // 각 점수를 저장할 배열을 생성합니다.
  let scores = [];

  // 각 결과를 처리하기 위해 반복문을 실행합니다.
  for (let i = 0; i < matches.length; i++) {
    let currentScore = 0; // 현재 점수를 저장할 변수를 초기화합니다.

    // 현재 결과의 각 문자를 처리하기 위해 반복문을 실행합니다.
    for (let j = 0; j < matches[i].length; j++) {
      if (matches[i][j] === "S") {
        // Single 보너스: 점수를 1제곱합니다.
        currentScore = Math.pow(parseInt(currentScore), 1);
      } else if (matches[i][j] === "D") {
        // Double 보너스: 점수를 2제곱합니다.
        currentScore = Math.pow(parseInt(currentScore), 2);
      } else if (matches[i][j] === "T") {
        // Triple 보너스: 점수를 3제곱합니다.
        currentScore = Math.pow(parseInt(currentScore), 3);
      } else if (matches[i][j] === "*") {
        // 스타상(*): 현재 점수와 이전 점수를 각각 2배로 만듭니다.
        currentScore *= 2;
        if (i > 0) scores[i - 1] *= 2; // 이전 점수도 존재하면 2배로 만듭니다.
      } else if (matches[i][j] === "#") {
        // 아차상(#): 현재 점수를 음수로 만듭니다.
        currentScore *= -1;
      } else {
        // 숫자 처리: 현재 숫자를 점수로 변환합니다.
        // 숫자가 두 자리일 경우를 처리하기 위해 기존 값에 추가합니다.
        currentScore = currentScore * 10 + parseInt(matches[i][j]);
      }
    }

    // 계산된 현재 점수를 배열에 추가합니다.
    scores.push(currentScore);
  }

  // 모든 점수를 합산하여 최종 결과를 반환합니다.
  return scores.reduce((a, b) => a + b, 0);
}
