function solution(n, arr1, arr2) {
  const result = []; // 결과값을 받는 빈배열을 선언합니다.

  for (let i = 0; i < n; i++) {
    // 논리연산자를 이용하여 arr1과 arr2의 값을 연산하고,
    // toString 메소드를 이용해 이진법으로 변환한 후,
    // padStart() 메소드를 이용해 자릿수를 n과 동일하게 합니다.
    const conversion = (arr1[i] | arr2[i]).toString(2).padStart(n, "0");

    // 정규표현식을 이용하여 1이면 # 0이면 공백으로 처리하고 결과 배열에 추가합니다.
    result.push(conversion.replace(/1/g, "#").replace(/0/g, " "));
  }

  return result;
}
