function solution(num) {
  // 함수 선언문
  if (num % 2 == 0) {
    // 나머지가 0이라면 짝수
    return "Even";
  } else {
    // 나머지가 0이 아니라면 홀수
    return "Odd";
  }
}

const solution = (num) => {
  //함수 표현식 (화실표 함수)
  if (num % 2 == 0) {
    // 나머지가 0이라면 짝수
    return "Even";
  } else {
    // 나머지가 0이 아니라면 홀수
    return "Odd";
  }
};
