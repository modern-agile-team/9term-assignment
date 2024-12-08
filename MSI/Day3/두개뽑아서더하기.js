function solution(numbers) {
    const sums = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if (!sums.includes(sum)) {
                sums.push(sum);
            }
        }
    }

    return sums.sort((a, b) => a - b);
}