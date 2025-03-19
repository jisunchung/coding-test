function solution(participant, completion) {
    const map = new Map()
    participant.forEach(parti => {
        if(map.has(parti)) map.set(parti, map.get(parti)+1)
        else map.set(parti, 1)
    })
    completion.forEach(comple => {
        map.set(comple, map.get(comple)-1)
        if(map.get(comple) === 0) map.delete(comple)
    })
    //return [...map][0][0] # [[key, value], ...]
    return [...map.keys()][0]
}