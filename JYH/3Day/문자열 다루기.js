function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if(s.split('').every(x => !isNaN(x)))
        {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}