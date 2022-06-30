import { GasCar } from "../src/gascar";

describe("GasCar", () => {
  test("The team and fuel properties are set from the constructor parameters", () => {
    let teamName = "Blue Team";
    let gasAmount = 15;

    let newGasCar = new GasCar(teamName, gasAmount);

    expect(newGasCar.team).toBe("Blue Team");
    expect(newGasCar.fuel).toBe(15);
  });
  test("Fuel defaults to 10, when the second constructor parameter is omitted", () => {
    let teamName = "Blue Team";

    let newGasCar = new GasCar(teamName);

    expect(newGasCar.fuel).toBe(10);
  });
  test("The speed property starts at 0", () => {
    let teamName = "Blue Team";

    let newGasCar = new GasCar(teamName);

    expect(newGasCar.speed).toBe(0);
  });
  test("Calling accelerate once brings speed up to 2", () => {
    let teamName = "Blue Team";

    let newGasCar = new GasCar(teamName);
    newGasCar.accelerate();

    expect(newGasCar.speed).toBe(2);
  });
  test("Calling accelerate twice brings speed up to 4", () => {
    let teamName = "Blue Team";

    let newGasCar = new GasCar(teamName);
    newGasCar.accelerate();
    newGasCar.accelerate();

    expect(newGasCar.speed).toBe(4);
  });
  test("Calling accelerate once reduces fuel by 1", () => {
    let teamName = "Blue Team";

    let newGasCar = new GasCar(teamName);
    newGasCar.accelerate();

    expect(newGasCar.fuel).toBe(9);
  });
  test("Calling accelerate twice reduces fuel by 2", () => {
    let newGasCar = new GasCar("Red Team");
    newGasCar.accelerate();
    newGasCar.accelerate();

    expect(newGasCar.fuel).toBe(8);
  });
  test("isFuelEmpty returns true when fuel is 0", () => {
    let newGasCar = new GasCar("Red Team", 0);

    expect(newGasCar.isFuelEmpty()).toBe(true);
  });
  test("isFuelEmpty returns false when fuel is greater than 0", () => {
    let newGasCar = new GasCar("Red Team");

    expect(newGasCar.isFuelEmpty()).toBe(false);
  });
});
