function solution(board, moves) {
    const basket = [];
    let removedCount = 0;

    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        const col = move - 1;

        for (let row = 0; row < board.length; row++) {
            if (board[row][col] !== 0) {
                const doll = board[row][col];
                board[row][col] = 0;

                if (basket.length > 0 && basket[basket.length - 1] === doll) {
                    basket.pop();
                    removedCount += 2;
                } else {
                    basket.push(doll);
                }
                break;
            }
        }
    }

    return removedCount;
}
