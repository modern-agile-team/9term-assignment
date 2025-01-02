// 입력값 가져오기
function getInputValue() {
    return document.getElementById("inputField").value.trim();
}

// 출력값 설정
function printResult(message) {
    document.getElementById("result").textContent = message;
}

// 공백 제거 함수
function removeWhitespace(expression) {
    return expression.replace(/\s+/g, ""); // 모든 공백 제거
}

// 유효성 검사 함수
function isValidExpression(expression) {
    const validPattern = /^[\d+\-*/().]+$/; // 숫자, 사칙연산 기호, 괄호만 허용
    return validPattern.test(expression); // 유효하면 true, 아니면 false 반환
}

// 0으로 나누기 예외 처리 함수
function handleZeroDivision(expression) {
    if (/\/0(?!\d)/.test(expression)) {
        return "0으로 나눌 수 없습니다."; // 예외 메시지 반환
    }
    return null; // 문제가 없으면 null 반환
}

// 계산 함수 (계산만 수행)
function calculate(expression) {
    try {
        return eval(expression); // 수식 평가
    } catch (error) {
        return "유효하지 않은 수식입니다.";
    }
}

// 계산 처리 함수
function handleCalculate() {
    let input = getInputValue(); // 사용자가 입력한 값 가져오기
    input = removeWhitespace(input); // 공백 제거

    // 유효성 검사
    if (!isValidExpression(input)) {
        printResult("유효하지 않은 수식입니다. (사칙연산만 가능)");
        return;
    }

    // 0으로 나누기 예외 처리
    const zeroDivisionError = handleZeroDivision(input);
    if (zeroDivisionError) {
        printResult(zeroDivisionError);
        return;
    }

    // 수식 계산
    const result = calculate(input);
    printResult(`결과: ${result}`);
}
