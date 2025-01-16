function solution(names, yearning, photos) {
    return photos.map(photo => {
        let sum = 0
        for(name of photo){
            sum += names.indexOf(name) !== -1 ? yearning[names.indexOf(name)]: 0
        }
        return sum
    })
}