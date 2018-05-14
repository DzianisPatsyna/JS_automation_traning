module.exports.getSortKeys = () => {
    const object = {
        happiness3: 3,
        happiness4: 4,
        happiness1: 1,
        happiness2: 2,
        happiness5: 5,
    }
    
    const array = [];
    const result = [];
    
    for(let k in object) {
        array.push([k, object[k]]);
    }
    
    array.sort((a, b) => a[1] - b[1])
         .forEach(e => result.push(e[0]));

    return result
}