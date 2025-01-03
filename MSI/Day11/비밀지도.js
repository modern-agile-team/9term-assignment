function solution(n, arr1, arr2) {
    const answer = arr1.map((num1, i) => {
        const combined = (num1 | arr2[i]).toString(2).padStart(n, '0');
        return combined.replace(/0/g, ' ').replace(/1/g, '#');
    });

    return answer;
}