function solution(board, moves) {
    let count = 0;
    const stack = [];
    
    for (let i = 0; i < moves.length; i++) {
        const peek = moves[i] - 1;
        
        for (let j = 0; j < board.length; j++) {
            if (board[j][peek] === 0) {
                continue;
            } else {
                const current = board[j][peek]; 
                board[j][peek] = 0; 
                
                if (stack.length > 0 && stack[stack.length - 1] === current) {
                    stack.pop();
                    count += 2; 
                } else {
                    stack.push(current);
                }
            } break;
        }
    }
    return count;
}