/*
 * 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
 * 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때
 * 여벌의 체육복을 가진 학생은 양 옆에만 빌려줄 수 있습니다. 이 떄 수업을 들을 수 있는 최대값을 구하는 함수입니다.
 * solution(5, [2, 4], [1, 3, 5]); // 5
 * solution(5, [2, 4], [3]); // 4
 * solution(3, [3], [1]); // 2
 */
function solution(n, lost, reserve) {
  // 입력받은 n명의 만큼의 학생을 배열에 1로 지정합니다.
  const students = new Array(n).fill(1);
  let count = 0;

  // 체육복을 도난당한 학생은 0으로 처리합니다.
  for (let l of lost) {
    students[l - 1]--;
  }

  // 여벌 체육복이 있는 학생은 2로 처리합니다
  for (let r of reserve) {
    students[r - 1]++;
  }

  for (let i = 0; i < n; i++) {
    // 여벌옷이 있고 옆사람이 체육복이 없는 경우
    if (students[i] === 2 && students[i - 1] === 0) {
      students[i] = 1;
      students[i - 1] = 1;
      // 빌려주었으므로 모두 1로 만들어줍니다
    }
  }
  for (let i = 0; i < n; i++) {
    if (students[i] > 0) {
      count++;
    }
  }
  return count;
}
