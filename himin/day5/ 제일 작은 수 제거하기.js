function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    } else {
        const minValue = Math.min(...arr); 
        return arr.filter(num => num !== minValue); 
    }
}