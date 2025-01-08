function solution(n, lost, reserve) {    
    const studentCount = [null];
    const sortedlost = [...lost].sort();
    const sortedreserve = [...reserve].sort();
    let answer=0;
    
    for (let i = 1; i <= n; i++) {
        studentCount[i] = 1; //체육복 개수
    }
    for (let i = 0; i < reserve.length; i++) {
        studentCount[sortedreserve[i]] += 1; //여벌을 가지고 있는 학생에
    } // +1을 더함 (체육복의 개수 2개)
    for (let i = 0; i < lost.length; i++) {
        studentCount[sortedlost[i]] -= 1; // 도난 당한 학생의 체육복을
    } // -1 함. (해당 학생 체육복 0개)

    for (let i = 0; i < studentCount.length; i++) {
        if (studentCount[sortedreserve[i]] === 2) {
            if (studentCount[sortedreserve[i]-1] === 0) {
                studentCount[sortedreserve[i]-1] += 1;
                studentCount[sortedreserve[i]] -= 1;
            } else if (studentCount[sortedreserve[i]+1] === 0) {
                studentCount[sortedreserve[i]+1] += 1;
                studentCount[sortedreserve[i]] -= 1;
            }
        } 
    }
    answer = studentCount.filter((e) => e > 0).length;

    return answer;
}