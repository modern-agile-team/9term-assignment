function solution(a, b) {
    let countAB = 0;
    
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    for(let i = min ; i <= max; i++){
        countAB += i
    }
    return countAB;
}