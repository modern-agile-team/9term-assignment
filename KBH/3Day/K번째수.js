function solution(array, commands) {
    const answer = [];

    for (let i = 0; i < commands.length; i++){
    const indexI = commands[i][0];
    const indexJ = commands[i][1];
    const indexK = commands[i][2];

    const kNumber = array.slice(indexI - 1, indexJ).sort((a, b) => a - b).slice(indexK-1, indexK);
        answer.push(kNumber[0]);
    }

    return answer;
}