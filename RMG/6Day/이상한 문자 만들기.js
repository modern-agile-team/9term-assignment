/*
 * 입력받은 s는 한 개 이상의 단어로 이루어진 문자열입니다.
 * 각 단어는 하나 이상의 공백 문자로 구분되어 있습니다.
 * 각 단어의 짝수 번째 알파벳은 대문자로, 홀수 번째 알파벳은 소문자로 바꾸는 함수입니다.
 *
 * solution("try hello world"); // "TrY HeLlO WoRlD"
 */
function solution(s) {
  // map을 이용한 방식
  const words = s.split(" "); // 문자열 s를 공백 기준으로 분리하여 단어 배열 생성

  // 각 단어에 대해 짝수 인덱스는 대문자, 홀수 인덱스는 소문자로 변환합니다.
  return words
    .map(
      (word) =>
        word
          .split("") // 단어를 문자 배열로 분리
          .map(
            (char, index) =>
              index % 2 === 0 ? char.toUpperCase() : char.toLowerCase() // 짝수 인덱스는 대문자, 홀수 인덱스는 소문자로 변환
          )
          .join("") // 변환된 문자들을 다시 하나의 문자열로 결합합니다.
    )
    .join(" "); // 모든 단어를 공백으로 결합하여 최종 문자열을 만듭니다.
}
/* 
for문을 이용한 방식
function solution(s) {
  let answer = ""; // 결과 문자열을 저장할 변수 초기화
  const splitS = s.split(" "); // 입력 문자열을 공백을 기준으로 분리하여 배열로 저장

  for (let i = 0; i < splitS.length; i++) { // 각 단어에 대해 반복
    const handleSplitS = splitS[i].split(""); // 단어를 문자 배열로 분리

    for (let j = 0; j < handleSplitS.length; j++) { // 각 문자에 대해 반복
      if (j % 2 === 0) { // 짝수 인덱스인 경우
        answer += handleSplitS[j].toUpperCase(); // 문자를 대문자로 변환하여 결과에 추가
      } else { // 홀수 인덱스인 경우
        answer += handleSplitS[j].toLowerCase(); // 문자를 소문자로 변환하여 결과에 추가
      }
    }

    if (i < splitS.length - 1) { // 마지막 단어가 아닐 경우
      answer += " "; // 단어 사이에 공백 추가
    }
  }
  return answer; // 최종 결과 문자열 반환
}
*/
