function solution(board, moves) {
    const stack = [];
    let total = 0; 
    const adjustedMoves = moves.map(value => value - 1);
    for (let move of adjustedMoves) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][move] !== 0) {
                const value = board[i][move]; 
                stack.push(value); 
                board[i][move] = 0; 
                if (stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
                    stack.pop(); 
                    stack.pop(); 
                    total += 2; 
                }
                break; 
            }
        }
    }
    return total; 
}