export interface IRaceData {
    races: string[];
}


interface IIntRange {
    min: number;
    max: number;
}
export interface IAgeRangesData {
    age_ranges: {
        [race: string]: IIntRange;
    }
}

export interface IGenderData {
    genders: string[];
}

interface INames {
    firstName: string[];
    lastName: string[];
}
export interface INamesData {
    names: {
        [race: string]: {
            [gender: string]: INames
        }
    }
}
export interface IAttributesData {
    attributes: {
        alignments: {
            [race: string]: string[];
        };
        ideals: {
            idealsCategory: {
                [alignment: string]: string[];
            };
            idealsByCategory: {
                [category: string]: string[];
            };
        };

        bonds: string[];
        traits: string[];
        flaws: {
            minorFlaws: string[];
            majorFlaws: string[];
            fatalFlaws: string[];
        }
    };

}

export interface IDetailsData {
    details: {
        height: {
            [race: string]: {
                [gender: string]: IIntRange;
            }
        }

        weight: {
            [race: string]: {
                [gender: string]: IIntRange;
            }
        }
        eyes: {
            usualColor: string[];
            unusualColor: string[];
        }

        skin: {
            [race: string]: string[]
        }

        hair: {
            Length: string[];
            Type: string[];
            Style: string[];
            Color: string[]
            unusualColor: string[];
        }
    }
}

export interface IClothesData {
    clothes: {
        [gender: string]: {
            head: string[];
            upperBody: string[];
            lowerBody: string[];
            shoes: string[];
            hands: string[];
            outerwear: string[];
            neck: string[];
            waist: string[];
        }
    }
}

interface IParentAwareness {
    description: string;
    mother: boolean;
    father: boolean;
}

export interface IBiographyData {
    biography: {
        places_of_birth: string[];
        parents: {
            parentsAwareness: IParentAwareness[]
            parentsInfo: {
                [race: string]: string[]
            };
            familyInfo: string[];
            missingParentOptions: string[];


        },
        siblings: string[],
        statePerson: string[],
        deathCause: string[];
        childhood: {
            home: string[];
            memories: string[];
            lifestyle: string[];

        };
        lifeEvents: {
            [category:string] : string[]
        };
        profession: {
            [category: string]: string[];
        }
    }
}

export interface ICharacterAdditionalDetails {
    additional_details: {
        visual_details:{
            [gender: string]: string[]
        };
        features: string[];
        face:{
            shape: string[];
            condition: string[];
            impression:{
                [gender : string]: string[]
            }
            features:{
                [gender: string]: string[]
            }
        }
        tattoo:{
            place: string[];
            size: string[];
            visibility: string[];
            design: string[];
            impression: string[]
        }

    }
}