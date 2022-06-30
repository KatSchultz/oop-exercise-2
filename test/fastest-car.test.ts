import { GasCar } from "../src/gascar";
import { Racer } from "../src/racer";
import { SolarCar } from "../src/solar";
import { findAverageSpeed, getFastestRacer } from "../src/racer-functions";

describe("getFastestRacer", () => {
  test("racerA is faster", () => {
    const racerA = new GasCar("Gas Team");
    racerA.speed = 50;
    const racerB = new GasCar("Gas Team");
    racerB.speed = 40;

    const fastestCar = getFastestRacer(racerA, racerB);

    expect(fastestCar).toBe(racerA);
  });
  test("racerB is faster", () => {
    const racerA = new GasCar("Gas Team");
    racerA.speed = 35;
    const racerB = new GasCar("Gas Team");
    racerB.speed = 100;

    const fastestCar = getFastestRacer(racerA, racerB);

    expect(fastestCar).toBe(racerB);
  });
  test("Racers are at same speed", () => {
    const racerA = new GasCar("Gas Team");
    racerA.speed = 50;
    const racerB = new GasCar("Gas Team");
    racerB.speed = 50;

    const fastestCar = getFastestRacer(racerA, racerB);

    expect(fastestCar).toBe(null);
  });
  test("Test with GasCar and SolarCar", () => {
    const racerA = new SolarCar("Gas Team");
    racerA.speed = 70;
    const racerB = new GasCar("Gas Team");
    racerB.speed = 50;

    const fastestCar = getFastestRacer(racerA, racerB);

    expect(fastestCar).toBe(racerA);
  });
});
