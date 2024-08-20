import { ICharacterClothes } from "../interfaces/ICharacterClothes";
import { clothes } from "../data";
import { getRandomElement } from "../utils";
export class CharacterClothes implements ICharacterClothes {
    head: string;
    upperBody: string;
    shoes: string;
    outerwear: string;
    hands: string;
    waist: string;
    lowerBody: string;
    neck: string;


    constructor(gender: string) {
        this.head = Math.random() > 0.6 ? this.getRandomHead(gender) + "; цвет: " + this.getRandomColor() : "Не надето";
        this.upperBody = Math.random() > 0.1 ? this.getRandomBody(gender) + "; цвет: " + this.getRandomColor() : "Не надето";
        this.shoes = Math.random() > 0.2 ? this.getRandomFeet(gender) + "; цвет: " + this.getRandomColor() : "Не надето";
        this.outerwear = Math.random() > 0.8 ? this.getRandomBack(gender) + "; цвет: " + this.getRandomColor() : "Не надето";
        this.hands = Math.random() > 0.5 ? this.getRandomHand(gender) + "; цвет: " + this.getRandomColor() : "Не надето";
        this.waist = Math.random() > 0.4 ? this.getRandomWaist(gender) + "; цвет: " + this.getRandomColor() : "Не надето";
        this.lowerBody = Math.random() > 0.1 ? this.getRandomLegs(gender) + "; цвет: " + this.getRandomColor() : "Не надето";
        this.neck = Math.random() > 0.5 ? this.getRandomNeck(gender) + "; цвет: " + this.getRandomColor() : "Не надето";
    }
    private getRandomColor() {

        const colors = [
            "черный",
            "коричневый",
            "серый",
            "белый",
            "красный",
            "зеленый",
            "синий",
            "фиолетовый",
            "оранжевый",
            "розовый",
            "желтый",
            "бледный",
            "голубой",
            "золотистый",
            "серебристый",
            "бежевый",
            "бирюзовый",
            "бордовый",
            "сиреневый",
            "пурпурный",
            "алый",
            "лиловый",
            "шоколадный",
            "песочный",
            "медный",
            "лавандовый"
        ]
        return getRandomElement(colors)
    }
    private getRandomHead(gender: string): string {
        return getRandomElement(clothes[gender].head);
    }

    private getRandomBody(gender: string): string {
        return getRandomElement(clothes[gender].upperBody);
    }
    private getRandomFeet(gender: string): string {
        return getRandomElement(clothes[gender].shoes);
    }

    private getRandomBack(gender: string): string {
        return getRandomElement(clothes[gender].outerwear);
    }



    private getRandomHand(gender: string): string {
        return getRandomElement(clothes[gender].hands);
    }



    private getRandomWaist(gender: string): string {
        return getRandomElement(clothes[gender].waist);
    }

    private getRandomLegs(gender: string): string {
        return getRandomElement(clothes[gender].lowerBody);
    }



    private getRandomNeck(gender: string): string {
        return getRandomElement(clothes[gender].neck);
    }

}