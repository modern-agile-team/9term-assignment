/*
 * 입력받은 자연수 n의 자리수에 있는 수 들을 모두 더하는 함수입니다.
 * solution(12); // 1 + 2 = 3
 * solution(923) // 9 + 2 + 3 = 14
 */
function solution(n) {
  let answer = 0;
  changeN = n.toString().split(""); //자연수 n을 각각 더하기 위하여 문자열로 바꾸고, 각각 나누어 주었습니다.

  for (let i = 0; i < changeN.length; i++) {
    // 자연수n의 자릿수만큼 더하기 위하여 .length를 이용하여 for문을 실행시켰습니다.
    answer = answer + Number(changeN[i]); // 문자열 + 정수 = 문자열 이기 때문에 더한 후 Number()를 이용하여 정수로 바꾸어 더해주었습니다.
  }
  return answer;
}
