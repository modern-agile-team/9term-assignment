function solution(numbers, hand) {
    // 키패드 좌표를 객체로 정의 (숫자와 * #의 위치를 2차원 배열 좌표로 매핑)
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    // 왼손 엄지의 초기 위치를 '*'로 설정
    let leftThumb = keypad['*'];
    // 오른손 엄지의 초기 위치를 '#'로 설정
    let rightThumb = keypad['#'];
    // 결과를 저장할 문자열 초기화
    let result = "";

    // 거리 계산 함수: 두 좌표 간 맨해튼 거리를 계산
    const calculateDistance = (start, target) => {
        // x좌표와 y좌표 차이의 절대값을 더해 거리를 구함
        return Math.abs(start[0] - target[0]) + Math.abs(start[1] - target[1]);
    };

    // 입력받은 숫자 배열을 하나씩 순회
    for (const number of numbers) {
        // 누를 숫자의 키패드 좌표를 가져옴
        const target = keypad[number];

        // 왼손 전용 키(1, 4, 7)인 경우
        if ([1, 4, 7].includes(number)) {
            result += 'L'; // 결과 문자열에 'L' 추가
            leftThumb = target; // 왼손 위치를 현재 키패드 좌표로 업데이트
        }
        // 오른손 전용 키(3, 6, 9)인 경우
        else if ([3, 6, 9].includes(number)) {
            result += 'R'; // 결과 문자열에 'R' 추가
            rightThumb = target; // 오른손 위치를 현재 키패드 좌표로 업데이트
        }
        // 중앙 키(2, 5, 8, 0)인 경우
        else {
            // 왼손과 목표 키패드 간의 거리 계산
            const leftDistance = calculateDistance(leftThumb, target);
            // 오른손과 목표 키패드 간의 거리 계산
            const rightDistance = calculateDistance(rightThumb, target);

            // 왼손이 더 가까운 경우 또는 거리가 같은데 손잡이가 'left'인 경우
            if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === 'left')) {
                result += 'L'; // 결과 문자열에 'L' 추가
                leftThumb = target; // 왼손 위치를 현재 키패드 좌표로 업데이트
            } 
            // 오른손이 더 가까운 경우 또는 거리가 같은데 손잡이가 'right'인 경우
            else {
                result += 'R'; // 결과 문자열에 'R' 추가
                rightThumb = target; // 오른손 위치를 현재 키패드 좌표로 업데이트
            }
        }
    }

    // 최종 결과 문자열 반환
    return result;
}
