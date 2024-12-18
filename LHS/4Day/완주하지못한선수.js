function solution(participant, completion) {
    // participant 배열을 정렬한 후, completion 배열과 비교
    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
        // 겹치는 값이 없거나 마지막 참가자가 완주하지 못한 경우
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}