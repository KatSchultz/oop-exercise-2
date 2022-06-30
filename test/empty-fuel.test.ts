import { findRacerWithEmptyFuel } from "../src/racer-functions";
import { GasCar } from "../src/gascar";
import { SolarCar } from "../src/solar";
import { Racer } from "../src/racer";

describe("findRacersWithEmptyFuel", () => {
  test("test with array of GasCar where some have no fuel", () => {
    const emptyCar = new GasCar("Gas Power", 0);
    const fullCar = new GasCar("Gas Power", 10);

    let carArray = [emptyCar, emptyCar, fullCar];

    expect(findRacerWithEmptyFuel(carArray)).toContain(emptyCar);
  });
  test("test with array of GasCar where all cars have no fuel", () => {
    const emptyCar = new GasCar("Gas Power", 0);

    let carArray = [emptyCar, emptyCar, emptyCar];

    expect(findRacerWithEmptyFuel(carArray)).toContain(emptyCar);
  });
  test("test with array of GasCar where no cars have no fuel", () => {
    const fullCar = new GasCar("Gas Power", 10);

    let carArray = [fullCar, fullCar, fullCar];

    expect(findRacerWithEmptyFuel(carArray)).toStrictEqual([]);
  });
  test("test with array of SolarCar", () => {
    const solarCar = new SolarCar("Solar Power");

    let carArray = [solarCar, solarCar, solarCar];

    expect(findRacerWithEmptyFuel(carArray)).toStrictEqual([]);
  });
  test("test with array with mix of SolarCar and GasCar", () => {
    const emptyCar = new GasCar("Gas Power", 0);
    const fullCar = new GasCar("Gas Power", 10);
    const solarCar = new SolarCar("Solar Power");

    let carArray: Racer[] = [emptyCar, fullCar, solarCar];

    expect(findRacerWithEmptyFuel(carArray)).toContain(emptyCar);
  });
  test("test with empty array", () => {
    let carArray: any = [];

    expect(findRacerWithEmptyFuel(carArray)).toStrictEqual([]);
  });
});
