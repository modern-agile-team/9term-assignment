function solution(numbers, hand) {
  const result = []; // 결과를 저장할 배열 선언.
  let leftHandPosition = [0, 0]; // 왼손 초기 위치 ('*')
  let rightHandPosition = [2, 0]; // 오른손 초기 위치 ('#')

  // 키패드의 각 숫자를 좌표로 변환.
  const position = {
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    "*": [0, 0],
    0: [1, 0],
    "#": [2, 0],
  };

  // 두 위치 사이의 거리를 계산하는 함수
  function getDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  }

  // 주어진 숫자 배열을 순회
  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      // 왼쪽 열의 숫자는 무조건 왼손
      result.push("L");
      leftHandPosition = position[num]; // 왼손 위치 업데이트
    } else if (num === 3 || num === 6 || num === 9) {
      // 오른쪽 열의 숫자는 무조건 오른손
      result.push("R");
      rightHandPosition = position[num]; // 오른손 위치 업데이트
    } else {
      // 중간 열의 숫자 처리
      const leftDistance = getDistance(leftHandPosition, position[num]);
      const rightDistance = getDistance(rightHandPosition, position[num]);

      // 거리가 가까운 손을 선택, 거리가 같으면 주 손으로 결정
      if (
        leftDistance < rightDistance ||
        (leftDistance === rightDistance && hand === "left")
      ) {
        result.push("L");
        leftHandPosition = position[num]; // 왼손 위치 업데이트
      } else {
        result.push("R");
        rightHandPosition = position[num]; // 오른손 위치 업데이트
      }
    }
  }

  // 결과 배열을 문자열로 변환하여 반환
  return result.join("");
}
