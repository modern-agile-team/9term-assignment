function solution(board, moves) {
    const basket = []; // 뽑은 인형을 담는 바구니
    let countPop = 0; // 터진 인형의 개수를 저장할 변수
    
    for (let i = 0; i < moves.length; i++) { 
        // moves의 인덱스는 1부터 시작이므로 0부터 시작으로 변환
        const move = moves[i]-1; 
        
        for (let j = 0; j < board.length; j++) { 
            const doll = board[j][move]; // 현재 위치에서 뽑을 인형
            if (doll !== 0) { // 인형이 존재하면
                board[j][move] = 0; // 해당 위치를 0으로 변경
                
                // 바구니의 마지막 인형과 뽑은 인형이 같은 경우
                if (basket.length > 0 && basket[basket.length - 1] === doll) {
                    basket.pop(); // 마지막 인형 제거
                    countPop += 2; // 터진 인형 수 +2
                } else {
                    basket.push(doll); // 같지 않은 경우, 바구니에 인형 추가
                }
                break; // 인형을 뽑았으면 다음 move로 넘어감
            }
        }
    }

    return countPop; // 터진 인형의 총 개수 반환
}