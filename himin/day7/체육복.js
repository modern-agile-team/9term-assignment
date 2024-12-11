function solution(n, lost, reserve) {
    let actualLost = lost.filter(student => !reserve.includes(student));
    let actualReserve = reserve.filter(student => !lost.includes(student));

    actualLost.sort((a, b) => a - b);
    actualReserve.sort((a, b) => a - b);

    let borrowed = 0;

    for (let i = 0; i < actualLost.length; i++) {
        const student = actualLost[i];
        const previous = actualReserve.indexOf(student - 1); 
        const next = actualReserve.indexOf(student + 1); 

        if (previous !== -1) {
            actualReserve.splice(previous, 1); 
            borrowed++;
        } else if (next !== -1) {
            actualReserve.splice(next, 1); 
            borrowed++;
        }
    }

    return n - (actualLost.length - borrowed);
}