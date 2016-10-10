var Car = require("./car.js")

var yellowCar = new Car("yellow", true);
var redCar = new Car("red", false)

console.log(yellowCar)
console.log(redCar)

// yellowCar.accelerate(10);
// console.log(yellowCar);
yellowCar.decelerate(5);

console.log(yellowCar);
