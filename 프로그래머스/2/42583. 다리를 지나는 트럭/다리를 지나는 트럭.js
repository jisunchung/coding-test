function solution(bridge_length, weight, truck_weights) {
    let time = 0
    const bridge = Array(bridge_length).fill(0)
    let bridgeWeight  = 0
    
    while(truck_weights.length || bridgeWeight){
        //현재 다리 맨 앞에 있는 트럭 빼기
        time++
        bridgeWeight -= bridge.shift()
        
        //다리에 더 올릴 수 있는지 확인하기
        if(bridgeWeight + truck_weights[0] <= weight){
            const truck = truck_weights.shift()
            bridge.push(truck)
            bridgeWeight += truck
            
        }else{
            //올릴 수 없으면 그냥 시간만 가게하기
            bridge.push(0)
        }
    }
    
    return time
}