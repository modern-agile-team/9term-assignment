function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let answer = arr.reduce((acc, cur) => acc < cur ? acc : cur);
    
    let index = arr.indexOf(answer);
    
    arr.splice(index, 1);
    
    return arr;
}