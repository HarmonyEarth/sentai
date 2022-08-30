export interface Team {
  shortTeamName: string;
  fullTeamNameEN: string;
  fullTeamNameJP: string;
  year: number;
  logo: string;
  symbol: string;
  teamId: string;
  teamMembers: TeamMember[];
}

export interface TeamMember {
  heroId: string;
  heroNameEN1: string;
  heroNameEN2: string;
  heroNameJP1: string;
  heroNameJP2: string;
  heroImage1: string;
  heroImage2: string;
  heroHelmet: string;
  color: string;
}

export const memberInputData = [
  {
    formData: 'heroId',
    defaultValue: 'harmony01',
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
  {
    formData: 'color',
    defaultValue: 'white',
    type: 'text',
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
  // {
  //   formData: 'logo',
  //   type: 'file',
  //   accept: 'image/*',
  // },
  // {
  //   formData: 'symbol',
  //   type: 'file',
  //   accept: 'image/*',
  // },
];
