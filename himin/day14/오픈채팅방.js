function solution(record) {
    // 1. 유저 아이디와 닉네임을 저장할 객체 (최종 닉네임 상태를 유지)
    const userMap = {}; 
    // 2. 동작(Enter, Leave)을 기록할 배열
    const actions = []; 

    // 3. record 배열을 순회하며 각 문자열을 처리
    record.forEach((entry) => { // record 배열의 각 문자열을 entry로 받음
        const [action, uid, nickname] = entry.split(' '); // 공백을 기준으로 문자열을 분리
        
        if (action === 'Enter') { // 사용자가 채팅방에 입장한 경우
            userMap[uid] = nickname; // uid에 해당하는 닉네임 저장 또는 업데이트
            actions.push([uid, '님이 들어왔습니다.']); // uid와 메시지(입장)을 actions 배열에 추가
        } else if (action === 'Leave') { // 사용자가 채팅방에서 퇴장한 경우
            actions.push([uid, '님이 나갔습니다.']); // uid와 메시지(퇴장)을 actions 배열에 추가
        } else if (action === 'Change') { // 사용자가 닉네임을 변경한 경우
            userMap[uid] = nickname; // uid에 해당하는 닉네임을 새로운 닉네임으로 업데이트
        }
    });

    // 4. 최종 메시지 생성
    // actions 배열을 순회하며, 현재 uid의 닉네임과 메시지를 결합해 결과 배열로 반환
    return actions.map(([uid, message]) => `${userMap[uid]}${message}`);
}