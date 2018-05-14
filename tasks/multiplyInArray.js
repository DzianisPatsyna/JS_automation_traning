const array = new Array(10)
    .fill(0)
    .map(a => Math.round(Math.random() * 10) + 1)
    .sort((a, b) => b - a)
    .splice(0, 3)
    .reduce((acum, curr) => acum * curr);