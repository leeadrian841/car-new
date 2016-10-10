var CarCreator = require('./car')

var yellowCar = new CarCreator('yellow', true)

console.log('yellow car speed is ' + yellowCar.speed)
console.log('yellow car color is ' + yellowCar.color)

yellowCar.accelerate(40)
yellowCar.setColor('purple')
console.log('yellow car current speed is ' + yellowCar.speed)
console.log('yellow car new color is ' + yellowCar.color)
