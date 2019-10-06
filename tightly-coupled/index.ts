function Wheels() {
  this.action = () => console.log("The wheels go 'round and 'round.");
  console.log("Made some wheels.");
}

function Pistons() {
  this.action = () => console.log("The pistons fire up and down.");
  console.log("Made some pistons.");
}

function Engine() {
  this.pistons = new Pistons();
  this.action = () => {
    this.pistons.action();
    console.log("The engine goes vroom vroom.");
  };
  console.log("Made an engine.");
}

function Car() {
  this.wheels = new Wheels();
  this.engine = new Engine();
  this.action = () => {
    this.wheels.action();
    this.engine.action();
    console.log("The car drives by.");
  };
  console.log("Made a car.");
}

const car = new Car();
car.action();
