function solution(record) {
  // 사용자 정보를 저장할 객체
  const users = {};
  // 사용자 활동 기록을 저장할 배열
  const orders = [];

  // record 배열의 각 기록을 처리
  for (let rec of record) {
    // 각 기록을 공백으로 나누어 명령어, 사용자 ID, 별명을 추출
    const [cmd, uid, nickname] = rec.split(" ");
    
    // 'Enter' 명령어 처리
    if (cmd === "Enter") {
      // 사용자 ID와 별명을 users 객체에 저장
      users[uid] = nickname;
      // 활동 기록에 'Enter' 명령어와 사용자 ID 추가
      orders.push([cmd, uid]);
    
    // 'Leave' 명령어 처리
    } else if (cmd === "Leave") {
      // 활동 기록에 'Leave' 명령어와 사용자 ID 추가
      orders.push([cmd, uid]);
    
    // 'Change' 명령어 처리
    } else if (cmd === "Change") {
      // 사용자 ID에 해당하는 별명을 업데이트
      users[uid] = nickname;
    }
  }

  // 최종 결과를 저장할 배열
  const results = [];
  
  // 활동 기록을 기반으로 최종 메시지 생성
  for (let order of orders) {
    const [cmd, uid] = order; // 명령어와 사용자 ID 추출
    
    // 'Enter' 명령어에 대한 메시지 생성
    if (cmd === "Enter") {
      results.push(`${users[uid]}님이 들어왔습니다.`);
    
    // 'Leave' 명령어에 대한 메시지 생성
    } else if (cmd === "Leave") {
      results.push(`${users[uid]}님이 나갔습니다.`);
    }
  }
  
  // 최종 결과 배열 반환
  return results;
}
