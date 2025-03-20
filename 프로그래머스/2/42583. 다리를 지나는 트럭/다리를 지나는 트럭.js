function solution(bridge_length, weight, truck_weights) {
    let answer = 0
    let q = Array(bridge_length).fill(0)
    let sum = 0
    while(truck_weights.length || sum > 0){
        answer++
        
        sum -= q.shift()
        
        if(truck_weights.length > 0){
            if(sum + truck_weights[0] <= weight){
                let curr = truck_weights.shift()
                q.push(curr)
                sum += curr
            }else{
                q.push(0)
            }
        }
    }
    return answer
}