function solution(array, commands) {
    let result = [];
    
    for (let command of commands) { // [253],[441],[173]
        let i = command[0]; //2,4,1
        let j = command[1]; //5,4,7
        let k = command[2]; //3,1,3
        
        let slicearray = array.slice(i - 1, j).sort((a, b) => a - b); // 배열의 i번째부터 j번째까지 자른 후 정렬
        result.push(slicearray[k - 1]); // 배열의 k번째
    }
    return result;
}
