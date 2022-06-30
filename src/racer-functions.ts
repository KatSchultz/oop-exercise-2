import { Racer } from "./racer";

export function findRacerWithEmptyFuel(racers: Racer[]): Racer[] {
  return racers.filter((racer) => racer.isFuelEmpty() === true);
}

export function findAverageSpeed(racers: Racer[]): number {
  if (racers.length === 0) return 0;
  return (
    racers.reduce((acc, racer) => {
      return (acc += racer.speed);
    }, 0) / racers.length
  );
}

export function getFastestRacer(racerA: Racer, racerB: Racer): Racer | null {
  if (racerA.speed === racerB.speed) return null;
  return racerA.speed > racerB.speed ? racerA : racerB;
}
