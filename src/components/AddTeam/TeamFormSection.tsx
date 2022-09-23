import { Grid } from '@mui/material';
import React, { useState } from 'react';
import useFileUpload from '../../hooks/useFileUpload';
import { Member, Team } from '../../models/team';
import MemberForm from './MemberForm';

import TeamForm from './TeamForm';

export type FileState = File | Blob | MediaSource | String | undefined;

const noImageIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

const TeamFormSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<Member[]>([]);
  const [logo, setLogo] = useState<FileState>();
  const [symbol, setSymbol] = useState<FileState>();
  const [teamId, setTeamId] = useState('');
  const [year, setYear] = useState('');
  const [teamData, setTeamData] = useState<Team>({
    shortTeamName: '',
    fullTeamNameEN: '',
    fullTeamNameJP: '',
    year,
    logo,
    symbol,
    teamId,
    teamMembers,
  });

  const [heroImage1, setHeroImage1] = useState<FileState>();
  const [heroImage2, setHeroImage2] = useState<FileState>();
  const [heroHelmet, setHeroHelmet] = useState<FileState>();
  const [heroId, setHeroId] = useState('');
  const [member, setMember] = useState<Member>({
    heroId,
    heroNameEN1: '',
    heroNameEN2: '',
    heroNameJP1: '',
    heroNameJP2: '',
    color: '',
    heroImage1,
    heroImage2,
    heroHelmet,
  });

  const logoPercent = useFileUpload({
    file: logo as File,
    setFile: setTeamData,
    id: 'logo',
    teamId,
    structure: 'team',
    year,
  });
  const symbolPercent = useFileUpload({
    file: symbol as File,
    setFile: setTeamData,
    id: 'symbol',
    teamId,
    structure: 'team',
    year,
  });

  const heroImage1Percent = useFileUpload({
    file: heroImage1 as File,
    setFile: setMember,
    id: 'heroImage1',
    teamId,
    structure: 'member',
    heroId,
  });

  const heroImage2Percent = useFileUpload({
    file: heroImage2 as File,
    setFile: setMember,
    id: 'heroImage2',
    teamId,
    structure: 'member',
    heroId,
  });

  const heroHelmetPercent = useFileUpload({
    file: heroHelmet as File,
    setFile: setMember,
    id: 'heroHelmet',
    teamId,
    structure: 'member',
    heroId,
  });

  return (
    <Grid container>
      <Grid container item>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item xs={6} md={3}>
            <div>
              <img
                src={
                  logo
                    ? URL.createObjectURL(logo as Blob | MediaSource)
                    : noImageIcon
                }
                alt="Team Logo"
                height={'auto'}
                width={'100%'}
              />
              <h3>Logo</h3>
              <p>
                {(logoPercent !== null &&
                  logoPercent < 100 &&
                  'File Uploading') ||
                  (logoPercent === 100 && 'File Uploaded')}
              </p>
            </div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <img
                src={
                  symbol
                    ? URL.createObjectURL(symbol as Blob | MediaSource)
                    : noImageIcon
                }
                alt="Team Symbol"
                height={'auto'}
                width={'100%'}
              />
              <h3>Symbol</h3>
              <p>
                {(symbolPercent !== null &&
                  symbolPercent < 100 &&
                  'File Uploading') ||
                  (symbolPercent === 100 && 'File Uploaded')}
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item xs={6} md={3}>
            <h4>Team Form</h4>
            <TeamForm
              symbolPercent={symbolPercent}
              logoPercent={logoPercent}
              setLogo={setLogo}
              setSymbol={setSymbol}
              setYear={setYear}
              setTeamId={setTeamId}
              setTeamData={setTeamData}
              teamData={teamData}
              teamMembers={teamMembers}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <h4>Member Form</h4>
            {teamId && teamId.length > 3 ? (
              <MemberForm
                setTeamMembers={setTeamMembers}
                setHeroImage1={setHeroImage1}
                setHeroImage2={setHeroImage2}
                setHeroHelmet={setHeroHelmet}
                setMember={setMember}
                setHeroId={setHeroId}
                member={member}
                heroImage1Percent={heroImage1Percent}
                heroImage2Percent={heroImage2Percent}
                heroHelmetPercent={heroHelmetPercent}
              />
            ) : (
              <b>
                Please enter a teamId (with 4 characters or more) to add members
              </b>
            )}
          </Grid>
        </Grid>
        <Grid container item xs={12} md={12}>
          {teamMembers.length > 0 ? (
            'Yay, team members exist!'
          ) : (
            <h3>No Team Members</h3>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
