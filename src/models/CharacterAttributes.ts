import { ICharacterAttributes } from "../interfaces/ICharacterAttributes";
import { attributes } from "../data";
import { getRandomElement, getRandomIntInRange } from "../utils";
export class CharacterAttributes implements ICharacterAttributes {
    alignment: string;
    ideals: string[];
    bonds: string[];
    flaws: string[];
    traits: string[];

    constructor(race: string) {
        this.alignment = this.getRandomAlignments(race);
        this.ideals = this.getRandomIdeals(this.alignment);
        this.bonds = this.getRandomBonds();
        this.flaws = this.getRandomFlaws();
        this.traits = this.getRandomTraits();
    }
    private getRandomAlignments(race: string) {
        return getRandomElement(attributes.alignments[race]);
    }
    private getRandomIdeals(alignments: string) {
        const numberOfIdeals = getRandomIntInRange(0, 4);
        const idealsCategory = attributes.ideals['idealsCategory'][alignments] || ["anyIdeals"];

        const idealsSet = new Set<string>();
        let possibleIdeas: string[] = [];
        idealsCategory.forEach(category => {
            possibleIdeas = possibleIdeas.concat(attributes.ideals['idealsByCategory'][category]);
        });
        while (idealsSet.size < numberOfIdeals) {
            const ideal = getRandomElement(possibleIdeas);
            idealsSet.add(ideal);
        }
        return Array.from(idealsSet);
    }
    private getRandomFlawsCategory() {
        const randomValue = Math.random();
        if (randomValue < 0.60) return 'minorFlaws';
        if (randomValue < 0.90) return 'majorFlaws';
        return 'fatalFlaws';
    }
    private getRandomFlaws() {
        const numberOfFlaws = getRandomIntInRange(0, 4);
        const flawsSet = new Set<string>();
        while (flawsSet.size < numberOfFlaws) {
            const category = this.getRandomFlawsCategory();
            flawsSet.add(getRandomElement(attributes.flaws[category]));
        }
        return Array.from(flawsSet);
    }
    private getRandomTraits(): string[] {
        const numberOfTraits = getRandomIntInRange(0, 4);
        const traitsSet = new Set<string>();

        while (traitsSet.size < numberOfTraits) {
            traitsSet.add(getRandomElement(attributes.traits));
        }

        return Array.from(traitsSet);
    }
    private getRandomBonds() {
        const numberOfBonds = getRandomIntInRange(0, 4);
        const bondsSet = new Set<string>();

        while (bondsSet.size < numberOfBonds) {
            bondsSet.add(getRandomElement(attributes.bonds));
        }

        return Array.from(bondsSet);
    }
}