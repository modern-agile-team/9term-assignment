function solution(n)
{
    const Num = n.toString().split("");
    
    let answer = 0;

    for (let i = 0; i < Num.length; i++) {
        answer += Number(Num[i]);
    }

    return answer;
}