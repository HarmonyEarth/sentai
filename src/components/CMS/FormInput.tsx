import React from 'react';

interface Props {
  teamFormData: string;
  placeholder?: string;
  type: string;
  accept?: string;
  readonly: boolean;
  id: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const FormInput: React.FC<Props> = ({
  teamFormData,
  placeholder,
  type,
  accept,
  readonly,
  id,
  handleInput,
  defaultValue,
}) => {
  return (
    <>
      <label htmlFor={teamFormData}>{teamFormData}</label>
      <br />
      <input
        placeholder={placeholder}
        type={type}
        accept={accept}
        readOnly={readonly}
        id={teamFormData}
        name={teamFormData}
        onChange={handleInput}
        defaultValue={defaultValue}
        required={accept ? false : true}
      />
      <br />
    </>
  );
};

export default FormInput;
