import { Grid } from '@mui/material';
import React, { useState } from 'react';
import useFileUpload from '../../hooks/useFileUpload';
import { FileState } from '../../models/fileState';
import { Team } from '../../models/team';
import FormTeamImage from '../CMS/FormTeamImage';

import TeamForm from './TeamForm';

interface Props {
  docId: string;
}

const TeamFormSection: React.FC<Props> = ({ docId }) => {
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
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
