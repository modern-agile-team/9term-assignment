function solution(s) {
    let answer = [];
    const character = s.split(" ");
    
    for (let i = 0; i < character.length; i++) {
        let arrayPushed = [];
        for (let j = 0; j < character[i].length; j++) {
            if ((j % 2) === 0 || j === 0) {
                arrayPushed.push(character[i][j].toUpperCase());
            } else {
                arrayPushed.push(character[i][j].toLowerCase());
            }
        }
        
        answer.push(arrayPushed.join(""));
    }
    
    return answer.join(" ");
}