function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5];
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const equalScore = [];
    const scores = [0, 0, 0];

    answers.forEach((answer, index) => {
        if (answer === pattern1[index % pattern1.length]) scores[0]++;
        if (answer === pattern2[index % pattern2.length]) scores[1]++;
        if (answer === pattern3[index % pattern3.length]) scores[2]++;
    });

    const maxScore = Math.max(...scores);

    for (let i = 0; i < 3; i++) {
        if (maxScore === scores[i]) {
            equalScore.push(i + 1);
        }
    }

    return equalScore;
}