// 입력값 가져오기
function getInputValue() {
    return document.getElementById("inputField").value.trim();
}

// 출력값 설정
function printResult(message) {
    document.getElementById("result").textContent = message;
}

// 계산 함수 (사칙연산만 허용)
function calculate(expression) {
    expression = expression.replace(/\s+/g, ""); // 공백 제거

    // 사칙연산만 허용하는 정규식
    const isValidExpression = /^[\d+\-*/().]+$/;
    if (!isValidExpression.test(expression)) {
        return "유효하지 않은 수식입니다. (사칙연산만 가능)";
    }

    try {
        const result = eval(expression); // 수식 평가
        return result;
    } catch (error) {
        return "유효하지 않은 수식입니다.";
    }
}

// 종료 처리 함수
function handleExit() {
    const confirmation = confirm("프로그램을 종료하시겠습니까?");
    if (confirmation) {
        printResult("프로그램이 종료되었습니다.");
    }
}

// 계산 처리 함수
function handleCalculate() {
    const input = getInputValue();
    if (input.toLowerCase() === "exit") {
        handleExit();
    } else {
        const result = calculate(input);
        printResult(`결과: ${result}`);
    }
}
