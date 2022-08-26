import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  teamFormData: string;
  defaultValue: string | number;
  type: string;
  accept: string;
  readonly: boolean;
  id: string;
  register: UseFormRegister<any>;
  // handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TeamFormInput: React.FC<Props> = ({
  teamFormData,
  defaultValue,
  type,
  accept,
  readonly,
  id,
  register,
  // handleInput,
}) => {
  return (
    <>
      <label htmlFor={teamFormData}>{teamFormData}</label>
      <input
        defaultValue={defaultValue}
        type={type}
        accept={accept}
        readOnly={readonly}
        id={teamFormData}
        {...register(teamFormData)}
        // name={teamFormData}
        // onChange={handleInput}
        required={!readonly}
      />
    </>
  );
};

export default TeamFormInput;
