/*
 * 수포자 3명의 정답 배열이 주어지고, 입력받은 답안지의 정답 배열과
 * 비교하여 누가 가장 많이 맞췄는지 확인하는 함수입니다.
 * solution([1,2,3,4,5]); // [1]
 * solution([1,3,2,4,2]); // [1,2,3]
 */
function solution(answers) {
  // 각 수포자의 정답 패턴을 정의합니다
  const patterns = [
    [1, 2, 3, 4, 5], // 첫 번째 수포자
    [2, 1, 2, 3, 2, 4, 2, 5], // 두 번째 수포자
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 세 번째 수포자
  ];

  // 각 수포자의 점수를 저장할 배열을 초기화합니다
  const scores = [0, 0, 0];

  // 각 수포자의 답안과 실제 정답을 비교하여 점수를 계산합니다
  for (let i = 0; i < patterns.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      // 모듈로 연산을 사용하여 패턴 반복
      if (answers[j] === patterns[i][j % patterns[i].length]) {
        scores[i]++;
      }
    }
  }

  // 가장 높은 점수를 찾습니다
  const maxScore = Math.max(...scores);

  // 최고 점수를 받은 수포자들의 번호를 저장할 배열을 초기화합니다
  const winners = [];

  // 최고 점수를 받은 수포자들의 번호를 찾아 winners 배열에 추가합니다
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      winners.push(i + 1); // 수포자의 번호는 1부터 시작하므로 i+1을 사용합니다
    }
  }

  // 가장 많은 문제를 맞힌 수포자들의 번호 배열을 반환합니다
  return winners;
}
