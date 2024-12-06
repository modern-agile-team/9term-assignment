function solution(s) {
    var length = s.length;
    var mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return s[mid - 1] + s[mid];
    } else {
        return s[mid];
    }
}
