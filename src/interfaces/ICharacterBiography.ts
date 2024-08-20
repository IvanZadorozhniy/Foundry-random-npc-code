export interface ICharacterBiography {
    placeOfBirth: string;
    parents: IParents;
    siblings: string[];
    childhood: IChildhood;
    profession: string;
    lifeEvents: string[];
}

export interface IParents {
    mother: string
    father: string
    familyInfo: string;
    parentsInfo: string;
    parentsAwareness: string;
}

export interface IChildhood {
    home: string;
    memories: string;
    lifeStyle: string;
}
