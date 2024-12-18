function solution(s) {
    const length = s.length; 
    if (length === 4 || length === 6) {
       
        for (let i = 0; i < length; i++) {
           
            if (s[i] < '0' || s[i] > '9') {
                return false; 
            }
        }
        return true; 
    }

    return false; 
}
