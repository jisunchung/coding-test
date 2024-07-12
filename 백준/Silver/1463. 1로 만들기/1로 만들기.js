const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim())

//사용가능 연산 ->  3으로 나눠떨어지면 3으로나누기, 2로 나눠떨어지면 2로, 1빼기

//dp[i]는 i를 1로 만들 수 있는 최소 연산 횟수

const dp = Array(N + 1).fill(0)


for (let i = 2; i <= N; i++) {
	dp[i] = dp[i - 1] + 1; // 1을 빼는 경우
	if (i % 2 === 0) {
		dp[i] = Math.min(dp[i], dp[i / 2] + 1); // 2로 나누는 경우
	}
	if (i % 3 === 0) {
		dp[i] = Math.min(dp[i], dp[i / 3] + 1); // 3으로 나누는 경우
	}
}

console.log(dp[N])