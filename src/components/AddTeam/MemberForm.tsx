import React, { useState } from 'react';
import { Member, memberInputData } from '../../models/team';
import { FileState } from './TeamFormSection';
import useFileUpload from '../../hooks/useFileUpload';
import TeamFormInput from './TeamFormInput';

interface Props {
  teamId: string;
  setTeamMembers: React.Dispatch<React.SetStateAction<Member[]>>;
}

const MemberForm: React.FC<Props> = ({ teamId, setTeamMembers }) => {
  const [heroImage1, setHeroImage1] = useState<FileState | undefined>();
  const [heroImage2, setHeroImage2] = useState<FileState | undefined>();
  const [heroHelmet, setHeroHelmet] = useState<FileState | undefined>();
  const [heroId, setHeroId] = useState('');
  const [member, setMember] = useState<Member>({
    heroId: '',
    heroNameEN1: '',
    heroNameEN2: '',
    heroNameJP1: '',
    heroNameJP2: '',
    heroImage1: '',
    heroImage2: '',
    heroHelmet: '',
    color: '',
  });

  const heroImage1Percent = useFileUpload({
    file: heroImage1 as File,
    setFile: setMember,
    id: 'heroImage1',
    teamId,
    structure: 'member',
    heroId,
  });

  const heroImage2Percent = useFileUpload({
    file: heroImage2 as File,
    setFile: setMember,
    id: 'heroImage2',
    teamId,
    structure: 'member',
    heroId,
  });

  const heroHelmetPercent = useFileUpload({
    file: heroHelmet as File,
    setFile: setMember,
    id: 'heroHelmet',
    teamId,
    structure: 'member',
    heroId,
  });

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
        <TeamFormInput
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
