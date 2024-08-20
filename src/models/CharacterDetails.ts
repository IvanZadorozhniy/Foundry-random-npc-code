import { ICharacterDetails, IEyes, IFace, IHair, ISkin } from "../interfaces/ICharacterDetails";
import { details } from "../data";
import { additional_details } from "../data";
import { getRandomIntInRange, getRandomElement } from "../utils";
export class CharacterDetails implements ICharacterDetails {
    height: number;
    weight: number;
    eyes: IEyes;
    skin: ISkin;
    hair: IHair;
    face: IFace;
    visual_details: string;
    additionalInfo: string;

    constructor(race: string, gender: string) {
        this.height = this.getRandomHeight(race, gender);
        this.weight = this.getRandomWeight(race, gender);
        this.eyes = this.getRandomEyeColor();
        this.skin = this.getRandomSkin(race);
        this.hair = this.getRandomHair();
        this.face = this.getRandomFace(gender);
        this.visual_details = this.getVisualDetails(gender);
        this.additionalInfo = this.getAdditionalInfo();
    }
    private getAdditionalInfo(): string {
        return getRandomElement(additional_details.features);
    }
    private getRandomTattoo(): string {
        return `${getRandomElement(additional_details.tattoo.size)} ${getRandomElement(additional_details.tattoo.place)} ${getRandomElement(additional_details.tattoo.visibility)}. Это ${getRandomElement(additional_details.tattoo.design)} ${getRandomElement(additional_details.tattoo.impression)}`;
    }

    private getRandomFace(gender: string): IFace {
        return {
            shape: getRandomElement(additional_details.face.shape),
            condition: getRandomElement(additional_details.face.condition),
            impression: getRandomElement(additional_details.face.impression[gender]),
            feature: getRandomElement(additional_details.face.features[gender])
        }
    }

    private getVisualDetails(gender: string): string {
        const detail = getRandomElement(additional_details.visual_details[gender]);
        return detail == "Татуировка" ? detail + " " + this.getRandomTattoo() : detail
    }
    private getRandomHeight(race: string, gender: string) {
        const min = details.height[race][gender].min
        const max = details.height[race][gender].max
        return getRandomIntInRange(min, max + 1);
    }
    private getRandomWeight(race: string, gender: string) {
        const min = details.weight[race][gender].min
        const max = details.weight[race][gender].max
        return getRandomIntInRange(min, max + 1);
    }

    private getRandomEyeColor() {
        const hairColors = Math.random() > 0.2 ? details.eyes.usualColor : details.eyes.unusualColor
        return { color: getRandomElement(hairColors) };
    }
    private getRandomHair() {
        const hairColors = Math.random() > 0.2 ? details.hair.Color : details.hair.unusualColor
        return {
            color: getRandomElement(hairColors),
            style: getRandomElement(details.hair.Style),
            type: getRandomElement(details.hair.Type),
            length: getRandomElement(details.hair.Length),
        };
    }
    private getRandomSkin(race: string) {
        return { color: getRandomElement(details.skin[race]) };
    }






}