import { Grid } from '@mui/material';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import useFileUpload from '../../hooks/useFileUpload';
import { Member, memberInputData, teamInputData } from '../../models/team';
import MemberFormInput from './MemberFormInput';
import TeamFormInput from './TeamFormInput';

export type FileState = File | Blob | MediaSource | String;

const noImageIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

const TeamFormSection: React.FC = () => {
  const [data, setData] = useState({});
  const [teamData, setTeamData] = useState({});
  const [teamMembers, setTeamMembers] = useState<Member[]>([]);
  const [logo, setLogo] = useState<FileState | undefined>();
  const [symbol, setSymbol] = useState<FileState | undefined>();
  const [teamId, setTeamId] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  // const teamFileUploadValues = [
  //   { file: symbol as File, id: 'symbol' },
  //   { file: logo as File, id: 'logo' },
  // ];

  // const logoValues = useMemo(
  //   () => { file: logo as File, setFile: setTeamData, id: 'logo', submit },
  //   [logo]
  // );
  // const symbolValues = useMemo(
  //   () => [{ file: symbol as File, setFile: setTeamData, id: 'symbol'}],
  //   [symbol]
  // );
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
    } else if (id === 'teamId') {
      setTeamId(value);
    } else if (id === 'year') {
      setYear(value);
    }
    setTeamData({ ...teamData, [id]: value });
  };

  console.log(teamData);

  console.log('logo percent is', logoPercent);
  console.log('symbol percent is', symbolPercent);

  let uploadMessage = '';

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'teams'), {
        ...teamData,
        teamMembers,
      });
      navigate(-1);
    } catch (err) {
      console.log('error', err);
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
          <Grid item xs={12}>
            {teamMembers.length > 0 ? (
              'Yay, team members exist!'
            ) : (
              <h3>No Team Members</h3>
            )}
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
            <MemberFormInput />
            <br />
            <button
              // disabled={percent !== null && percent < 100}
              disabled={
                (logoPercent !== null && logoPercent < 100) ||
                (symbolPercent !== null && symbolPercent < 100)
              }
              type="submit"
            >
              Submit to Database
            </button>
            <h3>{uploadMessage}</h3>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
