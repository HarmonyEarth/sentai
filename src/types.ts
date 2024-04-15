export type FileState = File | Blob | MediaSource | String | undefined;

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
  locationEN: string;
  locationJP: string;
  locationImage: string;
}
