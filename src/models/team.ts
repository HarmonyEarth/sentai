import { FileState } from '../components/AddTeam/TeamFormSection';

export interface Team {
  shortTeamName: string;
  fullTeamNameEN: string;
  fullTeamNameJP: string;
  year: number | string;
  logo: FileState;
  symbol: FileState;
  teamId: string;
  teamMembers: Member[];
  id?: string;
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
  heroHelmet: FileState;
}

export const memberInputData = [
  {
    formData: 'heroId',
    defaultValue: 'harmony1',
    type: 'text',
  },
  {
    formData: 'position',
    defaultValue: 1,
    type: 'number',
  },
  {
    formData: 'color',
    defaultValue: 'white',
    type: 'text',
  },
  {
    formData: 'heroNameEN1',
    defaultValue: 'Akaki Sugata',
    type: 'text',
  },
  {
    formData: 'heroNameEN2',
    defaultValue: 'Harmony White',
    type: 'text',
  },
  {
    formData: 'heroNameJP1',
    defaultValue: '獅子 走',
    type: 'text',
  },
  {
    formData: 'heroNameJP2',
    defaultValue: 'ガオレッド',
    type: 'text',
  },

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
    formData: 'heroHelmet',
    type: 'file',
    accept: 'image/*',
  },
];

export const teamInputData = [
  {
    formData: 'shortTeamName',
    defaultValue: 'Harmonyranger',
    type: 'text',
  },
  {
    formData: 'fullTeamNameEN',
    defaultValue: 'Melody Sentai Harmonyranger',
    type: 'text',
  },
  {
    formData: 'fullTeamNameJP',
    defaultValue: 'メロディー戦隊ハーモニーレンジャー',
    type: 'text',
  },
  {
    formData: 'year',
    defaultValue: 2021,
    type: 'number',
  },
  {
    formData: 'teamId',
    defaultValue: 'melody21',
    type: 'text',
  },
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
