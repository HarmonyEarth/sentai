import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { memberFormInputData, teamFormInputData } from '../../models/team';
import TeamFormInput from './TeamFormInput';

const TeamFormSectionOLD = () => {
  // const { handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const [arr, setArr] = useState([0]);
  const addMemberForm = () => {
    const newIndex = arr[arr.length - 1] + 1;
    console.log('new index', newIndex);
    setArr((prev) => [...prev, newIndex]);
    console.log('add', arr);
  };
  console.log('new arr', arr);
  const removeMemberForm = (index: number) => {
    const curArr = arr;
    curArr.splice(index, 1);
    console.log('remove', curArr);
    setArr([...curArr]);
  };
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <form>
      {/* {teamFormInputData.map((teamFormData) => (
          <TeamFormInput
            defaultValue={teamFormData.defaultValue || ''}
            teamFormData={teamFormData.formData}
            key={teamFormData.formData}
            type={teamFormData.type}
            accept={teamFormData.accept || ''}
          />
        ))} */}

      {arr.map((item, index) => (
        <>
          <div key={index.toString()}>
            {/* {memberFormInputData.map((member) => (
                <TeamFormInput
                  defaultValue={member.defaultValue || ''}
                  teamFormData={member.formData}
                  key={member.formData}
                  type={member.type}
                  accept={member.accept || ''}
                />
              ))} */}
            <button
              type="button"
              onClick={() => removeMemberForm(index)}
              disabled={arr.length === 1}
            >
              Remove Member
            </button>

            <button type="button" onClick={() => alert(`Index is ${index}`)}>
              Index
            </button>
          </div>
        </>
      ))}
      <br />
      <button type="button" onClick={addMemberForm}>
        Add Member
      </button>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default TeamFormSectionOLD;
