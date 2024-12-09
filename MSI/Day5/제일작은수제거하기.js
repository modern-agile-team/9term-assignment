function solution(arr) {
    let minValue = Math.min(...arr);
    let resultArray = arr.filter(num => num !== minValue);
    if (resultArray.length === 0) {
        return [-1];
    }
    return resultArray;
}
