function solution(array, commands) {
    let result = [];
     for (let i = 0; i < commands.length; i++) {
        let k = array.slice(commands[i][0]-1,commands[i][1]).sort((a, b) => a - b)
        let mk = k[commands[i][2]-1]
     result.push(mk);
     }
    return result
}
