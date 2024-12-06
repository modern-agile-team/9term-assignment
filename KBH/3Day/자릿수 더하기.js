function solution(n)
{
    let answer = 0;
    let Num = n.toString().split("");
    for (let i = 0; i < Num.length; i++){
        answer += Number(Num[i]);
    }

    return answer;
}