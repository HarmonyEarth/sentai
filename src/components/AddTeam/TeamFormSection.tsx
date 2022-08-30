import { Grid } from '@mui/material';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import React, { useState } from 'react';
import { db, storage } from '../../firebase';
import { memberInputData, teamInputData } from '../../models/team';
import TeamFormInput from './TeamFormInput';

type FileState = File | Blob | MediaSource;

const noImageIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

const TeamFormSection = () => {
  const [data, setData] = useState({});
  const [logo, setLogo] = useState<FileState | undefined>();
  const [symbol, setSymbol] = useState<FileState | undefined>();
  const [heroImage1, setHeroImage1] = useState<FileState | undefined>();
  const [heroImage2, setHeroImage2] = useState<FileState | undefined>();
  const [heroHelmet, setHeroHelmet] = useState<FileState | undefined>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };
  console.log(data);

  const handleAdd = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'teams'), {
        ...data,
      });
    } catch (err) {
      console.log(err);
    }
    console.log('Done', data);
  };

  return (
    <Grid container>
      <Grid container item>
        <Grid container item justifyContent="space-around" xs={12} md={6}>
          <Grid item xs={6} md={3}>
            <div>
              <img
                src={logo ? URL.createObjectURL(logo) : noImageIcon}
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
                src={symbol ? URL.createObjectURL(symbol) : noImageIcon}
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
                defaultValue={teamFormData.defaultValue ?? ''}
                teamFormData={teamFormData.formData}
                type={teamFormData.type}
                id={teamFormData.formData}
                accept={teamFormData.formData ?? ''}
                readonly={false}
                handleInput={handleInput}
              />
            ))}

            <button type="submit">Submit</button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
