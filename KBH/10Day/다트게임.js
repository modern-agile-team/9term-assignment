function solution(dartResult) {

    const rounds = dartResult.match(/\d+[SDT][*#]?/g);

    const scores = [];

    for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i];
        const score = Number(round.match(/\d+/g));
        const bonus = round.match(/[SDT]/g)[0];

        //옵션 값 뽑아오기기
        const hasOption = round.includes('*') || round.includes('#');
        const option = hasOption ? round[round.length - 1] : null;
        
        //회차별로 점수 값 저장하는 변수수
        let roundscore = score;

        switch (bonus) {
            case 'S' :
                roundscore = score;
                break;
            case 'D' :
                roundscore = score ** 2;
                break;
            case 'T' :
                roundscore = score ** 3;
                break;
            default :
                continue;
        }

        if (option === "*") {

            roundscore *= 2;
            
            if(i > 0) {
                
                scores[i - 1] *= 2;
            
            }
        } else if ( option === "#") {
                
            roundscore *= (-1);
        
        }
        
        scores.push(roundscore);

    }
    return scores[0] + scores[1] + scores[2];;
}

solution("1S2D*3T");