function solution(participant, completion) {
    let pa = participant.sort()
    let co = completion.sort()
    console.log(pa)
    console.log(co)
    for (let i = 0; i < pa.length; i++) {
        if(pa[i]!==co[i]){
            return pa[i]
        }
        }
}