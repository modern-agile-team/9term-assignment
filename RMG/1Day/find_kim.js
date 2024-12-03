function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    // 배열의 길이만큼 for문을 돌려서 하나씩 검사할 수 있도록 합니다.
    if (seoul[i] == "Kim") {
      // for문 안에서 인덱스 [i]번째의 값이 Kim인지 확인합니다.
      return `Kim 서방은 ${i}에 있다`; // Kim을 찾았다면 return하여 함수를 끝냅니다.
    }
  }
  return "Kim서방을 찾을 수 없습니다."; // Kim서방을 찾지 못 하였을 경우
}
