const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(item) {
        this.heap.push(item);
        let idx = this.heap.length - 1;
        let parentIdx = Math.floor(idx / 2);

        while (parentIdx > 0 && this.heap[parentIdx] > this.heap[idx]) {
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
            parentIdx = Math.floor(idx / 2);
        }
    }

    pop() {
        if (this.heap.length <= 1) return null;
        if (this.heap.length === 2) return this.heap.pop();

        const root = this.heap[1];
        this.heap[1] = this.heap.pop();
        let idx = 1;
        let leftIdx = idx * 2;
        let rightIdx = idx * 2 + 1;

        while (this.heap[leftIdx] !== undefined && (this.heap[idx] > this.heap[leftIdx] || this.heap[idx] > this.heap[rightIdx])) {
            let smallerIdx = leftIdx;
            if (this.heap[rightIdx] !== undefined && this.heap[rightIdx] < this.heap[leftIdx]) {
                smallerIdx = rightIdx;
            }

            [this.heap[idx], this.heap[smallerIdx]] = [this.heap[smallerIdx], this.heap[idx]];
            idx = smallerIdx;
            leftIdx = idx * 2;
            rightIdx = idx * 2 + 1;
        }

        return root;
    }

    size() {
        return this.heap.length - 1;
    }
}

const minHeap = new MinHeap();

let n = -1;
rl.on("line", function(line) {
    if (n === -1) {
        n = parseInt(line);
    } else {
        line.split(' ').forEach((value) => {
            minHeap.push(parseInt(value));
            if (minHeap.size() > n) minHeap.pop();
        });
    }
}).on("close", function() {
    console.log(minHeap.pop());
    process.exit();
});
