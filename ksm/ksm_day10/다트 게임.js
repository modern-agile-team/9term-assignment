function solution(dartResult) {
    const regex = /(10|[0-9])([SDT])([*#]?)/g; // 정규표현식: 점수|보너스|옵션을 분리
    const matches = [...dartResult.matchAll(regex)]; // 모든 매칭 결과를 배열로 저장
    const scores = []; // 계산된 점수를 저장할 배열

    matches.forEach((match, index) => { 
        // match[1]: 점수, match[2]: 보너스, match[3]: 옵션
        let score = parseInt(match[1], 10); // 점수를 10진수 정수로 변환
        const bonus = match[2]; // 보너스 추출
        const option = match[3]; // 옵션 추출

        // 보너스 계산: 점수에 보너스를 적용
        if (bonus === "D") score **= 2; // Double: 제곱
        else if (bonus === "T") score **= 3; // Triple: 세제곱

        // 옵션 계산: * 또는 # 적용
        if (option === "*") {
            score *= 2; // 현재 점수를 2배
            if (index > 0) scores[index - 1] *= 2; // 바로 전 점수도 2배
        } else if (option === "#") {
            score *= -1; // 현재 점수를 마이너스로
        }

        // 점수를 scores 배열에 저장
        scores.push(score);
    });

    // 점수 합산 후 반환
    return scores.reduce((acc, cur) => acc + cur, 0);
}

