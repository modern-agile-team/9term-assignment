function solution(n, arr1, arr2) {
    var answer = [];
    let resultarr1 = arr1.map(num => num.toString(2).padStart(n, '0'));
    let resultarr2 = arr2.map(num => num.toString(2).padStart(n, '0'));
    for(let i = 0; i < n; i++ ){
        let change = ""
        for(let j = 0; j < n; j++){
            if(resultarr1[i][j] === '1' || resultarr2[i][j] === '1'){
                change += '#';
            } else {
                change += ' ';
        }
    }
    answer.push(change);
}
    return answer
}