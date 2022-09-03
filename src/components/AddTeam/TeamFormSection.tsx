import { Grid } from '@mui/material';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase';
import useFileUpload from '../../hooks/useFileUpload';
import { Member, memberInputData, teamInputData } from '../../models/team';
import TeamFormInput from './TeamFormInput';

export type FileState = File | Blob | MediaSource | String;

const noImageIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

const TeamFormSection = () => {
  const [data, setData] = useState({});
  const [teamData, setTeamData] = useState({});
  const [teamMembers, setTeamMembers] = useState<any[]>([
    { name: 'jane' },
    { name: 'soup' },
  ]);
  const [members, setMembers] = useState<any>({});
  const [logo, setLogo] = useState<FileState | undefined>();
  const [symbol, setSymbol] = useState<FileState | undefined>();
  useFileUpload({ file: symbol as File, setFile: setTeamData, id: 'symbol' });
  console.log(typeof symbol, 'Symbol');
  const handleTeamInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const id = e.target.id;
    const value = e.target.value;

    if (id === 'symbol') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setSymbol(e.target.files[0]);
    } else if (id === 'logo') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setLogo(e.target.files[0]);
    }
    setTeamData({ ...teamData, [id]: value });
  };

  console.log(teamData);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'teams'), {
        ...teamData,
        teamMembers,
      });
    } catch (err) {
      console.log(err);
    }
  };

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
            </div>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <form onSubmit={handleAdd}>
            {teamInputData.map((teamFormData) => (
              <TeamFormInput
                key={teamFormData.formData}
                placeholder={String(teamFormData.defaultValue) ?? ''}
                teamFormData={teamFormData.formData}
                type={teamFormData.type}
                id={teamFormData.formData}
                accept={teamFormData.accept ?? ''}
                readonly={false}
                handleInput={handleTeamInput}
              />
            ))}
            <br />
            <button type="submit">Submit to Database</button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
