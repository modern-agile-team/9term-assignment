/*
 * s에 영문으로 된 문자열을 입력받으면 소문자 문자열을 내림차순으로 정리하는 함수입니다.
 * 대문자와 소문자 동일하게 있을 시 소문자가 우선으로 정렬됩니다.
 * solution("qWedx"); // "xqedW"
 * solution("PdcjaWaA"); // "jdcaaWPA"
 */

function solution(s) {
  return s.split("").sort().reverse().join("");
  // split을 통하여 문자열을 나눈 후, sort 메소드를 이용하여 정렬하고,
  // ASCII코드로 보면 대문자가 우선순위이기 때문에 reverse로 전환 후
  // join('')을 이용하여 한 문자열로 변환하였습니다.
}
