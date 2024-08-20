import { ICharacterAbilities } from "./ICharacterAbilities";
import { ICharacterAttributes } from "./ICharacterAttributes";
import { ICharacterClothes } from "./ICharacterClothes";
import { ICharacterBiography } from "./ICharacterBiography";
import { ICharacterDetails } from "./ICharacterDetails";


export interface ICharacter {
    name: string;
    race: string;
    age: number;
    gender: string;
    
    abilities: ICharacterAbilities;
    attributes: ICharacterAttributes;
    details: ICharacterDetails;
    clothes: ICharacterClothes;
    biography: ICharacterBiography;

}


