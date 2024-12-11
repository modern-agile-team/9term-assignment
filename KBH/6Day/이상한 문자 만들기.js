function solution(s) {
    const answer = [];
    const words = s.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        const arrayPushed = [];

        for (let j = 0; j < words[i].length; j++) {

            if ((j % 2) === 0 || j === 0) {

                arrayPushed.push(words[i][j].toUpperCase());

            } else {
                
                arrayPushed.push(words[i][j].toLowerCase());

            }
        }
        
        answer.push(arrayPushed.join(""));
    }
    
    return answer.join(" ");
}