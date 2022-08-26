import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  memberFormInputData,
  Team,
  teamFormInputData,
  TeamMember,
} from '../../models/team';
import TeamFormInput from './TeamFormInput';

import { db, storage } from '../../firebase';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { nanoid } from 'nanoid';

type FileState = File | Blob | MediaSource;

const noImageIcon =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

const TeamFormSection = () => {
  const [logo, setLogo] = useState<FileState | undefined>();
  const [symbol, setSymbol] = useState<FileState | undefined>();
  // const [data, setData] = useState({});
  const [arr, setArr] = useState<number[]>([]);

  const { register, handleSubmit } = useForm<Team>();

  const addMemberForm = () => {
    const newIndex: number = arr[arr.length - 1] + 1;
    setArr((prev) => [...prev, newIndex]);
  };

  const removeMemberForm = (index: number) => {
    const curArr = arr;
    console.log(curArr);
    curArr.splice(index, 1);
    console.log('remove', curArr);
    setArr([...curArr]);
  };

  const onSubmit: SubmitHandler<Team> = async (data) => {
    try {
      await addDoc(collection(db, 'cities', 'LA'), {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA',
      });
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };

  // const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const id = e.target.id;
  //   const value = e.target.value;

  //   setData({ ...data, [id]: value });
  // };

  // const handleAdd = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   await setDoc(doc(db, 'teams', 'LA2323'), {
  //     name: 'Los Angeles',
  //     state: 'CA',
  //     country: 'USA',
  //   }).catch((err) => console.log(err));
  //   console.log('Done');
  // };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {teamFormInputData.map((teamFormData) => (
              <TeamFormInput
                key={teamFormData.formData}
                defaultValue={teamFormData.defaultValue ?? ''}
                teamFormData={teamFormData.formData}
                type={teamFormData.type}
                id={teamFormData.formData}
                accept={teamFormData.formData ?? ''}
                readonly={false}
                register={register}
                // handleInput={() => handleInput}
              />
            ))}

            {arr.map((item, index) => (
              <div key={nanoid() + Math.random() * index}>
                {memberFormInputData.map((member) => (
                  <TeamFormInput
                    defaultValue={member.defaultValue || ''}
                    teamFormData={member.formData}
                    key={nanoid()}
                    type={member.type}
                    accept={member.accept || ''}
                    readonly={member.readonly || false}
                    register={register}
                    id={member.formData}
                  />
                ))}
                {console.log(index)}
                <button
                  type="button"
                  onClick={() => removeMemberForm(index)}
                  disabled={arr.length === 1}
                >
                  Remove Member
                </button>

                <button
                  type="button"
                  onClick={() => alert(`Index is ${index}`)}
                >
                  Index
                </button>
              </div>
            ))}
            <br />
            <button type="button" onClick={addMemberForm}>
              Add Member
            </button>
            <br />

            <button type="submit">Submit</button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamFormSection;
