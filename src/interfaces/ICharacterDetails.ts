export interface ICharacterDetails {

    height: number;
    weight: number;
    eyes: IEyes;
    skin: ISkin;
    hair: IHair;
    face: IFace;
    visual_details: string;
    additionalInfo: string;
}

export interface IFace{
    shape: string;
    condition: string;
    feature: string;
    impression: string;
}
export interface IEyes{
    color: string;
}
export interface IHair{
    length: string;
    color: string;
    type: string;
    style: string;
}

export interface ISkin{
    color: string;
}