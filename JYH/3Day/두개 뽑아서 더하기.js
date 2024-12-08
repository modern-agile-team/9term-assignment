function solution(numbers) {
    let sums = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            sums.add(sum)
        }
    }
    return Array.from(sums).sort((a, b) => a - b);;
}