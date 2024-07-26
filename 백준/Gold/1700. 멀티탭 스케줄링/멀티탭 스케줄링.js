const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let tab = new Set();
let unpluggedCount = 0;

for (let i = 0; i < K; i++) {
		// 이미 꽂혀있는 경우
		if (tab.has(arr[i])) continue;

		// 멀티탭에 빈 자리가 있는 경우
		if (tab.size < N) {
				tab.add(arr[i]);
				continue;
		}

		// 멀티탭에 빈 자리가 없는 경우
		let lastUsedIndex = -1;
		let itemToUnplug = -1;

		// 멀티탭에 꽂힌 기기들을 조사하여 가장 나중에 사용되거나 사용되지 않을 기기를 찾는다
		for (let item of tab) {
				let nextUseIndex = arr.slice(i + 1).indexOf(item);
				if (nextUseIndex === -1) { // 앞으로 사용되지 않는 경우
						itemToUnplug = item;
						break;
				} else if (nextUseIndex > lastUsedIndex) {
						lastUsedIndex = nextUseIndex;
						itemToUnplug = item;
				}
		}

		// 플러그를 뺀다
		tab.delete(itemToUnplug);
		tab.add(arr[i]);
		unpluggedCount++;
}

console.log(unpluggedCount);
