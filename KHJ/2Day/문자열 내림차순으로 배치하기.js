function solution(s) {
    let a = s.split('');
   let line =  a.sort(function (a, b) {
  if (a > b) {
    return -1; 
  }
  if (a < b) {
    return 1;
  } else {
    return 0; 
  }
});
    return line.join('') 
    
}