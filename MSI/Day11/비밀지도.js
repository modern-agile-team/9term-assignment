function solution(n, arr1, arr2) {
    const answer = arr1.map((num, i) => {
        const combined = (num | arr2[i]).toString(2).padStart(n, '0');
        return combined.replace(/0/g, ' ').replace(/1/g, '#');
    });

    return answer;
}
