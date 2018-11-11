const filterNumbers = (numbers) => numbers.filter(x => !isNaN(+x)).map(x => +x);

module.exports = {
  add: (...x) => filterNumbers(x).reduce((t,y) => t + y),
  sub: (...x) => filterNumbers(x).reduce((t,y) => t - y),
  mul: (...x) => filterNumbers(x).reduce((t,y) => t * y, 1),
  div: (x,y) => ((!isNaN(x) && !isNaN(y)) && y > 0) ? x/y : 0
}