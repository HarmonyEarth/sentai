import React from 'react';

interface Props {
  teamFormData: string;
  placeholder: string;
  type: string;
  accept: string;
  readonly: boolean;
  id: string;
  handleInput(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}

const FormInput: React.FC<Props> = ({
  teamFormData,
  placeholder,
  type,
  accept,
  readonly,
  id,
  handleInput,
  value,
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
        required={!readonly}
        value={value}
      />
      <br />
    </>
  );
};

export default FormInput;