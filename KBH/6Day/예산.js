function solution(d, budget) {
    const sorted = [...d].sort((a, b) => a - b);
    
    let sum = 0;

    let count = 0;

    for(let i = 0; i < d.length; i++) {
        sum += sorted[i];
        if (sum > budget) {
            break;
        } else {
            count++;
        }
    }
    console.log(sum, count)
    return count;
}