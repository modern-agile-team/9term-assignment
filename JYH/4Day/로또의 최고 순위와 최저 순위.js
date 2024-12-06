function solution(lottos, win_nums) {
    let zerocount = 0;
    let wincount = 0;
    
    const getrank = (count) => {
        if (count === 6) return 1;
        if (count === 5) return 2;
        if (count === 4) return 3;
        if (count === 3) return 4;
        if (count === 2) return 5;
        return 6;
    };
    
    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] === 0)zerocount++; 
        
        for (let j = 0; j < win_nums.length; j++) {
            if (lottos[i] === win_nums[j]) wincount++;
        }
    }
    let maxrank = getrank(wincount + zerocount);
    let minrank = getrank(wincount);
    
    return [maxrank, minrank];
}