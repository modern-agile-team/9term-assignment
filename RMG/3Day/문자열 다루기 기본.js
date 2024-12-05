/*
 * 입력받은 문자열 s에 문자, 길이가 4이거나 6이 아니면 false
 * 그렇지 않다면 true를 출력하는 함수입니다.
 */
function solution(s) {
  let checkS = /^\d{4}$|^\d{6}$/; //정규표현식을 이용하여 검사
  return checkS.test(s); // test() 메소드를 이용하여 참과 거짓을 판별하고 리턴합니다.
}
