const calculatorForm = document.querySelector("#calculator"); // form 태그를 가져옵니다.
const userInput = document.querySelector("#calculator input"); // 사용자의 입력값을 받기 위하여 가저옵니다.
const output = document.querySelector("#calculator_result"); // 결과를 출력할 태그를 가져옵니다.

// 입력받은 값의 유효성을 검사하는 함수
function validateInput(event) {
  event.preventDefault();

  const numberRegex = /^\s*(\d+\s*|[+\-*/]\s*)+$/;
  const validity = numberRegex.test(userInput.value);

  if (validity) {
    return separator();
  } else {
    return alert("잘못된 식입니다.");
  }
}

// 입력받은 값을 배열로 바꾸는 함수
function separator() {
  if (userInput.value === "exit") {
    return closeTab();
  }

  const operatorRegex = /(\d+|\+|\-|\*|\/)/g; // 숫자와 연산자를 분리하는 정규식
  const inputArraySeparator = userInput.value.match(operatorRegex);
  return performMultiplicationAndDivision(inputArraySeparator);
}

// 덧샘 계산 함수
function add(inputArray, additionIndices) {
  const resultArray = [...inputArray];

  for (let i = 0; i < additionIndices.length; i++) {
    const index = additionIndices[i];
    const leftIndex = index - 1;
    const rightIndex = index + 1;
    const sum =
      Number(resultArray[leftIndex]) + Number(resultArray[rightIndex]);

    resultArray[index] = sum;
    resultArray.splice(leftIndex, 1);
    resultArray.splice(rightIndex - 1, 1);

    additionIndices = additionIndices.map((i) => (i > leftIndex ? i - 2 : i));
  }

  return performAdditionAndSubtraction(resultArray);
}

//뺄셈 계산 함수
function subtract(inputArray, subtractionIndices) {
  const resultArray = [...inputArray];

  for (let i = 0; i < subtractionIndices.length; i++) {
    const index = subtractionIndices[i];
    const leftIndex = index - 1;
    const rightIndex = index + 1;

    const difference =
      Number(resultArray[leftIndex]) - Number(resultArray[rightIndex]);

    resultArray[index] = difference;
    resultArray.splice(leftIndex, 1);
    resultArray.splice(rightIndex - 1, 1);

    subtractionIndices = subtractionIndices.map((i) =>
      i > leftIndex ? i - 2 : i
    );
  }

  return performAdditionAndSubtraction(resultArray);
}

// 곱셈 함수
function multiply(inputArray, multiplicationIndices) {
  const resultArray = [...inputArray];

  for (let i = 0; i < multiplicationIndices.length; i++) {
    const index = multiplicationIndices[i];
    const leftIndex = index - 1;
    const rightIndex = index + 1;

    const product =
      Number(resultArray[leftIndex]) * Number(resultArray[rightIndex]);

    resultArray[index] = product;
    resultArray.splice(leftIndex, 1);
    resultArray.splice(rightIndex - 1, 1);

    multiplicationIndices = multiplicationIndices.map((i) =>
      i > leftIndex ? i - 2 : i
    );
  }

  return performMultiplicationAndDivision(resultArray);
}

// 나눗셈 함수
function divide(inputArray, divisionIndices) {
  const resultArray = [...inputArray];

  for (let i = 0; i < divisionIndices.length; i++) {
    const index = divisionIndices[i];
    const leftIndex = index - 1;
    const rightIndex = index + 1;

    const quotient =
      Number(resultArray[leftIndex]) / Number(resultArray[rightIndex]);

    if (!isFinite(quotient)) {
      // 예외 처리
      return alert("0으로 나눌 수 없습니다");
    }
    resultArray[index] = quotient;
    resultArray.splice(leftIndex, 1);
    resultArray.splice(rightIndex - 1, 1);

    divisionIndices = divisionIndices.map((i) => (i > leftIndex ? i - 2 : i));
  }

  return performMultiplicationAndDivision(resultArray);
}

// 결과를 출력하는 함수
function printResult(result) {
  output.innerText = `결과 : ${result}`;
}

// 곱셈과 나눗셈을 판별하는 함수
function performMultiplicationAndDivision(inputArray) {
  const multiplicationIndices = inputArray.reduce((acc, operator, index) => {
    if (operator === "*") {
      acc.push(index);
    }
    return acc;
  }, []);
  const divisionIndices = inputArray.reduce((acc, operator, index) => {
    if (operator === "/") {
      acc.push(index);
    }
    return acc;
  }, []);

  if (multiplicationIndices.length > 0) {
    multiply(inputArray, multiplicationIndices);
  } else if (divisionIndices.length > 0) {
    divide(inputArray, divisionIndices);
  } else {
    performAdditionAndSubtraction(inputArray);
  }
}

// 더하기와 빼기를 판별하는 함수
function performAdditionAndSubtraction(inputArray) {
  const additionIndices = inputArray.reduce((acc, operator, index) => {
    if (operator === "+") {
      acc.push(index);
    }
    return acc;
  }, []);
  const subtractionIndices = inputArray.reduce((acc, operator, index) => {
    if (operator === "-") {
      acc.push(index);
    }
    return acc;
  }, []);

  if (additionIndices.length > 0) {
    return add(inputArray, additionIndices);
  } else if (subtractionIndices.length > 0) {
    return subtract(inputArray, subtractionIndices);
  } else {
    return printResult(inputArray);
  }
}

// 페이지 종료 함수
function closeTab() {
  const status = confirm("정말로 종료하시겠습니까?");

  if (status) {
    window.close();
  } else {
    alert("값을 입력해주세요");
  }
}

calculatorForm.addEventListener("submit", validateInput);
