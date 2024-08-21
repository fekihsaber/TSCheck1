export interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  export class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  const myCar = new Car("BMW", "Porshe", 2022);
  myCar.start(); 
  