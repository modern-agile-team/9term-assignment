function solution(array, commands) {
    var answer = [];
    let ab = "";
    for (let i = 0; i < commands.length; i++){
    let indexi = commands[i][0];
    let indexj = commands[i][1];
    let indexk = commands[i][2];

    let ab = array.slice(indexi-1, indexj).sort((a, b) => a-b);
        ab = ab.slice(indexk-1, indexk);
        answer.push(ab);
    }
    return answer;
}