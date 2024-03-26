import React, { ChangeEvent } from 'react';

interface NumberInputProps {
  value: number;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = (props: NumberInputProps) => (
  <input
    value={props.value}
    name={props.name}
    type="number"
    onChange={props.onChange}
  />
);

export default NumberInput;