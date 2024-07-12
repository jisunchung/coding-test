let [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const tmp = Number(n.split(' ')[1]-1)
console.log(input.split(' ').map(Number).sort((a,b)=> a-b)[tmp])