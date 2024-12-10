function solution(absolutes, signs) {
    return absolutes.reduce((sum, value, index) => {
        return sum + (signs[index] ? value : -value);
    }, 0);
}
