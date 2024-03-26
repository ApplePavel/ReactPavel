import React, { ChangeEvent } from 'react';

interface SelectInputProps {
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = (props: SelectInputProps) => (
  <select
    value={props.value}
    name={props.name}
    onChange={props.onChange}
  >
    <option value="">Выберите</option>
    <option value="male">Мужской</option>
    <option value="female">Женский</option>
  </select>
);

export default SelectInput;
