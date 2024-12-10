function solution(s) {
  return s
    .split(' ')
    .map(word => changeText(word))
    .join(' ');
}

function changeText(word) {
  return word
    .split('')
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join('');
}
