function solution(records) {
    const messages = []; // 출력 메시지를 저장할 배열 
    const userNicks = {}; // 사용자 id와 닉네임을 매핑할 객체

    // 이벤트 객체 지정: 이벤트에 따른 메시지 
    const events = { Enter: "님이 들어왔습니다.", Leave: "님이 나갔습니다." };

    // record 순회: 이벤트와 사용자 정보 처리
    records.forEach((record) => {
        // 공백 기준으로 이벤트, 사용자 id, 닉네임 추출
        const [event, userid, nickname] = record.split(" "); 
        
        // 'Enter' 또는 'Leave' 이벤트인 경우 처리
        if (event !== "Change") { 
            messages.push([event, userid]); // messages 배열에 [이벤트, 사용자 id] 저장
        }

        // 닉네임이 주어진 경우 userNicks 객체 갱신
        if (nickname) {
            userNicks[userid] = nickname; // 해당 사용자 id의 닉네임 정보 갱신
        }
    });

    // 메시지 배열을 "닉네임 + 이벤트 메시지" 형태로 변환
    const answer = ([event, uid]) => userNicks[uid] + events[event]; 

    // messages 배열을 순회하며 변환된 메시지 반환
    return messages.map(answer); 
}