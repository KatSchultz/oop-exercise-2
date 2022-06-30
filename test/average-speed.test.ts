import { GasCar } from "../src/gascar";
import { Racer } from "../src/racer";
import { SolarCar } from "../src/solar";
import { findAverageSpeed } from "../src/racer-functions";

describe("findAverageSpeed", () => {
  test("test with array of GasCar with different speeds", () => {
    const car10 = new GasCar("Gas Team");
    car10.speed = 10;
    const car20 = new GasCar("Gas Team");
    car20.speed = 20;

    const carArray: GasCar[] = [car10, car20];

    expect(findAverageSpeed(carArray)).toBe(15);
  });
  test("test with array of GasCar and SolarCar with different speeds", () => {
    const car10 = new GasCar("Gas Team");
    car10.speed = 10;
    const car20 = new SolarCar("Gas Team");
    car20.speed = 20;

    const carArray: Racer[] = [car10, car20, car10, car20];

    expect(findAverageSpeed(carArray)).toBe(15);
  });
  test("test with array of GasCar and SolarCar with different speeds", () => {
    const gasCar = new GasCar("Gas Team");
    gasCar.speed = 0;
    const solarCar = new SolarCar("Gas Team");
    solarCar.speed = 0;

    const carArray: Racer[] = [gasCar, gasCar, solarCar, solarCar];

    expect(findAverageSpeed(carArray)).toBe(0);
  });
  test("test with an empty array and expect 0", () => {
    const carArray: any[] = [];

    expect(findAverageSpeed(carArray)).toBe(0);
  });
});
