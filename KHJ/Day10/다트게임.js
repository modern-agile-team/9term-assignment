function solution(dartResult) {
    let dart = dartResult.match(/\d+\s*[SDT][*#]?/g); // 점수별로 나누기
    let value = []; // 계산식을 저장할 배열
    for (let i = 0; i < dart.length; i++) {
        let current = dart[i]; // 현재 항목
        let result = ""; // 처리된 계산
        for (let j = 0; j < current.length; j++) {
            let char = current[j];
            if (!isNaN(char)) { // 숫자인 경우
                result += char; // 숫자를 그대로 추가
            } else if (char === "S") { // S 보너스 처리
                result += "**1"; // 1제곱 추가
            } else if (char === "D") { // D 보너스 처리
                result += "**2"; // 2제곱 추가
            } else if (char === "T") { // T 보너스 처리
                result += "**3"; // 3제곱 추가
            } else if (char === "*") { // * 옵션 처리
                result = `(${result}*2)`; // 현재 점수 두 배
                if (value.length > 0) { // 이전 점수도 두 배
                    value[value.length - 1] = `(${value[value.length - 1]}*2)`;
                }
            } else if (char === "#") { 
                result = `(${result}*-1)`; // 점수 반전
            }
        }
        value.push(result);
        console.log(result)
    }
    let finalExpression = value.join('+'); // 계산식을 합침
    return eval(finalExpression); // 최종 계산 후 반환
}
