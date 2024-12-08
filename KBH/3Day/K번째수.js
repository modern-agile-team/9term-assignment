function solution(array, commands) {
    const answer = [];

    for (let i = 0; i < commands.length; i++){
    const indexI = commands[i][0];
    const indexJ = commands[i][1];
    const indexK = commands[i][2];

    const kNumber = array.slice(indexi-1, indexj).sort((a, b) => a-b).slice(indexk-1, indexk);
        answer.push(kNumber[0]);
    }

    return answer;
}