function solution(board, moves) {
    var answer = 0;
    const barsket = [];
    let copyedboard = board.map(row => [...row]);
    //board의 행 부분들을 map 메서드를 통해 얕은 복사를 진행
    for (let move of moves) {
        const trueMoves = move - 1; //기존 moves로 인덱스 접근하면 복잡해서 0부터 시작할 수 있게끔 선언
        for (let j = 0; j < board.length; j++){
            if (copyedboard[j][trueMoves] > 0 ) { //copyedboard의
                barsket.push(copyedboard[j][trueMoves]);
                copyedboard[j][trueMoves] = 0;
                break;
            } else {
                continue;
            }
        }
        if (barsket[barsket.length-2] === barsket[barsket.length-1] && barsket[barsket.length-1] > 0) {
            for (let z = 0; z < 2; z++) {
                barsket.pop();
            }
            answer += 2;
        }
}
    return answer;
}