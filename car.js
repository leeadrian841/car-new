var Car = function (color, convertible) {
  this.color = color
  this.convertible = convertible
  this.accelerate = function (acceleration) {
    this.speed += acceleration
  }
  this.decelerate = function (deceleration) {
    this.speed -= deceleration
  }
  this.setColor = function (newColor) {
    this.color = newColor
  }
}

module.exports = Car
