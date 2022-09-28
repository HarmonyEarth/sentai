import { Grid } from '@mui/material';
import React, { useState } from 'react';
import turbo from '../../assets/data';
import useFileUpload from '../../hooks/useFileUpload';
import { Member, Team } from '../../models/team';
import CurrentMembers from '../CMS/CurrentMembers';
import FormTeamImage from '../CMS/FormTeamImage';
import MemberForm from './MemberForm';

import TeamForm from './TeamForm';

export type FileState = File | Blob | MediaSource | String | undefined;

const TeamFormSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<Member[]>([
    ...turbo.teamMembers,
  ]);
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
    color: '',
    position: '',
    heroNameEN1: '',
    heroNameEN2: '',
    heroNameJP1: '',
    heroNameJP2: '',
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
            <FormTeamImage
              image={logo}
              imagePercent={logoPercent}
              imageName={'Logo'}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <FormTeamImage
              image={symbol}
              imagePercent={symbolPercent}
              imageName={'Symbol'}
            />
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
            teamMembers.map((teamMember) => (
              <Grid item xs={12}>
                <CurrentMembers teamMember={teamMember} />
              </Grid>
            ))
          ) : (
            <h3>No Team Members</h3>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
