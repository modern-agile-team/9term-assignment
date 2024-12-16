function solution(participant, completion) {
    const participantObj = {}; // 참가자 객체 생성
  
    // 참가자를 객체에 저장
    for (const name of participant) {
      participantObj[name] = (participantObj[name] || 0) + 1; // 이름이 있으면 기존값에서, 없으면 0에서 카운트 1 증가
    }
  
    // 완주자를 객체에서 제거
    for (const name of completion) {
      participantObj[name]--; // 이름 카운트를 1 감소
    }
  
    // 완주하지 못한 참가자 찾기
    for (const name in participantObj) {
      if (participantObj[name] > 0) {
        return name; // 남아 있는 이름 반환
      }
    }
  }