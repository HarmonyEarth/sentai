export type FileState = File | Blob | MediaSource | String | undefined;

export interface Team {
  shortTeamName: string; //Short / common team Name in English
  fullTeamNameEN: string; //Full Team Name in English
  fullTeamNameJP: string; //Full Team Name in Japanese
  year: string;
  logo: FileState;
  symbol: FileState;
  teamId: string;
  id: string;
}

export interface Member {
  heroId: string;
  color: string;
  position: number | string; //Position on the team
  heroNameEN1: string; //Hero - Civilian Name English
  heroNameEN2: string; //Hero  - Hero Name English
  heroNameJP1: string; //Hero  - Civilian Name Japanese
  heroNameJP2: string; //Hero  - Hero Name Japanese
  heroImage1: FileState; //Hero Background
  heroImage2: FileState; //Full Body Front Profile Hero
  heroImage3: FileState; //Hero - Primary Civilian Form
  heroImage4: FileState; //Hero - Primary Hero Form
  heroHelmet: FileState; //Hero Helmet
  heroSymbol: FileState; //Hero Symbol
  teamId: string;
  id: string;
  locationEN: string; //Location of the English Name in Hero Content
  locationJP: string; //Location of the Japanese Name in Hero Content
  locationImage: string; //Location of the Image in Hero Content
}
