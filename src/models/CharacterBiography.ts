import { ICharacterBiography, IChildhood, IParents } from "../interfaces/ICharacterBiography";
import { getRandomElement, getRandomIntInRange } from "../utils";
import { biography } from "../data";
export class CharacterBiography implements ICharacterBiography {
    placeOfBirth: string;
    parents: IParents;
    siblings: string[];
    childhood: IChildhood
    profession: string;
    lifeEvents: string[];
    constructor(race: string) {
        this.placeOfBirth = this.getRandomPlaceOfBirth();
        this.parents = this.getRandomParents(race);
        this.siblings = this.getRandomSiblings();
        this.childhood = this.getRandomChildhood();
        this.profession = this.getRandomProfession();
        this.lifeEvents = this.getRandomEvents()
    }
    private getRandomPlaceOfBirth(): string {
        return getRandomElement(biography.places_of_birth);
    }
    private getRandomParents(race: string): IParents {

        const result = {
            parentsAwareness: "",
            mother: "",
            father: "",
            parentsInfo: "",
            familyInfo: ""
        }

        const parentsAwareness = getRandomElement(biography.parents.parentsAwareness)
        result.parentsAwareness = parentsAwareness.description
        result.parentsInfo = getRandomElement(biography.parents.parentsInfo[race])
        result.familyInfo = getRandomElement(biography.parents.familyInfo)
        result.father = parentsAwareness.father ?
            Math.random() > 0.75 ?
                getRandomElement(biography.parents.missingParentOptions) : getRandomElement(biography.statePerson)
            : "Неизвестно"
        result.mother = parentsAwareness.mother ? Math.random() > 0.75 ? getRandomElement(biography.parents.missingParentOptions) : getRandomElement(biography.statePerson) : "Неизвестно"

        return result
    }
    private getRandomChildhood(): IChildhood {
        const result = {
            home: "",
            memories: "",
            lifeStyle: ""
        }

        result.home = getRandomElement(biography.childhood.home)
        result.memories = getRandomElement(biography.childhood.memories)
        result.lifeStyle = getRandomElement(biography.childhood.lifestyle)


        return result
    }
    private getRandomProfession(): string {
        const categories = Object.keys(biography.profession)
        const category = getRandomElement(categories)
        return `${category} - ${getRandomElement(biography.profession[category])}`
    }

    private getRandomEvents(): string[] {
        const numberEvents = getRandomIntInRange(1, 4)
        const categories = Object.keys(biography.lifeEvents)
        let result: string[] = []
        for (let i = 0; i < numberEvents; i++) {
            let category = getRandomElement(categories)
            result.push(
                getRandomElement(biography.lifeEvents[category])
            )
        }
        return Array.from(new Set(result))
    }
    private getRandomSiblings(): string[] {
        const result = []
        const numberSiblings = getRandomIntInRange(1, 5)
        for (let i = 0; i < numberSiblings; i++) {
            result.push(
                `${getRandomElement(biography.siblings)} - ${getRandomElement(biography.statePerson)}`
            )
        }
        return result
    }


}