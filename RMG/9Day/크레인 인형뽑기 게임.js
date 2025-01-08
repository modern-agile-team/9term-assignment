function solution(board, moves) {
  const box = []; // 인형을 담을 배열입니다.
  let count = 0; // 사라진 인형의 수를 세기 위한 변수입니다.

  // moves 배열을 순회하며 각 move에 대해 처리합니다.
  for (let i = 0; i < moves.length; i++) {
    // 현재 move에 해당하는 열에서 인형을 찾기 위해 board를 위에서 아래로 탐색합니다.
    for (let j = 0; j < board.length; j++) {
      // 현재 위치에 인형이 존재하는지 확인합니다.
      if (board[j][moves[i] - 1] !== 0) {
        // 인형을 box에 추가합니다.
        box.push(board[j][moves[i] - 1]);
        // 해당 위치의 인형을 제거하기 위해 0으로 설정합니다.
        board[j][moves[i] - 1] = 0;

        // box에 두 개 이상의 인형이 있고, 마지막 두 인형이 같으면
        if (box.length >= 2 && box[box.length - 1] === box[box.length - 2]) {
          // 마지막 두 인형을 제거합니다.
          box.pop();
          box.pop();
          // 사라진 인형의 수를 증가시킵니다 (2개가 사라졌으므로).
          count += 2;
        }

        // 인형을 찾았으므로 더 이상 아래로 내려가지 않도록 break 문을 사용합니다.
        break;
      }
    }
  }

  return count; // 최종적으로 사라진 인형의 수를 반환합니다.
}
