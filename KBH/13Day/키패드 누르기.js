function solution(numbers, hand) {
    let answer = "";

    //키패드 변수
    const keyPad = {1:[0, 0], 2:[0, 1], 3:[0,2], 4:[1,0], 5:[1,1], 6:[1,2], 7:[2,0], 8:[2,1], 9:[2,2], "*":[3,0],
        0:[3,1], "#":[3,2]}; // 4행 3열 keyPad[3][2] 최대
    let leftHandLocation = "*";
    let rightHandLocation = "#";
    
    //처음 시작하는 부분은 반복문에 포함하지 않고 answer에 값을 저장함.
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] ===7) {
           answer += "L"; 
           leftHandLocation = numbers[i];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) { 
            answer += "R";
            rightHandLocation = numbers[i];
        } else {
            const [leftHandX, leftHandY] = keyPad[leftHandLocation]; // [3,0]
            const [rightHandX, rightHandY] = keyPad[rightHandLocation]; // [3,2]
            const [targetX, targetY] = keyPad[numbers[i]]; // 0기준일 때 [3, 1]
            const leftAbsoluteValue = (Math.abs(leftHandX - targetX) + Math.abs(leftHandY - targetY));
            const rightAbsoluteValue = (Math.abs(rightHandX - targetX) + Math.abs(rightHandY - targetY));
            if (leftAbsoluteValue > rightAbsoluteValue) {
                answer += "R";
                rightHandLocation = numbers[i];
            } else if (leftAbsoluteValue < rightAbsoluteValue) {
                answer += "L";
                leftHandLocation = numbers[i];
            } else{
                if (hand === "left") {
                    answer += "L";
                    leftHandLocation = numbers[i];
                } else {
                    answer += "R";
                    rightHandLocation = numbers[i];
                }
            }
        }
    }
    return answer;
}
