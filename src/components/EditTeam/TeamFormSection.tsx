import { Grid } from '@mui/material';
import React, { useState } from 'react';
import useFileUpload from '../../hooks/useFileUpload';
import { FileState } from '../../models/fileState';
import { Team } from '../../models/team';
import FormImage from '../CMS/FormImage';

import TeamForm from './TeamForm';

interface Props {
  docId: string;
  currentTeam: Team;
}

const TeamFormSection: React.FC<Props> = ({ docId, currentTeam }) => {
  const [logo, setLogo] = useState<FileState>();
  const [symbol, setSymbol] = useState<FileState>();
  const [teamData, setTeamData] = useState<Team>({
    ...currentTeam,
  });

  const logoPercent = useFileUpload({
    file: logo as File,
    setFile: setTeamData,
    fileId: 'logo',
    structure: 'team',
    docId,
  });
  const symbolPercent = useFileUpload({
    file: symbol as File,
    setFile: setTeamData,
    fileId: 'symbol',
    structure: 'team',
    docId,
  });

  console.log(teamData);

  return (
    <Grid container>
      <Grid container item>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item xs={6} md={3}>
            <FormImage
              firestoreImage={String(teamData.logo)}
              image={logo}
              imagePercent={logoPercent}
              imageName={'logo'}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <FormImage
              firestoreImage={String(teamData.symbol)}
              image={symbol}
              imagePercent={symbolPercent}
              imageName={'symbol'}
            />
          </Grid>
        </Grid>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item>
            <h4>Team Form</h4>
            <TeamForm
              symbolPercent={symbolPercent}
              logoPercent={logoPercent}
              setLogo={setLogo}
              setSymbol={setSymbol}
              setTeamData={setTeamData}
              teamData={teamData}
              docId={docId}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
