function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let start = array.slice(commands[i][0] - 1, commands[i][1])
        start.sort(function(a, b) {
            return a - b;
        })
        start[commands[i][2] - 1]
        answer.push(start[commands[i][2] - 1])
    }
    return answer;
}