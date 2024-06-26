import React from "react";
import { Purpose } from "../../constants";

interface Props<T> {
  arrayData: T[];
  handleMemberSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  purpose: Purpose;
  optionPreview: (t: T) => string;
  getKey: (t: T) => string;
  getValue: (t: T) => string;
  originalValue: string;
}

const FormSelect = <T,>({
  arrayData,
  handleMemberSelect,
  purpose,
  optionPreview,
  getKey,
  getValue,
  originalValue,
}: Props<T>) => {
  return (
    <div>
      <label htmlFor={purpose}>Choose a {purpose}:</label>
      <br />
      <select
        name={purpose}
        id={purpose}
        onChange={handleMemberSelect}
        defaultValue={originalValue}
        required
      >
        <option value="">--Please choose an option--</option>
        {arrayData.map((arrayDataItem) => (
          <option value={getValue(arrayDataItem)} key={getKey(arrayDataItem)}>
            {optionPreview(arrayDataItem)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
