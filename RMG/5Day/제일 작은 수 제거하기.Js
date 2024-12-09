/*
 * 입력받은 배열엣서 최소값을 제거하는 함수
 * solution([4,3,2,1]); // [4,3,2]
 * solution([10]); // [-1]
 */
function solution(arr) {
  // 배열의 길이가 1 이하인 경우 [-1] 반환합니다.
  if (arr.length <= 1) {
    return [-1];
  }

  // 배열에서 최소값의 인덱스 찾기
  const minIndex = arr.indexOf(Math.min(...arr));

  // 최소값 제거
  const newArr = [...arr]; // 원본 배열 복사
  newArr.splice(minIndex, 1); // 최소값을 제거

  return newArr; // 수정된 배열 반환
}
