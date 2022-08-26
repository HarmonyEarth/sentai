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
  heroImage1Url: string;
  heroImage2Url: string;
  heroHelmetUrl: string;
  color: string;
}

export const memberFormInputData = [
  {
    formData: 'color',
    defaultValue: 'white',
    type: 'text',
  },
  {
    formData: 'heroId',
    defaultValue: 'Crimson Cardinal',
    type: 'text',
    readonly: true,
  },

  {
    formData: 'heroImage',
    type: 'file',
    accept: 'image/*',
  },
];

export const teamFormInputData = [
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
