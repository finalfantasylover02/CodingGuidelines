let result = 0;

function add(x, y) {
  result = x + y;
}

function subtract(x, y) {
  result = x - y;
}

const result = add(5, 10);
console.log(result);
const accumulate= add(result,6);
console.log(subtract(accumulate,12));
// switched away from global vars