function solution(n) {
    let su = "수";
    let bak = "박";
    
    return (su + bak).repeat(n).slice(0, n);
}
