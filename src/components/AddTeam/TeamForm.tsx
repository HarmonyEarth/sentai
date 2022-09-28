import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { Member, Team, teamInputData } from '../../models/team';
import FormInput from '../CMS/FormInput';
import { FileState } from './TeamFormSection';

interface Props {
  symbolPercent: number | null;
  logoPercent: number | null;
  setLogo: React.Dispatch<React.SetStateAction<FileState | undefined>>;
  setSymbol: React.Dispatch<React.SetStateAction<FileState | undefined>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setTeamId: React.Dispatch<React.SetStateAction<string>>;
  setTeamData: React.Dispatch<React.SetStateAction<Team>>;
  teamMembers: Member[];
  teamData: Team;
}

const TeamForm: React.FC<Props> = ({
  symbolPercent,
  logoPercent,
  setLogo,
  setSymbol,
  setYear,
  setTeamId,
  setTeamData,
  teamMembers,
  teamData,
}) => {
  const navigate = useNavigate();

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

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'teams'), {
        ...teamData,
        teamMembers,
      });
      navigate('/cms');
    } catch (err) {
      console.log('error', err);
    }
  };
  return (
    <form onSubmit={handleAdd}>
      {teamInputData.map((teamFormData) => (
        <FormInput
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

      <button
        disabled={
          (logoPercent !== null && logoPercent < 100) ||
          (symbolPercent !== null && symbolPercent < 100)
        }
        type="submit"
      >
        Submit to Database
      </button>
    </form>
  );
};

export default TeamForm;
