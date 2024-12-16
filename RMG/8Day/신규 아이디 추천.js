/*
 * 입력받은 문자를 조건에 맞게 바꾸어 추천해주는 바꿔주는 함수입니다.
 * solution("...!@BaT#*..y.abcdefghijklm"); // "bat.y.abcdefghi"
 * solution("z-+.^."); // "z--"
 */
function solution(new_id) {
  // 1단계: 모든 대문자를 소문자로 변환합니다.
  let recommendation = new_id.toLowerCase();

  // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  recommendation = recommendation.replace(/[^a-z0-9-_.]/g, "");

  // 3단계: 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  recommendation = recommendation.replace(/\.{2,}/g, ".");

  // 4단계: 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  recommendation = recommendation.replace(/^\.|\.$/g, "");

  // 5단계: 빈 문자열이라면 "a"를 대입합니다.
  if (recommendation === "") recommendation = "a";

  // 6단계: 길이가 16자 이상이면, 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  // 만약 제거 후 마침표(.)가 끝에 위치한다면 마침표(.) 문자를 제거합니다.
  if (recommendation.length >= 16) {
    recommendation = recommendation.slice(0, 15);
    recommendation = recommendation.replace(/\.$/, "");
  }

  // 7단계: 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  while (recommendation.length <= 2) {
    recommendation += recommendation[recommendation.length - 1];
  }

  return recommendation;
}
