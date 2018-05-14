const array = new Array(10)
    .fill(0)
    .map(a => a = Math.round(Math.random() * 10) + 1)
    .sort((a, b) => b - a)
    .splice(-3)

const multiply = array.reduce((acum, curr) => acum * curr);