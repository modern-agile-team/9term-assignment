function solution(dartResult) {
    const answer = [];
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = parseInt(dartResult[i]);
            }
        } else {
            switch (dartResult[i]) {
                case "S":
                    answer.push(temp);
                    break;
                case "D":
                    answer.push(Math.pow(temp, 2));
                    break;
                case "T":
                    answer.push(Math.pow(temp, 3));
                    break;
                case "#":
                    answer[answer.length - 1] *= -1;
                    break;
                case "*":
                    answer[answer.length - 1] *= 2;
                    if (answer.length > 1) {
                        answer[answer.length - 2] *= 2;
                    }
                    break;
            }
        }
    }

    // 최종 점수 계산
    let score = 0;
    for (const val of answer) {
        score += val;
    }

    return score;
}