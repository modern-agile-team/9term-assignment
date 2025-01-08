function solution(answers) {
    const mathGiveUpArray = [];
    const mathGiveUpAnswer1 = [1, 2, 3, 4, 5];
    const mathGiveUpAnswer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const mathGiveUpAnswer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let mathGiveUp1 = 0
    let mathGiveUp2 = 0
    let mathGiveUp3 = 0
    
    for (let i = 0; i < answers.length; i++) {
        if (mathGiveUpAnswer1[i%(mathGiveUpAnswer1.length)] === answers[i]) {
            mathGiveUp1 += 1;
        }
        if (mathGiveUpAnswer2[i%(mathGiveUpAnswer2.length)]=== answers[i]) {
            mathGiveUp2 += 1;
        }
        if (mathGiveUpAnswer3[i%(mathGiveUpAnswer3.length)] === answers[i]) {
            mathGiveUp3 += 1;
        }
    }
    
    mathGiveUpArray.push(mathGiveUp1, mathGiveUp2 , mathGiveUp3);
    
    const maxMathGiveUp = Math.max(mathGiveUp1, mathGiveUp2, mathGiveUp3);
    const filterdanswer  = mathGiveUpArray.reduce((acc, cur, i) => {
        if ( cur === maxMathGiveUp) {
            acc.push(i+1);
        }
        return acc;
    }, []);
    
    return filterdanswer.sort((a, b) => a - b);
}