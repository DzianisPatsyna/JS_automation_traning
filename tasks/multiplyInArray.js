const array = [];

for (let i = 0; i < 10; i++) {
    array.push(Math.round(Math.random() * 10) + 1);
}

array.sort((a, b) => b - a).splice(3)

const multiply = array.reduce((acum, curr) => acum * curr);