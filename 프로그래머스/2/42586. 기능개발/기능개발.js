function solution(progresses, speeds) {
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const stack = [];

  let result = [];

  while (days.length) {
    let current = days.shift(); // stack의 top처럼 사용
    let count = 1;

    // stack처럼 앞으로 배포 가능한 것들을 pop
    while (days.length && days[0] <= current) {
      days.shift();
      count++;
    }

    result.push(count);
  }

  return result;
}