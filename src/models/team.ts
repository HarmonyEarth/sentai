import { imageLocationText, locationText } from '../utils/constants';

export const memberInputData = [
  {
    formData: 'heroId',
    placeholder: 'harmony1',
    type: 'text',
  },
  {
    formData: 'position',
    placeholder: 1,
    type: 'number',
  },
  {
    formData: 'heroNameEN1',
    placeholder: 'Akaki Sugata',
    type: 'text',
  },
  {
    formData: 'heroNameEN2',
    placeholder: 'Harmony White',
    type: 'text',
  },
  {
    formData: 'heroNameJP1',
    placeholder: '獅子 走',
    type: 'text',
  },
  {
    formData: 'heroNameJP2',
    placeholder: 'ガオレッド',
    type: 'text',
  },
];

export const memberInputFileData = [
  {
    formData: 'heroImage1',
    type: 'file',
    accept: 'image/*',
  },
  {
    formData: 'heroImage2',
    type: 'file',
    accept: 'image/*',
  },
  {
    formData: 'heroImage3',
    type: 'file',
    accept: 'image/*',
  },
  {
    formData: 'heroImage4',
    type: 'file',
    accept: 'image/*',
  },
  {
    formData: 'heroHelmet',
    type: 'file',
    accept: 'image/*',
  },
  {
    formData: 'heroSymbol',
    type: 'file',
    accept: 'image/*',
  },
];

export const memberInputColorData = [
  'Red',
  'Blue',
  'Yellow',
  'Green',
  'Black',
  'Pink',
  'Silver',
  'Gold',
  'Orange',
  'Light Blue',
  'Purple',
  'White',
];

export const memberInputNameLocationData = [
  {
    display: 'Top Left',
    name: locationText.topLeft,
  },
  {
    display: 'Top Right',
    name: locationText.topRight,
  },
  {
    display: 'Bottom Left',
    name: locationText.bottomLeft,
  },
  {
    display: 'Bottom Right',
    name: locationText.bottomRight,
  },
];

export const memberInputImageLocation = [
  { imageLocationName: imageLocationText.left },
  { imageLocationName: imageLocationText.center },
  { imageLocationName: imageLocationText.right },
];

export const teamInputData = [
  {
    formData: 'shortTeamName',
    placeholder: 'Harmonyranger',
    type: 'text',
  },
  {
    formData: 'fullTeamNameEN',
    placeholder: 'Melody Sentai Harmonyranger',
    type: 'text',
  },
  {
    formData: 'fullTeamNameJP',
    placeholder: 'メロディー戦隊ハーモニーレンジャー',
    type: 'text',
  },
  {
    formData: 'year',
    placeholder: 2021,
    type: 'number',
  },
  {
    formData: 'teamId',
    placeholder: 'melody21',
    type: 'text',
  },
];

export const teamInputFileData = [
  {
    formData: 'logo',
    type: 'file',
    accept: 'image/*',
  },
  {
    formData: 'symbol',
    type: 'file',
    accept: 'image/*',
  },
];
