function solution(n, lost, reserve) {
    const realLost = lost.filter(student => !reserve.includes(student));
    const realReserve = reserve.filter(student => !lost.includes(student));
    
    for (const student of realReserve) {
        const front = realLost.indexOf(student - 1);
        
        if (front !== -1) {
            realLost.splice(front, 1);
            continue;
        }
        
        const back = realLost.indexOf(student + 1);
        
        if (front !== -1) {
            realLost.splice(back, 1);
        }
    }
    return n - realLost.length;
}