function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    let countAB = 0;
    
    for (let i = min ; i <= max; i++) {
        countAB += i;
    }
    
    return countAB;
}