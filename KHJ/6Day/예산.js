function solution(d, budget) {
    d.sort((a, b) => a - b);
    let totalTeam = 0;
    for(let i = 0 ; i < d.length; i++){
        if (budget - d[i] >= 0) {
            budget -= d[i];  //예산에서 현재 요청비용 빼기
            totalTeam++; //if문이 돌아가서 totalTeam 하나 증가
        }else{
            break;
        }
    } return totalTeam;
}
        
