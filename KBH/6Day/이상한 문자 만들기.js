function solution(s) {
    let answer = [];
    const arraySplit = s.split(" ");
    
    for (let i = 0; i < arraySplit.length; i++) {
        let arrayPushed = [];
        for (let j = 0; j < arraySplit[i].length; j++) {
            if ((j % 2) === 0 || j === 0) {
                arrayPushed.push(arraySplit[i][j].toUpperCase());
            } else {
                arrayPushed.push(arraySplit[i][j].toLowerCase());
            }
        }
        
        answer.push(arrayPushed.join(""));
    }
    
    return answer.join(" ");
}