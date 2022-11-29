import { Grid } from '@mui/material';
import React, { useState } from 'react';

import useFileUpload from '../../hooks/useFileUpload';
import { FileState } from '../../models/fileState';
import { Member } from '../../models/team';
import MemberForm from './MemberForm';

interface Props {
  docId: string;
}

const MemberFormSection: React.FC<Props> = ({ docId }) => {
  const [heroImage1, setHeroImage1] = useState<FileState>();
  const [heroImage2, setHeroImage2] = useState<FileState>();
  const [heroImage3, setHeroImage3] = useState<FileState>();
  const [heroImage4, setHeroImage4] = useState<FileState>();
  const [heroHelmet, setHeroHelmet] = useState<FileState>();
  const [heroId, setHeroId] = useState('');
  const [teamId, setTeamId] = useState('');
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
    heroImage3,
    heroImage4,
    heroHelmet,
    teamId: '',
  });

  const heroImage1Percent = useFileUpload({
    file: heroImage1 as File,
    setFile: setMember,
    fileId: 'heroImage1',
    structure: 'member',
    docId,
  });

  const heroImage2Percent = useFileUpload({
    file: heroImage2 as File,
    setFile: setMember,
    fileId: 'heroImage2',
    structure: 'member',
    docId,
  });

  const heroImage3Percent = useFileUpload({
    file: heroImage3 as File,
    setFile: setMember,
    fileId: 'heroImage3',
    structure: 'member',
    docId,
  });

  const heroImage4Percent = useFileUpload({
    file: heroImage4 as File,
    setFile: setMember,
    fileId: 'heroImage4',
    structure: 'member',
    docId,
  });

  const heroHelmetPercent = useFileUpload({
    file: heroHelmet as File,
    setFile: setMember,
    fileId: 'heroHelmet',
    structure: 'member',
    docId,
  });

  return (
    <Grid container>
      <Grid container item>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item xs={6} md={3}></Grid>
          <Grid item xs={6} md={3}></Grid>
        </Grid>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item xs={6} md={3}>
            <h4>Team Form</h4>
          </Grid>
          <Grid item xs={6} md={3}>
            <h4>Member Form</h4>
            <MemberForm
              setHeroImage1={setHeroImage1}
              setHeroImage2={setHeroImage2}
              setHeroImage3={setHeroImage3}
              setHeroImage4={setHeroImage4}
              setHeroHelmet={setHeroHelmet}
              setMember={setMember}
              setHeroId={setHeroId}
              member={member}
              heroImage1Percent={heroImage1Percent}
              heroImage2Percent={heroImage2Percent}
              heroImage3Percent={heroImage3Percent}
              heroImage4Percent={heroImage4Percent}
              heroHelmetPercent={heroHelmetPercent}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} md={12}>
          <h3>No Team Members</h3>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MemberFormSection;
