import racesData from './data/races.json';
import ageRangesData from './data/age_ranges.json';
import genderData from './data/genders.json';
import namesData from './data/names.json';
import attributesData from './data/attributes.json';
import detailsData from './data/details.json';
import clothesData from './data/clothes.json';
import biographyData from './data/biography.json';
import additionalDetailsData from './data/additional_details.json';
import {
    IRaceData,  IAgeRangesData,
    IGenderData, INamesData, IAttributesData,
    IDetailsData, IClothesData, IBiographyData, ICharacterAdditionalDetails
} from './types';

export const { races }: IRaceData = racesData;

export const { age_ranges }: IAgeRangesData = ageRangesData;
export const { genders }: IGenderData = genderData
export const { names }: INamesData = namesData
export const { attributes }: IAttributesData = attributesData
export const {details} : IDetailsData = detailsData
export const {clothes} : IClothesData = clothesData
export const {biography} : IBiographyData = biographyData
export const {additional_details} : ICharacterAdditionalDetails = additionalDetailsData