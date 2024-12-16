function solution(a, b) {
    var sum = 0;
    var start = a < b ? a : b;
    var end = a > b ? a : b;

    for (var i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}