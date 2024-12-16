/*
 * a와 b를 입력받아 a~b사이의 모든값을 구하는 함수입니다.
 * solution(3, 5) // 3 + 4 + 5 = 12
 * solution(3, 3) // 3
 * solution(5, 3) // 3 + 4 + 5 = 12
 */
function solution(a, b) {
  let answer = 0;

  if (a <= b) {
    // a가 b보다 작거나 같을경우
    for (let i = a; i <= b; i++) {
      // for문을 사용하여 a입력값부터 b입력값을 answer에 저장합니다.
      answer += i; //입력받은 값을 계속 더해줍니다.
    }
  } else {
    // a가 b 보다 클경우
    let x = b,
      y = a; // a와 b의 값을 바꾸어서 for문을 실행합니다.
    for (let i = x; i <= y; i++) {
      answer += i;
    }
  }
  return answer;
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
function solution(a, b) {
  let answer = 0;

  if (a <= b) {
    // a가 b보다 작거나 같을경우
    for (let i = a; i <= b; i++) {
      // for문을 사용하여 a입력값부터 b입력값을 answer에 저장합니다.
      answer += i; //입력받은 값을 계속 더해줍니다.
    }
  } else {
    // a가 b 보다 클경우
    for (let i = b; i <= a; i++) {
      // for문에서 b와 a를 순서를 바꾸어 진행하는 방법
      answer += i;
    }
  }
  return answer;
}
