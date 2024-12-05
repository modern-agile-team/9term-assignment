/*
 * numbers의 배열안에 있는 각각 원소들의 합의 모든 경우의 수를 구하는 함수입니다.
 * solution([2,1,3,4,1]); //[2,3,4,5,6,7]
 * solution([5,0,2,7]); // [2,5,7,9,12]
 */

function solution(numbers) {
  let answer = []; // answer라는 빈 배열을 선언합니다.

  for (let i = 0; i < numbers.length; i++) {
    // 배열 원소의 각각의 합을 구하기 위하여 for문을 실행합니다.
    for (let j = i + 1; j < numbers.length; j++) {
      // 첫번째 숫자를 구했으면 두번 째 수를 구하기 위하여 다시한먼 for문을 실행시킵니다.
      let sum = numbers[i] + numbers[j]; // i의 값과 j의 값을 더하여 sum이라는 변수에 배열을 할당합니다.
      answer.push(sum); // push()라는 메소드를 이용하여 answer에 삽입합니다.
    }
  }

  let result = Array.from(new Set(answer)); // 중복수가 있을 수 있으니 new Set() 메소드를 이용하여 중복값을 제거하고 할당합니다.
  result.sort((a, b) => a - b); // 정렬을 위해 sort()메소드를 이용하고 오름차순으로 정렬하기 위하여 함수를 이용하여 정렬합니다.
  return result;
}
