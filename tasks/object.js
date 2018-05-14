module.exports.getSortKeys = () => {
    const object = {
        happiness3: 3,
        happiness4: 4,
        happiness1: 1,
        happiness2: 2,
        happiness5: 5,
    }
    
    const array = [];
    
    for(let k in object) {
        array.push({key: k, value: object[k]})
    }
    
    return array.sort((a, b) => a.value - b.value)
        .map(a => a.key)
}