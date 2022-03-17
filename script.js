const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(this.speed)
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(this.brake)
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate()
mercedes.brake()
