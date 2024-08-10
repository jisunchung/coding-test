const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const K = parseInt(input[0]);
const N = parseInt(input[1]);

const final = input[2].split('');
const ladder = input.slice(3);

let topResult = Array.from({ length: K }, (_, i) => String.fromCharCode(65 + i)); // A, B, C, ...
let bottomResult = final.slice();

// ?의 위치 찾기
let questionIndex = ladder.findIndex(line => line.includes('?'));

// 위에서 ?까지 시뮬레이션
for (let i = 0; i < questionIndex; i++) {
    for (let j = 0; j < K - 1; j++) {
        if (ladder[i][j] === '-') {
            [topResult[j], topResult[j + 1]] = [topResult[j + 1], topResult[j]];
        }
    }
}

// 아래에서 ?까지 시뮬레이션
for (let i = N - 1; i > questionIndex; i--) {
    for (let j = 0; j < K - 1; j++) {
        if (ladder[i][j] === '-') {
            [bottomResult[j], bottomResult[j + 1]] = [bottomResult[j + 1], bottomResult[j]];
        }
    }
}

// ?에 들어갈 사다리 계산
let result = '';
for (let i = 0; i < K - 1; i++) {
    if (topResult[i] === bottomResult[i]) {
        result += '*';
    } else if (topResult[i] === bottomResult[i + 1] && topResult[i + 1] === bottomResult[i]) {
        result += '-';
        [topResult[i], topResult[i + 1]] = [topResult[i + 1], topResult[i]]; // 스왑
    } else {
        result = 'x'.repeat(K - 1); // 불가능한 경우
        break;
    }
}

console.log(result);
