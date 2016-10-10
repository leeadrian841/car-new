var Car = function(colour, convertible) {
    this.colour = colour;
    this.convertible = convertible;
    this.speed = 0;
    this.accelerate = function(acceleration) {
	this.speed += acceleration;
    }
    this.decelerate = function(deceleration) {
	this.speed -= deceleration;
    }
}

module.exports = Car;
