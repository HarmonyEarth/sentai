import React from 'react';
import { FileState } from '../../models/fileState';
import { Member, memberInputData } from '../../models/team';

import FormInput from '../CMS/FormInput';

interface Props {
  setTeamMembers: React.Dispatch<React.SetStateAction<Member[]>>;
  setHeroImage1: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroImage2: React.Dispatch<React.SetStateAction<FileState>>;
  setHeroHelmet: React.Dispatch<React.SetStateAction<FileState>>;
  setMember: React.Dispatch<React.SetStateAction<Member>>;
  setHeroId: React.Dispatch<React.SetStateAction<string>>;
  member: Member;
  heroImage1Percent: number | null;
  heroImage2Percent: number | null;
  heroHelmetPercent: number | null;
}

const MemberForm: React.FC<Props> = ({
  setTeamMembers,
  setHeroImage1,
  setHeroImage2,
  setHeroHelmet,
  setMember,
  setHeroId,
  member,
  heroImage1Percent,
  heroImage2Percent,
  heroHelmetPercent,
}) => {
  const memberFormId = document.getElementById(
    'addMemberForm'
  ) as HTMLFormElement;

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
    } else if (id === 'heroHelmet') {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }
      setHeroHelmet(e.target.files[0]);
    } else if (id === 'heroId') {
      setHeroId(value);
    }
    setMember({ ...member, [id]: value });
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTeamMembers((prev) => [...prev, { ...member }]);
    memberFormId?.reset();
  };

  return (
    <form id="addMemberForm" onSubmit={handleAdd}>
      {memberInputData.map((memberFormData) => (
        <FormInput
          key={memberFormData.formData}
          placeholder={String(memberFormData.defaultValue) ?? ''}
          teamFormData={memberFormData.formData}
          type={memberFormData.type}
          id={memberFormData.formData}
          accept={memberFormData.accept ?? ''}
          readonly={false}
          handleInput={handleMemberInput}
        />
      ))}
      <button
        type="submit"
        disabled={
          (heroImage1Percent !== null && heroImage1Percent < 100) ||
          (heroImage2Percent !== null && heroImage2Percent < 100) ||
          (heroHelmetPercent !== null && heroHelmetPercent < 100)
        }
      >
        Add Member
      </button>
    </form>
  );
};

export default MemberForm;
