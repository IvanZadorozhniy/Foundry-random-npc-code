import { age_ranges, genders, names } from "./data";
import { races } from "./data";
export function getRandomIntInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
export function getGender() {
  return getRandomElement(genders);
}
export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRace() {
  return getRandomElement(races);
}
export function getRandomAge(race: string): number {

  if (!age_ranges[race]) {
    throw new Error(`Race ${race} not found`);
  }
  return getRandomIntInRange(age_ranges[race].min, age_ranges[race].max);
}

export function getRandomName(race: string, gender: string): string {

  if (!names[race]) {
    throw new Error(`Race ${race} not found`);
  }
  if (!names[race][gender]) {
    throw new Error(`Gender ${gender} not found`);
  }
  return getRandomElement(names[race][gender]['firstName']) + ' ' + getRandomElement(names[race][gender]['lastName']);
}

