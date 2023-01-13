import { FileState } from './fileState';

export interface Team {
  shortTeamName: string;
  fullTeamNameEN: string;
  fullTeamNameJP: string;
  year: string;
  logo: FileState;
  symbol: FileState;
  teamId: string;
  id: string;
}

export interface Member {
  heroId: string;
  color: string;
  position: number | string;
  heroNameEN1: string;
  heroNameEN2: string;
  heroNameJP1: string;
  heroNameJP2: string;
  heroImage1: FileState;
  heroImage2: FileState;
  heroImage3: FileState;
  heroImage4: FileState;
  heroHelmet: FileState;
  heroSymbol: FileState;
  teamId: string;
  id: string;
}

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
    formData: 'color',
    placeholder: 'white',
    type: 'text',
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
