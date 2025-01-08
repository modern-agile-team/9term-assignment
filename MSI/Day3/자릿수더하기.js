function solution(N) {
    let sum = 0;

    while (N > 0) {
        sum += N % 10;
        N = Math.floor(N / 10);
    }

    return sum;
}
