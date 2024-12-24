function solution(dartResult) {
    let dart = dartResult.split("");
    let scores = [];
    let score = 0;
    
    for (let i = 0; i < dart.length; i++) {
        if (!isNaN(dart[i])) {
            if (dart[i] === "1" && dart[i + 1] === "0") {
                score = 10;
                i++;
            } else {
                score = dart[i];
            }
        } else if (dart[i] === "S") {
            scores.push(Math.pow(score, 1));
        } else if (dart[i] === "D") {
            scores.push(Math.pow(score, 2));
        } else if (dart[i] === "T") {
            scores.push(Math.pow(score, 3));
        } else if (dart[i] === "#") {
            scores[scores.length - 1] *= -1;
        } else if (dart[i] === "*") {
            scores[scores.length - 2] *= 2;
            scores[scores.length - 1] *= 2;
        }
    }
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum;
}