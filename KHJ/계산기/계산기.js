function calculate(input) {
    const number = input.match(/\d+/g).map(parseFloat); // 숫자 추출 및 변환
    const operator = input.match(/[\+\-\*\/]/g); 
    const podium = {'+': 1, '-': 1, '*': 2, '/': 2}; // 연산자 우선순위

    // 연산자가 남아 있는 동안 반복
    while (operator.length > 0) {
        // 가장 높은 우선순위의 연산자를 찾음
        let maxPriorityIndex = 0;
        for (let i = 1; i < operator.length; i++) {
            if (podium[operator[i]] > podium[operator[maxPriorityIndex]]) {
                maxPriorityIndex = i;
            }
        }
        // 해당 연산자의 앞뒤 숫자를 가져옴
        const leftNumber = number[maxPriorityIndex];
        const rightNumber = number[maxPriorityIndex + 1];
        const realoperator = operator[maxPriorityIndex];

        // 연산 수행
        let result;
        if (realoperator === '+') {
            result = leftNumber + rightNumber; 
        } else if (realoperator === '-') {
            result = leftNumber - rightNumber; 
        } else if (realoperator === '*') {
            result = leftNumber * rightNumber; 
        } else if (realoperator === '/') {
            result = leftNumber / rightNumber; 
        }

        // 계산 결과를 숫자 배열에 반영
        number.splice(maxPriorityIndex, 2, result); // 두 숫자를 계산 결과로 대체
        operator.splice(maxPriorityIndex, 1); // 사용된 연산자를 제거
    }
    const finalResult = number[0]; 
    return finalResult % 1 === 0 ? finalResult : finalResult.toFixed(2); 
}

function performCalculation() {
    const expression = document.getElementById('expression').value; 
    if (expression === 'exit' || expression === 'ㄷ턋') {
        alert('계산기를 종료합니다.');
        return;
    }       
    const result = calculate(expression);       
    document.getElementById('result').textContent = result; 
}
