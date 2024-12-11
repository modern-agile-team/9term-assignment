/*
 * 요청받은 가격 배열을 기준으로 예산을 초과하지 않도록
 * 가장 많은 항목을 지원할 수 있는 경우의 수를 구하는 함수입니다.
 *
 * solution([1,3,2,5,4], 9); // 1 + 2 + 3 = 3
 * solution([2,2,3,3], 10); // 2 + 2+ 3 + 3 = 10
 */
function solution(d, budget) {
  // 요청 비용 배열 d를 오름차순으로 정렬
  const sortD = [...d].sort((a, b) => a - b);

  // reduce를 사용하여 예산 내에서 처리할 수 있는 요청의 수를 계산합니다.
  const result = sortD.reduce(
    (acc, cost) => {
      if (acc.total + cost <= budget) {
        acc.total += cost; // 총 금액에 요청 비용 추가합니다.
        acc.count++; // 처리한 요청 수 증가시킵니다.
      }
      return acc; // 누적 객체값을 반환합니다.
    },
    { total: 0, count: 0 }
  );

  return result.count; // 최종적으로 처리한 요청의 수 반환합니다.
}

/*
for문을 이용한 방식
function solution(d, budget) { 
  // 요청 비용 배열 d를 오름차순으로 정렬하여 새로운 배열 sortD에 저장
  const sortD = [...d].sort((a, b) => a - b);

  let total = 0; // 현재까지 지출한 총 금액을 저장하는 변수를 선언합니다.
  let count = 0; // 처리한 요청의 수를 세기 위한 변수를 선언합니다.

  for (let i = 0; i < sortD.length; i++) {
    // 현재까지의 총 금액과 다음 요청 비용의 합이 예산 이하인 경우
    if (total + sortD[i] <= budget) {
      total += sortD[i]; // 요청 비용을 총 금액에 추가합니다.
      count++; // 처리한 요청 수 증가
    } else {
      break; // 예산을 초과하면 for문 종료
    }
  }

  return count; // 최종적으로 처리한 요청의 수 반환
}
*/
