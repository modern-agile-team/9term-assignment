/**
 * 주어진 숫자 n에 따라 "수박" 문자열을 생성하는 함수
 * 짝수 인덱스에는 "수"가, 홀수 인덱스에는 "박"이 들어갑니다.
 * solution(3); // "수박수"
 * solution(4); // "수박수박"
 * solution(5); // "수박수박수"
 */
function solution(n) {
  let answer = ""; // answer라는 변수를 선언한다.

  for (let i = 0; i < n; i++) {
    // n번 입력받는 만큼 문자열을 생성하기 위해 for문 사용
    if (i % 2 === 0) {
      // 짝수 인덱스일 경우 "수"를 추가
      answer = answer + "수"; // 기존 answer에 누적에서 생성
    } else {
      // 홀수 인덱스일 경우 "박"을 추가
      answer = answer + "박";
    }
  }
  return answer; // 최종적으로 생성된 문자열 반환
}
