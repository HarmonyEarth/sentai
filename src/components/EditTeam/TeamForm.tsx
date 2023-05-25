import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { FileState } from '../../models/fileState';
import { Team, teamInputData, teamInputFileData } from '../../models/team';
import FormInput from '../CMS/FormInput';
import makeItWEBP from '../../utils/makeItWEBP';

interface Props {
  symbolPercent: number | null;
  logoPercent: number | null;
  setLogo: React.Dispatch<React.SetStateAction<FileState | undefined>>;
  setSymbol: React.Dispatch<React.SetStateAction<FileState | undefined>>;
  setTeamData: React.Dispatch<React.SetStateAction<Team>>;
  teamData: Team;
  docId: string;
}

const TeamForm: React.FC<Props> = ({
  symbolPercent,
  logoPercent,
  setLogo,
  setSymbol,
  setTeamData,
  teamData,
  docId,
}) => {
  const navigate = useNavigate();

  const handleTeamInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const id = e.target.id;
    const value = e.target.value;
    const file =
      e.target.files && e.target.files.length !== 0 && e.target.files[0];

    if (id === 'symbol' && file) {
      makeItWEBP({
        filename: id,
        rawFile: file,
        setImage: setSymbol,
      });
    } else if (id === 'logo' && file) {
      makeItWEBP({
        filename: id,
        rawFile: file,
        setImage: setLogo,
      });
    }
    setTeamData({ ...teamData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const teamDoc = doc(db, 'teams', docId);
    try {
      await updateDoc(teamDoc, {
        ...teamData,
      });
      navigate('/cms');
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {teamInputData.map((teamFormData) => {
        let teamInput = teamFormData.formData as keyof typeof teamData;
        return (
          <FormInput
            key={teamFormData.formData}
            placeholder={String(teamFormData.placeholder) ?? ''}
            teamFormData={teamFormData.formData}
            type={teamFormData.type}
            id={teamFormData.formData}
            readonly={false}
            handleInput={handleTeamInput}
            defaultValue={String(teamData[teamInput])}
          />
        );
      })}

      {teamInputFileData.map((teamInputFile) => (
        <FormInput
          key={teamInputFile.formData}
          teamFormData={teamInputFile.formData}
          type={teamInputFile.type}
          id={teamInputFile.formData}
          readonly={false}
          handleInput={handleTeamInput}
          accept={teamInputFile.accept ?? ''}
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
