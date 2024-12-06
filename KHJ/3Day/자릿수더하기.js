function solution(n)
{
    const str = String(n);
    const newArr = str.split('')
    let sum = 0;
    for (let i = 0; i <newArr.length; i++ )
    {
        sum += Number(newArr[i]);
    }
    return sum
}
