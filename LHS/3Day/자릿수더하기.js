//자연수 n이 주어지면 n의 각 자릿수의 합을 구해 리턴
//n=123 1+2+3 
function solution(n)
{  
    let sum=0;
    for(let i; i<n.length; i++){
        sum+=n[i]+n[i]+1+n[i]+2;
    }

    

    return sum;
}