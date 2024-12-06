function solution(n)
{
    const str = n.toString();
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    return sum;
}