import { Racer } from "./racer";

export class GasCar implements Racer {
  speed: number = 0;
  fuel: number;
  constructor(public team: string, fuel: number = 10) {
    this.fuel = fuel;
  }
  accelerate() {
    this.speed += 2;
    this.fuel -= 1;
  }
  isFuelEmpty() {
    return this.fuel <= 0;
  }
}
