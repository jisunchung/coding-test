const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const parts = input.split('::');
const leftPart = parts[0] ? parts[0].split(':') : [];
const rightPart = parts[1] ? parts[1].split(':') : [];

const needLength  = 8 - (leftPart.length + rightPart.length);
const middlePart = new Array(needLength).fill('0000');

let fullAddress = [...leftPart, ...middlePart, ...rightPart];

console.log(fullAddress.map(group => group.padStart(4, '0')).join(':'))
