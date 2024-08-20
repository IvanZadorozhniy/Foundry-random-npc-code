import { ICharacterAbilities } from "../interfaces/ICharacterAbilities";
import { getRandomIntInRange } from "../utils";
export class CharacterAbilities implements ICharacterAbilities {

    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    constructor() {
        this.strength = getRandomIntInRange(6, 19);
        this.dexterity = getRandomIntInRange(6, 19);
        this.constitution = getRandomIntInRange(6, 19);
        this.intelligence = getRandomIntInRange(6, 19);
        this.wisdom = getRandomIntInRange(6, 19);
        this.charisma = getRandomIntInRange(6, 19);
    }
}