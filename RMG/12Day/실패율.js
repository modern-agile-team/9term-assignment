function solution(N, stages) {
  // 각 스테이지의 실패율을 저장할 배열을 생성합니다.
  const failure = [];

  // 1부터 N까지의 각 스테이지에 대해 반복합니다.
  for (let i = 1; i <= N; i++) {
    // i 스테이지에 도달한 플레이어 수를 계산합니다.
    let clearPlayer = stages.filter((x) => x >= i).length;

    // i 스테이지를 클리어하지 못한 플레이어 수를 계산합니다.
    let nonClearPlayer = stages.filter((x) => x === i).length;

    // 실패율을 계산하고 스테이지 번호와 함께 배열에 추가합니다.
    failure.push([i, nonClearPlayer / clearPlayer]);
  }

  // 실패율을 기준으로 내림차순으로 정렬합니다.
  failure.sort((a, b) => b[1] - a[1]);

  // 정렬된 배열에서 스테이지 번호만 추출하여 반환합니다.
  return failure.map((value) => value[0]);
}
