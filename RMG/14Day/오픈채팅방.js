function solution(s) {
  // 문자열을 숫자 배열들로 변환합니다.
  const sets = s
    .slice(2, -2)
    .split("},{")
    .map((set) => set.split(",").map(Number));

  // 배열들을 길이 순으로 정렬합니다.
  sets.sort((a, b) => a.length - b.length);

  // Set으로 중복을 제거하고 순서를 유지합니다.
  const result = new Set();
  for (const set of sets) {
    for (const num of set) {
      result.add(num);
    }
  }

  // Set을 배열로 변환하여 반환합니다.
  return Array.from(result);
}
