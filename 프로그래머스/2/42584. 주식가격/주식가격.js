function solution(prices) {
    let answer = new Array(prices.length).fill(0); // 결과 배열
    let stack = []; // 스택: (인덱스, 가격)

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1][1] > prices[i]) {
            let [pastIndex] = stack.pop(); // 가격이 떨어진 시점의 인덱스
            answer[pastIndex] = i - pastIndex; // 지속된 시간 계산
        }
        stack.push([i, prices[i]]); // 현재 인덱스와 가격 저장
    }

    // 스택에 남아 있는 값 처리 (끝까지 가격이 유지된 경우)
    while (stack.length > 0) {
        let [pastIndex] = stack.pop();
        answer[pastIndex] = prices.length - 1 - pastIndex;
    }

    return answer;
}