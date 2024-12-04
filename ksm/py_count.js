/*function solution(s){
    let count1 = 0;
    let count2 = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === 'y' || s[i]==='Y') {
            count1++;
        }else if(s[i] === 'p' || s[i]==='P') {
            count2++;            
        }  
    }return count1===count2;
}*/


function solution(s){
    let yCount = 0; //의미 있는 변수 네이밍
    let pCount = 0; 
    
    s = s.toLowerCase(); //toLowerCase 메소드 사용
  
    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'y') {
            yCount++;
        }else if(s[i] === 'p') {
            pCount++;            
        }  
    }
    return yCount === pCount;
}
