function solution(record) {
    var answer = [];
    const userMap = {}
    for (let i of record) {
        let records = i.split(" "); 
        let say = records[0]
        let userID = records[1]
             if (say === "Enter" || say === "Change") {
                const name = records[2]; 
                userMap[userID] = name; 
             }
    }
     for (let i of record) {
        let records = i.split(" "); 
        let say = records[0]
        let userID = records[1]
              
             if(say === "Enter"){
                answer.push(`${userMap[userID]}님이 들어왔습니다.`);
            }else if (say === "Leave"){
                answer.push(`${userMap[userID]}님이 나갔습니다.`);
            }
}
    return answer;
}

    