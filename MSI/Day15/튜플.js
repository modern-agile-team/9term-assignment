function solution(s) {
    const answer = [];
    const strList = s.replace("{{", "").replace("}}", "").split("},{");
    const setList = [];
  
    for (const str of strList) {
      setList.push(str.split(","));
    }
  
    setList.sort((a, b) => a.length - b.length);
  
    answer.push(parseInt(setList[0][0]));
  
    for (let i = 1; i < setList.length; i++) {
      const ele = getEle(setList[i], answer);
      answer.push(ele);
    }
  
    return answer;
  }
  
  function getEle(set, answer) {
    const filteredSet = set.filter(ele => !answer.includes(parseInt(ele)));
    return parseInt(filteredSet[0]);
  }