/*
 * 마라톤 경기에서 참가자와 완주자를 입력받고 완주하지 못한 사람을
 * 찾는 함수입니다. (탈락자는 무조건 1명입니다.)
 * solution(["leo", "kiki", "eden"], ["eden", "kiki"]); // "leo"
 * solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]); // "vinko"
 * solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]); // "mislav"
 */

function solution(participant, completion) {
  // 빈 객체를 생성합니다.
  let obj = new Object();
  let answer = "";

  // participant와 completion 배열을 정렬합니다. (동명이인을 처리하기 위함)
  participant.sort();
  completion.sort();

  // 정렬된 participant와 completion 배열을 객체에 저장합니다.
  obj.member = participant;
  obj.finish = completion;

  // participant 배열을 순회하면서 일치하지 않는 이름을 찾습니다.
  for (let i = 0; i < participant.length; i++) {
    // participant의 현재 요소와 completion의 현재 요소가 다르면
    if (participant[i] !== completion[i]) {
      answer = participant[i]; // 탈락한 참가자 이름 저장
      obj.retire = answer; // 객체에 저장 (선택적)
      return obj.retire; // 탈락한 참가자의 이름 반환
    }
  }
}
