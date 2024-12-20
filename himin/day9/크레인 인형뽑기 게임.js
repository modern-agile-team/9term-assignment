function solution(board, moves) {
    const basket = []; // 인형을 담을 빈 배열
    let removedDolls = 0; // 사라진 인형의 개수 기록

    // moves에 있는 요소 순서대로 처리
    moves.forEach(move => { 
        const column = move - 1; 

        // board의 첫 번째 행부터 아래로 내려가며 인형을 찾기
        for (let row = 0; row < board.length; row++) {
            if (board[row][column] !== 0) { // 인형이 있는 경우
                const doll = board[row][column]; 
                board[row][column] = 0; 

                // 바구니의 맨 위 인형과 비교
                if (basket[basket.length - 1] === doll) {
                    basket.pop(); 
                    removedDolls += 2; 
                } else {
                    basket.push(doll); 
                }

                break; // 다음 move로 이동
            }
        }
    });

    return removedDolls; // 사라진 인형 개수를 출력
}