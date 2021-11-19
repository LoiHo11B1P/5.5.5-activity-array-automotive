//this includes the vehicle class as a module
const vehicleBaseClass = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new vehicleBaseClass.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends vehicleBaseClass.Vehicle {

    maximumPassengers = 6;
    maximumSpeed = 200;
    fuel = 100;
    scheduleService = false;

    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        super.numberOfWheels = 4;
    }

    // maximum passenger
    set maximumPassengers(maxPassengers) {
        this.maximumPassengers = maxPassengers;
    }
    get maximumPassengers() {
        return this.maximumPassengers;
    }

    // passenger
    set passenger(pass) {
        super.passenger = pass;
    }
    get passenger() {
        return super.passenger;
    }

    // number of wheel
    set numberOfWheels(numberOfWheels) {
        super.numberOfWheels = numberOfWheels;
    }
    get numberOfWheels() {
        return super.numberOfWheels;
    }
    
    set maximumSpeed(maxSpeed) {
        this.maximumSpeed = maxSpeed;
    }
    get maximumSpeed() {
        return this.maximumSpeed
    }

    set fuel(fuel) {
        this.fuel = fuel;
    }

    get fuel() {
        return this.fuel;
    }

    set scheduleService(service) {
        this.scheduleService = service;
    }

    get scheduleService() {
        return this.scheduleService;
    }

    // load passenger method
    loadPassenger(num) {
        if(num < this.maximumPassengers){
            this.availableRoom = true;
        } else {
            this.availableRoom = false;
        }
    }

    start() {
        const isStart = super.start();
        if(isStart) {
            console.log('Car started correctly!');
        } else {
            console.log("Not enought fuel to start...");
        }
    }

    scheduleService(mileage) {
        if(mileage > 30000) {
            this.maitenance = true;
        } else {
            this.maitenance = false;
        }
    }

}

// Testing Car class
let car = new Car("Toyota", "Sedan", "2021", "blue", "10202");
console.log(car)    // initial car creat

// set additional attribute
car.numberOfWheels = 6;
car.passenger = 10;
car.maximumPassengers = 15;

// display car with custom attribute
console.log(car)

// test car methods
car.loadPassenger(3);

console.log(car);

car.start();

car.fuel = 0;
car.start();

// Trying out Truck Class