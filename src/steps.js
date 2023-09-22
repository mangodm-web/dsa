function steps1(n) {
  let answer = '';
  
  for (let i = 1; i < n + 1; i++) {
    const sharps = Array(i).fill('#').join('');
    const blanks = Array(n - i).fill(' ').join('');
    answer = sharps + blanks;
    console.log(answer);
  }
}

steps1(3);

function steps2(n) {
  let answer = '';
  
  for (let i = 1; i < n + 1; i++) {
    const sharps = '#'.repeat(i);
    const blanks = ' '.repeat(n - i);
    answer = sharps + blanks;
    console.log(answer);
  }
}

steps2(3);
