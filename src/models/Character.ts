import { ICharacter } from "../interfaces/ICharacter";
import { CharacterAbilities } from "./CharacterAbilities";
import { CharacterAttributes } from "./CharacterAttributes";
import { CharacterDetails } from "./CharacterDetails";
import { CharacterClothes } from "./CharacterClothes";
import { CharacterBiography } from "./CharacterBiography";
import { getRace, getRandomName } from "../utils";
import { getGender } from "../utils";
import { getRandomAge } from "../utils";
import biography_template from "../templates/biography.hbs";
import traits_template from "../templates/traits.hbs";
import bonds_template from "../templates/bonds.hbs";
import ideals_template from "../templates/ideals.hbs";
import flaws_template from "../templates/flaws.hbs";
import appearance_template from "../templates/appearance.hbs";
import Handlebars from 'handlebars';
Handlebars.registerHelper('length', function(array: any[]) {
    return array ? array.length : 0;
});
Handlebars.registerHelper('heightCategory', function(height: number) {
    if (height > 200) return 'очень высоким';
    if (height > 180) return 'высоким';
    if (height > 160) return 'средним';
    if (height > 140) return 'низким';
    return 'очень низким';
});

Handlebars.registerHelper('bodyType', function(height: number, weight: number) {
    const heightInMeters = height / 100;
    
    // Расчет ИМТ
    const bmi = weight / (heightInMeters ** 2);
    
    // Определение состояния на основе ИМТ
    if (bmi < 16) return 'очень худым';
    if (bmi >= 16 && bmi < 17) return 'худым';
    if (bmi >= 17 && bmi < 18.5) return 'нормальным';
    if (bmi >= 18.5 && bmi < 25) return 'толстым';
    return 'очень толстым';
});

Handlebars.registerHelper("isClothes", function(clothes){
    return clothes != "Не надето"
})
export class Character implements ICharacter {
    name: string;
    race: string;
    age: number;
    gender: string;
    abilities: CharacterAbilities;
    attributes: CharacterAttributes;
    details: CharacterDetails;
    clothes: CharacterClothes;
    biography: CharacterBiography;

    constructor() {
        this.race = getRace();
        this.age = getRandomAge(this.race);
        this.gender = getGender();
        this.name = getRandomName(this.race, this.gender);
        this.abilities = new CharacterAbilities();
        this.attributes = new CharacterAttributes(this.race);
        this.details = new CharacterDetails(this.race, this.gender);
        this.clothes = new CharacterClothes(this.gender);
        this.biography = new CharacterBiography(this.race);
    }

    public getBiographyHtml() : string {
        const compiledTemplate = Handlebars.compile(biography_template);
        const html = compiledTemplate(this.biography);
        return html
    }

    public getAppearanceHtml() : string {
        const compiledTemplate = Handlebars.compile(appearance_template);

        const html = compiledTemplate({
            "details": this.details,
            "clothes": this.clothes,
            "race": this.race
        });
        return html
    }

    public getTraitsHtml() : string {
        const compiledTemplate = Handlebars.compile(traits_template);
        const html = compiledTemplate(this.attributes);
        return html
    }

    public getIdealsHtml() : string {
        const compiledTemplate = Handlebars.compile(ideals_template);
        const html = compiledTemplate(this.attributes);
        return html
    }

    public getBondsHtml() : string {
        const compiledTemplate = Handlebars.compile(bonds_template);
        const html = compiledTemplate(this.attributes);
        return html
    }

    public getFlawsHtml() : string {
        const compiledTemplate = Handlebars.compile(flaws_template);
        const html = compiledTemplate(this.attributes);
        return html
    }

    public getSkinDescription() : string {
        const result = "Цвет кожи: " + this.details.skin.color;
        return result
    }
    public getHairDescription() : string {
        const result = this.details.hair.length + " " + this.details.hair.type + " " + this.details.hair.color;
        return result
    }
    public getEyesDescription() : string {
        const result = "Цвет: " + this.details.eyes.color;
        return result
    }

    
}