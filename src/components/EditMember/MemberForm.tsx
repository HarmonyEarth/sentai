import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { FileState } from '../../models/fileState';
import {
  Member,
  memberInputColorData,
  memberInputData,
  memberInputFileData,
  memberInputImageLocation,
  memberInputNameLocationData,
  Team,
} from '../../models/team';

import FormInput from '../CMS/FormInput';
import FormSelect from '../CMS/FormSelect';

interface Props {
  setHeroImage1: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroImage2: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroImage3: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroImage4: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroHelmet: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroSymbol: React.Dispatch<React.SetStateAction<FileState>>;
  setMemberData: React.Dispatch<React.SetStateAction<Member>>;
  memberData: Member;
  heroImage1Percent: number | null;
  heroImage2Percent: number | null;
  heroImage3Percent: number | null;
  heroImage4Percent: number | null;
  heroHelmetPercent: number | null;
  heroSymbolPercent: number | null;
  docId: string;
  teams: Team[];
}

const MemberForm: React.FC<Props> = ({
  setHeroImage1,
  setHeroImage2,
  setHeroImage3,
  setHeroImage4,
  setHeroHelmet,
  setHeroSymbol,
  setMemberData,
  memberData,
  heroImage1Percent,
  heroImage2Percent,
  heroImage3Percent,
  heroImage4Percent,
  heroHelmetPercent,
  heroSymbolPercent,
  docId,
  teams,
}) => {
  const navigate = useNavigate();

  const handleMemberInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const id = e.target.id;
    const value = e.target.value;

    if (id === 'heroImage1') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setHeroImage1(e.target.files[0]);
    } else if (id === 'heroImage2') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setHeroImage2(e.target.files[0]);
    } else if (id === 'heroImage3') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setHeroImage3(e.target.files[0]);
    } else if (id === 'heroImage4') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setHeroImage4(e.target.files[0]);
    } else if (id === 'heroHelmet') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setHeroHelmet(e.target.files[0]);
    } else if (id === 'heroSymbol') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setHeroSymbol(e.target.files[0]);
    }
    setMemberData({ ...memberData, [id]: value });
  };

  const handleMemberSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const id = e.target.id;
    const value = e.target.value;

    setMemberData({ ...memberData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const memberDoc = doc(db, 'members', docId);
    try {
      toast.loading('Sending updates to database...');
      await updateDoc(memberDoc, {
        ...memberData,
      });
      toast.dismiss();
      toast.success(`Successfully updated ${memberData.heroNameEN1}!`);
      navigate('/cms');
    } catch (err) {
      console.log('error', err);
      toast.dismiss();
      toast.error('Failed to update!');
    }
  };

  return (
    <form id="editMemberForm" onSubmit={handleSubmit}>
      {memberInputData.map((memberFormData) => {
        let memberInput = memberFormData.formData as keyof typeof memberData;

        return (
          <FormInput
            key={memberFormData.formData}
            placeholder={String(memberFormData.placeholder) ?? ''}
            teamFormData={memberFormData.formData}
            type={memberFormData.type}
            id={memberFormData.formData}
            readonly={false}
            handleInput={handleMemberInput}
            defaultValue={String(memberData[memberInput])}
          />
        );
      })}

      <FormSelect
        arrayData={memberInputColorData}
        handleMemberSelect={handleMemberSelect}
        purpose="color"
        optionPreview={(color) => color}
        getKey={(color) => color}
        getValue={(color) => color}
        originalValue={memberData.color}
      />

      <FormSelect
        arrayData={teams}
        handleMemberSelect={handleMemberSelect}
        purpose="teamId"
        getKey={(team) => team.id}
        optionPreview={(team) => team.shortTeamName}
        getValue={(team) => team.teamId}
        originalValue={memberData.teamId}
      />

      <FormSelect
        arrayData={memberInputNameLocationData}
        handleMemberSelect={handleMemberSelect}
        purpose="locationEN"
        getKey={(location) => location.name}
        optionPreview={(location) => location.display}
        getValue={(location) => location.name}
        originalValue={memberData.locationEN}
      />

      <FormSelect
        arrayData={memberInputNameLocationData}
        handleMemberSelect={handleMemberSelect}
        purpose="locationJP"
        getKey={(location) => location.name}
        optionPreview={(location) => location.display}
        getValue={(location) => location.name}
        originalValue={memberData.locationJP}
      />
      <FormSelect
        arrayData={memberInputImageLocation}
        handleMemberSelect={handleMemberSelect}
        purpose="locationImage"
        getKey={(location) => location.imageLocationName}
        optionPreview={(location) => location.imageLocationName}
        getValue={(location) => location.imageLocationName}
        originalValue={memberData.locationImage}
      />
      {memberInputFileData.map((memberInputFile) => (
        <FormInput
          key={memberInputFile.formData}
          teamFormData={memberInputFile.formData}
          type={memberInputFile.type}
          id={memberInputFile.formData}
          readonly={false}
          handleInput={handleMemberInput}
          accept={memberInputFile.accept ?? ''}
        />
      ))}

      <br />
      <button
        type="submit"
        disabled={
          (heroImage1Percent !== null && heroImage1Percent < 100) ||
          (heroImage2Percent !== null && heroImage2Percent < 100) ||
          (heroImage3Percent !== null && heroImage3Percent < 100) ||
          (heroImage4Percent !== null && heroImage4Percent < 100) ||
          (heroHelmetPercent !== null && heroHelmetPercent < 100) ||
          (heroSymbolPercent !== null && heroSymbolPercent < 100)
        }
      >
        Submit to Database
      </button>
    </form>
  );
};

export default MemberForm;
