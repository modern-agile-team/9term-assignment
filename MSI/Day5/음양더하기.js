function solution(absolutes, signs) {
    let total = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            total += absolutes[i];
        } else {
            total -= absolutes[i];
        }
    }
    return total;
}
