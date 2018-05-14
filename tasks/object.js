const getSortKeys = () => {
    const object = {
        happiness3: 3,
        happiness4: 4,
        happiness1: 1,
        happiness2: 2,
        happiness5: 5,
    }
    
    const array = [];
    
    for(let k in object) {
        array.push([k, object[k]]);
    }
    
    return array.sort((a, b) => a[1] - b[1])
        .map(a => a[0])
}
console.log(getSortKeys())