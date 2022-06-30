import { SolarCar } from "../src/solar";

describe("SolarCar", () => {
  test("The team property is set from the constructor parameter", () => {
    const teamName = "Red Team";

    let newSolarCar = new SolarCar(teamName);

    expect(newSolarCar.team).toBe("Red Team");
  });
  test("The speed property starts at 0", () => {
    const teamName = "Red Team";

    let newSolarCar = new SolarCar(teamName);

    expect(newSolarCar.speed).toBe(0);
  });
  test("Calling accelerate once brings speed up to 1", () => {
    const teamName = "Red Team";

    let newSolarCar = new SolarCar(teamName);
    newSolarCar.accelerate();

    expect(newSolarCar.speed).toBe(1);
  });
  test("Calling accelerate twice brings speed up to 2", () => {
    const teamName = "Red Team";

    let newSolarCar = new SolarCar(teamName);
    newSolarCar.accelerate();
    newSolarCar.accelerate();

    expect(newSolarCar.speed).toBe(2);
  });
  test("Calling isFuelEmpty returns false", () => {
    const teamName = "Red Team";

    let newSolarCar = new SolarCar(teamName);

    expect(newSolarCar.isFuelEmpty()).toBe(false);
  });
});
