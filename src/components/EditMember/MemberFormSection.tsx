import { Grid } from '@mui/material';
import React, { useState } from 'react';

import useFileUpload from '../../hooks/useFileUpload';
import { FileState } from '../../models/fileState';
import { Member, Team } from '../../models/team';
import FormImage from '../CMS/FormImage';
import MemberForm from './MemberForm';

interface Props {
  docId: string;
  currentMember: Member;
  teams: Team[];
}

const MemberFormSection: React.FC<Props> = ({
  docId,
  currentMember,
  teams,
}) => {
  const [heroImage1, setHeroImage1] = useState<FileState>();
  const [heroImage2, setHeroImage2] = useState<FileState>();
  const [heroImage3, setHeroImage3] = useState<FileState>();
  const [heroImage4, setHeroImage4] = useState<FileState>();
  const [heroHelmet, setHeroHelmet] = useState<FileState>();
  const [heroSymbol, setHeroSymbol] = useState<FileState>();
  const [memberData, setMemberData] = useState<Member>({
    ...currentMember,
  });

  const heroImage1Percent = useFileUpload({
    file: heroImage1 as File,
    setFile: setMemberData,
    fileId: 'heroImage1',
    structure: 'member',
    docId,
  });

  const heroImage2Percent = useFileUpload({
    file: heroImage2 as File,
    setFile: setMemberData,
    fileId: 'heroImage2',
    structure: 'member',
    docId,
  });

  const heroImage3Percent = useFileUpload({
    file: heroImage3 as File,
    setFile: setMemberData,
    fileId: 'heroImage3',
    structure: 'member',
    docId,
  });

  const heroImage4Percent = useFileUpload({
    file: heroImage4 as File,
    setFile: setMemberData,
    fileId: 'heroImage4',
    structure: 'member',
    docId,
  });

  const heroHelmetPercent = useFileUpload({
    file: heroHelmet as File,
    setFile: setMemberData,
    fileId: 'heroHelmet',
    structure: 'member',
    docId,
  });

  const heroSymbolPercent = useFileUpload({
    file: heroSymbol as File,
    setFile: setMemberData,
    fileId: 'heroSymbol',
    structure: 'member',
    docId,
  });

  return (
    <Grid container>
      <Grid container item>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid container item>
            <Grid item xs={6} md={4}>
              <FormImage
                firestoreImage={String(memberData.heroImage1)}
                image={heroImage1}
                imagePercent={heroImage1Percent}
                imageName={'Hero Image 1'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <FormImage
                firestoreImage={String(memberData.heroImage2)}
                image={heroImage2}
                imagePercent={heroImage2Percent}
                imageName={'Hero Image 2'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <FormImage
                firestoreImage={String(memberData.heroHelmet)}
                image={heroHelmet}
                imagePercent={heroHelmetPercent}
                imageName={'Hero Helmet'}
              />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={6} md={4}>
              <FormImage
                firestoreImage={String(memberData.heroImage3)}
                image={heroImage3}
                imagePercent={heroImage3Percent}
                imageName={'Hero Image 3'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <FormImage
                firestoreImage={String(memberData.heroImage4)}
                image={heroImage4}
                imagePercent={heroImage4Percent}
                imageName={'Hero Image 4'}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <FormImage
                firestoreImage={String(memberData.heroSymbol)}
                image={heroSymbol}
                imagePercent={heroSymbolPercent}
                imageName={'Hero Symbol'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item>
            <h4>Member Form</h4>
            <MemberForm
              setHeroImage1={setHeroImage1}
              setHeroImage2={setHeroImage2}
              setHeroImage3={setHeroImage3}
              setHeroImage4={setHeroImage4}
              setHeroHelmet={setHeroHelmet}
              setHeroSymbol={setHeroSymbol}
              setMemberData={setMemberData}
              memberData={memberData}
              heroImage1Percent={heroImage1Percent}
              heroImage2Percent={heroImage2Percent}
              heroImage3Percent={heroImage3Percent}
              heroImage4Percent={heroImage4Percent}
              heroHelmetPercent={heroHelmetPercent}
              heroSymbolPercent={heroSymbolPercent}
              docId={docId}
              teams={teams}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MemberFormSection;
