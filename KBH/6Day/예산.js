function solution(d, budget) {
    const sortedArray = d.toSorted((a, b) => a - b);
    let sum = 0;
    let count = 0;

    for (let i = 0; i < d.length; i++) {
        sum += sortedArray[i];

        if (sum > budget) {
            
            break;
        
        }

        count++;
    }

    return count;
}