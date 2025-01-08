function solution(s) {
  // 문자열에서 가장 바깥쪽 중괄호를 제거하고 집합들을 분리합니다.
  const sets = s.slice(2, -2).split("},{");

  // 각 집합을 숫자 배열로 변환하고 길이에 따라 정렬합니다.
  const sortedSets = sets
    .map((set) => set.split(",").map(Number))
    .sort((a, b) => a.length - b.length);

  // Set을 사용하여 중복을 자동으로 제거합니다.
  const resultSet = new Set();

  // 정렬된 집합들을 순회하면서 새로운 요소를 결과에 추가합니다.
  for (const set of sortedSets) {
    for (const num of set) {
      resultSet.add(num);
    }
  }

  // Set을 배열로 변환하여 반환합니다.
  return Array.from(resultSet);
}
