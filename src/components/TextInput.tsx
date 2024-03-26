import React, { ChangeEvent } from 'react';

interface TextInputProps {
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  inputType?: string;
}

const TextInput = ({ value, name, onChange, required, inputType }: TextInputProps) => {
  return (
    <input
      type={inputType || "text"} 
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    />
  );
};

export default TextInput;
