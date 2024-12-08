function solution(array, commands) {
    const answer = [];

    let  kNumber= "";

    for (let i = 0; i < commands.length; i++){
    const indexi = commands[i][0];
    const indexj = commands[i][1];
    const indexk = commands[i][2];

    kNumber = array.slice(indexi-1, indexj).sort((a, b) => a-b).slice(indexk-1, indexk);
        answer.push(kNumber[0]);
    }

    return answer;
}