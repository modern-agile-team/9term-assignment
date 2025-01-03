function solution(numbers, hand) {
    // 초기 손 위치: *을 10으로, #을 12로 가정
    const handPosition = {left: 10, right: 12}; 
    
    const answer = numbers.reduce((acc, cur) => {
        if (cur === 0) cur = 11; // 0을 11로 변환
        
        const remainder = cur % 3; // 열 구분: 3으로 나눈 나머지

        // 나머지 1 (왼쪽 열 1, 4, 7)
        if (remainder === 1) {
            acc.push("L"); // 왼손으로 처리하고
            handPosition.left = cur; // 왼손 위치 갱신
        }
        // 나머지 0 (오른쪽 열: 3, 6, 9)
        else if (remainder === 0) {
            acc.push("R"); //오른손으로 처리하고
            handPosition.right = cur; // 오른손 위치 갱신
        }
        // 나머지 2 (가운데 열: 2, 5, 8, 0)
        else {
            const x = (num) => Math.floor((num - 1) / 3); // 행 계산 함수
            const y = (num) => (Math.floor((num - 1)) % 3); // 열 계산 함수

            // 현재 숫자에서 왼손, 오른손 위치 간의 맨해튼 거리 계산
            const left = Math.abs(x(cur) - x(handPosition.left)) + Math.abs(y(cur) - y(handPosition.left));
            const right = Math.abs(x(cur) - x(handPosition.right)) + Math.abs(y(cur) - y(handPosition.right));
            
            if (left > right) { // 왼손이 더 멀면 
                acc.push("R"); // 오른손으로 처리
                handPosition.right = cur; // 오른손 위치 갱신
            } else if (left < right) { // 오른손이 더 멀면
                acc.push("L"); // 왼손으로 처리
                handPosition.left = cur; // 왼손 위치 갱신
            } else { // 두 손의 거리가 같을 경우
                acc.push(hand === "left" ? "L" : "R"); // 주 사용 손(hand)으로 처리
                handPosition[hand] = cur; // 해당 손의 위치 갱신
            }
        }
        return acc; // 결과 누적
    }, []).join(""); // 결과 배열을 문자열로 합침
    
    return answer; // 최종 문자열 반환
}



