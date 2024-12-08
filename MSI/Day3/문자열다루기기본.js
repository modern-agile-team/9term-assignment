function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if (/^\d+$/.test(s)) {
            return true;
        }
    }
    return false;
}