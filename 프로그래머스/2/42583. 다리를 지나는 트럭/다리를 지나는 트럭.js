function solution(bridge_length, weight, truck_weights) {
    let time = 0
    const bridge = []
    let sum = 0
    
    while(truck_weights.length > 0 || bridge.length > 0){
        if(bridge.length > 0 && bridge[0].time === time){
            sum -= bridge.shift().weight
        }
        if(truck_weights.length > 0 && sum + truck_weights[0] <= weight){
            const curr = truck_weights.shift()
            sum += curr
            bridge.push({
                weight : curr, time : time + bridge_length
            })
        }else {
            if(bridge.length > 0){
                time = bridge[0].time-1
            }
        }
        time++
    }
    
    return time
}