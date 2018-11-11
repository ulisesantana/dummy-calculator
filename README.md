# Dummy calculator
[![Build Status](https://travis-ci.com/ulisesantana/dummy-calculator.png?branch=master)](https://travis-ci.com/ulisesantana/dummy-calculator)
[![codecov](https://codecov.io/gh/ulisesantana/dummy-calculator/branch/master/graph/badge.svg)](https://codecov.io/gh/ulisesantana/dummy-calculator)


```javascript
const calc = require('dummy-calculator');

calc.add(2,3,5) // 10
calc.sub(2,3,5) // -6
calc.mul(2,3,5) // 30
calc.div(21,3) // 7 
```

`div` method only accepts 2 arguments, but `add`,`sub` and `mul` have no arguments limit. 

TO DO:
  - [ ] Add square method for calculate the square of a number.