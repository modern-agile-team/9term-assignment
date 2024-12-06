function solution(s){
    let p ="";
    let y ="";
    for(let i = 0; i<s.length; i++){
        if(s[i] == 'p'){
            p = p+"p";
        }else if(s[i] == 'P'){
            p = p+"P";
        }else if(s[i] == 'y'){
            y = y+"y";
        }else if(s[i] == 'Y'){
            y = y+"Y";
        }
    }
    return p.length === y.length || (p.length === 0 &&  y.length === 0) ? true : false;;
}