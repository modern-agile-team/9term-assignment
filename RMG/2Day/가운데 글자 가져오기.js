/*
 * s라는 문자열을 받으면 중간을 반환하는 함수이다
 * solution("center") // "nt"
 * solution("heart") // "a"
 */

function solution(s) {
  let arrayS = s.split(""); //입력받은 문자열 S를 배열로 변환합니다.
  let x = arrayS.length; // 코드의 가독성을 높이기 위하여 배열의 길이를 x로 선언 해 주었습니다.

  if (x % 2 === 0) {
    //배열의 길이 나누기 2의 나머지가 0일경우
    return arrayS[x / 2 - 1] + arrayS[x / 2]; // 가운데 2자리를 반환하기 위해 몫과 몫의 -1 의 값을 반환합니다.
  } else {
    //홀수일경우
    return arrayS[Math.floor(x / 2)]; //Math.floor를 이용하여 소수점을 제거한 후 반환.
  } // (5/2의경우 소수점을 뺴면 2인데 5글자면 3번째가 중간아닌가요? ) -> 인덱스로 접근하기 때문에 상관없다.
}
